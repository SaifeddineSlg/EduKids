import Link from "next/link";
import { DaySummary } from "@/models/serverTypes";

interface DayCardProps {
  studentId: string;
  dayNumber: number;
  summary?: DaySummary;
  isUnlocked: boolean;
  isNext: boolean;
  isActive: boolean;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

export function DayCard({ studentId, dayNumber, summary, isUnlocked, isNext, isActive }: DayCardProps) {
  if (summary?.best.passed) {
    return (
      <Link href={`/parent/children/${studentId}/day/${dayNumber}`} className="day-card day-card--done">
        <span className="day-card-status" aria-hidden>✅</span>
        <span className="day-card-number">Jour {dayNumber}</span>
        <span className="day-card-detail">⭐ {Math.round(summary.best.averagePercent)}%</span>
        <span className="day-card-detail">📅 {formatDate(summary.best.completedAt)}</span>
        {summary.attemptCount > 1 ? (
          <span className="day-card-detail">{summary.attemptCount} tentatives</span>
        ) : null}
      </Link>
    );
  }

  if (isActive) {
    return (
      <Link href={`/parent/children/${studentId}/day/${dayNumber}`} className="day-card day-card--today">
        <span className="day-card-status" aria-hidden>▶</span>
        <span className="day-card-number">Jour {dayNumber}</span>
        <span className="day-card-detail">En cours</span>
      </Link>
    );
  }

  if (summary && !summary.best.passed) {
    return (
      <Link href={`/parent/children/${studentId}/day/${dayNumber}`} className="day-card day-card--today">
        <span className="day-card-status" aria-hidden>▶</span>
        <span className="day-card-number">Jour {dayNumber}</span>
        <span className="day-card-detail">⭐ {Math.round(summary.best.averagePercent)}% — a refaire</span>
      </Link>
    );
  }

  if (isNext && isUnlocked) {
    return (
      <Link href={`/parent/children/${studentId}/day/${dayNumber}`} className="day-card day-card--today">
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
