import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import processDeck01 from "@/assets/process-deck-01.jpg"

import { siteImages } from "@/lib/site-content"

const timelineMilestones = [
  {
    year: "2006",
    title: "Premier Engouement",
    description: "La demande explose à Aix, alors qu'Eisso ne produit encore que 110L par mois.",
    accent: "#be2c34",
  },
  {
    year: "2007",
    title: "Naissance De DTÖX",
    description: "Création de l'entreprise et dépôt officiel de la marque.",
    accent: "#be2c34",
  },
  {
    year: "2009",
    title: "Labo À Velaux",
    description: "Construction du labo et installation des deux premières cuves.",
    accent: "#be2c34",
  },
  {
    year: "2010",
    title: "Premiers Magasins",
    description: "Les premières bouteilles arrivent en magasins bio à Aix-en-Provence.",
    accent: "#be2c34",
  },
  {
    year: "2019",
    title: "Reconnaissance UE",
    description: "DTÖX devient le premier kombucha reconnu complément alimentaire dans l'UE.",
    accent: "#be2c34",
  },
  {
    year: "2022",
    title: "Médaille De Bronze",
    description: "Premier concours européen de kombucha, à Bruxelles.",
    accent: "#be2c34",
  },
  {
    year: "2023",
    title: "Double Or",
    description: "DTÖX et Château de la Crau remportent chacun l'or à l'Aurore Taste Challenge.",
    accent: "#be2c34",
  },
  {
    year: "2023",
    title: "Concentre Ultra-Actif",
    description: "Lancement du développement d'un concentré pour la nutrition et la cosmétique.",
    accent: "#be2c34",
  },
]

const processHighlights = [
  {
    label: "Base Vivante",
    value: "Thés bio, sucre bio et SCOBY",
  },
  {
    label: "Fermentation",
    value: "Intégralement sur souches de A-Z",
  },
  {
    label: "Signature DTÖX",
    value: "Une dominante bactérienne recherchée",
  },
]

const processParagraphs = [
  "C'est un savoureux mélange de thés et de sucre bio, fermenté par une symbiose de bactéries, levures, enzymes et ferments lactiques : SCOBY.",
  "À cette échelle de fabrication, nous sommes un des rares producteurs à fermenter intégralement sur souches de A-Z, ce qui garantit cette qualité inégalée.",
  "À force de chercher la perfection, ensemble avec des laboratoires, nous avons réussi à pousser la symbiose vers une dominance bactérienne.",
  "Car c'est elle qui fabrique ce goût unique, ces bienfaits surprenants, et ces qualités de conservateur naturel.",
]

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />

      {/* Hero */}
      <section id="histoire" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--brand-rock)] font-medium">
                À Propos
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#1A1A1A] text-balance">
                Notre Histoire
              </h1>
              <div className="space-y-5 font-sans font-light text-lg leading-relaxed text-[#1A1A1A]/60">
                <p>
                  2004, Eisso boit son premier verre de kombucha, fabriqué par sa mère. Elle en fabrique depuis
                  quelques années mais Eisso ne voulait jamais goûter à ce truc monstrueux. Puis, le buvant en cure
                  il est vendu : fini les sodas !
                </p>
                <p>
                  Malgre sa belle carriere dans l&apos;import-export il est malheureux et deprime. Alors il decide de
                  tout plaquer aux Pays-Bas. Il enregistre avec ses derniers sous un CD nomme Clochard Deluxe : des
                  tubes de violon classique et orchestre, qu&apos;il va jouer et vendre pendant 3 ans sur les marches du
                  Sud de la France.
                </p>
                <p>
                  En lui rendant visite en octobre 2005 sa maman lui donne deux souches de kombucha pour en fabriquer
                  lui-même. Trois cruches, un calepin pour prendre des notes, et un an de patience dans la cave de la
                  bastide où il vit donneront naissance à cette boisson.
                </p>
                <p>L&apos;histoire de la boisson démarre dans la cave de cette bastide aixoise incroyable.</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={siteImages.aboutStory}
                  alt="L'histoire de DTÖX"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-[rgba(190,44,52,0.34)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="chronologie" className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-black/10 bg-white px-5 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#be2c34]">Chronologie</p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#1A1A1A] md:text-4xl">Les grandes dates</h2>
          </div>

          <div className="mt-10">
            <div className="relative hidden min-h-[560px] xl:block">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#be2c34]/35" />
              <div className="grid grid-cols-8 gap-6">
                {timelineMilestones.map((milestone, index) => {
                  const isTop = index % 2 === 0

                  return (
                    <div key={`${milestone.year}-${index}`} className="relative h-[560px]">
                      <div className="absolute left-1/2 top-1/2 z-20 flex h-12 min-w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#be2c34] px-4 font-sans text-sm font-bold text-white shadow-[0_10px_24px_rgba(190,44,52,0.22)]">
                        {milestone.year}
                      </div>
                      <div
                        className={`absolute left-1/2 z-10 h-7 w-px -translate-x-1/2 bg-[#be2c34]/35 ${
                          isTop ? "bottom-[calc(50%+1.5rem)]" : "top-[calc(50%+1.5rem)]"
                        }`}
                      />
                      <article
                        className={`absolute left-1/2 flex min-h-[165px] w-[calc(100%+1.25rem)] -translate-x-1/2 flex-col rounded-md border border-black/10 bg-[#FFF9EB] px-4 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${
                          isTop ? "bottom-[calc(50%+3.25rem)]" : "top-[calc(50%+3.25rem)]"
                        }`}
                      >
                        <h3 className="font-sans text-[10px] font-semibold uppercase leading-5 tracking-[0.1em] text-[#be2c34] [hyphens:none] [overflow-wrap:normal] [word-break:normal]">
                          {milestone.title}
                        </h3>
                        <p className="mt-3 font-sans text-[12px] font-light leading-5 text-[#1A1A1A]/72">
                          {milestone.description}
                        </p>
                      </article>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
              {timelineMilestones.map((milestone, index) => (
                <article
                  key={`${milestone.year}-${index}`}
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-black/10 bg-[#FFF9EB] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 min-w-20 items-center justify-center rounded-full bg-[#be2c34] px-4 font-sans text-sm font-bold text-white">
                      {milestone.year}
                    </div>
                    <div className="mt-3 h-full min-h-10 w-px bg-[#be2c34]/28" />
                  </div>
                  <div>
                    <h3 className="font-sans text-[11px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#be2c34] [hyphens:none] [overflow-wrap:normal] [word-break:normal]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm font-light leading-6 text-[#1A1A1A]/72">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="processus" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-rock)]">
                Processus
              </p>
              <h2 className="font-serif text-5xl font-extrabold text-[#1A1A1A] text-balance md:text-6xl">
                Processus de fabrication
              </h2>
              <div className="space-y-5 font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/60">
                {processParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Notre process unique et artisanal repose sur l&apos;art de la fermentation, avec des thés bio, du
                  sucre bio et une symbiose vivante guidée avec précision.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {processHighlights.map((item) => (
                  <div key={item.label} className="border-l border-[rgba(190,44,52,0.26)] pl-4">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-sans text-sm font-light leading-6 text-[#1A1A1A]/70">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="max-w-2xl font-serif text-2xl italic leading-relaxed text-[#1A1A1A]/80">
                En fait il suffit de bien regarder la nature pour qu&apos;elle puisse s&apos;exprimer de la meilleure
                facon.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[460px]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={processDeck01} alt="Visuel du processus DTÖX" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-[rgba(190,44,52,0.34)]" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
