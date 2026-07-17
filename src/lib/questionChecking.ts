import { DayQuestion } from "@/models/types";

export function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function checkQuestionAnswer(question: DayQuestion, given: string): boolean {
  const type = question.type ?? "input";

  if (type === "mcq") {
    return normalizeAnswer(given) === normalizeAnswer(question.answer);
  }

  if (type === "match") {
    // La reponse "given" est serialisee sous la forme "left1=right1;left2=right2;..."
    const pairs = question.matchPairs ?? [];
    const expected = pairs
      .map((pair) => `${normalizeAnswer(pair.left)}=${normalizeAnswer(pair.right)}`)
      .sort()
      .join(";");
    const actual = given
      .split(";")
      .filter(Boolean)
      .map((entry) => entry.trim().toLowerCase())
      .sort()
      .join(";");
    return expected === actual;
  }

  const accepted = [question.answer, ...(question.acceptedAnswers ?? [])].map(normalizeAnswer);
  return accepted.includes(normalizeAnswer(given));
}
