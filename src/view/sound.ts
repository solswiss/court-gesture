import type { GameEvent } from '../types';

/** Short synthesized arcade cues, unlocked by a browser user gesture. */
export class Sound {
  private context?: AudioContext;
  private master?: GainNode;
  private noise?: AudioBuffer;
  private enabled = true;

  constructor() {
    window.addEventListener('pointerdown', this.unlock);
    window.addEventListener('keydown', this.unlock);
    window.addEventListener('pagehide', () => { void this.context?.close(); });
  }
  private unlock = (): void => {
    try {
      if (!this.context) {
        this.context = new AudioContext();
        this.master = this.context.createGain();
        this.master.gain.value = this.enabled ? 0.22 : 0;
        this.master.connect(this.context.destination);
        this.noise = this.context.createBuffer(1, this.context.sampleRate * 0.2, this.context.sampleRate);
        const data = this.noise.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      }
      if (this.context.state === 'suspended') void this.context.resume().catch(() => {});
    } catch { /* Audio is optional; gameplay remains available. */ }
  };
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (this.context && this.master) this.master.gain.setTargetAtTime(enabled ? 0.22 : 0, this.context.currentTime, 0.02);
  }
  private tone(frequency: number, end: number, duration: number, volume: number, delay = 0, type: OscillatorType = 'sine'): void {
    const c = this.context!;
    const start = c.currentTime + delay;
    const oscillator = c.createOscillator();
    const gain = c.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(end, start + duration);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(gain); gain.connect(this.master!);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    oscillator.start(start); oscillator.stop(start + duration + 0.01);
  }
  private puff(volume: number, cutoff: number): void {
    const c = this.context!;
    const source = c.createBufferSource();
    const filter = c.createBiquadFilter();
    const gain = c.createGain();
    source.buffer = this.noise!;
    filter.type = 'lowpass'; filter.frequency.value = cutoff;
    gain.gain.setValueAtTime(volume, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.12);
    source.connect(filter); filter.connect(gain); gain.connect(this.master!);
    source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
    source.start(); source.stop(c.currentTime + 0.13);
  }
  onEvent(event: GameEvent, localSide: number): void {
    if (!this.enabled || this.context?.state !== 'running') return;
    switch (event.kind) {
      case 'hit': {
        const pitch = { bump: 220, set: 420, spike: 130, serve: 290 }[event.type];
        this.tone(pitch, pitch * 0.45, 0.12, 0.5 + event.quality * 0.3, 0, 'triangle');
        this.puff(event.type === 'spike' ? 0.5 : 0.15, event.type === 'spike' ? 2200 : 900);
        break;
      }
      case 'toss': this.tone(320, 540, 0.12, 0.25); break;
      case 'net': this.tone(100, 45, 0.18, 0.5, 0, 'triangle'); this.puff(0.2, 600); break;
      case 'land': this.puff(0.45, 700); break;
      case 'point':
        (event.winner === localSide ? [440, 554, 660] : [330, 260, 220]).forEach((n, i) => this.tone(n, n, 0.18, 0.35, i * 0.09));
        break;
      case 'over':
        (event.winner === localSide ? [440, 554, 660, 880] : [330, 294, 262, 220]).forEach((n, i) => this.tone(n, n, 0.3, 0.4, i * 0.14));
        break;
    }
  }
}
