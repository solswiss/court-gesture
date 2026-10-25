import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';
import type { Controller, Game } from '../sim/game';
import type { Player } from '../sim/player';
import { emptyInput, type Aim, type HitType, type PlayerInput } from '../types';
import { clamp } from '../util';
import { autoLateral, autoDepth, AimHistory, handAxis, OneEuroFilter } from './hand-signal';

const GESTURES: Record<string, { label: string; action: HitType | null }> = {
  Closed_Fist: { label: 'Closed fist', action: 'bump' },
  Thumb_Up: { label: 'Thumbs up', action: 'spike' },
  Pointing_Up: { label: 'Pointing up', action: 'set' },
  Open_Palm: { label: 'Open palm', action: null },
};

/** Calibrated gesture and shot-aim controller with keyboard fallback. */
export class HandController implements Controller {
  //private fallback = new HumanController();
  private recognizer?: GestureRecognizer;
  private stream?: MediaStream;
  private active = false;
  private frame = 0;
  private lastVideoTime = -1;
  private lastScan = 0;
  private candidate = '';
  private candidateFrames = 0;
  private stable = '';
  private queued: HitType | null = null;
  private move = { x: 0, f: 0 };
  private center?: { x: number; y: number; scale: number };
  private calibration: { x: number; y: number; scale: number }[] = [];
  private filters = [new OneEuroFilter(), new OneEuroFilter(), new OneEuroFilter()];
  private history = new AimHistory();
  private handAim: Aim = { x: 0, d: 0, power: 0.6 };
  private tracking = false;
  private keyboardAim = false;
  private side = 1;
  private depth = document.createElement('div');
  private calibrate = document.createElement('button');
  private video = document.createElement('video');
  private status = document.createElement('div');
  private result = document.createElement('div');
  private button = document.createElement('button');
  private buttonPanel = document.createElement('div');

  constructor(parent: HTMLElement) {
    const panel = document.createElement('section');
    panel.className = 'hand-panel';
    panel.setAttribute('aria-label', 'Hand gesture controls');
    this.video.autoplay = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.result.setAttribute('role', 'status');
    this.status.textContent = 'Enable camera to use gestures.';
    this.result.textContent = 'Gesture: —';
    this.button.textContent = 'Enable camera';
    this.button.onclick = () => this.active ? this.stop() : void this.start();
    this.calibrate.textContent = 'Recalibrate';
    this.calibrate.disabled = true;
    this.calibrate.onclick = () => this.resetDepth();
    this.depth.textContent = 'Depth: waiting for camera';
    this.buttonPanel.className = 'hand-button-panel';
    this.buttonPanel.append(this.button, this.calibrate);
    const help = document.createElement('small');
    panel.append(this.video, this.result, this.status, this.depth, this.buttonPanel, help);
    parent.append(panel);
    window.addEventListener('pagehide', () => this.stop());
  }

  private async start(): Promise<void> {
    this.button.disabled = true;
    this.status.textContent = 'Loading hand recognition…';
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('Camera requires localhost or HTTPS.');
      if (!this.recognizer) {
        const files = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.32/wasm');
        this.recognizer = await GestureRecognizer.createFromOptions(files, {
          baseOptions: { modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task' },
          runningMode: 'VIDEO', numHands: 1,
        });
      }
      this.status.textContent = 'Allow camera access in your browser…';
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 }, audio: false });
      this.video.srcObject = this.stream;
      await this.video.play();
      this.resetDepth();
      this.calibrate.disabled = false;
      this.active = true;
      this.lastVideoTime = -1;
      this.button.textContent = 'Stop camera';
      this.status.textContent = 'Show one hand to the camera.';
      this.scan();
    } catch (error) {
      this.stop();
      this.status.textContent = `Camera unavailable: ${error instanceof Error ? error.message : String(error)} Try enabling again.`;
    } finally {
      this.button.disabled = false;
    }
  }

  private stop(): void {
    this.active = false;
    cancelAnimationFrame(this.frame);
    this.stream?.getTracks().forEach(track => track.stop());
    this.video.srcObject = null;
    this.clear();
    this.result.textContent = 'Gesture: —';
    this.status.textContent = 'Camera off. Enable camera to use gestures.';
    this.button.textContent = 'Enable camera';
    this.calibrate.disabled = true;
    this.resetDepth();
    this.depth.textContent = 'Depth: waiting for camera';
  }

  private resetDepth(): void {
    this.center = undefined;
    this.calibration = [];
    this.clear();
    this.depth.textContent = 'Hold hand at a comfortable center to calibrate…';
  }

  private clear(): void {
    this.tracking = false;
    this.move = { x: 0, f: 0 };
    this.queued = null;
    this.candidate = this.stable = '';
    this.candidateFrames = 0;
    this.history.clear();
    this.filters.forEach(filter => filter.reset());
  }

  private scan = (): void => {
    if (!this.active) return;
    const now = performance.now();
    try {
      if (this.video.readyState >= 2 && this.video.currentTime !== this.lastVideoTime && now - this.lastScan >= 50) {
        this.lastVideoTime = this.video.currentTime;
        const result = this.recognizer!.recognizeForVideo(this.video, now);
        this.lastScan = now;
        const hand = result.landmarks[0];
        const category = result.gestures[0]?.[0];
        if (!hand) {
          this.clear();
          this.result.textContent = 'Gesture: No hand detected';
          this.status.textContent = 'Show one hand to the camera.';
          if (!this.center) this.calibration = [];
          this.depth.textContent = 'No hand detected — show one hand to the camera';
        } else {
          const x = 1 - (hand[0].x + hand[9].x) / 2;
          const y = (hand[0].y + hand[9].y) / 2;
          const aspect = this.video.videoWidth / this.video.videoHeight;
          // Wrist to middle-finger MCP, in image space; never use landmark z.
          const scale = Math.hypot((hand[0].x - hand[9].x) * aspect, hand[0].y - hand[9].y);
          if (!this.center) {
            if (scale <= 0.01) this.calibration = [];
            else {
              const first = this.calibration[0];
              if (first && (Math.hypot(x - first.x, y - first.y) > 0.035 || Math.abs(scale / first.scale - 1) > 0.15)) this.calibration = [];
              this.calibration.push({ x, y, scale });
            }
            this.depth.textContent = `Hold steady to calibrate… ${this.calibration.length}/12`;
            if (this.calibration.length < 12) {
              this.frame = requestAnimationFrame(this.scan);
              return;
            }
            this.center = this.calibration.reduce((a, s) => ({ x: a.x + s.x / 12, y: a.y + s.y / 12, scale: a.scale + s.scale / 12 }), { x: 0, y: 0, scale: 0 });
          }
          const fx = this.filters[0].update(x, now);
          const ratio = this.filters[2].update(scale / this.center.scale, now);
          this.move = { x: handAxis(fx - this.center.x), f: 0 };
          this.handAim = { x: this.move.x, d: this.move.f, power: clamp(0.6 + (ratio - 1) * 1.5, 0, 1) };
          this.history.push(now, this.handAim);
          this.tracking = true;
          this.depth.textContent = `Calibrated · hand scale ${ratio.toFixed(2)}× · power ${Math.round(this.handAim.power * 100)}%`;
          const name = category && category.score >= 0.65 ? category.categoryName : '';
          const gesture = GESTURES[name];
          this.result.textContent = `Gesture: ${gesture?.label ?? 'Unknown'}${category ? ` · ${Math.round(category.score * 100)}%` : ''}`;
          this.status.textContent = `Move: ${gesture ? gesture.action ?? 'Neutral' : 'None'} · ${this.stable === name ? 'Ready' : 'Confirming…'}`;
          if (name !== this.candidate) {
            this.candidate = name;
            this.candidateFrames = 0;
          }
          this.candidateFrames++;
          if (this.candidateFrames >= 3 && name !== this.stable) {
            this.stable = name;
            this.queued = gesture?.action ?? null;
          }
        }
      }
    } catch (error) {
      this.stop();
      this.status.textContent = `Tracking stopped: ${error instanceof Error ? error.message : String(error)}. Try enabling again.`;
      return;
    }
    this.frame = requestAnimationFrame(this.scan);
  };

  update(dt: number, game: Game, player: Player): PlayerInput {
    this.side = player.side;
    //const keyboard = this.fallback.update(dt);
    // keyboard.moveX = autoLateral(game, player);
    // keyboard.aim.x *= player.side;
    // if (!this.active) return keyboard;
    if (performance.now() - this.lastScan > 350) this.clear();
    // if (!this.tracking) return keyboard;
    const input = emptyInput();
    input.moveX = autoLateral(game, player);
    input.aim = { ...this.handAim, x: this.handAim.x * player.side };
    // input.jump = keyboard.jump;
    input.action = this.queued;
    this.queued = null;
    if (!game.tutorial && (game.phase === 'ready' || game.phase === 'toss') && game.server === player && input.action === 'spike') input.action = 'serve';
    if (input.action) this.keyboardAim = false;
    // if (keyboard.action) {
    //   input.action = keyboard.action;
    //   this.keyboardAim = true;
    // }
    // if (this.keyboardAim) input.aim = keyboard.aim;
    input.moveF = autoDepth(game, player);
    return input;
  }

  /** Called by the simulation only when contact actually happens. */
  sampleContactAim(): Aim | undefined {
    if (!this.active || !this.tracking || this.keyboardAim) return undefined;
    const aim = this.history.sample(performance.now());
    return aim ? { ...aim, x: aim.x * this.side } : undefined;
  }
}
