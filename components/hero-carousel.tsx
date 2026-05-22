'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  BadgeDollarSign,
  ChevronLeft,
  ChevronRight,
  CircleArrowRight,
  MapPinned,
  MessageCircleMore,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

interface Slide {
  id: number
  src: string
  alt: string
}

const slides: Slide[] = [
  {
    id: 1,
    src: '/banner/banner1.png',
    alt: 'Banner internet rumah fiber optic XLSATU',
  },
  {
    id: 2,
    src: '/banner/banner2.png',
    alt: 'Banner promo internet rumah dengan bonus kuota XL SATU',
  },
  {
    id: 3,
    src: '/banner/banner3.png',
    alt: 'Banner layanan internet rumah cepat dan stabil',
  },
]

const whatsappUrl =
  'https://wa.me/6285942010910?text=Halo%20XLSATU%2C%20saya%20ingin%20pendaftaran%20cepat%20internet%20rumah.'

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="home" className="relative mt-4 pb-8 pt-2 overflow-hidden" aria-label="Carousel banner utama">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/85 via-blue-50 to-cyan-50" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6">
        <ScrollReveal
          className="relative aspect-[16/9] sm:aspect-[18/8] lg:aspect-[21/8] overflow-hidden rounded-[2rem] border border-sky-200/70 shadow-[0_30px_60px_-40px_rgba(37,99,235,0.85)]"
          variant="zoom"
          duration={900}
          threshold={0.22}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                quality={100}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/8 via-transparent to-blue-900/12" />
            </div>
          ))}

          <button
            onClick={goToPrevious}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 rounded-2xl border border-white/75 bg-white/80 p-2.5 shadow-[0_12px_22px_-18px_rgba(37,99,235,0.95)] backdrop-blur-md transition-all duration-300 hover:bg-white z-10"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 rounded-2xl border border-white/75 bg-white/80 p-2.5 shadow-[0_12px_22px_-18px_rgba(37,99,235,0.95)] backdrop-blur-md transition-all duration-300 hover:bg-white z-10"
            aria-label="Slide berikutnya"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-3 py-2 backdrop-blur-md">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-600' : 'w-2.5 bg-blue-200 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="mt-5 sm:mt-6 rounded-2xl border border-sky-200/70 bg-white/70 p-3 sm:p-4 shadow-[0_18px_34px_-24px_rgba(37,99,235,0.9)] backdrop-blur-xl"
          duration={820}
          delay={90}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <ScrollReveal as="div" className="h-full" delay={120} duration={740} threshold={0.12}>
              <Link
                href="#coverage"
                className="group relative block h-full overflow-hidden rounded-xl border border-sky-200/80 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_-20px_rgba(37,99,235,0.9)]"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-600">Akses Cepat</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">Cek Coverage Area</p>
                  </div>
                </div>
                <CircleArrowRight className="absolute right-3 top-3 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </ScrollReveal>

            <ScrollReveal as="div" className="h-full" delay={220} duration={740} threshold={0.12}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-xl border border-blue-400/30 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(37,99,235,0.95)]"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <MessageCircleMore className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-blue-100">Pendaftaran Cepat</p>
                    <p className="text-base sm:text-lg font-bold">Via WhatsApp</p>
                  </div>
                </div>
                <CircleArrowRight className="absolute right-3 top-3 h-5 w-5 text-white/90 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>

            <ScrollReveal as="div" className="h-full" delay={320} duration={740} threshold={0.12}>
              <Link
                href="#paket"
                className="group relative block h-full overflow-hidden rounded-xl border border-sky-200/80 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_-20px_rgba(37,99,235,0.9)]"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                    <BadgeDollarSign className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-600">Lihat Detail</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">Cek Harga Paket</p>
                  </div>
                </div>
                <CircleArrowRight className="absolute right-3 top-3 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
