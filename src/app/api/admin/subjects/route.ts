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
    .from("subjects")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, subjects: data });
}

interface PatchPayload {
  id: string;
  isActive?: boolean;
  displayOrder?: number;
}

function isPatchPayload(value: unknown): value is PatchPayload {
  return !!value && typeof value === "object" && typeof (value as Record<string, unknown>).id === "string";
}

export async function PATCH(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const admin = await requireAdminProfile();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const payload = await request.json();
  if (!isPatchPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const updates: Record<string, unknown> = {};
  if (payload.isActive !== undefined) updates.is_active = payload.isActive;
  if (payload.displayOrder !== undefined) updates.display_order = payload.displayOrder;

  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("subjects").update(updates).eq("id", payload.id);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
