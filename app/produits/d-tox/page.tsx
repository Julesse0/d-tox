import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

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
              "Fermentation 8 a 15 jours sur souches de A-Z, dans les regles de l'art, comme du fait maison : 100% RAW KOMBUCHA.",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Reconnu complement alimentaire",
              "Gout sans precedent, rafraichissant, desalterant, non medicamenteux",
              "Ingredients 100% bio",
              "Methodes de fabrication rigoureuses HACCP",
              "Non aromatise, non pasteurise",
              "Taux exceptionnel d'acide gluconique : 15 Gr/L !",
              "Tres longue DDM : J + 18 mois !",
              "Bouteille en r-PET 100% recycle & recyclable, excluant les risques d'explosion",
              "Bilan CO2 minimal en PET",
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
              "Fermentation 8 a 15 jours sur souches de A-Z, dans les regles de l'art, comme du fait maison : 100% RAW KOMBUCHA.",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Reconnu complement alimentaire",
              "Gout sans precedent, rafraichissant, desalterant, non medicamenteux",
              "Ingredients 100% bio",
              "Methodes de fabrication rigoureuses HACCP",
              "Non aromatise, non pasteurise",
              "Taux exceptionnel d'acide gluconique : 15 Gr/L !",
              "Tres longue DDM : J + 18 mois !",
              "Bouteille en r-PET 100% recycle & recyclable, excluant les risques d'explosion",
              "Bilan CO2 minimal en PET",
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
