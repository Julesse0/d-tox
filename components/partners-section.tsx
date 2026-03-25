import Image from "next/image"

import { partners } from "@/lib/site-content"

export default function PartnersSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-4 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium">
            Nos Partenaires
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F9D9B9] text-balance">
            Ils Nous Font Confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[148px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(245,225,199,0.92))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
            >
              <div className={`relative mx-auto w-full ${partner.logoFrameClassName}`}>
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
