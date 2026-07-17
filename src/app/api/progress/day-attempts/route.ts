import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { requireParentOwnsStudent } from "@/lib/auth/authorize";

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const profile = await getSessionProfile();
  if (!profile) {
    return NextResponse.json({ ok: false, error: "Non authentifie" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get("studentId");
  const dayNumber = searchParams.get("dayNumber");

  if (!studentId) {
    return NextResponse.json({ ok: false, error: "Missing studentId" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  let query = supabase
    .from("day_attempts")
    .select("*")
    .eq("student_id", studentId)
    .eq("school_level_id", authorized.schoolLevelId)
    .order("day_number", { ascending: true })
    .order("attempt_number", { ascending: true });

  if (dayNumber) {
    query = query.eq("day_number", Number(dayNumber));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
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
