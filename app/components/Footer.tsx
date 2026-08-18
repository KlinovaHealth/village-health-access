'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer
  const nav = translations[lang].nav

  const col1 = [
    { href: '/about', label: nav.about },
    { href: '/programs', label: nav.programs },
    { href: '/impact', label: nav.impact },
  ]
  const col2 = [
    { href: '/partners', label: nav.partners },
    { href: '/donors', label: nav.donors },
    { href: '/blog', label: nav.blog },
  ]
  const col3 = [
    { href: '/contact', label: nav.contact },
    { href: '/contact#privacy', label: t.privacy },
  ]

  return (
    <footer style={{ background: '#15302A', color: '#F5EFE3' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <LeafSvgLight />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#F5EFE3' }}>
                Village Health Access
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#E3EFE8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {t.tagline}
            </p>
            <p style={{ fontSize: '0.82rem', color: '#6E7F76', lineHeight: 1.6 }}>
              {t.description}
            </p>
          </div>

          {/* Nav columns */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6E7F76', marginBottom: '1rem' }}>
              {t.orgLabel}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col1.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '0.6rem' }}>
                  <Link href={href} style={{ color: '#E3EFE8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.15s' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6E7F76', marginBottom: '1rem' }}>
              {t.communityLabel}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col2.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '0.6rem' }}>
                  <Link href={href} style={{ color: '#E3EFE8', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6E7F76', marginBottom: '1rem' }}>
              {t.moreLabel}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col3.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '0.6rem' }}>
                  <Link href={href} style={{ color: '#E3EFE8', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6E7F76', marginBottom: '1rem' }}>
              {t.stayUpdatedLabel}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#E3EFE8', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              {t.newsletterDesc}
            </p>
            <form style={{ display: 'flex', gap: '0.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '0.55rem 0.9rem',
                  borderRadius: '0.375rem',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#F5EFE3',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.55rem 1rem',
                  background: '#D99A2B',
                  color: '#15302A',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.subscribeBtn}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: '#6E7F76', margin: 0 }}>
            &copy; {t.copyright} &middot; {t.partnerCredit}{' '}
            <a
              href="https://klinova.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#D99A2B', textDecoration: 'underline' }}
            >
              Klinova
            </a>
          </p>
          <p style={{ fontSize: '0.82rem', color: '#6E7F76', margin: 0 }}>
            {t.legalNote}
          </p>
        </div>
      </div>
    </footer>
  )
}

function LeafSvgLight() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#0E6B4F" />
      <path d="M14 7C10.5 7 7.5 10 7.5 14C7.5 18 10.5 21 14 21C17.5 21 20.5 18 20.5 14C20.5 10 17.5 7 14 7Z" fill="#E3EFE8" />
      <line x1="14" y1="10" x2="14" y2="20" stroke="#0A5440" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
