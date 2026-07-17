"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

interface Badge {
  id: string;
  code: string;
  label: string;
  icon: string;
  threshold_type: string;
  threshold_value: number;
  is_active: boolean;
}

export default function AdminBadgesPage() {
  const [badges, setBadges] = useState<Badge[]>([]);

  async function load() {
    const json = await fetch("/api/admin/badges").then((r) => r.json());
    if (json.ok) setBadges(json.badges);
  }

  useEffect(() => {
    void load();
  }, []);

  async function toggleActive(badge: Badge) {
    await fetch("/api/admin/badges", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: badge.id, isActive: !badge.is_active }),
    });
    await load();
  }

  async function updateThreshold(badge: Badge, value: number) {
    await fetch("/api/admin/badges", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: badge.id, thresholdValue: value }),
    });
    await load();
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Badges</h1>
        <ul className="stats-list">
          {badges.map((badge) => (
            <li key={badge.id}>
              {badge.icon} {badge.label} — seuil ({badge.threshold_type}) :
              <input
                type="number"
                className="answer-input"
                style={{ width: "6rem", display: "inline-block", marginLeft: "0.5rem" }}
                defaultValue={badge.threshold_value}
                onBlur={(event) => updateThreshold(badge, Number(event.target.value))}
              />
              {" "}— {badge.is_active ? "actif" : "inactif"}
              <div className="chips-row">
                <button type="button" className="ghost-btn" onClick={() => toggleActive(badge)}>
                  {badge.is_active ? "Desactiver" : "Activer"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
