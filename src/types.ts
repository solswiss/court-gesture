export type Side = 1 | -1; // +1 = near court (z > 0, toward camera), -1 = far court
export type HitType = 'bump' | 'set' | 'spike' | 'serve';
export type Phase = 'ready' | 'toss' | 'rally' | 'point' | 'over';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/**
 * Aim = the "where does it go" part of a hit, separate from "which hit" (the gesture).
 * Later, MediaPipe hand offset will drive x/d; for now the mouse or arrow keys do.
 *   x: -1..1  left..right (world x)
 *   d: -1..1  short/close-to-net .. deep/far
 *   power: 0..1  scales flight time (more power = faster, flatter ball)
 */
export interface Aim {
  x: number;
  d: number;
  power: number;
}

/** What any controller (keyboard, CPU, later: hand tracking, network) hands to the sim each tick. */
export interface PlayerInput {
  moveX: number; // -1..1 world x
  moveF: number; // -1..1 toward the net (+) / away from it (-)
  jump: boolean;
  dive?: boolean; // edge-triggered lunge; optional for older controllers
  action: HitType | null; // edge-triggered: set only on the tick it is pressed
  aim: Aim;
}

export const emptyInput = (): PlayerInput => ({
  moveX: 0,
  moveF: 0,
  jump: false,
  dive: false,
  action: null,
  aim: { x: 0, d: 0, power: 0.6 },
});

export type GameEvent =
  | {
      kind: 'hit';
      player: number;
      type: HitType;
      quality: number;
      dist: number;
      T: number;
      clearance: number | null;
      over: boolean;
      target: Vec3;
    }
  | { kind: 'toss' }
  | { kind: 'retoss' }
  | { kind: 'net' }
  | { kind: 'land'; x: number; z: number; inCourt: boolean }
  | { kind: 'point'; winner: Side; reason: string }
  | { kind: 'over'; winner: Side };
