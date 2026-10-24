// All tunables live here. Units: meters, seconds.
// World axes: +x = screen right, +y = up, +z = toward the camera.
// The net is the plane z = 0. Side +1 is the near court (z > 0), side -1 the far court.

export const COURT = {
  halfW: 4, // court is 8 m wide (x in [-4, 4])
  halfLen: 7, // and 14 m long (z in [-7, 7]); 7 m per side
} as const;

export const NET = {
  top: 2.43,
  halfW: COURT.halfW + 0.6, // net spans past the sidelines out to the posts
} as const;

export const BALL = {
  radius: 0.24, // a bit bigger than real so it reads well on screen
  gravity: 14, // stronger than 9.8 for a snappier, punchier arc
  restitution: 0.55,
} as const;

export const PLAYER = {
  speed: 6,
  accel: 45,
  airAccelMul: 0.35,
  jumpV: 6.8,
  gravity: 20,
} as const;

export const PLAYER_BOUNDS = {
  xMargin: 3.5, // how far outside the sidelines a player may run
  netGap: 0.7, // closest a player may stand to the net
  backMargin: 4, // how far behind the end line a player may run
} as const;

export const RULES = {
  winScore: 11,
  cap: 15, // hard cap if the game goes long (win by 2 until here)
  maxTouches: 3,
  pointDelay: 1.8,
  actionWindow: 0.35, // how long a pressed action stays "armed" waiting for the ball
  touchCooldown: 0.3, // min time between touches by the same player
  tossV: 6.3, // serve toss launch speed
  netMargin: 0.12, // min clearance over the tape for a hit (scaled up by quality)
} as const;

export const SIM_DT = 1 / 120;
