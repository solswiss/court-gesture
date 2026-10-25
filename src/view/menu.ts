import { Customize } from './customize';
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
  private lastPhase = '';
  get paused(): boolean { return this.open && !this.online; }

  constructor(parent: HTMLElement, private game: Game, private online: boolean, private client: boolean,
    skill: CpuSkillName, changeSkill: (skill: CpuSkillName) => void,
    sound: (enabled: boolean) => void, effects: (enabled: boolean) => void, private resume: () => void, appearance: (a: Appearance) => void) {
    this.overlay.className = 'game-menu';
    const dialog = document.createElement('section');
    dialog.className = 'game-menu-card';
    dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true');
    this.title.id = 'game-menu-title'; dialog.setAttribute('aria-labelledby', this.title.id);
    this.toggle.className = 'menu-toggle'; this.toggle.textContent = 'Menu';
    this.toggle.onclick = () => this.show(!this.open);
    this.restart.className = 'menu-restart'; this.restart.textContent = 'Restart'
    const select = document.createElement('select');
    select.setAttribute('aria-label', 'CPU difficulty');
    for (const level of ['easy', 'normal', 'hard'] as const) {
      const option = document.createElement('option'); option.value = level; option.textContent = level[0].toUpperCase() + level.slice(1); option.selected = level === skill; select.append(option);
    }
    select.disabled = client;
    select.onchange = () => changeSkill(select.value as CpuSkillName);
    const difficulty = document.createElement('label'); difficulty.textContent = client ? 'CPU difficulty is set by host' : 'CPU difficulty'; difficulty.append(select);
    const checkbox = (name: string, callback: (on: boolean) => void) => {
      const label = document.createElement('label'); const input = document.createElement('input');
      input.type = 'checkbox'; input.checked = true; input.onchange = () => callback(input.checked);
      label.append(input, document.createTextNode(name)); return label;
    };
    const help = document.createElement('p');
    help.className = 'menu-help';
    help.textContent = 'Players track the ball automatically. Hand offset aims your shot. Fist: bump · point up: set · thumbs up: spike/serve. Keyboard: Space, Q/E/F/X. Use the camera panel to enable hand tracking.';
    this.play.onclick = () => { this.started = true; this.show(false); };
    this.restart.textContent = 'New match'; this.restart.disabled = client;
    this.restart.onclick = () => { game.restart(); this.started = true; this.show(false); };
    const main = document.createElement('div'); main.className = 'menu-main';
    const customizeButton = document.createElement('button'); customizeButton.textContent = 'Customize character';
    const back = () => { this.customize.element.hidden = true; main.hidden = false; customizeButton.focus(); };
    this.customize = new Customize(appearance, back);
    customizeButton.onclick = () => { main.hidden = true; this.customize.element.hidden = false; this.customize.element.querySelector('input')?.focus(); };
    main.append(this.title, this.subtitle, difficulty, checkbox('Sound effects', sound), checkbox('Motion effects', effects), help, customizeButton, this.play, this.restart);
    dialog.append(main, this.customize.element);
    this.overlay.append(dialog); parent.append(this.toggle, this.overlay);
    window.addEventListener('keydown', event => {
      if (event.code === 'Tab' && this.open) {
        const controls = [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled)')].filter(el => !el.closest('[hidden]'));
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
      if (event.code !== 'Escape' || event.repeat) return;
      event.preventDefault(); this.show(!this.open);
    });
    this.show(!online);
  }
  private show(open: boolean): void {
    this.open = open; this.overlay.hidden = !open;
    this.toggle.setAttribute('aria-expanded', String(open));
    this.title.textContent = !this.started && !this.online ? 'SAND VOLLEY' : 'Match menu';
    this.subtitle.textContent = this.online ? 'Online match continues while this menu is open.' : this.started ? 'Game paused' : 'Pick your difficulty and hit the beach.';
    this.play.textContent = !this.started && !this.online ? 'Play' : 'Back to match';
    if (open) { this.customize.element.hidden = true; this.customize.element.previousElementSibling?.removeAttribute('hidden'); this.play.focus(); }
    else { (document.activeElement as HTMLElement | null)?.blur(); this.resume(); }
  }
  update(): void {
    if (this.open) this.customize.update();
    if (this.game.phase === 'over' && this.lastPhase !== 'over') {
      this.show(true);
      this.title.textContent = this.game.winner === this.game.players[this.game.viewPlayerId].side ? 'Your team wins!' : 'Match finished';
      this.subtitle.textContent = `${this.game.scores[0]} — ${this.game.scores[1]}${this.client ? ' · Waiting for host to start a new match.' : ''}`;
      if (!this.client) this.restart.focus();
    }
    if (this.lastPhase === 'over' && this.game.phase !== 'over') this.show(false);
    this.lastPhase = this.game.phase;
  }
}
