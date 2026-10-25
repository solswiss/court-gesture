/** Decorative video crab, kept separate from gameplay and collision logic. */
export class CrabVisitor {
  private video = document.createElement('video');
  private canvas = document.createElement('canvas');
  private context: CanvasRenderingContext2D;
  private wait = 3;
  private elapsed = 0;
  private duration = 3;
  private direction = 1;
  private startBottom = 18;
  private endBottom = 18;
  private active = false;
  private playing = false;
  private failed = false;
  private reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  constructor(private parent: HTMLElement) {
    this.canvas.width = 256;
    this.canvas.height = 256;
    this.context = this.canvas.getContext('2d', { willReadFrequently: true })!;
    this.canvas.setAttribute('aria-hidden', 'true');
    Object.assign(this.canvas.style, {
      position: 'absolute', width: 'clamp(17px, 2vw, 29px)', height: 'auto',
      pointerEvents: 'none', zIndex: '2', display: 'none',
    });
    parent.appendChild(this.canvas);
    this.video.src = '/crab.mp4';
    this.video.muted = true;
    this.video.loop = true;
    this.video.playbackRate = 2;
    this.video.playsInline = true;
    this.video.preload = 'auto';
    this.video.addEventListener('error', () => { this.failed = true; });
    parent.addEventListener('pointerdown', () => {
      if (this.active && !this.playing) this.play();
    });
    window.addEventListener('pagehide', () => this.video.pause());
  }

  private play(): void {
    this.playing = true;
    void this.video.play().catch(() => { this.playing = false; });
  }

  update(dt: number): void {
    if (this.failed || this.reducedMotion.matches) {
      this.canvas.style.display = 'none';
      this.video.pause();
      this.playing = false;
      this.active = false;
      return;
    }
    if (!this.active) {
      this.wait -= dt;
      if (this.wait > 0 || this.video.readyState < 2) return;
      this.active = true;
      this.elapsed = 0;
      this.duration = 2.5 + Math.random() * 1.5;
      this.direction = Math.random() < 0.5 ? 1 : -1;
      this.startBottom = 18 + Math.random() * 20;
      const diagonal = Math.random() < 0.7;
      const slope = (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 10);
      this.endBottom = diagonal ? Math.max(8, Math.min(50, this.startBottom + slope)) : this.startBottom;
      this.canvas.style.bottom = `${this.startBottom}%`;
      this.canvas.style.display = 'block';
      this.play();
    }
    if (!this.playing) return;
    this.elapsed += dt;
    if (this.elapsed >= this.duration) {
      this.active = false;
      this.wait = 12 + Math.random() * 16;
      this.canvas.style.display = 'none';
      this.video.pause();
      this.playing = false;
      return;
    }
    const size = this.canvas.getBoundingClientRect().width;
    const travel = this.elapsed / this.duration;
    const progress = this.direction === 1 ? travel : 1 - travel;
    this.canvas.style.left = `${-size + progress * (this.parent.clientWidth + size)}px`;
    this.canvas.style.bottom = `${this.startBottom + (this.endBottom - this.startBottom) * travel}%`;
    this.canvas.style.transform = `scaleX(${this.direction})`;
    if (this.video.readyState < 2) return;
    const height = Math.max(1, Math.round(256 * this.video.videoHeight / this.video.videoWidth));
    if (this.canvas.height !== height) this.canvas.height = height;
    this.context.drawImage(this.video, 0, 0, 256, height);
    // The clip has a white backdrop. Key it consistently on every frame;
    // corner sampling can switch off when the crab or compression changes a corner.
    const frame = this.context.getImageData(0, 0, 256, height);
    const data = frame.data;
    for (let i = 0; i < data.length; i += 4) {
      const difference = Math.hypot(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]);
      data[i + 3] = Math.round(255 * Math.min(1, Math.max(0, (difference - 50) / 40)));
    }
    this.context.putImageData(frame, 0, 0);
  }
}
