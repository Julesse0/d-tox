import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-[#761218] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Pret a passer au kombucha D-tox ?
        </h2>
        <p className="font-sans font-light text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Decouvrez nos produits artisanaux et retrouvez nos deux references mises en avant sur le site.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 bg-white text-[#761218] px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-[#F9D9B9] transition-colors"
          >
            Nos Produits
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-sans text-sm uppercase tracking-widest font-light hover:border-white transition-colors"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
