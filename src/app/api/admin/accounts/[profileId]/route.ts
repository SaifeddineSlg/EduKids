import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { requireAdminProfile } from "@/lib/auth/requireAdmin";

interface PatchPayload {
  isActive: boolean;
}

function isPatchPayload(value: unknown): value is PatchPayload {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as Record<string, unknown>).isActive === "boolean"
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ profileId: string }> },
) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const admin = await requireAdminProfile();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const { profileId } = await params;
  const payload = await request.json();
  if (!isPatchPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("profiles")
    .update({ is_active: payload.isActive })
    .eq("id", profileId);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ profileId: string }> },
) {
  // Declenche l'envoi d'un email de reinitialisation de mot de passe pour ce compte.
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  const admin = await requireAdminProfile();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const { profileId } = await params;
  const supabase = getSupabaseServerClient();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("email")
    .eq("id", profileId)
    .maybeSingle();

  if (profileError || !profile) {
    return NextResponse.json({ ok: false, error: "Compte introuvable" }, { status: 404 });
  }

  const { error } = await supabase.auth.admin.generateLink({
    type: "recovery",
    email: profile.email,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
