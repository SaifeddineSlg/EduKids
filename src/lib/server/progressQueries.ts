import { SupabaseClient } from "@supabase/supabase-js";
import { SubjectResult } from "@/models/types";
import {
  ActiveDaySession,
  DayAttemptRecord,
  DaySummary,
} from "@/models/serverTypes";

interface ActiveSessionRow {
  child_id: string;
  day_number: number;
  attempt_number: number;
  subject_index: number;
  lesson_step: "story" | "examples" | "questions";
  question_index: number;
  subject_results: SubjectResult[];
  started_at: string;
}

interface DayAttemptRow {
  day_number: number;
  attempt_number: number;
  subject_results: SubjectResult[];
  total_xp_earned: number;
  average_percent: number;
  passed: boolean;
  time_spent_seconds: number;
  started_at: string;
  completed_at: string;
}

function mapSessionRow(row: ActiveSessionRow): ActiveDaySession {
  return {
    childId: row.child_id,
    dayNumber: row.day_number,
    attemptNumber: row.attempt_number,
    subjectIndex: row.subject_index,
    lessonStep: row.lesson_step,
    questionIndex: row.question_index,
    subjectResults: row.subject_results,
    startedAt: row.started_at,
  };
}

function mapAttemptRow(row: DayAttemptRow): DayAttemptRecord {
  return {
    dayNumber: row.day_number,
    attemptNumber: row.attempt_number,
    subjectResults: row.subject_results,
    totalXpEarned: row.total_xp_earned,
    averagePercent: Number(row.average_percent),
    passed: row.passed,
    timeSpentSeconds: row.time_spent_seconds,
    startedAt: row.started_at,
    completedAt: row.completed_at,
  };
}

export async function getActiveSession(
  supabase: SupabaseClient,
  childId: string,
): Promise<ActiveDaySession | null> {
  const { data, error } = await supabase
    .from("active_day_sessions")
    .select("*")
    .eq("child_id", childId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return mapSessionRow(data as ActiveSessionRow);
}

export async function getAllAttempts(
  supabase: SupabaseClient,
  childId: string,
): Promise<DayAttemptRecord[]> {
  const { data, error } = await supabase
    .from("day_attempts")
    .select("*")
    .eq("child_id", childId)
    .order("day_number", { ascending: true })
    .order("attempt_number", { ascending: true });

  if (error || !data) {
    return [];
  }

  return (data as DayAttemptRow[]).map(mapAttemptRow);
}

export function buildAttemptsByDay(
  attempts: DayAttemptRecord[],
): Record<number, DaySummary> {
  const byDay: Record<number, DayAttemptRecord[]> = {};

  attempts.forEach((attempt) => {
    if (!byDay[attempt.dayNumber]) {
      byDay[attempt.dayNumber] = [];
    }
    byDay[attempt.dayNumber].push(attempt);
  });

  const result: Record<number, DaySummary> = {};

  Object.entries(byDay).forEach(([dayNumberKey, dayAttempts]) => {
    const dayNumber = Number(dayNumberKey);
    const best = dayAttempts.reduce((currentBest, attempt) =>
      !currentBest || attempt.averagePercent > currentBest.averagePercent
        ? attempt
        : currentBest,
    dayAttempts[0]);
    const latest = dayAttempts.reduce((currentLatest, attempt) =>
      !currentLatest || attempt.attemptNumber > currentLatest.attemptNumber
        ? attempt
        : currentLatest,
    dayAttempts[0]);

    result[dayNumber] = {
      best,
      latest,
      attemptCount: dayAttempts.length,
    };
  });

  return result;
}

export function computeUnlockedDay(
  attemptsByDay: Record<number, DaySummary>,
): number {
  let unlockedDay = 1;

  for (let dayNumber = 1; dayNumber <= 30; dayNumber += 1) {
    const summary = attemptsByDay[dayNumber];
    // "best" a le plus grand averagePercent : s'il n'est pas passed, aucune tentative ne l'est.
    const hasPassed = summary ? summary.best.passed : false;

    if (!hasPassed) {
      break;
    }

    unlockedDay = Math.min(31, dayNumber + 1);
  }

  return unlockedDay;
}
