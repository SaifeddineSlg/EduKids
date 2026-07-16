export type SubjectId =
  | "mathematiques"
  | "conjugaison"
  | "grammaire"
  | "orthographe"
  | "calcul-mental";

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

// --- Parcours guide de 30 jours ---

export const SUBJECT_ORDER: SubjectId[] = [
  "mathematiques",
  "conjugaison",
  "grammaire",
  "orthographe",
  "calcul-mental"
];

export interface DayContentStatus {
  status: "ready" | "coming-soon";
}

export interface StoryStep {
  hook: string;
  concreteExample: string;
  reveal: string;
  bridgeToConcept: string;
  illustrationEmoji: string;
}

export interface WorkedExampleStep {
  text: string;
  illustrationEmoji?: string;
}

export interface WorkedExample {
  title: string;
  steps: WorkedExampleStep[];
}

export interface DayQuestion {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  kindWhenWrong: string;
  explanationWhenWrong: string;
}

export interface SubjectDayLesson extends DayContentStatus {
  subjectId: SubjectId;
  title: string;
  story: StoryStep;
  examples: WorkedExample[];
  questions: DayQuestion[];
  xpReward: number;
}

export interface DayCurriculum extends DayContentStatus {
  dayNumber: number;
  subjects: SubjectDayLesson[];
}

export interface SubjectResult {
  subjectId: SubjectId;
  correctCount: number;
  xpEarned: number;
}

export interface DayCompletionRecord {
  dayNumber: number;
  completedAt: string;
  subjectResults: SubjectResult[];
  totalXpEarned: number;
  badgeEarned: boolean;
  timeSpentSeconds: number;
}

export interface ChildPathProgress {
  childId: string;
  unlockedDay: number;
  completions: DayCompletionRecord[];
}
