import Link from "next/link";
import { DayCompletionRecord } from "@/models/types";

interface DayCardProps {
  childId: string;
  dayNumber: number;
  completion?: DayCompletionRecord;
  isUnlocked: boolean;
  isNext: boolean;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

export function DayCard({ childId, dayNumber, completion, isUnlocked, isNext }: DayCardProps) {
  if (completion) {
    const averagePercent = Math.round(
      (completion.subjectResults.reduce((sum, item) => sum + item.correctCount, 0) /
        (completion.subjectResults.length * 6)) *
        100
    );

    return (
      <Link href={`/child/${childId}/day/${dayNumber}`} className="day-card day-card--done">
        <span className="day-card-status" aria-hidden>✅</span>
        <span className="day-card-number">Jour {dayNumber}</span>
        <span className="day-card-detail">⭐ {averagePercent}%</span>
        <span className="day-card-detail">📅 {formatDate(completion.completedAt)}</span>
      </Link>
    );
  }

  if (isNext && isUnlocked) {
    return (
      <Link href={`/child/${childId}/day/${dayNumber}`} className="day-card day-card--today">
        <span className="day-card-status" aria-hidden>▶</span>
        <span className="day-card-number">Jour {dayNumber}</span>
        <span className="day-card-detail">A faire aujourd&apos;hui</span>
      </Link>
    );
  }

  return (
    <div className="day-card day-card--locked" aria-disabled>
      <span className="day-card-status" aria-hidden>🔒</span>
      <span className="day-card-number">Jour {dayNumber}</span>
      <span className="day-card-detail">Verrouille</span>
    </div>
  );
}
