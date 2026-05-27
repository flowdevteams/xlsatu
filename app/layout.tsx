import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0EA5E9',
  colorScheme: 'light',
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://daftarxlsatu.com'),
  title: 'Promo Pasang XL Satu Fiber Jabodetabek | Daftar WA',
  description:
    'Agen resmi pendaftaran XL Satu Fiber Jabodetabek. Cek area jaringan via WhatsApp, gratis instalasi & router, harga paket terbaru 2026.',
  keywords: [
    'Promo pasang XL Satu Fiber terbaru',
    'Biaya pasang internet XL Satu rumah',
    'Harga paket XL Satu Fiber 2026',
    'Daftar XL Satu tanpa ribet',
    'Agen resmi pendaftaran XL Satu Jabodetabek',
    'Pasang XL Satu Fiber Jakarta Selatan',
    'Internet cepat XL Satu Tangerang',
    'Provider internet rumah terdekat di Bekasi',
    'Sales resmi XL Satu Fiber',
    'Gratis biaya instalasi dan router',
    'Cek area jaringan XL Satu via WhatsApp',
  ],
  generator: 'v0.app',
  creator: 'XLSATU',
  publisher: 'XLSATU',
  category: 'Internet Services',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://daftarxlsatu.com',
    title: 'Promo Pasang XL Satu Fiber Jabodetabek | Daftar WA',
    description:
      'Sales resmi XL Satu Fiber untuk promo pasang internet rumah Jabodetabek. Cek area jaringan XL Satu via WhatsApp.',
    siteName: 'XLSATU',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promo Pasang XL Satu Fiber Jabodetabek | Daftar WA',
    description:
      'Agen resmi pendaftaran XL Satu Jabodetabek, harga paket XL Satu Fiber 2026, dan cek area jaringan via WhatsApp.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.svg', '/favicon-48x48.png'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <head>
      <meta name="google-site-verification" content="w0uUb5FIIumSlt0oDEr1PMmqUXa_noMJadY7cElz3ss" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'Organization'],
            '@id': 'https://daftarxlsatu.com/#agen-resmi-xlsatu',
            name: 'Daftar XLSATU',
            alternateName: 'Agen Resmi Pendaftaran XL Satu Fiber',
            description: 'Sales resmi XL Satu Fiber untuk pemasangan internet rumah di wilayah Jabodetabek.',
            url: 'https://daftarxlsatu.com',
            image: 'https://daftarxlsatu.com/favicon.png',
            telephone: '+62-859-4201-0910',
            priceRange: 'Rp189.000-Rp999.000',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jakarta Selatan',
              addressRegion: 'DKI Jakarta',
              addressCountry: 'ID',
            },
            sameAs: [
              'https://www.facebook.com/daftarxlsatu',
              'https://www.instagram.com/daftarxlsatu',
              'https://x.com/daftarxlsatu',
            ],
            areaServed: [
              { '@type': 'City', name: 'Jakarta' },
              { '@type': 'City', name: 'Bogor' },
              { '@type': 'City', name: 'Depok' },
              { '@type': 'City', name: 'Tangerang' },
              { '@type': 'City', name: 'Bekasi' },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              telephone: '+62-859-4201-0910',
              hoursAvailable: 'Mon-Sun 00:00-24:00',
              availableLanguage: 'id',
              areaServed: 'Jabodetabek',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Paket Internet Fiber XLSATU',
              url: 'https://daftarxlsatu.com/#paket',
            },
          })}
        </script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
