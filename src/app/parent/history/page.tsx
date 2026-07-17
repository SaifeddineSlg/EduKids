import Link from "next/link";
import { children } from "@/data/children";
import { Card } from "@/components/ui/Card";

export default function HistoryChildSelectPage() {
  return (
    <section className="stack-lg">
      <header className="hero compact">
        <div>
          <p className="eyebrow">Historique</p>
          <h1>Choisis un enfant</h1>
        </div>
      </header>

      <div className="grid-2">
        {children.map((child) => (
          <Card key={child.id}>
            <h2>{child.name}</h2>
            <Link href={`/parent/history/${child.id}`} className="primary-btn">
              Voir l&apos;historique
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
