import { BALL, COURT, PLAYER_BOUNDS } from '../config';
import { predictAt } from '../sim/ball';
import type { Game } from '../sim/game';
import type { Player } from '../sim/player';
import type { Aim } from '../types';
import { clamp } from '../util';

/** Adaptive low pass: suppress stationary jitter, follow deliberate motion quickly. */
export class OneEuroFilter {
  private time?: number;
  private raw = 0;
  private value = 0;
  private derivative = 0;

  reset(): void { this.time = undefined; }

  update(value: number, now: number): number {
    if (this.time === undefined) {
      this.time = now;
      this.raw = this.value = value;
      this.derivative = 0;
      return value;
    }
    const dt = Math.max(0.001, (now - this.time) / 1000);
    const alpha = (cutoff: number): number => 1 / (1 + 1 / (2 * Math.PI * cutoff * dt));
    this.derivative += alpha(1) * ((value - this.raw) / dt - this.derivative);
    this.value += alpha(1.2 + 0.3 * Math.abs(this.derivative)) * (value - this.value);
    this.raw = value;
    this.time = now;
    return this.value;
  }
}

export const handAxis = (offset: number): number =>
  Math.abs(offset) <= 0.04 ? 0 : Math.sign(offset) * clamp((Math.abs(offset) - 0.04) / 0.22, 0, 1);

/** Camera-time history, independent of the simulation's fixed-step clock. */
export class AimHistory {
  private samples: { time: number; aim: Aim }[] = [];
  clear(): void { this.samples = []; }
  push(time: number, aim: Aim): void {
    this.samples.push({ time, aim: { ...aim } });
    this.prune(time);
  }
  private prune(now: number): void {
    this.samples = this.samples.filter(sample => sample.time >= now - 200);
  }
  sample(now: number): Aim | undefined {
    this.prune(now);
    if (!this.samples.length) return undefined;
    const sum = this.samples.reduce((a, s) => ({
      x: a.x + s.aim.x, d: a.d + s.aim.d, power: a.power + s.aim.power,
    }), { x: 0, d: 0, power: 0 });
    const n = this.samples.length;
    return { x: sum.x / n, d: sum.d / n, power: sum.power / n };
  }
}

/** Chase the predicted landing depth. */
export function autoDepth(game: Game, player: Player): number {
  if (game.phase !== 'rally') return 0;
  const landing = predictAt(game.ball.pos, game.ball.vel, BALL.radius);
  const incoming = landing.z * player.side > 0;
  const depth = incoming
    ? clamp(landing.z * player.side, PLAYER_BOUNDS.netGap, COURT.halfLen + PLAYER_BOUNDS.backMargin)
    : COURT.halfLen - 3.5;
  const error = depth - player.pos.z * player.side;
  return Math.abs(error) <= 0.12 ? 0 : -clamp(error / 0.6, -1, 1);
}

/** Track incoming balls automatically, independently of hand position or keys. */
export function autoLateral(game: Game, player: Player): number {
  if (game.phase !== 'rally') return 0;
  const landing = predictAt(game.ball.pos, game.ball.vel, BALL.radius);
  if (landing.z * player.side <= 0) return 0;
  const target = clamp(landing.x, -COURT.halfW - PLAYER_BOUNDS.xMargin, COURT.halfW + PLAYER_BOUNDS.xMargin);
  const error = target - player.pos.x;
  // Slow near the landing point to avoid oscillation across it.
  return Math.abs(error) <= 0.15 ? 0 : clamp(error / 0.8, -0.85, 0.85);
}
