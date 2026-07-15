'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChildProfile } from '@/models/types'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { RewardChip } from '@/components/ui/RewardChip'
import {
  buildProgressSnapshotFromAnalytics,
  ChildProgressSnapshot,
  getChildAnalytics,
  getChildAnalyticsFromCloud,
} from '@/lib/progressDb'

interface ChildProfileCardProps {
  child: ChildProfile
}

export function ChildProfileCard({ child }: ChildProfileCardProps) {
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
    <Card className="child-card">
      <header>
        <h3>{child.name}</h3>
        <p>{child.levelLabel}</p>
      </header>

      <div className="chips-row">
        <RewardChip icon="⭐" value={`${progress.xp} XP`} />
        <RewardChip icon="🪙" value={`${progress.coins} pieces`} />
        <RewardChip icon="🔥" value={`${progress.streakDays} jours`} />
      </div>

      <ProgressBar
        label="Progression globale"
        value={progress.masteredSkills}
        max={progress.totalSkills}
      />

      <div className="chips-row" aria-label="Badges debloques">
        {progress.badges.length > 0 ? (
          progress.badges
            .slice(0, 3)
            .map((badge) => <RewardChip key={badge} icon="🏅" value={badge} />)
        ) : (
          <RewardChip icon="🏅" value="Aucun badge pour le moment" />
        )}
      </div>

      <Link href={`/child/${child.id}`} className="primary-btn">
        Commencer l aventure
      </Link>
    </Card>
  )
}
