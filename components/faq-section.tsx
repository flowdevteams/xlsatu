'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const WHATSAPP_URL =
  'https://wa.me/6285942010910?text=Halo%20XLSATU%2C%20saya%20ingin%20bantuan%20customer%20service.'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa harga paket XL Satu Fiber 2026?',
    answer:
      'Harga paket XL Satu Fiber 2026 mulai dari Rp189.000 per bulan (sebelum PPN) untuk paket Starter hingga Rp900.000 per bulan untuk paket Extreme. Detail harga setelah PPN ditampilkan transparan di setiap paket.',
  },
  {
    id: 'faq-2',
    question: 'Berapa biaya pasang internet XL Satu rumah?',
    answer:
      'Biaya pasang internet XL Satu rumah untuk paket Starter adalah Rp100.000. Paket Value sampai Extreme mendapatkan gratis biaya instalasi dan router sesuai promo aktif.',
  },
  {
    id: 'faq-3',
    question: 'Apakah XL Satu unlimited?',
    answer:
      'Ya, XL Satu Fiber menyediakan kuota WiFi unlimited untuk kebutuhan rumah, streaming, meeting online, dan aktivitas harian keluarga.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana cara cek coverage area XL Satu via WhatsApp?',
    answer:
      'Klik tombol WhatsApp di halaman ini lalu kirim lokasi lengkap Anda. Sales resmi XL Satu Fiber akan membantu cek area jaringan XL Satu via WhatsApp untuk wilayah Jabodetabek dan kota lain di Indonesia.',
  },
  {
    id: 'faq-5',
    question: 'Apa itu jaminan uptime 99.9%?',
    answer:
      'Uptime 99.9% berarti layanan kami dapat down maksimal 43 menit per bulan. Jika kami gagal memenuhi SLA ini, Anda akan mendapatkan kompensasi kredit bulanan. Ini adalah komitmen kami terhadap keandalan dan kualitas layanan.',
  },
  {
    id: 'faq-6',
    question: 'Apakah ada kontrak jangka panjang?',
    answer:
      'Tidak ada! Kami tidak memiliki kontrak jangka panjang yang mengikat. Anda bebas untuk membatalkan layanan Anda kapan saja tanpa penalti. Kami percaya dengan memberikan layanan berkualitas, Anda akan ingin tetap bersama kami.',
  },
  {
    id: 'faq-7',
    question: 'Apa kecepatan internet yang sebenarnya yang akan saya dapatkan?',
    answer:
      'Kecepatan yang kami promosikan adalah kecepatan minimum yang dijamin. Kecepatan aktual dapat bervariasi tergantung pada beberapa faktor seperti kualitas perangkat, jarak dari titik jaringan, dan beban jaringan. Kami tetap menjamin kecepatan minimal sesuai paket Anda.',
  },
  {
    id: 'faq-8',
    question: 'Bagaimana cara cek coverage area saya?',
    answer:
      'Anda dapat menggunakan fitur "Cek Coverage" di halaman kami dengan memilih wilayah atau kota Anda. Jika wilayah Anda belum tercantum, Anda dapat mendaftar untuk mendapatkan notifikasi saat layanan kami hadir di area tersebut.',
  },
  {
    id: 'faq-9',
    question: 'Apakah router WiFi disertakan dalam paket?',
    answer:
      'Ya, perangkat modem/router disediakan saat instalasi agar layanan internet dapat langsung digunakan. Rekomendasi jumlah perangkat per paket dapat Anda lihat di daftar paket, mulai dari hingga 3 perangkat pada Starter sampai hingga 18 perangkat pada Extreme.',
  },
  {
    id: 'faq-10',
    question: 'Bagaimana proses pembayaran bulanan?',
    answer:
      'Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit, e-wallet, dan automatic billing. Anda dapat memilih metode pembayaran yang paling nyaman. Invoice akan dikirim sebelum tanggal jatuh tempo.',
  },
]

const faqSchemaItems = faqs.slice(0, 4)

export function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16" duration={860}>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Pertanyaan Umum Seputar Pemasangan XL Satu 
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Temukan jawaban cepat tentang harga paket XL Satu Untuk Wilayah Jabodetabek khusus nya area Tangerang dan sekitarnya, Informasi biaya pasang internet XL Satu, dan proses
            pendaftaran.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal
              as="div"
              key={faq.id}
              delay={70 + index * 45}
              duration={660}
              threshold={0.08}
              className="border border-blue-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 sm:py-5 flex items-start justify-between gap-4 bg-white hover:bg-blue-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-expanded={activeId === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    activeId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {activeId === faq.id && (
                <div
                  id={`faq-content-${faq.id}`}
                  className="px-6 py-5 bg-blue-50 border-t border-blue-200 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <p className="text-gray-700 leading-relaxed text-pretty">
                    {faq.answer}
                  </p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Help CTA */}
        <ScrollReveal
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 text-center"
          duration={840}
          delay={120}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Tim customer service kami siap membantu menjawab pertanyaan Anda. Hubungi kami kapan saja.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-block"
          >
            Hubungi Team Marketing Kami
          </a>
        </ScrollReveal>

        {/* Schema.org FAQ Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqSchemaItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </div>
    </section>
  )
}
