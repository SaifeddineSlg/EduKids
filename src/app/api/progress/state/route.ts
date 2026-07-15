import { NextResponse } from 'next/server'
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from '@/lib/supabase/server'

interface StatePayload {
  childId: string
  lastSessionAt?: string
  xp: number
  coins: number
}

function isStatePayload(value: unknown): value is StatePayload {
  if (!value || typeof value !== 'object') {
    return false
  }

  const data = value as Record<string, unknown>
  return (
    typeof data.childId === 'string' &&
    typeof data.xp === 'number' &&
    typeof data.coins === 'number' &&
    (typeof data.lastSessionAt === 'undefined' ||
      typeof data.lastSessionAt === 'string')
  )
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
    .from('child_state')
    .select('child_id, last_session_at, xp, coins')
    .eq('child_id', childId)
    .maybeSingle()

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  if (!data) {
    return NextResponse.json({ ok: true, state: null })
  }

  return NextResponse.json({
    ok: true,
    state: {
      childId: data.child_id,
      lastSessionAt: data.last_session_at ?? undefined,
      xp: data.xp,
      coins: data.coins,
    },
  })
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Supabase server not configured' },
      { status: 500 },
    )
  }

  const payload = await request.json()
  if (!isStatePayload(payload)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid payload' },
      { status: 400 },
    )
  }

  const supabase = getSupabaseServerClient()
  const { error } = await supabase.from('child_state').upsert({
    child_id: payload.childId,
    last_session_at: payload.lastSessionAt ?? null,
    xp: payload.xp,
    coins: payload.coins,
    updated_at: new Date().toISOString(),
  })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
