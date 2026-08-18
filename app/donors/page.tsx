'use client'

import { useState } from 'react'

const donationTiers = [
  {
    amount: '$25',
    label: '1 Consultation',
    desc: 'Covers one complete telemedicine consultation — from triage through follow-up — for a patient with no other access to care.',
    color: '#E3EFE8',
    textColor: '#15302A',
  },
  {
    amount: '$100',
    label: '1 Month of Medicine for a Child',
    desc: 'Funds a full month of essential medicines for a child — malaria treatment, TB care, or nutritional supplements.',
    color: '#0A5440',
    textColor: '#F5EFE3',
  },
  {
    amount: '$500',
    label: '1 Community Health Program',
    desc: 'Deploys a community health worker in a remote village for one month, reaching dozens of families with education, triage, and referrals.',
    color: '#E3EFE8',
    textColor: '#15302A',
  },
]

const grantFocusAreas = [
  'Telemedicine infrastructure expansion',
  'Community health worker training and deployment',
  'Essential medicine supply chain',
  'Maternal and child health programs',
  'Disease surveillance and public health data',
  'Multi-country program replication',
]

const supporters = [
  { initials: 'KL', name: 'Klinova', type: 'In-kind technology partner' },
  { initials: 'FF', name: 'Founding Friends Fund', type: 'Individual donors' },
  { initials: 'WH', name: 'West Health Foundation', type: 'Early-stage funder' },
]

const presetAmounts = ['$25', '$50', '$100', '$250']

export default function DonorsPage() {
  const [selected, setSelected] = useState('$100')
  const [custom, setCustom] = useState('')

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Support our work
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Fund healthcare for the unreachable.
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Village Health Access is a nonprofit organization working toward 501(c)(3) status. Your donation supports free telemedicine and essential medicines for communities across West Africa.
          </p>
          <p style={{ color: '#D99A2B', fontSize: '0.85rem', fontStyle: 'italic' }}>
            501(c)(3) pending — please consult your tax advisor regarding deductibility.
          </p>
        </div>
      </section>

      {/* ── Impact of donation ───────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What your gift does</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Impact of your donation.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {donationTiers.map(({ amount, label, desc, color, textColor }) => (
              <div
                key={amount}
                style={{
                  background: color,
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#D99A2B', fontWeight: 700, margin: '0 0 0.25rem' }}>{amount}</p>
                <p style={{ color: textColor, fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>{label}</p>
                <p style={{ color: textColor === '#F5EFE3' ? 'rgba(245,239,227,0.8)' : '#6E7F76', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate now ───────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Donate now</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2rem' }}>
            Choose your contribution.
          </h2>

          {/* Amount selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelected(amt); setCustom('') }}
                style={{
                  padding: '0.7rem 1.75rem',
                  borderRadius: '2rem',
                  border: `2px solid ${selected === amt && !custom ? '#0A5440' : '#E7DECC'}`,
                  background: selected === amt && !custom ? '#0A5440' : '#F5EFE3',
                  color: selected === amt && !custom ? '#F5EFE3' : '#15302A',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.15s',
                }}
              >
                {amt}
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#6E7F76', fontSize: '0.9rem' }}>Custom:</span>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#6E7F76' }}>$</span>
              <input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected('') }}
                style={{
                  padding: '0.65rem 0.75rem 0.65rem 1.75rem',
                  border: `2px solid ${custom ? '#0A5440' : '#E7DECC'}`,
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem',
                  background: '#ffffff',
                  color: '#15302A',
                  width: '10rem',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              />
            </div>
          </div>

          <button
            style={{
              display: 'block',
              width: '100%',
              padding: '1rem',
              background: '#D99A2B',
              color: '#15302A',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              marginBottom: '1rem',
            }}
            onClick={() => alert('Donation processing coming soon. Thank you for your interest in supporting Village Health Access.')}
          >
            Donate {custom ? `$${custom}` : selected}
          </button>

          <div style={{ background: '#E3EFE8', borderRadius: '0.625rem', padding: '1rem 1.5rem', textAlign: 'left' }}>
            <p style={{ color: '#0A5440', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
              Secure donation processing will be enabled once our 501(c)(3) application is approved. For now, please{' '}
              <a href="mailto:contact@villagehealthaccess.org" style={{ color: '#0A5440', fontWeight: 700, textDecoration: 'underline' }}>
                contact us
              </a>{' '}
              to arrange a direct donation. We will provide full receipt documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grant opportunities ──────────────────────────────── */}
      <section id="grants" style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Institutional donors</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                Grant Opportunities
              </h2>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Village Health Access welcomes grant proposals from major foundations, bilateral donors, multilateral agencies, and impact investors. We can provide detailed program plans, budget breakdowns, monitoring frameworks, and impact measurement protocols.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
                We accept restricted funding for specific programs and unrestricted general operating support.
              </p>
              <a
                href="mailto:contact@villagehealthaccess.org?subject=Grant%20Information%20Request"
                style={{
                  display: 'inline-block',
                  padding: '0.85rem 2rem',
                  background: '#0A5440',
                  color: '#F5EFE3',
                  borderRadius: '2rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                Request Grant Information
              </a>
            </div>
            <div>
              <p style={{ color: '#15302A', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>Areas eligible for restricted funding:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {grantFocusAreas.map((area) => (
                  <li key={area} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path d="M3 9l4 4L15 5" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ color: '#15302A', fontSize: '0.9rem', lineHeight: 1.5 }}>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current supporters ───────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>With gratitude</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Current Supporters
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {supporters.map(({ initials, name, type }) => (
              <div
                key={name}
                style={{
                  background: '#F5EFE3',
                  borderRadius: '0.875rem',
                  padding: '1.5rem',
                  border: '1px solid #E7DECC',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: '#0A5440',
                    color: '#F5EFE3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#15302A', fontSize: '0.9rem', margin: 0 }}>{name}</p>
                  <p style={{ color: '#6E7F76', fontSize: '0.78rem', margin: '0.15rem 0 0' }}>{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#F5EFE3', marginBottom: '0.75rem' }}>
                Financial Transparency
              </h2>
              <p style={{ color: '#E3EFE8', fontSize: '0.95rem', lineHeight: 1.75 }}>
                We are committed to best-in-class nonprofit governance. Our overhead ratio target is under 15%, meaning 85 cents of every dollar goes directly to program delivery. Full financial statements are available on request.
              </p>
            </div>
            {[
              { value: '<15%', label: 'Overhead ratio target' },
              { value: '85%+', label: 'Directed to programs' },
              { value: '100%', label: 'Financial reporting published' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                <p style={{ color: '#E3EFE8', fontSize: '0.85rem', margin: '0.35rem 0 0' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
