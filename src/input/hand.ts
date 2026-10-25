import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';
import { COURT, PLAYER_BOUNDS } from '../config';
import { predictAt } from '../sim/ball';
import { HIT_SPECS } from '../sim/hit';
import type { Controller, Game } from '../sim/game';
import type { Player } from '../sim/player';
import { emptyInput, type HitType, type PlayerInput } from '../types';
import { clamp } from '../util';
import { HumanController } from './keyboard';

const GESTURES: Record<string, { label: string; action: HitType | null }> = {
  Closed_Fist: { label: 'Closed fist', action: 'bump' },
  Thumb_Up: { label: 'Thumbs up', action: 'spike' },
  Pointing_Up: { label: 'Pointing up', action: 'set' },
  Open_Palm: { label: 'Open palm', action: null },
};

/** Auto-position for the ball; hand scale controls running speed and gestures trigger hits. */
export class HandController implements Controller {
  private fallback = new HumanController();
  private recognizer?: GestureRecognizer;
  private stream?: MediaStream;
  private active = false;
  private frame = 0;
  private lastVideoTime = -1;
  private lastScan = 0;
  private candidate = '';
  private candidateSince = 0;
  private stable = '';
  private queued: HitType | null = null;
  private move = { x: 0, f: 0 };
  private chaseSpeed = 0;
  private smoothSpeed = 0;
  private neutralScale = 0;
  private scaleSamples: number[] = [];
  private depth = document.createElement('div');
  private calibrate = document.createElement('button');
  private smooth = { x: 0, f: 0 };
  private video = document.createElement('video');
  private status = document.createElement('div');
  private result = document.createElement('div');
  private button = document.createElement('button');
  private buttonPanel = document.createElement('div');

  constructor(parent: HTMLElement) {
    const panel = document.createElement('section');
    panel.className = 'hand-panel';
    panel.setAttribute('aria-label', 'Hand gesture controls');
    const title = document.createElement('strong');
    title.textContent = 'HAND CONTROLS';
    this.video.autoplay = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.result.setAttribute('role', 'status');
    this.status.textContent = 'Enable camera to use gestures.';
    this.result.textContent = 'Gesture: —';
    this.button.textContent = 'Enable camera';
    this.button.onclick = () => this.active ? this.stop() : void this.start();
    this.calibrate.textContent = 'Recalibrate depth';
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
      this.status.textContent = `Camera unavailable: ${error instanceof Error ? error.message : String(error)} Keyboard controls still work. Try enabling again.`;
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
    this.status.textContent = 'Camera off. Keyboard controls active.';
    this.button.textContent = 'Enable camera';
    this.calibrate.disabled = true;
    this.resetDepth();
    this.depth.textContent = 'Depth: waiting for camera';
  }

  private resetDepth(): void {
    this.neutralScale = 0;
    this.scaleSamples = [];
    this.chaseSpeed = this.smoothSpeed = 0;
    this.depth.textContent = 'Depth: hold hand steady to calibrate…';
  }

  private clear(): void {
    this.chaseSpeed = this.smoothSpeed = 0;
    this.move = { x: 0, f: 0 };
    this.smooth = { x: 0, f: 0 };
    this.queued = null;
    this.candidate = this.stable = '';
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
          if (!this.neutralScale) this.scaleSamples = [];
          this.depth.textContent = 'Depth: no hand — movement stopped';
        } else {
          const x = 1 - (hand[0].x + hand[9].x) / 2;
          // Palm bones stay visible in all four gestures, unlike fingertip bounds.
          // Correct normalized x distances for the camera aspect ratio.
          const aspect = this.video.videoWidth / this.video.videoHeight;
          const distance = (a: number, b: number): number => Math.hypot(
            (hand[a].x - hand[b].x) * aspect, hand[a].y - hand[b].y,
          );
          const scale = (distance(0, 9) + distance(5, 17)) / 2;
          if (!this.neutralScale && scale > 0.01) {
            this.scaleSamples.push(scale);
            if (this.scaleSamples.length >= 12) {
              const sorted = [...this.scaleSamples].sort((a, b) => a - b);
              this.neutralScale = (sorted[5] + sorted[6]) / 2;
            }
          }
          const scaleRatio = this.neutralScale ? scale / this.neutralScale : 1;
          // Neutral distance runs at 65%; moving closer/farther adjusts speed.
          // A small dead zone avoids speed fluctuations from landmark jitter.
          const delta = scaleRatio - 1;
          const adjustment = Math.sign(delta) * Math.max(0, Math.abs(delta) - 0.08);
          this.chaseSpeed = this.neutralScale ? clamp(0.65 + adjustment * 1.5, 0.2, 1) : 0;
          this.depth.textContent = this.neutralScale
            ? `Auto chase: ${Math.round(this.chaseSpeed * 100)}% speed · hand scale ${scaleRatio.toFixed(2)}×`
            : `Speed: hold steady… ${this.scaleSamples.length}/12`;
          const axis = (v: number): number => Math.abs(v) < 0.18 ? 0 : Math.sign(v) * clamp((Math.abs(v) - 0.18) / 0.65, 0, 1);
          this.move = { x: axis((x - 0.5) * 2), f: 0 };
          const name = category && category.score >= 0.65 ? category.categoryName : '';
          const gesture = GESTURES[name];
          this.result.textContent = `Gesture: ${gesture?.label ?? 'Unknown'}${category ? ` · ${Math.round(category.score * 100)}%` : ''}`;
          this.status.textContent = `Move: ${gesture ? gesture.action ?? 'Neutral' : 'None'} · ${this.stable === name ? 'Ready' : 'Confirming…'}`;
          if (name !== this.candidate) {
            this.candidate = name;
            this.candidateSince = now;
          }
          if (now - this.candidateSince >= 100 && name !== this.stable) {
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
    const keyboard = this.fallback.update(dt);
    if (!this.active) return keyboard;
    const input = emptyInput();
    if (performance.now() - this.lastScan > 350) this.clear();
    const f = Math.min(1, dt * 12);
    this.smooth.x += (this.move.x - this.smooth.x) * f;
    this.smooth.f += (this.move.f - this.smooth.f) * f;
    this.smoothSpeed += (this.chaseSpeed - this.smoothSpeed) * f;
    if (game.phase === 'rally' && this.smoothSpeed > 0) {
      // Stand behind the predicted contact point so the gesture's ideal point
      // meets the descending ball. Wait in a receiving position on other-side shots.
      const type = GESTURES[this.stable]?.action ?? (player.lastType === 'serve' ? 'bump' : player.lastType);
      const spec = HIT_SPECS[type];
      const target = predictAt(game.ball.pos, game.ball.vel, spec.height);
      const landing = predictAt(game.ball.pos, game.ball.vel, game.ball.radius);
      const incoming = landing.z * player.side > 0;
      const tx = incoming ? clamp(target.x, -COURT.halfW - PLAYER_BOUNDS.xMargin, COURT.halfW + PLAYER_BOUNDS.xMargin) : 0;
      const tz = incoming
        ? player.side * clamp(target.z * player.side + spec.forward, PLAYER_BOUNDS.netGap, COURT.halfLen + PLAYER_BOUNDS.backMargin)
        : player.side * (COURT.halfLen - 3.5);
      const dx = tx - player.pos.x;
      const dz = tz - player.pos.z;
      const distance = Math.hypot(dx, dz);
      if (distance > 0.12) {
        const speed = this.smoothSpeed * Math.min(1, distance / 0.6);
        input.moveX = dx / distance * speed;
        input.moveF = -player.side * dz / distance * speed;
      }
    }
    input.aim = { x: this.smooth.x, d: keyboard.aim.d, power: keyboard.aim.power };
    input.jump = keyboard.jump;
    input.action = this.queued;
    this.queued = null;
    if ((game.phase === 'ready' || game.phase === 'toss') && game.server === player && input.action === 'spike') input.action = 'serve';
    if (keyboard.action === 'serve') input.action = 'serve';
    return input;
  }
}
