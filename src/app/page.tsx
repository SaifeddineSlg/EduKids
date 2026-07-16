import Image from "next/image";
import { children } from "@/data/children";
import { ProfileChoiceCard } from "@/components/features/home/ProfileChoiceCard";

export default function HomePage() {
  return (
    <section className="stack-lg">
      <header className="hero">
        <div>
          <p className="eyebrow">Qui es-tu ?</p>
          <h1>Choisis ton profil pour commencer</h1>
        </div>

        <div className="mascot-wrap">
          <Image src="/images/mascot.svg" alt="Mascotte renard" width={220} height={220} priority />
        </div>
      </header>

      <div className="grid-2">
        {children.map((child) => (
          <ProfileChoiceCard key={child.id} child={child} />
        ))}
      </div>
    </section>
  );
}
