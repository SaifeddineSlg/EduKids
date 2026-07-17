"use client";

import { Card } from "@/components/ui/Card";
import { Mascot } from "@/components/features/path/Mascot";

interface ResumeChoiceScreenProps {
  dayNumber: number;
  onResume: () => void;
  onRestart: () => void;
}

export function ResumeChoiceScreen({ dayNumber, onResume, onRestart }: ResumeChoiceScreenProps) {
  return (
    <section className="single-action-screen">
      <Card>
        <h2>Tu n&apos;avais pas termine le Jour {dayNumber}</h2>
        <p>Tu peux reprendre exactement la ou tu en etais, ou recommencer cette journee depuis le debut.</p>
        <Mascot message="A toi de choisir !" />
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onResume}>
        ▶ Reprendre
      </button>
      <button type="button" className="ghost-btn big-btn" onClick={onRestart}>
        ↺ Recommencer le Jour
      </button>
    </section>
  );
}
