"use client";

import { Card } from "@/components/ui/Card";
import { Mascot } from "@/components/features/path/Mascot";

interface DayFailedScreenProps {
  averagePercent: number;
  onBackToPath: () => void;
}

export function DayFailedScreen({ averagePercent, onBackToPath }: DayFailedScreenProps) {
  return (
    <section className="single-action-screen">
      <Card>
        <h2>Bravo ! Tu progresses 😊</h2>
        <p>Tu as obtenu {Math.round(averagePercent)}% aujourd&apos;hui.</p>
        <p>Pour passer au jour suivant, il faut obtenir au moins 80%.</p>
        <p>Tu peux refaire cette journee autant de fois que tu veux.</p>
        <Mascot message="On y arrivera ensemble !" />
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onBackToPath}>
        Retour au calendrier
      </button>
    </section>
  );
}
