"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DayCurriculum } from "@/models/types";
import { getDayCompletion, isDayUnlocked } from "@/lib/pathProgress";
import { DayRunner } from "@/components/features/path/DayRunner";
import { DayCompleteScreen } from "@/components/features/path/DayCompleteScreen";
import { Card } from "@/components/ui/Card";

interface DayGateProps {
  childId: string;
  childName: string;
  day: DayCurriculum;
}

export function DayGate({ childId, childName, day }: DayGateProps) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    const unlocked = isDayUnlocked(childId, day.dayNumber);
    if (!unlocked) {
      router.replace(`/child/${childId}/path`);
      return;
    }

    setAllowed(true);
    setAlreadyDone(Boolean(getDayCompletion(childId, day.dayNumber)));
    setChecked(true);
  }, [childId, day.dayNumber, router]);

  if (!checked || !allowed) {
    return null;
  }

  if (day.status === "coming-soon") {
    return (
      <section className="single-action-screen">
        <Card>
          <h2>Cette journee n&apos;est pas encore prete</h2>
          <p>Reviens un peu plus tard pour decouvrir cette nouvelle aventure !</p>
        </Card>
      </section>
    );
  }

  if (alreadyDone) {
    const completion = getDayCompletion(childId, day.dayNumber);
    if (completion) {
      return (
        <DayCompleteScreen
          childName={childName}
          record={completion}
          onBackToPath={() => router.push(`/child/${childId}/path`)}
        />
      );
    }
  }

  return <DayRunner childId={childId} childName={childName} day={day} />;
}
