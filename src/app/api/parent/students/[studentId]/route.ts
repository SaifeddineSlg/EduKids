import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { requireParentOwnsStudent } from "@/lib/auth/authorize";

interface PatchPayload {
  firstName?: string;
  birthDate?: string | null;
  schoolLevelId?: string;
  avatar?: string;
}

function isPatchPayload(value: unknown): value is PatchPayload {
  return !!value && typeof value === "object";
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ studentId: string }> },
) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const profile = await getSessionProfile();
  if (!profile) {
    return NextResponse.json({ ok: false, error: "Non authentifie" }, { status: 401 });
  }

  const { studentId } = await params;
  const payload = await request.json();
  if (!isPatchPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const updates: Record<string, unknown> = {};
  if (payload.firstName !== undefined) updates.first_name = payload.firstName;
  if (payload.birthDate !== undefined) updates.birth_date = payload.birthDate;
  if (payload.schoolLevelId !== undefined) updates.school_level_id = payload.schoolLevelId;
  if (payload.avatar !== undefined) updates.avatar = payload.avatar;

  const { error } = await supabase.from("students").update(updates).eq("id", studentId);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ studentId: string }> },
) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const profile = await getSessionProfile();
  if (!profile) {
    return NextResponse.json({ ok: false, error: "Non authentifie" }, { status: 401 });
  }

  const { studentId } = await params;
  const supabase = getSupabaseServerClient();
  const authorized = await requireParentOwnsStudent(supabase, profile, studentId);
  if (!authorized) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  // Soft-delete uniquement : on ne perd jamais l'historique pedagogique.
  const { error } = await supabase
    .from("students")
    .update({ archived_at: new Date().toISOString() })
    .eq("id", studentId);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
