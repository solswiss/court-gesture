import * as THREE from 'three';
import type { Vec3 } from '../types';

/** Camera-facing ribbon following actual ball positions, tapering with age. */
export class BallTrail {
  private readonly capacity = 96;
  private readonly lifetime = 0.28;
  private readonly geometry = new THREE.BufferGeometry();
  private readonly positions = new THREE.BufferAttribute(new Float32Array(this.capacity * 6), 3);
  private readonly colors = new THREE.BufferAttribute(new Float32Array(this.capacity * 8), 4);
  private readonly color = new THREE.Color();
  private readonly history: { position: THREE.Vector3; time: number }[] = [];
  private readonly tangent = new THREE.Vector3();
  private readonly towardCamera = new THREE.Vector3();
  private readonly width = new THREE.Vector3();
  private time = 0;
  private active = false;

  constructor(scene: THREE.Scene) {
    this.positions.setUsage(THREE.DynamicDrawUsage);
    this.colors.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('position', this.positions);
    this.geometry.setAttribute('color', this.colors);
    const indices: number[] = [];
    for (let i = 0; i < this.capacity - 1; i++) {
      const n = i * 2;
      indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
    this.geometry.setIndex(indices);
    this.geometry.setDrawRange(0, 0);
    const mesh = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({
      vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    }));
    mesh.frustumCulled = false;
    mesh.renderOrder = 1;
    scene.add(mesh);
  }

  hit(color: number): void {
    this.color.setHex(color);
    this.active = true;
  }

  reset(): void {
    this.active = false;
    this.history.length = 0;
    this.geometry.setDrawRange(0, 0);
  }

  update(dt: number, position: Vec3, camera: THREE.Camera): void {
    if (!this.active) return;
    this.time += dt;
    const last = this.history[this.history.length - 1];
    if (!last || Math.hypot(last.position.x - position.x, last.position.y - position.y, last.position.z - position.z) > 0.001) {
      this.history.push({ position: new THREE.Vector3(position.x, position.y, position.z), time: this.time });
    }
    while (this.history.length > this.capacity || (this.history.length > 0 && this.time - this.history[0].time > this.lifetime)) {
      this.history.shift();
    }
    for (let i = 0; i < this.history.length; i++) {
      const sample = this.history[i];
      const strength = Math.max(0, 1 - (this.time - sample.time) / this.lifetime);
      const before = this.history[Math.max(0, i - 1)].position;
      const after = this.history[Math.min(this.history.length - 1, i + 1)].position;
      this.tangent.subVectors(after, before).normalize();
      this.towardCamera.subVectors(camera.position, sample.position);
      this.width.crossVectors(this.tangent, this.towardCamera).normalize().multiplyScalar(0.15 * strength);
      for (let side = 0; side < 2; side++) {
        const index = i * 2 + side;
        const sign = side === 0 ? -1 : 1;
        this.positions.setXYZ(index, sample.position.x + this.width.x * sign,
          sample.position.y + this.width.y * sign, sample.position.z + this.width.z * sign);
        this.colors.setXYZW(index, this.color.r, this.color.g, this.color.b, strength * 0.75);
      }
    }
    this.positions.needsUpdate = true;
    this.colors.needsUpdate = true;
    this.geometry.setDrawRange(0, Math.max(0, this.history.length - 1) * 6);
  }
}
