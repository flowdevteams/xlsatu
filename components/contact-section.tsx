'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    region: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '', region: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16" duration={860}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Hubungi Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Punya pertanyaan? Tim customer service kami siap membantu Anda 24 jam sehari, 7 hari seminggu
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <ScrollReveal
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
              duration={720}
              delay={80}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Hubungi kami langsung untuk konsultasi dan support
                  </p>
                  <a href="tel:+6285942010910" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    0859-4201-0910
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
              duration={720}
              delay={150}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Kirim email untuk pertanyaan atau keluhan
                  </p>
                  <a href="mailto:support@Xl Satu.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    support@Xl Satu.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
              duration={720}
              delay={220}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">Lokasi Kami</h4>
                  <p className="text-gray-600 text-sm">
                    Jl. Teknologi No. 123
                    <br />
                    Jakarta Selatan, Indonesia 12345
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal
              className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl p-6 shadow-lg"
              duration={720}
              delay={290}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2">Jam Layanan</h4>
                  <p className="text-sm opacity-90">
                    Senin - Jumat: 08:00 - 17:00
                    <br />
                    Sabtu: 09:00 - 14:00
                    <br />
                    Support 24/7 untuk emergency
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-lg"
              variant="fade-left"
              delay={120}
              duration={820}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan Kami</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  ✓ Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  ✗ Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0859-4201-0910"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Region */}
                <div>
                  <label htmlFor="region" className="block text-sm font-semibold text-gray-900 mb-2">
                    Wilayah/Kota
                  </label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-gray-900"
                  >
                    <option value="">Pilih wilayah</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="medan">Medan</option>
                    <option value="makassar">Makassar</option>
                    <option value="semarang">Semarang</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-gray-900 placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Kami berkomitmen untuk melindungi privasi Anda. Lihat{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Kebijakan Privasi
                  </a>
                  {' '}kami.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
