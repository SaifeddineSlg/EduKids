'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Route } from 'next'
import { createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

interface NavItem {
  key: string
  href: Route
  label: string
  matchPath: string
}

function isActive(pathname: string, item: NavItem): boolean {
  if (item.matchPath === '/') {
    return pathname === '/'
  }
  return pathname.startsWith(item.matchPath)
}

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [role, setRole] = useState<'admin' | 'parent' | null>(null)

  useEffect(() => {
    const supabase = createSupabaseBrowserClient()
    supabase.auth.getUser().then(({ data }) => {
      const userRole = (data.user?.app_metadata as { role?: string } | undefined)?.role
      setRole(data.user ? (userRole === 'admin' ? 'admin' : 'parent') : null)
    })
  }, [pathname])

  const isGuidedDayRoute = /^\/parent\/children\/[^/]+\/day\/[^/]+/.test(pathname)
  if (isGuidedDayRoute) {
    return null
  }

  const navItems: NavItem[] =
    role === 'admin'
      ? [
          { key: 'admin', href: '/admin', label: 'Admin', matchPath: '/admin' },
          { key: 'parent', href: '/parent', label: 'Espace parent', matchPath: '/parent' },
        ]
      : role === 'parent'
        ? [
            { key: 'parent', href: '/parent', label: 'Mes enfants', matchPath: '/parent' },
            { key: 'analytics', href: '/parent/analytics', label: 'Statistiques', matchPath: '/parent/analytics' },
            { key: 'history', href: '/parent/history', label: 'Historique', matchPath: '/parent/history' },
          ]
        : []

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={role ? (role === 'admin' ? '/admin' : '/parent') : '/'} className="site-brand">
          EduKids
        </Link>

        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`site-nav-link ${isActive(pathname, item) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          {role ? (
            <button type="button" className="site-nav-link" onClick={handleSignOut}>
              Se deconnecter
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
