import { BALL, COURT, NET, RULES } from '../config';
import type { Aim, HitType, Side, Vec3 } from '../types';
import { clamp, lerp, smoothstep } from '../util';

/**
 * A hit has two independent parts:
 *   WHAT  - the gesture/key picks the HitType (bump, set, spike, serve)
 *   WHERE - a continuous Aim (x, depth, power) picks the target on the court
 * The solver then turns (contact point, target, flight time T) into a launch velocity,
 * so the ball always lands where aimed (modulo contact-quality error) and clears the net.
 */

export interface HitSpec {
  forward: number; // ideal contact point is this far in front of the player (toward net)
  height: number; // ...and this high above the player's feet
  reach: number; // ball must be within this distance of the ideal point to be hit
  sweet: number; // inside this distance = full quality
  tMin: number; // flight time at full power (fast)
  tMax: number; // flight time at zero power (slow)
  tCap: number; // longest flight time the net-clearance search may stretch to
}

export const HIT_SPECS: Record<HitType, HitSpec> = {
  bump: { forward: 0.45, height: 1.5, reach: 2, sweet: 2, tMin: 1.0, tMax: 1.5, tCap: 2.2 },
  set: { forward: 0.2, height: 3, reach: 2, sweet: 2, tMin: 0.85, tMax: 1.25, tCap: 1.8 },
  spike: { forward: 0.3, height: 3, reach: 2, sweet: 2, tMin: 0.35, tMax: 0.65, tCap: 1.0 },
  serve: { forward: 0.3, height: 3, reach: 2, sweet: 2, tMin: 0.8, tMax: 1.4, tCap: 1.9 },
};

export interface Actor {
  x: number;
  y: number; // height above sand (jumping)
  z: number;
  side: Side;
}

export function idealPoint(a: Actor, spec: HitSpec): Vec3 {
  return { x: a.x, y: a.y + spec.height, z: a.z - a.side * spec.forward };
}

/** 0..1. Distance from the ideal point is the big factor; pressing way too early costs a little. */
export function contactQuality(dist: number, spec: HitSpec, age: number): number {
  const qd = 1 - smoothstep(spec.sweet, spec.reach, dist);
  const qt = 1 - 0.35 * clamp(age / RULES.actionWindow, 0, 1);
  return clamp(qd * qt, 0.05, 1);
}

export interface Target extends Vec3 {
  over: boolean; // true if the target is on the opponent's side
}

/**
 * Intended target for a hit, before contact-quality error.
 * Contact-relative bias (scheme A): where the ball is relative to your body nudges the angle.
 * Aim (scheme B): hand/mouse offset moves the target. Net effect: sensible with no aim, precise with aim.
 */
export function aimTarget(type: HitType, actor: Actor, ballPos: Vec3, aim: Aim): Target {
  const W = COURT.halfW;
  const L = COURT.halfLen;
  const side = actor.side;
  const lat = aim.x * (W - 0.5);
  const bias = clamp((ballPos.x - actor.x) / 1.5, -1, 1) * 1.2;
  const u = (aim.d + 1) / 2; // 0..1
  const ground = BALL.radius;
  let x = 0;
  let y = 0;
  let z = 0;
  let over = false;
  switch (type) {
    case 'bump':
      if (aim.d > 0.6) {
        // pushing the aim forward turns a bump into a free ball over the net
        over = true;
        x = lat + bias;
        z = -side * lerp(2.5, L - 0.7, (aim.d - 0.6) / 0.4);
        y = ground;
      } else {
        // default: pass to your own side, near the net, high enough to set
        x = lat * 0.8 + bias;
        z = side * lerp(3.8, 1.8, (aim.d + 1) / 1.6);
        y = 2.4;
      }
      break;
    case 'set':
      x = lat * 0.8 + bias * 0.5;
      z = side * lerp(2.4, 1.0, u);
      y = 3.2;
      break;
    case 'spike':
      over = true;
      x = lat + bias * 0.8;
      z = -side * lerp(1.6, L - 0.5, u);
      y = ground;
      break;
    case 'serve':
      over = true;
      x = lat;
      z = -side * lerp(3.0, L - 0.7, u);
      y = ground;
      break;
  }
  x = clamp(x, -(W - 0.3), W - 0.3); // intended targets stay in; error is what throws balls out
  return { x, y, z, over };
}

/** Launch velocity that takes the ball from `from` to `to` in exactly T seconds under gravity g. */
export function solveVelocity(from: Vec3, to: Vec3, T: number, g: number): Vec3 {
  return {
    x: (to.x - from.x) / T,
    y: (to.y - from.y + 0.5 * g * T * T) / T,
    z: (to.z - from.z) / T,
  };
}

/**
 * Height of the ball's lowest point above the net tape when it crosses z = 0.
 * Positive = clears. Infinity if the ball never crosses the plane or passes outside the posts.
 */
export function netClearance(from: Vec3, v: Vec3): number {
  const g = BALL.gravity;
  if (v.z === 0) return Infinity;
  const tc = -from.z / v.z;
  if (tc <= 0) return Infinity;
  const xc = from.x + v.x * tc;
  if (Math.abs(xc) > NET.halfW) return Infinity;
  const yc = from.y + v.y * tc - 0.5 * g * tc * tc;
  return yc - BALL.radius - NET.top;
}

const HARD_CLEAR = 0.05; // last-resort minimum clearance (m)
const HARD_T_CAP = 2.6; // longest lob the net check may fall back to (s)

export interface HitInput {
  type: HitType;
  actor: Actor;
  ballPos: Vec3;
  ballVel: Vec3;
  aim: Aim;
  quality: number; // 0..1 from contactQuality
  rng: () => number;
}

export interface HitResult {
  vel: Vec3;
  target: Vec3; // where it was actually sent (after error)
  intended: Target; // where it was aimed
  T: number;
  clearance: number | null; // null when the hit stays on one side
  over: boolean;
  quality: number;
}

export function resolveHit(inp: HitInput): HitResult {
  const g = BALL.gravity;
  const spec = HIT_SPECS[inp.type];
  const q = inp.quality;
  const intended = aimTarget(inp.type, inp.actor, inp.ballPos, inp.aim);

  // Contact error: bad contact scatters the landing point.
  const err = Math.pow(1 - q, 1.5) * 4.0;
  const ang = inp.rng() * Math.PI * 2;
  const mag = err * (0.4 + 0.6 * inp.rng());
  const target: Vec3 = {
    x: intended.x + Math.cos(ang) * mag,
    y: intended.y,
    z: intended.z + Math.sin(ang) * mag,
  };

  const from = inp.ballPos;
  const power = clamp(inp.aim.power, 0, 1);
  const T0 = lerp(spec.tMax, spec.tMin, power) * (1 + (1 - q) * 0.25);
  const crosses = from.z * target.z < 0;

  let T = T0;
  let vel = solveVelocity(from, target, T, g);
  let clearance: number | null = null;

  if (crosses) {
    // Net check: stretch the flight time (higher arc) until the ball clears the tape.
    // Players should not net the ball by accident; better contact earns a more comfortable margin.
    const need = RULES.netMargin + 0.25 * q;
    let best = { T, vel, clr: netClearance(from, vel) };
    if (best.clr < need) {
      // Phase 1: stretch up to this hit's normal cap looking for a comfortable margin.
      for (let t = T0 + 0.04; t <= spec.tCap + 1e-6; t += 0.04) {
        const v = solveVelocity(from, target, t, g);
        const c = netClearance(from, v);
        if (c > best.clr) best = { T: t, vel: v, clr: c };
        if (c >= need) break;
      }
      // Phase 2 (last resort): the ball is too low/close to attack flat. Turn it into a lob
      // rather than netting it, so a cleanly struck ball never hits the tape.
      for (let t = spec.tCap + 0.04; best.clr < HARD_CLEAR && t <= HARD_T_CAP; t += 0.05) {
        const v = solveVelocity(from, target, t, g);
        const c = netClearance(from, v);
        if (c > best.clr) best = { T: t, vel: v, clr: c };
      }
    }
    T = best.T;
    vel = best.vel;
    clearance = best.clr;
  }

  // Mishits: very poor contact pops the ball back up/away instead of obeying the aim.
  const w = smoothstep(0, 0.45, q);
  if (w < 1) {
    const refl: Vec3 = {
      x: inp.ballVel.x * 0.3,
      y: Math.max(2.5, Math.abs(inp.ballVel.y) * 0.35),
      z: -inp.ballVel.z * 0.35,
    };
    vel = {
      x: lerp(refl.x, vel.x, w),
      y: lerp(refl.y, vel.y, w),
      z: lerp(refl.z, vel.z, w),
    };
  }

  return { vel, target, intended, T, clearance, over: intended.over, quality: q };
}
