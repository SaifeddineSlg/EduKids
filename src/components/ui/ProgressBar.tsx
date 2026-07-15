interface ProgressBarProps {
  label: string
  value: number
  max: number
}

export function ProgressBar({ label, value, max }: ProgressBarProps) {
  const safeMax = max > 0 ? max : 1
  const boundedValue = Math.min(Math.max(value, 0), safeMax)
  const percentage = Math.round((boundedValue / safeMax) * 100)

  return (
    <div className="progress-wrap" aria-label={label}>
      <div className="progress-head">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
