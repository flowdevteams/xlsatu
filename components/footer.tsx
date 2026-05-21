'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const mainLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#fitur', label: 'Keunggulan' },
  { href: '#paket', label: 'Paket & Harga' },
  { href: '#coverage', label: 'Cek Coverage' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Hubungi Kami' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-cyan-900 text-blue-50">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <ScrollReveal as="div" duration={800} delay={60}>
            <Link href="#home" className="inline-flex items-center" aria-label="Kembali ke Beranda">
              <Image
                src="/xlsatu.png"
                alt="XLSATU"
                width={1094}
                height={1094}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-blue-100/90 max-w-md">
              Layanan internet fiber optik dengan koneksi cepat, stabil, dan dukungan teknis responsif untuk kebutuhan rumah
              maupun bisnis.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+62800111222"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-cyan-300" />
                +62 (800) 111 222
              </a>
              <a
                href="mailto:support@internetid.com"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                support@internetid.com
              </a>
              <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur-md">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Jakarta Selatan, Indonesia
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal as="div" duration={800} delay={140}>
            <h4 className="text-base font-semibold tracking-wide text-cyan-100 mb-4">Navigasi Website</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-lg px-3 py-2 text-sm text-blue-100/90 transition-all hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal as="div" duration={800} delay={220}>
            <h4 className="text-base font-semibold tracking-wide text-cyan-100 mb-4">Butuh Respon Cepat?</h4>
            <p className="text-sm text-blue-100/90 leading-relaxed mb-5">
              Tim kami siap bantu cek jaringan, konsultasi paket, dan jadwal instalasi sesuai lokasi Anda.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/628218046225?text=Halo%20XLSATU%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(14,165,233,0.95)] transition-all hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500"
              >
                Cek Jaringan via WhatsApp
              </a>
              <Link
                href="#contact"
                className="inline-flex justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-blue-50 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Form Hubungi Kami
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          className="mt-10 border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          duration={760}
          delay={140}
        >
          <p className="text-xs sm:text-sm text-blue-100/80 text-center sm:text-left">
            &copy; {currentYear} XLSATU. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors">
              Robots
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'XLSATU',
          url: 'https://internetid.com',
          logo: 'https://internetid.com/favicon.png',
          description: 'Penyedia layanan internet fiber optik terpercaya di Indonesia',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+62-800-111-222',
            email: 'support@internetid.com',
            availableLanguage: 'id',
          },
        })}
      </script>
    </footer>
  )
}
