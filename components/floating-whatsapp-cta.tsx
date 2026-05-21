'use client'

import { MessageCircleMore, Sparkles } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/628218046225?text=Halo%20XLSATU%2C%20saya%20ingin%20pendaftaran%20cepat%20internet%20rumah.'

export function FloatingWhatsappCTA() {
  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[80] sm:right-6">
      <div className="relative flex animate-floating-cta flex-col items-end gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pendaftaran cepat via WhatsApp"
          className="group pointer-events-auto relative overflow-hidden rounded-2xl border border-cyan-300/60 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-3 text-white shadow-[0_20px_36px_-20px_rgba(14,165,233,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_44px_-22px_rgba(37,99,235,0.95)]"
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.3)_48%,transparent_76%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-cta-sheen" />
          <span className="relative flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-100" />
            <span className="text-sm font-semibold leading-tight sm:text-base">
              Daftar lebih cepat
              <br />
              via WhatsApp
            </span>
          </span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka WhatsApp XLSATU"
          className="group pointer-events-auto relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/80 bg-white/90 text-blue-600 shadow-[0_18px_34px_-18px_rgba(37,99,235,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-sky-600 sm:h-20 sm:w-20"
        >
          <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-br from-cyan-400/45 via-blue-400/35 to-transparent opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-white/70" />
          <span className="pointer-events-none absolute inset-1 rounded-full border border-cyan-200/70 bg-gradient-to-br from-white to-sky-50/95" />
          <span className="pointer-events-none absolute inset-2 rounded-full border border-blue-100/80 bg-white/90 shadow-inner" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-cyan-300/80 opacity-80 animate-cta-ping-ring" />
          <MessageCircleMore className="relative h-8 w-8 drop-shadow-[0_4px_8px_rgba(37,99,235,0.35)] sm:h-9 sm:w-9" />
        </a>
      </div>
    </div>
  )
}
