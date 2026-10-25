import type { Pants } from '../appearance';
import { COURT, PLAYER, PLAYER_BOUNDS, RULES } from '../config';
import type { Aim, HitType, PlayerInput, Side } from '../types';
import { approach, clamp } from '../util';
import type { Actor } from './hit';

export interface PendingAction {
  type: HitType;
  age: number;
}

export class Player {
  pos = { x: 0, z: 0 };
  y = 0; // height above sand
  vx = 0;
  vz = 0;
  vy = 0;
  grounded = true;
  /** An armed action waiting for the ball to get in reach (cleared on hit or after actionWindow). */
  pending: PendingAction | null = null;
  prevContactDist = Infinity;
  lastTouchTime = -10;
  swing = 0; // animation timer for the view
  aim: Aim = { x: 0, d: 0, power: 0.6 };
  pants: Pants = 'shorts';
  pantsColor = 0x183849;
  lastType: HitType = 'bump';

  constructor(
    readonly id: number,
    readonly side: Side,
    public color: number
  ) {}

  get actor(): Actor {
    return { x: this.pos.x, y: this.y, z: this.pos.z, side: this.side };
  }

  teleport(x: number, z: number): void {
    this.pos.x = x;
    this.pos.z = z;
    this.vx = 0;
    this.vz = 0;
    this.y = 0;
    this.vy = 0;
    this.grounded = true;
  }

  /** minDepth: closest allowed distance to the net (bigger while serving: stay behind the end line). */
  step(dt: number, input: PlayerInput, minDepth: number): void {
    // --- movement ---
    let mx = clamp(input.moveX, -1, 1);
    let mf = clamp(input.moveF, -1, 1);
    const mag = Math.hypot(mx, mf);
    if (mag > 1) {
      mx /= mag;
      mf /= mag;
    }
    const tx = mx * PLAYER.speed;
    const tz = -this.side * mf * PLAYER.speed; // "forward" = toward the net
    const acc = (this.grounded ? PLAYER.accel : PLAYER.accel * PLAYER.airAccelMul) * dt;
    this.vx = approach(this.vx, tx, acc);
    this.vz = approach(this.vz, tz, acc);
    this.pos.x += this.vx * dt;
    this.pos.z += this.vz * dt;

    // --- jump ---
    if (input.jump && this.grounded) {
      this.vy = PLAYER.jumpV;
      this.grounded = false;
    }
    if (!this.grounded) {
      this.vy -= PLAYER.gravity * dt;
      this.y += this.vy * dt;
      if (this.y <= 0) {
        this.y = 0;
        this.vy = 0;
        this.grounded = true;
      }
    }

    // --- action buffer ---
    if (input.action) {
      const fresh = !this.pending || this.pending.type !== input.action;
      this.pending = { type: input.action, age: 0 };
      if (fresh) {
        this.prevContactDist = Infinity;
        this.swing = 0.28;
      }
      this.lastType = input.action;
    } else if (this.pending) {
      this.pending.age += dt;
      if (this.pending.age > RULES.actionWindow) this.pending = null;
    }
    if (!this.pending) this.prevContactDist = Infinity;

    this.aim = { ...input.aim };
    this.swing = Math.max(0, this.swing - dt);

    // --- bounds ---
    this.pos.x = clamp(
      this.pos.x,
      -(COURT.halfW + PLAYER_BOUNDS.xMargin),
      COURT.halfW + PLAYER_BOUNDS.xMargin,
    );
    const depth = clamp(this.side * this.pos.z, minDepth, COURT.halfLen + PLAYER_BOUNDS.backMargin);
    this.pos.z = this.side * depth;
  }
}
