import { AttemptStats, DifficultyLevel } from "@/models/types";

export function getAdaptiveDifficulty(stats: AttemptStats): DifficultyLevel {
  if (stats.recentFailures >= 3 || stats.successRate < 0.45) {
    return 1;
  }

  if (stats.recentFailures >= 2 || stats.successRate < 0.6) {
    return 2;
  }

  if (stats.recentSuccesses >= 4 && stats.successRate > 0.85) {
    return 4;
  }

  return 3;
}

export function getEncouragementMessage(isCorrect: boolean): string {
  if (isCorrect) {
    return "Excellent travail ! Tu progresses vraiment bien.";
  }

  const messages = [
    "Presque ! Regardons ensemble.",
    "Tres bien essaye ! Voici une astuce.",
    "Tu es sur la bonne voie, on recommence tranquillement."
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}
