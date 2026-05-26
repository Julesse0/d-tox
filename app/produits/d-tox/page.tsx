import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

import medal2023Image from "@/assets/medal-2023-2.png"
import { siteImages } from "@/lib/site-content"

export default function DtoxPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />
      <EditorialProductShowcase
        eyebrow="Produit Signature"
        title="D-tox Original"
        intro=""
        story=""
        presentationLabel="Infos Produit"
        imageFooterLabel=""
        variants={[
          {
            id: "dtox-1l",
            name: "D-tox Original 1L",
            buttonLabel: "Version 1L",
            image: siteImages.dtoxBottle1L,
            imageAlt: "Bouteille D-tox Original 1L",
            tag: "Format Hero",
            description:
              "Un kombucha brut, vivant et non pasteurisé, fermenté 8 à 15 jours sur des souches sélectionnées de A à Z, dans un esprit artisanal proche du fait maison.",
            awardImage: medal2023Image,
            awardAlt: "Médaille D-tox 2023",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Reconnu complément alimentaire pour accompagner une consommation bien-être au quotidien.",
              "Goût unique, rafraîchissant et désaltérant, sans approche médicamenteuse.",
              "Ingrédients 100% bio, sans aromatisation et sans pasteurisation.",
              "Méthodes de fabrication rigoureuses, suivies selon les principes HACCP.",
              "Taux exceptionnel d'acide gluconique : 15 g/L.",
              "Très longue DDM : jusqu'à J + 18 mois.",
              "Bouteille en r-PET 100% recyclé et recyclable, choisie pour éviter les risques d'explosion.",
              "Choix du PET pour un bilan CO2 plus léger.",
            ],
          },
          {
            id: "dtox-33cl",
            name: "D-tox Original 33cl",
            buttonLabel: "Voir la version 33cl",
            image: siteImages.dtoxBottle33,
            imageAlt: "Bouteille D-tox Original 33cl",
            tag: "Petit Format",
            description:
              "Le même kombucha brut et vivant que le format 1L, dans une version plus nomade, fermenté 8 à 15 jours selon le process D-TOX.",
            awardImage: medal2023Image,
            awardAlt: "Médaille D-tox 2023",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Reconnu complément alimentaire pour accompagner une consommation bien-être au quotidien.",
              "Goût unique, rafraîchissant et désaltérant, sans approche médicamenteuse.",
              "Ingrédients 100% bio, sans aromatisation et sans pasteurisation.",
              "Méthodes de fabrication rigoureuses, suivies selon les principes HACCP.",
              "Taux exceptionnel d'acide gluconique : 15 g/L.",
              "Très longue DDM : jusqu'à J + 18 mois.",
              "Bouteille en r-PET 100% recyclé et recyclable, choisie pour éviter les risques d'explosion.",
              "Choix du PET pour un bilan CO2 plus léger.",
            ],
          },
        ]}
        specs={[]}
        primaryCta={{ href: "/contact#formulaire", label: "Nous Contacter" }}
        secondaryCta={{ href: "/produits", label: "Retour Produits" }}
      />

      <Footer />
    </main>
  )
}
