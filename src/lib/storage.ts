const KEY = "edu-kids-state";

export interface LocalAppState {
  childId: string;
  lastSessionAt?: string;
  xp: number;
  coins: number;
}

export function saveState(state: LocalAppState): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function loadState(): LocalAppState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(KEY);
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as LocalAppState;
  } catch {
    return null;
  }
}
