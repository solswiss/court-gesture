import { BALL, NET } from '../config';
import type { Vec3 } from '../types';

export type BallMode = 'held' | 'live' | 'dead';

export interface StepResult {
  netHit: boolean;
  landed: boolean;
}

export class Ball {
  pos: Vec3 = { x: 0, y: 1, z: 0 };
  vel: Vec3 = { x: 0, y: 0, z: 0 };
  mode: BallMode = 'held';
  readonly radius = BALL.radius;
  /** Where the ball first touched the sand (set once per rally). */
  landing: { x: number; z: number } | null = null;

  reset(): void {
    this.mode = 'held';
    this.vel = { x: 0, y: 0, z: 0 };
    this.landing = null;
  }

  step(dt: number): StepResult {
    const res: StepResult = { netHit: false, landed: false };
    if (this.mode === 'held') return res;
    const p = this.pos;
    const v = this.vel;
    const r = this.radius;

    v.y -= BALL.gravity * dt;
    const x0 = p.x;
    const y0 = p.y;
    const z0 = p.z;
    p.x += v.x * dt;
    p.y += v.y * dt;
    p.z += v.z * dt;

    if (this.mode === 'live' && this.collideNet(x0, y0, z0)) res.netHit = true;

    if (p.y <= r) {
      p.y = r;
      if (v.y < 0) {
        if (this.mode === 'live') {
          this.mode = 'dead';
          this.landing = { x: p.x, z: p.z };
          res.landed = true;
        }
        v.y = -v.y * BALL.restitution;
        if (v.y < 1.2) v.y = 0;
        v.x *= 0.82;
        v.z *= 0.82;
      }
      if (v.y === 0) {
        const f = Math.max(0, 1 - 4 * dt); // rolling friction
        v.x *= f;
        v.z *= f;
      }
    }
    return res;
  }

  /**
   * Swept sphere-vs-net-plane test. The net is the plane z = 0 spanning |x| <= NET.halfW and
   * y <= NET.top. Returns true if the ball hit it (and bounces it back off the net).
   * Works even if the ball would tunnel through the plane in one step.
   */
  private collideNet(x0: number, y0: number, z0: number): boolean {
    const p = this.pos;
    const v = this.vel;
    const r = this.radius;
    const s = z0 >= 0 ? 1 : -1; // side the ball started the step on
    const dz = p.z - z0;
    if (s * dz >= 0) return false; // not moving toward the net
    if (s * p.z >= r) return false; // surface hasn't reached the plane yet
    // fraction of the step at which the ball surface touches the plane
    const t = Math.min(1, Math.max(0, (s * z0 - r) / (s * (z0 - p.z))));
    const xc = x0 + (p.x - x0) * t;
    const yc = y0 + (p.y - y0) * t;
    if (Math.abs(xc) > NET.halfW) return false; // went around the post
    if (yc > NET.top + r * 0.35) return false; // cleared the tape
    p.x = xc;
    p.y = yc;
    p.z = s * (r + 0.002);
    v.z = -v.z * 0.2;
    v.x *= 0.5;
    v.y *= 0.6;
    return true;
  }
}

/** Time until a ball launched from height y0 with vertical speed vy is at height y (descending crossing). */
export function timeToHeight(y0: number, vy: number, y: number): number | null {
  const g = BALL.gravity;
  const disc = vy * vy + 2 * g * (y0 - y);
  if (disc < 0) return null;
  return (vy + Math.sqrt(disc)) / g;
}

/** Predict where the ball is when it next descends through height y (ignores the net). */
export function predictAt(pos: Vec3, vel: Vec3, y: number): { t: number; x: number; z: number } {
  let t = timeToHeight(pos.y, vel.y, y);
  if (t === null) t = vel.y / BALL.gravity; // never reaches y: use the apex
  if (t < 0) t = 0;
  return { t, x: pos.x + vel.x * t, z: pos.z + vel.z * t };
}

/** Sample the flight path (no net, no bounce) for debug drawing. Stops at the ground. */
export function sampleTrajectory(pos: Vec3, vel: Vec3, step: number, count: number): Vec3[] {
  const out: Vec3[] = [];
  const g = BALL.gravity;
  for (let i = 0; i < count; i++) {
    const t = i * step;
    const y = pos.y + vel.y * t - 0.5 * g * t * t;
    if (y <= BALL.radius) {
      out.push({ x: pos.x + vel.x * t, y: BALL.radius, z: pos.z + vel.z * t });
      break;
    }
    out.push({ x: pos.x + vel.x * t, y, z: pos.z + vel.z * t });
  }
  return out;
}
