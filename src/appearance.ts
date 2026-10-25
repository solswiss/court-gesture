export interface Appearance { color: number; }
export const DEFAULT_APPEARANCE: Appearance = { color: 0xffaa00 };
export function validAppearance(value: unknown): value is Appearance {
  if (!value || typeof value !== 'object') return false;
  const a = value as Appearance;
  const color = (n: number) => Number.isInteger(n) && n >= 0 && n <= 0xffffff;
  return color(a.color);
}
export function loadAppearance(): Appearance {
  try { const a: unknown = JSON.parse(localStorage.getItem('sand-volley-appearance') ?? 'null'); if (validAppearance(a)) return { ...a }; } catch { /* Storage may be unavailable. */ }
  return { ...DEFAULT_APPEARANCE };
}
export function saveAppearance(a: Appearance): void {
  try { localStorage.setItem('sand-volley-appearance', JSON.stringify(a)); } catch { /* Session customization still works. */ }
}
