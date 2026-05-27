import Image from "next/image"

import { partners } from "@/lib/site-content"

type PartnersSectionProps = {
  eyebrow?: string
  title?: string
  description?: string
  sectionClassName?: string
  sectionPaddingClassName?: string
  panelClassName?: string
}

export default function PartnersSection({
  eyebrow = "Nos Partenaires",
  title = "Ils Nous Font Confiance",
  description,
  sectionClassName = "bg-[#1A1A1A]",
  sectionPaddingClassName = "py-24 lg:py-28",
  panelClassName = "",
}: PartnersSectionProps) {
  const isLightSection =
    sectionClassName.includes("brand-cream") ||
    sectionClassName.includes("#FFF9EB") ||
    sectionClassName.includes("#FFF9EB") ||
    sectionClassName.includes("#FFECBC") ||
    sectionClassName.includes("#be2c34")
  const hasDarkPanel = panelClassName.includes("#2e2115") || panelClassName.includes("#20170f")
  const headingColor = isLightSection && !hasDarkPanel ? "text-[#1A1A1A]" : "text-[#FFF9EB]"
  const eyebrowColor = isLightSection && !hasDarkPanel ? "text-[#be2c34]" : "text-[#FFECBC]"
  const descriptionColor = isLightSection && !hasDarkPanel ? "text-[#1A1A1A]/62" : "text-[#FFF9EB]/72"

  return (
    <section className={`${sectionClassName} ${sectionPaddingClassName}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={panelClassName}>
          <div className="mb-10 flex flex-col gap-4 text-center sm:mb-14">
            <p className={`font-sans text-xs uppercase tracking-[0.3em] ${eyebrowColor} font-medium`}>
              {eyebrow}
            </p>
            <h2 className={`font-serif text-3xl font-extrabold sm:text-4xl md:text-5xl ${headingColor} text-balance`}>
              {title}
            </h2>
            {description ? (
              <p className={`mx-auto max-w-2xl font-sans text-base font-light leading-relaxed ${descriptionColor}`}>
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-[76px] w-[calc(50%-0.3125rem)] items-center justify-center rounded-lg border border-black/10 bg-white p-3 shadow-[0_12px_34px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,0,0.1)] sm:h-[94px] sm:w-[calc(33.333%-0.5rem)] sm:p-4 lg:h-[98px] lg:w-[calc(20%-0.6rem)] 2xl:h-[84px] 2xl:w-[calc(12.5%-0.65625rem)] 2xl:p-3"
              >
                <div className="relative mx-auto h-10 w-full max-w-[112px] sm:h-14 sm:max-w-[150px] 2xl:h-11 2xl:max-w-[118px]">
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
      </div>
    </section>
  )
}
