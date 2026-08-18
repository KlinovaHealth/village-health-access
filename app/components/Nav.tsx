'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle } = useLanguage()
  const t = translations[lang].nav

  const navLinks = [
    { href: '/about', label: t.about },
    { href: '/programs', label: t.programs },
    { href: '/impact', label: t.impact },
    { href: '/partners', label: t.partners },
    { href: '/donors', label: t.donors },
    { href: '/blog', label: t.blog },
    { href: '/contact', label: t.contact },
  ]

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
          <LogoMark />
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#0A5440',
                letterSpacing: '-0.01em',
              }}
            >
              Klinova
            </span>
            <span style={{ color: '#D99A2B', fontSize: '1rem', fontWeight: 700, lineHeight: 1 }}>&#10084;</span>
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
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
            style={{
              marginLeft: '0.25rem',
              padding: '0.35rem 0.65rem',
              background: 'none',
              border: '1.5px solid #0A5440',
              color: '#0A5440',
              fontWeight: 700,
              fontSize: '0.78rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-sans)',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {t.toggleLang}
          </button>
          <Link
            href="/donors"
            style={{
              marginLeft: '0.25rem',
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
            {t.donate}
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
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              onClick={toggle}
              aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'none',
                border: '1.5px solid #0A5440',
                color: '#0A5440',
                fontWeight: 700,
                fontSize: '0.9rem',
                borderRadius: '2rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {t.toggleLang}
            </button>
            <Link
              href="/donors"
              style={{
                flex: 2,
                padding: '0.75rem 1.5rem',
                background: '#D99A2B',
                color: '#15302A',
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {t.donate}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#0A5440" />
      {/* Heart shape */}
      <path
        d="M18 26s-9-5.5-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 11-9 11z"
        fill="#D99A2B"
        opacity="0.9"
      />
      {/* Pulse line across heart */}
      <path
        d="M9 18h3.5l1.5-3 2 5 1.5-2.5 1 1.5H27"
        stroke="#F5EFE3"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
