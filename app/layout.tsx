import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Providers from './components/Providers'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Village Health Access: Healthcare for Every Village',
  description:
    'Village Health Access provides free telemedicine and essential medicine delivery to underserved communities across West Africa. A humanitarian initiative connected to Klinova.',
  keywords: [
    'telemedicine',
    'West Africa',
    'nonprofit',
    'healthcare',
    'medicine',
    'Togo',
    'Ghana',
    'Benin',
    'Nigeria',
  ],
  openGraph: {
    title: 'Village Health Access',
    description: 'Free telemedicine and essential medicines for West Africa.',
    url: 'https://villagehealthaccess.org',
    siteName: 'Village Health Access',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: '#F5EFE3', color: '#15302A', fontFamily: 'var(--font-sans)' }}>
        <Providers>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
