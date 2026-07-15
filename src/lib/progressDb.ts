import { SubjectId } from '@/models/types'
import { isSupabaseConfigured } from '@/lib/supabase/client'

const DB_KEY = 'edu-kids-progress-db'

export type ActivityKind = 'exercise' | 'quiz'

export interface AttemptRecord {
  id: string
  childId: string
  subjectId: SubjectId
  lessonId: string
  activityKind: ActivityKind
  activityId: string
  correct: boolean
  difficulty?: number
  elapsedSeconds?: number
  createdAt: string
}

interface ProgressDb {
  attempts: AttemptRecord[]
}

export interface ChildAnalytics {
  totalAttempts: number
  correctAttempts: number
  accuracy: number
  exerciseAttempts: number
  quizAttempts: number
  averageSeconds: number
  masteredLessons: string[]
  lessonsToReview: string[]
  weeklyScore: number
  last7DaysActivity: Array<{ day: string; attempts: number; correct: number }>
}

export interface ChildProgressSnapshot {
  xp: number
  points: number
  coins: number
  streakDays: number
  masteredSkills: number
  totalSkills: number
  badges: string[]
}

interface AnalyticsApiResponse {
  ok: boolean
  analytics?: ChildAnalytics
}

function createEmptyDb(): ProgressDb {
  return {
    attempts: [],
  }
}

function loadDb(): ProgressDb {
  if (typeof window === 'undefined') {
    return createEmptyDb()
  }

  const raw = window.localStorage.getItem(DB_KEY)
  if (!raw) {
    return createEmptyDb()
  }

  try {
    const parsed = JSON.parse(raw) as ProgressDb
    return {
      attempts: parsed.attempts ?? [],
    }
  } catch {
    return createEmptyDb()
  }
}

function saveDb(db: ProgressDb): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(DB_KEY, JSON.stringify(db))
}

async function saveAttemptToCloud(
  input: Omit<AttemptRecord, 'id' | 'createdAt'>,
): Promise<void> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) {
    return
  }

  try {
    await fetch('/api/progress/attempts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
  } catch {
    // Silent fallback: local storage already contains the attempt.
  }
}

export function recordAttempt(
  input: Omit<AttemptRecord, 'id' | 'createdAt'>,
): void {
  const db = loadDb()
  db.attempts.push({
    ...input,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
  })
  saveDb(db)

  void saveAttemptToCloud(input)
}

export async function getChildAnalyticsFromCloud(
  childId: string,
): Promise<ChildAnalytics | null> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) {
    return null
  }

  try {
    const response = await fetch(
      `/api/progress/analytics?childId=${encodeURIComponent(childId)}`,
    )
    if (!response.ok) {
      return null
    }

    const body = (await response.json()) as AnalyticsApiResponse
    if (!body.ok || !body.analytics) {
      return null
    }

    return body.analytics
  } catch {
    return null
  }
}

export function getChildAnalytics(childId: string): ChildAnalytics {
  const db = loadDb()
  const attempts = db.attempts.filter((item) => item.childId === childId)
  const totalAttempts = attempts.length
  const correctAttempts = attempts.filter((item) => item.correct).length
  const accuracy =
    totalAttempts === 0
      ? 0
      : Math.round((correctAttempts / totalAttempts) * 100)
  const exerciseAttempts = attempts.filter(
    (item) => item.activityKind === 'exercise',
  ).length
  const quizAttempts = attempts.filter(
    (item) => item.activityKind === 'quiz',
  ).length

  const durations = attempts
    .filter((item) => typeof item.elapsedSeconds === 'number')
    .map((item) => item.elapsedSeconds ?? 0)
  const averageSeconds =
    durations.length === 0
      ? 0
      : Math.round(
          durations.reduce((sum, value) => sum + value, 0) / durations.length,
        )

  const lessonMap = new Map<string, { total: number; correct: number }>()
  attempts.forEach((item) => {
    const current = lessonMap.get(item.lessonId) ?? { total: 0, correct: 0 }
    current.total += 1
    if (item.correct) {
      current.correct += 1
    }
    lessonMap.set(item.lessonId, current)
  })

  const masteredLessons: string[] = []
  const lessonsToReview: string[] = []

  lessonMap.forEach((stats, lessonId) => {
    const ratio = stats.total === 0 ? 0 : stats.correct / stats.total
    if (ratio >= 0.75 && stats.total >= 4) {
      masteredLessons.push(lessonId)
      return
    }

    if (ratio < 0.6 || stats.total < 4) {
      lessonsToReview.push(lessonId)
    }
  })

  const weeklyScore = attempts
    .filter((item) => {
      const created = new Date(item.createdAt).getTime()
      const diff = Date.now() - created
      return diff <= 7 * 24 * 60 * 60 * 1000
    })
    .reduce((score, item) => score + (item.correct ? 10 : 3), 0)

  const last7DaysActivity = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date()
    day.setDate(day.getDate() - (6 - index))
    const dayKey = day.toISOString().slice(0, 10)
    const dayAttempts = attempts.filter(
      (item) => item.createdAt.slice(0, 10) === dayKey,
    )

    return {
      day: dayKey,
      attempts: dayAttempts.length,
      correct: dayAttempts.filter((item) => item.correct).length,
    }
  })

  return {
    totalAttempts,
    correctAttempts,
    accuracy,
    exerciseAttempts,
    quizAttempts,
    averageSeconds,
    masteredLessons,
    lessonsToReview,
    weeklyScore,
    last7DaysActivity,
  }
}

function computeStreak(
  last7DaysActivity: ChildAnalytics['last7DaysActivity'],
): number {
  let streak = 0
  for (let index = last7DaysActivity.length - 1; index >= 0; index -= 1) {
    if (last7DaysActivity[index].attempts > 0) {
      streak += 1
      continue
    }
    break
  }
  return streak
}

export function buildProgressSnapshotFromAnalytics(
  analytics: ChildAnalytics,
  fallbackTotalSkills: number,
): ChildProgressSnapshot {
  const totalSkills = Math.max(1, fallbackTotalSkills)
  const masteredSkills = Math.min(analytics.masteredLessons.length, totalSkills)
  const points = analytics.weeklyScore + analytics.correctAttempts * 2
  const xp =
    analytics.correctAttempts * 20 +
    (analytics.totalAttempts - analytics.correctAttempts) * 5 +
    masteredSkills * 40
  const coins = Math.floor(points / 12)
  const streakDays = computeStreak(analytics.last7DaysActivity)
  const badges: string[] = []

  if (analytics.totalAttempts >= 1) {
    badges.push('Curieux du jour')
  }
  if (analytics.totalAttempts >= 8) {
    badges.push('Mini marathon')
  }
  if (analytics.accuracy >= 70 && analytics.totalAttempts >= 6) {
    badges.push('Precision etoilee')
  }
  if (streakDays >= 2) {
    badges.push('Habitude magique')
  }
  if (streakDays >= 5) {
    badges.push('Serie de champion')
  }
  if (masteredSkills >= 1) {
    badges.push('Notion debloquee')
  }
  if (masteredSkills >= 4) {
    badges.push('Cerveau turbo')
  }
  if (xp >= 250) {
    badges.push('Fusee 250 XP')
  }
  if (xp >= 700) {
    badges.push('Eclair 700 XP')
  }
  if (xp >= 1200) {
    badges.push('Legende 1200 XP')
  }

  return {
    xp,
    points,
    coins,
    streakDays,
    masteredSkills,
    totalSkills,
    badges,
  }
}
