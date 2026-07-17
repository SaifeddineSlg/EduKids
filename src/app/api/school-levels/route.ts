import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";

// Liste publique (aux utilisateurs connectes) des niveaux scolaires actifs,
// utilisee par le formulaire d'ajout/edition d'enfant.
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
    .from("school_levels")
    .select("id, code, label, display_order")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, schoolLevels: data });
}
