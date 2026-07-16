"use client";

import { useMemo } from "react";

interface StarBurstProps {
  count?: number;
}

export function StarBurst({ count = 12 }: StarBurstProps) {
  const stars = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);

  return (
    <div className="stars-row" aria-hidden>
      {stars.map((star) => (
        <span key={star} className="star-pop" style={{ animationDelay: `${star * 0.08}s` }}>
          ✨
        </span>
      ))}
    </div>
  );
}
