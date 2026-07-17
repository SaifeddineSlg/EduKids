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

export type QuestionType = "input" | "mcq" | "match";

export interface DayQuestion {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  type?: QuestionType; // absent = "input" (comportement historique)
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  kindWhenWrong: string;
  explanationWhenWrong: string;
  options?: string[]; // requis si type = "mcq"
  matchPairs?: { left: string; right: string }[]; // requis si type = "match"
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
