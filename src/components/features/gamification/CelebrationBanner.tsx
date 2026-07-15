"use client";

import { useMemo } from "react";

export function CelebrationBanner() {
  const stars = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  return (
    <section className="celebration-banner" aria-label="Message de celebration">
      <h2>Bravo, mission terminee !</h2>
      <p>Tu as gagne des etoiles, des pieces et un bonus XP.</p>
      <div className="stars-row">
        {stars.map((star) => (
          <span key={star} className="star-pop" style={{ animationDelay: `${star * 0.08}s` }}>
            ✨
          </span>
        ))}
      </div>
    </section>
  );
}
