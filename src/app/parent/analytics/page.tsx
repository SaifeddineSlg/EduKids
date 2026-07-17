"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ChildAnalytics, fetchStudentAnalytics } from "@/lib/progressDb";

interface StudentSummary {
  id: string;
  firstName: string;
  avatar: string;
}

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
  };
}

export default function ParentAnalyticsPage() {
  const [students, setStudents] = useState<StudentSummary[]>([]);
  const [analytics, setAnalytics] = useState<Record<string, ChildAnalytics>>({});

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const response = await fetch("/api/parent/students");
      const json = await response.json();
      if (!json.ok || cancelled) return;

      setStudents(json.students);

      const values: Record<string, ChildAnalytics> = {};
      await Promise.all(
        json.students.map(async (student: StudentSummary) => {
          values[student.id] = await fetchStudentAnalytics(student.id);
        }),
      );

      if (!cancelled) {
        setAnalytics(values);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Tableau de bord parent</p>
          <h1>Suivi pedagogique</h1>
        </div>
      </header>

      <div className="grid-2">
        {students.map((student) => {
          const stats = analytics[student.id] ?? getDefaultAnalytics();

          return (
            <Card key={student.id}>
              <h2>{student.avatar} {student.firstName}</h2>
              <ul className="stats-list">
                <li>Tentatives totales: {stats.totalAttempts}</li>
                <li>Reponses justes: {stats.correctAttempts}</li>
                <li>Precision: {stats.accuracy}%</li>
                <li>Temps moyen par activite: {stats.averageSeconds} sec</li>
                <li>Notions maitrisees: {stats.masteredLessons.length}</li>
                <li>Notions a revoir: {stats.lessonsToReview.length}</li>
                <li>Score hebdomadaire: {stats.weeklyScore} pts</li>
              </ul>

              <h3>Historique 7 jours</h3>
              <ul className="stats-list">
                {stats.last7DaysActivity.map((day) => (
                  <li key={`${student.id}-${day.day}`}>
                    {day.day}: {day.correct}/{day.attempts} reussites
                  </li>
                ))}
              </ul>

              <Link href={`/parent/history/${student.id}`} className="primary-btn">
                Voir l&apos;historique detaille
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
