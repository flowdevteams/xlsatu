import { Check, MessageCircle, Router, Sparkles, Wifi } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

interface InternetPackage {
  id: string
  name: string
  speedMbps: number
  idealFor: string[]
  maxDevices: number
  installationText: string
  monthlyPrice: number
  monthlyPriceAfterTax: number
}

const WHATSAPP_NUMBER = '6285942010910'
const VAT_PERCENT = 11

const internetPackages: InternetPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    speedMbps: 20,
    idealFor: ['Browsing', 'Social Media'],
    maxDevices: 3,
    installationText: 'Biaya Instalasi Rp100.000,- + Router',
    monthlyPrice: 189000,
    monthlyPriceAfterTax: 209790,
  },
  {
    id: 'value',
    name: 'Value',
    speedMbps: 30,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD'],
    maxDevices: 5,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 219000,
    monthlyPriceAfterTax: 243090,
  },
  {
    id: 'smart',
    name: 'Smart',
    speedMbps: 250,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD'],
    maxDevices: 7,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 229000,
    monthlyPriceAfterTax: 254190,
  },
  {
    id: 'family',
    name: 'Family',
    speedMbps: 350,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD'],
    maxDevices: 8,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 279000,
    monthlyPriceAfterTax: 309690,
  },
  {
    id: 'superuser',
    name: 'Superuser',
    speedMbps: 400,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD', 'Streaming 4K'],
    maxDevices: 10,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 369000,
    monthlyPriceAfterTax: 409590,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    speedMbps: 300,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD', 'Streaming 4K', 'Video Conference'],
    maxDevices: 12,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 400000,
    monthlyPriceAfterTax: 444000,
  },
  {
    id: 'ultra',
    name: 'Ultra',
    speedMbps: 600,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD', 'Streaming 4K', 'Video Conference'],
    maxDevices: 15,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 500000,
    monthlyPriceAfterTax: 555000,
  },
  {
    id: 'extreme',
    name: 'Extreme',
    speedMbps: 1000,
    idealFor: ['Browsing', 'Social Media', 'Streaming HD', 'Streaming 4K', 'Video Conference'],
    maxDevices: 18,
    installationText: 'Gratis Biaya Instalasi dan Router',
    monthlyPrice: 900000,
    monthlyPriceAfterTax: 999000,
  },
]

const pricingStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Daftar Paket Internet Fiber XLSATU',
  description: 'Paket internet rumah dengan kecepatan 20 Mbps sampai 1000 Mbps.',
  itemListElement: internetPackages.map((pkg, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: `Paket ${pkg.name} ${pkg.speedMbps} Mbps`,
      serviceType: 'Layanan Internet Fiber',
      areaServed: 'ID',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        price: pkg.monthlyPrice,
        availability: 'https://schema.org/InStock',
        eligibleRegion: 'ID',
        priceSpecification: [
          {
            '@type': 'UnitPriceSpecification',
            name: 'Harga Bulanan',
            priceCurrency: 'IDR',
            price: pkg.monthlyPrice,
            valueAddedTaxIncluded: false,
          },
          {
            '@type': 'UnitPriceSpecification',
            name: `Harga Setelah PPN ${VAT_PERCENT}%`,
            priceCurrency: 'IDR',
            price: pkg.monthlyPriceAfterTax,
            valueAddedTaxIncluded: true,
          },
        ],
      },
    },
  })),
}

function formatRupiah(amount: number): string {
  return `Rp${new Intl.NumberFormat('id-ID').format(amount)},-`
}

function getWhatsAppLink(packageName: string, speedMbps: number): string {
  const message = `Halo XLSATU, saya tertarik paket ${packageName} ${speedMbps} Mbps. Tolong cek ketersediaan jaringan di lokasi saya.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function PricingSection() {
  return (
    <section
      id="paket"
      className="relative isolate scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 via-sky-50 to-cyan-50 overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-16" duration={860}>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Promo Paket Internet XL Satu Untuk Wilayah Jabodetabek!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Cek biaya pasang internet XL Satu rumah dari paket Starter sampai Extreme Untuk Wilayah Jabodetabek, Termasuk promo gratis biaya instalasi
            dan router pada paket tertentu.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {internetPackages.map((pkg, index) => {
            const speedProgress = Math.max(8, Math.round((pkg.speedMbps / 1000) * 100))
            const isBestSeller = pkg.id === 'smart'

            return (
              <ScrollReveal
                as="article"
                key={pkg.id}
                id={pkg.id}
                delay={80 + index * 75}
                duration={760}
                threshold={0.1}
                className={`group relative rounded-3xl overflow-hidden border border-blue-200/70 bg-gradient-to-b from-white via-blue-50/40 to-white shadow-[0_20px_50px_-30px_rgba(30,64,175,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_55px_-22px_rgba(14,116,144,0.65)] ${isBestSeller ? 'ring-2 ring-amber-300/90 shadow-[0_26px_60px_-26px_rgba(251,191,36,0.75)] lg:scale-[1.02]' : ''}`}
                itemScope
                itemType="https://schema.org/Service"
                aria-label={`Paket ${pkg.name} ${pkg.speedMbps} Mbps`}
              >
                {isBestSeller && (
                  <>
                    <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle,rgba(251,191,36,0.26),transparent_62%)] blur-2xl" />
                    <div className="pointer-events-none absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 px-3 py-1 text-xs font-black tracking-wide text-slate-900 shadow-[0_10px_25px_-14px_rgba(245,158,11,0.95)] animate-pulse">
                      <Sparkles className="h-3.5 w-3.5" />
                      BEST SELLER
                    </div>
                  </>
                )}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_44%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 px-6 py-5">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.22)_35%,transparent_55%)] opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700" />
                  <h3 className="relative text-2xl font-bold text-white" itemProp="name">{pkg.name}</h3>
                </div>

                <div className="relative px-6 py-5 border-b border-blue-100/80">
                  <div className="h-3 rounded-full bg-sky-100/80 overflow-hidden mb-5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-800 transition-all duration-700"
                      style={{ width: `${speedProgress}%` }}
                    />
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-lg font-semibold text-slate-800">Kecepatan Internet</p>
                    <div className="leading-none text-right">
                      <span className="text-5xl font-extrabold tracking-tight text-blue-800">{pkg.speedMbps}</span>
                      <span className="text-xl text-slate-700 ml-1">MBPS</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-6 border-b border-blue-100/80">
                  <p className="text-2xl font-bold text-slate-900 mb-4">Ideal untuk kamu:</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`Penggunaan ideal paket ${pkg.name}`}>
                    {pkg.idealFor.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-700 to-cyan-700 text-white text-sm font-medium transition-transform duration-300 group-hover:-translate-y-0.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-6 border-b border-blue-100/80 space-y-3">
                  <p className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                    <Router className="w-5 h-5 text-blue-700" />
                    Hingga {pkg.maxDevices} perangkat
                  </p>
                  <p className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                    <Wifi className="w-5 h-5 text-cyan-700" />
                    {pkg.installationText}
                  </p>
                </div>

                <div className="px-6 py-6">
                  {isBestSeller && (
                    <p className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1 text-sm font-bold text-amber-800 mb-3">
                      <Sparkles className="w-4 h-4" />
                      Paket paling banyak dipilih
                    </p>
                  )}
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-800 mb-2">Hanya {formatRupiah(pkg.monthlyPrice)}/bulan</p>
                  <p className="text-xl text-slate-500 mb-6">
                    Harga Setelah PPN <strong>{formatRupiah(pkg.monthlyPriceAfterTax)}/bulan</strong>
                  </p>
                  <a
                    href={getWhatsAppLink(pkg.name, pkg.speedMbps)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold px-5 py-3 transition-all duration-300 shadow-[0_10px_25px_-14px_rgba(8,145,178,0.9)] hover:shadow-[0_18px_28px_-16px_rgba(30,64,175,0.95)] hover:-translate-y-0.5"
                    aria-label={`Cek jaringan untuk paket ${pkg.name}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cek Jaringan via WhatsApp
                  </a>
                </div>

                <div className="sr-only">
                  <meta itemProp="url" content={`https://daftarxlsatu.com/#${pkg.id}`} />
                  <meta itemProp="serviceType" content="Layanan Internet Fiber" />
                  <meta itemProp="areaServed" content="Indonesia" />
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="IDR" />
                    <meta itemProp="price" content={String(pkg.monthlyPrice)} />
                    <link itemProp="availability" href="https://schema.org/InStock" />
                    <meta itemProp="category" content="Paket Internet Fiber" />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal
          className="mt-12 bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/70 rounded-2xl border border-blue-200/70 shadow-[0_22px_40px_-28px_rgba(30,64,175,0.8)] p-6 sm:p-8"
          duration={860}
          delay={150}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Kenapa Paket Ini Efektif untuk Kebutuhan Rumah dan Bisnis?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              Rentang kecepatan lengkap dari 20 Mbps hingga 1000 Mbps.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              Harga bulanan dan harga setelah PPN ditampilkan transparan.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              Rekomendasi penggunaan jelas: browsing, social media, streaming, sampai video conference.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              Konversi lead lebih cepat dengan CTA WhatsApp langsung per paket.
            </li>
          </ul>
        </ScrollReveal>

        <script type="application/ld+json">{JSON.stringify(pricingStructuredData)}</script>
      </div>
    </section>
  )
}
