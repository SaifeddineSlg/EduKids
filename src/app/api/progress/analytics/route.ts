import { NextResponse } from 'next/server'
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from '@/lib/supabase/server'

interface AttemptRow {
  child_id: string
  lesson_id: string
  activity_kind: 'exercise' | 'quiz'
  correct: boolean
  elapsed_seconds: number | null
  created_at: string
}

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Supabase server not configured' },
      { status: 500 },
    )
  }

  const url = new URL(request.url)
  const childId = url.searchParams.get('childId')

  if (!childId) {
    return NextResponse.json(
      { ok: false, error: 'Missing childId' },
      { status: 400 },
    )
  }

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('progress_attempts')
    .select(
      'child_id, lesson_id, activity_kind, correct, elapsed_seconds, created_at',
    )
    .eq('child_id', childId)
    .order('created_at', { ascending: true })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  const attempts = (data ?? []) as AttemptRow[]
  const totalAttempts = attempts.length
  const correctAttempts = attempts.filter((item) => item.correct).length
  const accuracy =
    totalAttempts === 0
      ? 0
      : Math.round((correctAttempts / totalAttempts) * 100)
  const exerciseAttempts = attempts.filter(
    (item) => item.activity_kind === 'exercise',
  ).length
  const quizAttempts = attempts.filter(
    (item) => item.activity_kind === 'quiz',
  ).length

  const durations = attempts
    .filter((item) => typeof item.elapsed_seconds === 'number')
    .map((item) => item.elapsed_seconds ?? 0)
  const averageSeconds =
    durations.length === 0
      ? 0
      : Math.round(
          durations.reduce((sum, value) => sum + value, 0) / durations.length,
        )

  const lessonMap = new Map<string, { total: number; correct: number }>()
  attempts.forEach((item) => {
    const current = lessonMap.get(item.lesson_id) ?? { total: 0, correct: 0 }
    current.total += 1
    if (item.correct) {
      current.correct += 1
    }
    lessonMap.set(item.lesson_id, current)
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
      const created = new Date(item.created_at).getTime()
      const diff = Date.now() - created
      return diff <= 7 * 24 * 60 * 60 * 1000
    })
    .reduce((score, item) => score + (item.correct ? 10 : 3), 0)

  const last7DaysActivity = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date()
    day.setDate(day.getDate() - (6 - index))
    const dayKey = day.toISOString().slice(0, 10)
    const dayAttempts = attempts.filter(
      (item) => item.created_at.slice(0, 10) === dayKey,
    )

    return {
      day: dayKey,
      attempts: dayAttempts.length,
      correct: dayAttempts.filter((item) => item.correct).length,
    }
  })

  return NextResponse.json({
    ok: true,
    analytics: {
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
    },
  })
}
