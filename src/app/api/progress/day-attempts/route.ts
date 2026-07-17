import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Supabase server not configured" },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const childId = searchParams.get("childId");
  const dayNumber = searchParams.get("dayNumber");

  if (!childId) {
    return NextResponse.json(
      { ok: false, error: "Missing childId" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  let query = supabase
    .from("day_attempts")
    .select("*")
    .eq("child_id", childId)
    .order("day_number", { ascending: true })
    .order("attempt_number", { ascending: true });

  if (dayNumber) {
    query = query.eq("day_number", Number(dayNumber));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  }

  const attempts = (data ?? []).map((row) => ({
    dayNumber: row.day_number,
    attemptNumber: row.attempt_number,
    subjectResults: row.subject_results,
    totalXpEarned: row.total_xp_earned,
    averagePercent: Number(row.average_percent),
    passed: row.passed,
    timeSpentSeconds: row.time_spent_seconds,
    startedAt: row.started_at,
    completedAt: row.completed_at,
  }));

  return NextResponse.json({ ok: true, attempts });
}
