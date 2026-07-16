"use client";

import { DayCurriculum } from "@/models/types";
import { subjects } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { Mascot } from "@/components/features/path/Mascot";

interface DayIntroScreenProps {
  childName: string;
  day: DayCurriculum;
  onStart: () => void;
}

export function DayIntroScreen({ childName, day, onStart }: DayIntroScreenProps) {
  const totalXp = day.subjects.reduce((sum, subject) => sum + subject.xpReward, 0);

  return (
    <section className="single-action-screen">
      <Card>
        <h1>Bonjour {childName} !</h1>
        <p>Aujourd&apos;hui nous allons apprendre :</p>

        <ul className="day-subject-list">
          {day.subjects.map((subjectLesson) => {
            const subjectInfo = subjects.find((item) => item.id === subjectLesson.subjectId);
            return (
              <li key={subjectLesson.subjectId}>
                <span aria-hidden>{subjectInfo?.icon}</span> {subjectInfo?.title}
              </li>
            );
          })}
        </ul>

        <p>Tu gagneras aujourd&apos;hui :</p>
        <div className="chips-row">
          <span className="reward-chip">⭐ {totalXp} XP</span>
          <span className="reward-chip">🏅 Un badge si tu reussis plus de 80%</span>
        </div>

        <Mascot message={`On y va ensemble, ${childName} !`} />
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onStart}>
        ▶ Commencer la journee
      </button>
    </section>
  );
}
