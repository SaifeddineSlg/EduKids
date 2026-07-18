import { DayQuestion } from "@/models/types";

/**
 * Normalisation robuste avant comparaison :
 * - normalisation Unicode (NFC) pour que des caracteres accentues composes
 *   differemment (ex: e + accent combinant vs e-accent precompose) soient identiques,
 * - suppression des espaces en debut/fin,
 * - reduction des espaces multiples (y compris insecables) a un seul espace,
 * - casse ignoree.
 */
export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFC")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

const COMBINING_DIACRITICS = /[̀-ͯ]/g;

/**
 * Retire les accents/diacritiques (e.g. e -> e, c -> c, oe -> oe...) pour permettre
 * une comparaison tolerante quand l'exercice ne porte pas specifiquement sur
 * l'orthographe ou les accents.
 */
export function stripAccents(value: string): string {
  return value
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS, "")
    .replace(/œ/g, "oe") // œ
    .replace(/æ/g, "ae"); // æ
}

function answersMatch(expected: string, given: string, strictAccents: boolean): boolean {
  const normalizedExpected = normalizeAnswer(expected);
  const normalizedGiven = normalizeAnswer(given);

  if (normalizedExpected === normalizedGiven) {
    return true;
  }

  if (strictAccents) {
    return false;
  }

  return stripAccents(normalizedExpected) === stripAccents(normalizedGiven);
}

export function checkQuestionAnswer(question: DayQuestion, given: string): boolean {
  const type = question.type ?? "input";
  const strictAccents = question.strictAccents ?? false;

  if (type === "mcq") {
    return answersMatch(question.answer, given, strictAccents);
  }

  if (type === "match") {
    // La reponse "given" est serialisee sous la forme "left1=right1;left2=right2;..."
    const pairs = question.matchPairs ?? [];
    const normalizePair = (left: string, right: string) =>
      strictAccents
        ? `${normalizeAnswer(left)}=${normalizeAnswer(right)}`
        : `${stripAccents(normalizeAnswer(left))}=${stripAccents(normalizeAnswer(right))}`;

    const expected = pairs
      .map((pair) => normalizePair(pair.left, pair.right))
      .sort()
      .join(";");
    const actual = given
      .split(";")
      .filter(Boolean)
      .map((entry) => {
        const [left, right] = entry.split("=");
        return normalizePair(left ?? "", right ?? "");
      })
      .sort()
      .join(";");
    return expected === actual;
  }

  const accepted = [question.answer, ...(question.acceptedAnswers ?? [])];
  return accepted.some((candidate) => answersMatch(candidate, given, strictAccents));
}
