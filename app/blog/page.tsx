'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

interface NewsItem {
  title: string
  url: string
  date: string
  source: string
  excerpt: string
}

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const { lang } = useLanguage()
  const t = translations[lang].blog

  useEffect(() => {
    fetch('/api/health-news')
      .then(r => r.json())
      .then(d => { setNews(d.items ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  const featured = news[0]
  const rest = news.slice(1)

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

      {/* Featured */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{t.featuredLabel}</p>
          {loading ? (
            <div style={{ background: '#E3EFE8', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center', color: '#6E7F76' }}>Loading latest health news...</div>
          ) : featured ? (
            <div style={{ background: '#0A5440', borderRadius: '1.25rem', padding: 'clamp(2rem,4vw,3.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ background: 'rgba(217,154,43,0.25)', color: '#D99A2B', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700 }}>
                    {featured.source}
                  </span>
                  <span style={{ color: '#6E7F76', fontSize: '0.8rem' }}>{featured.date}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#F5EFE3', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#E3EFE8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', padding: '0.7rem 1.75rem', background: '#D99A2B', color: '#15302A', borderRadius: '2rem', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  {t.readMore}
                </a>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '0.875rem', height: '16rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'rgba(245,239,227,0.4)', fontSize: '0.82rem', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>
                  {lang === 'fr' ? 'Source' : 'Source'}: {featured.source}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* All posts */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.allArticlesEyebrow}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#15302A', margin: 0 }}>
              {t.recentPostsTitle}
            </h2>
            <span style={{ color: '#6E7F76', fontSize: '0.82rem' }}>
              {lang === 'fr' ? 'Mis à jour automatiquement via ReliefWeb' : 'Auto-updated via ReliefWeb'}
            </span>
          </div>
          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ background: '#F5EFE3', borderRadius: '0.875rem', padding: '1.75rem', border: '1px solid #E7DECC', height: '12rem' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
              {rest.map((item) => (
                <article
                  key={item.url}
                  style={{ background: '#F5EFE3', borderRadius: '0.875rem', padding: '1.75rem', border: '1px solid #E7DECC', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ background: '#E3EFE8', color: '#0A5440', padding: '0.2rem 0.65rem', borderRadius: '2rem', fontSize: '0.72rem', fontWeight: 700 }}>
                      {item.source}
                    </span>
                    <span style={{ color: '#6E7F76', fontSize: '0.78rem' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#15302A', lineHeight: 1.4, margin: 0 }}>{item.title}</h3>
                  <p style={{ color: '#6E7F76', fontSize: '0.88rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{item.excerpt}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'underline', alignSelf: 'flex-start' }}
                  >
                    {t.read} &rarr;
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#F5EFE3', marginBottom: '0.75rem' }}>{t.newsletterTitle}</h2>
          <p style={{ color: '#E3EFE8', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '2rem' }}>{t.newsletterDesc}</p>
          {subscribed ? (
            <div style={{ background: 'rgba(217,154,43,0.15)', borderRadius: '0.875rem', padding: '1.5rem', border: '1px solid rgba(217,154,43,0.3)' }}>
              <p style={{ color: '#D99A2B', fontWeight: 700, margin: 0 }}>{t.thankYouTitle}</p>
              <p style={{ color: '#E3EFE8', fontSize: '0.88rem', margin: '0.5rem 0 0' }}>{t.thankYouDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input type="email" placeholder={t.subscribePlaceholder} value={email} onChange={e => setEmail(e.target.value)} required
                style={{ flex: '1 1 16rem', padding: '0.85rem 1.25rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: '#F5EFE3', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-sans)' }} />
              <button type="submit"
                style={{ padding: '0.85rem 2rem', background: '#D99A2B', color: '#15302A', border: 'none', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>
                {t.subscribeBtn}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
