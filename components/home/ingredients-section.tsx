import { Droplets, Leaf, Sun, Heart } from "lucide-react"

const ingredients = [
  {
    icon: Droplets,
    title: "Thes Bio + Sucre Bio",
    description: "Une base simple et propre: un melange de thes bio et de sucre bio.",
  },
  {
    icon: Leaf,
    title: "SCOBY Vivant",
    description: "Une symbiose naturelle de bacteries, levures, enzymes et ferments lactiques.",
  },
  {
    icon: Sun,
    title: "Fermentation 13 a 20 Jours",
    description: "Un vrai kombucha 100% fermente sur souches, de A a Z, selon les regles de l'art.",
  },
  {
    icon: Heart,
    title: "Naturellement Riche",
    description: "Bulles naturelles, acide gluconique > 1 g/L et ingredients 100% bio.",
  },
]

export default function IngredientsSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium mb-4">
            Les essentiels D-tox
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {ingredients.map((ingredient) => (
            <div key={ingredient.title} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-[#761218]/40 rounded-full">
                <ingredient.icon className="h-6 w-6 text-[#761218]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-semibold text-[#F9D9B9]">
                  {ingredient.title}
                </h3>
                <p className="font-sans font-light text-sm leading-relaxed text-[#F9D9B9]/60">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
