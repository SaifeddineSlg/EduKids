"use client";

import { useEffect, useState } from "react";
import { ResumeState } from "@/models/serverTypes";
import { TOTAL_DAYS } from "@/data/curriculum";
import { fetchResumeState } from "@/lib/api/dayProgress";
import { DayCard } from "@/components/features/path/DayCard";
import { Card } from "@/components/ui/Card";

interface PathCalendarProps {
  studentId: string;
}

export function PathCalendar({ studentId }: PathCalendarProps) {
  const [resume, setResume] = useState<ResumeState | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchResumeState(studentId)
      .then((state) => {
        if (!cancelled) setResume(state);
      })
      .catch(() => {
        if (!cancelled) setResume(null);
      });

    return () => {
      cancelled = true;
    };
  }, [studentId]);

  if (!resume) {
    return null;
  }

  const days = Array.from({ length: TOTAL_DAYS }, (_, index) => index + 1);

  return (
    <div className="stack-lg">
      {resume.activeSession ? (
        <Card>
          <h3>Tu n&apos;avais pas termine le Jour {resume.activeSession.dayNumber}</h3>
          <p>Clique sur ce jour pour reprendre ou recommencer.</p>
        </Card>
      ) : null}

      <div className="day-grid">
        {days.map((dayNumber) => (
          <DayCard
            key={dayNumber}
            studentId={studentId}
            dayNumber={dayNumber}
            summary={resume.attemptsByDay[dayNumber]}
            isUnlocked={dayNumber <= resume.unlockedDay}
            isNext={dayNumber === resume.unlockedDay}
            isActive={resume.activeSession?.dayNumber === dayNumber}
          />
        ))}
      </div>
    </div>
  );
}
