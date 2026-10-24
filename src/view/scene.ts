import * as THREE from 'three';
import { BALL, COURT, NET } from '../config';
import { sampleTrajectory } from '../sim/ball';
import type { Game } from '../sim/game';
import { HIT_SPECS, idealPoint } from '../sim/hit';
import type { Player } from '../sim/player';
import type { GameEvent, HitType } from '../types';

const SPEC_COLORS: Record<HitType, number> = { bump: 0x44dd88, set: 0xffdd44, spike: 0xff5544, serve: 0xbb66ff };

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
    grd.addColorStop(0, 'rgba(0,0,0,0.55)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
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

class PlayerView {
  readonly group = new THREE.Group();
  readonly shadow = blobShadow();
  private arms: THREE.Mesh[] = [];

  constructor(private player: Player, color: number) {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.32, 0.9, 4, 12),
      new THREE.MeshLambertMaterial({ color }),
    );
    body.position.y = 0.78;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 10), new THREE.MeshLambertMaterial({ color: 0xf0c9a0 }));
    head.position.y = 1.78;
    this.group.add(body, head);
    for (const sx of [-1, 1]) {
      const geo = new THREE.CapsuleGeometry(0.08, 0.5, 3, 8);
      geo.translate(0, -0.3, 0); // pivot at the shoulder
      const arm = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0xf0c9a0 }));
      arm.position.set(sx * 0.4, 1.42, 0);
      this.group.add(arm);
      this.arms.push(arm);
    }
    this.group.rotation.y = player.side === 1 ? 0 : Math.PI; // face the net
  }

  update(): void {
    const p = this.player;
    this.group.position.set(p.pos.x, p.y, p.pos.z);
    // Arms: raised forward/up for a moment on every swing (also on whiffs, so you can see the timing).
    const a = p.swing / 0.28; // 1 -> 0
    const ang = a > 0 ? 2.7 * Math.sin(a * Math.PI) : 0;
    for (const arm of this.arms) arm.rotation.x = ang;
    this.shadow.position.set(p.pos.x, 0.02, p.pos.z);
    const s = 1.1 / (1 + p.y * 0.3);
    this.shadow.scale.set(s, s, 1);
  }
}

export class World3D {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  debug = false;

  private views: PlayerView[];
  private ball: THREE.Mesh;
  private ballShadow = blobShadow();
  private net: THREE.Group;
  private netShake = 0;
  private reticle: THREE.Mesh;
  private reticleMat: THREE.MeshBasicMaterial;
  private pulse: THREE.Mesh;
  private pulseLife = 0;
  private debugGroup = new THREE.Group();
  private reachSpheres: Partial<Record<HitType, THREE.Mesh>> = {};
  private trail: THREE.Line;
  private trailPts = 48;

  constructor(
    private parent: HTMLElement,
    private game: Game,
  ) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
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
    this.net = this.buildNet();
    this.scene.add(this.net);

    // players
    this.views = game.players.map((p) => new PlayerView(p, p.side === 1 ? 0x2f6fdb : 0xe0453a));
    for (const v of this.views) this.scene.add(v.group, v.shadow);

    // ball
    const bt = canvasTex(256, 128, (g) => {
      g.fillStyle = '#fdfdfd';
      g.fillRect(0, 0, 256, 128);
      const cols = ['#2b6cff', '#ffd23f', '#2b6cff', '#ffd23f'];
      cols.forEach((c, i) => {
        g.fillStyle = c;
        g.fillRect(i * 64 + 22, 0, 22, 128);
      });
    });
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(BALL.radius, 20, 14), new THREE.MeshLambertMaterial({ map: bt }));
    this.scene.add(this.ball, this.ballShadow);

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
    const sand = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), new THREE.MeshLambertMaterial({ color: 0xe6c98f }));
    sand.rotation.x = -Math.PI / 2;
    this.scene.add(sand);

    const court = new THREE.Mesh(
      new THREE.PlaneGeometry(COURT.halfW * 2, COURT.halfLen * 2),
      new THREE.MeshLambertMaterial({ color: 0xf0d8a2 }),
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
    tape.position.y = NET.top - 0.045;
    g.add(mesh, tape);
    for (const sx of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, NET.top + 0.35, 10), new THREE.MeshLambertMaterial({ color: 0xffd34d }));
      post.position.set(sx * NET.halfW, (NET.top + 0.35) / 2, 0);
      g.add(post);
    }
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
    if (ev.kind === 'net') this.netShake = 0.3;
    if (ev.kind === 'hit') {
      const b = this.game.ball.pos;
      this.pulse.position.set(b.x, b.y, b.z);
      this.pulse.lookAt(this.camera.position);
      this.pulseLife = 0.25;
      (this.pulse.material as THREE.MeshBasicMaterial).color.setHex(ev.quality > 0.85 ? 0xffff66 : ev.quality > 0.4 ? 0xffffff : 0xff6655);
    }
  }

  update(dt: number, t: number): void {
    const g = this.game;
    const human = g.players[0];

    for (const v of this.views) v.update();

    // ball
    const b = g.ball;
    this.ball.position.set(b.pos.x, b.pos.y, b.pos.z);
    this.ball.rotation.z -= (b.vel.x / BALL.radius) * dt;
    this.ball.rotation.x += (b.vel.z / BALL.radius) * dt;
    this.ballShadow.position.set(b.pos.x, 0.02, b.pos.z);
    const sh = 0.7 / (1 + Math.max(0, b.pos.y - BALL.radius) * 0.18);
    this.ballShadow.scale.set(sh, sh, 1);

    // net wobble on contact
    this.netShake = Math.max(0, this.netShake - dt);
    this.net.position.z = Math.sin(t * 60) * this.netShake * 0.12;

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
    this.camera.position.set(b.pos.x * 0.12, 9.5, 17.5);
    this.camera.lookAt(b.pos.x * 0.05, 0.6, -1);

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
    this.renderer.render(this.scene, this.camera);
  }
}
