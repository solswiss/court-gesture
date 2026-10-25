import { COURT, PLAYER_BOUNDS, RULES } from '../config';
import { makeRng } from '../rng';
import type { Aim, GameEvent, HitType, Phase, PlayerInput, Side } from '../types';
import { dist3, other } from '../util';
import { Ball } from './ball';
import { aimTarget, contactQuality, HIT_SPECS, idealPoint, resolveHit, type Target } from './hit';
import { Player } from './player';

/** Anything that can drive a player: keyboard, CPU, (later) MediaPipe hand, network peer. */
export interface Controller {
  update(dt: number, game: Game, me: Player): PlayerInput;
  sampleContactAim?(): Aim | undefined;
}

/**
 * The whole game simulation. No DOM, no Three.js: this can run headless or on a network host.
 * Flow: ready (ball held) -> toss -> rally -> point -> ready ... -> over
 */
export class Game {
  readonly ball = new Ball();
  readonly players: Player[];
  readonly rng: () => number;
  viewPlayerId = 0; // Local viewpoint; does not affect simulation rules.

  phase: Phase = 'ready';
  phaseTimer = 0;
  time = 0;
  scores: [number, number] = [0, 0]; // [near side (+1), far side (-1)]
  winner: Side | null = null;
  lastPointWinner: Side | null = null;
  message = '';
  server: Player;

  // touch tracking for the side that last hit the ball
  touchCount = 0;
  lastTouchSide: Side | 0 = 0;
  hitSerial = 0; // increments on every hit (lets AIs know when to re-plan)

  private netSinceHit = false;
  private events: GameEvent[] = [];

  constructor(
    private controllers: Controller[],
    seed = 1,
  ) {
    this.rng = makeRng(seed);
    if (controllers.length !== 2 && controllers.length !== 4) throw new Error('Game needs two or four controllers');
    this.players = controllers.map((_, id) => new Player(id, id % 2 === 0 ? 1 : -1, id % 2 === 0 ? 0xffaa00 : 0x00aaff));
    this.server = this.players[0];
    this.resetForServe(true);
  }

  player(side: Side): Player {
    return this.players[side === 1 ? 0 : 1];
  }

  score(side: Side): number {
    return this.scores[side === 1 ? 0 : 1];
  }

  drainEvents(): GameEvent[] {
    const e = this.events;
    this.events = [];
    return e;
  }

  restart(): void {
    console.debug('restarting')
    this.scores = [0, 0];
    this.winner = null;
    this.lastPointWinner = null;
    this.server = this.players[0];
    this.resetForServe(true);
  }

  update(dt: number): void {
    this.time += dt;

    for (let i = 0; i < this.players.length; i++) {
      const pl = this.players[i];
      const input = this.controllers[i].update(dt, this, pl);
      pl.step(dt, input, this.minDepth(pl));
    }
    for (const pl of this.players) this.processAction(pl);

    if (this.phase === 'ready') this.holdBall();
    else this.stepBall(dt);

    if (this.phase === 'point') {
      this.phaseTimer -= dt;
      if (this.phaseTimer <= 0) {
        if (this.winner) {
          this.phase = 'over';
          this.events.push({ kind: 'over', winner: this.winner });
        } else {
          this.resetForServe(true);
        }
      }
    }
  }

  /** The hit type a UI should preview for this player right now. */
  previewType(pl: Player): HitType {
    if (this.phase === 'ready' || this.phase === 'toss') return 'serve';
    return pl.lastType === 'serve' ? 'bump' : pl.lastType;
  }

  /** Intended (error-free) target for a hit by `pl` if it happened now. For the aim reticle. */
  previewTarget(pl: Player, type: HitType): Target {
    return aimTarget(type, pl.actor, this.ball.pos, pl.aim);
  }

  // ---------------------------------------------------------------- internals

  private minDepth(pl: Player): number {
    const serving = pl === this.server && (this.phase === 'ready' || this.phase === 'toss');
    return serving ? COURT.halfLen + 0.3 : PLAYER_BOUNDS.netGap;
  }

  private holdBall(): void {
    const s = this.server;
    this.ball.pos = { x: s.pos.x, y: s.y + 1.7, z: s.pos.z - s.side * 0.3 };
    this.ball.vel = { x: 0, y: 0, z: 0 };
  }

  private toss(): void {
    this.ball.mode = 'live';
    this.ball.vel = { x: 0, y: RULES.tossV, z: 0 };
    this.phase = 'toss';
    this.events.push({ kind: 'toss' });
  }

  private resetForServe(teleport: boolean): void {
    const srv = this.server;
    for (const pl of this.players) {
      if (teleport) {
        const x = this.players.length === 4 ? (pl.id < 2 ? -1.6 : 1.6) : 0;
        pl.teleport(x, pl.side * (pl === srv ? COURT.halfLen + 1.3 : COURT.halfLen - 3));
      }
      pl.pending = null;
      pl.prevContactDist = Infinity;
      pl.lastTouchTime = -10;
    }
    this.ball.reset();
    this.holdBall();
    this.phase = 'ready';
    this.touchCount = 0;
    this.lastTouchSide = 0;
    this.netSinceHit = false;
    this.message = '';
  }

  private processAction(pl: Player): void {
    const act = pl.pending;
    if (!act) return;

    switch (this.phase) {
      case 'ready':
        if (pl === this.server && act.type === 'serve') this.toss();
        pl.pending = null;
        return;
      case 'toss':
        if (pl !== this.server || act.type !== 'serve') return;
        break;
      case 'rally':
        if (act.type === 'serve') {
          pl.pending = null;
          return;
        }
        break;
      default:
        pl.pending = null;
        return;
    }

    // A team gets one contact per cooldown, even when two players overlap the ball.
    if (this.players.some(teammate => teammate.side === pl.side && this.time - teammate.lastTouchTime < RULES.touchCooldown)) return;

    const spec = HIT_SPECS[act.type];
    const d = dist3(this.ball.pos, idealPoint(pl.actor, spec));
    const prev = pl.prevContactDist;
    pl.prevContactDist = d <= spec.reach ? d : Infinity;
    if (d > spec.reach) return;

    // Hit when the ball is in the sweet spot, or has just passed its closest approach,
    // or the action window is about to expire. This gets the best contact the ball offers.
    const receding = d > prev + 1e-4;
    const lastChance = act.age >= RULES.actionWindow - 0.02;
    if (d <= spec.sweet || receding || lastChance) this.doHit(pl, act.type, act.age, d);
  }

  private doHit(pl: Player, type: HitType, age: number, d: number): void {
    const spec = HIT_SPECS[type];
    const q = contactQuality(d, spec, age);
    const contactAim = this.controllers[this.players.indexOf(pl)].sampleContactAim?.();
    if (contactAim) pl.aim = { ...contactAim };
    const res = resolveHit({
      type,
      actor: pl.actor,
      ballPos: { ...this.ball.pos },
      ballVel: { ...this.ball.vel },
      aim: pl.aim,
      quality: q,
      rng: this.rng,
    });
    this.ball.vel = res.vel;
    pl.pending = null;
    pl.prevContactDist = Infinity;
    pl.lastTouchTime = this.time;
    pl.swing = 0.28;

    if (this.lastTouchSide !== pl.side) this.touchCount = 0;
    this.touchCount++;
    this.lastTouchSide = pl.side;
    this.hitSerial++;
    this.netSinceHit = false;
    if (this.phase === 'toss') this.phase = 'rally';

    this.events.push({
      kind: 'hit',
      player: pl.id,
      type,
      quality: q,
      dist: d,
      T: res.T,
      clearance: res.clearance,
      over: res.over,
      target: res.target,
    });

    if (this.touchCount > RULES.maxTouches) this.award(other(pl.side), 'Too many touches');
  }

  private stepBall(dt: number): void {
    const r = this.ball.step(dt);
    if (r.netHit) {
      this.netSinceHit = true;
      this.events.push({ kind: 'net' });
    }
    if (r.landed) this.onLanded();
  }

  private onLanded(): void {
    const { x, z } = this.ball.landing!;
    const slack = this.ball.radius * 0.6; // touching the line counts as in
    const inCourt = Math.abs(x) <= COURT.halfW + slack && Math.abs(z) <= COURT.halfLen + slack;
    this.events.push({ kind: 'land', x, z, inCourt });

    if (this.phase === 'toss') {
      // dropped the toss without hitting it: no penalty, toss again
      this.resetForServe(false);
      this.events.push({ kind: 'retoss' });
      return;
    }
    if (this.phase !== 'rally') return;

    const zSide: Side = z >= 0 ? 1 : -1;
    const lastSide = this.lastTouchSide === 0 ? other(zSide) : this.lastTouchSide;
    if (inCourt) {
      // ball landed in: the side whose court it hit loses the point
      this.award(other(zSide), this.netSinceHit && zSide === lastSide ? 'Net!' : 'In!');
    } else {
      // ball landed out: the side that touched it last loses
      this.award(other(lastSide), 'Out!');
    }
  }

  private award(winner: Side, reason: string): void {
    if (this.phase !== 'rally' && this.phase !== 'toss') return;
    this.scores[winner === 1 ? 0 : 1]++;
    this.server = this.player(winner); // rally scoring: winner serves next
    this.lastPointWinner = winner;
    this.phase = 'point';
    this.phaseTimer = RULES.pointDelay;
    this.message = reason;

    const [a, b] = this.scores;
    const hi = Math.max(a, b);
    if ((hi >= RULES.winScore && Math.abs(a - b) >= 2) || hi >= RULES.cap) {
      this.winner = a > b ? 1 : -1;
    }
    this.events.push({ kind: 'point', winner, reason });
  }
}
