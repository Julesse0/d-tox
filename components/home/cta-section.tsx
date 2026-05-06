import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-[#704919] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Pret a passer au kombucha D-tox ?
        </h2>
        <p className="font-sans font-light text-lg text-white/72 max-w-xl mx-auto mb-10 leading-relaxed">
          Decouvrez nos produits artisanaux et retrouvez aussi nos rubriques News, Recettes et Presse.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 bg-white text-[#704919] px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-[#F6F1E8] transition-colors"
          >
            Nos Produits
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact#formulaire"
            className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-sans text-sm uppercase tracking-widest font-light hover:border-white transition-colors"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
