import { Menu } from './view/menu';
import { Sound } from './view/sound';
import { Room } from './net/room';
import { SlotController } from './net/state';
import { SIM_DT } from './config';
import { CpuController, type CpuSkillName } from './input/cpu';
import { HandController } from './input/hand';
import { makeRng } from './rng';
import { Game, type Controller } from './sim/game';
import { Hud } from './view/hud';
import { World3D } from './view/scene';
import { CrabVisitor } from './view/crab';

// URL options:  ?skill=easy|normal|hard   ?demo (CPU vs CPU, to watch)   ?seed=123
const params = new URLSearchParams(location.search);
const skillParam = params.get('skill');
const skill: CpuSkillName = skillParam === 'easy' || skillParam === 'hard' ? skillParam : 'normal';
const seed = Number(params.get('seed') ?? Date.now() % 100000) || 1;

const app = document.getElementById('app')!;
const local: Controller = params.has('demo') ? new CpuController(skill, makeRng(seed + 1)) : new HandController(app);
const count = params.get('slots') === '4' ? 4 : 2;
const slots = Array.from({ length: count }, (_, i) => new SlotController(new CpuController(skill, makeRng(seed + i + 2))));
const game = new Game(slots, seed, !params.has('demo'));
const room = new Room(game, slots, local, app, params);

const world = new World3D(app, game);
const hud = new Hud(app, game);
const crab = new CrabVisitor(app, world.scene, world.camera);
const sound = new Sound();
const menu = new Menu(app, game, room.online, room.isClient, skill, level => {
  for (const slot of slots) (slot.cpu as CpuController).setSkill(level);
  if (local instanceof CpuController) local.setSkill(level);
  const url = new URL(location.href); url.searchParams.set('skill', level); history.replaceState(null, '', url);
}, enabled => sound.setEnabled(enabled), enabled => { world.effectsEnabled = enabled; },
() => { local.update(0, game, game.players[game.viewPlayerId]); }, appearance => room.customize(appearance));

window.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLElement && (e.target.isContentEditable || e.target.closest('input, textarea, select, button'))) return;
  if (e.code === 'Backquote') {
    world.debug = !world.debug;
    hud.setDebug(world.debug);
  }
  if (!room.isClient && e.code === 'KeyR' && !e.repeat) game.restart(); // && game.phase === 'over'
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
  menu.update();
  if (menu.paused) {
    acc = 0;
    world.update(0, now / 1000); world.render();
    requestAnimationFrame(frame);
    return;
  }
  acc += dt;
  let hitstop = false;
  // fixed-step sim (120 Hz) decoupled from render rate
  while (acc >= SIM_DT) {
    if (!room.isClient) game.update(SIM_DT);
    room.tick(SIM_DT);
    acc -= SIM_DT;
    // Handle contact immediately, before another simulation step moves the ball.
    const events = game.drainEvents();
    room.record(events);
    for (const ev of events) {
      hud.onEvent(ev);
      world.onEvent(ev);
      sound.onEvent(ev, game.players[game.viewPlayerId].side);
      if (!room.online && world.motionEffects && ev.kind === 'hit' && ev.type === 'spike') hitstop = true;
    }
    if (hitstop) {
      pauseUntil = performance.now() + SPIKE_HITSTOP_MS;
      acc = 0;
      break;
    }
  }
  for (const event of room.render(now)) { hud.onEvent(event); world.onEvent(event); sound.onEvent(event, game.players[game.viewPlayerId].side); }
  // Draw the contact frame once, then freeze visuals and timers together.
  hud.update(game, hitstop ? 0 : dt);
  world.update(hitstop ? 0 : dt, now / 1000);
  crab.update(hitstop ? 0 : dt);
  world.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
