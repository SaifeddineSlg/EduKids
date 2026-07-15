import { NextResponse } from 'next/server'
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from '@/lib/supabase/server'

interface AttemptPayload {
  childId: string
  subjectId: string
  lessonId: string
  activityKind: 'exercise' | 'quiz'
  activityId: string
  correct: boolean
  difficulty?: number
  elapsedSeconds?: number
}

function isAttemptPayload(value: unknown): value is AttemptPayload {
  if (!value || typeof value !== 'object') {
    return false
  }

  const data = value as Record<string, unknown>
  return (
    typeof data.childId === 'string' &&
    typeof data.subjectId === 'string' &&
    typeof data.lessonId === 'string' &&
    (data.activityKind === 'exercise' || data.activityKind === 'quiz') &&
    typeof data.activityId === 'string' &&
    typeof data.correct === 'boolean'
  )
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Supabase server not configured' },
      { status: 500 },
    )
  }

  const payload = await request.json()
  if (!isAttemptPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid payload' },
      { status: 400 },
    )
  }

  const supabase = getSupabaseServerClient()
  const { error } = await supabase.from('progress_attempts').insert({
    child_id: payload.childId,
    subject_id: payload.subjectId,
    lesson_id: payload.lessonId,
    activity_kind: payload.activityKind,
    activity_id: payload.activityId,
    correct: payload.correct,
    difficulty: payload.difficulty ?? null,
    elapsed_seconds: payload.elapsedSeconds ?? null,
  })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
