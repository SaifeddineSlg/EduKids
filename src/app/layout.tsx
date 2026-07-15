import type { Metadata } from 'next'
import './globals.css'
import { MainNav } from '@/components/ui/MainNav'

export const metadata: Metadata = {
  title: 'EduKids - Apprendre en s amusant',
  description:
    'Application educative pour enfants avec progression adaptative et gamification.',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <div className="app-background" />
        <MainNav />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
