import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";
import { QuestionAttemptDetail } from "@/models/serverTypes";

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
  const attemptNumber = searchParams.get("attemptNumber");
  const subjectId = searchParams.get("subjectId");

  if (!childId || !dayNumber || !attemptNumber) {
    return NextResponse.json(
      { ok: false, error: "Missing childId, dayNumber or attemptNumber" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  // La page Historique ne doit montrer que les tentatives reellement terminees.
  const { data: attempt, error: attemptError } = await supabase
    .from("day_attempts")
    .select("id")
    .eq("child_id", childId)
    .eq("day_number", Number(dayNumber))
    .eq("attempt_number", Number(attemptNumber))
    .maybeSingle();

  if (attemptError) {
    return NextResponse.json(
      { ok: false, error: attemptError.message },
      { status: 500 },
    );
  }

  if (!attempt) {
    return NextResponse.json(
      { ok: false, error: "Tentative introuvable ou non terminee" },
      { status: 404 },
    );
  }

  let query = supabase
    .from("question_attempts")
    .select("*")
    .eq("child_id", childId)
    .eq("day_number", Number(dayNumber))
    .eq("attempt_number", Number(attemptNumber))
    .order("subject_id", { ascending: true })
    .order("question_order", { ascending: true });

  if (subjectId) {
    query = query.eq("subject_id", subjectId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  }

  const questions: QuestionAttemptDetail[] = (data ?? []).map((row) => ({
    subjectId: row.subject_id,
    questionOrder: row.question_order,
    questionPrompt: row.question_prompt,
    givenAnswer: row.given_answer,
    correctAnswer: row.correct_answer,
    correct: row.correct,
    elapsedSeconds: row.elapsed_seconds,
    answeredAt: row.answered_at,
  }));

  return NextResponse.json({ ok: true, questions });
}
