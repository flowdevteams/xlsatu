'use client'

import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Landmark,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

interface CoverageRegion {
  id: string
  city: string
  area: string
  tagline: string
  covered: boolean
}

const jabodetabekRegions: CoverageRegion[] = [
  {
    id: 'jakarta',
    city: 'Jakarta',
    area: 'DKI Jakarta',
    tagline: 'Pusat bisnis, apartemen, dan perkantoran.',
    covered: true,
  },
  {
    id: 'bogor',
    city: 'Bogor',
    area: 'Kota & Kabupaten Bogor',
    tagline: 'Cocok untuk hunian keluarga dan area kampus.',
    covered: true,
  },
  {
    id: 'depok',
    city: 'Depok',
    area: 'Kota Depok',
    tagline: 'Layanan internet rumah untuk area suburban aktif.',
    covered: true,
  },
  {
    id: 'tangerang',
    city: 'Tangerang',
    area: 'Kota & Kabupaten Tangerang',
    tagline: 'Jaringan stabil untuk residensial dan komersial.',
    covered: true,
  },
  {
    id: 'bekasi',
    city: 'Bekasi',
    area: 'Kota & Kabupaten Bekasi',
    tagline: 'Dukungan penuh untuk cluster dan kawasan industri.',
    covered: true,
  },
]

const coverageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Layanan Internet Fiber XLSATU Jabodetabek',
  serviceType: 'Internet Fiber Rumah',
  areaServed: jabodetabekRegions.map((region) => region.area),
  provider: {
    '@type': 'Organization',
    name: 'XLSATU',
    url: 'https://daftarxlsatu.com',
  },
}

export function CoverageSection() {
  const coveredCount = jabodetabekRegions.filter((region) => region.covered).length
  const totalCount = jabodetabekRegions.length
  const selectedRegion = jabodetabekRegions[0]

  return (
    <section id="coverage" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-white">
      <div className="pointer-events-none absolute -top-14 left-1/4 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 right-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-16" duration={860}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Cek Jangkauan Internet Fiber di Jabodetabek
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Layanan internet rumah berfokus di Jakarta, Bogor, Depok, Tangerang, dan Bekasi untuk instalasi lebih cepat
            dan dukungan teknis yang lebih responsif.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-1 space-y-6">
            <ScrollReveal
              as="article"
              className="rounded-2xl border border-blue-200/70 bg-gradient-to-br from-sky-50 via-cyan-50/60 to-blue-100/60 p-6 sm:p-7 shadow-[0_20px_35px_-26px_rgba(37,99,235,0.9)]"
              delay={90}
              duration={760}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Coverage Jabodetabek</h3>
                  <p className="text-sm text-gray-600">Prioritas pemasangan cepat</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold">Wilayah Aktif</span>
                  <span className="text-3xl font-extrabold text-blue-700">
                    {coveredCount}/{totalCount}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-blue-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600"
                    style={{ width: `${(coveredCount / totalCount) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Seluruh area Jabodetabek sudah dalam cakupan layanan internet fiber XLSATU.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200/80 space-y-3">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                  <BadgeCheck className="h-4 w-4 text-green-600" />
                  Instalasi terjadwal dengan teknisi lokal
                </p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  Monitoring jaringan 24/7 untuk area utama
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal
              as="article"
              className="rounded-2xl border border-blue-200/70 bg-white p-6 shadow-[0_18px_34px_-24px_rgba(37,99,235,0.9)]"
              delay={160}
              duration={760}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                <Building2 className="h-4 w-4" />
                Area Terpilih
              </div>

              <h4 className="text-2xl font-bold text-gray-900">{selectedRegion.city}</h4>
              <p className="text-sm text-gray-600 mt-1">{selectedRegion.area}</p>
              <p className="text-gray-700 mt-4 leading-relaxed">{selectedRegion.tagline}</p>

              <div className="mt-5 flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                Tersedia untuk pemasangan
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {jabodetabekRegions.map((region, index) => (
                <ScrollReveal
                  as="article"
                  key={region.id}
                  delay={80 + index * 75}
                  duration={700}
                  threshold={0.08}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                    region.id === selectedRegion.id
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 via-cyan-50 to-white shadow-[0_18px_34px_-24px_rgba(37,99,235,0.9)]'
                      : 'border-blue-100 bg-white hover:border-blue-300 hover:shadow-[0_14px_28px_-24px_rgba(37,99,235,0.85)]'
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_50%)]" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Tersedia
                    </span>
                  </div>

                  <h3 className="relative mt-4 text-xl font-bold text-gray-900">{region.city}</h3>
                  <p className="relative mt-1 text-sm text-gray-600">{region.area}</p>
                  <p className="relative mt-4 text-sm leading-relaxed text-gray-700">{region.tagline}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal
              className="mt-8 rounded-2xl border border-blue-200/70 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 sm:p-7"
              delay={180}
              duration={780}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Fokus Layanan Jabodetabek</h3>
                  <p className="text-gray-600 mt-2">
                    Prioritas pemasangan untuk area padat hunian dan bisnis agar proses aktivasi lebih cepat.
                  </p>
                </div>
                <div className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                  Aktivasi cepat area Jabodetabek
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <script type="application/ld+json">{JSON.stringify(coverageStructuredData)}</script>
    </section>
  )
}
