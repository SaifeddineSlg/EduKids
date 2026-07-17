import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Card } from "@/components/ui/Card";

export default async function ParentHomePage() {
  const profile = await getSessionProfile();
  if (!profile) {
    redirect("/");
  }

  const supabase = getSupabaseServerClient();
  const { data: students } = await supabase
    .from("students")
    .select("id, first_name, avatar, school_levels(label)")
    .eq("parent_id", profile.id)
    .is("archived_at", null)
    .order("created_at", { ascending: true });

  const { data: settingRow } = await supabase
    .from("app_settings")
    .select("value")
    .eq("key", "max_children_per_parent")
    .maybeSingle();
  const maxChildren = Number(settingRow?.value ?? 2);
  const canAddChild = (students?.length ?? 0) < maxChildren;

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Espace parent</p>
          <h1>Mes enfants</h1>
        </div>
      </header>

      <div className="grid-2">
        {(students ?? []).map((student) => {
          const level = student.school_levels as unknown as { label: string } | null;
          return (
            <Card key={student.id} className="child-card">
              <h2>{student.avatar} {student.first_name}</h2>
              {level ? <p>{level.label}</p> : null}
              <Link href={`/parent/children/${student.id}/path`} className="primary-btn">
                Ouvrir le parcours
              </Link>
              <Link href={`/parent/children/${student.id}/edit`} className="ghost-btn">
                Modifier
              </Link>
            </Card>
          );
        })}
      </div>

      {canAddChild ? (
        <Link href="/parent/children/new" className="primary-btn big-btn">
          + Ajouter un enfant
        </Link>
      ) : (
        <Card>
          <p>Tu as atteint la limite de {maxChildren} enfant(s) pour ton compte.</p>
        </Card>
      )}

      <div className="chips-row">
        <Link href="/parent/analytics" className="ghost-btn">Voir les statistiques</Link>
      </div>
    </section>
  );
}
