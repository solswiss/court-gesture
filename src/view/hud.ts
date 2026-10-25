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
  private tutorial: HTMLElement;
  private hitTimer = 0;
  private last = { score: '', status: '', touches: '' };

  constructor(parent: HTMLElement, private game: Game) {
    const root = el('hud', parent);
    this.tutorial = el('hud-tutorial', root);
    this.tutorial.setAttribute('role', 'status');
    this.tutorial.setAttribute('aria-live', 'polite');
    Object.assign(this.tutorial.style, {
      position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
      width: 'min(340px, 60vw)', padding: '4px 8px',
      background: 'transparent', color: '#fff', textAlign: 'center',
      fontSize: '13px', lineHeight: '1.35', textShadow: '0 1px 4px #000, 0 0 8px #0008',
    });
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
      '<ul><li>aim [hand offset]</li><li>power [hand size]</li><li>bump [fist]</li><li>set [point up]</li><li>spike [thumbs up]</li><li>serve [spike+nt+spike]</li><li>neutral [palm]</li>'
    ].join('<br>');
    this.dbg.style.display = 'none';
  }

  onEvent(ev: GameEvent): void {
    if (ev.kind === 'hit') {
      const who = ev.player === (this.game?.viewPlayerId ?? 0) ? '' : `P${ev.player + 1} `;
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
    this.tutorial.hidden = !g.tutorial;
    // Give the compact tutorial the top-center space normally used by the scoreboard.
    this.island.parentElement!.style.visibility = g.tutorial ? 'hidden' : 'visible';
    if (g.tutorial) {
      const { step, count } = g.tutorial;
      const move = g.tutorialMoves[step];
      const gesture = ['Make a closed fist', 'Point one finger up', 'Give a thumbs up', 'Give a thumbs up'][step];
      const instruction = move === 'serve'
        ? g.phase === 'ready' ? 'Give a thumbs up to toss the ball.'
          : g.phase === 'toss' ? 'Open your palm, then give a thumbs up to hit the toss.' : 'Watch your serve!'
        : move === 'bump' ? `${gesture} as the ball flies over the net.`
        : g.ball.mode === 'held' ? `${gesture} to release the ball and ${move}.`
        : `Watch your ${move}!`;
      const text = `Practice ${step + 1}/${g.tutorialMoves.length}: ${move.toUpperCase()} (${count}/4)\n${count === 4 ? 'Great! Watch your shot finish…' : instruction}\nOpen palm between attempts.`;
      if (this.tutorial.textContent !== text) this.tutorial.textContent = text;
      this.tutorial.style.whiteSpace = 'pre-line';
    }
    const s = `${g.scores[0]} — ${g.scores[1]}`;
    if (s !== this.last.score) this.score.textContent = this.last.score = s;

    const st = this.statusText(g);
    if (st !== this.last.status) {
      this.status.textContent = this.last.status = st;
      this.status.style.opacity = st ? '1' : '0';
    }

    const t = g.phase === 'rally' && g.lastTouchSide !== 0 ? `${g.lastTouchSide === g.players[g.viewPlayerId].side ? 'Your team’s' : 'Other team’s'} touches: ${g.touchCount}/3` : '';
    if (t !== this.last.touches) this.touches.textContent = this.last.touches = t;

    if (this.hitTimer > 0) {
      this.hitTimer -= dt;
      if (this.hitTimer <= 0) this.hit.className = 'hud-hit';
    }
  }

  private statusText(g: Game): string {
    if (g.tutorial) return 'Complete the warm-up to start the match';
    switch (g.phase) {
      case 'rally':
        return g.players.length === 4 ? `Controlling P${g.viewPlayerId + 1}` : '';
      case 'ready':
        return g.server.id === g.viewPlayerId ? 'Your serve' : `P${g.server.id + 1} serving…`;
      case 'toss':
        return g.server.id === g.viewPlayerId ? 'Your serve' : `P${g.server.id + 1} serving…`;
      case 'point': {
        const who = g.lastPointWinner === g.players[g.viewPlayerId].side ? 'Your team scores' : 'Other team scores';
        return `${who} — ${g.message}`;
      }
      case 'over':
        return `${g.winner === g.players[g.viewPlayerId].side ? 'Your team wins!' : 'Other team wins'}  ${g.viewPlayerId === 0 ? 'Host: press Enter to play again' : 'Waiting for host to restart'}`;
      default:
        return '';
    }
  }
}
