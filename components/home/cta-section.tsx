import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-[#FFECBC] px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="rounded-lg border border-black/10 bg-white px-6 py-14 shadow-[0_18px_44px_rgba(0,0,0,0.05)] sm:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 text-balance">
            Prêt à passer au kombucha D-tox ?
          </h2>
          <p className="font-sans font-light text-lg text-[#1A1A1A]/68 max-w-xl mx-auto mb-10 leading-relaxed">
            Découvrez nos produits artisanaux et retrouvez aussi nos rubriques News, Recettes et Presse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 rounded-full bg-[#be2c34] text-white px-8 py-4 font-sans text-sm font-semibold hover:bg-[#9f2229] transition-colors"
            >
              Nos Produits
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact#formulaire"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 text-[#1A1A1A] px-8 py-4 font-sans text-sm font-semibold transition-colors hover:border-[#be2c34] hover:text-[#be2c34]"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
