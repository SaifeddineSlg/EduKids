"use client";

import { DayAttemptRecord } from "@/models/serverTypes";
import { subjects } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { StarBurst } from "@/components/features/path/StarBurst";

interface DayCompleteScreenProps {
  childName: string;
  record: DayAttemptRecord;
  onBackToPath: () => void;
}

function formatMinutesSeconds(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${seconds}s`;
}

export function DayCompleteScreen({ childName, record, onBackToPath }: DayCompleteScreenProps) {
  return (
    <section className="single-action-screen">
      <Card>
        <h1>🎉 Felicitations {childName} !</h1>
        <p>Tu as termine le Jour {record.dayNumber}.</p>

        <StarBurst />

        <h3>Resultats</h3>
        <ul className="stats-list">
          {record.subjectResults.map((result) => {
            const subjectInfo = subjects.find((item) => item.id === result.subjectId);
            const percent = Math.round((result.correctCount / 6) * 100);
            return (
              <li key={result.subjectId}>
                {subjectInfo?.icon} {subjectInfo?.title} — {percent}%
              </li>
            );
          })}
        </ul>

        <div className="chips-row">
          <span className="reward-chip">⭐ {record.totalXpEarned} XP gagne</span>
          <span className="reward-chip">🏅 Badge gagne</span>
          <span className="reward-chip">⏱️ {formatMinutesSeconds(record.timeSpentSeconds)}</span>
        </div>
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onBackToPath}>
        Retour au calendrier
      </button>
    </section>
  );
}
