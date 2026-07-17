"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

interface ParentRow {
  id: string;
  email: string;
  displayName: string | null;
  isActive: boolean;
  childCount: number;
}

interface StudentRow {
  id: string;
  firstName: string;
  parentEmail: string | null;
  schoolLevelLabel: string | null;
  isActive: boolean;
}

export default function AdminDashboardPage() {
  const [parents, setParents] = useState<ParentRow[]>([]);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [inviting, setInviting] = useState(false);

  async function load() {
    const [parentsJson, studentsJson] = await Promise.all([
      fetch("/api/admin/parents").then((r) => r.json()),
      fetch("/api/admin/students").then((r) => r.json()),
    ]);
    if (parentsJson.ok) setParents(parentsJson.parents);
    if (studentsJson.ok) setStudents(studentsJson.students);
  }

  useEffect(() => {
    void load();
  }, []);

  async function handleInvite(event: React.FormEvent) {
    event.preventDefault();
    setInviting(true);
    setInviteError(null);
    setInviteSuccess(false);

    const response = await fetch("/api/admin/parents/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inviteEmail, displayName: inviteName }),
    });
    const json = await response.json();
    setInviting(false);

    if (!response.ok || !json.ok) {
      setInviteError(json.error ?? "Une erreur est survenue.");
      return;
    }

    setInviteSuccess(true);
    setInviteEmail("");
    setInviteName("");
    await load();
  }

  async function toggleActive(profileId: string, isActive: boolean) {
    setBusyId(profileId);
    await fetch(`/api/admin/accounts/${profileId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !isActive }),
    });
    await load();
    setBusyId(null);
  }

  async function resetPassword(profileId: string) {
    setBusyId(profileId);
    await fetch(`/api/admin/accounts/${profileId}`, { method: "POST" });
    setBusyId(null);
    alert("Lien de reinitialisation genere.");
  }

  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Administration</p>
          <h1>Tableau de bord admin</h1>
        </div>
      </header>

      <Card>
        <h2>Statistiques globales</h2>
        <ul className="stats-list">
          <li>Parents : {parents.length}</li>
          <li>Enfants : {students.length}</li>
        </ul>
      </Card>

      <div className="chips-row">
        <Link href="/admin/school-levels" className="ghost-btn">Niveaux scolaires</Link>
        <Link href="/admin/subjects" className="ghost-btn">Matieres</Link>
        <Link href="/admin/badges" className="ghost-btn">Badges</Link>
        <Link href="/admin/settings" className="ghost-btn">Parametres</Link>
      </div>

      <Card>
        <h2>Inviter un parent</h2>
        <form className="stack-lg" onSubmit={handleInvite}>
          <div>
            <label className="exercise-label" htmlFor="inviteName">Nom du parent</label>
            <input
              id="inviteName"
              className="answer-input"
              value={inviteName}
              onChange={(event) => setInviteName(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="exercise-label" htmlFor="inviteEmail">Email</label>
            <input
              id="inviteEmail"
              type="email"
              className="answer-input"
              value={inviteEmail}
              onChange={(event) => setInviteEmail(event.target.value)}
              required
            />
          </div>

          {inviteError ? <p className="feedback-help">{inviteError}</p> : null}
          {inviteSuccess ? <p className="feedback-ok">Invitation envoyee !</p> : null}

          <button type="submit" className="primary-btn" disabled={inviting}>
            {inviting ? "Envoi..." : "Envoyer l'invitation"}
          </button>
        </form>
      </Card>

      <Card>
        <h2>Parents</h2>
        <ul className="stats-list">
          {parents.map((parent) => (
            <li key={parent.id}>
              <strong>{parent.displayName ?? parent.email}</strong> ({parent.email}) — {parent.childCount} enfant(s)
              {" "}— {parent.isActive ? "actif" : "desactive"}
              <div className="chips-row">
                <button
                  type="button"
                  className="ghost-btn"
                  disabled={busyId === parent.id}
                  onClick={() => toggleActive(parent.id, parent.isActive)}
                >
                  {parent.isActive ? "Desactiver" : "Reactiver"}
                </button>
                <button
                  type="button"
                  className="ghost-btn"
                  disabled={busyId === parent.id}
                  onClick={() => resetPassword(parent.id)}
                >
                  Reinitialiser le mot de passe
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2>Tous les enfants</h2>
        <ul className="stats-list">
          {students.map((student) => (
            <li key={student.id}>
              {student.firstName} — {student.schoolLevelLabel} — parent : {student.parentEmail}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
