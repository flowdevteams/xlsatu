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
  title: 'Promo Daftar XL Satu Tangerang Terbaru! | Proses Cepat',
  description:
    'Pusat pendaftaran XL Satu Untuk Wilayah Jabodetabek khususnya area Tangerang Selatan dan Sekitarnya. Dapatkan promo terbaru dari agen resmi XL Satu gratis router. Pendaftaran cepat dan mudah via WhatsApp.',
  keywords: [
    'Promo pasang XL Satu Tangsel gratis router',
    'Agen resmi pasang XL Satu Tangerang tercepat',
    'Daftar XL Satu Tangsel via WhatsApp proses mudah',
    'Harga promo paket internet XL Satu Pamulang 2026',
    'Pusat pendaftaran XL Satu Tangerang cepat aktif',
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
    title: 'Promo Daftar XL Satu Tangerang Terbaru! | Proses Cepat',
    description:
      'Agen resmi pendaftaran XL Satu wilayah Jabodetabek khususnya Tangerang Selatan dan Sekitarnya tercepat. Daftar XL Satu Tangsel via WhatsApp proses mudah dan dapatkan harga promo 2026.',
    siteName: 'XLSATU',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promo Daftar XL Satu Tangerang Terbaru! | Proses Cepat',
    description:
      'Pusat pendaftaran XL Satu Tangerang Selatan dan Jabodetabek cepat aktif. Promo pasang XL Satu Tangsel gratis router sekarang juga.',
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
        <meta name="google-site-verification" content="VYuEdsBV67upU-a6dzCGGq3qrZIIG8YjoRuihgmJ1To" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'Organization'],
              '@id': 'https://daftarxlsatu.com/#agen-resmi-xlsatu',
              name: 'Daftar XLSATU',
              alternateName: 'Agen Resmi Pendaftaran XL Satu Fiber',
              description: 'Pusat pendaftaran XL Satu Tangerang cepat aktif dan agen resmi pasang XL Satu Tangsel.',
              url: 'https://daftarxlsatu.com',
              image: 'https://daftarxlsatu.com/favicon.png',
              telephone: '+62-859-4201-0910',
              priceRange: 'Rp189.000-Rp999.000',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tangerang Selatan',
                addressRegion: 'Banten',
                addressCountry: 'ID',
              },
              sameAs: [
                'https://www.facebook.com/daftarxlsatu',
                'https://www.instagram.com/daftarxlsatu',
                'https://x.com/daftarxlsatu',
              ],
              areaServed: [
                { '@type': 'City', name: 'Tangerang Selatan' },
                { '@type': 'City', name: 'Tangerang' },
                { '@type': 'City', name: 'Pamulang' },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                telephone: '+62-859-4201-0910',
                hoursAvailable: 'Mon-Sun 00:00-24:00',
                availableLanguage: 'id',
                areaServed: ['Tangerang Selatan', 'Tangerang', 'Pamulang'],
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Paket Internet Fiber XLSATU',
                url: 'https://daftarxlsatu.com/#paket',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}