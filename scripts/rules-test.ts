// Deterministic checks of the rules, bounds and net logic. Run: npm run rules
import { COURT, NET, PLAYER, SIM_DT } from '../src/config';
import { Ball } from '../src/sim/ball';
import { Game, type Controller } from '../src/sim/game';
import { aimTarget, HIT_SPECS, idealPoint, resolveHit } from '../src/sim/hit';
import { makeRng } from '../src/rng';
import { emptyInput, type GameEvent, type HitType, type PlayerInput, type Side, type Vec3 } from '../src/types';

let failed = 0;
function check(name: string, ok: boolean, detail = ''): void {
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

class Idle implements Controller {
  update(): PlayerInput {
    return emptyInput();
  }
}

class Scripted implements Controller {
  constructor(private fn: (g: Game, i: PlayerInput) => void) {}
  update(_dt: number, g: Game): PlayerInput {
    const i = emptyInput();
    this.fn(g, i);
    return i;
  }
}

function newGame(ctrls: [Controller, Controller] = [new Idle(), new Idle()], seed = 1): Game {
  return new Game(ctrls, seed);
}

/** Put the game mid-rally with a live ball. */
function setRally(g: Game, pos: Vec3, vel: Vec3, lastTouchSide: Side, touches = 1): void {
  g.phase = 'rally';
  g.ball.mode = 'live';
  g.ball.landing = null;
  g.ball.pos = { ...pos };
  g.ball.vel = { ...vel };
  g.lastTouchSide = lastTouchSide;
  g.touchCount = touches;
}

function runUntilPoint(g: Game, maxSec = 8): GameEvent[] {
  const evs: GameEvent[] = [];
  for (let i = 0; i < maxSec / SIM_DT; i++) {
    g.update(SIM_DT);
    evs.push(...g.drainEvents());
    if (g.phase === 'point' || g.phase === 'over') break;
  }
  return evs;
}

const pointOf = (evs: GameEvent[]) => evs.find((e): e is Extract<GameEvent, { kind: 'point' }> => e.kind === 'point');

// ---------------------------------------------------------------- landing calls
{
  let g = newGame();
  setRally(g, { x: 0, y: 4, z: -3 }, { x: 0, y: 0, z: 0 }, 1);
  let p = pointOf(runUntilPoint(g));
  check('lands in far court, last touch near -> near side wins', p?.winner === 1 && p.reason === 'In!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: 0, y: 4, z: 3 }, { x: 0, y: 0, z: 0 }, 1);
  p = pointOf(runUntilPoint(g));
  check('lands in own court -> opponent wins', p?.winner === -1 && p.reason === 'In!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: 0, y: 4, z: -9 }, { x: 0, y: 0, z: 0 }, 1);
  p = pointOf(runUntilPoint(g));
  check('beyond end line, last touch near -> far wins (Out!)', p?.winner === -1 && p.reason === 'Out!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: 5.5, y: 4, z: -3 }, { x: 0, y: 0, z: 0 }, -1);
  p = pointOf(runUntilPoint(g));
  check('beyond sideline, last touch far -> near wins (Out!)', p?.winner === 1 && p.reason === 'Out!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: COURT.halfW + 0.1, y: 4, z: -3 }, { x: 0, y: 0, z: 0 }, 1);
  p = pointOf(runUntilPoint(g));
  check('ball touching the sideline counts IN', p?.reason === 'In!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: COURT.halfW + 0.3, y: 4, z: -3 }, { x: 0, y: 0, z: 0 }, 1);
  p = pointOf(runUntilPoint(g));
  check('ball clearly past the sideline is OUT', p?.reason === 'Out!', JSON.stringify(p));
}

// ---------------------------------------------------------------- net
{
  let g = newGame();
  setRally(g, { x: 0, y: 1.2, z: 0.8 }, { x: 0, y: 0, z: -12 }, 1);
  let evs = runUntilPoint(g);
  let p = pointOf(evs);
  check('fast ball into the net: net event fires', evs.some((e) => e.kind === 'net'));
  check('ball does not pass through the net (stays near side)', g.ball.pos.z > 0, `z=${g.ball.pos.z.toFixed(2)}`);
  check('net ball falling on hitter side -> Net! point for other side', p?.winner === -1 && p.reason === 'Net!', JSON.stringify(p));

  g = newGame();
  setRally(g, { x: 0, y: NET.top + 1.2, z: 2 }, { x: 0, y: 0, z: -6 }, 1);
  evs = runUntilPoint(g);
  check('ball well above the tape clears the net (no net event)', !evs.some((e) => e.kind === 'net'));
  check('...and lands on far side', g.ball.landing !== null && g.ball.landing.z < 0);

  g = newGame();
  setRally(g, { x: NET.halfW + 0.6, y: 1.0, z: 2 }, { x: 0, y: 0, z: -8 }, 1);
  evs = runUntilPoint(g);
  check('ball passing outside the posts does not hit the net', !evs.some((e) => e.kind === 'net'));

  // tunnelling: very fast ball must still be caught by the swept test
  g = newGame();
  setRally(g, { x: 0, y: 1.5, z: 3 }, { x: 0, y: 0, z: -80 }, 1);
  evs = runUntilPoint(g);
  check('80 m/s ball cannot tunnel through the net', g.ball.pos.z > -0.5 && evs.some((e) => e.kind === 'net'), `z=${g.ball.pos.z.toFixed(2)}`);
}

// ---------------------------------------------------------------- touches
{
  const g = newGame();
  const pl = g.players[0];
  pl.teleport(0, 4);
  setRally(g, idealPoint(pl.actor, HIT_SPECS.bump), { x: 0, y: 0, z: 0 }, 1, 3);
  pl.pending = { type: 'bump', age: 0 };
  const evs = runUntilPoint(g);
  const p = pointOf(evs);
  check('4th touch on one side is a fault', p?.winner === -1 && p.reason === 'Too many touches', JSON.stringify(p));
}
{
  const g = newGame();
  const pl = g.players[0];
  pl.teleport(0, 4);
  setRally(g, idealPoint(pl.actor, HIT_SPECS.bump), { x: 0, y: 0, z: 0 }, -1, 3);
  pl.pending = { type: 'bump', age: 0 };
  g.update(SIM_DT);
  check('first touch after the other side hit resets the count', g.touchCount === 1 && g.phase === 'rally', `count=${g.touchCount}`);
}

// ---------------------------------------------------------------- serve flow
{
  // dropped toss -> retoss, no penalty
  const g = newGame([
    new Scripted((gg, i) => {
      if (gg.phase === 'ready') i.action = 'serve'; // toss, then never hit it
    }),
    new Idle(),
  ]);
  const evs: GameEvent[] = [];
  for (let i = 0; i < 4 / SIM_DT; i++) {
    g.update(SIM_DT);
    evs.push(...g.drainEvents());
    if (evs.some((e) => e.kind === 'retoss')) break;
  }
  check('dropped toss -> retoss event, no point scored', evs.some((e) => e.kind === 'retoss') && g.scores[0] + g.scores[1] === 0);
}
{
  const rng = makeRng(7);
  let ok = 0;
  let nets = 0;
  let lands = 0;
  const N = 300;
  for (let n = 0; n < N; n++) {
    const ax = rng() * 2 - 1;
    const ad = rng() * 2 - 1;
    const pw = rng();
    const bot = (): Controller =>
      new Scripted((gg, i) => {
        i.aim = { x: ax, d: ad, power: pw };
        if (gg.phase === 'ready') i.action = 'serve';
        else if (gg.phase === 'toss' && gg.ball.vel.y < 0 && gg.ball.pos.y < 2.9) i.action = 'serve';
      });
    const g = newGame([bot(), new Idle()], n + 1);
    const evs = runUntilPoint(g);
    const p = pointOf(evs);
    const hit = evs.find((e): e is Extract<GameEvent, { kind: 'hit' }> => e.kind === 'hit');
    if (evs.some((e) => e.kind === 'net')) nets++;
    if (hit && hit.type === 'serve') ok++;
    if (p?.winner === 1 && p.reason === 'In!') lands++;
  }
  check(`${N} random serves: all got hit`, ok === N, `${ok}/${N}`);
  check(`${N} random serves (any aim/power): none hit the net`, nets === 0, `${nets} net hits`);
  check(`${N} random serves: all land in the far court (clean contact -> aim is respected)`, lands === N, `${lands}/${N}`);
}

// ---------------------------------------------------------------- solver: net clearance + bounds
function fly(from: Vec3, vel: Vec3): { net: boolean; land: { x: number; z: number } | null } {
  const b = new Ball();
  b.pos = { ...from };
  b.vel = { ...vel };
  b.mode = 'live';
  let net = false;
  for (let i = 0; i < 6 / SIM_DT; i++) {
    const r = b.step(SIM_DT);
    if (r.netHit) net = true;
    if (r.landed) break;
  }
  return { net, land: b.landing };
}

{
  const rng = makeRng(42);
  const R = (a: number, b: number) => a + rng() * (b - a);
  const cases: { name: string; type: HitType; gen: () => { from: Vec3; aimD: [number, number] } }[] = [
    { name: 'spike (contact 2.2-3.8m, 0.9-3.5m from net)', type: 'spike', gen: () => ({ from: { x: R(-3.5, 3.5), y: R(2.2, 3.8), z: R(0.9, 3.5) }, aimD: [-1, 1] }) },
    { name: 'serve (behind baseline, 2.0-3.1m)', type: 'serve', gen: () => ({ from: { x: R(-3, 3), y: R(2.0, 3.1), z: R(7.3, 8.5) }, aimD: [-1, 1] }) },
    { name: 'bump sent over the net (aim.d > 0.6)', type: 'bump', gen: () => ({ from: { x: R(-3.5, 3.5), y: R(0.5, 1.6), z: R(1.5, 8) }, aimD: [0.61, 1] }) },
  ];
  for (const c of cases) {
    const N = 4000;
    let nets = 0;
    let outs = 0;
    let tight = 0;
    for (let n = 0; n < N; n++) {
      const { from, aimD } = c.gen();
      const aim = { x: R(-1, 1), d: R(aimD[0], aimD[1]), power: R(0, 1) };
      const actor = { x: from.x, y: 0, z: from.z, side: 1 as Side };
      const res = resolveHit({ type: c.type, actor, ballPos: from, ballVel: { x: 0, y: -3, z: -3 }, aim, quality: 1, rng });
      const f = fly(from, res.vel);
      if (f.net) nets++;
      if (f.land && (Math.abs(f.land.x) > COURT.halfW || Math.abs(f.land.z) > COURT.halfLen)) outs++;
      if (res.clearance !== null && res.clearance < 0.12) tight++;
    }
    check(`net: ${c.name}: no accidental net hits at full quality`, nets === 0, `${nets}/${N} hit net, ${tight} below the margin, ${outs} out`);
    check(`bounds: ${c.name}: full-quality hits never land out`, outs === 0, `${outs}/${N} out`);
  }

  // low-quality hits are allowed to miss (that's the skill part) but should rarely net
  let nets = 0;
  let outs = 0;
  const N = 4000;
  for (let n = 0; n < N; n++) {
    const from = { x: R(-3.5, 3.5), y: R(2.2, 3.8), z: R(0.9, 3.5) };
    const res = resolveHit({
      type: 'spike',
      actor: { x: from.x, y: 0, z: from.z, side: 1 },
      ballPos: from,
      ballVel: { x: 0, y: -3, z: -3 },
      aim: { x: R(-1, 1), d: R(-1, 1), power: R(0, 1) },
      quality: R(0.5, 0.8),
      rng,
    });
    const f = fly(from, res.vel);
    if (f.net) nets++;
    if (f.land && (Math.abs(f.land.x) > COURT.halfW || Math.abs(f.land.z) > COURT.halfLen)) outs++;
  }
  console.log(`info  mid-quality (0.5-0.8) spikes: ${((nets / N) * 100).toFixed(1)}% net, ${((outs / N) * 100).toFixed(1)}% out`);

  // intended targets never leave the court for any aim (the error is what throws balls out)
  let badTargets = 0;
  for (const type of ['bump', 'set', 'spike', 'serve'] as HitType[]) {
    for (let n = 0; n < 2000; n++) {
      const side: Side = rng() < 0.5 ? 1 : -1;
      const a = { x: R(-4, 4), y: 0, z: side * R(0.8, 8), side };
      const t = aimTarget(type, a, { x: a.x + R(-1.5, 1.5), y: 1, z: a.z }, { x: R(-1, 1), d: R(-1, 1), power: 0.5 });
      if (Math.abs(t.x) > COURT.halfW - 0.29 || Math.abs(t.z) > COURT.halfLen - 0.49) badTargets++;
      if (t.over !== (Math.sign(t.z) !== side && type !== 'set' && !(type === 'bump' && Math.sign(t.z) === side))) badTargets++;
    }
  }
  check('aim targets stay inside the court and `over` matches the side', badTargets === 0, `${badTargets} bad`);
}

// ---------------------------------------------------------------- player bounds + jump
{
  const dirs: [string, number, number][] = [
    ['forward (toward net)', 0, 1],
    ['backward', 0, -1],
    ['left', -1, 0],
    ['right', 1, 0],
  ];
  for (const [name, mx, mf] of dirs) {
    const g = newGame([
      new Scripted((gg, i) => {
        i.moveX = mx;
        i.moveF = mf;
        gg.phase === 'ready' && (i.action = null);
      }),
      new Idle(),
    ]);
    g.phase = 'rally'; // not serving: normal bounds
    g.ball.mode = 'live';
    g.ball.pos = { x: 0, y: 50, z: -5 };
    g.lastTouchSide = -1;
    for (let i = 0; i < 6 / SIM_DT; i++) {
      g.ball.pos.y = 50; // keep the ball out of play for this check
      g.ball.vel = { x: 0, y: 0, z: 0 };
      g.update(SIM_DT);
    }
    const p = g.players[0].pos;
    const ok =
      p.z >= 0.7 - 1e-6 &&
      p.z <= COURT.halfLen + 4 + 1e-6 &&
      Math.abs(p.x) <= COURT.halfW + 3.5 + 1e-6;
    check(`player bounds: running ${name} stops at the limit`, ok, `x=${p.x.toFixed(2)} z=${p.z.toFixed(2)}`);
  }
  {
    // server cannot step into the court before the serve is hit
    const g = newGame([
      new Scripted((_gg, i) => {
        i.moveF = 1;
      }),
      new Idle(),
    ]);
    for (let i = 0; i < 4 / SIM_DT; i++) g.update(SIM_DT);
    check('server held behind the end line until the serve', g.players[0].pos.z >= COURT.halfLen + 0.3 - 1e-6, `z=${g.players[0].pos.z.toFixed(2)}`);
  }
  {
    // jump height / landing
    const g = newGame([
      new Scripted((gg, i) => {
        i.jump = true;
        void gg;
      }),
      new Idle(),
    ]);
    let max = 0;
    for (let i = 0; i < 1.5 / SIM_DT; i++) {
      g.update(SIM_DT);
      max = Math.max(max, g.players[0].y);
    }
    const expect = (PLAYER.jumpV * PLAYER.jumpV) / (2 * PLAYER.gravity);
    check('jump apex matches v^2/2g', Math.abs(max - expect) < 0.05, `max=${max.toFixed(3)} expected=${expect.toFixed(3)}`);
  }
}

{
  let action: HitType | null = null;
  const human = new Scripted((_g, input) => { input.action = action; action = null; });
  const g = new Game([human, new Idle()], 1, true);
  const practice = (move: HitType) => { action = move; g.update(SIM_DT); };
  practice('spike');
  check('tutorial ignores out-of-order moves', g.tutorial?.count === 0 && g.tutorial.step === 0);
  const startZ = g.ball.pos.z;
  g.update(SIM_DT);
  check('bump feed flies from the opposite court toward the player', startZ < 0 && g.ball.mode === 'live' && g.ball.pos.z > startZ);
  practice('bump');
  check('gesture outside ball reach does not count', g.tutorial?.count === 0);
  g.startTutorial();
  let sawLanding = false;
  let sawRefeed = false;
  for (let i = 0; i < 480; i++) {
    g.update(SIM_DT);
    if (g.ball.mode === 'dead') sawLanding = true;
    if (sawLanding && g.ball.mode === 'live') { sawRefeed = true; break; }
  }
  check('missed balls are fed again without progress or points', sawRefeed && g.tutorial?.count === 0 && g.scores.every(s => s === 0));
  let contacts = 0;
  let previousSerial = g.hitSerial;
  for (let i = 0; i < 120 * 90 && g.tutorial; i++) {
    const move = g.tutorialMoves[g.tutorial.step];
    const ideal = idealPoint(g.players[0].actor, HIT_SPECS[move]);
    if (g.ball.mode === 'held') {
      const heldY = g.ball.pos.y;
      for (let j = 0; j < 120; j++) g.update(SIM_DT);
      check(`${move} ball waits for gesture`, g.ball.mode === 'held' && g.ball.pos.y === heldY);
      practice('bump');
      check(`${move} ignores wrong release gesture`, g.ball.mode === 'held');
      action = move;
    }
    // Trigger one gesture when a falling feed reaches the intended contact height.
    if (g.ball.vel.y < 0 && Math.abs(g.ball.pos.y - ideal.y) < 0.15 && g.touchCount === 0) action = move;
    g.update(SIM_DT);
    if (g.hitSerial !== previousSerial) {
      contacts++;
      previousSerial = g.hitSerial;
      const events = g.drainEvents();
      check(`practice contact ${contacts} emits hit feedback`, events.some(e => e.kind === 'hit' && e.type === move));
      if (move === 'bump') check('bump feed clears the net', !events.some(e => e.kind === 'net'));
    }
  }
  check('tutorial requires sixteen actual ball contacts including serves', contacts === 16);
  check('practice ends at a fresh serve with no points', g.tutorial === null && g.phase === 'ready' && g.scores.every(s => s === 0));
  g.restart();
  check('restart starts a match without tutorial', g.tutorial === null && g.phase === 'ready');
  g.startTutorial();
  check('tutorial can be replayed explicitly', g.tutorial?.step === 0 && g.tutorial.count === 0);
  g.restart();
  check('restart exits an active tutorial', g.tutorial === null && g.phase === 'ready' && g.ball.mode === 'held');
}

console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll rule checks passed');
process.exit(failed ? 1 : 0);
