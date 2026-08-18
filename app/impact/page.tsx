import Link from 'next/link'

const keyStats = [
  { value: '10,000+', label: 'Consultations (Target)', sub: 'Goal since program launch in 2026' },
  { value: '7', label: 'Countries by 2030', sub: 'Currently active in Togo, expanding to Ghana and Benin' },
  { value: '14', label: 'Languages (Planned)', sub: 'Including Ewe, Hausa, Yoruba, Twi, Moore, Bambara' },
  { value: '500+', label: 'Partner Clinics (Target)', sub: 'Licensed clinics and pharmacy network' },
  { value: '12,000+', label: 'Medicines (Target)', sub: 'WHO-prequalified essential medicines' },
  { value: '3,200+', label: 'Families (Target)', sub: 'With ongoing care relationships' },
]

const countries = [
  { name: 'Togo', active: true,  note: 'Active — primary country of operations, launched 2026' },
  { name: 'Ghana', active: false, note: 'Upcoming — conversations with Ghana Health Service underway' },
  { name: 'Benin', active: false, note: 'Upcoming — outreach to Ministry of Health in progress' },
  { name: 'Nigeria', active: false, note: 'Upcoming — urban and semi-rural outreach planned' },
  { name: 'Burkina Faso', active: false, note: 'Upcoming — refugee population focus' },
  { name: 'Côte d\'Ivoire', active: false, note: 'Upcoming — 2028 expansion roadmap' },
  { name: 'Senegal', active: false, note: 'Upcoming — 2029 expansion roadmap' },
]

const diseaseCategories = [
  { label: 'Fever / Malaria', pct: 34, color: '#0E6B4F' },
  { label: 'Respiratory', pct: 22, color: '#0A5440' },
  { label: 'Digestive', pct: 18, color: '#D99A2B' },
  { label: 'Maternal Health', pct: 12, color: '#6E7F76' },
  { label: 'Other', pct: 14, color: '#E7DECC' },
]

export default function ImpactPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Measuring what matters
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Real-time impact.
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            We measure our success by the patients reached, medicines delivered, and communities served. Updated monthly.
          </p>
        </div>
      </section>

      {/* ── Key Stats ────────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>By the numbers</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Key Statistics
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {keyStats.map(({ value, label, sub }) => (
              <div
                key={label}
                style={{
                  background: '#E3EFE8',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#D99A2B', fontWeight: 700, margin: 0 }}>{value}</p>
                <p style={{ color: '#15302A', fontWeight: 700, fontSize: '0.95rem', margin: '0.3rem 0 0.4rem' }}>{label}</p>
                <p style={{ color: '#6E7F76', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Country Coverage ─────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Where we work and where we are going</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '0.75rem' }}>
            Country Expansion Roadmap
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Togo is our only active country of operations. All other countries are upcoming targets on our 2030 expansion roadmap.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '54rem' }}>
            {countries.map(({ name, active, note }) => (
              <div key={name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontWeight: 700, color: '#15302A', fontSize: '0.95rem' }}>{name}</span>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '2rem',
                      background: active ? '#0A5440' : '#E7DECC',
                      color: active ? '#F5EFE3' : '#6E7F76',
                    }}>
                      {active ? 'Active' : 'Upcoming'}
                    </span>
                  </div>
                </div>
                <div style={{ background: '#E7DECC', borderRadius: '1rem', height: '10px', overflow: 'hidden', marginBottom: '0.35rem' }}>
                  {active ? (
                    <div style={{ background: 'linear-gradient(90deg, #0E6B4F 0%, #0A5440 100%)', height: '100%', width: '100%', borderRadius: '1rem' }} />
                  ) : (
                    <div style={{ background: 'repeating-linear-gradient(90deg, #D99A2B 0px, #D99A2B 12px, transparent 12px, transparent 20px)', height: '100%', width: '40%', borderRadius: '1rem', opacity: 0.5 }} />
                  )}
                </div>
                <p style={{ color: '#6E7F76', fontSize: '0.8rem', margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disease Categories ───────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Clinical breakdown</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '2.5rem' }}>
            Disease Categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Bar chart */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '40rem' }}>
              {diseaseCategories.map(({ label, pct, color }) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: 600, color: '#15302A', fontSize: '0.9rem' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-display)', color, fontWeight: 700, fontSize: '1.05rem' }}>{pct}%</span>
                  </div>
                  <div style={{ background: '#E7DECC', borderRadius: '1rem', height: '12px', overflow: 'hidden' }}>
                    <div style={{ background: color, height: '100%', width: `${pct}%`, borderRadius: '1rem' }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Legend / context */}
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '2rem', border: '1px solid #E7DECC' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#15302A', marginBottom: '0.75rem' }}>What this tells us</h3>
              <p style={{ color: '#6E7F76', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Malaria and fever account for the largest share of consultations, consistent with West Africa&#39;s disease burden. Respiratory illnesses — particularly in younger children and dry-season months — represent the second largest category.
              </p>
              <p style={{ color: '#6E7F76', fontSize: '0.9rem', lineHeight: 1.75 }}>
                Maternal health consultations are growing as word of our services reaches pregnant women and new mothers in underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparency note ────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ background: '#E3EFE8', borderRadius: '0.875rem', padding: '1.75rem 2rem', border: '1px solid #E7DECC', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#0A5440', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.3rem' }}>Data Transparency</p>
              <p style={{ color: '#15302A', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Data updated monthly. Individual patient data is fully anonymized. See our{' '}
                <Link href="/contact#privacy" style={{ color: '#0A5440', textDecoration: 'underline', fontWeight: 600 }}>
                  Data Privacy statement
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Annual Report CTA ────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#F5EFE3', marginBottom: '0.5rem' }}>
              2026 Annual Report
            </h2>
            <p style={{ color: '#E3EFE8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Full program data, financial summary, and year-in-review for our inaugural year of operations.
            </p>
          </div>
          <a
            href="#annual-report"
            style={{
              padding: '0.9rem 2rem',
              background: '#D99A2B',
              color: '#15302A',
              borderRadius: '2rem',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Download Annual Report (PDF)
          </a>
        </div>
      </section>
    </>
  )
}
