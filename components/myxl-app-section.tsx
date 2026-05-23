import Image from 'next/image'
import {
  BadgePercent,
  CreditCard,
  Download,
  Headset,
  Layers,
  Smartphone,
  Users,
  Wifi,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const orbitFeatures = [
  { icon: Wifi, label: 'Kelola WiFi Rumah' },
  { icon: CreditCard, label: 'Bayar Tagihan' },
  { icon: Users, label: 'Tambah Anggota' },
  { icon: BadgePercent, label: 'Promo Eksklusif' },
  { icon: Headset, label: 'Support 24 Jam' },
  { icon: Layers, label: 'Upgrade Layanan' },
]

const myxlAppStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aplikasi myXL untuk Pelanggan XLSATU',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Android, iOS',
  description:
    'Aplikasi myXL memudahkan pelanggan XLSATU untuk cek tagihan, kelola paket internet rumah, dan akses promo langsung dari smartphone.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
  },
  publisher: {
    '@type': 'Organization',
    name: 'XLSATU',
    url: 'https://Xl Satu.com',
  },
}

export function MyXLAppSection() {
  return (
    <section
      id="aplikasi-myxl"
      className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-sky-50 to-blue-100/70 py-12 sm:py-16 lg:py-20"
      aria-labelledby="myxl-app-heading"
    >
      <div className="pointer-events-none absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(14,165,233,0.14),transparent_38%),radial-gradient(circle_at_86%_86%,rgba(37,99,235,0.16),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <ScrollReveal
          as="article"
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          variant="fade-right"
          duration={900}
          threshold={0.2}
        >
          <div className="relative aspect-square w-full [--orbit-radius:142px] sm:[--orbit-radius:170px] lg:[--orbit-radius:176px]">
            <div className="absolute inset-[8%] rounded-full border border-sky-200/70 bg-gradient-to-br from-white/60 via-sky-100/45 to-cyan-100/35 shadow-[0_24px_55px_-35px_rgba(37,99,235,0.9)] backdrop-blur-sm" />
            <div className="absolute inset-[14%] rounded-full border border-dashed border-sky-300/70 animate-myxl-orbit-spin" />
            <div className="absolute inset-[20%] rounded-full border border-cyan-200/55 animate-myxl-orbit-spin-reverse" />

            {orbitFeatures.map((feature, index) => {
              const angle = -90 + index * (360 / orbitFeatures.length)
              const Icon = feature.icon

              return (
                <div
                  key={feature.label}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${angle}deg) translateY(calc(var(--orbit-radius)*-1))` }}
                >
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div
                      className="animate-myxl-badge-bob rounded-2xl border border-sky-200/80 bg-white/95 px-3 py-2 shadow-[0_16px_26px_-18px_rgba(37,99,235,0.85)] backdrop-blur-sm"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-slate-800 sm:text-sm">{feature.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_62%)] animate-myxl-soft-pulse" />
                <div className="relative mx-auto w-[185px] sm:w-[215px] lg:w-[230px] animate-myxl-phone-float">
                  <div className="relative aspect-[9/18] rounded-[2.5rem] border-[8px] border-slate-900/90 bg-slate-950 shadow-[0_36px_70px_-28px_rgba(15,23,42,0.9)]">
                    <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-700" />
                    <div className="absolute inset-[6px] overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-blue-700 via-sky-600 to-cyan-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.35),transparent_36%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.45),transparent_34%)]" />
                      <div className="relative p-4 text-white">
                        <div className="mb-4 rounded-xl bg-white/18 p-2 backdrop-blur-sm">
                          <div className="h-2.5 w-24 rounded-full bg-white/70" />
                          <div className="mt-2 h-2 w-14 rounded-full bg-white/45" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="h-8 rounded-lg bg-white/18 backdrop-blur-sm" />
                          ))}
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-10 rounded-lg bg-white/18 backdrop-blur-sm" />
                          <div className="h-10 rounded-lg bg-white/18 backdrop-blur-sm" />
                          <div className="h-12 rounded-xl bg-white/25 backdrop-blur-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-slate-500/40 blur" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="article"
          className="relative rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white/80 via-blue-50/70 to-cyan-50/70 p-6 shadow-[0_28px_55px_-38px_rgba(37,99,235,0.9)] backdrop-blur-xl sm:p-8 lg:p-10"
          variant="fade-left"
          delay={120}
          duration={860}
          threshold={0.2}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            <Smartphone className="h-4 w-4" />
            Aplikasi myXL untuk Pelanggan XLSATU
          </div>

          <h2
            id="myxl-app-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]"
          >
            Download Aplikasi myXL untuk Kelola Internet Rumah Lebih Praktis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Nikmati pengalaman digital yang lebih cepat: cek tagihan internet fiber, pantau layanan rumah, akses promo
            pelanggan, dan hubungi dukungan teknis langsung dari satu aplikasi myXL di smartphone Anda.
          </p>

          <div className="mt-6 rounded-2xl border border-sky-200/70 bg-white/75 p-4 shadow-[0_16px_30px_-24px_rgba(37,99,235,0.9)]">
            <Image
              src="/myxl.png"
              alt="Logo resmi aplikasi myXL untuk pelanggan internet rumah XLSATU"
              width={160}
              height={160}
              className="mx-auto h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <p className="mt-3 text-center text-sm font-medium text-slate-600">
              Tersedia di Android dan iOS untuk akses layanan kapan pun.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://apps.apple.com/id/search?term=myXL"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-white to-sky-50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-22px_rgba(56,189,248,0.9)]"
              aria-label="Download aplikasi myXL di App Store"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_22%,rgba(255,255,255,0.8)_46%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-myxl-cta-sheen" />
              <span className="relative flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white">
                  <Download className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">Download di</span>
                  <span className="block text-lg font-bold text-slate-900">App Store</span>
                </span>
              </span>
            </a>

            <a
              href="https://play.google.com/store/search?q=myXL&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-blue-500/35 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-20px_rgba(37,99,235,0.95)]"
              aria-label="Download aplikasi myXL di Google Play"
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_45%)] opacity-80" />
              <span className="relative flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Smartphone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-blue-100">Get it on</span>
                  <span className="block text-lg font-bold">Google Play</span>
                </span>
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json">{JSON.stringify(myxlAppStructuredData)}</script>
    </section>
  )
}
