import Link from 'next/link'

const stats = [
  { value: '10,000+', label: 'Families to Reach (Target)' },
  { value: '7', label: 'Countries by 2030' },
  { value: '14', label: 'Languages Planned' },
  { value: '500+', label: 'Clinics (Target)' },
]

const missionPillars = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#E3EFE8" />
        <path d="M18 10v16M10 18h16" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Our Mission',
    text: 'To deliver free, high-quality telemedicine and essential medicines to the most underserved communities in West Africa — regardless of income, location, or language.',
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#E3EFE8" />
        <circle cx="18" cy="18" r="7" stroke="#0E6B4F" strokeWidth="2.5" />
        <path d="M18 11V8M18 28v-3M11 18H8M28 18h-3" stroke="#0E6B4F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'How It Works',
    text: 'Powered by Klinova\'s Invisible Grid, patients connect via WhatsApp in their own language. Our multilingual triage protocol routes each case to a licensed clinician — with medicine delivery coordinated through our pharmacy network.',
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#E3EFE8" />
        <path d="M10 24l5-8 5 5 4-9" stroke="#0E6B4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Our Goal',
    text: 'Launched in Togo in 2026, we aim to reach 10,000+ families across 7 countries by 2030 — delivering care in 14 languages through Klinova\'s Invisible Grid to rural, refugee, and urban-poor populations.',
  },
]

const programs = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0A5440" />
        <path d="M20 12v16M12 20h16" stroke="#F5EFE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Telemedicine Access',
    desc: 'Free and subsidized virtual consultations for orphans, refugees, and rural communities — delivered through Klinova\'s Invisible Grid via WhatsApp, in 14 languages.',
    href: '/programs#telemedicine',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0A5440" />
        <rect x="13" y="14" width="14" height="16" rx="2" stroke="#F5EFE3" strokeWidth="2" />
        <path d="M17 14v-2h6v2" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 20h8M16 24h5" stroke="#F5EFE3" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Essential Medicines',
    desc: 'HIV treatment, TB care, malaria prevention, and maternal health supplies coordinated with pharmacies and government health ministries across West Africa.',
    href: '/programs#medicines',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0A5440" />
        <circle cx="20" cy="18" r="5" stroke="#F5EFE3" strokeWidth="2" />
        <path d="M11 30c0-5 4-8 9-8s9 3 9 8" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Government Integration',
    desc: 'Formal partnerships with ministries of health for disease tracking, public health data reporting, and scaling community health programs through official channels.',
    href: '/programs#government',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0A5440" />
        <rect x="17" y="9" width="6" height="14" rx="2" stroke="#F5EFE3" strokeWidth="1.8" />
        <line x1="20" y1="23" x2="20" y2="30" stroke="#D99A2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="9" x2="20" y2="6" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="32" r="1.5" fill="#D99A2B" />
        <circle cx="25" cy="31" r="1" fill="#D99A2B" opacity="0.6" />
      </svg>
    ),
    title: 'Cholera Response & Vaccines',
    desc: 'Active cholera outbreak response, oral rehydration therapy, and last-mile vaccine delivery for meningitis, yellow fever, and childhood immunization in Togo.',
    href: '/programs#cholera-vaccines',
  },
]

const impactNumbers = [
  { value: '10,000+', label: 'Families to Reach (Target)' },
  { value: '7', label: 'Countries by 2030' },
  { value: '14', label: 'Languages (Planned)' },
  { value: '500+', label: 'Partner Clinics (Target)' },
]

const newsItems = [
  {
    date: 'August 2026',
    title: 'WHO Calls for Urgent Scale-Up of Cholera Vaccines Across West Africa',
    excerpt: 'The World Health Organization has issued an emergency call to action as cholera cases surge across Togo, Benin, and Nigeria, urging governments and NGOs to accelerate oral vaccine distribution in high-risk communities.',
  },
  {
    date: 'July 2026',
    title: 'Togo Launches National Community Health Worker Program',
    excerpt: 'The Togo Ministry of Health has formalized a national framework for community health workers, opening pathways for NGOs and digital health platforms to integrate with the public health system.',
  },
  {
    date: 'June 2026',
    title: 'Telemedicine Adoption Rising Across Francophone Africa',
    excerpt: 'A new ECOWAS health report shows a 340% increase in WhatsApp-based health consultations across the region since 2024, driven by low-connectivity innovation and multilingual mobile health tools.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
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
            A humanitarian initiative
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
            Healthcare for every village.
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Delivering free telemedicine and essential medicines to the most underserved communities in West Africa, powered by Klinova&#39;s Invisible Grid, in their language, on their terms.
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
              Our Programs
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
              Support Our Mission
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                <p style={{ color: '#E3EFE8', fontSize: '0.82rem', margin: 0, marginTop: '0.15rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission strip ────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {missionPillars.map(({ icon, title, text }) => (
              <div key={title}>
                <div style={{ marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0A5440', marginBottom: '0.6rem' }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.95rem', lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs preview ─────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What we do</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#15302A', marginBottom: '3rem', maxWidth: '28ch' }}>
            Four programs, one goal: accessible healthcare.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {programs.map(({ icon, title, desc, href }) => (
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
                {icon}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0A5440', margin: 0 }}>{title}</h3>
                <p style={{ color: '#15302A', fontSize: '0.92rem', lineHeight: 1.75, margin: 0, flex: 1 }}>{desc}</p>
                <Link
                  href={href}
                  style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'underline', alignSelf: 'flex-start' }}
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact numbers ───────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#E3EFE8', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our impact</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F5EFE3', marginBottom: '3rem' }}>
            Real numbers from the field.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {impactNumbers.map(({ value, label }) => (
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

      {/* ── News / Blog preview ──────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>News</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', margin: 0 }}>Latest updates.</h2>
            </div>
            <Link href="/blog" style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'underline' }}>
              Read all updates
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {newsItems.map(({ date, title, excerpt }) => (
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

      {/* ── Donor CTA ────────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem', borderTop: '1px solid #E7DECC' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Support us</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#15302A', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Make healthcare reach the unreachable.
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Every dollar you give goes directly toward consultations, medicines, and community health programs for families with nowhere else to turn.
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
              Donate Now
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
              Apply for Grants
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
