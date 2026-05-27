import { Droplets, Leaf, Sun, Heart } from "lucide-react"

const ingredients = [
  {
    icon: Droplets,
    title: "Thé Vert",
    description: "Apporte des notes végétales et une fraîcheur naturelle dans chaque bouteille.",
  },
  {
    icon: Leaf,
    title: "Gingembre",
    description: "Ajoute du peps et un profil aromatique vif pour une dégustation dynamique.",
  },
  {
    icon: Sun,
    title: "Citron",
    description: "Renforce l'équilibre sucre-acidité et apporte une finale fraîche.",
  },
  {
    icon: Heart,
    title: "Culture Vivante",
    description: "Notre SCOBY pilote une fermentation lente pour développer goût et caractère.",
  },
]

export default function IngredientsSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#be2c34] font-medium mb-4">
            Ingrédients Clés
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F9D9B9] text-balance">
            Ce Qu'il Y A Dedans
          </h2>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {ingredients.map((ingredient) => (
            <div key={ingredient.title} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-[#be2c34]/40 rounded-full">
                <ingredient.icon className="h-6 w-6 text-[#be2c34]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-bold text-[#F9D9B9]">
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
