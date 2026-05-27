import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-[#FFECBC] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl text-center">
        <div className="rounded-lg border border-black/10 bg-white px-4 py-10 shadow-[0_18px_44px_rgba(0,0,0,0.05)] sm:px-8 sm:py-14">
          <h2 className="mb-5 font-serif text-3xl font-extrabold text-[#1A1A1A] text-balance md:text-4xl lg:text-5xl">
            Prêt à passer au kombucha DTÖX ?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-sans text-base font-light leading-relaxed text-[#1A1A1A]/68 sm:mb-10 sm:text-lg">
            Découvrez nos produits artisanaux et retrouvez aussi nos rubriques News, Recettes et Presse.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/produits"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#be2c34] px-8 py-4 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#9f2229]"
            >
              Nos Produits
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact#formulaire"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-8 py-4 font-sans text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#be2c34] hover:text-[#be2c34]"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
