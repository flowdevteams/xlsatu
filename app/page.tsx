import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { FeaturesSection } from '@/components/features-section'
import { PricingSection } from '@/components/pricing-section'
import { MyXLAppSection } from '@/components/myxl-app-section'
import { CoverageSection } from '@/components/coverage-section'
import { FAQSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsappCTA } from '@/components/floating-whatsapp-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">
      <Navbar />
      <HeroCarousel />
      <FeaturesSection />
      <PricingSection />
      <MyXLAppSection />
      <CoverageSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsappCTA />

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Lanjut ke konten utama
      </a>
    </main>
  )
}
