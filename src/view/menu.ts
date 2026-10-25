import { Customize } from './customize';
import { TitleScene } from './title-scene';
import type { Appearance } from '../appearance';
import type { CpuSkillName } from '../input/cpu';
import type { Game } from '../sim/game';

export class Menu {
  private overlay = document.createElement('div');
  private toggle = document.createElement('button');
  private title = document.createElement('h1');
  private subtitle = document.createElement('p');
  private play = document.createElement('button');
  private restart = document.createElement('button');
  private open = false;
  private started = false;
  private customize: Customize;
  private beach = new TitleScene();
  private motion = true;
  private lastPhase = '';
  private screens: HTMLElement[] = [];
  private navigation = document.createElement('nav');
  get paused(): boolean { return this.open && !this.online; }

  constructor(parent: HTMLElement, private game: Game, private online: boolean, private client: boolean,
    skill: CpuSkillName, changeSkill: (skill: CpuSkillName) => void,
    sound: (enabled: boolean) => void, effects: (enabled: boolean) => void, private resume: () => void, appearance: (a: Appearance) => void) {
    this.overlay.className = 'game-menu';
    const dialog = document.createElement('section'); dialog.className = 'title-menu';
    dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true');
    this.title.id = 'game-menu-title'; dialog.setAttribute('aria-labelledby', this.title.id);
    const eyebrow = document.createElement('p'); eyebrow.className = 'title-eyebrow'; eyebrow.textContent = 'A LITTLE SUN. A LITTLE COMPETITION.';
    this.title.className = 'title-wordmark'; this.title.innerHTML = 'SAND<span>VOLLEY</span>';
    this.subtitle.className = 'title-subtitle';
    const rule = document.createElement('div'); rule.className = 'title-rule'; rule.setAttribute('aria-hidden', 'true');
    const heading = document.createElement('header'); heading.append(eyebrow, this.title, rule, this.subtitle);
    this.navigation.setAttribute('aria-label', 'Game menu'); this.navigation.className = 'title-navigation';
    this.toggle.className = 'menu-toggle'; this.toggle.textContent = 'Menu'; this.toggle.onclick = () => this.show(!this.open);
    const button = (name: string, action: () => void) => {
      const b = document.createElement('button'); b.textContent = name; b.onclick = action; return b;
    };
    const back = () => { this.screen(this.navigation); this.navigation.querySelector('button')?.focus(); };
    const backButton = () => button('← Back', back);
    this.play.onclick = () => { this.started = true; this.show(false); };
    this.restart.textContent = 'New match'; this.restart.disabled = client;
    this.restart.onclick = () => { game.restart(); this.started = true; this.show(false); };
    this.customize = new Customize(appearance, back);
    this.customize.element.classList.add('title-subscreen'); this.customize.element.append(backButton());
    const options = document.createElement('div'); options.className = 'title-subscreen';
    const optionsTitle = document.createElement('h2'); optionsTitle.textContent = 'Options';
    const select = document.createElement('select'); select.setAttribute('aria-label', 'CPU difficulty');
    for (const level of ['easy', 'normal', 'hard'] as const) {
      const option = document.createElement('option'); option.value = level; option.textContent = level[0].toUpperCase() + level.slice(1); option.selected = level === skill; select.append(option);
    }
    select.disabled = client; select.onchange = () => changeSkill(select.value as CpuSkillName);
    const difficulty = document.createElement('label'); difficulty.textContent = client ? 'Difficulty is set by host' : 'Difficulty'; difficulty.append(select);
    const checkbox = (name: string, callback: (on: boolean) => void) => {
      const label = document.createElement('label'); const input = document.createElement('input');
      input.type = 'checkbox'; input.checked = true; input.onchange = () => callback(input.checked);
      label.append(document.createTextNode(name), input); return label;
    };
    options.append(optionsTitle, difficulty, checkbox('Sound effects', sound), checkbox('Motion effects', enabled => { this.motion = enabled; effects(enabled); }), backButton());
    const controls = document.createElement('div'); controls.className = 'title-subscreen';
    const controlsTitle = document.createElement('h2'); controlsTitle.textContent = 'How to play';
    const help = document.createElement('p'); help.className = 'menu-help';
    help.textContent = 'Your player follows the ball automatically. Move your hand to aim. Enable the camera after starting, then hold steady to calibrate.';
    const keys = document.createElement('dl'); keys.className = 'title-controls';
    for (const [action, input] of [['Bump', 'Fist'], ['Set', 'Point up'], ['Spike', 'Thumbs up'], ['Serve', 'Thumbs up, twice'], ['Power', 'Hand size'], ['Aim', 'Hand offset']]) {
      const term = document.createElement('dt'); term.textContent = action;
      const description = document.createElement('dd'); description.textContent = input; keys.append(term, description);
    }
    controls.append(controlsTitle, help, keys, backButton());
    this.navigation.append(this.play, button('Customize character', () => this.screen(this.customize.element)), button('Options', () => this.screen(options)), button('How to play', () => this.screen(controls)), this.restart);
    this.screens = [this.navigation, this.customize.element, options, controls]; this.screen(this.navigation, false);
    const footer = document.createElement('p'); footer.className = 'title-footer'; footer.textContent = 'SALT AIR. SAND COURT. YOUR NEXT RALLY.';
    const caption = document.createElement('div'); caption.className = 'title-beach-caption'; caption.innerHTML = '<span>WELCOME TO THE COAST</span><p>One more rally.<br>Then we watch the sunset.</p>';
    dialog.append(heading, this.navigation, this.customize.element, options, controls, footer);
    this.overlay.append(this.beach.element, caption, dialog); parent.append(this.toggle, this.overlay);
    window.addEventListener('keydown', event => {
      if (event.code === 'Tab' && this.open) {
        const controls = [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled)')].filter(el => !el.closest('[hidden]'));
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
      if (this.open && !this.navigation.hidden && ['ArrowDown', 'ArrowUp'].includes(event.code)) {
        const buttons = [...this.navigation.querySelectorAll('button')].filter(b => !b.hidden && !b.disabled);
        const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
        buttons[(index + (event.code === 'ArrowDown' ? 1 : buttons.length - 1) + buttons.length) % buttons.length]?.focus(); event.preventDefault();
      }
      if (event.code !== 'Escape' || event.repeat) return;
      event.preventDefault();
      if (this.open && this.navigation.hidden) back(); else this.show(!this.open);
    });
    this.show(!online);
  }
  private screen(screen: HTMLElement, focus = true): void {
    for (const element of this.screens) element.hidden = element !== screen;
    this.overlay.classList.toggle('customizing', screen === this.customize.element);
    this.overlay.scrollTop = 0;
    if (focus) screen.querySelector<HTMLElement>('input, select, button')?.focus();
  }
  private show(open: boolean): void {
    this.open = open; this.overlay.hidden = !open;
    this.overlay.parentElement?.classList.toggle('menu-open', open);
    this.toggle.setAttribute('aria-expanded', String(open));
    this.subtitle.textContent = this.online ? 'Your online match continues.' : this.started ? 'Take a breath. The beach can wait.' : 'Beach volleyball, at your own pace.';
    this.play.textContent = this.started || this.online ? 'Continue match' : 'Play';
    this.restart.hidden = !this.started && !this.online;
    if (open) { this.screen(this.navigation); this.play.focus(); }
    else { (document.activeElement as HTMLElement | null)?.blur(); this.resume(); }
  }
  update(): void {
    if (this.open) {
      this.beach.update(performance.now() / 1000, this.game.players[0].color, this.motion);
      this.customize.update();
    }
    if (this.game.phase === 'over' && this.lastPhase !== 'over') {
      this.started = true; this.show(true);
      this.subtitle.textContent = `${this.game.winner === this.game.players[this.game.viewPlayerId].side ? 'Your team wins!' : 'Match finished'}  ${this.game.scores[0]} — ${this.game.scores[1]}`;
      if (!this.client) this.restart.focus();
    }
    if (this.lastPhase === 'over' && this.game.phase !== 'over') this.show(false);
    this.lastPhase = this.game.phase;
  }
}
