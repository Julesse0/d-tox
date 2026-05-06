"use client"

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

type ProductVariant = {
  id: string
  name: string
  buttonLabel: string
  image: string | StaticImageData
  imageAlt: string
  tag: string
  description: string
  styleNote: string
  tastingNote: string
  detailItems?: string[]
  awardImage?: string | StaticImageData
  awardAlt?: string
}

type ProductSpec = {
  label: string
  value: string
}

interface EditorialProductShowcaseProps {
  eyebrow: string
  title: string
  intro: string
  story: string
  variants: ProductVariant[]
  specs: ProductSpec[]
  presentationLabel?: string
  imageFooterLabel?: string
  primaryCta: {
    href: string
    label: string
  }
  secondaryCta?: {
    href: string
    label: string
  }
}

export default function EditorialProductShowcase({
  eyebrow,
  title,
  intro,
  story,
  variants,
  specs,
  presentationLabel = "Presentation",
  imageFooterLabel = "Collection D-tox",
  primaryCta,
  secondaryCta,
}: EditorialProductShowcaseProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id ?? "")

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0]

  if (!selectedVariant) {
    return null
  }

  return (
    <section className="px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#1A1A1A]/10 bg-[linear-gradient(160deg,#fffdf9_0%,#f1e7d9_46%,#e3cfb1_100%)] p-8 shadow-[0_24px_56px_rgba(246,191,90,0.10)] sm:p-10">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),transparent_72%)]" />
              <div className="absolute left-6 top-6 inline-flex rounded-md border border-[#1A1A1A]/10 bg-white/80 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.28em] text-[#f6bf5a] sm:left-8 sm:top-8">
                {selectedVariant.tag}
              </div>
              <div className="relative flex min-h-[440px] items-center justify-center">
                <Image
                  src={selectedVariant.image}
                  alt={selectedVariant.imageAlt}
                  fill
                  className="object-contain p-8 sm:p-12"
                  priority
                />
              </div>
              {imageFooterLabel ? (
                <div className="absolute bottom-6 left-6 rounded-md border border-[#1A1A1A]/10 bg-white/80 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.26em] text-[#1A1A1A]/70 sm:bottom-8 sm:left-8">
                  {imageFooterLabel}
                </div>
              ) : null}
            </div>

            {specs.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="rounded-md border border-[#1A1A1A]/10 bg-white/65 p-5 backdrop-blur-sm">
                    <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#f6bf5a]/70">
                      {spec.label}
                    </p>
                    <p className="font-serif text-lg text-[#1A1A1A]">{spec.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-8 lg:pt-6">
            <div className="space-y-4">
              <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#f6bf5a] font-medium">
                {eyebrow}
              </p>
              <h1 className="font-serif text-5xl font-extrabold text-[#1A1A1A] text-balance md:text-6xl lg:text-7xl">
                {title}
              </h1>
              {intro ? (
                <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/65">
                  {intro}
                </p>
              ) : null}
            </div>

            {variants.length > 1 && (
              <div className="rounded-lg border border-[#1A1A1A]/10 bg-white/70 p-6">
                <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#f6bf5a]/70">
                  Formats
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {variants.map((variant) => {
                    const isActive = variant.id === selectedVariant.id

                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`rounded-md border px-5 py-4 text-left transition-colors ${
                          isActive
                            ? "border-[#be2c34] bg-[#be2c34] text-white"
                            : "border-[#1A1A1A]/12 bg-[#F6F1E8] text-[#1A1A1A] hover:border-[#f6bf5a]/50"
                        }`}
                      >
                        <span className="block font-sans text-[10px] uppercase tracking-[0.28em] opacity-70">
                          Format
                        </span>
                        <span className="mt-2 block font-serif text-2xl">{variant.buttonLabel}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="rounded-lg border border-[#f6bf5a]/14 bg-[linear-gradient(160deg,rgba(255,250,243,0.94),rgba(227,207,177,0.58))] p-8 text-[#1A1A1A] shadow-[0_18px_44px_rgba(246,191,90,0.08)] sm:p-10">
              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#f6bf5a]">
                {presentationLabel}
              </p>
              <h2 className="font-serif text-3xl font-bold text-balance sm:text-4xl">
                {selectedVariant.name}
              </h2>
              {selectedVariant.description ? (
                <p className="mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-[#1A1A1A]/68">
                  {selectedVariant.description}
                </p>
              ) : null}

              {selectedVariant.awardImage ? (
                <div className="mt-6 flex items-center gap-4 rounded-md border border-[#f6bf5a]/14 bg-white/54 p-4">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={selectedVariant.awardImage}
                      alt={selectedVariant.awardAlt ?? "Medaille D-tox"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/68">
                    Une reconnaissance qui souligne le caractere singulier de notre kombucha brut, vivant et non
                    pasteurise.
                  </p>
                </div>
              ) : null}

              {selectedVariant.detailItems && selectedVariant.detailItems.length > 0 ? (
                <div className="mt-8 rounded-md border border-[#f6bf5a]/14 bg-white/54 p-6">
                  <div className="grid gap-3">
                    {selectedVariant.detailItems.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#f6bf5a]" />
                        <p className="font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/72">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-md border border-[#f6bf5a]/14 bg-white/54 p-5">
                    <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#f6bf5a]">
                      Allure
                    </p>
                    <p className="font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/72">
                      {selectedVariant.styleNote}
                    </p>
                  </div>
                  <div className="rounded-md border border-[#f6bf5a]/14 bg-white/54 p-5">
                    <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#f6bf5a]">
                      Degustation
                    </p>
                    <p className="font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/72">
                      {selectedVariant.tastingNote}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {story ? (
              <div className="rounded-lg border border-[#1A1A1A]/10 bg-white/65 p-6 sm:p-8">
                <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#f6bf5a]/70">
                  Ligne Editoriale
                </p>
                <p className="font-sans text-base font-light leading-relaxed text-[#1A1A1A]/68">
                  {story}
                </p>
              </div>
            ) : null}

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-[#be2c34] px-7 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#9f2229]"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/12 px-7 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:border-[#f6bf5a] hover:text-[#f6bf5a]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
