'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Sparkles, X } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/6285942010910?text=Halo%20XLSATU%2C%20saya%20ingin%20konsultasi%20paket%20internet%20rumah.'

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#paket', label: 'Paket' },
  { href: '#coverage', label: 'Cek Coverage' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="sticky top-0 z-50 px-3 pt-2 sm:px-6 sm:pt-3 bg-gradient-to-b from-sky-100/90 via-blue-50/75 to-transparent">
      <div
        className={`relative mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? 'border-cyan-300/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_40px_-24px_rgba(14,116,144,0.85)]'
            : 'border-sky-200/60 bg-white/55 backdrop-blur-md shadow-[0_14px_30px_-24px_rgba(59,130,246,0.7)]'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,0.22),transparent_38%),radial-gradient(circle_at_88%_0%,rgba(37,99,235,0.18),transparent_44%)]" />
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent" />

        <div className="relative flex h-16 items-center justify-between px-3 sm:px-5">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90" aria-label="Xl Satu Home">
            <Image
              src="/xlsatu.png"
              alt="Xl Satu"
              width={1094}
              height={1094}
              priority
              quality={100}
              sizes="(max-width: 768px) 112px, 116px"
              className="h-28 sm:h-[116px] w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-600" />
              </span>
              Fiber Ready
            </div>

            <div className="flex items-center gap-1 rounded-full border border-sky-200/70 bg-white/80 px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:shadow-[0_12px_24px_-16px_rgba(37,99,235,0.85)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(37,99,235,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500"
            >
              <Sparkles className="h-4 w-4" />
              Hubungi Kami
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden rounded-xl border border-sky-200/80 bg-white/80 p-2 text-slate-700 shadow-[0_10px_20px_-18px_rgba(59,130,246,0.9)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:text-cyan-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="relative px-3 pb-3 md:hidden">
            <div className="rounded-2xl border border-sky-200/70 bg-white/85 p-2 shadow-[0_18px_30px_-24px_rgba(37,99,235,0.95)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mb-1 block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_10px_18px_-12px_rgba(37,99,235,0.9)] transition-all hover:from-cyan-400 hover:to-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
