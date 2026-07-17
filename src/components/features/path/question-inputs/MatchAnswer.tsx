interface MatchAnswerProps {
  pairs: { left: string; right: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

function parseSelections(value: string): Record<string, string> {
  const map: Record<string, string> = {};
  value
    .split(";")
    .filter(Boolean)
    .forEach((entry) => {
      const [left, right] = entry.split("=");
      if (left && right) {
        map[left] = right;
      }
    });
  return map;
}

function serializeSelections(map: Record<string, string>): string {
  return Object.entries(map)
    .map(([left, right]) => `${left}=${right}`)
    .join(";");
}

export function MatchAnswer({ pairs, value, onChange, disabled }: MatchAnswerProps) {
  const selections = parseSelections(value);
  const rightOptions = pairs.map((pair) => pair.right);

  return (
    <div className="match-grid">
      {pairs.map((pair) => (
        <div key={pair.left} className="match-row">
          <span>{pair.left}</span>
          <select
            className="answer-input"
            disabled={disabled}
            value={selections[pair.left] ?? ""}
            onChange={(event) => {
              const updated = { ...selections, [pair.left]: event.target.value };
              onChange(serializeSelections(updated));
            }}
          >
            <option value="">Choisir</option>
            {rightOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
