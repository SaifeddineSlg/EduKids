import { allLessons } from '@/data/lessons'
import { children } from '@/data/children'
import { LessonPreview } from '@/components/features/learning/LessonPreview'
import { InteractiveExercises } from '@/components/features/learning/InteractiveExercises'
import { QuizArena } from '@/components/features/learning/QuizArena'
import { CelebrationBanner } from '@/components/features/gamification/CelebrationBanner'
import { Card } from '@/components/ui/Card'
import { buildDailyPlan } from '@/services/dailyPlanner'
import { buildExerciseBankForLesson } from '@/services/exerciseBank'
import { generateQuizForLesson } from '@/services/quizGenerator'
import { SubjectId } from '@/models/types'

interface SessionPageProps {
  searchParams: Promise<{
    childId?: string
    subject?: SubjectId
  }>
}

export default async function SessionPage({ searchParams }: SessionPageProps) {
  const resolvedSearchParams = await searchParams
  const childId = resolvedSearchParams.childId ?? 'child-1'
  const subjectId = resolvedSearchParams.subject ?? 'mathematiques'
  const child = children.find((item) => item.id === childId) ?? children[0]
  const plan = buildDailyPlan(child.id, subjectId)
  const lesson =
    allLessons.find((item) => item.id === plan.focusLessonId) ?? allLessons[0]
  const exerciseBank = buildExerciseBankForLesson(lesson, 180)
  const quizItems = generateQuizForLesson(lesson)

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Session quotidienne 20 minutes</p>
          <h1>Salut {child.name}, on avance pas a pas</h1>
          <p>
            Objectif: comprendre, s entrainer, puis reussir le mini quiz final.
          </p>
        </div>
      </header>

      <Card>
        <h2>Planning intelligent du jour</h2>
        <div className="timeline">
          <div>
            <strong>{plan.revisionMinutes} min</strong>
            <span>Revision active</span>
          </div>
          <div>
            <strong>{plan.lessonMinutes} min</strong>
            <span>Nouvelle lecon</span>
          </div>
          <div>
            <strong>{plan.exercisesMinutes} min</strong>
            <span>Exercices adaptatifs</span>
          </div>
          <div>
            <strong>{plan.quizMinutes} min</strong>
            <span>Quiz final</span>
          </div>
        </div>
      </Card>

      <LessonPreview lesson={lesson} />

      <Card>
        <h2>Resume a retenir</h2>
        <p>{lesson.summary}</p>
      </Card>

      <Card>
        <h2>Exercices progressifs avec correction</h2>
        <ol className="levels-list">
          <li>Niveau 1: Tres facile</li>
          <li>Niveau 2: Facile</li>
          <li>Niveau 3: Normal</li>
          <li>Niveau 4: Defi</li>
        </ol>
        <p>
          Ecris tes reponses dans les zones de saisie puis clique sur Verifier.
        </p>
        <p>En cas d erreur, on t explique et on te guide avec un indice.</p>
        <p>
          Banque disponible pour cette lecon: {exerciseBank.length} exercices
          generes automatiquement.
        </p>
      </Card>

      <InteractiveExercises
        exercises={exerciseBank}
        childId={child.id}
        subjectId={subjectId}
        lessonId={lesson.id}
      />

      <Card>
        <h2>Quiz final multi-defis</h2>
        <p>
          Tu as ici des quiz varies: QCM, vrai/faux, completer, relier,
          glisser-deposer et chrono.
        </p>
      </Card>

      <QuizArena
        items={quizItems}
        childId={child.id}
        subjectId={subjectId}
        lessonId={lesson.id}
      />

      <CelebrationBanner />
    </section>
  )
}
