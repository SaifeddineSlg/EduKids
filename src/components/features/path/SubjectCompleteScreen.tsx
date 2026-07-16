"use client";

import { SubjectResult } from "@/models/types";
import { subjects } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { StarBurst } from "@/components/features/path/StarBurst";

interface SubjectCompleteScreenProps {
  result: SubjectResult;
  isLastSubject: boolean;
  onContinue: () => void;
}

export function SubjectCompleteScreen({ result, isLastSubject, onContinue }: SubjectCompleteScreenProps) {
  const subjectInfo = subjects.find((item) => item.id === result.subjectId);

  return (
    <section className="single-action-screen">
      <Card>
        <h2>Bravo ! Tu as termine {subjectInfo?.title} !</h2>
        <div className="chips-row">
          <span className="reward-chip">⭐ {result.correctCount}/6</span>
          <span className="reward-chip">✨ {result.xpEarned} XP</span>
        </div>
        {result.correctCount >= 5 ? <StarBurst count={8} /> : null}
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onContinue}>
        {isLastSubject ? "Voir mes resultats du jour" : "Continuer vers la matiere suivante"}
      </button>
    </section>
  );
}
