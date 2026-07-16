import { NextResponse } from 'next/server'
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from '@/lib/supabase/server'

interface SubjectResultPayload {
  subjectId: string
  correctCount: number
  xpEarned: number
}

interface DayCompletionPayload {
  childId: string
  dayNumber: number
  completedAt: string
  subjectResults: SubjectResultPayload[]
  totalXpEarned: number
  badgeEarned: boolean
  timeSpentSeconds: number
}

function isDayCompletionPayload(value: unknown): value is DayCompletionPayload {
  if (!value || typeof value !== 'object') {
    return false
  }

  const data = value as Record<string, unknown>
  return (
    typeof data.childId === 'string' &&
    typeof data.dayNumber === 'number' &&
    typeof data.completedAt === 'string' &&
    Array.isArray(data.subjectResults) &&
    typeof data.totalXpEarned === 'number' &&
    typeof data.badgeEarned === 'boolean' &&
    typeof data.timeSpentSeconds === 'number'
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
  if (!isDayCompletionPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid payload' },
      { status: 400 },
    )
  }

  const supabase = getSupabaseServerClient()
  const { error } = await supabase.from('day_completions').upsert(
    {
      child_id: payload.childId,
      day_number: payload.dayNumber,
      completed_at: payload.completedAt,
      subject_results: payload.subjectResults,
      total_xp_earned: payload.totalXpEarned,
      badge_earned: payload.badgeEarned,
      time_spent_seconds: payload.timeSpentSeconds,
    },
    { onConflict: 'child_id,day_number' },
  )

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Supabase server not configured' },
      { status: 500 },
    )
  }

  const { searchParams } = new URL(request.url)
  const childId = searchParams.get('childId')
  if (!childId) {
    return NextResponse.json(
      { ok: false, error: 'Missing childId' },
      { status: 400 },
    )
  }

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('day_completions')
    .select('*')
    .eq('child_id', childId)
    .order('day_number', { ascending: true })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true, completions: data })
}
