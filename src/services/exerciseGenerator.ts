import { Exercise, DifficultyLevel } from "@/models/types";

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateMentalMathSet(difficulty: DifficultyLevel, size = 20): Exercise[] {
  return Array.from({ length: size }).map((_, index) => {
    const max = difficulty === 1 ? 10 : difficulty === 2 ? 20 : difficulty === 3 ? 50 : 100;
    const left = randomInt(1, max);
    const right = randomInt(1, max);
    const op = ["+", "-", "x"][randomInt(0, 2)];

    let answer = 0;
    if (op === "+") {
      answer = left + right;
    } else if (op === "-") {
      answer = left - right;
    } else {
      answer = left * right;
    }

    return {
      id: `mm-${difficulty}-${index + 1}`,
      lessonId: "mental-math",
      question: `${left} ${op} ${right} = ?`,
      answer: String(answer),
      hint: "Utilise une decomposition en dizaines puis unites si besoin.",
      difficulty
    };
  });
}

export function generateFractionExercise(size = 30): Exercise[] {
  return Array.from({ length: size }).map((_, index) => {
    const denominator = randomInt(2, 12);
    const numerator = randomInt(1, denominator - 1);

    return {
      id: `frac-${index + 1}`,
      lessonId: "fractions-pizza",
      question: `Ecris en mots la fraction ${numerator}/${denominator}.`,
      answer: `${numerator} parts sur ${denominator}`,
      hint: "Le numerateur indique les parts prises.",
      difficulty: numerator < denominator / 2 ? 1 : 2
    };
  });
}
