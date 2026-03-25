import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const collections = [
  {
    name: "D-tox Original 1L",
    description: "Le format signature de la marque, presente avec sa bouteille detouree.",
    image: siteImages.dtoxBottle1L,
    href: "/produits/d-tox",
  },
  {
    name: "Chateau de la Crau",
    description: "La cuvee d'exception de la maison, dans une presentation plus premium.",
    image: siteImages.chateauBottle,
    href: "/produits/chateau",
  },
]

export default function ProduitsPage() {
  return (
    <main className="bg-[#F9D9B9] min-h-screen">
      <Navigation variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium">
              Selection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] text-balance">
              Nos Produits
            </h1>
            <p className="font-sans font-light text-lg text-[#1A1A1A]/60 max-w-xl mx-auto leading-relaxed">
              Retrouvez les deux references mises en avant sur le site avec des visuels plus propres et sans prix.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href} className="group flex flex-col">
                <div className="relative mb-8 aspect-[3/4] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5e3cb_55%,#ebcfad_100%)]">
                  <Image
                    src={collection.image}
                    alt={`Collection ${collection.name}`}
                    fill
                    className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h2 className="mb-4 font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                  {collection.name}
                </h2>
                <p className="font-sans font-light text-sm leading-relaxed text-[#1A1A1A]/60 mb-4">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#761218] group-hover:gap-3 transition-all">
                  Decouvrir
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
