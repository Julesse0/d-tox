import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const collections = [
  {
    name: "DTÖX Original 1L",
    image: siteImages.dtoxBottle1L,
    href: "/produits/d-tox",
    imageClassName: "object-contain p-10",
  },
  {
    name: "Château de la Crau",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
    imageClassName: "object-contain p-2",
  },
]

export default function ProduitsPage() {
  return (
    <main className="bg-[#FFF9EB] min-h-screen">
      <Navigation variant="light" />

      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#be2c34] font-medium">
              Sélection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] text-balance">
              Nos Produits
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href} className="group flex flex-col">
                <div className="relative mb-8 aspect-[3/4] overflow-hidden rounded-lg border border-[#be2c34]/10 bg-[linear-gradient(160deg,#fffdf9_0%,#FFF9EB_58%,#FFECBC_100%)]">
                  <Image
                    src={collection.image}
                    alt={`Collection ${collection.name}`}
                    fill
                    className={`${collection.imageClassName} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>
                <h2 className="mb-4 font-serif text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                  {collection.name}
                </h2>
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#be2c34] group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
