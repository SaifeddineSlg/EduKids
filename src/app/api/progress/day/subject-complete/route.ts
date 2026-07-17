import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";
import { SubjectResult } from "@/models/types";

interface SubjectCompletePayload {
  childId: string;
  subjectResult: SubjectResult;
}

function isSubjectCompletePayload(
  value: unknown,
): value is SubjectCompletePayload {
  if (!value || typeof value !== "object") {
    return false;
  }
  const data = value as Record<string, unknown>;
  if (typeof data.childId !== "string" || !data.subjectResult) {
    return false;
  }
  const result = data.subjectResult as Record<string, unknown>;
  return (
    typeof result.subjectId === "string" &&
    typeof result.correctCount === "number" &&
    typeof result.xpEarned === "number"
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
  if (!isSubjectCompletePayload(payload)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  const { data: current, error: readError } = await supabase
    .from("active_day_sessions")
    .select("*")
    .eq("child_id", payload.childId)
    .single();

  if (readError || !current) {
    return NextResponse.json(
      { ok: false, error: readError?.message ?? "Session introuvable" },
      { status: 500 },
    );
  }

  const updatedResults: SubjectResult[] = [
    ...(current.subject_results as SubjectResult[]),
    payload.subjectResult,
  ];

  const { data, error } = await supabase
    .from("active_day_sessions")
    .update({
      subject_results: updatedResults,
      subject_index: current.subject_index + 1,
      lesson_step: "story",
      question_index: 0,
      updated_at: new Date().toISOString(),
    })
    .eq("child_id", payload.childId)
    .select("*")
    .single();

  if (error || !data) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? "Erreur inconnue" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    session: {
      childId: data.child_id,
      dayNumber: data.day_number,
      attemptNumber: data.attempt_number,
      subjectIndex: data.subject_index,
      lessonStep: data.lesson_step,
      questionIndex: data.question_index,
      subjectResults: data.subject_results,
      startedAt: data.started_at,
    },
  });
}
