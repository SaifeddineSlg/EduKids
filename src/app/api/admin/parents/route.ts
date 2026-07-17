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
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("id, email, display_name, role, is_active, created_at")
    .eq("role", "parent")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  const { data: students } = await supabase
    .from("students")
    .select("id, parent_id")
    .is("archived_at", null);

  const childCountByParent = new Map<string, number>();
  (students ?? []).forEach((s) => {
    childCountByParent.set(s.parent_id, (childCountByParent.get(s.parent_id) ?? 0) + 1);
  });

  const parents = (profiles ?? []).map((p) => ({
    id: p.id,
    email: p.email,
    displayName: p.display_name,
    isActive: p.is_active,
    createdAt: p.created_at,
    childCount: childCountByParent.get(p.id) ?? 0,
  }));

  return NextResponse.json({ ok: true, parents });
}
