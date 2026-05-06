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
    imageClassName: "object-contain p-8",
  },
  {
    name: "Chateau de la Crau",
    description: "La cuvee d'exception de la maison, conservee dans le meme esprit mais avec une palette plus douce.",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
    imageClassName: "object-contain p-0",
  },
]

export default function BestsellersSection() {
  return (
    <section className="bg-[#F6F1E8] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#B7A680] font-medium mb-4">
              Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] text-balance">
              Nos Produits
            </h2>
          </div>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-[#704919] hover:text-[#826730] transition-colors"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group">
              <div className="flex flex-col gap-6 rounded-lg border border-[#704919]/10 bg-[rgba(255,250,243,0.82)] p-6 shadow-[0_18px_44px_rgba(36,28,20,0.06)] md:p-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[linear-gradient(160deg,#fffdf9_0%,#f1e7d9_58%,#e3cfb1_100%)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`${product.imageClassName} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#704919] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-[#1A1A1A]/62">
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
