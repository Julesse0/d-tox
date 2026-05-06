import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import processDeck01 from "@/assets/process-deck-01.jpg"
import processDeck02 from "@/assets/process-deck-02.jpg"
import processDeck03 from "@/assets/process-deck-03.png"
import processDeck04 from "@/assets/process-deck-04.png"

import { siteImages } from "@/lib/site-content"

const timelineMilestones = [
  {
    year: "2006",
    title: "Premier Engouement",
    description: "La demande explose a Aix, alors qu'Eisso ne produit encore que 110L par mois.",
    accent: "#704919",
  },
  {
    year: "2007",
    title: "Naissance De D-TOX",
    description: "Creation de l'entreprise et depot officiel de la marque.",
    accent: "#826730",
  },
  {
    year: "2009",
    title: "Labo A Velaux",
    description: "Construction du labo et installation des deux premieres cuves.",
    accent: "#B7A680",
  },
  {
    year: "2010",
    title: "Premiers Magasins",
    description: "Les premieres bouteilles arrivent en magasins bio a Aix-en-Provence.",
    accent: "#8f6c32",
  },
  {
    year: "2019",
    title: "Reconnaissance UE",
    description: "D-TOX devient le premier kombucha reconnu complement alimentaire dans l'UE.",
    accent: "#704919",
  },
  {
    year: "2022",
    title: "Medaille De Bronze",
    description: "Premier concours europeen de kombucha, a Bruxelles.",
    accent: "#826730",
  },
  {
    year: "2023",
    title: "Double Or",
    description: "D-TOX et Chateau de la Crau remportent chacun l'or a l'Aurore Taste Challenge.",
    accent: "#B7A680",
  },
  {
    year: "2023",
    title: "Concentre Ultra-Actif",
    description: "Lancement du developpement d'un concentre pour la nutrition et la cosmetique.",
    accent: "#8f6c32",
  },
]

const processHighlights = [
  {
    label: "Base Vivante",
    value: "Thes bio, sucre bio et SCOBY",
  },
  {
    label: "Fermentation",
    value: "Integralement sur souches de A-Z",
  },
  {
    label: "Signature D-tox",
    value: "Une dominante bacterienne recherchee",
  },
]

const processParagraphs = [
  "C'est un savoureux melange de thes et de sucre bio, fermente par une symbiose de bacteries, levures, enzymes et ferments lactiques : SCOBY.",
  "A cette echelle de fabrication, nous sommes un des rares producteurs a fermenter integralement sur souches de A-Z, ce qui garantit cette qualite inegalee.",
  "A force de chercher la perfection, ensemble avec des laboratoires, nous avons reussi a pousser la symbiose vers une dominance bacterienne.",
  "Car c'est elle qui fabrique ce gout unique, ces bienfaits surprenants, et ces qualites de conservateur naturel.",
]

const processGallery = [
  { image: processDeck01, alt: "Visuel du processus D-tox 1" },
  { image: processDeck02, alt: "Visuel du processus D-tox 2" },
  { image: processDeck03, alt: "Visuel du processus D-tox 3" },
  { image: processDeck04, alt: "Visuel du processus D-tox 4" },
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
                A Propos
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] text-balance">
                Notre Histoire
              </h1>
              <div className="space-y-5 font-sans font-light text-lg leading-relaxed text-[#1A1A1A]/60">
                <p>
                  2004, Eisso boit son premier verre de kombucha, fabrique par sa mere. Elle en fabrique depuis
                  quelques annees mais Eisso ne voulait jamais gouter a ce truc monstrueux. Puis, le buvant en cure
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
                  lui-meme. Trois cruches, un calepin pour prendre des notes, et un an de patience dans la cave de la
                  bastide ou il vit donneront naissance a cette boisson.
                </p>
                <p>L&apos;histoire de la boisson demarre dans la cave de cette bastide aixoise incroyable.</p>
              </div>
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
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-[rgba(112,73,25,0.34)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="chronologie" className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.45rem] border border-[rgba(36,28,20,0.08)] bg-[var(--brand-ink)] px-5 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-champagne)]">Chronologie</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#f6f1e8] md:text-4xl">Les grandes dates</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:hidden">
            {timelineMilestones.map((milestone, index) => (
              <article
                key={`${milestone.year}-${index}`}
                className="relative overflow-hidden rounded-[1rem] border bg-[linear-gradient(155deg,rgba(255,255,255,0.96),rgba(239,230,216,0.9))] p-4 shadow-[0_16px_42px_rgba(0,0,0,0.16)]"
                style={{ borderColor: `${milestone.accent}33` }}
              >
                <div className="relative flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-[var(--brand-cream)]"
                    style={{ borderColor: `${milestone.accent}33` }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: milestone.accent }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1A1A1A]">{milestone.year}</span>
                    <span className="h-px w-6" style={{ backgroundColor: `${milestone.accent}55` }} />
                  </div>
                </div>
                <h3 className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: milestone.accent }}>
                  {milestone.title}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-6 text-[#1A1A1A]/72">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>

          <div className="relative mt-10 hidden xl:block">
            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(246,241,232,0.14)_0%,rgba(246,241,232,0.42)_20%,rgba(112,73,25,0.3)_50%,rgba(246,241,232,0.42)_80%,rgba(246,241,232,0.14)_100%)]" />

            <div className="grid grid-cols-8 gap-3">
              {timelineMilestones.map((milestone, index) => {
                const isTop = index % 2 === 0

                return (
                  <div key={`${milestone.year}-${index}`} className="relative h-[248px]">
                    <div className={`flex h-full flex-col items-center ${isTop ? "justify-start" : "justify-end"}`}>
                      {isTop ? (
                        <>
                          <article
                            className="flex min-h-[118px] w-full flex-col rounded-[1rem] border bg-[linear-gradient(155deg,rgba(255,255,255,0.96),rgba(239,230,216,0.92))] px-4 py-4 text-center shadow-[0_18px_44px_rgba(0,0,0,0.16)]"
                            style={{ borderColor: `${milestone.accent}33` }}
                          >
                            <p
                              className="font-sans text-[10px] font-medium uppercase tracking-[0.2em]"
                              style={{ color: milestone.accent }}
                            >
                              {milestone.title}
                            </p>
                            <p className="mt-3 font-sans text-[12px] font-light leading-5 text-[#1A1A1A]/72">
                              {milestone.description}
                            </p>
                          </article>
                          <div className="h-8 w-px" style={{ backgroundColor: `${milestone.accent}66` }} />
                          <div
                            className="relative z-10 h-4 w-4 rounded-full border-[3px] border-[var(--brand-ink)]"
                            style={{ backgroundColor: milestone.accent }}
                          />
                          <p className="mt-3 font-sans text-[11px] font-medium tracking-[0.18em]" style={{ color: milestone.accent }}>
                            {milestone.year}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mb-3 font-sans text-[11px] font-medium tracking-[0.18em]" style={{ color: milestone.accent }}>
                            {milestone.year}
                          </p>
                          <div
                            className="relative z-10 h-4 w-4 rounded-full border-[3px] border-[var(--brand-ink)]"
                            style={{ backgroundColor: milestone.accent }}
                          />
                          <div className="h-8 w-px" style={{ backgroundColor: `${milestone.accent}66` }} />
                          <article
                            className="flex min-h-[118px] w-full flex-col rounded-[1rem] border bg-[linear-gradient(155deg,rgba(255,255,255,0.96),rgba(239,230,216,0.92))] px-4 py-4 text-center shadow-[0_18px_44px_rgba(0,0,0,0.16)]"
                            style={{ borderColor: `${milestone.accent}33` }}
                          >
                            <p
                              className="font-sans text-[10px] font-medium uppercase tracking-[0.2em]"
                              style={{ color: milestone.accent }}
                            >
                              {milestone.title}
                            </p>
                            <p className="mt-3 font-sans text-[12px] font-light leading-5 text-[#1A1A1A]/72">
                              {milestone.description}
                            </p>
                          </article>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="processus" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.45rem] border border-[rgba(36,28,20,0.08)] bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(183,166,128,0.18))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-rock)]">
                  Processus
                </p>
                <h2 className="font-serif text-4xl font-bold text-[#1A1A1A] md:text-5xl">
                  Processus de fabrication
                </h2>
                <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/64">
                  Notre process unique et artisanal : l&apos;art de la fermentation.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {processHighlights.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1rem] border border-[rgba(36,28,20,0.08)] bg-white/72 px-4 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
                  >
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                      {item.label}
                    </p>
                    <p className="mt-3 font-sans text-sm font-light leading-6 text-[#1A1A1A]/72">{item.value}</p>
                  </article>
                ))}
              </div>

              <div className="space-y-4 rounded-[1.15rem] bg-[var(--brand-ink)] p-6 text-[#f6f1e8] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                {processParagraphs.map((paragraph) => (
                  <p key={paragraph} className="font-sans text-base font-light leading-relaxed text-[rgba(246,241,232,0.76)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="max-w-2xl font-serif text-2xl italic leading-relaxed text-[#1A1A1A]/80">
                En fait il suffit de bien regarder la nature pour qu&apos;elle puisse s&apos;exprimer de la meilleure
                facon.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {processGallery.map((item, index) => (
                <div
                  key={item.alt}
                  className={`relative overflow-hidden rounded-[1rem] border border-[rgba(36,28,20,0.08)] bg-white/70 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                    index === 2 ? "aspect-square" : "aspect-[1.08]"
                  }`}
                >
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
