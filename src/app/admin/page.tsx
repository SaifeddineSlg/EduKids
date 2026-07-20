"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

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
  const [editingPasswordId, setEditingPasswordId] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; label: string } | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

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
    const response = await fetch(`/api/admin/accounts/${profileId}`, { method: "POST" });
    const json = await response.json();
    setBusyId(null);
    alert(json.ok ? "Email de reinitialisation envoye." : (json.error ?? "Echec de l'envoi."));
  }

  function startEditPassword(profileId: string) {
    setEditingPasswordId(profileId);
    setNewPassword("");
    setPasswordError(null);
  }

  async function submitNewPassword(profileId: string) {
    if (newPassword.length < 6) {
      setPasswordError("Le mot de passe doit faire au moins 6 caracteres.");
      return;
    }
    setBusyId(profileId);
    setPasswordError(null);

    const response = await fetch(`/api/admin/accounts/${profileId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });
    const json = await response.json();
    setBusyId(null);

    if (!response.ok || !json.ok) {
      setPasswordError(json.error ?? "Echec de la mise a jour.");
      return;
    }

    setEditingPasswordId(null);
    setNewPassword("");
    alert("Mot de passe mis a jour.");
  }

  async function confirmDeleteAccount() {
    if (!deleteTarget) return;

    setBusyId(deleteTarget.id);
    setDeleteError(null);
    const response = await fetch(`/api/admin/accounts/${deleteTarget.id}`, { method: "DELETE" });
    const json = await response.json();

    if (!response.ok || !json.ok) {
      setBusyId(null);
      setDeleteError(json.error ?? "Echec de la suppression.");
      return;
    }

    // Rechargement complet pour garantir un etat totalement a jour.
    window.location.reload();
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
                  Envoyer un lien de reinitialisation
                </button>
                <button
                  type="button"
                  className="ghost-btn"
                  disabled={busyId === parent.id}
                  onClick={() => startEditPassword(parent.id)}
                >
                  Definir un mot de passe
                </button>
                <button
                  type="button"
                  className="ghost-btn"
                  disabled={busyId === parent.id}
                  onClick={() => {
                    setDeleteError(null);
                    setDeleteTarget({ id: parent.id, label: parent.displayName ?? parent.email });
                  }}
                >
                  Supprimer le compte
                </button>
              </div>

              {editingPasswordId === parent.id ? (
                <div className="stack-lg" style={{ marginTop: "0.75rem", maxWidth: "320px" }}>
                  <PasswordInput
                    id={`new-password-${parent.id}`}
                    value={newPassword}
                    onChange={setNewPassword}
                    minLength={6}
                    autoComplete="new-password"
                  />
                  {passwordError ? <p className="feedback-help">{passwordError}</p> : null}
                  <div className="chips-row">
                    <button
                      type="button"
                      className="primary-btn"
                      disabled={busyId === parent.id}
                      onClick={() => submitNewPassword(parent.id)}
                    >
                      Enregistrer
                    </button>
                    <button
                      type="button"
                      className="ghost-btn"
                      onClick={() => setEditingPasswordId(null)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : null}
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

      {deleteTarget ? (
        <ConfirmDialog
          title="Supprimer ce compte ?"
          message={`Supprimer definitivement le compte de ${deleteTarget.label} ? Cette action supprime aussi ses enfants et tout leur historique pedagogique. Cette action est irreversible.${deleteError ? `\n\nErreur : ${deleteError}` : ""}`}
          confirmLabel="Supprimer"
          busy={busyId === deleteTarget.id}
          onConfirm={confirmDeleteAccount}
          onCancel={() => {
            setDeleteTarget(null);
            setDeleteError(null);
            setBusyId(null);
          }}
        />
      ) : null}
    </section>
  );
}
