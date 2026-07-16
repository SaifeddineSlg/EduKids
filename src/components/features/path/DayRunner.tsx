"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  DayCompletionRecord,
  DayCurriculum,
  SubjectResult
} from "@/models/types";
import { DayIntroScreen } from "@/components/features/path/DayIntroScreen";
import { SubjectLessonEngine } from "@/components/features/path/SubjectLessonEngine";
import { SubjectCompleteScreen } from "@/components/features/path/SubjectCompleteScreen";
import { DayCompleteScreen } from "@/components/features/path/DayCompleteScreen";
import { completeDay } from "@/lib/pathProgress";

type RunnerPhase =
  | { kind: "intro" }
  | { kind: "subject"; subjectIndex: number }
  | { kind: "subject-complete"; subjectIndex: number; result: SubjectResult }
  | { kind: "day-complete"; record: DayCompletionRecord };

interface DayRunnerProps {
  childId: string;
  childName: string;
  day: DayCurriculum;
}

export function DayRunner({ childId, childName, day }: DayRunnerProps) {
  const router = useRouter();
  const [phase, setPhase] = useState<RunnerPhase>({ kind: "intro" });
  const [startedAt] = useState(() => Date.now());
  const [results, setResults] = useState<SubjectResult[]>([]);

  if (phase.kind === "intro") {
    return (
      <DayIntroScreen
        childName={childName}
        day={day}
        onStart={() => setPhase({ kind: "subject", subjectIndex: 0 })}
      />
    );
  }

  if (phase.kind === "subject") {
    const lesson = day.subjects[phase.subjectIndex];
    return (
      <SubjectLessonEngine
        key={lesson.subjectId}
        lesson={lesson}
        childId={childId}
        dayNumber={day.dayNumber}
        onSubjectComplete={(result) => {
          setPhase({ kind: "subject-complete", subjectIndex: phase.subjectIndex, result });
        }}
      />
    );
  }

  if (phase.kind === "subject-complete") {
    const isLastSubject = phase.subjectIndex >= day.subjects.length - 1;

    return (
      <SubjectCompleteScreen
        result={phase.result}
        isLastSubject={isLastSubject}
        onContinue={() => {
          const updatedResults = [...results, phase.result];
          setResults(updatedResults);

          if (isLastSubject) {
            const totalXpEarned = updatedResults.reduce((sum, item) => sum + item.xpEarned, 0);
            const totalCorrect = updatedResults.reduce((sum, item) => sum + item.correctCount, 0);
            const totalQuestions = updatedResults.length * 6;
            const averagePercent = totalQuestions === 0 ? 0 : (totalCorrect / totalQuestions) * 100;

            const record: DayCompletionRecord = {
              dayNumber: day.dayNumber,
              completedAt: new Date().toISOString(),
              subjectResults: updatedResults,
              totalXpEarned,
              badgeEarned: averagePercent > 80,
              timeSpentSeconds: Math.round((Date.now() - startedAt) / 1000)
            };

            completeDay(childId, record);
            setPhase({ kind: "day-complete", record });
            return;
          }

          setPhase({ kind: "subject", subjectIndex: phase.subjectIndex + 1 });
        }}
      />
    );
  }

  return (
    <DayCompleteScreen
      childName={childName}
      record={phase.record}
      onBackToPath={() => router.push(`/child/${childId}/path`)}
    />
  );
}
