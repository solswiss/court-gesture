import * as THREE from 'three';

const SHEET = 'apple-crab.png';
const FRAMES = 5;
const FRAME_WIDTH = 139; // px per frame; height is read from image
const FPS = 15; // fixed animation speed

/** Screen-space route rendered inside Three.js so gameplay can cover the crab. */
export class CrabVisitor {
  private texture: THREE.Texture;
  private sprite: THREE.Sprite;
  private frameAspect = 1; // frame height / frame width, set once the sheet has loaded
  private ready = false;
  private wait = 3;
  private elapsed = 0;
  private duration = 3;
  private direction = 1;
  private startBottom = 18;
  private endBottom = 18;
  private active = false;
  private failed = false;
  private animTime = 0;
  private reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  constructor(private parent: HTMLElement, scene: THREE.Scene, private camera: THREE.PerspectiveCamera) {
    this.texture = new THREE.TextureLoader().load(
      `${import.meta.env.BASE_URL}${SHEET}`,
      (texture) => {
        this.frameAspect = texture.image.height / FRAME_WIDTH;
        this.ready = true;
      },
      undefined,
      () => { this.failed = true; },
    );
    this.texture.colorSpace = THREE.SRGBColorSpace;
    // No mipmaps / linear filtering only, so neighbouring frames can't bleed into each other at the edges.
    this.texture.generateMipmaps = false;
    this.texture.minFilter = this.texture.magFilter = THREE.LinearFilter;
    // Show one frame at a time: the texture is a window 1/FRAMES of the sheet wide.
    this.texture.repeat.x = 1 / FRAMES;
    this.sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.texture, transparent: true, depthWrite: false, depthTest: false,
    }));
    this.sprite.renderOrder = 0.5; // After beach/water, before players, net and ball.
    this.sprite.visible = false;
    scene.add(this.sprite);
  }

  update(dt: number): void {
    if (this.failed || this.reducedMotion.matches) {
      this.sprite.visible = false;
      this.active = false;
      return;
    }
    if (!this.active) {
      // Idle between visits, and never start before the sheet has loaded.
      this.wait -= dt;
      if (this.wait > 0 || !this.ready) { this.sprite.visible = false; return; }
      this.active = true;
      this.elapsed = 0;
      this.animTime = 0;
      this.duration = 2.5 + Math.random() * 1.5;
      this.direction = Math.random() < 0.5 ? 1 : -1;
      this.startBottom = 18 + Math.random() * 20;
      const diagonal = Math.random() < 0.7;
      const slope = (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 10);
      this.endBottom = diagonal ? Math.max(8, Math.min(50, this.startBottom + slope)) : this.startBottom;
    }
    this.elapsed += dt;
    if (this.elapsed >= this.duration) {
      // Finished crossing the screen: hide and wait before the next visit.
      this.active = false;
      this.wait = 4 + Math.random() * 6;
      this.sprite.visible = false;
      return;
    }

    // Pick the current frame from elapsed time, looping through all frames at a constant rate.
    this.animTime += dt;
    const frame = Math.floor(this.animTime * FPS) % FRAMES;
    // Moving right uses the frame as drawn; moving left mirrors it (negative repeat flips the image horizontally).
    if (this.direction === 1) {
      this.texture.repeat.x = 1 / FRAMES;
      this.texture.offset.x = frame / FRAMES;
    } else {
      this.texture.repeat.x = -1 / FRAMES;
      this.texture.offset.x = (frame + 1) / FRAMES;
    }

    const size = Math.max(17, Math.min(this.parent.clientWidth * 0.05, 140));
    const travel = this.elapsed / this.duration;
    const progress = this.direction === 1 ? travel : 1 - travel;
    const width = this.parent.clientWidth || 1;
    const screenHeight = this.parent.clientHeight || 1;
    const left = -size + progress * (width + size);
    const bottom = (this.startBottom + (this.endBottom - this.startBottom) * travel) / 100 * screenHeight;
    const displayHeight = size * this.frameAspect;
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