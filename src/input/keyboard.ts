import type { Controller } from '../sim/game';
import { emptyInput, type HitType, type PlayerInput } from '../types';
import { clamp } from '../util';

const ACTION_KEYS: Record<string, HitType> = {
  KeyQ: 'bump',
  KeyJ: 'bump',
  KeyE: 'set',
  KeyK: 'set',
  KeyF: 'spike',
  KeyL: 'spike',
  KeyX: 'serve',
  KeyI: 'serve',
};

const PREVENT = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);

/**
 * Keyboard + mouse controller. Stand-in for the future one-hand MediaPipe controller:
 *   hand position (movement joystick)  ->  WASD
 *   hand offset at contact (aim)       ->  mouse position (or arrow keys)
 *   gesture (which hit)                ->  Q/E/F/X   (or J/K/L/I)
 * Swap this class for a HandController that produces the same PlayerInput and nothing else changes.
 */
export class HumanController implements Controller {
  private keys = new Set<string>();
  private queued: HitType | null = null;
  private dive = false;
  private mouse = { x: 0, y: 0 }; // -1..1, up = deeper
  private aim = { x: 0, d: 0 };

  constructor() {
    window.addEventListener('keydown', this.onDown);
    window.addEventListener('keyup', this.onUp);
    window.addEventListener('blur', () => this.keys.clear());
    window.addEventListener('focusin', () => { this.keys.clear(); this.queued = null; this.dive = false; });
    window.addEventListener('mousemove', this.onMouse);
  }

  private onDown = (e: KeyboardEvent): void => {
    const target = e.target;
    if (target instanceof HTMLElement && (target.isContentEditable || target.closest('input, textarea, select, button'))) return;
    if (PREVENT.has(e.code)) e.preventDefault();
    if (e.repeat) return;
    this.keys.add(e.code);
    if (e.code === 'KeyC') this.dive = true;
    const t = ACTION_KEYS[e.code];
    if (t) this.queued = t;
  };

  private onUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code);
  };

  private onMouse = (e: MouseEvent): void => {
    // Slightly amplified so you don't need to reach the very edge of the window for full aim.
    this.mouse.x = clamp(((e.clientX / window.innerWidth) * 2 - 1) * 1.25, -1, 1);
    this.mouse.y = clamp((1 - (e.clientY / window.innerHeight) * 2) * 1.25, -1, 1);
  };

  update(dt: number): PlayerInput {
    const k = this.keys;
    const input = emptyInput();
    input.moveX = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    input.moveF = (k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0);
    input.jump = k.has('Space');
    input.dive = this.dive;
    this.dive = false;
    input.action = this.queued;
    this.queued = null;

    // Aim: arrow keys override the mouse while held.
    const ax = (k.has('ArrowRight') ? 1 : 0) - (k.has('ArrowLeft') ? 1 : 0);
    const ad = (k.has('ArrowUp') ? 1 : 0) - (k.has('ArrowDown') ? 1 : 0);
    const arrows = ax !== 0 || ad !== 0;
    const tx = arrows ? ax : this.mouse.x;
    const td = arrows ? ad : this.mouse.y;
    // Low-pass filter, like smoothing a noisy hand position. TODO(hand): average the last ~200 ms at contact.
    const f = Math.min(1, dt * 14);
    this.aim.x += (tx - this.aim.x) * f;
    this.aim.d += (td - this.aim.d) * f;
    input.aim = { x: this.aim.x, d: this.aim.d, power: k.has('ShiftLeft') || k.has('ShiftRight') ? 1 : 0.6 };
    return input;
  }
}
