"use client";

import { StoryStep } from "@/models/types";
import { Card } from "@/components/ui/Card";
import { Mascot } from "@/components/features/path/Mascot";

interface LessonStoryStepProps {
  story: StoryStep;
  onContinue: () => void;
}

export function LessonStoryStep({ story, onContinue }: LessonStoryStepProps) {
  return (
    <section className="single-action-screen">
      <Card>
        <p className="story-emoji">{story.illustrationEmoji}</p>
        <div className="story-step">
          <p>{story.hook}</p>
          <p className="story-highlight">{story.concreteExample}</p>
          <p>{story.reveal}</p>
          {story.bridgeToConcept ? <p className="tip-box">{story.bridgeToConcept}</p> : null}
        </div>
        <Mascot message="Tu as tout compris, continuons !" />
      </Card>

      <button type="button" className="primary-btn big-btn" onClick={onContinue}>
        J&apos;ai compris, continuer
      </button>
    </section>
  );
}
