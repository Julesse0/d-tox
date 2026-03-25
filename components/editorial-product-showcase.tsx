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
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.75rem] border border-[#1A1A1A]/10 bg-[linear-gradient(160deg,#fffdf9_0%,#f5e5ce_46%,#ead0ad_100%)] p-8 shadow-[0_30px_80px_rgba(118,18,24,0.10)] sm:p-10">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),transparent_72%)]" />
              <div className="absolute left-6 top-6 inline-flex rounded-full border border-[#1A1A1A]/10 bg-white/80 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.28em] text-[#761218] sm:left-8 sm:top-8">
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
              <div className="absolute bottom-6 left-6 rounded-full border border-[#1A1A1A]/10 bg-white/80 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.26em] text-[#1A1A1A]/70 sm:bottom-8 sm:left-8">
                Collection D-tox
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-[1.5rem] border border-[#1A1A1A]/10 bg-white/65 p-5 backdrop-blur-sm"
                >
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#761218]/70">
                    {spec.label}
                  </p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pt-6">
            <div className="space-y-4">
              <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#761218] font-medium">
                {eyebrow}
              </p>
              <h1 className="font-serif text-5xl font-bold text-[#1A1A1A] text-balance md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/65">
                {intro}
              </p>
            </div>

            {variants.length > 1 && (
              <div className="rounded-[2rem] border border-[#1A1A1A]/10 bg-white/70 p-6">
                <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#761218]/70">
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
                        className={`rounded-[1.35rem] border px-5 py-4 text-left transition-colors ${
                          isActive
                            ? "border-[#761218] bg-[#761218] text-white"
                            : "border-[#1A1A1A]/12 bg-[#F8EFE5] text-[#1A1A1A] hover:border-[#761218]/50"
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

            <div className="rounded-[2.2rem] bg-[#1A1A1A] p-8 text-[#F9D9B9] sm:p-10">
              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#761218]">
                Presentation
              </p>
              <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
                {selectedVariant.name}
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-[#F9D9B9]/72">
                {selectedVariant.description}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#761218]">
                    Allure
                  </p>
                  <p className="font-sans text-sm font-light leading-relaxed text-[#F9D9B9]/72">
                    {selectedVariant.styleNote}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-[#761218]">
                    Degustation
                  </p>
                  <p className="font-sans text-sm font-light leading-relaxed text-[#F9D9B9]/72">
                    {selectedVariant.tastingNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1A1A1A]/10 bg-white/65 p-6 sm:p-8">
              <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#761218]/70">
                Ligne Editoriale
              </p>
              <p className="font-sans text-base font-light leading-relaxed text-[#1A1A1A]/68">
                {story}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#761218] px-7 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#8f1a21]"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/12 px-7 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:border-[#761218] hover:text-[#761218]"
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
