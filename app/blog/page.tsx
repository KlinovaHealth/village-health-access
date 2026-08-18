'use client'

import { useState } from 'react'

const featuredPost = {
  category: 'Outbreak Alert',
  date: 'August 10, 2026',
  title: 'WHO Declares Cholera a Continuing Public Health Emergency Across West Africa',
  excerpt:
    'The World Health Organization has renewed its emergency declaration as cholera cases surge in Togo, Benin, Ghana, and Nigeria. Health authorities are calling for an immediate scale-up of oral rehydration therapy, clean water infrastructure, and last-mile vaccine delivery — particularly in rural and refugee-adjacent communities with no fixed health facility.',
  author: 'WHO Regional Office for Africa',
}

const posts = [
  {
    category: 'Vaccines',
    date: 'August 5, 2026',
    title: 'Togo Launches National Cholera Vaccination Drive in Rural Districts',
    excerpt: 'The Togo Ministry of Health has begun a targeted oral cholera vaccine campaign in the Savanes and Kara regions, where sanitation infrastructure remains critically underdeveloped.',
    author: 'Togo Ministry of Health',
  },
  {
    category: 'Policy',
    date: 'July 28, 2026',
    title: 'ECOWAS Adopts Cross-Border Telemedicine Framework for Member States',
    excerpt: 'The Economic Community of West African States has agreed to a shared telemedicine regulatory framework, reducing legal barriers for cross-border digital health consultations across 15 member nations.',
    author: 'ECOWAS Health Division',
  },
  {
    category: 'Health Tech',
    date: 'July 14, 2026',
    title: 'WhatsApp-Based Health Triage Sees 340% Growth Across Francophone Africa',
    excerpt: 'A new ECOWAS report documents rapid adoption of WhatsApp health triage tools across Togo, Senegal, Mali, and Côte d\'Ivoire, driven by low-cost smartphones and expanding mobile coverage in rural zones.',
    author: 'ECOWAS Digital Health Report',
  },
  {
    category: 'Disease',
    date: 'June 20, 2026',
    title: 'Meningitis Outbreak Reported in Northern Ghana — Vaccination Teams Deployed',
    excerpt: 'Ghana Health Service has activated emergency response teams following a meningitis outbreak in the Upper West Region. Vaccination corridors are being established to cover nomadic and border-crossing populations.',
    author: 'Ghana Health Service',
  },
  {
    category: 'Policy',
    date: 'June 3, 2026',
    title: 'Benin Invites NGOs to Join Expanded Community Health Worker Program',
    excerpt: 'The Benin Ministry of Health is opening its national community health worker registry to accredited NGOs and digital health platforms, creating formal integration points for telemedicine referrals.',
    author: 'Benin Ministry of Health',
  },
  {
    category: 'Health Tech',
    date: 'May 18, 2026',
    title: 'Multilingual AI Triage Tools Show Promise in Low-Literacy West African Populations',
    excerpt: 'A study published in The Lancet Digital Health found that voice-based multilingual triage in Ewe, Hausa, and Twi achieved 91% accuracy in identifying urgent cases — even among patients with no formal education.',
    author: 'The Lancet Digital Health',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Health Tech':    { bg: '#E3EFE8', text: '#0A5440' },
  'Community':      { bg: '#F5EFE3', text: '#15302A' },
  'Policy':         { bg: '#15302A', text: '#F5EFE3' },
  'Outbreak Alert': { bg: '#CF5A3C', text: '#ffffff' },
  'Vaccines':       { bg: '#D99A2B', text: '#15302A' },
  'Disease':        { bg: '#6E7F76', text: '#ffffff' },
}

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Updates
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            News &amp; Updates
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Regional health news, disease alerts, policy developments, and technology shaping healthcare access across West Africa.
          </p>
        </div>
      </section>

      {/* ── Featured post ────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Featured</p>
          <div
            style={{
              background: '#0A5440',
              borderRadius: '1.25rem',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    background: 'rgba(227,239,232,0.15)',
                    color: '#E3EFE8',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {featuredPost.category}
                </span>
                <span style={{ color: '#6E7F76', fontSize: '0.8rem' }}>{featuredPost.date}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#F5EFE3', marginBottom: '1rem', lineHeight: 1.3 }}>
                {featuredPost.title}
              </h2>
              <p style={{ color: '#E3EFE8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{featuredPost.excerpt}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    padding: '0.7rem 1.75rem',
                    background: '#D99A2B',
                    color: '#15302A',
                    borderRadius: '2rem',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  Read more
                </a>
                <span style={{ color: '#6E7F76', fontSize: '0.82rem' }}>By {featuredPost.author}</span>
              </div>
            </div>
            {/* Decorative placeholder */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '0.875rem',
                height: '16rem',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p style={{ color: 'rgba(245,239,227,0.35)', fontSize: '0.85rem', fontStyle: 'italic' }}>Article cover</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── All posts ────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>All articles</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Recent Posts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {posts.map(({ category, date, title, excerpt, author }) => {
              const catStyle = categoryColors[category] || { bg: '#E7DECC', text: '#15302A' }
              return (
                <article
                  key={title}
                  style={{
                    background: '#F5EFE3',
                    borderRadius: '0.875rem',
                    padding: '1.75rem',
                    border: '1px solid #E7DECC',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span
                      style={{
                        background: catStyle.bg,
                        color: catStyle.text,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '2rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {category}
                    </span>
                    <span style={{ color: '#6E7F76', fontSize: '0.78rem' }}>{date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#15302A', lineHeight: 1.4, margin: 0 }}>{title}</h3>
                  <p style={{ color: '#6E7F76', fontSize: '0.88rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#6E7F76', fontSize: '0.78rem' }}>{author}</span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'underline' }}
                    >
                      Read
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F5EFE3', marginBottom: '0.75rem' }}>
            Get monthly impact updates.
          </h2>
          <p style={{ color: '#E3EFE8', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Program milestones, field stories, and policy developments — delivered once a month. No spam, ever.
          </p>
          {subscribed ? (
            <div style={{ background: 'rgba(217,154,43,0.15)', borderRadius: '0.875rem', padding: '1.5rem', border: '1px solid rgba(217,154,43,0.3)' }}>
              <p style={{ color: '#D99A2B', fontWeight: 700, margin: 0, fontSize: '1rem' }}>Thank you for subscribing.</p>
              <p style={{ color: '#E3EFE8', fontSize: '0.88rem', margin: '0.5rem 0 0' }}>You will receive your first update at the start of next month.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 16rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#F5EFE3',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.85rem 2rem',
                  background: '#D99A2B',
                  color: '#15302A',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
