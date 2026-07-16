import { ChildPathProgress, DayCompletionRecord } from '@/models/types'
import { isSupabaseConfigured } from '@/lib/supabase/client'

const KEY_PREFIX = 'edu-kids-path-progress-'

function createEmptyProgress(childId: string): ChildPathProgress {
  return {
    childId,
    unlockedDay: 1,
    completions: [],
  }
}

export function getPathProgress(childId: string): ChildPathProgress {
  if (typeof window === 'undefined') {
    return createEmptyProgress(childId)
  }

  const raw = window.localStorage.getItem(`${KEY_PREFIX}${childId}`)
  if (!raw) {
    return createEmptyProgress(childId)
  }

  try {
    const parsed = JSON.parse(raw) as ChildPathProgress
    return {
      childId,
      unlockedDay: parsed.unlockedDay ?? 1,
      completions: parsed.completions ?? [],
    }
  } catch {
    return createEmptyProgress(childId)
  }
}

function saveProgress(progress: ChildPathProgress): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(
    `${KEY_PREFIX}${progress.childId}`,
    JSON.stringify(progress),
  )
}

export function isDayUnlocked(childId: string, dayNumber: number): boolean {
  const progress = getPathProgress(childId)
  return dayNumber <= progress.unlockedDay
}

export function isDayCompleted(childId: string, dayNumber: number): boolean {
  const progress = getPathProgress(childId)
  return progress.completions.some((item) => item.dayNumber === dayNumber)
}

export function getDayCompletion(
  childId: string,
  dayNumber: number,
): DayCompletionRecord | undefined {
  const progress = getPathProgress(childId)
  return progress.completions.find((item) => item.dayNumber === dayNumber)
}

async function saveDayCompletionToCloud(
  childId: string,
  record: DayCompletionRecord,
): Promise<void> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) {
    return
  }

  try {
    await fetch('/api/progress/day-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ childId, ...record }),
    })
  } catch {
    // Silent fallback: local storage already contains the completion.
  }
}

export function completeDay(
  childId: string,
  record: DayCompletionRecord,
): ChildPathProgress {
  const progress = getPathProgress(childId)
  const withoutSameDay = progress.completions.filter(
    (item) => item.dayNumber !== record.dayNumber,
  )

  const updated: ChildPathProgress = {
    childId,
    unlockedDay: Math.min(31, Math.max(progress.unlockedDay, record.dayNumber + 1)),
    completions: [...withoutSameDay, record],
  }

  saveProgress(updated)
  void saveDayCompletionToCloud(childId, record)

  return updated
}
