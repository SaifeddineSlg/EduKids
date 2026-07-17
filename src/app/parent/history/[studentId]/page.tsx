"use client";

import { useEffect, useMemo, useState } from "react";
import { subjects } from "@/data/subjects";
import { SUBJECT_ORDER, SubjectId } from "@/models/types";
import { DayAttemptRecord, QuestionAttemptDetail } from "@/models/serverTypes";
import { Card } from "@/components/ui/Card";
import { fetchDayAttempts, fetchDayHistory } from "@/lib/api/dayProgress";

interface HistoryPageProps {
  params: Promise<{ studentId: string }>;
}

interface StudentSummary {
  id: string;
  firstName: string;
}

export default function HistoryPage({ params }: HistoryPageProps) {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [student, setStudent] = useState<StudentSummary | null>(null);
  const [attempts, setAttempts] = useState<DayAttemptRecord[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedAttempt, setSelectedAttempt] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | null>(null);
  const [questions, setQuestions] = useState<QuestionAttemptDetail[] | null>(null);

  useEffect(() => {
    params.then((resolved) => setStudentId(resolved.studentId));
  }, [params]);

  useEffect(() => {
    if (!studentId) return;
    fetch("/api/parent/students")
      .then((r) => r.json())
      .then((json) => {
        if (json.ok) {
          const found = json.students.find((s: StudentSummary) => s.id === studentId);
          setStudent(found ?? null);
        }
      });
    fetchDayAttempts(studentId).then(setAttempts).catch(() => setAttempts([]));
  }, [studentId]);

  useEffect(() => {
    setSelectedAttempt(null);
    setSelectedSubject(null);
    setQuestions(null);
  }, [selectedDay]);

  useEffect(() => {
    setSelectedSubject(null);
    setQuestions(null);
  }, [selectedAttempt]);

  useEffect(() => {
    if (!studentId || !selectedDay || !selectedAttempt || !selectedSubject) return;
    fetchDayHistory(studentId, selectedDay, selectedAttempt, selectedSubject)
      .then(setQuestions)
      .catch(() => setQuestions([]));
  }, [studentId, selectedDay, selectedAttempt, selectedSubject]);

  const days = useMemo(() => {
    const byDay = new Map<number, DayAttemptRecord[]>();
    attempts.forEach((attempt) => {
      const list = byDay.get(attempt.dayNumber) ?? [];
      list.push(attempt);
      byDay.set(attempt.dayNumber, list);
    });
    return Array.from(byDay.entries()).sort((a, b) => a[0] - b[0]);
  }, [attempts]);

  const attemptsForSelectedDay = useMemo(
    () => attempts.filter((attempt) => attempt.dayNumber === selectedDay),
    [attempts, selectedDay],
  );

  if (!student) {
    return null;
  }

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Historique</p>
          <h1>{student.firstName}</h1>
        </div>
      </header>

      {!selectedDay ? (
        <Card>
          <h2>Jours avec des tentatives</h2>
          {days.length === 0 ? <p>Aucune tentative enregistree pour le moment.</p> : null}
          <ul className="stats-list">
            {days.map(([dayNumber, dayAttempts]) => (
              <li key={dayNumber}>
                <button type="button" className="ghost-btn" onClick={() => setSelectedDay(dayNumber)}>
                  Jour {dayNumber} ({dayAttempts.length} tentative{dayAttempts.length > 1 ? "s" : ""})
                </button>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      {selectedDay && !selectedAttempt ? (
        <Card>
          <button type="button" className="ghost-btn" onClick={() => setSelectedDay(null)}>
            ← Retour aux jours
          </button>
          <h2>Jour {selectedDay} — tentatives</h2>
          <ul className="stats-list">
            {attemptsForSelectedDay.map((attempt) => (
              <li key={attempt.attemptNumber}>
                <button
                  type="button"
                  className="ghost-btn"
                  onClick={() => setSelectedAttempt(attempt.attemptNumber)}
                >
                  Tentative {attempt.attemptNumber} — {Math.round(attempt.averagePercent)}%
                  {" "}({new Date(attempt.completedAt).toLocaleDateString("fr-FR")})
                </button>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      {selectedDay && selectedAttempt && !selectedSubject ? (
        <Card>
          <button type="button" className="ghost-btn" onClick={() => setSelectedAttempt(null)}>
            ← Retour aux tentatives
          </button>
          <h2>Jour {selectedDay} — Tentative {selectedAttempt} — matieres</h2>
          <div className="grid-3">
            {SUBJECT_ORDER.map((subjectId) => {
              const subjectInfo = subjects.find((item) => item.id === subjectId);
              return (
                <button
                  key={subjectId}
                  type="button"
                  className="ghost-btn"
                  onClick={() => setSelectedSubject(subjectId)}
                >
                  {subjectInfo?.icon} {subjectInfo?.title}
                </button>
              );
            })}
          </div>
        </Card>
      ) : null}

      {selectedSubject && questions ? (
        <Card>
          <button type="button" className="ghost-btn" onClick={() => setSelectedSubject(null)}>
            ← Retour aux matieres
          </button>
          <h2>{subjects.find((item) => item.id === selectedSubject)?.title}</h2>
          {questions.length === 0 ? <p>Aucune reponse enregistree pour cette matiere.</p> : null}
          <ul className="stats-list">
            {questions.map((question) => (
              <li key={question.questionOrder}>
                <p><strong>Q{question.questionOrder}.</strong> {question.questionPrompt}</p>
                <p>Reponse donnee : {question.givenAnswer}</p>
                <p>Bonne reponse : {question.correctAnswer}</p>
                <p>Temps de reponse : {question.elapsedSeconds ?? "?"}s</p>
                <p>{question.correct ? "✅ Correct" : "❌ Incorrect"}</p>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </section>
  );
}
