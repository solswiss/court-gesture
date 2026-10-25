import { SIM_DT } from './config';
import { CpuController, type CpuSkillName } from './input/cpu';
import { HandController } from './input/hand';
import { makeRng } from './rng';
import { Game, type Controller } from './sim/game';
import { Hud } from './view/hud';
import { World3D } from './view/scene';

// URL options:  ?skill=easy|normal|hard   ?demo (CPU vs CPU, to watch)   ?seed=123
const params = new URLSearchParams(location.search);
const skillParam = params.get('skill');
const skill: CpuSkillName = skillParam === 'easy' || skillParam === 'hard' ? skillParam : 'normal';
const seed = Number(params.get('seed') ?? Date.now() % 100000) || 1;

const app = document.getElementById('app')!;
const near: Controller = params.has('demo') ? new CpuController(skill, makeRng(seed + 1)) : new HandController(app);
const far: Controller = new CpuController(skill, makeRng(seed + 2));
const game = new Game([near, far], seed);

const world = new World3D(app, game);
const hud = new Hud(app);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Backquote') {
    world.debug = !world.debug;
    hud.setDebug(world.debug);
  }
  if (e.code === 'Enter' && game.phase === 'over') game.restart();
});

let last = performance.now();
let acc = 0;
const SPIKE_HITSTOP_MS = 50;
let pauseUntil = 0;
function frame(now: number): void {
  // Exclude hitstop time so the simulation never catches up through the pause.
  const dt = Math.min(0.1, Math.max(0, now - Math.max(last, pauseUntil)) / 1000);
  last = now;
  if (now < pauseUntil) {
    requestAnimationFrame(frame);
    return;
  }
  acc += dt;
  let hitstop = false;
  // fixed-step sim (120 Hz) decoupled from render rate
  while (acc >= SIM_DT) {
    game.update(SIM_DT);
    acc -= SIM_DT;
    // Handle contact immediately, before another simulation step moves the ball.
    for (const ev of game.drainEvents()) {
      hud.onEvent(ev);
      world.onEvent(ev);
      if (ev.kind === 'hit' && ev.type === 'spike') hitstop = true;
    }
    if (hitstop) {
      pauseUntil = performance.now() + SPIKE_HITSTOP_MS;
      acc = 0;
      break;
    }
  }
  // Draw the contact frame once, then freeze visuals and timers together.
  hud.update(game, hitstop ? 0 : dt);
  world.update(hitstop ? 0 : dt, now / 1000);
  world.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
