'use client'

import { useState } from 'react'

const featuredPost = {
  category: 'Health Tech',
  date: 'July 14, 2026',
  title: 'Klinova Expands WhatsApp Triage to 3 New Countries',
  excerpt:
    'Village Health Access and Klinova have launched multilingual triage channels in Burkina Faso, Senegal, and Côte d\'Ivoire. The expansion adds more than 2 million people to the reachable population, with support for Moore, Wolof, and Dioula languages.',
  author: 'VHA Communications Team',
}

const posts = [
  {
    category: 'Community',
    date: 'June 30, 2026',
    title: 'Meet the Community Health Workers Behind Our Reach',
    excerpt: 'In rural Togo, a team of 40 community health workers bridges the gap between patients and clinicians — often walking miles to deliver medicines and referrals.',
    author: 'Donald Daglo',
  },
  {
    category: 'Policy',
    date: 'June 12, 2026',
    title: 'Memorandum of Understanding Signed with Togo Ministry of Health',
    excerpt: 'A landmark agreement formalizes our collaboration with Togo\'s national health system, enabling direct referrals, data sharing, and co-training of community health workers.',
    author: 'VHA Policy Team',
  },
  {
    category: 'Health Tech',
    date: 'May 28, 2026',
    title: 'How We Built a Multilingual Triage Protocol for 14 Languages',
    excerpt: 'Building a healthcare triage system that works across French, English, Ewe, Hausa, Yoruba, and Twi required rethinking how clinical protocols are localized. Here\'s how we did it.',
    author: 'VHA Clinical Team',
  },
  {
    category: 'Community',
    date: 'May 10, 2026',
    title: 'Essential Medicines Program Reaches 12,000 Deliveries',
    excerpt: 'Our pharmacy coordination network passed a major milestone — 12,000 medicine packages delivered to patients who would otherwise have had no access to treatment.',
    author: 'VHA Operations Team',
  },
  {
    category: 'Policy',
    date: 'April 22, 2026',
    title: 'What West Africa\'s Telemedicine Regulation Landscape Means for VHA',
    excerpt: 'Telemedicine regulation varies widely across our 7 countries of operation. This post summarizes the current landscape and how VHA navigates cross-border clinical delivery.',
    author: 'VHA Legal & Policy',
  },
  {
    category: 'Health Tech',
    date: 'March 15, 2026',
    title: 'Designing Offline-First Healthcare Workflows for Low-Connectivity Environments',
    excerpt: 'Most healthcare technology assumes a stable internet connection. Our field teams operate where connectivity is measured in minutes per day. Here\'s our approach.',
    author: 'VHA Technology Team',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Health Tech': { bg: '#E3EFE8', text: '#0A5440' },
  'Community': { bg: '#F5EFE3', text: '#15302A' },
  'Policy': { bg: '#15302A', text: '#F5EFE3' },
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
            Stories from the field, program milestones, policy developments, and the technology behind our mission.
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
