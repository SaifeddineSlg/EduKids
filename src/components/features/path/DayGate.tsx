"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DayCurriculum } from "@/models/types";
import { ActiveDaySession, DayAttemptRecord } from "@/models/serverTypes";
import { DayRunner } from "@/components/features/path/DayRunner";
import { DayCompleteScreen } from "@/components/features/path/DayCompleteScreen";
import { ResumeChoiceScreen } from "@/components/features/path/ResumeChoiceScreen";
import { Card } from "@/components/ui/Card";
import { fetchResumeState } from "@/lib/api/dayProgress";
import { startDay } from "@/lib/api/dayProgress";

interface DayGateProps {
  studentId: string;
  childName: string;
  day: DayCurriculum;
}

type GateState =
  | { kind: "loading" }
  | { kind: "locked" }
  | { kind: "coming-soon" }
  | { kind: "resume-choice" }
  | { kind: "completed"; record: DayAttemptRecord }
  | { kind: "run"; session: ActiveDaySession; showIntro: boolean }
  | { kind: "error" };

export function DayGate({ studentId, childName, day }: DayGateProps) {
  const router = useRouter();
  const [state, setState] = useState<GateState>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const resume = await fetchResumeState(studentId);

        if (day.dayNumber > resume.unlockedDay) {
          router.replace(`/parent/children/${studentId}/path`);
          return;
        }

        if (day.status === "coming-soon") {
          if (!cancelled) setState({ kind: "coming-soon" });
          return;
        }

        if (resume.activeSession && resume.activeSession.dayNumber === day.dayNumber) {
          if (!cancelled) setState({ kind: "resume-choice" });
          return;
        }

        const summary = resume.attemptsByDay[day.dayNumber];
        if (summary && summary.best.passed) {
          if (!cancelled) setState({ kind: "completed", record: summary.best });
          return;
        }

        const session = await startDay(studentId, day.dayNumber, "resume");
        if (!cancelled) setState({ kind: "run", session, showIntro: true });
      } catch {
        if (!cancelled) setState({ kind: "error" });
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [studentId, day.dayNumber, day.status, router]);

  if (state.kind === "loading" || state.kind === "locked") {
    return null;
  }

  if (state.kind === "error") {
    return (
      <section className="single-action-screen">
        <Card>
          <h2>Connexion impossible</h2>
          <p>Verifie ta connexion internet puis reessaie.</p>
        </Card>
        <button
          type="button"
          className="primary-btn big-btn"
          onClick={() => setState({ kind: "loading" })}
        >
          Reessayer
        </button>
      </section>
    );
  }

  if (state.kind === "coming-soon") {
    return (
      <section className="single-action-screen">
        <Card>
          <h2>Cette journee n&apos;est pas encore prete</h2>
          <p>Reviens un peu plus tard pour decouvrir cette nouvelle aventure !</p>
        </Card>
      </section>
    );
  }

  if (state.kind === "resume-choice") {
    return (
      <ResumeChoiceScreen
        dayNumber={day.dayNumber}
        onResume={async () => {
          const session = await startDay(studentId, day.dayNumber, "resume");
          setState({ kind: "run", session, showIntro: false });
        }}
        onRestart={async () => {
          const session = await startDay(studentId, day.dayNumber, "restart");
          setState({ kind: "run", session, showIntro: true });
        }}
      />
    );
  }

  if (state.kind === "completed") {
    return (
      <>
        <DayCompleteScreen
          childName={childName}
          record={state.record}
          onBackToPath={() => router.push(`/parent/children/${studentId}/path`)}
        />
        <div className="single-action-screen">
          <button
            type="button"
            className="ghost-btn big-btn"
            onClick={async () => {
              const session = await startDay(studentId, day.dayNumber, "restart");
              setState({ kind: "run", session, showIntro: true });
            }}
          >
            Refaire ce jour
          </button>
        </div>
      </>
    );
  }

  return (
    <DayRunner
      studentId={studentId}
      childName={childName}
      day={day}
      initialSession={state.session}
      showIntro={state.showIntro}
    />
  );
}
