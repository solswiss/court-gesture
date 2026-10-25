import * as THREE from 'three';
import { loadAppearance, PANTS, type Appearance } from '../appearance';
import { Player } from '../sim/player';
import { PlayerView } from './scene';

/** Shares the game's character renderer, so the preview shows the actual outfit. */
export class Customize {
  readonly element = document.createElement('div');
  private player = new Player(0, 1, 0xffaa00);
  private renderer?: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(35, 1.4, 0.1, 30);
  private view?: PlayerView;
  private appearance = loadAppearance();
  constructor(change: (a: Appearance) => void, back: () => void) {
    this.element.className = 'customize-screen'; this.element.hidden = true;
    const title = document.createElement('h2'); title.textContent = 'Make it yours';
    const preview = document.createElement('div'); preview.className = 'character-preview';
    this.element.append(title, preview);
    const apply = () => { Object.assign(this.player, this.appearance); change({ ...this.appearance }); };
    for (const [name, key] of [['Character color', 'color'], ['Pants color', 'pantsColor']] as const) {
      const label = document.createElement('label'); label.textContent = name;
      const input = document.createElement('input'); input.type = 'color'; input.value = '#' + this.appearance[key].toString(16).padStart(6, '0');
      input.oninput = () => { this.appearance[key] = parseInt(input.value.slice(1), 16); apply(); };
      label.append(input); this.element.append(label);
    }
    const label = document.createElement('label'); label.textContent = 'Pants style';
    const styles = document.createElement('select');
    const names = { shorts: 'Beach shorts', boardshorts: 'Striped boardshorts', pants: 'Long pants' };
    for (const style of PANTS) { const option = document.createElement('option'); option.value = style; option.textContent = names[style]; option.selected = this.appearance.pants === style; styles.append(option); }
    styles.onchange = () => { this.appearance.pants = styles.value as Appearance['pants']; apply(); };
    label.append(styles); this.element.append(label);
    const done = document.createElement('button'); done.textContent = 'Done'; done.onclick = back; this.element.append(done);
    Object.assign(this.player, this.appearance);
    // Allocate a preview only when the customization screen is first opened.
    this.element.addEventListener('preview-open', () => {
      if (this.renderer) return;
      try {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); this.renderer.setSize(280, 200);
        this.renderer.domElement.setAttribute('aria-label', 'Your character preview');
        this.renderer.domElement.setAttribute('role', 'img');
        preview.append(this.renderer.domElement);
        this.camera.position.set(2.8, 1.8, 5); this.camera.lookAt(0, 1, 0);
        this.scene.add(new THREE.HemisphereLight(0xffffff, 0xbba884, 2.5));
        this.view = new PlayerView(this.player); this.scene.add(this.view.group);
      } catch { preview.textContent = 'Preview unavailable; your outfit will still apply in game.'; }
    });
    window.addEventListener('pagehide', () => this.renderer?.dispose());
  }
  update(): void {
    if (this.element.hidden) return;
    this.element.dispatchEvent(new Event('preview-open'));
    this.view?.update(0);
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  }
}
