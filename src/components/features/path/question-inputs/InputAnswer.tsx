interface InputAnswerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function InputAnswer({ value, onChange, disabled }: InputAnswerProps) {
  return (
    <>
      <label className="exercise-label" htmlFor="question-answer">
        Ecris ta reponse
      </label>
      <input
        id="question-answer"
        className="answer-input"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ta reponse ici"
      />
    </>
  );
}
