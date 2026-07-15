import Image from "next/image";
import Link from "next/link";
import { children } from "@/data/children";
import { ChildProfileCard } from "@/components/features/home/ChildProfileCard";

export default function HomePage() {
  return (
    <section className="stack-lg">
      <header className="hero">
        <div>
          <p className="eyebrow">Mission du jour</p>
          <h1>Apprendre comme des champions</h1>
          <p>
            Choisis ton profil pour demarrer une session ludique de 20 minutes avec revision,
            nouvelle notion et quiz final.
          </p>
          <div className="hero-actions">
            <Link href="/session?childId=child-1" className="primary-btn">
              Lancer la session
            </Link>
            <Link href="/parent" className="ghost-btn">
              Espace parent
            </Link>
          </div>
        </div>

        <div className="mascot-wrap">
          <Image src="/images/mascot.svg" alt="Mascotte renard" width={220} height={220} priority />
        </div>
      </header>

      <section>
        <h2>Profils enfants</h2>
        <div className="grid-2">
          {children.map((child) => (
            <ChildProfileCard key={child.id} child={child} />
          ))}
        </div>
      </section>
    </section>
  );
}
