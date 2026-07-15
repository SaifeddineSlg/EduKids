'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'
import type { UrlObject } from 'url'

interface NavItem {
  key: string
  href: Route | UrlObject
  label: string
  matchPath: string
}

const navItems: NavItem[] = [
  { key: 'home', href: '/', label: 'Accueil', matchPath: '/' },
  {
    key: 'parent',
    href: '/parent',
    label: 'Espace parent',
    matchPath: '/parent',
  },
  {
    key: 'child-1',
    href: { pathname: '/child/child-1' },
    label: 'Profil Balkis',
    matchPath: '/child',
  },
  {
    key: 'child-2',
    href: { pathname: '/child/child-2' },
    label: 'Profil Bayrem',
    matchPath: '/child',
  },
  {
    key: 'session',
    href: { pathname: '/session', query: { childId: 'child-1' } },
    label: 'Session',
    matchPath: '/session',
  },
]

function isActive(pathname: string, item: NavItem): boolean {
  if (item.matchPath === '/') {
    return pathname === '/'
  }

  return pathname.startsWith(item.matchPath)
}

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand">
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
        </nav>
      </div>
    </header>
  )
}
