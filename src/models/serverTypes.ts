import { SubjectId, SubjectResult } from "@/models/types";

export type LessonStep = "story" | "examples" | "questions";

export interface ActiveDaySession {
  studentId: string;
  dayNumber: number;
  attemptNumber: number;
  subjectIndex: number;
  lessonStep: LessonStep;
  questionIndex: number;
  subjectResults: SubjectResult[];
  startedAt: string;
  /** Nombre de bonnes reponses deja obtenues dans la matiere en cours (pour la reprise). */
  currentSubjectCorrectCount?: number;
}

export interface DayAttemptRecord {
  dayNumber: number;
  attemptNumber: number;
  subjectResults: SubjectResult[];
  totalXpEarned: number;
  averagePercent: number;
  passed: boolean;
  timeSpentSeconds: number;
  startedAt: string;
  completedAt: string;
}

export interface DaySummary {
  best: DayAttemptRecord;
  latest: DayAttemptRecord;
  attemptCount: number;
}

export interface ResumeState {
  unlockedDay: number;
  activeSession: ActiveDaySession | null;
  attemptsByDay: Record<number, DaySummary>;
}

export interface QuestionAttemptDetail {
  subjectId: SubjectId;
  questionOrder: number;
  questionPrompt: string;
  givenAnswer: string;
  correctAnswer: string;
  correct: boolean;
  elapsedSeconds: number | null;
  answeredAt: string;
}
