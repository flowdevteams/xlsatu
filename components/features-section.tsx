'use client'

import {
  AppWindow,
  Headphones,
  ReceiptText,
  Router,
  Smartphone,
  Wifi,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

interface FeatureItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  seoText: string
}

const featureItems: FeatureItem[] = [
  {
    title: 'Jaringan Internet Fiber Optic',
    icon: Wifi,
    seoText: 'Internet rumah fiber optic berkecepatan tinggi dengan koneksi stabil.',
  },
  {
    title: 'Kuota WiFi Unlimited',
    icon: Router,
    seoText: 'Kuota internet WiFi unlimited untuk aktivitas streaming dan kerja dari rumah.',
  },
  {
    title: 'Kuota HP Sekeluarga',
    icon: Smartphone,
    seoText: 'Bonus kuota HP untuk keluarga agar tetap terhubung kapan saja.',
  },
  {
    title: 'SATU Tagihan Semua Layanan',
    icon: ReceiptText,
    seoText: 'Pembayaran internet rumah lebih praktis dengan satu tagihan terpadu.',
  },
  {
    title: 'SATU Aplikasi Semua Layanan',
    icon: AppWindow,
    seoText: 'Kelola layanan internet, tagihan, dan bantuan teknis lewat satu aplikasi.',
  },
  {
    title: '24 Jam Customer Support',
    icon: Headphones,
    seoText: 'Dukungan customer support 24 jam untuk bantuan teknis internet rumah.',
  },
]

const featureStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Keunggulan Layanan Internet Rumah XLSATU',
  itemListElement: featureItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    description: item.seoText,
  })),
}

export function FeaturesSection() {
  return (
    <section
      id="fitur"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-600 text-white"
      aria-labelledby="fitur-heading"
    >
      <div className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-12" duration={860}>
          <h2 id="fitur-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-3">
            Keunggulan XL Satu Fiber untuk Rumah dan Bisnis
          </h2>
          <p className="text-lg sm:text-xl text-blue-50/95 max-w-3xl mx-auto text-pretty">
            Promo pasang XL Satu Fiber terbaru dari sales resmi XL Satu Fiber dengan dukungan 24 jam untuk keluarga Jabodetabek.
          </p>
          <p className="sr-only">
            Agen resmi pendaftaran XL Satu Jabodetabek dengan layanan internet rumah fiber optic, satu tagihan, dan dukungan
            customer support 24 jam.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden shadow-[0_22px_40px_-26px_rgba(8,47,146,0.9)]"
          duration={860}
          delay={80}
          threshold={0.14}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {featureItems.map((item, index) => {
              const Icon = item.icon

              return (
                <ScrollReveal
                  as="article"
                  key={item.title}
                  delay={110 + index * 85}
                  duration={700}
                  threshold={0.08}
                  className="group relative flex h-full flex-col items-center justify-start px-4 py-8 sm:px-6 sm:py-9 text-center border-b border-white/15 xl:border-b-0 xl:border-r xl:border-white/15 last:border-r-0 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-200/35 to-blue-200/30 border border-cyan-100/55 shadow-[0_14px_24px_-20px_rgba(186,230,253,0.95)]">
                    <Icon className="h-8 w-8 text-blue-50 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex min-h-[6.5rem] items-start justify-center">
                    <h3 className="mx-auto max-w-[13ch] text-lg sm:text-xl font-semibold leading-[1.35] text-balance">
                      {item.title}
                    </h3>
                  </div>
                  <p className="sr-only">{item.seoText}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json">{JSON.stringify(featureStructuredData)}</script>
    </section>
  )
}
