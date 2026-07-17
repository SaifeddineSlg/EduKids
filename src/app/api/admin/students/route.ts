import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { requireAdminProfile } from "@/lib/auth/requireAdmin";

export async function GET() {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const admin = await requireAdminProfile();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("students")
    .select("id, first_name, birth_date, avatar, is_active, archived_at, created_at, parent_id, profiles(email, display_name), school_levels(code, label)")
    .is("archived_at", null)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  const students = (data ?? []).map((s) => {
    const parent = s.profiles as unknown as { email: string; display_name: string | null } | null;
    const level = s.school_levels as unknown as { code: string; label: string } | null;
    return {
      id: s.id,
      firstName: s.first_name,
      birthDate: s.birth_date,
      avatar: s.avatar,
      isActive: s.is_active,
      parentEmail: parent?.email ?? null,
      parentDisplayName: parent?.display_name ?? null,
      schoolLevelCode: level?.code ?? null,
      schoolLevelLabel: level?.label ?? null,
    };
  });

  return NextResponse.json({ ok: true, students });
}
