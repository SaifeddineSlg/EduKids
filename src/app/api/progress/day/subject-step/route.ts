import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";

interface SubjectStepPayload {
  childId: string;
  lessonStep: "story" | "examples" | "questions";
}

function isSubjectStepPayload(value: unknown): value is SubjectStepPayload {
  if (!value || typeof value !== "object") {
    return false;
  }
  const data = value as Record<string, unknown>;
  return (
    typeof data.childId === "string" &&
    (data.lessonStep === "story" ||
      data.lessonStep === "examples" ||
      data.lessonStep === "questions")
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
  if (!isSubjectStepPayload(payload)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase
    .from("active_day_sessions")
    .update({
      lesson_step: payload.lessonStep,
      updated_at: new Date().toISOString(),
    })
    .eq("child_id", payload.childId)
    .select("*")
    .single();

  if (error || !data) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? "Session introuvable" },
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
