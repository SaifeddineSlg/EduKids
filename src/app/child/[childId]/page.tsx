import { redirect } from 'next/navigation'

interface ChildPageProps {
  params: Promise<{
    childId: string
  }>
}

export default async function ChildDashboardPage({ params }: ChildPageProps) {
  const resolvedParams = await params
  redirect(`/child/${resolvedParams.childId}/path`)
}
