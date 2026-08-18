'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/partners', label: 'Partners' },
  { href: '/donors', label: 'Donors' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navBg = scrolled ? '#ffffff' : '#F5EFE3'
  const borderBottom = scrolled ? '1px solid #E7DECC' : '1px solid transparent'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: navBg,
        borderBottom,
        transition: 'background 0.2s, border-color 0.2s',
        boxShadow: scrolled ? '0 1px 8px rgba(21,48,42,0.07)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <LeafSvg />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#0A5440',
              letterSpacing: '-0.01em',
            }}
          >
            Village Health Access
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: active ? '#0A5440' : '#15302A',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid #0A5440' : '2px solid transparent',
                  transition: 'color 0.15s',
                }}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/donors"
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1.2rem',
              background: '#D99A2B',
              color: '#15302A',
              fontWeight: 700,
              fontSize: '0.875rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
          >
            Donate
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#0A5440',
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <XIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: '#ffffff',
            borderTop: '1px solid #E7DECC',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#0A5440' : '#15302A',
                  borderBottom: '1px solid #E7DECC',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/donors"
            style={{
              display: 'block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: '#D99A2B',
              color: '#15302A',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '2rem',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  )
}

function LeafSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#0A5440" />
      <path
        d="M14 7C10.5 7 7.5 10 7.5 14C7.5 18 10.5 21 14 21C17.5 21 20.5 18 20.5 14C20.5 10 17.5 7 14 7Z"
        fill="#E3EFE8"
      />
      <path
        d="M14 9.5C11.5 10.5 10 12.5 10 14.5C10 16.5 11.5 18.5 14 19.5"
        stroke="#0A5440"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="14" y1="10" x2="14" y2="20" stroke="#0E6B4F" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  )
}
