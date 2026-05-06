import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-[#F6F1E8] px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="rounded-lg border border-[#704919]/12 bg-[linear-gradient(160deg,rgba(255,250,243,0.96),rgba(227,207,177,0.58))] px-6 py-14 shadow-[0_18px_44px_rgba(112,73,25,0.08)] sm:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">
            Pret a passer au kombucha D-tox ?
          </h2>
          <p className="font-sans font-light text-lg text-[#1A1A1A]/68 max-w-xl mx-auto mb-10 leading-relaxed">
            Decouvrez nos produits artisanaux et retrouvez aussi nos rubriques News, Recettes et Presse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 bg-[#704919] text-white px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-[#826730] transition-colors"
            >
              Nos Produits
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact#formulaire"
              className="inline-flex items-center gap-2 border border-[#704919]/22 text-[#704919] px-8 py-4 font-sans text-sm uppercase tracking-widest font-light hover:border-[#704919] transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
