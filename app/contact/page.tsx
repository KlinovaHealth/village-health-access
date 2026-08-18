'use client'

import { useState } from 'react'

const contactCards = [
  {
    label: 'General Inquiries',
    email: 'contact@villagehealthaccess.org',
    desc: 'Questions about our programs, mission, or how to get involved.',
  },
  {
    label: 'Partnership',
    email: 'partners@villagehealthaccess.org',
    desc: 'Clinic, pharmacy, NGO, and government partnership requests.',
  },
  {
    label: 'Media',
    email: 'media@villagehealthaccess.org',
    desc: 'Press inquiries, interview requests, and media resources.',
  },
]

const subjectOptions = ['General', 'Partnership', 'Donation', 'Media', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:contact@villagehealthaccess.org?subject=${encodeURIComponent(`[${form.subject}] ${form.name}`)}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #E7DECC',
    borderRadius: '0.5rem',
    fontSize: '0.92rem',
    background: '#ffffff',
    color: '#15302A',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Reach us
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Get in touch.
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Whether you want to partner, donate, volunteer, or simply learn more — we want to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact cards ────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact channels</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Find the right inbox.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {contactCards.map(({ label, email, desc }) => (
              <div
                key={label}
                style={{
                  background: '#ffffff',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <p style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</p>
                <a
                  href={`mailto:${email}`}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#15302A', textDecoration: 'underline', display: 'block', marginBottom: '0.75rem' }}
                >
                  {email}
                </a>
                <p style={{ color: '#6E7F76', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Send a message</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
              Contact Form
            </h2>
            <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Fill out the form and we will route your message to the right team. We aim to respond within 2 business days.
            </p>
          </div>

          {sent ? (
            <div style={{ background: '#E3EFE8', borderRadius: '1rem', padding: '2.5rem', border: '1px solid #E7DECC', textAlign: 'center' }}>
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" aria-hidden="true" style={{ margin: '0 auto 1rem' }}>
                <circle cx="24" cy="24" r="24" fill="#0E6B4F" />
                <path d="M14 24l7 7L34 16" stroke="#F5EFE3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 style={{ fontFamily: 'var(--font-display)', color: '#15302A', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message sent.</h3>
              <p style={{ color: '#6E7F76', fontSize: '0.9rem' }}>Your email client should have opened. We look forward to hearing from you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} style={inputStyle}>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', color: '#15302A', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '0.9rem',
                  background: '#D99A2B',
                  color: '#15302A',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Where we are</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.25rem)', color: '#15302A', marginBottom: '1rem' }}>
                Location
              </h2>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Village Health Access operates across West Africa with administrative coordination through our partner network. We do not maintain a single central office — our operations are distributed across the communities we serve.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Primary operational countries: Togo, Ghana, Benin, Nigeria, Burkina Faso, Côte d&#39;Ivoire, Senegal.
              </p>
            </div>
            {/* Map placeholder */}
            <div
              style={{
                background: 'linear-gradient(135deg, #E3EFE8 0%, #E7DECC 100%)',
                borderRadius: '1rem',
                height: '20rem',
                border: '1px solid #E7DECC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Stylized dots representing countries */}
              {[
                { top: '38%', left: '42%', label: 'TG' },
                { top: '32%', left: '36%', label: 'GH' },
                { top: '40%', left: '46%', label: 'BJ' },
                { top: '28%', left: '56%', label: 'NG' },
                { top: '24%', left: '38%', label: 'BF' },
                { top: '34%', left: '28%', label: 'CI' },
                { top: '22%', left: '18%', label: 'SN' },
              ].map(({ top, left, label }) => (
                <div
                  key={label}
                  style={{
                    position: 'absolute',
                    top,
                    left,
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    background: '#0A5440',
                    color: '#F5EFE3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(10,84,64,0.3)',
                  }}
                >
                  {label}
                </div>
              ))}
              <p style={{ color: '#6E7F76', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '8rem' }}>West Africa coverage map</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social links ─────────────────────────────────────── */}
      <section id="privacy" style={{ background: '#15302A', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: '#F5EFE3', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Follow our work</h2>
            <p style={{ color: '#6E7F76', fontSize: '0.88rem', margin: 0 }}>Patient data is never shared publicly. All impact reports are fully anonymized.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[
              { label: 'X (Twitter)', href: 'https://x.com/villagehealthacc' },
              { label: 'LinkedIn', href: 'https://linkedin.com/company/village-health-access' },
              { label: 'WhatsApp Contact', href: 'https://wa.me/22800000000' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.65rem 1.4rem',
                  background: 'rgba(255,255,255,0.07)',
                  color: '#E3EFE8',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
