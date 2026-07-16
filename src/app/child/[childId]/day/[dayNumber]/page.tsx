import { notFound } from 'next/navigation'
import { children } from '@/data/children'
import { getDayCurriculum } from '@/data/curriculum'
import { DayGate } from '@/components/features/path/DayGate'

interface DayPageProps {
  params: Promise<{
    childId: string
    dayNumber: string
  }>
}

export default async function DayPage({ params }: DayPageProps) {
  const resolvedParams = await params
  const child = children.find((item) => item.id === resolvedParams.childId)
  const dayNumber = Number(resolvedParams.dayNumber)
  const day = getDayCurriculum(dayNumber)

  if (!child || !day) {
    notFound()
  }

  return <DayGate childId={child.id} childName={child.name} day={day} />
}
