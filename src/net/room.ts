import Peer, { type DataConnection } from 'peerjs';
import type { Controller, Game } from '../sim/game';
import type { GameEvent } from '../types';
import { isSnapshot, RemoteController, SlotController, SnapshotBuffer, snapshot, type Snapshot } from './state';

const VERSION = 1;
interface Guest { connection: DataConnection; slot: number; remote: RemoteController; heard: number }

export class Room {
  readonly isClient: boolean;
  readonly online: boolean;
  private peer?: Peer;
  private connection?: DataConnection;
  private guests = new Map<string, Guest>();
  private buffer = new SnapshotBuffer();
  private sequence = 0;
  private inputSequence = 0;
  private sendClock = 0;
  private events: GameEvent[] = [];
  private connected = false;
  private lastHost = 0;
  private status = document.createElement('div');
  private roster = document.createElement('div');
  private link = document.createElement('input');
  private join = document.createElement('input');
  private ended = false;
  private matchStarted = false;
  private panel = document.createElement('section');

  constructor(private game: Game, private slots: SlotController[], private local: Controller, parent: HTMLElement, private params: URLSearchParams) {
    this.isClient = params.has('room');
    this.online = this.isClient || params.get('net') === 'host';
    const panel = this.panel;
    panel.className = 'network-panel';
    panel.setAttribute('aria-label', 'Multiplayer');
    const title = document.createElement('strong');
    title.textContent = 'MULTIPLAYER';
    this.status.setAttribute('role', 'status');
    this.status.textContent = this.online ? 'Connecting…' : 'Local game';
    const one = this.button('Host 1v1', () => this.navigate(2));
    const two = this.button('Host 2v2', () => this.navigate(4));
    this.join.placeholder = 'Room ID or invite link';
    this.join.setAttribute('aria-label', 'Room ID or invite link');
    const size = document.createElement('select');
    size.setAttribute('aria-label', 'Room size for joining by ID');
    for (const n of [2, 4]) { const option = document.createElement('option'); option.value = String(n); option.textContent = n === 2 ? '1v1' : '2v2'; option.selected = n === slots.length; size.append(option); }
    const joinButton = this.button('Join', () => {
      const value = this.join.value.trim();
      if (!value) { this.status.textContent = 'Enter a room ID or invite link.'; return; }
      try {
        const url = new URL(value);
        const id = url.searchParams.get('room');
        if (!id) throw new Error('Invite has no room ID');
        this.navigate(url.searchParams.get('slots') === '4' ? 4 : 2, id);
      } catch {
        if (/^[\w-]{1,100}$/.test(value)) this.navigate(Number(size.value), value);
        else this.status.textContent = 'Enter a valid room ID or invite link.';
      }
    });
    this.link.readOnly = true;
    this.link.hidden = true;
    this.link.setAttribute('aria-label', 'Invite link');
    this.link.onclick = () => this.link.select();
    const leave = this.button('Leave / local', () => { const url = new URL(location.href); url.searchParams.delete('room'); url.searchParams.delete('net'); location.assign(url); });
    panel.append(title, this.status, this.roster, one, two, this.join, size, joinButton, this.link);
    if (this.online) panel.append(leave);
    parent.append(panel);
    if (!this.isClient) this.slots[0].human = local;
    if (this.online) this.start();
    else this.updateRoster();
    window.addEventListener('pagehide', () => this.close());
  }

  private button(label: string, click: () => void): HTMLButtonElement {
    const button = document.createElement('button'); button.textContent = label; button.onclick = click; return button;
  }
  private navigate(count: number, room?: string): void {
    const url = new URL(location.href);
    url.searchParams.delete('demo');
    url.searchParams.set('slots', String(count));
    if (room) { url.searchParams.set('room', room); url.searchParams.delete('net'); }
    else { url.searchParams.delete('room'); url.searchParams.set('net', 'host'); }
    location.assign(url);
  }
  private send(connection: DataConnection, value: unknown): void {
    if (!connection.open) return;
    // A congested reliable channel should disconnect instead of accumulating seconds of old inputs.
    if (connection.dataChannel?.bufferedAmount > 256_000) { connection.close(); return; }
    try { connection.send(value); } catch { connection.close(); }
  }
  private start(): void {
    try {
      this.peer = new Peer();
      this.peer.on('open', id => {
        if (this.isClient) {
          const c = this.peer!.connect(this.params.get('room')!, { reliable: true, serialization: 'json', metadata: { version: VERSION } });
          this.connection = c;
          c.on('open', () => { this.status.textContent = 'Connected; waiting for a seat…'; });
          c.on('data', data => this.receiveHost(data));
          c.on('close', () => this.fail('Host disconnected. Leave to play locally or join again.'));
          c.on('error', error => this.fail(`Connection failed: ${error.message}`));
          this.lastHost = performance.now();
        } else {
          this.status.textContent = `Hosting ${this.slots.length === 4 ? '2v2' : '1v1'} · room ${id}`;
          const url = new URL(location.href); url.searchParams.delete('net'); url.searchParams.set('room', id);
          this.link.value = url.href; this.link.hidden = false;
          this.updateRoster();
        }
      });
      this.peer.on('connection', c => this.accept(c));
      this.peer.on('error', error => this.fail(`Network error: ${error.message}`));
      this.peer.on('disconnected', () => { if (!this.ended) { this.status.textContent = 'Signaling disconnected; reconnecting…'; this.peer?.reconnect(); } });
    } catch (error) { this.fail(`Unable to start multiplayer: ${String(error)}`); }
  }
  private accept(c: DataConnection): void {
    if (this.isClient) { c.close(); return; }
    c.on('open', () => {
      const slot = this.slots.findIndex((s, i) => i > 0 && !s.human);
      if (this.ended || c.metadata?.version !== VERSION || slot < 0 || this.guests.has(c.peer)) {
        this.send(c, { kind: 'reject', reason: 'Room full or incompatible client.' });
        setTimeout(() => c.close(), 200);
        return;
      }
      const remote = new RemoteController();
      this.slots[slot].human = remote;
      this.guests.set(c.peer, { connection: c, slot, remote, heard: performance.now() });
      this.send(c, { kind: 'welcome', version: VERSION, slot, slots: this.slots.length });
      this.send(c, snapshot(this.game, this.sequence++));
      this.updateRoster();
    });
    c.on('data', data => {
      const guest = this.guests.get(c.peer);
      if (!guest || guest.connection !== c || !data || typeof data !== 'object') return;
      const m = data as { kind?: string; seq?: number; input?: unknown };
      if (m.kind === 'input' && guest.remote.receive(m.seq!, m.input, performance.now())) guest.heard = performance.now();
    });
    const remove = () => {
      const guest = this.guests.get(c.peer);
      if (guest?.connection !== c) return;
      this.slots[guest.slot].human = undefined;
      this.guests.delete(c.peer);
      this.updateRoster();
    };
    c.on('close', remove);
    c.on('error', () => { remove(); c.close(); });
  }
  private updateRoster(): void {
    const names = this.slots.map((s, i) => `P${i + 1} (${i % 2 === 0 ? 'home' : 'away'}): ${s.human ? 'human' : 'CPU'}`);
    this.roster.textContent = names.join(' · ');
    for (const guest of this.guests.values()) this.send(guest.connection, { kind: 'roster', names });
  }
  private receiveHost(data: unknown): void {
    if (this.ended || !data || typeof data !== 'object') return;
    const m = data as Record<string, unknown>;
    if (m.kind === 'reject') { this.fail(String(m.reason)); this.connection?.close(); return; }
    if (m.kind === 'welcome') {
      if (m.version !== VERSION || m.slots !== this.slots.length || !Number.isInteger(m.slot) || Number(m.slot) < 1 || Number(m.slot) >= this.slots.length) {
        this.fail('Room size differs. Join using the host’s full invite link.'); this.connection?.close(); return;
      }
      this.game.viewPlayerId = Number(m.slot);
      this.connected = true;
      this.status.textContent = `Connected as P${this.game.viewPlayerId + 1} · ${this.game.players[this.game.viewPlayerId].side === 1 ? 'home' : 'away'}`;
    }
    if (m.kind === 'roster' && Array.isArray(m.names)) this.roster.textContent = m.names.map(String).join(' · ');
    if (m.kind === 'snapshot' && this.connected) {
      const s = data as Snapshot;
      if (!isSnapshot(s, this.slots.length)) return;
      if (this.buffer.push(s, performance.now())) { this.lastHost = performance.now(); }
    }
  }
  tick(dt: number): void {
    if (this.ended) return;
    if (this.isClient) {
      if (!this.connected) {
        if (this.lastHost && performance.now() - this.lastHost > 12000) this.fail('Host did not respond. Check the invite link and try again.');
        return;
      }
      if (performance.now() - this.lastHost > 6000) { this.fail('Host connection lost. Leave to play locally or join again.'); return; }
      const input = this.local.update(dt, this.game, this.game.players[this.game.viewPlayerId]);
      const aim = this.local.sampleContactAim?.();
      if (aim) input.aim = aim;
      this.sendClock += dt;
      if (this.sendClock >= 1 / 30 || input.action) {
        this.sendClock = 0;
        if (this.connection) this.send(this.connection, { kind: 'input', seq: this.inputSequence++, input });
      }
    } else if (this.online) {
      this.sendClock += dt;
      if (this.sendClock >= 1 / 25) {
        this.sendClock %= 1 / 25;
        const s = snapshot(this.game, this.sequence++, this.events.splice(0));
        for (const guest of this.guests.values()) {
          if (performance.now() - guest.heard > 5000) {
            this.slots[guest.slot].human = undefined; this.guests.delete(guest.connection.peer); guest.connection.close(); this.updateRoster();
          } else this.send(guest.connection, s);
        }
      }
    }
  }
  record(events: GameEvent[]): void { if (this.online && !this.isClient) this.events.push(...events); }
  render(now: number): GameEvent[] {
    if (this.isClient && this.connected && !this.ended) this.buffer.render(this.game, now);
    if (this.game.phase === 'over') this.matchStarted = false;
    else if (['toss', 'rally', 'point'].includes(this.game.phase)) this.matchStarted = true;
    this.panel.hidden = this.matchStarted && !this.ended;
    return this.buffer.takeEvents();
  }
  private fail(message: string): void {
    if (this.ended) return;
    this.status.textContent = message;
    this.panel.hidden = false;
    this.close();
  }
  close(): void {
    this.ended = true;
    this.connected = false;
    for (const guest of this.guests.values()) this.slots[guest.slot].human = undefined;
    this.guests.clear();
    this.connection?.close(); this.peer?.destroy();
  }
}
