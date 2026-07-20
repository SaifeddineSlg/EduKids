import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { requireAdminProfile } from "@/lib/auth/requireAdmin";
import { resolveSiteUrl } from "@/lib/server/siteUrl";
import { sendEmail } from "@/lib/email/smtp";
import { resetPasswordEmailTemplate } from "@/lib/email/templates";

interface PatchPayload {
  isActive?: boolean;
  newPassword?: string;
}

function isPatchPayload(value: unknown): value is PatchPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  const activeOk = data.isActive === undefined || typeof data.isActive === "boolean";
  const passwordOk = data.newPassword === undefined || typeof data.newPassword === "string";
  return activeOk && passwordOk && (data.isActive !== undefined || data.newPassword !== undefined);
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

  if (payload.newPassword !== undefined) {
    if (payload.newPassword.length < 6) {
      return NextResponse.json({ ok: false, error: "Le mot de passe doit faire au moins 6 caracteres" }, { status: 400 });
    }
    const { error: passwordError } = await supabase.auth.admin.updateUserById(profileId, {
      password: payload.newPassword,
    });
    if (passwordError) {
      return NextResponse.json({ ok: false, error: passwordError.message }, { status: 500 });
    }
  }

  if (payload.isActive !== undefined) {
    const { error } = await supabase
      .from("profiles")
      .update({ is_active: payload.isActive })
      .eq("id", profileId);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ profileId: string }> },
) {
  // Envoie un email de reinitialisation de mot de passe pour ce compte.
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

  const origin = resolveSiteUrl(request);
  const { data, error } = await supabase.auth.admin.generateLink({
    type: "recovery",
    email: profile.email,
    options: {
      redirectTo: `${origin}/auth/callback?next=/reset-password`,
    },
  });

  if (error || !data.properties?.action_link) {
    return NextResponse.json({ ok: false, error: error?.message ?? "Echec de la generation du lien" }, { status: 500 });
  }

  const { subject, html } = resetPasswordEmailTemplate(data.properties.action_link);
  try {
    await sendEmail({ to: profile.email, subject, html });
  } catch (sendError) {
    const message = sendError instanceof Error ? sendError.message : "Echec de l'envoi de l'email";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: Request,
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

  if (profileId === admin.id) {
    return NextResponse.json({ ok: false, error: "Impossible de supprimer son propre compte" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", profileId)
    .maybeSingle();

  if (profileError || !profile) {
    return NextResponse.json({ ok: false, error: "Compte introuvable" }, { status: 404 });
  }

  if (profile.role === "admin") {
    return NextResponse.json({ ok: false, error: "Impossible de supprimer un compte administrateur" }, { status: 400 });
  }

  // Supprime le compte Supabase Auth : supprime en cascade la ligne profiles
  // correspondante, et les students rattaches (parent_id references profiles
  // on delete cascade). Action irreversible, y compris pour l'historique
  // pedagogique des enfants de ce parent.
  const { error } = await supabase.auth.admin.deleteUser(profileId);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
