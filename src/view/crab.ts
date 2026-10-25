import * as THREE from 'three';

/** Screen-space route rendered inside Three.js so gameplay can cover the crab. */
export class CrabVisitor {
  private video = document.createElement('video');
  private canvas = document.createElement('canvas');
  private context: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;
  private sprite: THREE.Sprite;
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

  constructor(private parent: HTMLElement, scene: THREE.Scene, private camera: THREE.PerspectiveCamera) {
    this.canvas.width = 256;
    this.canvas.height = 256;
    this.context = this.canvas.getContext('2d', { willReadFrequently: true })!;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.wrapS = THREE.RepeatWrapping;
    this.sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.texture, transparent: true, depthWrite: false, depthTest: false,
    }));
    this.sprite.renderOrder = 0.5; // After beach/water, before players, net and ball.
    this.sprite.visible = false;
    scene.add(this.sprite);
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
      this.sprite.visible = false;
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
      this.play();
    }
    if (!this.playing) return;
    this.elapsed += dt;
    if (this.elapsed >= this.duration) {
      this.active = false;
      this.wait = 12 + Math.random() * 16;
      this.sprite.visible = false;
      this.video.pause();
      this.playing = false;
      return;
    }
    const size = Math.max(17, Math.min(this.parent.clientWidth * 0.02, 29));
    const travel = this.elapsed / this.duration;
    const progress = this.direction === 1 ? travel : 1 - travel;
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
    this.texture.needsUpdate = true;
    this.texture.repeat.x = this.direction;
    this.texture.offset.x = this.direction < 0 ? 1 : 0;
    const width = this.parent.clientWidth || 1;
    const screenHeight = this.parent.clientHeight || 1;
    const left = -size + progress * (width + size);
    const bottom = (this.startBottom + (this.endBottom - this.startBottom) * travel) / 100 * screenHeight;
    const displayHeight = size * height / 256;
    this.camera.updateMatrixWorld();
    const center = new THREE.Vector3((left + size / 2) / width * 2 - 1, (bottom + displayHeight / 2) / screenHeight * 2 - 1, 0.5);
    const right = center.clone(); right.x += size / width * 2;
    const top = center.clone(); top.y += displayHeight / screenHeight * 2;
    center.unproject(this.camera); right.unproject(this.camera); top.unproject(this.camera);
    this.sprite.position.copy(center);
    this.sprite.scale.set(center.distanceTo(right), center.distanceTo(top), 1);
    this.sprite.visible = true;
  }
}
