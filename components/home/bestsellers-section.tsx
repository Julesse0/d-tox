import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const products = [
  {
    name: "D-tox Original 1L",
    description: "Le grand format signature de D-tox, avec un rendu plus net et plus premium.",
    image: siteImages.dtoxBottle1L,
    href: "/produits/d-tox",
  },
  {
    name: "Chateau de la Crau",
    description: "La cuvee d'exception de la maison, presentee ici avec sa bouteille detouree.",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
  },
]

export default function BestsellersSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium mb-4">
              Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9D9B9] text-balance">
              Nos Produits
            </h2>
          </div>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-[#761218] hover:text-[#8f1a21] transition-colors"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group">
              <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#231f1d] p-6 md:p-8">
                {/* Image */}
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-xl font-semibold text-[#F9D9B9] uppercase tracking-wide group-hover:text-[#761218] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-[#F9D9B9]/60">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
