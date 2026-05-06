"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div
      id="formulaire"
      className="scroll-mt-32 rounded-lg border border-[rgba(246,191,90,0.12)] bg-white/90 p-6 shadow-[0_14px_34px_rgba(36,28,20,0.06)] sm:p-8"
    >
      <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-[var(--brand-rock)]">
        Formulaire
      </p>
      <h2 className="mt-3 font-serif text-3xl font-extrabold text-[var(--brand-ink)] sm:text-4xl">
        Envoyez-nous un message
      </h2>
      <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-[rgba(36,28,20,0.68)]">
        Une question sur nos saveurs, la distribution ou un partenariat ? Ecrivez-nous directement ici.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(36,28,20,0.72)]"
          >
            Votre nom*
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12 w-full rounded-md border border-[rgba(246,191,90,0.16)] bg-[rgba(183,166,128,0.12)] px-4 font-sans text-sm text-[var(--brand-ink)] placeholder:text-[rgba(36,28,20,0.42)] transition-colors focus:border-[var(--brand-rock)] focus:bg-white focus:outline-none"
            placeholder="Nom complet"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(36,28,20,0.72)]"
          >
            Votre email*
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12 w-full rounded-md border border-[rgba(246,191,90,0.16)] bg-[rgba(183,166,128,0.12)] px-4 font-sans text-sm text-[var(--brand-ink)] placeholder:text-[rgba(36,28,20,0.42)] transition-colors focus:border-[var(--brand-rock)] focus:bg-white focus:outline-none"
            placeholder="email@exemple.com"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(36,28,20,0.72)]"
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="h-12 w-full rounded-md border border-[rgba(246,191,90,0.16)] bg-[rgba(183,166,128,0.12)] px-4 font-sans text-sm text-[var(--brand-ink)] placeholder:text-[rgba(36,28,20,0.42)] transition-colors focus:border-[var(--brand-rock)] focus:bg-white focus:outline-none"
            placeholder="Distribution, partenariat, question produit..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(36,28,20,0.72)]"
          >
            Votre message
          </label>
          <textarea
            id="message"
            rows={7}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[190px] w-full resize-none rounded-md border border-[rgba(246,191,90,0.16)] bg-[rgba(183,166,128,0.12)] px-4 py-4 font-sans text-sm text-[var(--brand-ink)] placeholder:text-[rgba(36,28,20,0.42)] transition-colors focus:border-[var(--brand-rock)] focus:bg-white focus:outline-none"
            placeholder="Parlez-nous de votre besoin..."
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#be2c34] px-8 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#9f2229]"
        >
          Envoyer
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
