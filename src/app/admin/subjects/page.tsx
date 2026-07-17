"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

interface Subject {
  id: string;
  code: string;
  label: string;
  icon: string;
  display_order: number;
  is_active: boolean;
}

export default function AdminSubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  async function load() {
    const json = await fetch("/api/admin/subjects").then((r) => r.json());
    if (json.ok) setSubjects(json.subjects);
  }

  useEffect(() => {
    void load();
  }, []);

  async function toggleActive(subject: Subject) {
    await fetch("/api/admin/subjects", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: subject.id, isActive: !subject.is_active }),
    });
    await load();
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Matieres</h1>
        <ul className="stats-list">
          {subjects.map((subject) => (
            <li key={subject.id}>
              {subject.icon} {subject.label} — {subject.is_active ? "actif" : "inactif"}
              <div className="chips-row">
                <button type="button" className="ghost-btn" onClick={() => toggleActive(subject)}>
                  {subject.is_active ? "Desactiver" : "Activer"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
