import Link from "next/link"
import { ArrowRight } from "lucide-react"

import ContactForm from "@/components/contact/contact-form"
import { siteContact } from "@/lib/site-content"

export default function HomeContactSection() {
  return (
    <section className="bg-[#F6F1E8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-[#1A1A1A]/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(246,241,232,0.72))] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.08)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:p-8">
          <div className="space-y-5">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#704919]">
              Contact
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1A1A1A] md:text-5xl">
              Une question, une boutique, un projet ?
            </h2>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#1A1A1A]/68">
              Pour une demande pro, une question produit ou un partenariat, ecrivez-nous directement via le formulaire.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#formulaire"
                className="inline-flex items-center justify-center gap-2 bg-[#704919] px-6 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#826730]"
              >
                Ouvrir le formulaire
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${siteContact.email}`}
                className="inline-flex items-center justify-center border border-[#1A1A1A]/12 px-6 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:border-[#704919] hover:text-[#704919]"
              >
                Ecrire par email
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
