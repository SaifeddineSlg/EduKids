import { SubjectId, SubjectResult } from "@/models/types";
import {
  ActiveDaySession,
  DayAttemptRecord,
  LessonStep,
  QuestionAttemptDetail,
  ResumeState,
} from "@/models/serverTypes";

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await response.json();
  if (!response.ok || !json.ok) {
    throw new Error(json.error ?? `Echec de la requete ${url}`);
  }

  return json as T;
}

export async function fetchResumeState(childId: string): Promise<ResumeState> {
  const response = await fetch(
    `/api/progress/resume?childId=${encodeURIComponent(childId)}`,
  );
  const json = await response.json();
  if (!response.ok || !json.ok) {
    throw new Error(json.error ?? "Echec du chargement de la progression");
  }
  return json.resume as ResumeState;
}

export async function startDay(
  childId: string,
  dayNumber: number,
  mode: "resume" | "restart",
): Promise<ActiveDaySession> {
  const result = await postJson<{ session: ActiveDaySession }>(
    "/api/progress/day/start",
    { childId, dayNumber, mode },
  );
  return result.session;
}

interface SubmitAnswerInput {
  childId: string;
  dayNumber: number;
  attemptNumber: number;
  subjectId: SubjectId;
  questionOrder: number;
  questionPrompt: string;
  givenAnswer: string;
  correctAnswer: string;
  acceptedAnswers?: string[];
  correct: boolean;
  elapsedSeconds?: number;
}

export async function submitAnswer(
  input: SubmitAnswerInput,
): Promise<ActiveDaySession> {
  const result = await postJson<{ session: ActiveDaySession }>(
    "/api/progress/day/answer",
    input,
  );
  return result.session;
}

export async function advanceLessonStep(
  childId: string,
  lessonStep: LessonStep,
): Promise<ActiveDaySession> {
  const result = await postJson<{ session: ActiveDaySession }>(
    "/api/progress/day/subject-step",
    { childId, lessonStep },
  );
  return result.session;
}

export async function completeSubject(
  childId: string,
  subjectResult: SubjectResult,
): Promise<ActiveDaySession> {
  const result = await postJson<{ session: ActiveDaySession }>(
    "/api/progress/day/subject-complete",
    { childId, subjectResult },
  );
  return result.session;
}

export async function completeDay(
  childId: string,
  dayNumber: number,
  attemptNumber: number,
  totalXpEarned: number,
  timeSpentSeconds: number,
): Promise<{ averagePercent: number; passed: boolean }> {
  return postJson<{ averagePercent: number; passed: boolean }>(
    "/api/progress/day/complete",
    { childId, dayNumber, attemptNumber, totalXpEarned, timeSpentSeconds },
  );
}

export async function fetchDayHistory(
  childId: string,
  dayNumber: number,
  attemptNumber: number,
  subjectId?: SubjectId,
): Promise<QuestionAttemptDetail[]> {
  const params = new URLSearchParams({
    childId,
    dayNumber: String(dayNumber),
    attemptNumber: String(attemptNumber),
  });
  if (subjectId) {
    params.set("subjectId", subjectId);
  }

  const response = await fetch(`/api/progress/history?${params.toString()}`);
  const json = await response.json();
  if (!response.ok || !json.ok) {
    throw new Error(json.error ?? "Echec du chargement de l'historique");
  }
  return json.questions as QuestionAttemptDetail[];
}

export async function fetchDayAttempts(
  childId: string,
  dayNumber?: number,
): Promise<DayAttemptRecord[]> {
  const params = new URLSearchParams({ childId });
  if (dayNumber) {
    params.set("dayNumber", String(dayNumber));
  }

  const response = await fetch(`/api/progress/day-attempts?${params.toString()}`);
  const json = await response.json();
  if (!response.ok || !json.ok) {
    throw new Error(json.error ?? "Echec du chargement des tentatives");
  }
  return json.attempts as DayAttemptRecord[];
}
