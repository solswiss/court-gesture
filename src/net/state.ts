import { validAppearance } from '../appearance';
import { BALL, COURT, PLAYER_BOUNDS } from '../config';
import { predictAt } from '../sim/ball';
import { HIT_SPECS } from '../sim/hit';
import type { Game, Controller } from '../sim/game';
import type { Player } from '../sim/player';
import type { GameEvent, PlayerInput } from '../types';
import { emptyInput } from '../types';
import { clamp } from '../util';

export function snapshot(game: Game, seq: number, events: GameEvent[] = []) {
  return {
    kind: 'snapshot' as const, seq, time: game.time, phase: game.phase, phaseTimer: game.phaseTimer,
    scores: [...game.scores] as [number, number], winner: game.winner,
    lastPointWinner: game.lastPointWinner, message: game.message, server: game.server.id,
    touchCount: game.touchCount, lastTouchSide: game.lastTouchSide, hitSerial: game.hitSerial,
    ball: { pos: { ...game.ball.pos }, vel: { ...game.ball.vel }, mode: game.ball.mode, landing: game.ball.landing && { ...game.ball.landing } },
    players: game.players.map(p => ({
      color: p.color, pants: p.pants, pantsColor: p.pantsColor, pos: { ...p.pos }, y: p.y, vx: p.vx, vz: p.vz, vy: p.vy,
      grounded: p.grounded, diveTime: p.diveTime, diveCooldown: p.diveCooldown, swing: p.swing, aim: { ...p.aim }, lastType: p.lastType,
      pending: p.pending && { ...p.pending }, lastTouchTime: p.lastTouchTime,
    })), events,
  };
}
export type Snapshot = ReturnType<typeof snapshot>;

/** Validate wire data before it can mutate the render replica. */
export function isSnapshot(value: unknown, count: number): value is Snapshot {
  if (!value || typeof value !== 'object') return false;
  const s = value as Snapshot;
  const finite = (...v: unknown[]) => v.every(n => typeof n === 'number' && Number.isFinite(n));
  const vec = (v: unknown) => !!v && typeof v === 'object' && finite((v as { x: number }).x, (v as { y: number }).y, (v as { z: number }).z);
  const side = (n: unknown) => n === 1 || n === -1;
  const hit = (n: unknown) => typeof n === 'string' && ['bump', 'set', 'spike', 'serve'].includes(n);
  if (s.kind !== 'snapshot' || !Number.isSafeInteger(s.seq) || !finite(s.time, s.phaseTimer, s.hitSerial, s.touchCount)
    || !['ready', 'toss', 'rally', 'point', 'over'].includes(s.phase)
    || !Number.isInteger(s.server) || s.server < 0 || s.server >= count
    || !Array.isArray(s.scores) || s.scores.length !== 2 || !s.scores.every(n => Number.isInteger(n) && n >= 0)
    || !(s.winner === null || side(s.winner)) || !(s.lastPointWinner === null || side(s.lastPointWinner))
    || !(s.lastTouchSide === 0 || side(s.lastTouchSide)) || typeof s.message !== 'string'
    || !s.ball || !vec(s.ball.pos) || !vec(s.ball.vel) || !['held', 'live', 'dead'].includes(s.ball.mode)
    || !(s.ball.landing === null || (s.ball.landing && finite(s.ball.landing.x, s.ball.landing.z)))
    || !Array.isArray(s.players) || s.players.length !== count || !Array.isArray(s.events) || s.events.length > 64) return false;
  if (!s.players.every(p => p && validAppearance(p) && p.pos && finite(p.pos.x, p.pos.z, p.y, p.vx, p.vz, p.vy, p.swing, p.lastTouchTime, p.diveTime, p.diveCooldown)
    && typeof p.grounded === 'boolean' && p.aim && finite(p.aim.x, p.aim.d, p.aim.power) && hit(p.lastType)
    && (p.pending === null || (p.pending && hit(p.pending.type) && finite(p.pending.age))))) return false;
  return s.events.every(e => {
    if (!e || typeof e !== 'object') return false;
    switch (e.kind) {
      case 'hit': return Number.isInteger(e.player) && e.player >= 0 && e.player < count && hit(e.type)
        && finite(e.quality, e.dist, e.T) && (e.clearance === null || finite(e.clearance) || e.clearance === Infinity)
        && typeof e.over === 'boolean' && vec(e.target);
      case 'land': return finite(e.x, e.z) && typeof e.inCourt === 'boolean';
      case 'point': return side(e.winner) && typeof e.reason === 'string';
      case 'over': return side(e.winner);
      case 'toss': case 'retoss': case 'net': return true;
      default: return false;
    }
  });
}

export function applySnapshot(game: Game, s: Snapshot): void {
  game.time = s.time;
  game.phase = s.phase;
  game.phaseTimer = s.phaseTimer;
  game.scores = [...s.scores];
  game.winner = s.winner;
  game.lastPointWinner = s.lastPointWinner;
  game.message = s.message;
  game.server = game.players[s.server];
  game.touchCount = s.touchCount;
  game.lastTouchSide = s.lastTouchSide;
  game.hitSerial = s.hitSerial;
  Object.assign(game.ball, { pos: { ...s.ball.pos }, vel: { ...s.ball.vel }, mode: s.ball.mode, landing: s.ball.landing && { ...s.ball.landing } });
  s.players.forEach((p, i) => Object.assign(game.players[i], p, { pos: { ...p.pos }, aim: { ...p.aim }, pending: p.pending && { ...p.pending } }));
}

/** Render two snapshots on a delayed local clock; never advance the client simulation. */
export class SnapshotBuffer {
  private frames: { arrived: number; state: Snapshot }[] = [];
  private eventFrames: { seq: number; events: GameEvent[] }[] = [];
  private displayed = -1;
  takeEvents(): GameEvent[] {
    const due = this.eventFrames.filter(f => f.seq <= this.displayed).flatMap(f => f.events);
    this.eventFrames = this.eventFrames.filter(f => f.seq > this.displayed);
    return due;
  }
  push(state: Snapshot, arrived: number): boolean {
    if (state.seq <= (this.frames.at(-1)?.state.seq ?? -1)) return false;
    this.frames.push({ arrived, state });
    this.eventFrames.push({ seq: state.seq, events: state.events });
    if (this.frames.length > 12) this.frames.shift();
    return true;
  }
  render(game: Game, now: number): void {
    if (!this.frames.length) return;
    const target = now - 100;
    while (this.frames.length > 2 && this.frames[1].arrived <= target) this.frames.shift();
    const a = this.frames[0];
    const b = this.frames[1] ?? a;
    const t = a === b ? 0 : clamp((target - a.arrived) / (b.arrived - a.arrived), 0, 1);
    if (t >= 1) { applySnapshot(game, b.state); this.displayed = b.state.seq; return; }
    applySnapshot(game, a.state);
    this.displayed = a.state.seq;
    // Contacts, retosses and phase changes are discontinuities, not paths to blend across.
    if (a.state.phase !== b.state.phase || a.state.hitSerial !== b.state.hitSerial) return;
    const mix = (x: number, y: number) => x + (y - x) * t;
    for (const key of ['x', 'y', 'z'] as const) game.ball.pos[key] = mix(a.state.ball.pos[key], b.state.ball.pos[key]);
    game.players.forEach((p, i) => {
      p.pos.x = mix(a.state.players[i].pos.x, b.state.players[i].pos.x);
      p.pos.z = mix(a.state.players[i].pos.z, b.state.players[i].pos.z);
      p.y = mix(a.state.players[i].y, b.state.players[i].y);
      p.swing = mix(a.state.players[i].swing, b.state.players[i].swing);
    });
  }
}

export function sanitizeInput(value: unknown): PlayerInput | undefined {
  if (!value || typeof value !== 'object') return;
  const v = value as PlayerInput;
  if (!v.aim || ![v.moveX, v.moveF, v.aim.x, v.aim.d, v.aim.power].every(n => typeof n === 'number' && Number.isFinite(n))) return;
  if ((v.dive !== undefined && typeof v.dive !== 'boolean') || typeof v.jump !== 'boolean' || (v.action !== null && !['bump', 'set', 'spike', 'serve'].includes(v.action))) return;
  return { moveX: clamp(v.moveX, -1, 1), moveF: clamp(v.moveF, -1, 1), jump: v.jump, dive: v.dive ?? false, action: v.action,
    aim: { x: clamp(v.aim.x, -1, 1), d: clamp(v.aim.d, -1, 1), power: clamp(v.aim.power, 0, 1) } };
}

/** Continuous movement expires; each action is consumed once, even across many host ticks. */
export class RemoteController implements Controller {
  private input = emptyInput();
  private actions: NonNullable<PlayerInput['action']>[] = [];
  private dive = false;
  private seq = -1;
  private received = -Infinity;
  receive(seq: number, value: unknown, now: number): boolean {
    const input = sanitizeInput(value);
    if (!Number.isSafeInteger(seq) || seq <= this.seq || !input) return false;
    this.seq = seq;
    this.received = now;
    this.input = input;
    this.dive ||= !!input.dive;
    if (input.action && this.actions.length < 4) this.actions.push(input.action);
    return true;
  }
  update(): PlayerInput {
    if (performance.now() - this.received > 300) { this.actions = []; this.dive = false; return emptyInput(); }
    const dive = this.dive; this.dive = false;
    return { ...this.input, dive, aim: { ...this.input.aim }, action: this.actions.shift() ?? null };
  }
}

const receivers = new WeakMap<Game, Map<number, { flight: string; player: number }>>();

/** Pick a receiver once per incoming flight, then alternate for team touches. */
export function controlledPlayerId(game: Game, humans: boolean[], owner: number): number {
  if (game.players.length !== 4) return owner;
  const teammate = (owner + 2) % 4;
  if (humans[teammate]) return owner;
  if ((game.phase === 'ready' || game.phase === 'toss') && game.server.side === game.players[owner].side) return game.server.id;
  const a = game.players[owner], b = game.players[teammate];
  if (game.phase === 'rally' && game.lastTouchSide !== a.side) {
    let team = receivers.get(game);
    if (!team) { team = new Map(); receivers.set(game, team); }
    const flight = `${game.hitSerial}:${game.lastTouchSide}:${a.lastTouchTime}:${b.lastTouchTime}`;
    const previous = team.get(a.side);
    if (previous?.flight === flight) return previous.player;
    const landing = predictAt(game.ball.pos, game.ball.vel, BALL.radius);
    const distance = (p: Player) => Math.hypot(p.pos.x - landing.x, p.pos.z - landing.z);
    const player = distance(b) < distance(a) ? teammate : owner;
    team.set(a.side, { flight, player });
    return player;
  }
  if (a.lastTouchTime === b.lastTouchTime) return owner;
  return a.lastTouchTime > b.lastTouchTime ? teammate : owner;
}

/** Shared teams auto-position; the human supplies timing, hit type and aim. */
function teamMovement(game: Game, player: Player, active: boolean, input: PlayerInput): PlayerInput {
  if (game.phase !== 'rally') return input;
  const landing = predictAt(game.ball.pos, game.ball.vel, BALL.radius);
  let x = player.id < 2 ? -1.8 : 1.8;
  let depth: number = COURT.halfLen - 3.5;
  if (active && landing.z * player.side > 0) {
    const touches = game.lastTouchSide === player.side ? game.touchCount : 0;
    const type = input.action ?? player.pending?.type ?? (touches === 0 ? 'bump' : touches === 1 ? 'set' : 'spike');
    const spec = HIT_SPECS[type];
    const contact = predictAt(game.ball.pos, game.ball.vel, player.y + spec.height);
    x = clamp(contact.x, -COURT.halfW + 0.3, COURT.halfW - 0.3);
    depth = clamp(contact.z * player.side + spec.forward, PLAYER_BOUNDS.netGap, COURT.halfLen - 0.3);
  }
  const dx = x - player.pos.x, dz = depth - player.pos.z * player.side;
  const distance = Math.hypot(dx, dz);
  const speed = distance <= 0.12 ? 0 : Math.min(1, distance / 0.6);
  return { ...input, moveX: distance ? dx / distance * speed : 0, moveF: distance ? -dz / distance * speed : 0 };
}

/** Slots retain CPU controllers so a departing player is replaced immediately. */
export class SlotController implements Controller {
  human?: Controller;
  teamSlots?: SlotController[];
  private contactController?: Controller;
  constructor(readonly cpu: Controller) {}
  update(dt: number, game: Game, player: Player): PlayerInput {
    const slots = this.teamSlots;
    const teammate = slots?.[(player.id + 2) % 4];
    const owner = this.human ? player.id : teammate?.human ? (player.id + 2) % 4 : -1;
    if (game.players.length === 4 && slots && owner >= 0) {
      const active = controlledPlayerId(game, slots.map(s => !!s.human), owner);
      if (active === player.id) {
        this.contactController = slots[owner].human;
        return teamMovement(game, player, true, this.contactController!.update(dt, game, player));
      }
      this.contactController = undefined;
      player.pending = null;
      player.prevContactDist = Infinity;
      return teamMovement(game, player, false, emptyInput());
    }
    this.contactController = this.human ?? this.cpu;
    return this.contactController.update(dt, game, player);
  }
  sampleContactAim() { return this.contactController?.sampleContactAim?.(); }
}
