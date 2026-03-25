import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Users, Leaf } from "lucide-react"

import { siteImages } from "@/lib/site-content"

const values = [
  {
    icon: Leaf,
    title: "Naturel",
    description: "Des ingredients simples, des recettes lisibles et une fermentation maitrisee.",
  },
  {
    icon: Heart,
    title: "Qualite",
    description: "Chaque lot est deguste et controle pour offrir un gout constant.",
  },
  {
    icon: Users,
    title: "Partage",
    description: "Nous voulons rendre le kombucha accessible, du premier verre aux amateurs experts.",
  },
]

const team = [
  { name: "Lucie Martin", role: "Fondatrice", initial: "LM" },
  { name: "Nicolas Perez", role: "Brasseur", initial: "NP" },
  { name: "Camille Roche", role: "Developpement Produit", initial: "CR" },
  { name: "Sarah Noel", role: "Partenariats", initial: "SN" },
]

export default function AProposPage() {
  return (
    <main className="bg-[#F9D9B9] min-h-screen">
      <Navigation variant="light" />

      {/* Hero */}
      <section id="histoire" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium">
                A Propos
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] text-balance">
                Notre Histoire
              </h1>
              <p className="font-sans font-light text-lg text-[#1A1A1A]/60 leading-relaxed">
                D-tox est nee avec une idee simple: proposer un kombucha artisanal, bon et facile a adopter au quotidien.
              </p>
              <p className="font-sans font-light text-lg text-[#1A1A1A]/60 leading-relaxed">
                Depuis notre atelier, nous brassons des recettes vivantes, equilibrees et naturelles, inspirees par les saisons.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={siteImages.aboutStory}
                  alt="L'histoire de D-tox"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#761218]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valeurs" className="py-24 px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium mb-4">
              Nos Principes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F9D9B9] text-balance">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center border border-[#761218]/40 rounded-full">
                  <value.icon className="h-7 w-7 text-[#761218]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#F9D9B9]">{value.title}</h3>
                <p className="font-sans font-light text-sm leading-relaxed text-[#F9D9B9]/60 max-w-xs">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipes" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#761218] font-medium mb-4">
              L'Equipe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
              Notre Equipe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 flex items-center justify-center bg-[#1A1A1A] text-[#F9D9B9] font-serif text-2xl font-bold">
                  {member.initial}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1A1A1A]">{member.name}</h3>
                  <p className="font-sans font-light text-sm text-[#1A1A1A]/60">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
