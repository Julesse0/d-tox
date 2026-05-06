import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F6F1E8]">
      <div className="absolute inset-0">
        <Image
          src={siteImages.heroBackground}
          alt=""
          fill
          className="object-cover opacity-[0.88]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.36),rgba(246,241,232,0.18)_46%,rgba(246,241,232,0.68))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,241,232,0)_0%,rgba(246,241,232,0.28)_76%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#B7A680] font-medium">
              Kombucha Artisanal
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] leading-none tracking-tight text-balance">
              D-tox
            </h1>
            <p className="mx-auto max-w-2xl font-sans font-light text-lg md:text-xl text-[#1A1A1A]/68 leading-relaxed">
              {"Kombucha vivant, brasse avec soin pour une pause plus chaleureuse, plus accessible et pleine de caractere."}
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/produits"
              className="inline-flex items-center justify-center gap-2 bg-[#704919] px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#826730]"
            >
              Voir Nos Produits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A1A]/38">Defiler</span>
        <div className="w-px h-8 bg-[#704919]/24" />
      </div>
    </section>
  )
}
