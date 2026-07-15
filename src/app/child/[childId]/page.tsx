import { notFound } from 'next/navigation'
import Link from 'next/link'
import { children } from '@/data/children'
import { subjects } from '@/data/subjects'
import { Card } from '@/components/ui/Card'
import { ChildProgressPanel } from '@/components/features/progress/ChildProgressPanel'

interface ChildPageProps {
  params: Promise<{
    childId: string
  }>
}

export default async function ChildDashboardPage({ params }: ChildPageProps) {
  const resolvedParams = await params
  const child = children.find((item) => item.id === resolvedParams.childId)

  if (!child) {
    notFound()
  }

  return (
    <section className="stack-lg">
      <header className="child-hero">
        <h1>{child.name}</h1>
        <p>{child.levelLabel}</p>
      </header>

      <ChildProgressPanel child={child} />

      <section>
        <h2>Matieres</h2>
        <div className="grid-3">
          {subjects.map((subject) => (
            <Card key={subject.id}>
              <h3>
                <span aria-hidden>{subject.icon}</span> {subject.title}
              </h3>
              <p>{subject.description}</p>
              <Link
                href={`/session?childId=${child.id}&subject=${subject.id}`}
                className="primary-btn"
              >
                Jouer maintenant
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </section>
  )
}
