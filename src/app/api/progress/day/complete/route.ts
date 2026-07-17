import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";

interface CompletePayload {
  childId: string;
  dayNumber: number;
  attemptNumber: number;
  totalXpEarned: number;
  timeSpentSeconds: number;
}

function isCompletePayload(value: unknown): value is CompletePayload {
  if (!value || typeof value !== "object") {
    return false;
  }
  const data = value as Record<string, unknown>;
  return (
    typeof data.childId === "string" &&
    typeof data.dayNumber === "number" &&
    typeof data.attemptNumber === "number" &&
    typeof data.totalXpEarned === "number" &&
    typeof data.timeSpentSeconds === "number"
  );
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Supabase server not configured" },
      { status: 500 },
    );
  }

  const payload = await request.json();
  if (!isCompletePayload(payload)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  const { data: session, error: sessionError } = await supabase
    .from("active_day_sessions")
    .select("*")
    .eq("child_id", payload.childId)
    .single();

  if (sessionError || !session) {
    return NextResponse.json(
      { ok: false, error: sessionError?.message ?? "Session introuvable" },
      { status: 500 },
    );
  }

  const { data, error } = await supabase.rpc("complete_day_attempt", {
    p_child_id: payload.childId,
    p_day_number: payload.dayNumber,
    p_attempt_number: payload.attemptNumber,
    p_subject_results: session.subject_results,
    p_total_xp_earned: payload.totalXpEarned,
    p_time_spent_seconds: payload.timeSpentSeconds,
    p_started_at: session.started_at,
  });

  if (error || !data || data.length === 0) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? "Erreur inconnue" },
      { status: 500 },
    );
  }

  const result = data[0] as { average_percent: number; passed: boolean };

  return NextResponse.json({
    ok: true,
    averagePercent: Number(result.average_percent),
    passed: result.passed,
  });
}
