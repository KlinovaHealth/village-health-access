'use client'

import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const platinumTargets = [
  { initials: 'WHO', name: 'World Health Organization', type: 'Global Health' },
  { initials: 'GF', name: 'Gates Foundation', type: 'Philanthropy' },
  { initials: 'UNI', name: 'UNICEF', type: 'UN Agency' },
]

const goldTargets = [
  { initials: 'TG', name: 'Togo Ministry of Health', type: 'Government' },
  { initials: 'GH', name: 'Ghana Health Service', type: 'Government' },
  { initials: 'BJ', name: 'Benin Ministry of Health', type: 'Government' },
]

const silverTargets = [
  { initials: 'MSF', name: 'Médecins Sans Frontières', type: 'NGO' },
  { initials: 'IRC', name: 'International Rescue Committee', type: 'NGO' },
  { initials: 'PHI', name: 'Partners in Health', type: 'NGO' },
  { initials: 'AMR', name: 'Africa Medical Relief', type: 'NGO' },
]

function PartnerCard({ initials, name, type }: { initials: string; name: string; type: string }) {
  return (
    <div
      style={{
        background: '#F5EFE3',
        borderRadius: '0.875rem',
        padding: '1.5rem',
        border: '1px solid #E7DECC',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        opacity: 0.85,
      }}
    >
      <div
        style={{
          width: '3.25rem',
          height: '3.25rem',
          borderRadius: '0.625rem',
          background: '#E7DECC',
          color: '#6E7F76',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '0.75rem',
          flexShrink: 0,
          letterSpacing: '0.03em',
        }}
      >
        {initials}
      </div>
      <div>
        <p style={{ fontWeight: 700, color: '#15302A', fontSize: '0.92rem', margin: 0 }}>{name}</p>
        <p style={{ color: '#6E7F76', fontSize: '0.78rem', margin: '0.15rem 0 0' }}>{type}</p>
      </div>
    </div>
  )
}

export default function PartnersPage() {
  const { lang } = useLanguage()
  const t = translations[lang].partners

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

      {/* Aspirational notice */}
      <div style={{ background: '#D99A2B', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="9" cy="9" r="8" stroke="#15302A" strokeWidth="1.5" />
            <path d="M9 5v4M9 12v.5" stroke="#15302A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <p style={{ color: '#15302A', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
            {t.noticeBanner}
          </p>
        </div>
      </div>

      {/* Partner Tiers */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

          {/* Platinum */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#D99A2B' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>{t.platinumTitle}</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {t.platinumDesc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {platinumTargets.map((p) => (
                <PartnerCard key={p.initials} {...p} />
              ))}
            </div>
          </div>

          {/* Gold */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#D99A2B', opacity: 0.7 }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>{t.goldTitle}</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {t.goldDesc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {goldTargets.map((p) => (
                <PartnerCard key={p.initials} {...p} />
              ))}
            </div>
          </div>

          {/* Silver */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#6E7F76' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>{t.silverTitle}</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {t.silverDesc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {silverTargets.map((p) => (
                <PartnerCard key={p.initials} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA form */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.joinEyebrow}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                {t.joinTitle}
              </h2>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                {t.joinP1}
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem' }}>
                {t.joinP2}
              </p>
            </div>
            <form
              action="mailto:partners@villagehealthaccess.org"
              method="GET"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {[
                { label: t.formOrgLabel, name: 'org', type: 'text', placeholder: t.formOrgPlaceholder },
                { label: t.formCountryLabel, name: 'country', type: 'text', placeholder: t.formCountryPlaceholder },
                { label: t.formEmailLabel, name: 'email', type: 'email', placeholder: t.formEmailPlaceholder },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      border: '1px solid #E7DECC',
                      borderRadius: '0.5rem',
                      fontSize: '0.92rem',
                      background: '#ffffff',
                      color: '#15302A',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                  {t.formTypeLabel}
                </label>
                <select
                  name="type"
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    border: '1px solid #E7DECC',
                    borderRadius: '0.5rem',
                    fontSize: '0.92rem',
                    background: '#ffffff',
                    color: '#15302A',
                    outline: 'none',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <option value="">{t.formTypeDefault}</option>
                  {t.formTypeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                style={{
                  padding: '0.85rem',
                  background: '#0A5440',
                  color: '#F5EFE3',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
