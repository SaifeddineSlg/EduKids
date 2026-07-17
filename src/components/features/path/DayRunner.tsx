"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DayCurriculum, SubjectResult } from "@/models/types";
import { ActiveDaySession } from "@/models/serverTypes";
import { DayIntroScreen } from "@/components/features/path/DayIntroScreen";
import { SubjectLessonEngine } from "@/components/features/path/SubjectLessonEngine";
import { SubjectCompleteScreen } from "@/components/features/path/SubjectCompleteScreen";
import { DayCompleteScreen } from "@/components/features/path/DayCompleteScreen";
import { DayFailedScreen } from "@/components/features/path/DayFailedScreen";
import { completeSubject, completeDay } from "@/lib/api/dayProgress";

type RunnerPhase =
  | { kind: "intro" }
  | { kind: "subject" }
  | { kind: "subject-complete"; result: SubjectResult }
  | { kind: "day-complete"; averagePercent: number; passed: boolean; timeSpentSeconds: number };

interface DayRunnerProps {
  studentId: string;
  childName: string;
  day: DayCurriculum;
  initialSession: ActiveDaySession;
  showIntro: boolean;
}

export function DayRunner({ studentId, childName, day, initialSession, showIntro }: DayRunnerProps) {
  const router = useRouter();
  const [session, setSession] = useState(initialSession);
  const [phase, setPhase] = useState<RunnerPhase>(
    showIntro ? { kind: "intro" } : { kind: "subject" },
  );

  if (phase.kind === "intro") {
    return (
      <DayIntroScreen
        childName={childName}
        day={day}
        onStart={() => setPhase({ kind: "subject" })}
      />
    );
  }

  if (phase.kind === "subject") {
    const lesson = day.subjects[session.subjectIndex];

    return (
      <>
        <div className="day-exit-bar">
          <button
            type="button"
            className="day-exit-btn"
            onClick={() => router.push(`/parent/children/${studentId}/path`)}
          >
            <span aria-hidden="true">🏠</span> Faire une pause
          </button>
        </div>
        <SubjectLessonEngine
          key={`${session.subjectIndex}-${session.attemptNumber}`}
          lesson={lesson}
          studentId={studentId}
          dayNumber={day.dayNumber}
          attemptNumber={session.attemptNumber}
          initialStep={session.lessonStep}
          initialQuestionIndex={session.questionIndex}
          initialCorrectCount={session.currentSubjectCorrectCount ?? 0}
          onSubjectComplete={async (result) => {
            const updatedSession = await completeSubject(studentId, result);
            setSession(updatedSession);
            setPhase({ kind: "subject-complete", result });
          }}
        />
      </>
    );
  }

  if (phase.kind === "subject-complete") {
    const isLastSubject = session.subjectResults.length >= day.subjects.length;

    return (
      <SubjectCompleteScreen
        result={phase.result}
        isLastSubject={isLastSubject}
        onContinue={async () => {
          if (isLastSubject) {
            const totalXpEarned = session.subjectResults.reduce(
              (sum, item) => sum + item.xpEarned,
              0,
            );
            const timeSpentSeconds = Math.max(
              1,
              Math.round((Date.now() - new Date(session.startedAt).getTime()) / 1000),
            );

            const { averagePercent, passed } = await completeDay(
              studentId,
              day.dayNumber,
              session.attemptNumber,
              totalXpEarned,
              timeSpentSeconds,
            );

            setPhase({ kind: "day-complete", averagePercent, passed, timeSpentSeconds });
            return;
          }

          setPhase({ kind: "subject" });
        }}
      />
    );
  }

  if (!phase.passed) {
    return (
      <DayFailedScreen
        averagePercent={phase.averagePercent}
        onBackToPath={() => router.push(`/parent/children/${studentId}/path`)}
      />
    );
  }

  return (
    <DayCompleteScreen
      childName={childName}
      record={{
        dayNumber: day.dayNumber,
        attemptNumber: session.attemptNumber,
        subjectResults: session.subjectResults,
        totalXpEarned: session.subjectResults.reduce((sum, item) => sum + item.xpEarned, 0),
        averagePercent: phase.averagePercent,
        passed: phase.passed,
        timeSpentSeconds: phase.timeSpentSeconds,
        startedAt: session.startedAt,
        completedAt: new Date().toISOString(),
      }}
      onBackToPath={() => router.push(`/parent/children/${studentId}/path`)}
    />
  );
}
