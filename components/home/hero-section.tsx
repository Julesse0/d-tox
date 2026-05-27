import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import fondHomeImage from "@/assets/fond home.png"
import reviewMedalImage from "@/assets/image-removebg-preview.png"
import medal2023Image from "@/assets/medal-2023-2.png"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FFF9EB]">
      <div className="absolute inset-0">
        <Image
          src={fondHomeImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,249,235,0.74)_0%,rgba(255,249,235,0.36)_42%,rgba(255,249,235,0)_72%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.75fr)]">
          <div className="flex max-w-3xl flex-col items-start gap-8 text-left">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#be2c34] font-semibold">
                Kombucha Artisanal
              </p>
              <h1 className="font-[var(--font-league-spartan)] text-6xl font-bold leading-none tracking-tight text-[#000000] text-balance md:text-7xl lg:text-8xl">
                DT<span className="text-[#be2c34]">&Ouml;</span>X
              </h1>
            </div>

            <div className="flex">
              <Link
                href="/produits"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#be2c34] px-8 py-4 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#9f2229]"
              >
                Voir Nos Produits
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:translate-x-28 lg:justify-end xl:translate-x-44">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52">
                <Image
                  src={medal2023Image}
                  alt="Médaille D-tox 2023"
                  fill
                  className="object-contain drop-shadow-[0_18px_34px_rgba(36,28,20,0.18)]"
                  priority
                />
              </div>
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52">
                <Image
                  src={reviewMedalImage}
                  alt="Médaille D-tox review"
                  fill
                  className="object-contain drop-shadow-[0_18px_34px_rgba(36,28,20,0.18)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A1A]/38">Defiler</span>
        <div className="w-px h-8 bg-[#be2c34]/24" />
      </div>
    </section>
  )
}
