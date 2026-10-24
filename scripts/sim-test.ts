// Headless CPU-vs-CPU soak test of the pure sim (no browser, no Three.js).
// Run: npm run sim            (optional: npm run sim -- 30  = simulated minutes)
import { CpuController, type CpuSkillName } from '../src/input/cpu';
import { SIM_DT } from '../src/config';
import { makeRng } from '../src/rng';
import { Game } from '../src/sim/game';

const minutes = Number(process.argv[2] ?? 20);
const steps = Math.round((minutes * 60) / SIM_DT);

function run(skillA: CpuSkillName, skillB: CpuSkillName, seed: number) {
  const g = new Game([new CpuController(skillA, makeRng(seed * 2 + 1)), new CpuController(skillB, makeRng(seed * 2 + 2))], seed);
  const reasons: Record<string, number> = {};
  const hits: Record<string, number> = {};
  const quality: number[] = [];
  const rallies: number[] = [];
  let nets = 0;
  let retoss = 0;
  let hitsThisPoint = 0;
  let games = 0;
  let nanFrames = 0;
  let overFrames = 0;
  let stuckFrames = 0;
  let lastScoreTotal = 0;
  let sinceScore = 0;

  for (let i = 0; i < steps; i++) {
    g.update(SIM_DT);
    const b = g.ball.pos;
    if (!Number.isFinite(b.x + b.y + b.z) || b.y < 0 || Math.abs(b.x) > 200 || Math.abs(b.z) > 200) nanFrames++;
    for (const e of g.drainEvents()) {
      if (e.kind === 'hit') {
        hits[e.type] = (hits[e.type] ?? 0) + 1;
        quality.push(e.quality);
        hitsThisPoint++;
      } else if (e.kind === 'point') {
        reasons[e.reason] = (reasons[e.reason] ?? 0) + 1;
        rallies.push(hitsThisPoint);
        hitsThisPoint = 0;
      } else if (e.kind === 'net') nets++;
      else if (e.kind === 'retoss') retoss++;
      else if (e.kind === 'over') games++;
    }
    const total = g.scores[0] + g.scores[1];
    if (total !== lastScoreTotal) {
      lastScoreTotal = total;
      sinceScore = 0;
    } else if (++sinceScore * SIM_DT > 120 && g.phase !== 'over') stuckFrames++;
    if (g.phase === 'over' && ++overFrames > 60) {
      g.restart();
      overFrames = 0;
      lastScoreTotal = 0;
    }
  }

  const avg = (a: number[]) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : 0);
  const points = rallies.length;
  console.log(`\n== ${skillA} vs ${skillB} (seed ${seed}, ${minutes} sim-min) ==`);
  console.log(`points: ${points}   games finished: ${games}   retosses: ${retoss}   net touches: ${nets}`);
  console.log(`point reasons:`, reasons);
  console.log(`hits by type:`, hits);
  console.log(`avg hits per point: ${avg(rallies).toFixed(2)}   max: ${Math.max(0, ...rallies)}   0-1 hit points: ${rallies.filter((r) => r <= 1).length}`);
  console.log(`avg contact quality: ${avg(quality).toFixed(2)}   share >0.85: ${(quality.filter((q) => q > 0.85).length / Math.max(1, quality.length)).toFixed(2)}   share <0.3: ${(quality.filter((q) => q < 0.3).length / Math.max(1, quality.length)).toFixed(2)}`);
  console.log(`bad ball frames: ${nanFrames}   stuck (>120s without a point) frames: ${stuckFrames}`);
  return { nanFrames, stuckFrames, points };
}

const results = [run('normal', 'normal', 1), run('hard', 'easy', 2), run('easy', 'easy', 3)];
const bad = results.some((r) => r.nanFrames > 0 || r.stuckFrames > 0 || r.points === 0);
console.log(bad ? '\nFAIL: invariants violated' : '\nOK: no NaN/escaped balls, no stuck rallies');
process.exit(bad ? 1 : 0);
