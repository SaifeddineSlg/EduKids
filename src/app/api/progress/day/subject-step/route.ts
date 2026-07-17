import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { requireParentOwnsStudent } from "@/lib/auth/authorize";

interface SubjectStepPayload {
  studentId: string;
  lessonStep: "story" | "examples" | "questions";
}

function isSubjectStepPayload(value: unknown): value is SubjectStepPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.studentId === "string" &&
    (data.lessonStep === "story" || data.lessonStep === "examples" || data.lessonStep === "questions")
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
  if (!isSubjectStepPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, payload.studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const { data, error } = await supabase
    .from("active_day_sessions")
    .update({
      lesson_step: payload.lessonStep,
      updated_at: new Date().toISOString(),
    })
    .eq("student_id", payload.studentId)
    .select("*")
    .single();

  if (error || !data) {
    return NextResponse.json({ ok: false, error: error?.message ?? "Session introuvable" }, { status: 500 });
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
