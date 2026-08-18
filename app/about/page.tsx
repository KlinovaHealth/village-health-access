'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const valueIcons = [
  (
    <svg key="eq" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#E3EFE8" />
      <path d="M20 12c-4 0-8 3-8 8 0 5 8 12 8 12s8-7 8-12c0-5-4-8-8-8z" stroke="#0E6B4F" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="comp" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#E3EFE8" />
      <path d="M12 20c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 14v6l4 2" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="innov" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#E3EFE8" />
      <circle cx="20" cy="20" r="6" stroke="#0E6B4F" strokeWidth="2" />
      <path d="M20 10v3M20 27v3M10 20h3M27 20h3" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="acc" width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#E3EFE8" />
      <path d="M14 20l4 4 8-8" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
]

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t.eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '20ch', marginBottom: '1.25rem' }}>
            {t.heroTitle}
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.ourStoryEyebrow}</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.5rem' }}>
              {t.ourStoryTitle}
            </h2>
            <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
              {t.storyP1}
            </p>
            <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
              {t.storyP2}
            </p>
            <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
              {t.storyP3}
            </p>
          </div>
          {/* Decorative placeholder */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0E6B4F 0%, #0A5440 50%, #15302A 100%)',
              borderRadius: '1.25rem',
              height: '22rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle at 30% 70%, #D99A2B 0%, transparent 50%), radial-gradient(circle at 70% 30%, #E3EFE8 0%, transparent 50%)' }} />
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.08)" />
                <path d="M32 16C22 16 14 24 14 32C14 40 22 48 32 48C42 48 50 40 50 32C50 24 42 16 32 16Z" fill="rgba(255,255,255,0.15)" />
                <line x1="32" y1="18" x2="32" y2="46" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p style={{ color: 'rgba(245,239,227,0.7)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>{t.mapCaption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.purposeEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            {t.missionVision}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#0A5440', borderRadius: '1rem', padding: '2.5rem', color: '#F5EFE3' }}>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.missionLabel}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', lineHeight: 1.5, margin: 0 }}>
                {t.missionText}
              </p>
            </div>
            <div style={{ background: '#E3EFE8', borderRadius: '1rem', padding: '2.5rem', border: '1px solid #E7DECC' }}>
              <p style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.visionLabel}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#15302A', lineHeight: 1.5, margin: 0 }}>
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.valuesEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            {t.valuesTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {t.values.map(({ title, text }, i) => (
              <div key={title}>
                <div style={{ marginBottom: '1rem' }}>{valueIcons[i]}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#0A5440', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.9rem', lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.leadershipEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '0.75rem' }}>
            {t.boardTitle}
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            {t.boardNote}
            <Link href="/contact" style={{ color: '#0A5440', fontWeight: 600, textDecoration: 'underline' }}>
              {t.boardNoteLink}
            </Link>
            .
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {t.boardMembers.map(({ initials, name, title, bio }) => (
              <div
                key={name}
                style={{
                  background: '#F5EFE3',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    background: '#0A5440',
                    color: '#F5EFE3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {initials}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#15302A', marginBottom: '0.25rem' }}>{name}</h3>
                <p style={{ color: '#0A5440', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>{title}</p>
                <p style={{ color: '#6E7F76', fontSize: '0.88rem', lineHeight: 1.7 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klinova partnership */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div
            style={{
              background: '#15302A',
              borderRadius: '1.25rem',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {t.klinovaEyebrow}
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#F5EFE3', marginBottom: '1.25rem' }}>
                {t.klinovaTitle}
              </h2>
              <p style={{ color: '#E3EFE8', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                {t.klinovaP1}
              </p>
              <p style={{ color: 'rgba(227,239,232,0.75)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                {t.klinovaP2}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <a
                href="https://klinova.co"
                target="_blank"
                rel="noopener noreferrer"
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
                {t.visitKlinova}
              </a>
              <Link
                href="/contact"
                style={{ color: '#E3EFE8', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                {t.partnerInquiries}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
