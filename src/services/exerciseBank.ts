import { LessonBlock, Exercise } from "@/models/types";
import { exercisesByLessonId } from "@/data/exercises";

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createExercise(
  id: string,
  lessonId: string,
  question: string,
  answer: string,
  correctionExplanation: string,
  difficulty: 1 | 2 | 3 | 4,
  hint?: string
): Exercise {
  return {
    id,
    lessonId,
    question,
    answer,
    acceptedAnswers: [answer],
    correctionExplanation,
    hint,
    difficulty
  };
}

function generateMathExercises(lessonId: string, count: number): Exercise[] {
  const list: Exercise[] = [];

  for (let i = 0; i < count; i += 1) {
    const difficulty = ((i % 4) + 1) as 1 | 2 | 3 | 4;

    if (lessonId === "fractions-pizza") {
      const den = randomInt(2, 12);
      const num = randomInt(1, den - 1);
      list.push(
        createExercise(
          `gen-${lessonId}-${i}`,
          lessonId,
          `Tu manges ${num} parts d une pizza coupee en ${den}. Ecris la fraction.`,
          `${num}/${den}`,
          `Fraction attendue: ${num}/${den}. Le numerateur indique les parts prises et le denominateur le total.`,
          difficulty,
          "Pense a total puis parts prises."
        )
      );
      continue;
    }

    if (lessonId === "pourcentage-reduction") {
      const price = randomInt(20, 200);
      const percent = [10, 20, 25, 30, 40][randomInt(0, 4)];
      const amount = (price * percent) / 100;
      list.push(
        createExercise(
          `gen-${lessonId}-${i}`,
          lessonId,
          `${percent}% de ${price} euros, c est combien ?`,
          String(amount),
          `${percent}% de ${price} = ${amount}. On fait ${price} x ${percent} / 100.`,
          difficulty,
          "10% est facile a calculer, puis adapte."
        )
      );
      continue;
    }

    const x = randomInt(2, 20);
    const add = randomInt(1, 12);
    list.push(
      createExercise(
        `gen-${lessonId}-${i}`,
        lessonId,
        `Resous: x + ${add} = ${x + add}`,
        String(x),
        `On retire ${add} des deux cotes, donc x = ${x}.`,
        difficulty,
        "Imagine une balance: meme operation des deux cotes."
      )
    );
  }

  return list;
}

function generateConjugationExercises(lessonId: string, count: number): Exercise[] {
  const pronouns = [
    { p: "Je", end: "e" },
    { p: "Tu", end: "es" },
    { p: "Il", end: "e" },
    { p: "Nous", end: "ons" },
    { p: "Vous", end: "ez" },
    { p: "Ils", end: "ent" }
  ];
  const verbs = ["jouer", "chanter", "parler", "marcher", "aimer"];
  const list: Exercise[] = [];

  for (let i = 0; i < count; i += 1) {
    const pr = pronouns[randomInt(0, pronouns.length - 1)];
    const verb = verbs[randomInt(0, verbs.length - 1)];
    const stem = verb.slice(0, -2);
    const answer = `${stem}${pr.end}`;

    list.push(
      createExercise(
        `gen-${lessonId}-${i}`,
        lessonId,
        `Complete: ${pr.p} (${verb}) ______ au present.`,
        answer,
        `${pr.p} + verbe en -er prend la terminaison -${pr.end}.`,
        ((i % 4) + 1) as 1 | 2 | 3 | 4,
        "Repere d abord le pronom, puis choisis la terminaison."
      )
    );
  }

  return list;
}

function generateGrammarExercises(lessonId: string, count: number): Exercise[] {
  const list: Exercise[] = [];
  const items = [
    { word: "chat", answer: "nom", exp: "chat designe un etre: c est un nom." },
    { word: "mange", answer: "verbe", exp: "mange indique une action: c est un verbe." },
    { word: "petit", answer: "adjectif", exp: "petit precise le nom: c est un adjectif." }
  ];

  for (let i = 0; i < count; i += 1) {
    const item = items[randomInt(0, items.length - 1)];
    list.push(
      createExercise(
        `gen-${lessonId}-${i}`,
        lessonId,
        `Donne la nature du mot: ${item.word}`,
        item.answer,
        item.exp,
        ((i % 4) + 1) as 1 | 2 | 3 | 4,
        "Pense a la famille du mot: nom, verbe, adjectif..."
      )
    );
  }

  return list;
}

function generateSpellingExercises(lessonId: string, count: number): Exercise[] {
  const list: Exercise[] = [];

  for (let i = 0; i < count; i += 1) {
    const isAvoir = i % 2 === 0;
    if (isAvoir) {
      list.push(
        createExercise(
          `gen-${lessonId}-${i}`,
          lessonId,
          "Complete: Il ____ un cahier neuf.",
          "a",
          "Ici, c est le verbe avoir. Test: il avait un cahier neuf.",
          ((i % 4) + 1) as 1 | 2 | 3 | 4,
          "Essaie de remplacer par avait."
        )
      );
    } else {
      list.push(
        createExercise(
          `gen-${lessonId}-${i}`,
          lessonId,
          "Complete: Je vais ____ la maison.",
          "a",
          "Ici, c est la preposition de lieu. A l ecrit courant, on met l accent sur a.",
          ((i % 4) + 1) as 1 | 2 | 3 | 4,
          "C est un petit mot qui introduit le lieu."
        )
      );
    }
  }

  return list;
}

function generateMentalMathExercises(lessonId: string, count: number): Exercise[] {
  const list: Exercise[] = [];

  for (let i = 0; i < count; i += 1) {
    const difficulty = ((i % 4) + 1) as 1 | 2 | 3 | 4;
    const max = difficulty === 1 ? 20 : difficulty === 2 ? 50 : difficulty === 3 ? 80 : 120;
    const left = randomInt(5, max);
    const right = randomInt(5, max);
    const answer = left + right;

    list.push(
      createExercise(
        `gen-${lessonId}-${i}`,
        lessonId,
        `Calcul mental: ${left} + ${right}`,
        String(answer),
        `On peut decomposer: ${left} + ${right} = ${answer}.`,
        difficulty,
        "Additionne d abord les dizaines, puis les unites."
      )
    );
  }

  return list;
}

function generateByLesson(lesson: LessonBlock, generatedCount: number): Exercise[] {
  switch (lesson.subjectId) {
    case "mathematiques":
      return generateMathExercises(lesson.id, generatedCount);
    case "conjugaison":
      return generateConjugationExercises(lesson.id, generatedCount);
    case "grammaire":
      return generateGrammarExercises(lesson.id, generatedCount);
    case "orthographe":
      return generateSpellingExercises(lesson.id, generatedCount);
    case "calcul-mental":
      return generateMentalMathExercises(lesson.id, generatedCount);
    default:
      return [];
  }
}

export function buildExerciseBankForLesson(lesson: LessonBlock, generatedCount = 180): Exercise[] {
  const base = exercisesByLessonId[lesson.id] ?? [];
  const generated = generateByLesson(lesson, generatedCount);
  return [...base, ...generated];
}
