import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { getAuthorizedStudent } from "@/lib/server/students";
import { Card } from "@/components/ui/Card";
import { PathCalendar } from "@/components/features/path/PathCalendar";

interface PathPageProps {
  params: Promise<{ studentId: string }>;
}

export default async function PathPage({ params }: PathPageProps) {
  const resolvedParams = await params;
  const profile = await getSessionProfile();
  if (!profile) {
    notFound();
  }

  const supabase = getSupabaseServerClient();
  const student = await getAuthorizedStudent(supabase, profile, resolvedParams.studentId);
  if (!student) {
    notFound();
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Mon parcours de 30 jours</h1>
        <p>Clique sur le jour disponible pour commencer, {student.firstName} !</p>
      </Card>

      <PathCalendar studentId={student.id} />
    </section>
  );
}
