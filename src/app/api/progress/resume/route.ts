import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseServerConfigured,
} from "@/lib/supabase/server";
import {
  buildAttemptsByDay,
  computeUnlockedDay,
  getActiveSession,
  getAllAttempts,
} from "@/lib/server/progressQueries";
import { ResumeState } from "@/models/serverTypes";

export async function GET(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Supabase server not configured" },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const childId = searchParams.get("childId");
  if (!childId) {
    return NextResponse.json(
      { ok: false, error: "Missing childId" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  const [activeSession, attempts] = await Promise.all([
    getActiveSession(supabase, childId),
    getAllAttempts(supabase, childId),
  ]);

  const attemptsByDay = buildAttemptsByDay(attempts);
  const unlockedDay = computeUnlockedDay(attemptsByDay);

  const resumeState: ResumeState = {
    unlockedDay,
    activeSession,
    attemptsByDay,
  };

  return NextResponse.json({ ok: true, resume: resumeState });
}
