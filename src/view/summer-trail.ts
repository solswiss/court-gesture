import * as THREE from 'three';

const TRAIL_LIFETIME = 0.5;
const TRAIL_SPACING = 0.24;

function texture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const c = canvas.getContext('2d')!;
  const fill = c.createRadialGradient(25, 23, 2, 32, 32, 27);
  fill.addColorStop(0, 'rgba(255,255,255,0.03)');
  fill.addColorStop(0.7, 'rgba(170,230,255,0.08)');
  fill.addColorStop(1, 'rgba(170,235,255,0.4)');
  c.beginPath(); c.arc(32, 32, 27, 0, Math.PI * 2);
  c.fillStyle = fill; c.fill();
  const rim = c.createLinearGradient(10, 8, 52, 57);
  rim.addColorStop(0, '#ffffff');
  rim.addColorStop(0.4, '#b9f3ff');
  rim.addColorStop(0.75, '#f5bfe8');
  rim.addColorStop(1, '#d8fff2');
  c.strokeStyle = rim; c.lineWidth = 2; c.stroke();
  c.beginPath(); c.arc(32, 32, 21, Math.PI * 1.12, Math.PI * 1.48);
  c.strokeStyle = 'rgba(255,255,255,0.95)'; c.lineWidth = 3;
  c.lineCap = 'round'; c.stroke();
  c.beginPath(); c.arc(45, 45, 2, 0, Math.PI * 2);
  c.fillStyle = 'rgba(255,255,255,0.65)'; c.fill();
  const result = new THREE.CanvasTexture(canvas);
  result.colorSpace = THREE.SRGBColorSpace;
  return result;
}

/** Pooled translucent soap bubbles that drift behind the volleyball. */
export class SummerTrail {
  private previous = new THREE.Vector3();
  private tracking = false;
  private remainder = 0;
  private cursor = 0;
  private particles: { sprite: THREE.Sprite; life: number; size: number }[] = [];

  constructor(scene: THREE.Scene) {
    const bubble = texture();
    for (let i = 0; i < 80; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: bubble,
        transparent: true, depthWrite: false, opacity: 0,
      }));
      sprite.visible = false;
      scene.add(sprite);
      this.particles.push({ sprite, life: 0, size: 0.15 + (i % 5) * 0.045 });
    }
  }

  update(dt: number, position: THREE.Vector3, live: boolean, reducedMotion: boolean): void {
    for (const p of this.particles) {
      p.life = reducedMotion ? 0 : Math.max(0, p.life - dt);
      p.sprite.visible = p.life > 0;
      if (p.life <= 0) continue;
      const fade = p.life / TRAIL_LIFETIME;
      p.sprite.material.opacity = Math.min(1, fade * 2) * 0.75;
      p.sprite.scale.setScalar(p.size * (1 + (1 - fade) * 0.35));
      p.sprite.position.y += dt * 0.35;
    }

    const distance = this.previous.distanceTo(position);
    if (!live || reducedMotion || !this.tracking || distance > 4) {
      this.previous.copy(position);
      this.tracking = live && !reducedMotion;
      this.remainder = 0;
      return;
    }
    if (dt <= 0 || distance < 0.0001) return;
    let offset = TRAIL_SPACING - this.remainder;
    for (; offset <= distance; offset += TRAIL_SPACING) {
      const p = this.particles[this.cursor++ % this.particles.length];
      p.sprite.position.lerpVectors(this.previous, position, offset / distance);
      p.sprite.position.x += Math.sin(this.cursor * 2.4) * 0.1;
      p.sprite.position.y += Math.cos(this.cursor * 2.4) * 0.1;
      p.life = TRAIL_LIFETIME;
      p.sprite.material.opacity = 0.75;
      p.sprite.scale.setScalar(p.size);
      p.sprite.visible = true;
    }
    this.remainder = (this.remainder + distance) % TRAIL_SPACING;
    this.previous.copy(position);
  }
}
