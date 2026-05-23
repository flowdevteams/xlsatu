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
  title: 'Paket internet fiber jabodetabek terbaik dan termurah dari 20 Mbps hingga 1000 Mbps | Daftar Xl Satu',
  description: 'Paket internet fiber rumah dari 20 Mbps hingga 1000 Mbps. Harga mulai Rp189.000/bulan, transparan dengan harga setelah PPN, dan cek jaringan cepat via WhatsApp.',
  keywords: [
    'paket internet fiber',
    'harga internet rumah',
    'internet cepat indonesia',
    'paket wifi rumah',
    'internet 20 mbps',
    'internet 1000 mbps',
    'starter value smart family superuser ultimate ultra extreme',
  ],
  generator: 'v0.app',
  creator: 'Xl Satu',
  publisher: 'Xl Satu',
  category: 'Internet Services',
  openGraph: {
    type: 'website',
    url: 'https://Xl Satu.com',
    title: 'Daftar Paket Internet Fiber 20-1000 Mbps | Xl Satu',
    description: 'Bandingkan paket Starter sampai Extreme, cek jumlah perangkat ideal, dan pilih harga internet rumah sesuai kebutuhan Anda.',
    siteName: 'Xl Satu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daftar Paket Internet Fiber 20-1000 Mbps | Xl Satu',
    description: 'Harga internet rumah transparan dengan opsi paket lengkap dan CTA WhatsApp langsung.',
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
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Xl Satu',
            description: 'Penyedia layanan internet fiber optik untuk kebutuhan rumah dan bisnis di Indonesia.',
            url: 'https://Xl Satu.com',
            telephone: '+62-859-4201-0910',
            sameAs: [
              'https://www.facebook.com/Xl Satu',
              'https://www.instagram.com/Xl Satu',
              'https://www.twitter.com/Xl Satu',
            ],
            areaServed: 'ID',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              telephone: '+62-859-4201-0910',
              hoursAvailable: 'Mon-Sun 00:00-24:00',
              availableLanguage: 'id',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Paket Internet Fiber Xl Satu',
              url: 'https://Xl Satu.com/#paket',
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
