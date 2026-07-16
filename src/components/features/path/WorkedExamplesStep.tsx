"use client";

import { useState } from "react";
import { WorkedExample } from "@/models/types";
import { Card } from "@/components/ui/Card";

interface WorkedExamplesStepProps {
  examples: WorkedExample[];
  onContinue: () => void;
}

export function WorkedExamplesStep({ examples, onContinue }: WorkedExamplesStepProps) {
  const [index, setIndex] = useState(0);
  const example = examples[index];
  const isLast = index >= examples.length - 1;

  if (!example) {
    onContinue();
    return null;
  }

  return (
    <section className="single-action-screen">
      <Card>
        <p className="eyebrow">Exemple {index + 1} / {examples.length}</p>
        <h3>{example.title}</h3>
        <ol className="animated-example-list">
          {example.steps.map((step, stepIndex) => (
            <li key={stepIndex} className="animated-example-step">
              {step.illustrationEmoji ? <span aria-hidden>{step.illustrationEmoji} </span> : null}
              {step.text}
            </li>
          ))}
        </ol>
      </Card>

      <button
        type="button"
        className="primary-btn big-btn"
        onClick={() => {
          if (isLast) {
            onContinue();
            return;
          }
          setIndex((prev) => prev + 1);
        }}
      >
        {isLast ? "Continuer" : "Exemple suivant"}
      </button>
    </section>
  );
}
