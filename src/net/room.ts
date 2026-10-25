import { loadAppearance, saveAppearance, validAppearance, type Appearance } from '../appearance';
import type { Controller, Game } from '../sim/game';
import type { GameEvent } from '../types';
import { controlledPlayerId, type SlotController } from './state';

// Online multiplayer (PeerJS host/join, snapshots, remote inputs, invite panel) has been removed.
// Room now only wires up local play: the human (or demo CPU) controls slot 0, CPUs control the rest.
// The public API is unchanged so main.ts keeps working without edits.
export class Room {
  // Kept for main.ts compatibility; always false now that there is no networking.
  readonly isClient = false;
  readonly online = false;
  private appearance = loadAppearance();

  // `_parent` and `_params` are unused now (they were for the multiplayer panel and ?room/?net URL options),
  // but the signature is kept so the call site in main.ts does not change.
  constructor(private game: Game, private slots: SlotController[], local: Controller, _parent: HTMLElement, _params: URLSearchParams) {
    // Teammate lookup is still needed by the CPU slots for 2v2-style layouts.
    for (const slot of slots) slot.teamSlots = slots;
    // The local player always sits in slot 0 (1v1: home side vs. a CPU in slot 1).
    this.slots[0].human = local;
    Object.assign(game.players[0], this.appearance);
  }

  // Save the chosen look and apply it to the local player (slot 0).
  customize(appearance: Appearance): void {
    if (!validAppearance(appearance)) return;
    this.appearance = { ...appearance };
    saveAppearance(this.appearance);
    Object.assign(this.game.players[0], this.appearance);
  }

  // Only keeps the camera/view on the human-controlled player; there is no network traffic to send.
  tick(_dt: number): void {
    this.updateViewPlayer();
  }

  // No-op: events only needed recording to forward them to guests in online games.
  record(_events: GameEvent[]): void {}

  // Keep the view on whichever human-controlled player is currently relevant (owner is always slot 0 locally).
  private updateViewPlayer(): void {
    this.game.viewPlayerId = controlledPlayerId(this.game, this.slots.map(s => !!s.human), 0);
  }

  // Returns no extra events: the remote snapshot buffer that used to supply them is gone.
  render(_now: number): GameEvent[] {
    this.updateViewPlayer();
    return [];
  }

  // Nothing to tear down (no peer connections); kept because callers may still invoke it.
  close(): void {}
}