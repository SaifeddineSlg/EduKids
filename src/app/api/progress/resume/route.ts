import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { requireParentOwnsStudent } from "@/lib/auth/authorize";
import {
  buildAttemptsByDay,
  computeUnlockedDay,
  getActiveSession,
  getAllAttempts,
} from "@/lib/server/progressQueries";
import { ResumeState } from "@/models/serverTypes";

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
  if (!studentId) {
    return NextResponse.json({ ok: false, error: "Missing studentId" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const [activeSession, attempts] = await Promise.all([
    getActiveSession(supabase, studentId),
    getAllAttempts(supabase, studentId, authorized.schoolLevelId),
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
