interface RewardChipProps {
  icon: string;
  value: string;
}

export function RewardChip({ icon, value }: RewardChipProps) {
  return (
    <span className="reward-chip">
      <span>{icon}</span>
      <strong>{value}</strong>
    </span>
  );
}
