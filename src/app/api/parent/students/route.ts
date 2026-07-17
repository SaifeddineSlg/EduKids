import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";

export async function GET() {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const profile = await getSessionProfile();
  if (!profile) {
    return NextResponse.json({ ok: false, error: "Non authentifie" }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("students")
    .select("id, first_name, birth_date, avatar, school_level_id, school_levels(code, label)")
    .eq("parent_id", profile.id)
    .is("archived_at", null)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  const students = (data ?? []).map((s) => {
    const level = s.school_levels as unknown as { code: string; label: string } | null;
    return {
      id: s.id,
      firstName: s.first_name,
      birthDate: s.birth_date,
      avatar: s.avatar,
      schoolLevelId: s.school_level_id,
      schoolLevelCode: level?.code ?? null,
      schoolLevelLabel: level?.label ?? null,
    };
  });

  return NextResponse.json({ ok: true, students });
}

interface CreatePayload {
  firstName: string;
  birthDate?: string | null;
  schoolLevelId: string;
  avatar: string;
}

function isCreatePayload(value: unknown): value is CreatePayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.firstName === "string" &&
    typeof data.schoolLevelId === "string" &&
    typeof data.avatar === "string"
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
  if (!isCreatePayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  const { count } = await supabase
    .from("students")
    .select("id", { count: "exact", head: true })
    .eq("parent_id", profile.id)
    .is("archived_at", null);

  const { data: settingRow } = await supabase
    .from("app_settings")
    .select("value")
    .eq("key", "max_children_per_parent")
    .maybeSingle();

  const maxChildren = Number(settingRow?.value ?? 2);

  if ((count ?? 0) >= maxChildren) {
    return NextResponse.json(
      { ok: false, error: `Limite de ${maxChildren} enfant(s) atteinte.` },
      { status: 409 },
    );
  }

  const { data, error } = await supabase
    .from("students")
    .insert({
      parent_id: profile.id,
      first_name: payload.firstName,
      birth_date: payload.birthDate ?? null,
      school_level_id: payload.schoolLevelId,
      avatar: payload.avatar,
    })
    .select("id")
    .single();

  if (error || !data) {
    return NextResponse.json({ ok: false, error: error?.message ?? "Erreur inconnue" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, studentId: data.id });
}
