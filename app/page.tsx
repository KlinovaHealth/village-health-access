'use client'

import Link from 'next/link'
import { useLanguage } from './context/LanguageContext'
import { translations } from './translations'

const programHrefs = [
  '/programs#telemedicine',
  '/programs#medicines',
  '/programs#government',
  '/programs#cholera-vaccines',
]

const programIcons = [
  (
    <svg key="tele" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0A5440" />
      <path d="M20 12v16M12 20h16" stroke="#F5EFE3" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="med" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0A5440" />
      <rect x="13" y="14" width="14" height="16" rx="2" stroke="#F5EFE3" strokeWidth="2" />
      <path d="M17 14v-2h6v2" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 20h8M16 24h5" stroke="#F5EFE3" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="gov" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0A5440" />
      <circle cx="20" cy="18" r="5" stroke="#F5EFE3" strokeWidth="2" />
      <path d="M11 30c0-5 4-8 9-8s9 3 9 8" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="chol" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0A5440" />
      <rect x="17" y="9" width="6" height="14" rx="2" stroke="#F5EFE3" strokeWidth="1.8" />
      <line x1="20" y1="23" x2="20" y2="30" stroke="#D99A2B" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="9" x2="20" y2="6" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="32" r="1.5" fill="#D99A2B" />
      <circle cx="25" cy="31" r="1" fill="#D99A2B" opacity="0.6" />
    </svg>
  ),
]

const missionIcons = [
  (
    <svg key="m1" width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#E3EFE8" />
      <path d="M18 10v16M10 18h16" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="m2" width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#E3EFE8" />
      <circle cx="18" cy="18" r="7" stroke="#0E6B4F" strokeWidth="2.5" />
      <path d="M18 11V8M18 28v-3M11 18H8M28 18h-3" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="m3" width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#E3EFE8" />
      <path d="M10 24l5-8 5 5 4-9" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
]

export default function HomePage() {
  const { lang } = useLanguage()
  const t = translations[lang].home

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#0A5440',
          padding: '5rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-6rem',
            right: '-6rem',
            width: '28rem',
            height: '28rem',
            borderRadius: '50%',
            background: 'rgba(14,107,79,0.35)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {t.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
              color: '#F5EFE3',
              lineHeight: 1.1,
              maxWidth: '18ch',
              marginBottom: '1.5rem',
            }}
          >
            {t.heroTitle}
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {t.heroDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <Link
              href="/programs"
              style={{
                padding: '0.85rem 2rem',
                border: '2px solid #F5EFE3',
                color: '#F5EFE3',
                borderRadius: '2rem',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              {t.ourPrograms}
            </Link>
            <Link
              href="/donors"
              style={{
                padding: '0.85rem 2rem',
                background: '#D99A2B',
                color: '#15302A',
                borderRadius: '2rem',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              {t.supportMission}
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {t.stats.map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                <p style={{ color: '#E3EFE8', fontSize: '0.82rem', margin: 0, marginTop: '0.15rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {t.missionPillars.map(({ title, text }, i) => (
              <div key={title}>
                <div style={{ marginBottom: '1rem' }}>{missionIcons[i]}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0A5440', marginBottom: '0.6rem' }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.95rem', lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.whatWeDo}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#15302A', marginBottom: '3rem', maxWidth: '28ch' }}>
            {t.programsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {t.programs.map(({ title, desc }, i) => (
              <div
                key={title}
                style={{
                  background: '#E3EFE8',
                  borderRadius: '1rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  border: '1px solid #E7DECC',
                }}
              >
                {programIcons[i]}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0A5440', margin: 0 }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.92rem', lineHeight: 1.75, margin: 0, flex: 1 }}>{desc}</p>
                <Link
                  href={programHrefs[i]}
                  style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'underline', alignSelf: 'flex-start' }}
                >
                  {t.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#E3EFE8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.ourImpact}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F5EFE3', marginBottom: '3rem' }}>
            {t.impactTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {t.impactNumbers.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', color: '#D99A2B', fontWeight: 700, margin: 0 }}>
                  {value}
                </p>
                <p style={{ color: '#E3EFE8', fontSize: '0.95rem', margin: '0.4rem 0 0', letterSpacing: '0.01em' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News / Blog preview */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.newsLabel}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', margin: 0 }}>{t.latestUpdates}</h2>
            </div>
            <Link href="/blog" style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'underline' }}>
              {t.readAll}
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {t.newsItems.map(({ date, title, excerpt }) => (
              <article
                key={title}
                style={{
                  background: '#ffffff',
                  borderRadius: '0.875rem',
                  padding: '1.75rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <p style={{ color: '#6E7F76', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.6rem' }}>{date}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#15302A', marginBottom: '0.75rem', lineHeight: 1.4 }}>{title}</h3>
                <p style={{ color: '#6E7F76', fontSize: '0.88rem', lineHeight: 1.7 }}>{excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donor CTA */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem', borderTop: '1px solid #E7DECC' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.supportUs}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#15302A', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            {t.ctaTitle}
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {t.ctaDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link
              href="/donors"
              style={{
                padding: '0.9rem 2.25rem',
                background: '#D99A2B',
                color: '#15302A',
                borderRadius: '2rem',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              {t.donateNow}
            </Link>
            <Link
              href="/donors#grants"
              style={{
                padding: '0.9rem 2.25rem',
                border: '2px solid #0A5440',
                color: '#0A5440',
                borderRadius: '2rem',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              {t.applyGrants}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
