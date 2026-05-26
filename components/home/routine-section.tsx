import Image from "next/image"

import { siteImages } from "@/lib/site-content"

const steps = [
  {
    number: "01",
    title: "Infusion",
    description: "Nous infusons des ingrédients naturels pour construire la base aromatique.",
  },
  {
    number: "02",
    title: "Fermentation",
    description: "Le thé sucré fermente avec notre culture vivante pour créer un kombucha équilibré.",
  },
  {
    number: "03",
    title: "Mise en Bouteille",
    description: "Chaque lot est contrôlé avant embouteillage pour garantir fraîcheur et constance.",
  },
]

export default function RoutineSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
              <Image
                src={siteImages.process}
                alt="Processus de fabrication du kombucha"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#be2c34]/40" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#be2c34]/40" />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#be2c34] font-medium mb-4">
                Notre Savoir-Faire
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#F9D9B9] text-balance">
                Les Étapes D-tox
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-4xl font-extrabold text-[#be2c34]/60 group-hover:text-[#be2c34] transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="font-serif text-2xl font-bold text-[#F9D9B9]">
                      {step.title}
                    </h3>
                    <p className="font-sans font-light text-sm leading-relaxed text-[#F9D9B9]/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
