import { predictAt } from '../src/sim/ball';
import { BALL } from '../src/config';
import assert from 'node:assert/strict';
import { assistedLateral, autoDepth, AimHistory, handAxis, OneEuroFilter } from '../src/input/hand-signal';
import { Game, type Controller } from '../src/sim/game';
import { emptyInput } from '../src/types';
import { SIM_DT } from '../src/config';

assert.equal(handAxis(0.03), 0);
assert.equal(handAxis(-0.03), 0);
assert.equal(handAxis(1), 1);
assert.equal(handAxis(-1), -1);
const filter = new OneEuroFilter();
assert.equal(filter.update(0.5, 0), 0.5);
const jitter = filter.update(0.51, 50);
assert.ok(jitter > 0.5 && jitter < 0.51);
assert.ok(filter.update(1, 100) > jitter);
filter.reset();
assert.equal(filter.update(0, 150), 0);
const history = new AimHistory();
history.push(0, { x: -1, d: -1, power: 0 });
history.push(150, { x: 0.5, d: 0.5, power: 0.8 });
history.push(250, { x: 1, d: 1, power: 1 });
assert.deepEqual(history.sample(250), { x: 0.75, d: 0.75, power: 0.9 });
assert.equal(history.sample(451), undefined);
history.clear();
assert.equal(history.sample(250), undefined);
let samples = 0;
const controller: Controller = {
  update: () => ({ ...emptyInput(), action: 'spike' }),
  sampleContactAim: () => { samples++; return { x: 1, d: 1, power: 1 }; },
};
const game = new Game([controller, { update: emptyInput }]);
game.phase = 'rally';
const player = game.players[0];
player.teleport(0, 4);
game.ball.pos = { x: 0, y: 3, z: 3.7 };
game.ball.mode = 'live';
game.update(SIM_DT);
assert.equal(samples, 1);
assert.equal(game.hitSerial, 1);
assert.deepEqual(player.aim, { x: 1, d: 1, power: 1 });
console.log('Hand signal and contact-time aim checks passed');

game.phase = 'ready';
assert.equal(autoDepth(game, player), 0);
game.phase = 'rally';
game.ball.pos = { x: 0, y: 4, z: 5 };
game.ball.vel = { x: 0, y: 0, z: 0 };
player.teleport(0, 2);
assert.ok(autoDepth(game, player) < 0, 'run backward toward deep ball');
player.teleport(0, 7);
assert.ok(autoDepth(game, player) > 0, 'run forward toward ball');
game.ball.pos.z = -5;
player.teleport(0, 3.5);
assert.equal(autoDepth(game, player), 0, 'wait at receiving depth');
console.log('Automatic depth positioning checks passed');

// A moving ball lands deeper than its current position and its hit-height crossing.
game.ball.pos = { x: 0, y: 4, z: 2 };
game.ball.vel = { x: 0, y: 0, z: 4 };
const landing = predictAt(game.ball.pos, game.ball.vel, BALL.radius);
player.teleport(0, landing.z);
assert.equal(autoDepth(game, player), 0, 'stop at predicted landing depth');
player.lastType = 'set';
assert.equal(autoDepth(game, player), 0, 'landing target is independent of gesture');
const farPlayer = game.players[1];
game.ball.pos.z *= -1;
game.ball.vel.z *= -1;
farPlayer.teleport(0, -landing.z);
assert.equal(autoDepth(game, farPlayer), 0, 'landing depth works on far side');
console.log('Landing depth checks passed');

game.phase = 'rally';
game.ball.pos = { x: 3, y: 4, z: 4 };
game.ball.vel = { x: 0, y: 0, z: 0 };
player.teleport(0, 4);
assert.ok(assistedLateral(game, player, 0) > 0, 'neutral hand tracks incoming ball');
const toward = assistedLateral(game, player, 0.1);
assert.ok(toward > 0.1 && toward <= 1, 'small steering gets a useful boost');
const away = assistedLateral(game, player, -0.1);
assert.ok(away < 0, 'player can steer away from ball');
assert.ok(toward > Math.abs(away), 'extra assist applies toward ball');
game.phase = 'ready';
assert.equal(assistedLateral(game, player, 1), 1);
assert.equal(assistedLateral(game, player, -1), -1);
console.log('Assisted lateral steering checks passed');

game.phase = 'rally';
player.teleport(3, 4);
assert.equal(assistedLateral(game, player, 0), 0, 'tracking stops at landing x');
player.teleport(4, 4);
assert.ok(assistedLateral(game, player, 0) < 0, 'tracking can move left');
assert.ok(assistedLateral(game, player, 0.1) > 0, 'manual steering overrides tracking');
game.ball.pos.z = -4;
assert.equal(assistedLateral(game, player, 0), 0, 'no sideways chase on opponent side');
game.phase = 'toss';
assert.equal(assistedLateral(game, player, 0), 0, 'no tracking during serve');
console.log('Automatic lateral tracking checks passed');
