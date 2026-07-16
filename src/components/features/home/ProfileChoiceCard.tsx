import Link from "next/link";
import { ChildProfile } from "@/models/types";
import { Card } from "@/components/ui/Card";

interface ProfileChoiceCardProps {
  child: ChildProfile;
}

export function ProfileChoiceCard({ child }: ProfileChoiceCardProps) {
  return (
    <Card className="child-card profile-choice-card">
      <h2>{child.name}</h2>
      <Link href={`/child/${child.id}/path`} className="primary-btn big-btn">
        C&apos;est moi !
      </Link>
    </Card>
  );
}
