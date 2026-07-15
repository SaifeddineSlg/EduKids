'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ChildProfile } from '@/models/types'
import {
  buildProgressSnapshotFromAnalytics,
  ChildProgressSnapshot,
  getChildAnalytics,
  getChildAnalyticsFromCloud,
} from '@/lib/progressDb'

interface ChildProgressPanelProps {
  child: ChildProfile
}

export function ChildProgressPanel({ child }: ChildProgressPanelProps) {
  const totalSkills = child.masteredSkills + child.skillsToReview
  const [progress, setProgress] = useState<ChildProgressSnapshot>({
    xp: child.xp,
    points: child.points,
    coins: child.coins,
    streakDays: child.streakDays,
    masteredSkills: child.masteredSkills,
    totalSkills: Math.max(1, totalSkills),
    badges: child.badges,
  })

  useEffect(() => {
    let cancelled = false

    async function loadProgress(): Promise<void> {
      const analytics =
        (await getChildAnalyticsFromCloud(child.id)) ??
        getChildAnalytics(child.id)
      const snapshot = buildProgressSnapshotFromAnalytics(
        analytics,
        totalSkills,
      )

      if (!cancelled) {
        setProgress(snapshot)
      }
    }

    void loadProgress()

    return () => {
      cancelled = true
    }
  }, [child.id, totalSkills])

  return (
    <Card>
      <h2>Progression</h2>
      <ProgressBar
        label="Notions maitrisees"
        value={progress.masteredSkills}
        max={progress.totalSkills}
      />
      <p>
        Score: <strong>{progress.points}</strong> points | XP:{' '}
        <strong>{progress.xp}</strong> | Pieces:{' '}
        <strong>{progress.coins}</strong> | Streak:{' '}
        <strong>{progress.streakDays}</strong> jours
      </p>
      <p>
        Badges debloques: <strong>{progress.badges.length}</strong>
      </p>
      <ul className="stats-list">
        {progress.badges.length > 0 ? (
          progress.badges.map((badge) => <li key={badge}>{badge}</li>)
        ) : (
          <li>Aucun badge debloque pour le moment.</li>
        )}
      </ul>
    </Card>
  )
}
