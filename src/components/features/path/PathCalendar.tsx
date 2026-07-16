"use client";

import { useEffect, useState } from "react";
import { ChildPathProgress } from "@/models/types";
import { TOTAL_DAYS } from "@/data/curriculum";
import { getPathProgress } from "@/lib/pathProgress";
import { DayCard } from "@/components/features/path/DayCard";

interface PathCalendarProps {
  childId: string;
}

export function PathCalendar({ childId }: PathCalendarProps) {
  const [progress, setProgress] = useState<ChildPathProgress | null>(null);

  useEffect(() => {
    setProgress(getPathProgress(childId));
  }, [childId]);

  if (!progress) {
    return null;
  }

  const days = Array.from({ length: TOTAL_DAYS }, (_, index) => index + 1);

  return (
    <div className="day-grid">
      {days.map((dayNumber) => {
        const completion = progress.completions.find((item) => item.dayNumber === dayNumber);
        return (
          <DayCard
            key={dayNumber}
            childId={childId}
            dayNumber={dayNumber}
            completion={completion}
            isUnlocked={dayNumber <= progress.unlockedDay}
            isNext={dayNumber === progress.unlockedDay}
          />
        );
      })}
    </div>
  );
}
