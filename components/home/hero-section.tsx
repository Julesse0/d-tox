import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteImages } from "@/lib/site-content"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1A1A1A] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={siteImages.heroBackground}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium">
              Kombucha Artisanal
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#F9D9B9] leading-none tracking-tight text-balance">
              D-tox
            </h1>
            <p className="mx-auto max-w-2xl font-sans font-light text-lg md:text-xl text-[#F9D9B9]/70 leading-relaxed">
              {"Kombucha vivant, brasse avec soin pour une pause plus saine, plus nette et pleine de caractere."}
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/produits"
              className="inline-flex items-center justify-center gap-2 bg-[#761218] px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#8f1a21]"
            >
              Voir Nos Produits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#F9D9B9]/40">Defiler</span>
        <div className="w-px h-8 bg-[#F9D9B9]/20" />
      </div>
    </section>
  )
}
