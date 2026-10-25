import * as THREE from 'three';
import { BALL } from '../config';
import { Player } from '../sim/player';
import { PlayerView } from './scene';

/** A separate, purely decorative beach; the paused match is never animated or moved. */
export class TitleScene {
  readonly element = document.createElement('div');
  private renderer?: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(42, 1, 0.1, 180);
  private player = new Player(0, 1, 0xffaa00);
  private character?: PlayerView;
  private waves: THREE.Mesh[] = [];
  private ocean?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>;
  private birds: { group: THREE.Group; wings: THREE.Mesh[] }[] = [];
  private reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  private width = 0;
  private height = 0;
  private failed = false;
  private sandTextures: THREE.Texture[] = [];

  constructor() {
    this.element.className = 'title-beach'; this.element.setAttribute('aria-hidden', 'true');
    window.addEventListener('pagehide', () => {
      this.scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) material.dispose();
        }
      });
      for (const texture of this.sandTextures) texture.dispose();
      this.renderer?.dispose();
    });
  }
  private init(): void {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setClearColor(0x83c6cd);
    this.element.append(this.renderer.domElement);
    const sky = document.createElement('canvas'); sky.width = 4; sky.height = 512;
    const ctx = sky.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#427f9d'); gradient.addColorStop(0.45, '#a9d2d0');
    gradient.addColorStop(0.75, '#ffdc9c'); gradient.addColorStop(1, '#f5b982');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 4, 512);
    this.scene.background = new THREE.CanvasTexture(sky);
    this.scene.fog = new THREE.Fog(0xb9d4ca, 38, 145);
    this.scene.add(new THREE.HemisphereLight(0xfff2ce, 0x6c9a9a, 2.4));
    const light = new THREE.DirectionalLight(0xffdfad, 2.5); light.position.set(-8, 12, -12); this.scene.add(light);
    const sand = this.sandMaterial(50, 10);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 40), sand);
    ground.rotation.x = -Math.PI / 2; ground.position.z = 15; this.scene.add(ground);
    const waterGeometry = new THREE.PlaneGeometry(200, 140, 100, 70);
    waterGeometry.rotateX(-Math.PI / 2);
    this.ocean = new THREE.Mesh(waterGeometry, new THREE.MeshLambertMaterial({ color: 0x319fac, flatShading: true }));
    this.ocean.position.set(0, -0.09, -75); this.scene.add(this.ocean);
    // Curved foam ribbons travel toward the shore, then dissolve and repeat offshore.
    for (let i = 0; i < 14; i++) {
      const geometry = new THREE.PlaneGeometry(130, 0.16, 100, 1);
      geometry.rotateX(-Math.PI / 2);
      const wave = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xf1f6df, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }));
      wave.position.y = 0.035; this.waves.push(wave); this.scene.add(wave);
    }
    this.addBirds();
    const sun = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 20), new THREE.MeshBasicMaterial({ color: 0xffedb6, fog: false }));
    sun.position.set(-15, 13, -95); this.scene.add(sun);
    // Low dunes frame the foreground, instead of a mountain overlook.
    const duneSand = this.sandMaterial(3, 1.5);
    for (const [x, z, scale] of [[-7, 3, 2], [-2, 5, 1.6], [7, 4, 2.6]]) {
      const dune = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), duneSand);
      dune.position.set(x, -0.5, z); dune.scale.set(scale * 2, 0.65, scale); this.scene.add(dune);
    }
    this.palm(-5, 0, 1); this.palm(-10, -8, 0.8); this.palm(9, -14, 0.65);
    // Use the same camera-facing artwork as the match, without wrapping it around a sphere.
    const diameter = BALL.radius * 2 * 1.25;
    const ballTexture = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}ball.svg`, texture => {
      const aspect = texture.image.width / texture.image.height;
      ball.scale.set(diameter * Math.min(aspect, 1), diameter / Math.max(aspect, 1), 1);
    });
    ballTexture.colorSpace = THREE.SRGBColorSpace;
    const ball = new THREE.Sprite(new THREE.SpriteMaterial({ map: ballTexture, transparent: true, depthWrite: false }));
    ball.scale.set(diameter, diameter, 1);
    ball.position.set(-1.35, diameter / 2, 1.7); ball.renderOrder = 2; this.scene.add(ball);
    const castleWidth = 3;
    const castleTexture = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}sand-castle.png`, texture => {
      castle.scale.set(castleWidth, castleWidth * texture.image.height / texture.image.width, 1);
    });
    castleTexture.colorSpace = THREE.SRGBColorSpace;
    const castle = new THREE.Sprite(new THREE.SpriteMaterial({ map: castleTexture, transparent: true, depthWrite: false }));
    castle.center.set(0.5, 0); castle.position.set(0, 0.08, -0.6);
    castle.scale.set(castleWidth, castleWidth, 1); castle.renderOrder = 1; this.scene.add(castle);
    this.player.pos = { x: -2.25, z: 1 };
    this.character = new PlayerView(this.player); this.scene.add(this.character.group, this.character.shadow);
  }
  private sandMaterial(repeatX: number, repeatY: number): THREE.MeshStandardMaterial {
    // A seamless tile with fine grains, broad color variation, and wind-ripple relief.
    const size = 512;
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
    const height = document.createElement('canvas'); height.width = height.height = size;
    const ctx = canvas.getContext('2d')!, heightCtx = height.getContext('2d')!;
    const pixels = ctx.createImageData(size, size), relief = heightCtx.createImageData(size, size);
    let seed = 7243;
    const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const u = x / size * Math.PI * 2, v = y / size * Math.PI * 2;
        const ripple = Math.sin(v * 12 + Math.sin(u * 2) * 1.4 + Math.sin(u * 5) * 0.3);
        const patches = Math.sin(u * 2 + Math.sin(v)) * Math.cos(v * 3) * 5;
        const grain = (random() - 0.5) * 28;
        const fleck = random() > 0.992 ? -35 : 0;
        const shade = ripple * 5 + patches + grain + fleck;
        const i = (y * size + x) * 4;
        pixels.data[i] = 211 + shade; pixels.data[i + 1] = 185 + shade; pixels.data[i + 2] = 140 + shade;
        pixels.data[i + 3] = 255;
        const bump = 128 + ripple * 35 + grain * 1.5;
        relief.data[i] = relief.data[i + 1] = relief.data[i + 2] = bump; relief.data[i + 3] = 255;
      }
    }
    ctx.putImageData(pixels, 0, 0); heightCtx.putImageData(relief, 0, 0);
    const map = new THREE.CanvasTexture(canvas), bumpMap = new THREE.CanvasTexture(height);
    map.colorSpace = THREE.SRGBColorSpace;
    for (const texture of [map, bumpMap]) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(repeatX, repeatY);
      texture.anisotropy = Math.min(8, this.renderer!.capabilities.getMaxAnisotropy());
      this.sandTextures.push(texture);
    }
    return new THREE.MeshStandardMaterial({ color: 0xfff4de, map, bumpMap, bumpScale: 0.055, roughness: 1, metalness: 0 });
  }
  private addBirds(): void {
    const material = new THREE.MeshBasicMaterial({ color: 0x344e57, side: THREE.DoubleSide });
    for (let i = 0; i < 8; i++) {
      const group = new THREE.Group();
      const wings: THREE.Mesh[] = [];
      for (const side of [-1, 1]) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute([
          0, 0, 0, side * 0.65, 0.12, 0, side * 0.28, -0.1, 0,
        ], 3));
        const wing = new THREE.Mesh(geometry, material); wings.push(wing); group.add(wing);
      }
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 4), material);
      body.scale.set(1.6, 0.6, 1); group.add(body);
      group.scale.setScalar(0.65 + (i % 3) * 0.16);
      this.birds.push({ group, wings }); this.scene.add(group);
    }
  }
  private palm(x: number, z: number, scale: number): void {
    const palm = new THREE.Group(); palm.position.set(x, 0, z); palm.scale.setScalar(scale);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.25, 5, 9), new THREE.MeshLambertMaterial({ color: 0x8a6550 }));
    trunk.position.set(-0.25, 2.5, 0); trunk.rotation.z = -0.1; palm.add(trunk);
    for (let i = 0; i < 7; i++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.45, 3.4, 5), new THREE.MeshLambertMaterial({ color: i % 2 ? 0x3c7760 : 0x52866a }));
      const angle = i / 7 * Math.PI * 2;
      leaf.position.set(Math.cos(angle) * 1.15, 4.9, Math.sin(angle) * 1.15);
      leaf.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(Math.cos(angle), -0.25, Math.sin(angle)).normalize());
      palm.add(leaf);
    }
    this.scene.add(palm);
  }
  update(time: number, color: number, motion: boolean): void {
    if (this.failed) return;
    try { if (!this.renderer) this.init(); } catch { this.failed = true; return; }
    const width = this.element.clientWidth, height = this.element.clientHeight;
    if (!width || !height) return;
    if (width !== this.width || height !== this.height) {
      this.width = width; this.height = height; this.renderer!.setSize(width, height);
      this.camera.aspect = width / height; this.camera.updateProjectionMatrix();
    }
    const t = motion && !this.reduced.matches ? time : 0;
    this.player.color = color;
    this.player.y = 0.06 + Math.sin(t * 1.8) * 0.055;
    this.character!.update(0);
    this.character!.group.rotation.y = -0.35 + Math.sin(t * 0.8) * 0.035;
    if (this.ocean) {
      const positions = this.ocean.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i), z = positions.getZ(i);
        positions.setY(i, Math.sin(x * 0.18 + z * 0.7 + t * 1.1) * 0.045 + Math.sin(z * 1.3 + t * 1.7) * 0.025);
      }
      positions.needsUpdate = true;
      this.ocean.geometry.computeVertexNormals();
    }
    this.waves.forEach((wave, i) => {
      const progress = ((t * 0.028 + i / this.waves.length) % 1);
      wave.position.z = -40 + progress * 35;
      (wave.material as THREE.MeshBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.4;
      const positions = wave.geometry.attributes.position;
      for (let j = 0; j < positions.count; j++) {
        const x = positions.getX(j);
        const edge = j < positions.count / 2 ? -0.08 : 0.08;
        positions.setZ(j, edge + Math.sin(x * 0.23 + i * 1.7 + t * 0.25) * 0.25 + Math.sin(x * 0.61 + i) * 0.07);
      }
      positions.needsUpdate = true;
    });
    this.birds.forEach(({ group, wings }, i) => {
      const flock = i < 5 ? 0 : 1;
      const direction = flock === 0 ? 1 : -1;
      const travel = ((t * (flock === 0 ? 1.1 : 0.8) + (flock === 0 ? 27 : 45)) % 68) - 34;
      group.position.set(direction * travel + (i % 5) * 1.5, 7.4 + flock * 2.2 + Math.abs((i % 5) - 2) * 0.5 + Math.sin(t * 0.65 + i) * 0.15, -27 - flock * 10 - (i % 5) * 1.2);
      const flap = Math.sin(t * 3.6 + i * 0.9) * 0.4;
      wings[0].rotation.z = -flap; wings[1].rotation.z = flap;
      group.rotation.z = Math.sin(t * 0.8 + i) * 0.06;
    });
    const narrow = width / height < 0.9;
    this.camera.position.set(narrow ? -1.8 : 0, 2.9, narrow ? 12.5 : 9);
    this.camera.lookAt(narrow ? -1 : 0.2, 1.55, -2);
    this.renderer!.render(this.scene, this.camera);
  }
}
