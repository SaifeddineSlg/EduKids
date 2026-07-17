import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { getAuthorizedStudent } from "@/lib/server/students";
import { getDayCurriculum } from "@/data/curriculum";
import { DayGate } from "@/components/features/path/DayGate";

interface DayPageProps {
  params: Promise<{ studentId: string; dayNumber: string }>;
}

export default async function DayPage({ params }: DayPageProps) {
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

  const dayNumber = Number(resolvedParams.dayNumber);
  const day = getDayCurriculum(student.schoolLevelCode, dayNumber);

  if (!day) {
    notFound();
  }

  return <DayGate studentId={student.id} childName={student.firstName} day={day} />;
}
