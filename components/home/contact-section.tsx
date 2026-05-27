import Link from "next/link"
import { ArrowRight } from "lucide-react"

import ContactForm from "@/components/contact/contact-form"
import { siteContact } from "@/lib/site-content"

export default function HomeContactSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-black/10 bg-[#FFF9EB] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.06)] sm:p-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:p-8">
          <div className="space-y-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#be2c34]">
              Contact
            </p>
            <h2 className="font-serif text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl md:text-5xl">
              Une question, une boutique, un projet ?
            </h2>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#1A1A1A]/68">
              Pour une demande pro, une question produit ou un partenariat, écrivez-nous directement via le formulaire.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#formulaire"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#be2c34] px-6 py-3.5 font-sans text-[11px] font-semibold text-white transition-colors hover:bg-[#9f2229]"
              >
                Ouvrir le formulaire
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${siteContact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-black/20 px-6 py-3.5 font-sans text-[11px] font-semibold text-[#1A1A1A] transition-colors hover:border-[#be2c34] hover:text-[#be2c34]"
              >
                Écrire par email
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
