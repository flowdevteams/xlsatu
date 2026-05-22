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
    question: 'Berapa lama proses instalasi internet?',
    answer:
      'Proses instalasi internet kami biasanya memakan waktu 3-5 hari kerja setelah Anda melakukan pemesanan. Tim teknisi profesional kami akan menghubungi untuk menjadwalkan waktu instalasi yang sesuai dengan ketersediaan Anda. Khusus paket Starter dikenakan biaya instalasi Rp100.000, sementara paket Value hingga Extreme gratis biaya instalasi.',
  },
  {
    id: 'faq-2',
    question: 'Apakah ada biaya setup atau biaya tambahan?',
    answer:
      'Kami menampilkan harga paket secara transparan, termasuk harga setelah PPN. Untuk biaya instalasi, paket Starter dikenakan Rp100.000 dan paket Value ke atas gratis biaya instalasi. Tidak ada biaya setup tersembunyi di luar komponen tersebut.',
  },
  {
    id: 'faq-3',
    question: 'Apakah saya bisa upgrade atau downgrade paket kapan saja?',
    answer:
      'Tentu saja! Anda dapat mengupgrade atau downgrade paket Anda kapan saja tanpa penalti atau biaya tambahan. Perubahan akan efektif pada siklus billing berikutnya. Hubungi customer service kami atau gunakan aplikasi mobile untuk mengubah paket Anda.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana dengan dukungan teknis jika ada masalah?',
    answer:
      'Tim dukungan teknis kami tersedia 24/7 untuk membantu Anda. Anda dapat menghubungi kami melalui telepon (0859-4201-0910) atau WhatsApp resmi XLSATU. Response time kami rata-rata kurang dari 15 menit untuk urgent issues.',
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
      'Kecepatan yang kami promosikan adalah kecepatan minimum yang dijamin. Kecepatan actual dapat bervariasi tergantung pada beberapa faktor seperti kualitas perangkat, jarak dari base station, dan beban jaringan. Kami menjamin kecepatan minimal sesuai paket Anda.',
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

export function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16" duration={860}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Temukan jawaban untuk pertanyaan umum tentang layanan, paket, dan dukungan pelanggan kami
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
            Hubungi Customer Service
          </a>
        </ScrollReveal>

        {/* Schema.org FAQ Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
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
