import type { Game } from '../sim/game';
import type { GameEvent } from '../types';

const qualityWord = (q: number): string => (q > 0.85 ? 'PERFECT' : q > 0.6 ? 'GOOD' : q > 0.3 ? 'OK' : 'SHANK');

function el(cls: string, parent: HTMLElement, tag = 'div'): HTMLElement {
  const e = document.createElement(tag);
  e.className = cls;
  parent.appendChild(e);
  return e;
}

export class Hud {
  private island: HTMLElement;
  private bay: HTMLElement;
  private score: HTMLElement;
  private status: HTMLElement;
  private touches: HTMLElement;
  private hit: HTMLElement;
  private dbg: HTMLElement;
  private help: HTMLElement;
  private hitTimer = 0;
  private last = { score: '', status: '', touches: '' };

  constructor(parent: HTMLElement) {
    const root = el('hud', parent);
    const topContainer = el('hud-top', root);
    this.island = el('hud-island', topContainer);
    const homeLabel = el('hud-island-home-label', this.island);
    homeLabel.textContent = "home";
    this.score = el('hud-score', this.island);
    const awayLabel = el('hud-island-away-label', this.island);
    awayLabel.textContent = "away";
    this.bay = el('hud-touches-bay', topContainer);
    this.touches = el('hud-touches', this.bay);
    this.status = el('hud-status', this.bay);
    this.hit = el('hud-hit', root);
    this.dbg = el('hud-debug', root);
    this.help = el('hud-help', root);
    this.help.innerHTML = [
      '<ul><li>jump [space]</li><li>aim [hz pos][mouse][arrow keys]</li><li>power [z pos][hold shift]</li><li>bump [fist][Q]</li><li>set [point up][E]</li><li>spike [thumbs up][F]</li><li>serve [spike+nt+spike][X]</li><li>neutral [palm]</li><li>debug [`]</li><li>restart [enter]</li></ul>'
    ].join('<br>');
    this.dbg.style.display = 'none';
  }

  onEvent(ev: GameEvent): void {
    if (ev.kind === 'hit') {
      const who = ev.player === 0 ? '' : 'CPU ';
      this.hit.textContent = `${who}${ev.type.toUpperCase()} · ${qualityWord(ev.quality)}`;
      this.hit.className = 'hud-hit show q' + (ev.quality > 0.85 ? '3' : ev.quality > 0.6 ? '2' : ev.quality > 0.3 ? '1' : '0');
      this.hitTimer = 1.1;
      const clr = ev.clearance === null ? 'same side' : ev.clearance === Infinity ? 'n/a' : ev.clearance.toFixed(2) + ' m';
      this.dbg.textContent = `last hit: ${ev.type}  quality ${ev.quality.toFixed(2)}  dist ${ev.dist.toFixed(2)} m  flight ${ev.T.toFixed(2)} s  net clearance ${clr}  target (${ev.target.x.toFixed(1)}, ${ev.target.z.toFixed(1)})`;
    } else if (ev.kind === 'net') {
      this.hit.textContent = 'NET';
      this.hit.className = 'hud-hit show q0';
      this.hitTimer = 0.8;
    }
  }

  setDebug(on: boolean): void {
    this.dbg.style.display = on ? 'block' : 'none';
  }

  update(g: Game, dt: number): void {
    const s = `${g.scores[0]} — ${g.scores[1]}`;
    if (s !== this.last.score) this.score.textContent = this.last.score = s;

    const st = this.statusText(g);
    if (st !== this.last.status) {
      this.status.textContent = this.last.status = st;
      this.status.style.opacity = st ? '1' : '0';
    }

    const t = g.phase === 'rally' && g.lastTouchSide !== 0 ? `${g.lastTouchSide === 1 ? 'Your' : 'CPU'} touches: ${g.touchCount}/3` : '';
    if (t !== this.last.touches) this.touches.textContent = this.last.touches = t;

    if (this.hitTimer > 0) {
      this.hitTimer -= dt;
      if (this.hitTimer <= 0) this.hit.className = 'hud-hit';
    }
  }

  private statusText(g: Game): string {
    switch (g.phase) {
      case 'ready':
        return g.server.id === 0 ? 'Your serve — thumbs up or X to toss; palm, then thumbs up to hit' : 'CPU serving…';
      case 'toss':
        return g.server.id === 0 ? 'Open palm, then thumbs up to serve (or X)' : '';
      case 'point': {
        const who = g.lastPointWinner === 1 ? 'You score' : 'CPU scores';
        return `${who} — ${g.message}`;
      }
      case 'over':
        return `${g.winner === 1 ? 'You win!' : 'CPU wins'}  Press Enter to play again`;
      default:
        return '';
    }
  }
}
