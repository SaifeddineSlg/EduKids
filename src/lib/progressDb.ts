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

function emptyAnalytics(): ChildAnalytics {
  return {
    totalAttempts: 0,
    correctAttempts: 0,
    accuracy: 0,
    exerciseAttempts: 0,
    quizAttempts: 0,
    averageSeconds: 0,
    masteredLessons: [],
    lessonsToReview: [],
    weeklyScore: 0,
    last7DaysActivity: [],
  }
}

export async function fetchChildAnalytics(
  childId: string,
): Promise<ChildAnalytics> {
  try {
    const response = await fetch(
      `/api/progress/analytics?childId=${encodeURIComponent(childId)}`,
    )
    if (!response.ok) {
      return emptyAnalytics()
    }

    const body = (await response.json()) as AnalyticsApiResponse
    if (!body.ok || !body.analytics) {
      return emptyAnalytics()
    }

    return body.analytics
  } catch {
    return emptyAnalytics()
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
