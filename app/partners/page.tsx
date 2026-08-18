const platinumPartners = [
  { initials: 'WHO', name: 'World Health Organization', type: 'Global Health' },
  { initials: 'GF', name: 'Gates Foundation', type: 'Philanthropy' },
  { initials: 'UNI', name: 'UNICEF', type: 'UN Agency' },
]

const goldPartners = [
  { initials: 'TG', name: 'Togo Ministry of Health', type: 'Government' },
  { initials: 'GH', name: 'Ghana Health Service', type: 'Government' },
  { initials: 'BJ', name: 'Benin Ministry of Health', type: 'Government' },
]

const silverPartners = [
  { initials: 'MSF', name: 'Médecins Sans Frontières', type: 'NGO' },
  { initials: 'IRC', name: 'International Rescue Committee', type: 'NGO' },
  { initials: 'PHI', name: 'Partners in Health', type: 'NGO' },
  { initials: 'AMR', name: 'Africa Medical Relief', type: 'NGO' },
]

const clinicRegions = [
  { region: 'Lomé, Togo', count: '82 partner clinics and pharmacies' },
  { region: 'Accra & Kumasi, Ghana', count: '67 partner locations' },
  { region: 'Cotonou, Benin', count: '48 partner clinics' },
  { region: 'Lagos, Nigeria', count: '61 partner locations' },
  { region: 'Ouagadougou, Burkina Faso', count: '42 partner clinics (refugee focus)' },
  { region: 'Abidjan, Côte d\'Ivoire', count: '31 new partner locations (2026)' },
  { region: 'Dakar, Senegal', count: '22 new partner locations (2026)' },
]

function PartnerCard({ initials, name, type, faded = false }: { initials: string; name: string; type: string; faded?: boolean }) {
  return (
    <div
      style={{
        background: faded ? '#F5EFE3' : '#ffffff',
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
          width: '3.25rem',
          height: '3.25rem',
          borderRadius: '0.625rem',
          background: faded ? '#E7DECC' : '#0A5440',
          color: faded ? '#6E7F76' : '#F5EFE3',
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
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#0A5440', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Our network
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F5EFE3', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.25rem' }}>
            Our Partners
          </h1>
          <p style={{ color: '#E3EFE8', fontSize: '1.1rem', maxWidth: '52ch', lineHeight: 1.75 }}>
            Village Health Access works with a wide range of global, regional, and local partners to deliver healthcare at scale. Together, we cover 7 countries and serve over 10,000 patients.
          </p>
        </div>
      </section>

      {/* ── Partner Tiers ────────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {/* Platinum */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#D99A2B' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>Platinum Partners</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Global institutions aligned with our mission. Shown as aspirational targets — active conversations underway.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {platinumPartners.map((p) => (
                <PartnerCard key={p.initials} {...p} faded />
              ))}
            </div>
          </div>

          {/* Gold */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#D99A2B', opacity: 0.7 }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>Gold Partners</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Government health authorities with active memoranda of understanding or formal collaboration agreements.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {goldPartners.map((p) => (
                <PartnerCard key={p.initials} {...p} />
              ))}
            </div>
          </div>

          {/* Silver */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#6E7F76' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#15302A', margin: 0 }}>Silver Partners</h2>
            </div>
            <p style={{ color: '#6E7F76', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              NGOs and civil society organizations delivering complementary health, relief, and development programs.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {silverPartners.map((p) => (
                <PartnerCard key={p.initials} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinic Network ───────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>On the ground</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '0.75rem' }}>
            Current Partner Network
          </h2>
          <p style={{ color: '#6E7F76', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            500+ partner clinics and pharmacies across 7 countries provide the last-mile infrastructure for our telemedicine referrals and medicine delivery programs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {clinicRegions.map(({ region, count }) => (
              <div
                key={region}
                style={{
                  background: '#E3EFE8',
                  borderRadius: '0.875rem',
                  padding: '1.5rem',
                  border: '1px solid #E7DECC',
                }}
              >
                <p style={{ fontWeight: 700, color: '#0A5440', fontSize: '1rem', marginBottom: '0.35rem' }}>{region}</p>
                <p style={{ color: '#6E7F76', fontSize: '0.85rem', margin: 0 }}>{count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner CTA form ─────────────────────────────────── */}
      <section style={{ background: '#F5EFE3', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#D99A2B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Join the network</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#15302A', marginBottom: '1.25rem' }}>
                Become a Partner
              </h2>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                We welcome applications from licensed clinics, pharmacies, NGOs, community health organizations, and government health agencies across West Africa.
              </p>
              <p style={{ color: '#6E7F76', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Partners gain access to our telemedicine referral network, medicine supply coordination, training resources, and community health worker support.
              </p>
            </div>
            <form
              action="mailto:partners@villagehealthaccess.org"
              method="GET"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {[
                { label: 'Organization Name', name: 'org', type: 'text', placeholder: 'Name of your organization' },
                { label: 'Country', name: 'country', type: 'text', placeholder: 'e.g. Togo, Ghana, Nigeria' },
                { label: 'Contact Email', name: 'email', type: 'email', placeholder: 'contact@yourorg.org' },
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
                  Type of Partnership
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
                  <option value="">Select a type</option>
                  <option>Clinic / Healthcare Facility</option>
                  <option>Pharmacy / Medicine Distributor</option>
                  <option>NGO / Civil Society</option>
                  <option>Government Health Agency</option>
                  <option>Community Health Worker Program</option>
                  <option>Other</option>
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
                Submit Partnership Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
