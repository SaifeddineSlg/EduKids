import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";
import { getActiveSession } from "@/lib/server/progressQueries";
import { ActiveDaySession } from "@/models/serverTypes";
import { SUBJECT_ORDER } from "@/models/types";

async function countCorrectForCurrentSubject(
  supabase: ReturnType<typeof getSupabaseServerClient>,
  childId: string,
  dayNumber: number,
  attemptNumber: number,
  subjectIndex: number,
): Promise<number> {
  const subjectId = SUBJECT_ORDER[subjectIndex];
  if (!subjectId) {
    return 0;
  }

  const { count } = await supabase
    .from("question_attempts")
    .select("id", { count: "exact", head: true })
    .eq("child_id", childId)
    .eq("day_number", dayNumber)
    .eq("attempt_number", attemptNumber)
    .eq("subject_id", subjectId)
    .eq("correct", true);

  return count ?? 0;
}

interface StartPayload {
  childId: string;
  dayNumber: number;
  mode: "resume" | "restart";
}

function isStartPayload(value: unknown): value is StartPayload {
  if (!value || typeof value !== "object") {
    return false;
  }
  const data = value as Record<string, unknown>;
  return (
    typeof data.childId === "string" &&
    typeof data.dayNumber === "number" &&
    (data.mode === "resume" || data.mode === "restart")
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
  if (!isStartPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();
  const existing = await getActiveSession(supabase, payload.childId);

  if (
    existing &&
    existing.dayNumber === payload.dayNumber &&
    payload.mode === "resume"
  ) {
    const currentSubjectCorrectCount = await countCorrectForCurrentSubject(
      supabase,
      payload.childId,
      existing.dayNumber,
      existing.attemptNumber,
      existing.subjectIndex,
    );
    return NextResponse.json({
      ok: true,
      session: { ...existing, currentSubjectCorrectCount },
    });
  }

  const { data: previousAttempts } = await supabase
    .from("day_attempts")
    .select("attempt_number")
    .eq("child_id", payload.childId)
    .eq("day_number", payload.dayNumber)
    .order("attempt_number", { ascending: false })
    .limit(1);

  const nextAttemptNumber =
    previousAttempts && previousAttempts.length > 0
      ? previousAttempts[0].attempt_number + 1
      : 1;

  const startedAt = new Date().toISOString();

  const { data, error } = await supabase
    .from("active_day_sessions")
    .upsert(
      {
        child_id: payload.childId,
        day_number: payload.dayNumber,
        attempt_number: nextAttemptNumber,
        subject_index: 0,
        lesson_step: "story",
        question_index: 0,
        subject_results: [],
        started_at: startedAt,
        updated_at: startedAt,
      },
      { onConflict: "child_id" },
    )
    .select("*")
    .single();

  if (error || !data) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 },
    );
  }

  const session: ActiveDaySession = {
    childId: data.child_id,
    dayNumber: data.day_number,
    attemptNumber: data.attempt_number,
    subjectIndex: data.subject_index,
    lessonStep: data.lesson_step,
    questionIndex: data.question_index,
    subjectResults: data.subject_results,
    startedAt: data.started_at,
  };

  return NextResponse.json({ ok: true, session });
}
