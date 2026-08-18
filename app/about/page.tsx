import Link from 'next/link'

const values = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#E3EFE8" />
        <path d="M20 12c-4 0-8 3-8 8 0 5 8 12 8 12s8-7 8-12c0-5-4-8-8-8z" stroke="#0E6B4F" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Equity',
    text: 'Health outcomes should never be determined by geography, income, or language. We design every program to close those gaps.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#E3EFE8" />
        <path d="M12 20c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 14v6l4 2" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Compassion',
    text: 'Every patient interaction — from triage to follow-up — is guided by empathy, dignity, and cultural humility.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#E3EFE8" />
        <circle cx="20" cy="20" r="6" stroke="#0E6B4F" strokeWidth="2" />
        <path d="M20 10v3M20 27v3M10 20h3M27 20h3" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Innovation',
    text: 'From WhatsApp triage to multilingual AI triage support, we use technology to bridge the gap between patients and clinicians.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#E3EFE8" />
        <path d="M14 20l4 4 8-8" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Accountability',
    text: 'We publish monthly impact data, maintain strict financial transparency, and hold ourselves to measurable outcomes for every community we serve.',
  },
]

const boardMembers = [
  {
    initials: 'DD',
    name: 'Donald Daglo',
    title: 'Founder & Executive Director',
    bio: 'Donald founded Village Health Access after witnessing patients in Togo turn away from clinics due to cost and distance. He also leads Klinova, the for-profit health platform supporting VHA\'s mission.',
  },
  {
    initials: 'TBD',
    name: 'Board Position Open',
    title: 'Medical Advisory Board',
    bio: 'We are actively recruiting licensed clinicians and public health leaders from West Africa to join our medical advisory board. Reach out to join.',
  },
  {
    initials: 'TBD',
    name: 'Board Position Open',
    title: 'Finance & Governance',
    bio: 'We seek experienced nonprofit finance leaders and legal experts in 501(c)(3) governance to strengthen our oversight capacity.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Who we are
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '20ch', marginBottom: '1.25rem' }}>
            About Village Health Access
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            A nonprofit dedicated to making quality healthcare reach the most vulnerable communities in West Africa.
          </p>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Story</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.5rem' }}>
              Born from firsthand witness.
            </h2>
            <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
              Village Health Access was founded by Donald Daglo as the humanitarian arm of Klinova&#39;s broader mission to transform healthcare in West Africa. The idea took shape after Donald witnessed patients in Togo being turned away from clinics — not because care was unavailable, but because the cost and distance were simply insurmountable.
            </p>
            <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
              These weren&#39;t rare cases. Across Togo, Ghana, Benin, and beyond, families were choosing between food and medicine, walking hours to reach a clinic only to find it closed, or suffering from treatable conditions with no path to care. The gap between the healthcare system and the people who needed it most was vast — and largely invisible to those with the resources to close it.
            </p>
            <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
              Village Health Access exists to close that gap: using telemedicine infrastructure, pharmacy networks, and community health workers to bring dignified, professional healthcare to communities that have been left behind.
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
              <p style={{ color: 'rgba(245,239,227,0.7)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>West Africa · 2026–present</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Purpose</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Mission &amp; Vision
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#0A5440', borderRadius: '1rem', padding: '2.5rem', color: '#F5EFE3' }}>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Mission</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', lineHeight: 1.5, margin: 0 }}>
                Free telemedicine and essential medicine access for Africa&#39;s most vulnerable communities.
              </p>
            </div>
            <div style={{ background: '#E3EFE8', borderRadius: '1rem', padding: '2.5rem', border: '1px solid #E7DECC' }}>
              <p style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Vision</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#15302A', lineHeight: 1.5, margin: 0 }}>
                A world where geography and income never determine health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What guides us</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Our Values
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {values.map(({ icon, title, text }) => (
              <div key={title}>
                <div style={{ marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#0A5440', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.9rem', lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board ───────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Leadership</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '0.75rem' }}>
            Board of Directors
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Board recruitment in progress &mdash;{' '}
            <Link href="/contact" style={{ color: '#0A5440', fontWeight: 600, textDecoration: 'underline' }}>
              Contact us to join
            </Link>
            .
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {boardMembers.map(({ initials, name, title, bio }) => (
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

      {/* ── Klinova partnership ──────────────────────────────── */}
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
                In partnership with
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#F5EFE3', marginBottom: '1.25rem' }}>
                Our relationship with Klinova
              </h2>
              <p style={{ color: '#E3EFE8', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Village Health Access is the humanitarian arm of Klinova — a separate nonprofit entity that uses Klinova&#39;s Invisible Grid to deliver free and subsidized care. The Invisible Grid is Klinova&#39;s WhatsApp-based multilingual triage and care coordination system, built to reach patients in remote, low-connectivity environments across West Africa.
              </p>
              <p style={{ color: 'rgba(227,239,232,0.75)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                By running on Klinova&#39;s infrastructure, VHA can operate at low cost while maintaining clinical-grade care standards. This structure ensures the humanitarian mission stays independent, donor-funded, and free from commercial pressure — while benefiting from an already-deployed, proven platform.
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
                Visit Klinova.co
              </a>
              <Link
                href="/contact"
                style={{ color: '#E3EFE8', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                Partnership inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
