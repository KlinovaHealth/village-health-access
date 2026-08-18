import Link from 'next/link'

const getInvolvedCards = [
  {
    title: 'Partner with Us',
    desc: 'Clinics, pharmacies, NGOs, and government health agencies. Join our network to expand care in your region.',
    cta: 'Apply to partner',
    href: '/partners',
    style: { background: '#0A5440', color: '#F5EFE3' } as const,
    ctaStyle: { background: '#D99A2B', color: '#15302A' } as const,
  },
  {
    title: 'Donate',
    desc: 'Every dollar funds consultations, medicines, and community health programs for families with no other option.',
    cta: 'Support the mission',
    href: '/donors',
    style: { background: '#E3EFE8', color: '#15302A', border: '1px solid #E7DECC' } as const,
    ctaStyle: { background: '#0A5440', color: '#F5EFE3' } as const,
  },
  {
    title: 'Volunteer',
    desc: 'Licensed clinicians, translators, data analysts, and public health professionals — we need your skills.',
    cta: 'Get in touch',
    href: '/contact',
    style: { background: '#E3EFE8', color: '#15302A', border: '1px solid #E7DECC' } as const,
    ctaStyle: { background: '#0A5440', color: '#F5EFE3' } as const,
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            What we do
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Programs built for the communities that need them most.
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Four interconnected programs targeting the root barriers to healthcare access across West Africa: distance, cost, systemic disconnection, and preventable disease.
          </p>
        </div>
      </section>

      {/* ── Program 1: Telemedicine ──────────────────────────── */}
      <section id="telemedicine" style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="#0A5440" />
                  <path d="M22 14v16M14 22h16" stroke="#F5EFE3" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Program 1</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                Telemedicine Access
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                For orphans, refugees, rural subsistence farmers, and the urban poor, a clinic visit isn&#39;t just inconvenient; it&#39;s economically catastrophic or physically impossible. Village Health Access delivers free and subsidized virtual consultations that meet patients where they are, significantly improving access to essential healthcare services.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                All services are delivered through <strong style={{ color: '#15302A' }}>Klinova&#39;s Invisible Grid</strong>, an app and WhatsApp-based care coordination system built for low-connectivity environments. Patients connect with a community health worker who performs structured multilingual triage, with quick escalation to licensed clinicians for diagnosis, treatment, and integrated follow-up.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                Our translation network covers 14 languages, including French, English, Ewe, Hausa, Yoruba, Twi, Moore, Bambara, and local dialects, ensuring language is never a barrier to care and that every patient feels respected and understood.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { value: '14', label: 'Languages Supported', sub: 'Including Ewe, Hausa, Yoruba, Twi, Moore' },
                { value: '10,247+', label: 'Consultations Completed', sub: 'Since launch in 2026' },
                { value: '7', label: 'Countries by 2030', sub: 'Starting in Togo, expanding to Ghana, Benin and beyond' },
              ].map(({ value, label, sub }) => (
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

      {/* ── Program 2: Essential Medicines ──────────────────── */}
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
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Program 2</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                Essential Medicines
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                A diagnosis without access to medicine is a hollow promise. Our Essential Medicines program ensures that prescriptions written through our telemedicine platform can actually be filled — at no cost to the patient.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                Focus areas include HIV antiretroviral treatment, tuberculosis care, malaria prevention and treatment, maternal and newborn health, and childhood immunization support. We work with licensed pharmacy networks and government supply chains to source WHO-prequalified medicines.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                Delivery is coordinated through community health workers and partner clinics, with cold chain logistics for temperature-sensitive medications managed in partnership with regional distributors.
              </p>
            </div>
            <div style={{ order: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'HIV Treatment', icon: 'HIV' },
                  { label: 'TB Care', icon: 'TB' },
                  { label: 'Malaria', icon: 'MAL' },
                  { label: 'Maternal Health', icon: 'MAT' },
                ].map(({ label, icon }) => (
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
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#D99A2B', fontWeight: 700, margin: 0 }}>12,000+</p>
                <p style={{ color: '#15302A', fontWeight: 600, fontSize: '0.9rem', margin: '0.2rem 0 0' }}>Medicine Packages Delivered</p>
                <p style={{ color: '#6E7F76', fontSize: '0.82rem', margin: '0.15rem 0 0' }}>Across 500+ partner clinics and pharmacies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program 3: Government Integration ───────────────── */}
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
                <span style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Program 3</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F5EFE3', marginBottom: '1.25rem' }}>
                Government Integration
              </h2>
              <p style={{ color: '#E3EFE8', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                Sustainable healthcare access requires embedding community health programs into government infrastructure. Village Health Access works directly with West African health ministries to formalize our community health worker networks, share disease surveillance data, and integrate our telemedicine protocols into national health frameworks.
              </p>
              <p style={{ color: 'rgba(227,239,232,0.8)', lineHeight: 1.8, fontSize: '0.97rem' }}>
                We currently hold a memorandum of understanding with the Togo Ministry of Health, and are in active discussions with health authorities in Ghana, Benin, and Nigeria. Our data sharing infrastructure provides real-time disease tracking maps that support ministry decision-making.
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
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#F5EFE3', fontSize: '1.1rem', marginBottom: '1rem' }}>What we share with governments</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Anonymized disease surveillance data',
                    'Community health worker coverage maps',
                    'Medicine supply chain status reports',
                    'Outbreak early-warning indicators',
                    'Consultation volume by region',
                  ].map((item) => (
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
                View Impact Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program 4: Cholera & Vaccines ───────────────────── */}
      <section id="cholera-vaccines" style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 44 44" aria-hidden="true">
                  <rect width="44" height="44" rx="13" fill="#0A5440" />
                  {/* Syringe body */}
                  <rect x="20" y="10" width="5" height="14" rx="1.5" stroke="#F5EFE3" strokeWidth="1.8" />
                  {/* Needle */}
                  <line x1="22.5" y1="24" x2="22.5" y2="30" stroke="#D99A2B" strokeWidth="2" strokeLinecap="round" />
                  {/* Plunger */}
                  <line x1="22.5" y1="10" x2="22.5" y2="7" stroke="#F5EFE3" strokeWidth="2" strokeLinecap="round" />
                  {/* Drops */}
                  <circle cx="17" cy="32" r="1.5" fill="#D99A2B" />
                  <circle cx="28" cy="30" r="1" fill="#D99A2B" opacity="0.6" />
                </svg>
                <span style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Program 4</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                Combating Cholera &amp; Delivering Vaccines
              </h2>
              <p style={{ color: '#15302A', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                Cholera remains one of the deadliest and most preventable diseases in West Africa, killing thousands every year in communities with limited access to clean water and healthcare. Village Health Access runs active cholera response and prevention programs in Togo, combining oral rehydration therapy, water sanitation education, and rapid community health worker deployment during outbreaks.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
                Alongside cholera response, we coordinate last-mile vaccine delivery for cholera, meningitis, yellow fever, and childhood immunization schedules. Vaccines are sourced through WHO-prequalified supply chains and delivered by trained community health workers — including to nomadic populations, refugee camps, and villages with no fixed health facility.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.97rem' }}>
                All outbreak data is logged through Klinova&#39;s Invisible Grid and shared in real time with the Togo Ministry of Health, enabling faster government response and reducing preventable deaths.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { value: 'Cholera', label: 'Primary Disease Focus', sub: 'Oral rehydration, sanitation education, outbreak response' },
                { value: '4 Vaccines', label: 'Immunization Programs', sub: 'Cholera · Meningitis · Yellow Fever · Childhood schedule' },
                { value: 'Real-time', label: 'Outbreak Reporting', sub: 'Logged via Klinova\'s Invisible Grid, shared with Ministry of Health' },
              ].map(({ value, label, sub }) => (
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

      {/* ── Get Involved ─────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Take action</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Get Involved
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {getInvolvedCards.map(({ title, desc, cta, href, style, ctaStyle }) => (
              <div key={title} style={{ ...style, borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.75, margin: 0, flex: 1 }}>{desc}</p>
                <Link
                  href={href}
                  style={{
                    ...ctaStyle,
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
