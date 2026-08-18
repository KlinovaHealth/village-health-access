'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const getInvolvedStyles = [
  { style: { background: '#0A5440', color: '#F5EFE3' } as const, ctaStyle: { background: '#D99A2B', color: '#15302A' } as const },
  { style: { background: '#E3EFE8', color: '#15302A', border: '1px solid #E7DECC' } as const, ctaStyle: { background: '#0A5440', color: '#F5EFE3' } as const },
  { style: { background: '#E3EFE8', color: '#15302A', border: '1px solid #E7DECC' } as const, ctaStyle: { background: '#0A5440', color: '#F5EFE3' } as const },
]

export default function ProgramsPage() {
  const { lang } = useLanguage()
  const t = translations[lang].programs

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {t.eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            {t.heroTitle}
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Program 1: Telemedicine */}
      <section id="telemedicine" style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="#0A5440" />
                  <path d="M22 14v16M14 22h16" stroke="#F5EFE3" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.program1Label}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                {t.telemedicineTitle}
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.telemedicineP1}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.telemedicineP2}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                {t.telemedicineP3}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {t.telemedicineStats.map(({ value, label, sub }) => (
                <div
                  key={label}
                  style={{
                    background: '#ffffff',
                    borderRadius: '0.875rem',
                    padding: '1.5rem',
                    border: '1px solid #E7DECC',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                  <p style={{ color: '#15302A', fontWeight: 600, fontSize: '0.9rem', margin: '0.2rem 0 0' }}>{label}</p>
                  <p style={{ color: '#6E7F76', fontSize: '0.82rem', margin: '0.15rem 0 0' }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: Essential Medicines */}
      <section id="medicines" style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="#E3EFE8" />
                  <rect x="15" y="16" width="14" height="16" rx="2" stroke="#0A5440" strokeWidth="2" />
                  <path d="M18 16v-2h8v2" stroke="#0A5440" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17 22h10M17 27h7" stroke="#0A5440" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.program2Label}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                {t.medicinesTitle}
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.medicinesP1}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.medicinesP2}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                {t.medicinesP3}
              </p>
            </div>
            <div style={{ order: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {t.medicineCategories.map(({ label, icon }) => (
                  <div
                    key={label}
                    style={{
                      background: '#E3EFE8',
                      borderRadius: '0.875rem',
                      padding: '1.5rem',
                      border: '1px solid #E7DECC',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#0A5440', color: '#F5EFE3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, margin: '0 auto 0.75rem' }}>
                      {icon}
                    </div>
                    <p style={{ color: '#15302A', fontWeight: 600, fontSize: '0.88rem', margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1rem', background: '#F5EFE3', borderRadius: '0.875rem', padding: '1.5rem', border: '1px solid #E7DECC' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{t.medicinePackages}</p>
                <p style={{ color: '#15302A', fontWeight: 600, fontSize: '0.9rem', margin: '0.2rem 0 0' }}>{t.medicinePackagesLabel}</p>
                <p style={{ color: '#6E7F76', fontSize: '0.82rem', margin: '0.15rem 0 0' }}>{t.medicinePackagesSub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 3: Government Integration */}
      <section id="government" style={{ background: '#0A5440', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="rgba(255,255,255,0.12)" />
                  <circle cx="22" cy="20" r="5" stroke="#F5EFE3" strokeWidth="2" />
                  <path d="M13 34c0-5 4-8 9-8s9 3 9 8" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.program3Label}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F5EFE3', marginBottom: '1.25rem' }}>
                {t.governmentTitle}
              </h2>
              <p style={{ color: '#E3EFE8', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.governmentP1}
              </p>
              <p style={{ color: 'rgba(227,239,232,0.8)', lineHeight: 1.8, fontSize: '0.97rem' }}>
                {t.governmentP2}
              </p>
            </div>
            <div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid rgba(255,255,255,0.12)',
                  marginBottom: '1rem',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#F5EFE3', fontSize: '1.1rem', marginBottom: '1rem' }}>{t.governmentShareTitle}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {t.governmentShareItems.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#E3EFE8', fontSize: '0.9rem' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="#D99A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/impact"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.75rem',
                  background: '#D99A2B',
                  color: '#15302A',
                  borderRadius: '2rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                {t.viewImpact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program 4: Cholera & Vaccines */}
      <section id="cholera-vaccines" style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="#0A5440" />
                  <rect x="20" y="10" width="5" height="14" rx="1.5" stroke="#F5EFE3" strokeWidth="1.8" />
                  <line x1="22.5" y1="24" x2="22.5" y2="30" stroke="#D99A2B" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22.5" y1="10" x2="22.5" y2="7" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="17" cy="32" r="1.5" fill="#D99A2B" />
                  <circle cx="28" cy="30" r="1" fill="#D99A2B" opacity="0.6" />
                </svg>
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.program4Label}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                {t.choleraTitle}
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.choleraP1}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                {t.choleraP2}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                {t.choleraP3}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {t.choleraStats.map(({ value, label, sub }) => (
                <div
                  key={label}
                  style={{
                    background: '#ffffff',
                    borderRadius: '0.875rem',
                    padding: '1.5rem',
                    border: '1px solid #E7DECC',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                  <p style={{ color: '#15302A', fontWeight: 600, fontSize: '0.9rem', margin: '0.2rem 0 0' }}>{label}</p>
                  <p style={{ color: '#6E7F76', fontSize: '0.82rem', margin: '0.15rem 0 0' }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.getInvolvedEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            {t.getInvolvedTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {t.getInvolvedCards.map(({ title, desc, cta, href }, i) => (
              <div key={title} style={{ ...getInvolvedStyles[i].style, borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.75, margin: 0, flex: 1 }}>{desc}</p>
                <Link
                  href={href}
                  style={{
                    ...getInvolvedStyles[i].ctaStyle,
                    display: 'inline-block',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '2rem',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                  }}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
