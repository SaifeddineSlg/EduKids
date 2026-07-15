export interface MemoryCard {
  skillId: string;
  easiness: number;
  intervalDays: number;
  repetitions: number;
  dueAt: Date;
}

export function scheduleNextReview(card: MemoryCard, quality: 0 | 1 | 2 | 3 | 4 | 5): MemoryCard {
  const next = { ...card };

  if (quality < 3) {
    next.repetitions = 0;
    next.intervalDays = 1;
  } else {
    next.repetitions += 1;

    if (next.repetitions === 1) {
      next.intervalDays = 1;
    } else if (next.repetitions === 2) {
      next.intervalDays = 3;
    } else {
      next.intervalDays = Math.max(1, Math.round(next.intervalDays * next.easiness));
    }

    next.easiness = Math.max(1.3, next.easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  }

  const dueAt = new Date();
  dueAt.setDate(dueAt.getDate() + next.intervalDays);
  next.dueAt = dueAt;

  return next;
}
