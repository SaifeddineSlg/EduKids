import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Card } from "@/components/ui/Card";

export default async function HistoryChildSelectPage() {
  const profile = await getSessionProfile();
  if (!profile) {
    redirect("/");
  }

  const supabase = getSupabaseServerClient();
  const { data: students } = await supabase
    .from("students")
    .select("id, first_name, avatar")
    .eq("parent_id", profile.id)
    .is("archived_at", null)
    .order("created_at", { ascending: true });

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Historique</p>
          <h1>Choisis un enfant</h1>
        </div>
      </header>

      <div className="grid-2">
        {(students ?? []).map((student) => (
          <Card key={student.id}>
            <h2>{student.avatar} {student.first_name}</h2>
            <Link href={`/parent/history/${student.id}`} className="primary-btn">
              Voir l&apos;historique
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
