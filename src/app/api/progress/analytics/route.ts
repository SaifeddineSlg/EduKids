import { NextResponse } from 'next/server'
import { getSupabaseServerClient, isSupabaseServerConfigured } from '@/lib/supabase/server'
import { getSessionProfile } from '@/lib/auth/session'
import { requireParentOwnsStudent } from '@/lib/auth/authorize'

interface QuestionAttemptRow {
  student_id: string
  day_number: number
  subject_id: string
  correct: boolean
  elapsed_seconds: number | null
  answered_at: string
}

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: 'Supabase server not configured' }, { status: 500 })
  }

  const profile = await getSessionProfile()
  if (!profile) {
    return NextResponse.json({ ok: false, error: 'Non authentifie' }, { status: 401 })
  }

  const url = new URL(request.url)
  const studentId = url.searchParams.get('studentId')

  if (!studentId) {
    return NextResponse.json({ ok: false, error: 'Missing studentId' }, { status: 400 })
  }

  const supabase = getSupabaseServerClient()
  const authorized = await requireParentOwnsStudent(supabase, profile, studentId)
  if (!authorized) {
    return NextResponse.json({ ok: false, error: 'Acces refuse' }, { status: 403 })
  }

  const { data, error } = await supabase
    .from('question_attempts')
    .select('student_id, day_number, subject_id, correct, elapsed_seconds, answered_at')
    .eq('student_id', studentId)
    .eq('school_level_id', authorized.schoolLevelId)
    .order('answered_at', { ascending: true })

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  const attempts = (data ?? []) as QuestionAttemptRow[]
  const totalAttempts = attempts.length
  const correctAttempts = attempts.filter((item) => item.correct).length
  const accuracy = totalAttempts === 0 ? 0 : Math.round((correctAttempts / totalAttempts) * 100)

  const durations = attempts
    .filter((item) => typeof item.elapsed_seconds === 'number')
    .map((item) => item.elapsed_seconds ?? 0)
  const averageSeconds =
    durations.length === 0
      ? 0
      : Math.round(durations.reduce((sum, value) => sum + value, 0) / durations.length)

  const lessonMap = new Map<string, { total: number; correct: number }>()
  attempts.forEach((item) => {
    const lessonId = `day-${item.day_number}-${item.subject_id}`
    const current = lessonMap.get(lessonId) ?? { total: 0, correct: 0 }
    current.total += 1
    if (item.correct) {
      current.correct += 1
    }
    lessonMap.set(lessonId, current)
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
      const answered = new Date(item.answered_at).getTime()
      const diff = Date.now() - answered
      return diff <= 7 * 24 * 60 * 60 * 1000
    })
    .reduce((score, item) => score + (item.correct ? 10 : 3), 0)

  const last7DaysActivity = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date()
    day.setDate(day.getDate() - (6 - index))
    const dayKey = day.toISOString().slice(0, 10)
    const dayAttempts = attempts.filter((item) => item.answered_at.slice(0, 10) === dayKey)

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
      exerciseAttempts: totalAttempts,
      quizAttempts: 0,
      averageSeconds,
      masteredLessons,
      lessonsToReview,
      weeklyScore,
      last7DaysActivity,
    },
  })
}
