export type SubjectId =
  | "mathematiques"
  | "conjugaison"
  | "grammaire"
  | "orthographe"
  | "calcul-mental";

export type DifficultyLevel = 1 | 2 | 3 | 4;

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  levelLabel: string;
  xp: number;
  points: number;
  coins: number;
  streakDays: number;
  badges: string[];
  masteredSkills: number;
  skillsToReview: number;
}

export interface SubjectDefinition {
  id: SubjectId;
  title: string;
  icon: string;
  description: string;
  accent: string;
}

export interface LessonBlock {
  id: string;
  title: string;
  subjectId: SubjectId;
  targetSchoolLevel: "5e" | "4e";
  explanation: string;
  easyExamples: string[];
  commonMistakes: string[];
  memoryTip: string;
  summary: string;
  illustrationHint: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  question: string;
  answer: string;
  acceptedAnswers?: string[];
  correctionExplanation?: string;
  hint?: string;
  difficulty: DifficultyLevel;
}

export interface DailyPlan {
  revisionMinutes: number;
  lessonMinutes: number;
  exercisesMinutes: number;
  quizMinutes: number;
  focusSubject: SubjectId;
  focusLessonId: string;
}

export interface AttemptStats {
  successRate: number;
  recentFailures: number;
  recentSuccesses: number;
}

export type QuizType = "qcm" | "drag-drop" | "true-false" | "match" | "fill-blank" | "chrono";

export interface QuizItem {
  id: string;
  lessonId: string;
  type: QuizType;
  prompt: string;
  explanation: string;
  options?: string[];
  correctAnswer?: string;
  leftItems?: string[];
  rightItems?: string[];
  correctMatches?: Record<string, string>;
  dragItems?: string[];
  correctOrder?: string[];
  chronoSeconds?: number;
}
