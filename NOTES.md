# Sand Volley — design notes

Small motion-controlled, multiplayer-ready sand volleyball. Punchy arcade physics (think *Just Volleyball*),
3D low-poly look, CPU opponent (Wii Tennis style), 1v1 first and 2v2 later. Web game: TypeScript + Three.js + Vite.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # rules checks + headless CPU-vs-CPU soak (no browser needed)
npm run build
```

URL options: `?skill=easy|normal|hard`, `?demo` (CPU vs CPU, to watch), `?seed=123`.

## Controls (part 1: keyboard + mouse stand in for the one-hand controller)

| Input | Action | Future hand equivalent |
|---|---|---|
| WASD | move (W = toward net) | hand position relative to a calibrated center (joystick) |
| Space | jump | open palm pushed up |
| Mouse (or arrow keys) | aim: x = left/right, up = deeper | hand offset at the moment of contact |
| Q / E / F | bump / set / spike | fist / point / (gesture TBD) |
| X, then X again | serve: toss, then hit | victory sign |
| Shift (held) | power: faster, flatter ball | hand speed |
| ` (backtick) | debug: reach spheres, ball path, last-hit numbers | |

Rally: serve -> bump -> set -> spike (max 3 touches per side). In 1v1 you play all three touches yourself.
Aim forward (mouse up) on a **bump** to send a free ball over the net instead of passing to your own side.

## Architecture

```
src/sim/      pure game simulation, NO DOM / Three.js (can run headless or on a network host)
  ball.ts     ball physics, swept net collision, landing, trajectory prediction
  hit.ts      hit specs, aim -> target, solver (target + flight time -> velocity), net clearance, contact error
  player.ts   movement, jump, bounds, armed-action buffer
  game.ts     phases (ready/toss/rally/point/over), touches, scoring, in/out/net calls, events
src/input/
  keyboard.ts HumanController (keyboard + mouse)
  hand.ts     HandController (MediaPipe + keyboard fallback)
  hand-signal.ts one-euro filter, deadzone, 200 ms aim history
  cpu.ts      CpuController (easy/normal/hard)             -> also the 2v2 teammate
src/view/     Three.js scene, HUD, debug overlay (reads the sim, never writes to it)
scripts/      rules-test.ts (deterministic rules/net/bounds/solver checks), sim-test.ts (CPU soak)
```

**Controller interface** — everything that drives a player returns the same struct each tick, so swapping the input is a one-class change:

```ts
interface PlayerInput { moveX, moveF, jump, action: 'bump'|'set'|'spike'|'serve'|null, aim: {x, d, power} }
```

## How a hit works

1. **WHAT** — the action key/gesture picks the hit type. **WHERE** — a continuous aim picks the target.
2. An armed action waits up to 0.18 s for the ball to enter that hit's reach sphere (generous timing = hides camera lag later).
   Contact fires at the closest approach, so you get the best quality the ball offers.
3. **Quality** (0..1) = distance from the ideal contact point (and a small penalty for pressing very early).
4. Target = aim target + contact-relative bias (ball to your left -> goes a bit left) + random error that grows as quality drops.
5. **Solver** turns (contact point, target, flight time T) into a launch velocity. T comes from power; poor contact lengthens it.
6. **Net check**: if the shot crosses the net, T is stretched (higher arc) until it clears the tape with a margin that grows with quality;
   as a last resort a too-low ball becomes a lob rather than netting. Very poor contact (< ~0.45) blends in a pop-up mishit.

Key constants are in `src/config.ts` (gravity 14, court 8x14 m, net 2.43 m) and `HIT_SPECS` in `src/sim/hit.ts`
(reach, sweet spot, flight-time range per hit). Tune feel there.

## Rules implemented

Rally scoring to 11 (win by 2, cap 15), winner serves. Ball landing in a court loses that side the point (line counts in);
landing out loses the side that touched it last; net contact falls to the hitter's side; a 4th touch on one side is a fault;
a dropped serve toss is a free re-toss; server must stay behind the end line until the serve is hit.

## Plan from here (24 h budget)

| Part | Goal |
|---|---|
| **1 (done)** | Court, bounds, net, rules, keyboard/mouse, CPU, solver |
| **2 (implemented)** | MediaPipe `HandController`: `@mediapipe/tasks-vision` GestureRecognizer, calibration, one-euro filter, 2-3 frame gesture debounce, camera preview. Movement = horizontal hand offset from calibrated center, automatic forward/backward tracking (deadzone + smoothing, mirrored x). Aim = hand offset sampled from a ~200 ms buffer at contact. Depth cue = hand scale (wrist -> middle-finger base), not MediaPipe z. Keep the keyboard fallback. |
| **3 (implemented; live network playtest pending)** | PeerJS (WebRTC) 1v1: host runs `Game`, clients send `PlayerInput`, host broadcasts snapshots at 20-30 Hz, clients interpolate. Then 4 slots for 2v2 with CPUs filling empty slots. Sim already uses a seeded RNG and fixed 120 Hz step. |
| 4 | Juice: hit-stop, screen shake on spikes, sand puffs, ball trail, SFX, menus, difficulty. Dive if time allows. |

Cut order if short on time: dive, 2v2, polish. Target: playable gesture game + online 1v1.

## Known limits / next steps

- Part 1 view layer is un-profiled; hit feel (T ranges, reach) wants a real playtest pass.
- Net clearance, bounds and rules are covered by `npm test`; visuals, camera framing and input feel are not.
- Network clients view the court from their own baseline; horizontal keyboard/hand movement and aim are mirrored for far-side players.

## Hand controller

Enable the camera on localhost or HTTPS, then hold one hand steady at a comfortable center for 12 camera frames. Recalibrate resets the center and neutral hand size. The mirrored preview matches horizontal movement. Horizontal hand offset drives left/right movement and aim; vertical hand movement is ignored. Forward/backward movement automatically follows the predicted ball landing depth (or returns to receiving depth when the ball is on the other side). Serving stays manual; a deadzone, adaptive one-euro filters, and movement smoothing suppress jitter. The simulation samples the last 200 ms of filtered aim at actual contact, rather than locking aim when a gesture is armed.

Fist = bump, pointing up = set, thumbs up = spike (or serve during toss/ready), open palm = neutral. Gestures require three consecutive recognition frames and trigger once per change; return to palm before repeating a hit. Wrist-to-middle-finger-base image distance sets power relative to calibrated size; MediaPipe z is unused. WASD and Space remain available; Q/E/F/X use keyboard/mouse aim. Camera off, calibration, missing hand, and stalled tracking fall back to keyboard/mouse. Recognition loads its WASM and model from the existing remote URLs.

Lateral steering uses a stronger response curve for small hand movements and fast movement smoothing. With the hand centered, assistive tracking automatically moves sideways toward an incoming ball's predicted landing x and slows near the target. Hand steering overrides tracking when moving away and adds a boost when moving toward the ball. No lateral tracking runs during serves or while the ball is headed to the opponent's side. Keyboard A/D retains direct control, and shot aim keeps its original sensitivity.

## Multiplayer

Run `npm run dev`, then choose **Host 1v1** or **Host 2v2** in the lower-left multiplayer panel. Select and copy the invite link that appears; another browser can paste it into the Join field or open it directly. You can also join by room ID (select 1v1 or 2v2 to match). The host must keep the tab open. Empty seats immediately run CPUs, and joining replaces a CPU without restarting the match. Departing players return their seats to CPUs; a silent connection times out after five seconds. P1/P3 are home, P2/P4 away. The first guest joins the opposing team, the next joins the host's team. Only the host can restart a finished match with Enter.

Both players need access to the game URL. A localhost invite works across tabs on one machine; for other devices, serve the app at a shared reachable address (or deploy the built static files with HTTPS). Hand tracking needs HTTPS or localhost. PeerJS uses its default public signaling and ICE configuration; restrictive networks may require separately configured signaling/relay infrastructure. There is no host migration: if the host leaves, clients show a disconnect message and can leave or rejoin.

The host alone advances `Game` at 120 Hz. Clients send validated, sequenced `PlayerInput` at 30 Hz, with actions sent immediately and consumed once on the host. Movement expires after 300 ms without input. The host publishes full snapshots at 25 Hz, including player/ball state, scores, phases and events. Clients render a 100 ms delayed interpolation buffer, reject old snapshots, and avoid blending across contacts or phase changes. Events play once when their snapshot is displayed. Online play disables simulation hitstop so networking continues steadily. There is no client prediction or rollback; input latency includes network travel and the interpolation delay. Remote hand aim is the most recently received 200 ms hand-history average.

For 2v2, all four players share the same ball and per-team three-touch count. Teammates share the contact cooldown to prevent simultaneous overlapping hits. CPUs choose the nearest teammate to receive while the other covers its half. Serving currently uses each team's first slot (P1 or P2).

`npm run test:network` covers input validation, duplicate/action handling, stale inputs, CPU takeover, snapshot roundtrips, interpolation, event timing, four-slot reset/contact rules, and a three-minute headless 2v2 match. `npm test` includes these checks plus hand-input, rules, and 1v1 soak tests. Browser-to-browser WebRTC connectivity, camera behavior, latency and NAT traversal still need a live playtest.
