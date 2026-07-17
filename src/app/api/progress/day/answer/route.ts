import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { requireParentOwnsStudent } from "@/lib/auth/authorize";

interface AnswerPayload {
  studentId: string;
  dayNumber: number;
  attemptNumber: number;
  subjectId: string;
  questionOrder: number;
  questionPrompt: string;
  givenAnswer: string;
  correctAnswer: string;
  acceptedAnswers?: string[];
  correct: boolean;
  elapsedSeconds?: number;
}

function isAnswerPayload(value: unknown): value is AnswerPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.studentId === "string" &&
    typeof data.dayNumber === "number" &&
    typeof data.attemptNumber === "number" &&
    typeof data.subjectId === "string" &&
    typeof data.questionOrder === "number" &&
    typeof data.questionPrompt === "string" &&
    typeof data.givenAnswer === "string" &&
    typeof data.correctAnswer === "string" &&
    typeof data.correct === "boolean"
  );
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const profile = await getSessionProfile();
  if (!profile) {
    return NextResponse.json({ ok: false, error: "Non authentifie" }, { status: 401 });
  }

  const payload = await request.json();
  if (!isAnswerPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, payload.studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }
  const schoolLevelId = authorized.schoolLevelId;

  const { error: insertError } = await supabase.from("question_attempts").upsert(
    {
      student_id: payload.studentId,
      school_level_id: schoolLevelId,
      day_number: payload.dayNumber,
      attempt_number: payload.attemptNumber,
      subject_id: payload.subjectId,
      question_order: payload.questionOrder,
      question_prompt: payload.questionPrompt,
      given_answer: payload.givenAnswer,
      correct_answer: payload.correctAnswer,
      accepted_answers: payload.acceptedAnswers ?? null,
      correct: payload.correct,
      elapsed_seconds: payload.elapsedSeconds ?? null,
    },
    { onConflict: "student_id,school_level_id,day_number,attempt_number,subject_id,question_order" },
  );

  if (insertError) {
    return NextResponse.json({ ok: false, error: insertError.message }, { status: 500 });
  }

  const { data, error: updateError } = await supabase
    .from("active_day_sessions")
    .update({
      question_index: payload.questionOrder,
      updated_at: new Date().toISOString(),
    })
    .eq("student_id", payload.studentId)
    .select("*")
    .single();

  if (updateError || !data) {
    return NextResponse.json({ ok: false, error: updateError?.message ?? "Session introuvable" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    session: {
      studentId: data.student_id,
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
