import { BALL, COURT } from '../config';
import { predictAt } from '../sim/ball';
import type { Controller, Game } from '../sim/game';
import { HIT_SPECS, idealPoint } from '../sim/hit';
import type { Player } from '../sim/player';
import { emptyInput, type HitType, type PlayerInput } from '../types';
import { clamp, dist3, other } from '../util';

export type CpuSkillName = 'easy' | 'normal' | 'hard';

interface Skill {
  speed: number; // fraction of full run speed
  think: number; // seconds between re-planning where to stand (reaction time)
  serveDelay: number;
  overChance: number; // chance to send a free ball over instead of building a 3-touch attack
  noise: number; // aim error (0..1)
  reach: number; // fraction of hit reach it commits at
  power: number;
  posNoise: number; // meters of error in where it chooses to stand
  miss: number; // chance per touch that it fumbles and doesn't swing
  sloppy: number; // chance per touch that it plays the ball from a bad spot (low contact quality)
}

const SKILLS: Record<CpuSkillName, Skill> = {
  easy: { speed: 0.65, think: 0.3, serveDelay: 1.4, overChance: 0.6, noise: 0.5, reach: 0.75, power: 0.45, posNoise: 0.9, miss: 0.18, sloppy: 0.35 },
  normal: { speed: 0.85, think: 0.18, serveDelay: 1.0, overChance: 0.3, noise: 0.3, reach: 0.9, power: 0.6, posNoise: 0.55, miss: 0.08, sloppy: 0.2 },
  hard: { speed: 1.0, think: 0.1, serveDelay: 0.7, overChance: 0.1, noise: 0.15, reach: 1.0, power: 0.8, posNoise: 0.25, miss: 0.03, sloppy: 0.08 },
};

/**
 * Simple opponent in the spirit of Wii Tennis: runs to where the ball will be, plays bump -> set -> spike
 * (or sometimes pops a free ball over), and aims away from you. Also doubles as a teammate in 2v2 later.
 */
export class CpuController implements Controller {
  private skill: Skill;
  private serial = -1;
  private roll = false;
  private fumble = false;
  private offX = 0; // this touch's positioning error (kept for the whole touch so it actually matters)
  private offZ = 0;
  private thinkT = 0;
  private serveT = 0;
  private tx = 0;
  private tz = 0;
  private serveAimX = 0;
  private serveAimD = 0.4;

  constructor(
    skill: CpuSkillName,
    private rng: () => number,
  ) {
    this.skill = SKILLS[skill];
  }

  update(dt: number, g: Game, me: Player): PlayerInput {
    const input = emptyInput();
    const sk = this.skill;
    const W = COURT.halfW;
    const L = COURT.halfLen;
    input.aim.power = sk.power;

    if (g.phase === 'ready') {
      if (g.server === me) {
        this.serveT += dt;
        if (this.serveT > sk.serveDelay) {
          this.serveT = 0;
          this.serveAimX = (this.rng() * 2 - 1) * 0.8;
          this.serveAimD = 0.2 + this.rng() * 0.7;
          input.action = 'serve';
        }
      } else {
        this.serveT = 0;
      }
      return input;
    }

    if (g.phase === 'toss') {
      if (g.server === me) {
        input.aim.x = this.serveAimX;
        input.aim.d = this.serveAimD;
        const b = g.ball;
        if (b.vel.y < 0 && b.pos.y < 2.9) input.action = 'serve';
      }
      return input;
    }

    if (g.phase !== 'rally') return input;

    const b = g.ball;
    if (g.hitSerial !== this.serial) {
      this.serial = g.hitSerial;
      this.roll = this.rng() < sk.overChance;
      this.fumble = this.rng() < sk.miss;
      const sloppy = this.rng() < sk.sloppy;
      const mag = sloppy ? 1.0 + this.rng() * 0.6 : this.rng() * sk.posNoise;
      const ang = this.rng() * Math.PI * 2;
      this.offX = Math.cos(ang) * mag;
      this.offZ = Math.sin(ang) * mag;
      this.thinkT = 0; // re-plan immediately after any hit
    }

    // What touch am I on, and what should I play?
    const mine = g.lastTouchSide === me.side;
    const n = mine ? g.touchCount : 0;
    let type: HitType = n === 0 ? 'bump' : n === 1 ? 'set' : 'spike';
    let over = false;
    if (n === 0 && this.roll) over = true; // bump it straight back over
    if (n === 1 && this.roll) {
      type = 'bump';
      over = true; // second touch goes over as a free ball
    }

    // Should I be playing this ball at all?
    const ground = predictAt(b.pos, b.vel, BALL.radius);
    const landsMySide = Math.sign(ground.z) === me.side;
    const out = Math.abs(ground.x) > W + 0.2 || Math.abs(ground.z) > L + 0.2;
    const active = landsMySide && !(out && !mine);

    const spec = HIT_SPECS[type];
    const hIdeal = type === 'bump' ? 1.0 : type === 'set' ? 3.0 : 3.3;

    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = sk.think;
      if (active) {
        const p = predictAt(b.pos, b.vel, hIdeal);
        this.tx = clamp(p.x + this.offX, -(W + 2), W + 2);
        this.tz = me.side * clamp(me.side * (p.z + this.offZ + me.side * spec.forward), 0.9, L + 3);
      } else {
        this.tx = 0;
        this.tz = me.side * (L - 3.5);
      }
    }

    // Only the closest teammate commits; the other covers its half of the court.
    const teammates = g.players.filter(p => p.side === me.side);
    const receiver = [...teammates].sort((a, c) => {
      const da = Math.hypot(a.pos.x - ground.x, a.pos.z - ground.z);
      const dc = Math.hypot(c.pos.x - ground.x, c.pos.z - ground.z);
      return da - dc || a.id - c.id;
    })[0];
    const covering = teammates.length > 1 && receiver !== me;
    if (covering) {
      this.tx = me.id < 2 ? -1.8 : 1.8;
      this.tz = me.side * (L - 3.5);
    }

    // Run toward the planned spot.
    const dx = this.tx - me.pos.x;
    const dz = this.tz - me.pos.z;
    const dd = Math.hypot(dx, dz);
    if (dd > 0.12) {
      const m = Math.min(1, dd / 0.6) * sk.speed;
      input.moveX = (dx / dd) * m;
      input.moveF = -me.side * (dz / dd) * m;
    }

    if (!active || covering) return input;

    // Third touch with the ball too low to attack: pop it over instead.
    let pressType = type;
    if (n >= 2 && b.pos.y < 2.3) {
      pressType = 'bump';
      over = true;
    }

    // Jump into a spike so contact happens high.
    if (pressType === 'spike' && me.grounded) {
      const t = predictAt(b.pos, b.vel, hIdeal).t;
      const hd = Math.hypot(b.pos.x - me.pos.x, b.pos.z - (me.pos.z - me.side * spec.forward));
      if (t < 0.32 && hd < 1.2) input.jump = true;
    }

    // Swing when the ball is in reach and on its way down.
    const ps = HIT_SPECS[pressType];
    const d = dist3(b.pos, idealPoint(me.actor, ps));
    if (!this.fumble && d < ps.reach * sk.reach && b.vel.y < 1.0) {
      input.action = pressType;
      const opp = g.player(other(me.side));
      const jitter = (this.rng() * 2 - 1) * sk.noise;
      if (over) {
        input.aim.x = clamp(-opp.pos.x / 3 + jitter, -0.9, 0.9);
        input.aim.d = pressType === 'bump' ? 0.65 + this.rng() * 0.3 : -0.2 + this.rng() * 0.9;
      } else if (pressType === 'set') {
        input.aim.x = clamp(-b.pos.x / 4, -0.4, 0.4);
        input.aim.d = 0.3;
      } else {
        input.aim.x = clamp(-b.pos.x / 3, -0.6, 0.6);
        input.aim.d = -0.1 + this.rng() * 0.3;
      }
    }
    return input;
  }
}
