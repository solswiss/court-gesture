import type { Side, Vec3 } from './types';

export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
export const smoothstep = (a: number, b: number, x: number): number => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const approach = (cur: number, target: number, maxDelta: number): number =>
  cur < target ? Math.min(cur + maxDelta, target) : Math.max(cur - maxDelta, target);
export const dist3 = (a: Vec3, b: Vec3): number => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
export const sideOfZ = (z: number): Side => (z >= 0 ? 1 : -1);
export const other = (s: Side): Side => (s === 1 ? -1 : 1);
