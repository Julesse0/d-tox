import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

import { siteImages } from "@/lib/site-content"

export default function DtoxPage() {
  return (
    <main className="bg-[#F9D9B9] min-h-screen">
      <Navigation variant="light" />
      <EditorialProductShowcase
        eyebrow="Produit Signature"
        title="D-tox Original"
        intro="Une page pensee comme une presentation plus mode, plus nette et plus editoriale autour de la bouteille signature."
        story="La lecture est volontairement plus premium: grand visuel, details de collection et variation de format comme on le ferait sur une fiche de vetement. La version 1L est affichee par defaut et un bouton permet de basculer vers la 33cl."
        variants={[
          {
            id: "dtox-1l",
            name: "D-tox Original 1L",
            buttonLabel: "Version 1L",
            image: siteImages.dtoxBottle1L,
            imageAlt: "Bouteille D-tox Original 1L",
            tag: "Format Hero",
            description:
              "Le grand format signature de D-tox, avec une silhouette plus longue et une presence plus mode dans la composition.",
            styleNote:
              "Une bouteille elancee, minimaliste, qui fonctionne comme une piece forte dans une presentation produit.",
            tastingNote:
              "Un kombucha vivant, franc et lumineux, a presenter comme la reference centrale de la gamme.",
          },
          {
            id: "dtox-33cl",
            name: "D-tox Original 33cl",
            buttonLabel: "Voir la version 33cl",
            image: siteImages.dtoxBottle33,
            imageAlt: "Bouteille D-tox Original 33cl",
            tag: "Petit Format",
            description:
              "La version 33cl garde la meme identite visuelle, avec un format plus compact et plus immediat a lire dans la page.",
            styleNote:
              "Un rendu plus court et plus direct, parfait pour une alternative rapide sans casser l'univers premium.",
            tastingNote:
              "Le meme esprit D-tox dans un format plus mobile, plus simple a projeter pour une consommation individuelle.",
          },
        ]}
        specs={[
          { label: "Collection", value: "Original" },
          { label: "Style", value: "Minimal Premium" },
          { label: "Rituel", value: "Au Quotidien" },
        ]}
        primaryCta={{ href: "/contact", label: "Nous Contacter" }}
        secondaryCta={{ href: "/produits", label: "Retour Produits" }}
      />

      <Footer />
    </main>
  )
}
