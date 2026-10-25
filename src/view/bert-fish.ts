import * as THREE from 'three';
import { COURT } from '../config';

type FishAction = 'swim' | 'surface' | 'dive' | 'submerged' | 'jump' | 'rise';
const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

/** Decorative fish: paired sprites let the waterline hide and tint submerged parts. */
export class BertFish {
  private readonly above: THREE.Sprite;
  private readonly below: THREE.Sprite;
  private readonly ripple: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private readonly drops: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = [];
  private elapsed = 0;
  private previousHeight = -0.45;
  private splashAge = 2;
  private readonly splashOrigin = new THREE.Vector3();
  private action: FishAction = 'swim';
  private actionTime = 0;
  private actionDuration = randomBetween(3, 6);
  private routeTime = 0;
  private routeDuration = randomBetween(5, 10);
  private readonly routeStart = new THREE.Vector2();
  private readonly routeEnd = new THREE.Vector2();
  private readonly position = new THREE.Vector2();

  constructor(scene: THREE.Scene, private readonly depthOffset = 0, private readonly centerX = 0) {
    this.position.set(centerX, -COURT.halfLen - 12 - depthOffset);
    this.routeStart.copy(this.position);
    this.chooseDestination();
    this.actionTime = randomBetween(0, this.actionDuration * 0.8);
    const texture = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}bert-fish.png`);
    texture.colorSpace = THREE.SRGBColorSpace;
    // Flip the UVs rather than rotating the billboard away from the camera.
    texture.wrapS = THREE.RepeatWrapping;
    const base = { map: texture, transparent: true, depthWrite: false };
    this.above = new THREE.Sprite(new THREE.SpriteMaterial({
      ...base, clippingPlanes: [new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)],
    }));
    this.below = new THREE.Sprite(new THREE.SpriteMaterial({
      ...base, color: 0x58bacc, opacity: 0.35,
      clippingPlanes: [new THREE.Plane(new THREE.Vector3(0, -1, 0), 0)],
    }));
    for (const sprite of [this.below, this.above]) {
      sprite.scale.set(3, 3, 1);
      sprite.renderOrder = 2;
      scene.add(sprite);
    }

    this.ripple = new THREE.Mesh(
      new THREE.RingGeometry(0.8, 1, 40),
      new THREE.MeshBasicMaterial({ color: 0xc9f6ff, transparent: true, depthWrite: false, side: THREE.DoubleSide }),
    );
    this.ripple.rotation.x = -Math.PI / 2;
    this.ripple.renderOrder = 3;
    this.ripple.visible = false;
    scene.add(this.ripple);
    const dropGeometry = new THREE.SphereGeometry(0.055, 6, 4);
    const dropMaterial = new THREE.MeshBasicMaterial({ color: 0xc9f6ff, transparent: true, depthWrite: false });
    for (let i = 0; i < 12; i++) {
      const drop = new THREE.Mesh(dropGeometry, dropMaterial);
      drop.renderOrder = 3;
      drop.visible = false;
      this.drops.push(drop);
      scene.add(drop);
    }
    this.update(0);
  }

  private chooseDestination(): void {
    // Separate roaming areas keep the fish spread across the ocean.
    this.routeEnd.set(this.centerX + randomBetween(-4.5, 4.5),
      -COURT.halfLen - 12 - this.depthOffset + randomBetween(-3, 3));
    this.routeDuration = Math.max(4, this.routeStart.distanceTo(this.routeEnd) / randomBetween(0.5, 1.1));
  }

  private nextAction(): void {
    // Every fish performs every behavior; random timing must not skip dives or jumps.
    switch (this.action) {
      case 'swim': this.action = 'surface'; break;
      case 'surface': this.action = 'dive'; break;
      case 'dive': this.action = 'submerged'; break;
      case 'submerged': this.action = 'jump'; break;
      case 'jump': this.action = 'rise'; break;
      case 'rise': this.action = 'swim'; break;
    }
    const durations: Record<FishAction, [number, number]> = {
      swim: [3, 6], surface: [5, 10], dive: [1.2, 2],
      submerged: [0.8, 2], jump: [2.2, 3], rise: [1.5, 2.5],
    };
    this.actionDuration = randomBetween(...durations[this.action]);
  }

  update(dt: number): void {
    this.elapsed += dt;
    this.actionTime += dt;
    while (this.actionTime >= this.actionDuration) {
      this.actionTime -= this.actionDuration;
      this.nextAction();
    }
    this.routeTime += dt;
    while (this.routeTime >= this.routeDuration) {
      this.routeTime -= this.routeDuration;
      this.routeStart.copy(this.routeEnd);
      this.chooseDestination();
    }
    this.position.lerpVectors(this.routeStart, this.routeEnd,
      THREE.MathUtils.smoothstep(this.routeTime, 0, this.routeDuration));
    const t = this.elapsed;
    const progress = this.actionTime / this.actionDuration;
    let height = -0.45 + 0.1 * Math.sin(progress * Math.PI * 4);
    let tilt = 0.06 * Math.sin(t * 4);
    switch (this.action) {
      case 'surface': {
        // Rise, linger with his head above water, then settle before the next action.
        const lift = THREE.MathUtils.smoothstep(this.actionTime, 0, 1.5)
          * (1 - THREE.MathUtils.smoothstep(this.actionTime, this.actionDuration - 1.5, this.actionDuration));
        height += lift * (0.65 + 0.035 * Math.sin(t * 2));
        tilt = 0.12 * Math.sin(t * 1.5);
        break;
      }
      case 'dive':
        height = THREE.MathUtils.lerp(-0.45, -2, THREE.MathUtils.smoothstep(progress, 0, 1));
        tilt = -0.4 * Math.sin(progress * Math.PI);
        break;
      case 'submerged': height = -2; break;
      case 'jump':
        height = -2 + 5 * Math.sin(progress * Math.PI);
        tilt = 0.8 * Math.cos(progress * Math.PI);
        break;
      case 'rise': height = THREE.MathUtils.lerp(-2, -0.45, THREE.MathUtils.smoothstep(progress, 0, 1)); break;
    }

    const x = this.position.x;
    const z = this.position.y;
    const direction = this.routeEnd.x >= this.routeStart.x ? 1 : -1;
    const texture = this.above.material.map!;
    texture.repeat.x = direction;
    texture.offset.x = direction < 0 ? 1 : 0;
    for (const sprite of [this.above, this.below]) {
      sprite.position.set(x, height, z);
      sprite.material.rotation = tilt * direction;
    }
    // Fade the underwater silhouette as he dives deeper.
    this.below.material.opacity = 0.35 * THREE.MathUtils.smoothstep(height, -1.8, -0.4);
    if ((this.previousHeight < 0 && height >= 0) || (this.previousHeight >= 0 && height < 0)) {
      this.splashAge = 0;
      this.splashOrigin.set(x, 0.04, z);
    }
    this.previousHeight = height;
    this.splashAge += dt;
    const age = this.splashAge;
    this.ripple.visible = age < 1.2;
    this.ripple.position.copy(this.splashOrigin);
    this.ripple.scale.setScalar(0.25 + age * 1.5);
    this.ripple.material.opacity = 0.65 * Math.max(0, 1 - age / 1.2);
    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];
      const angle = i / this.drops.length * Math.PI * 2;
      const y = 0.06 + (1.7 + (i % 3) * 0.25) * age - 3.8 * age * age;
      drop.visible = age < 0.8 && y > 0;
      drop.position.set(
        this.splashOrigin.x + Math.cos(angle) * age * 1.3,
        y,
        this.splashOrigin.z + Math.sin(angle) * age * 1.3,
      );
    }
  }
}
