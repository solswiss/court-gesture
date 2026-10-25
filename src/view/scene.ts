import * as THREE from 'three';
import { BertFish } from './bert-fish';
import { BallTrail } from './ball-trail';
import { BALL, COURT, NET } from '../config';
import { sampleTrajectory } from '../sim/ball';
import type { Game } from '../sim/game';
import { HIT_SPECS, idealPoint } from '../sim/hit';
import type { Player } from '../sim/player';
import type { GameEvent, HitType } from '../types';

const SPEC_COLORS: Record<HitType, number> = { bump: 0x44dd88, set: 0xffdd44, spike: 0xff5544, serve: 0xbb66ff, restart: 0xffffff };
const PLAYER_COLORS = { 1: 0xfa5a50, [-1]: 0x3fbfff } as const;

function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d')!);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function blobShadow(): THREE.Mesh {
  const tex = canvasTex(64, 64, (g) => {
    const grd = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    grd.addColorStop(0, 'rgba(107, 41, 0, 0.55)');
    grd.addColorStop(.8, 'rgba(174, 126, 6, 0.2)');
    grd.addColorStop(1, 'rgba(174, 126, 6, 0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
  });
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.02;
  return m;
}

/** Fixed-size pool: walking and landings reuse the same lightweight dust sprites. */
class SandParticles {
  private cursor = 0;
  private particles: { sprite: THREE.Sprite; velocity: THREE.Vector3; life: number; duration: number; size: number }[] = [];

  constructor(scene: THREE.Scene) {
    const texture = canvasTex(32, 32, (c) => {
      const glow = c.createRadialGradient(16, 16, 1, 16, 16, 15);
      glow.addColorStop(0, 'rgba(255,239,196,1)');
      glow.addColorStop(0.4, 'rgba(236,207,153,0.65)');
      glow.addColorStop(1, 'rgba(236,207,153,0)');
      c.fillStyle = glow;
      c.fillRect(0, 0, 32, 32);
    });
    for (let i = 0; i < 96; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
      sprite.visible = false;
      scene.add(sprite);
      this.particles.push({ sprite, velocity: new THREE.Vector3(), life: 0, duration: 1, size: 0 });
    }
  }

  emit(x: number, z: number, landing = false): void {
    // Keep dust on the island, rather than emitting it over the water.
    if (Math.abs(x) > COURT.halfW + 2.5 || Math.abs(z) > COURT.halfLen + 2.5) return;
    for (let i = 0; i < (landing ? 28 : 6); i++) {
      const p = this.particles[this.cursor++ % this.particles.length];
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.25 + Math.random() * 0.65) * (landing ? 1.8 : 1);
      p.sprite.position.set(x + Math.cos(angle) * 0.09, 0.08, z + Math.sin(angle) * 0.09);
      p.velocity.set(Math.cos(angle) * speed, (landing ? 1.1 : 0.45) + Math.random() * 0.5, Math.sin(angle) * speed);
      p.duration = p.life = 0.3 + Math.random() * 0.25;
      p.size = (landing ? 0.35 : 0.22) + Math.random() * 0.09;
      p.sprite.scale.setScalar(p.size);
      p.sprite.material.opacity = 0.5;
      p.sprite.material.rotation = angle;
      p.sprite.visible = true;
    }
  }

  update(dt: number): void {
    for (const p of this.particles) {
      if (p.life <= 0) continue;
      p.life = Math.max(0, p.life - dt);
      p.sprite.visible = p.life > 0;
      p.velocity.y -= dt * 3;
      p.sprite.position.addScaledVector(p.velocity, dt);
      p.sprite.position.y = Math.max(0.035, p.sprite.position.y);
      const progress = 1 - p.life / p.duration;
      p.sprite.material.opacity = 0.5 * (1 - progress) ** 2;
      p.sprite.scale.setScalar(p.size * (1 + progress * 1.5));
    }
  }
}

export class PlayerView {
  readonly group = new THREE.Group();
  readonly shadow = blobShadow();
  private hands: { mesh: THREE.Mesh; side: number }[] = [];
  private legs: THREE.Mesh[] = [];
  private walkTime = 0;
  private bodyMaterial = new THREE.MeshLambertMaterial({ transparent: true });

  constructor(private player: Player) {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.25, 0.27, 4, 12),
      this.bodyMaterial,
    );
    body.position.y = .95;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), this.bodyMaterial);
    head.position.y = 1.76;
    this.group.add(body, head);
    for (const sx of [-1, 1]) {
      const material = this.bodyMaterial;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.105, 10, 8), material);
      this.group.add(hand);
      this.hands.push({ mesh: hand, side: sx });
      const leg_geo = new THREE.CapsuleGeometry(0.09, .7, 3, 8);
      leg_geo.translate(0, -.7, 0); // pivot at the shoulder
      const leg = new THREE.Mesh(leg_geo, this.bodyMaterial);
      leg.position.set(sx * 0.12, 1.1, 0);
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.124, 0.124, 0.045, 12), new THREE.MeshLambertMaterial({ color: 0xfff5dd }));
      this.group.add(leg);
      this.legs.push(leg);
    }
    this.group.rotation.y = player.side === 1 ? 0 : Math.PI; // face the net
    this.group.traverse((object) => { if (object instanceof THREE.Mesh) object.renderOrder = 1; });
  }

  update(dt: number): void {
    const p = this.player;
    this.bodyMaterial.color.setHex(p.color);
    this.group.position.set(p.pos.x, p.y, p.pos.z);
    const progress = 1 - THREE.MathUtils.clamp(p.swing / 0.28, 0, 1);
    const weight = p.swing > 0 ? 1 - THREE.MathUtils.smoothstep(progress, 0.65, 1) : 0;
    for (const animatedHand of this.hands) {
      const sx = animatedHand.side;
      const hand = new THREE.Vector3(sx * 0.4, 0.7, -0.04);
      const targetHand = hand.clone();
      if (p.lastType === 'bump') {
        // Both hands together toward the net.
        targetHand.set(sx * 0.065, 1.04, -0.65);
      } else if (p.lastType === 'set') {
        // Hands above the forehead; extend upward through the set.
        const extension = Math.sin(progress * Math.PI) * 0.14;
        targetHand.set(sx * 0.14, 2.05 + extension, -0.2);
      } else if (sx === 1) {
        // Spike / overhead serve: one hand reaches up and whips down in front.
        const swing = THREE.MathUtils.smoothstep(progress, 0.12, 0.7);
        targetHand.set(0.23, THREE.MathUtils.lerp(2.3, 0.85, swing), THREE.MathUtils.lerp(0.06, -0.65, swing));
      } else {
        targetHand.set(-0.38, 1.48, -0.35);
      }
      hand.lerp(targetHand, weight);
      animatedHand.mesh.position.copy(hand);
    }
    // Leg walk cycle
    const isMoving = p.vx !== 0 || p.vz !== 0;
    if (isMoving) {
      const speed = Math.sqrt(p.vx * p.vx + p.vz * p.vz);
      // Advance walk cycle timeline based on speed (adjust the 15.0 multiplier to change rhythm)
      this.walkTime += speed * 3.0 * dt;
    } else {
      // Smoothly return legs to a standing position when stopped
      this.walkTime = THREE.MathUtils.damp(this.walkTime, Math.round(this.walkTime / Math.PI) * Math.PI, 7, dt);
    }

    // Swing angle amplitude (e.g., 0.6 radians max rotation forward and back)
    const maxLegSwing = 0.6; 
    
    // Left leg swings forward while the right leg swings back
    this.legs[0].rotation.x = Math.sin(this.walkTime) * maxLegSwing;
    this.legs[1].rotation.x = -Math.sin(this.walkTime) * maxLegSwing;

    this.shadow.position.set(p.pos.x, 0.02, p.pos.z);
    const s = 1.1 / (1 + p.y * 1.2);
    this.shadow.scale.set(s, s, 1);
  }
}

export class World3D {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  debug = false;
  effectsEnabled = true;
  private spikeShake = 0;
  private spikeStrength = 0;
  get motionEffects(): boolean { return this.effectsEnabled && !this.reducedMotion.matches; }

  private views: PlayerView[];
  private sand: SandParticles;
  private footsteps: { x: number; z: number; distance: number; foot: number; grounded: boolean }[];
  private ball: THREE.Sprite;
  private ballTrail: BallTrail;
  private ballShadow = blobShadow();
  private waterFallback?: THREE.CanvasTexture;
  private berts: BertFish[];
  private net: THREE.Group;
  private netMaterials: THREE.Material[] = [];
  private netOpacity = 1;
  private netShake = 0;
  private reticle: THREE.Mesh;
  private reticleMat: THREE.MeshBasicMaterial;
  private pulse: THREE.Mesh;
  private pulseLife = 0;
  private serveImpact: THREE.Sprite;
  private serveImpactLife = 0;
  private impactHoldUntil = 0;
  private impactNeedsFrame = false;
  private lastTouchedBy = 0;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  private debugGroup = new THREE.Group();
  private reachSpheres: Partial<Record<HitType, THREE.Mesh>> = {};
  private trail: THREE.Line;
  private trailPts = 48;

  constructor(
    private parent: HTMLElement,
    private game: Game,
  ) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.localClippingEnabled = true;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    parent.appendChild(this.renderer.domElement);

    this.scene.background = new THREE.Color(0x9fd3ff);
    this.scene.fog = new THREE.Fog(0x9fd3ff, 40, 110);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 250);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8b98a, 1.05));
    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(8, 16, 6);
    this.scene.add(sun);

    this.buildCourt();
    this.berts = [
      new BertFish(this.scene, 0, -11),
      new BertFish(this.scene, 10, 0),
      new BertFish(this.scene, 4, 11),
    ];
    this.sand = new SandParticles(this.scene);
    this.footsteps = game.players.map((p) => ({ x: p.pos.x, z: p.pos.z, distance: 0, foot: 1, grounded: p.grounded }));
    // Palm tree on the sand outside the right sideline.
    const palmHeight = 5.5;
    for (let i=0; i<3; ++i) {
      const palmTexture = new THREE.TextureLoader().load('/palm-tree.png', (texture) => {
        palm.scale.set(palmHeight * texture.image.width / texture.image.height, palmHeight, 1);
      });
      palmTexture.colorSpace = THREE.SRGBColorSpace;
      const palm = new THREE.Sprite(new THREE.SpriteMaterial({
        map: palmTexture,
        transparent: true,
        depthWrite: false,
      }));
      palm.center.set(0.5, 0);
      palm.position.set(COURT.halfW + 7-i*2, -5+3*i, 1);
      palm.scale.set(palmHeight, palmHeight, 1);
      palm.renderOrder = 10-i; // Foreground foliage covers fish and their splashes.
      this.scene.add(palm);
    }
    for (let i=0; i<3; ++i) {
      const palmTexture = new THREE.TextureLoader().load('/palm-tree.png', (texture) => {
        // Set horizontal wrapping to repeat so mirroring behaves nicely
        texture.wrapS = THREE.RepeatWrapping;
        
        // HIGHLIGHT: Invert the horizontal repeat axis and offset it to flip the texture
        texture.repeat.x = -1;
        texture.offset.x = 1; 
        palm.scale.set(palmHeight * texture.image.width / texture.image.height, palmHeight, 1);
      });
      palmTexture.colorSpace = THREE.SRGBColorSpace;
      const palm = new THREE.Sprite(new THREE.SpriteMaterial({
        map: palmTexture,
        transparent: true,
        depthWrite: false,
      }));
      palm.center.set(0.5, 0);
      palm.position.set(COURT.halfW - (15-i*2), -5+3*i, 1);
      palm.scale.set(palmHeight, palmHeight, 1);
      palm.renderOrder = 10-i;
      this.scene.add(palm);
    }
    this.net = this.buildNet();
    this.scene.add(this.net); 

    // players
    this.views = game.players.map((p) => new PlayerView(p));
    for (const v of this.views) this.scene.add(v.group, v.shadow);

    // Camera-facing artwork; the simulation still uses BALL.radius for collisions.
    const diameter = BALL.radius * 2 * 1.25; // Visual size only; hitbox stays unchanged.
    const bt = new THREE.TextureLoader().load('/ball.svg', (texture) => {
      const aspect = texture.image.width / texture.image.height;
      this.ball.scale.set(
        diameter * Math.min(aspect, 1),
        diameter / Math.max(aspect, 1),
        1,
      );
    });
    bt.colorSpace = THREE.SRGBColorSpace;
    this.ball = new THREE.Sprite(new THREE.SpriteMaterial({ map: bt, transparent: true, depthWrite: false }));
    this.ball.renderOrder = 2; // Keep the ball artwork in front of its fading trail.
    this.ball.scale.set(diameter, diameter, 1);
    this.scene.add(this.ball, this.ballShadow);
    this.ballTrail = new BallTrail(this.scene);

    // aim reticle on the ground
    this.reticleMat = new THREE.MeshBasicMaterial({ color: 0x33ddff, transparent: true, opacity: 0.85, depthWrite: false });
    this.reticle = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.46, 32), this.reticleMat);
    this.reticle.rotation.x = -Math.PI / 2;
    this.reticle.position.y = 0.05;
    this.scene.add(this.reticle);

    // hit pulse ring
    this.pulse = new THREE.Mesh(
      new THREE.RingGeometry(0.3, 0.38, 28),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
    );
    this.scene.add(this.pulse);

    const impactTexture = canvasTex(128, 128, (c) => {
      c.translate(64, 64);
      c.beginPath();
      for (let i = 0; i < 24; i++) {
        const angle = i * Math.PI / 12;
        const radius = i % 2 === 0 ? 57 : 17;
        const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius;
        if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.closePath();
      const hexString: string = `#${this.game.players[this.lastTouchedBy].color.toString(16).padStart(6, '0')}`;
      c.fillStyle = hexString;
      c.fill();
    });
    this.serveImpact = new THREE.Sprite(new THREE.SpriteMaterial({
      map: impactTexture, transparent: true, opacity: 0, depthWrite: false, depthTest: false,
    }));
    this.serveImpact.visible = false;
    this.serveImpact.renderOrder = 2;
    this.scene.add(this.serveImpact);

    // debug: reach spheres for the near player's four hit types + predicted ball path
    for (const t of ['bump', 'set', 'spike', 'serve'] as HitType[]) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(HIT_SPECS[t].reach, 14, 10),
        new THREE.MeshBasicMaterial({ color: SPEC_COLORS[t], wireframe: true, transparent: true, opacity: 0.35 }),
      );
      this.reachSpheres[t] = m;
      this.debugGroup.add(m);
    }
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.trailPts * 3), 3));
    this.trail = new THREE.Line(tg, new THREE.LineBasicMaterial({ color: 0xff2266 }));
    this.trail.frustumCulled = false;
    this.debugGroup.add(this.trail);
    this.debugGroup.visible = false;
    this.scene.add(this.debugGroup);

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  private buildCourt(): void {
    // Keep water visible even when the browser cannot decode or autoplay the MP4.
    const fallback = canvasTex(128, 128, (ctx) => {
      const pixels = ctx.createImageData(128, 128);
      for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
          const u = x / 128 * Math.PI * 2;
          const v = y / 128 * Math.PI * 2;
          const wave = Math.sin(u * 3 + Math.sin(v * 2))
            * Math.cos(v * 3 + Math.sin(u * 2));
          const foam = Math.pow(Math.max(0, wave), 8);
          const i = (y * 128 + x) * 4;
          pixels.data[i] = 25 + wave * 10 + foam * 95;
          pixels.data[i + 1] = 145 + wave * 20 + foam * 65;
          pixels.data[i + 2] = 185 + wave * 20 + foam * 45;
          pixels.data[i + 3] = 255;
        }
      }
      ctx.putImageData(pixels, 0, 0);
    });
    fallback.wrapS = fallback.wrapT = THREE.RepeatWrapping;
    fallback.repeat.set(60, 60);
    this.waterFallback = fallback;
    const waterMaterial = new THREE.MeshBasicMaterial({
      map: fallback,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const video = document.createElement('video');
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'auto';

    const waterTexture = new THREE.VideoTexture(video);
    waterTexture.colorSpace = THREE.SRGBColorSpace;
    waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
    waterTexture.repeat.set(60, 60);
    video.addEventListener('playing', () => {
      waterMaterial.map = waterTexture;
      waterMaterial.needsUpdate = true;
    });
    video.addEventListener('error', () => {
      waterMaterial.map = fallback;
      waterMaterial.needsUpdate = true;
      console.warn('Water video could not be decoded; using animated water fallback.', video.error);
    });
    const tryPlay = () => {
      if (video.paused && !video.error) void video.play().catch(() => {
        // The animated fallback remains visible until playback is allowed.
      });
    };
    window.addEventListener('pointerdown', tryPlay);
    window.addEventListener('keydown', tryPlay);
    video.src = '/wateranim1.mp4';
    video.load();
    tryPlay();

    const sandMargin = 2.5;
    const shorelineZ = -COURT.halfLen - sandMargin;
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(220, 220),
      waterMaterial,
    );
    water.rotation.x = -Math.PI / 2;
    water.position.z = shorelineZ - 110; // The near edge stays behind the far baseline.
    this.scene.add(water);

    // A wide beach fades into water only beyond the far side of the court.
    const shoreFade = 3;
    const islandW = 220;
    const islandLen = 220;

    // All sand uses the 32x32 /sand-texture.png (from public), repeated.
    // sandTile is the world size (in court units) covered by one copy of the image; adjust to make the grain bigger or smaller.
    const sandTile = 3;
    // Each plane needs its own texture object (own repeat/offset). The offsets line the tiles up in world space,
    // so the pattern stays continuous where the court meets the surrounding beach.
    const sandTexture = (width: number, length: number): THREE.Texture => {
      const texture = new THREE.TextureLoader().load('/sand-texture.png');
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(width / sandTile, length / sandTile);
      texture.offset.set(
        THREE.MathUtils.euclideanModulo((COURT.halfW - width / 2) / sandTile, 1),
        THREE.MathUtils.euclideanModulo((COURT.halfLen - length / 2) / sandTile, 1),
      );
      texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
      return texture;
    };

    // Shoreline shape for a pixel of the 512x512 masks: opacity (1 = sand, 0 = water) and wetness (darker sand near the water).
    const shore = (x: number, y: number) => {
      const wx = ((x + 0.5) / 512 - 0.5) * islandW;
      const wz = ((y + 0.5) / 512 - 0.5) * islandLen;
      const distance = shorelineZ - wz;
      const ripple = 0.18 * Math.sin(wx * 2.1 + wz * 0.8)
        + 0.12 * Math.sin(wz * 2.8 - wx * 0.6);
      const fade = THREE.MathUtils.clamp((distance + ripple) / shoreFade, 0, 1);
      return {
        opacity: 1 - fade * fade * (3 - 2 * fade),
        wet: THREE.MathUtils.smoothstep(distance + ripple, -0.8, shoreFade),
      };
    };
    // Opacity mask (three.js alphaMap reads the green channel). It is data, not colour, so it is not sRGB.
    const islandMask = canvasTex(512, 512, (ctx) => {
      const pixels = ctx.createImageData(512, 512);
      for (let y = 0; y < 512; y++) {
        for (let x = 0; x < 512; x++) {
          const i = (y * 512 + x) * 4;
          const value = Math.round(shore(x, y).opacity * 255);
          pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value;
          pixels.data[i + 3] = 255;
        }
      }
      ctx.putImageData(pixels, 0, 0);
    });
    islandMask.colorSpace = THREE.NoColorSpace;
    // The old texture also darkened the sand near the water; a translucent brown overlay recreates that wet look.
    const wetTexture = canvasTex(512, 512, (ctx) => {
      const pixels = ctx.createImageData(512, 512);
      for (let y = 0; y < 512; y++) {
        for (let x = 0; x < 512; x++) {
          const { opacity, wet } = shore(x, y);
          const i = (y * 512 + x) * 4;
          pixels.data[i] = 60;
          pixels.data[i + 1] = 45;
          pixels.data[i + 2] = 70;
          pixels.data[i + 3] = Math.round(wet * opacity * 0.25 * 255);
        }
      }
      ctx.putImageData(pixels, 0, 0);
    });
    const island = new THREE.Mesh(
      new THREE.PlaneGeometry(islandW, islandLen),
      new THREE.MeshLambertMaterial({
        map: sandTexture(islandW, islandLen),
        alphaMap: islandMask,
        transparent: true,
        depthWrite: false,
      }),
    );
    island.rotation.x = -Math.PI / 2;
    island.position.y = 0.002;
    island.renderOrder = -1; // Beach first, then the wet overlay on top of it.
    this.scene.add(island);
    const wetSand = new THREE.Mesh(
      new THREE.PlaneGeometry(islandW, islandLen),
      new THREE.MeshBasicMaterial({ map: wetTexture, transparent: true, depthWrite: false }),
    );
    wetSand.rotation.x = -Math.PI / 2;
    wetSand.position.y = 0.003;
    this.scene.add(wetSand);

    // Court sand: same texture, aligned with the beach tiles above.
    const court = new THREE.Mesh(
      new THREE.PlaneGeometry(COURT.halfW * 2, COURT.halfLen * 2),
      new THREE.MeshLambertMaterial({ map: sandTexture(COURT.halfW * 2, COURT.halfLen * 2) }),
    );
    court.rotation.x = -Math.PI / 2;
    court.position.y = 0.005;
    this.scene.add(court);

    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const line = (w: number, l: number, x: number, z: number) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), lineMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, 0.012, z);
      this.scene.add(m);
    };
    const t = 0.1;
    line(t, COURT.halfLen * 2 + t, -COURT.halfW, 0);
    line(t, COURT.halfLen * 2 + t, COURT.halfW, 0);
    line(COURT.halfW * 2 + t, t, 0, -COURT.halfLen);
    line(COURT.halfW * 2 + t, t, 0, COURT.halfLen);
  }

  private buildNet(): THREE.Group {
    const g = new THREE.Group();
    const w = NET.halfW * 2;
    const tex = canvasTex(32, 32, (c) => {
      c.strokeStyle = '#1a1a1a';
      c.lineWidth = 3;
      c.strokeRect(0, 0, 32, 32);
    });
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(w / 0.25, 1 / 0.25);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, 1),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, depthWrite: false }),
    );
    mesh.position.y = NET.top - 0.5;
    const tape = new THREE.Mesh(new THREE.BoxGeometry(w, 0.09, 0.04), new THREE.MeshLambertMaterial({ color: 0xffffff }));
    tape.material.transparent = true;
    tape.material.depthWrite = false;
    this.netMaterials.push(mesh.material, tape.material);
    tape.position.y = NET.top - 0.045;
    g.add(mesh, tape);
    for (const sx of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, NET.top + 0.35, 10), new THREE.MeshLambertMaterial({ color: 0xffd34d, transparent: true }));
      post.position.set(sx * NET.halfW, (NET.top + 0.35) / 2, 0);
      g.add(post);
    }
    g.traverse((object) => { if (object instanceof THREE.Mesh) object.renderOrder = 1; });
    return g;
  }

  resize(): void {
    const w = this.parent.clientWidth || window.innerWidth;
    const h = this.parent.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    // keep the whole court in view on narrow windows
    this.camera.fov = w / h < 1.3 ? 58 : 45;
    this.camera.updateProjectionMatrix();
  }

  onEvent(ev: GameEvent): void {
    if (ev.kind === 'toss' || ev.kind === 'retoss' || ev.kind === 'point' || ev.kind === 'over') this.ballTrail.reset();
    if (ev.kind === 'land' && this.motionEffects) this.sand.emit(ev.x, ev.z, true);
    if (ev.kind === 'net') this.netShake = 0.3;
    if (ev.kind === 'hit') {
      if (ev.type === 'spike' && this.motionEffects) { this.spikeShake = 0.24; this.spikeStrength = 0.06 + ev.quality * 0.1; }
      const hitter = this.game.players.find((player) => player.id === ev.player);
      if (hitter) this.ballTrail.hit(PLAYER_COLORS[hitter.side]);
      const b = this.game.ball.pos;
      this.pulse.position.set(b.x, b.y, b.z);
      this.pulse.lookAt(this.camera.position);
      this.pulseLife = 0.25;
      (this.pulse.material as THREE.MeshBasicMaterial).color.setHex(ev.quality > 0.85 ? 0xffff66 : ev.quality > 0.4 ? 0xffffff : 0xff6655);
      if ((ev.type === 'serve' || ev.type === 'spike') && this.motionEffects) {
        this.serveImpact.position.set(b.x, b.y, b.z);
        this.serveImpactLife = 0.12;
        this.impactNeedsFrame = ev.type === 'serve'; // Spike hitstop is handled by the main loop.
        this.lastTouchedBy = ev.player;
      }
    }
  }

  update(dt: number, t: number): void {
    for (const bert of this.berts) bert.update(dt);
    this.waterFallback?.offset.set(t * 0.015, Math.sin(t * 0.2) * 0.025);
    const g = this.game;
    const human = g.players[g.viewPlayerId];

    // A small contact burst; serves use a visual hold, spikes pause the main loop.
    if (!this.motionEffects) {
      this.serveImpactLife = 0;
      this.impactHoldUntil = 0;
      this.impactNeedsFrame = false;
    }
    this.serveImpactLife = Math.max(0, this.serveImpactLife - dt);
    this.serveImpact.visible = this.serveImpactLife > 0;
    if (this.serveImpact.visible) {
      const progress = 1 - this.serveImpactLife / 0.12;
      this.serveImpact.scale.setScalar(0.7 + progress * 0.8);
      this.serveImpact.material.opacity = (1 - progress) * 0.8;
      this.serveImpact.material.rotation = progress * 0.2;
    }

    for (const v of this.views) v.update(dt);
    this.sand.update(dt);
    for (let i = 0; i < g.players.length; i++) {
      const player = g.players[i];
      const step = this.footsteps[i];
      if (!step.grounded && player.grounded && this.motionEffects) this.sand.emit(player.pos.x, player.pos.z, true);
      step.grounded = player.grounded;
      const distance = Math.hypot(player.pos.x - step.x, player.pos.z - step.z);
      step.x = player.pos.x;
      step.z = player.pos.z;
      if (player.grounded && distance < 1 && this.motionEffects) {
        step.distance += distance;
        if (step.distance >= 0.65) {
          step.distance %= 0.65;
          this.sand.emit(player.pos.x + step.foot * 0.15, player.pos.z);
          step.foot *= -1;
        }
      } else {
        step.distance = 0;
      }
    }

    // ball
    const b = g.ball;
    this.ball.position.set(b.pos.x, b.pos.y, b.pos.z);
    this.ballShadow.position.set(b.pos.x, 0.02, b.pos.z);
    const sh = 1 / (.7 + Math.max(0, b.pos.y - BALL.radius) * 0.18);
    this.ballShadow.scale.set(sh, sh, 1);

    // net wobble on contact
    this.netShake = Math.max(0, this.netShake - dt);
    if (!this.motionEffects) { this.netShake = 0; this.spikeShake = 0; this.pulseLife = 0; }
    this.net.position.z = Math.sin(t * 60) * this.netShake * 0.12;

    this.pulse.visible = this.motionEffects && this.pulseLife > 0;
    // hit pulse
    if (this.pulseLife > 0) {
      this.pulseLife -= dt;
      const k = 1 - Math.max(0, this.pulseLife) / 0.25;
      this.pulse.scale.setScalar(1 + k * 2.2);
      (this.pulse.material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.9;
    }

    // aim reticle: where your next hit of the previewed type would be sent
    const showReticle = g.phase === 'ready' || g.phase === 'toss' || g.phase === 'rally';
    this.reticle.visible = showReticle;
    if (showReticle) {
      const type = g.previewType(human);
      const tgt = g.previewTarget(human, type);
      this.reticle.position.set(tgt.x, 0.05, tgt.z);
      this.reticleMat.color.setHex(tgt.over ? 0xff5544 : 0x33ddff);
      const pulse = 1 + 0.06 * Math.sin(t * 8);
      this.reticle.scale.setScalar(pulse);
    }

    // camera: fixed behind the near baseline, drifts a little toward the ball
    this.camera.position.set(b.pos.x * 0.12, 9.5, 17.5 * human.side);
    this.camera.lookAt(b.pos.x * 0.05, 0.6, -human.side);
    this.spikeShake = Math.max(0, this.spikeShake - dt);
    if (this.motionEffects && this.spikeShake > 0) {
      const amplitude = this.spikeStrength * (this.spikeShake / 0.24) ** 2;
      this.camera.position.x += Math.sin(t * 110) * amplitude;
      this.camera.position.y += Math.cos(t * 137) * amplitude * 0.6;
    }
    if (g.phase === 'ready' || !this.motionEffects) this.ballTrail.reset();
    this.ballTrail.update(dt, b.pos, this.camera);

    // Fade the mesh and tape while the ball is on the human player's side.
    const ballOnYourSide = b.pos.z * human.side >= 0;
    const targetOpacity = ballOnYourSide ? 0.18 : 1;
    this.netOpacity = THREE.MathUtils.damp(this.netOpacity, targetOpacity, 12, dt);
    for (const material of this.netMaterials) material.opacity = this.netOpacity;

    // debug overlay
    this.debugGroup.visible = this.debug;
    if (this.debug) {
      for (const type of Object.keys(this.reachSpheres) as HitType[]) {
        const ip = idealPoint(human.actor, HIT_SPECS[type]);
        this.reachSpheres[type]!.position.set(ip.x, ip.y, ip.z);
      }
      const pts = sampleTrajectory(b.pos, b.vel, 0.05, this.trailPts);
      const attr = this.trail.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < this.trailPts; i++) {
        const p = pts[Math.min(i, pts.length - 1)];
        attr.setXYZ(i, p.x, p.y, p.z);
      }
      attr.needsUpdate = true;
    }
  }

  render(): void {
    const now = performance.now();
    if (this.impactNeedsFrame) {
      this.impactNeedsFrame = false;
      this.impactHoldUntil = now + 50;
    } else if (now < this.impactHoldUntil) {
      return;
    }
    this.renderer.render(this.scene, this.camera);
  }
}