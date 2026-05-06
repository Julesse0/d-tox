import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const products = [
  {
    name: "D-tox Original 1L",
    description: "Le grand format signature de D-tox, avec une lecture plus simple et une touche plus chaleureuse.",
    image: siteImages.dtoxBottle1L,
    href: "/produits/d-tox",
  },
  {
    name: "Chateau de la Crau",
    description: "La cuvee d'exception de la maison, conservee dans le meme esprit mais avec une palette plus douce.",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
  },
]

export default function BestsellersSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#B7A680] font-medium mb-4">
              Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F1E8] text-balance">
              Nos Produits
            </h2>
          </div>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-[#B7A680] hover:text-[#F6F1E8] transition-colors"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group">
              <div className="flex flex-col gap-6 rounded-[1.45rem] border border-white/10 bg-[#231f1d] p-6 md:p-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_top,#f6f1e8_0%,#e8dcc7_55%,#d8c4a4_100%)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-xl font-semibold text-[#F6F1E8] uppercase tracking-wide group-hover:text-[#B7A680] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-[#F6F1E8]/60">
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
