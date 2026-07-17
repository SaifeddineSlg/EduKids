'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { children } from '@/data/children'
import { Card } from '@/components/ui/Card'
import { ChildAnalytics, fetchChildAnalytics } from '@/lib/progressDb'

function getDefaultAnalytics(): ChildAnalytics {
  return {
    totalAttempts: 0,
    correctAttempts: 0,
    accuracy: 0,
    exerciseAttempts: 0,
    quizAttempts: 0,
    averageSeconds: 0,
    masteredLessons: [],
    lessonsToReview: [],
    weeklyScore: 0,
    last7DaysActivity: [],
  }
}

export default function ParentDashboardPage() {
  const [analytics, setAnalytics] = useState<Record<string, ChildAnalytics>>({})

  useEffect(() => {
    let cancelled = false

    async function loadAnalytics(): Promise<void> {
      const values: Record<string, ChildAnalytics> = {}

      await Promise.all(
        children.map(async (child) => {
          values[child.id] = await fetchChildAnalytics(child.id)
        }),
      )

      if (!cancelled) {
        setAnalytics(values)
      }
    }

    void loadAnalytics()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Tableau de bord parent</p>
          <h1>Suivi pedagogique</h1>
          <p>
            Vision claire des progres, difficultes et recommandations
            quotidiennes.
          </p>
        </div>
      </header>

      <div className="grid-2">
        {children.map((child) => (
          <Card key={child.id}>
            {(() => {
              const stats = analytics[child.id] ?? getDefaultAnalytics()

              return (
                <>
                  <h2>{child.name}</h2>
                  <ul className="stats-list">
                    <li>Tentatives totales: {stats.totalAttempts}</li>
                    <li>Reponses justes: {stats.correctAttempts}</li>
                    <li>Precision: {stats.accuracy}%</li>
                    <li>
                      Temps moyen par activite: {stats.averageSeconds} sec
                    </li>
                    <li>Notions maitrisees: {stats.masteredLessons.length}</li>
                    <li>Notions a revoir: {stats.lessonsToReview.length}</li>
                    <li>Exercices faits: {stats.exerciseAttempts}</li>
                    <li>Quiz faits: {stats.quizAttempts}</li>
                    <li>Score hebdomadaire: {stats.weeklyScore} pts</li>
                    <li>Streak: {child.streakDays} jours</li>
                  </ul>

                  <h3>Historique 7 jours</h3>
                  <ul className="stats-list">
                    {stats.last7DaysActivity.map((day) => (
                      <li key={`${child.id}-${day.day}`}>
                        {day.day}: {day.correct}/{day.attempts} reussites
                      </li>
                    ))}
                  </ul>

                  <Link href={`/parent/history/${child.id}`} className="primary-btn">
                    Voir l&apos;historique detaille
                  </Link>
                </>
              )
            })()}
          </Card>
        ))}
      </div>

      <Card>
        <h2>Recommandations automatiques</h2>
        <ul className="stats-list">
          <li>
            Renforcer les notions avec precision inferieure a 60% via fiches
            guidees.
          </li>
          <li>
            Augmenter la difficulte seulement quand la precision depasse 80% sur
            7 jours.
          </li>
          <li>
            Programmer 1 mini-revision quotidienne des lecons a revoir
            (repetition espacee).
          </li>
        </ul>
      </Card>
    </section>
  )
}
