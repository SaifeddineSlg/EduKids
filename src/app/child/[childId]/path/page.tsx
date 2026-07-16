import { notFound } from 'next/navigation'
import { children } from '@/data/children'
import { Card } from '@/components/ui/Card'
import { PathCalendar } from '@/components/features/path/PathCalendar'

interface PathPageProps {
  params: Promise<{
    childId: string
  }>
}

export default async function PathPage({ params }: PathPageProps) {
  const resolvedParams = await params
  const child = children.find((item) => item.id === resolvedParams.childId)

  if (!child) {
    notFound()
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Mon parcours de 30 jours</h1>
        <p>Clique sur le jour disponible pour commencer, {child.name} !</p>
      </Card>

      <PathCalendar childId={child.id} />
    </section>
  )
}
