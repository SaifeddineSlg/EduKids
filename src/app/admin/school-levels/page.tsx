"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

interface SchoolLevel {
  id: string;
  code: string;
  label: string;
  display_order: number;
  is_active: boolean;
}

export default function AdminSchoolLevelsPage() {
  const [levels, setLevels] = useState<SchoolLevel[]>([]);

  async function load() {
    const json = await fetch("/api/admin/school-levels").then((r) => r.json());
    if (json.ok) setLevels(json.schoolLevels);
  }

  useEffect(() => {
    void load();
  }, []);

  async function toggleActive(level: SchoolLevel) {
    await fetch("/api/admin/school-levels", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: level.id, isActive: !level.is_active }),
    });
    await load();
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Niveaux scolaires</h1>
        <ul className="stats-list">
          {levels.map((level) => (
            <li key={level.id}>
              {level.label} ({level.code}) — {level.is_active ? "actif" : "inactif"}
              <div className="chips-row">
                <button type="button" className="ghost-btn" onClick={() => toggleActive(level)}>
                  {level.is_active ? "Desactiver" : "Activer"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
