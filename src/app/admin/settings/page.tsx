"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

export default function AdminSettingsPage() {
  const [maxChildren, setMaxChildren] = useState(2);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((json) => {
        if (json.ok && json.settings.max_children_per_parent !== undefined) {
          setMaxChildren(Number(json.settings.max_children_per_parent));
        }
      });
  }, []);

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setSaved(false);
    await fetch("/api/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "max_children_per_parent", value: maxChildren }),
    });
    setSaved(true);
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Parametres</h1>
        <form className="stack-lg" onSubmit={handleSave}>
          <div>
            <label className="exercise-label" htmlFor="maxChildren">Nombre maximum d&apos;enfants par parent</label>
            <input
              id="maxChildren"
              type="number"
              min={1}
              className="answer-input"
              value={maxChildren}
              onChange={(event) => setMaxChildren(Number(event.target.value))}
            />
          </div>

          {saved ? <p className="feedback-ok">Enregistre !</p> : null}

          <button type="submit" className="primary-btn big-btn">Enregistrer</button>
        </form>
      </Card>
    </section>
  );
}
