import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { FeaturesSection } from '@/components/features-section'
import { PricingSection } from '@/components/pricing-section'
import { CoverageSection } from '@/components/coverage-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsappCTA } from '@/components/floating-whatsapp-cta'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-blue-700 focus:shadow-lg"
      >
        Lanjut ke konten utama
      </a>
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">
        <h1 className="sr-only">Pusat Pendaftaran XL Satu Fiber Resmi Jabodetabek</h1>
        <header>
          <Navbar />
          <HeroCarousel />
        </header>
        <FeaturesSection />
        <PricingSection />
        <CoverageSection />
        <FAQSection />
        <Footer />
        <FloatingWhatsappCTA />
      </main>
    </>
  )
}
