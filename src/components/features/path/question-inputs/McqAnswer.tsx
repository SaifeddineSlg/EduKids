interface McqAnswerProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function McqAnswer({ options, value, onChange, disabled }: McqAnswerProps) {
  return (
    <div className="quiz-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          disabled={disabled}
          className={`ghost-btn ${value === option ? "is-active" : ""}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
