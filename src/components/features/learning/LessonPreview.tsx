import { LessonBlock } from "@/models/types";
import { Card } from "@/components/ui/Card";

interface LessonPreviewProps {
  lesson: LessonBlock;
}

export function LessonPreview({ lesson }: LessonPreviewProps) {
  return (
    <Card>
      <h3>{lesson.title}</h3>
      <h4>Explication tres simple</h4>
      <p className="lesson-summary">{lesson.explanation}</p>

      <section>
        <h4>Exemples tres simples</h4>
        <ul>
          {lesson.easyExamples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Erreurs classiques</h4>
        <ul>
          {lesson.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>

      <p className="tip-box">Astuce: {lesson.memoryTip}</p>
      <p className="illustration-slot">Illustration a inserer: {lesson.illustrationHint}</p>
    </Card>
  );
}
