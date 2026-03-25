"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <main className="bg-[#F9D9B9] min-h-screen">
      <Navigation variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium">
              Parlons
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] text-balance">
              Contact
            </h1>
            <p className="font-sans font-light text-lg text-[#1A1A1A]/60 max-w-xl mx-auto leading-relaxed">
              Une question sur nos saveurs, la distribution ou un partenariat ? Notre equipe vous repond rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-8">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#1A1A1A] p-8 flex flex-col gap-4">
                  <Mail className="h-6 w-6 text-[#761218]" />
                  <h3 className="font-serif text-lg font-semibold text-[#F9D9B9]">Email</h3>
                  <p className="font-sans font-light text-sm text-[#F9D9B9]/60">contact@d-tox.fr</p>
                </div>
                <div className="bg-[#1A1A1A] p-8 flex flex-col gap-4">
                  <Phone className="h-6 w-6 text-[#761218]" />
                  <h3 className="font-serif text-lg font-semibold text-[#F9D9B9]">Telephone</h3>
                  <p className="font-sans font-light text-sm text-[#F9D9B9]/60">+33 1 23 45 67 89</p>
                </div>
                <div className="bg-[#1A1A1A] p-8 flex flex-col gap-4">
                  <MapPin className="h-6 w-6 text-[#761218]" />
                  <h3 className="font-serif text-lg font-semibold text-[#F9D9B9]">Adresse</h3>
                  <p className="font-sans font-light text-sm text-[#F9D9B9]/60">Atelier D-tox, Lille, France</p>
                </div>
                <div className="bg-[#1A1A1A] p-8 flex flex-col gap-4">
                  <Instagram className="h-6 w-6 text-[#761218]" />
                  <h3 className="font-serif text-lg font-semibold text-[#F9D9B9]">Reseaux</h3>
                  <div className="flex items-center gap-3">
                    <a href="#" aria-label="Instagram" className="text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10">
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-medium">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#1A1A1A]/10 bg-transparent px-4 py-3 font-sans font-light text-sm text-[#1A1A1A] focus:border-[#761218] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-[#1A1A1A]/10 bg-transparent px-4 py-3 font-sans font-light text-sm text-[#1A1A1A] focus:border-[#761218] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-medium">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-[#1A1A1A]/10 bg-transparent px-4 py-3 font-sans font-light text-sm text-[#1A1A1A] focus:border-[#761218] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#1A1A1A]/10 bg-transparent px-4 py-3 font-sans font-light text-sm text-[#1A1A1A] focus:border-[#761218] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#761218] text-white px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-[#8f1a21] transition-colors mt-2"
                >
                  Envoyer
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
