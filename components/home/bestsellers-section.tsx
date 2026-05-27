import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const products = [
  {
    name: "DTÖX Original 1L",
    image: siteImages.dtoxBottle1L,
    href: "/produits/d-tox",
    imageClassName: "object-contain p-8",
  },
  {
    name: "Château de la Crau",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
    imageClassName: "object-contain p-0",
  },
]

export default function BestsellersSection() {
  return (
    <section className="bg-[#FFF9EB] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#be2c34] font-semibold mb-4">
              Sélection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] text-balance">
              Nos Produits
            </h2>
          </div>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#be2c34] transition-colors hover:text-[#9f2229]"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group">
              <div className="flex flex-col gap-6 rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_44px_rgba(0,0,0,0.05)] md:p-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#FFF9EB]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`${product.imageClassName} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#be2c34] transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
