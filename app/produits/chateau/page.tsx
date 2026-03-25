import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

import { siteImages } from "@/lib/site-content"

export default function ChateauPage() {
  return (
    <main className="bg-[#F9D9B9] min-h-screen">
      <Navigation variant="light" />
      <EditorialProductShowcase
        eyebrow="Edition Premium"
        title="Chateau de la Crau"
        intro="Une lecture plus couture et plus ceremonielle, avec une mise en page qui presente la bouteille comme une piece d'exception."
        story="Ici la page fonctionne comme un lookbook: beaucoup d'air, une grande image detouree et une narration plus lente pour installer le cote premium du produit."
        variants={[
          {
            id: "chateau-main",
            name: "Chateau de la Crau",
            buttonLabel: "Edition Signature",
            image: siteImages.chateauBottle,
            imageAlt: "Bouteille Chateau de la Crau",
            tag: "Cuvee Premium",
            description:
              "La silhouette sombre et la coiffe doree donnent a la bouteille une presence plus habillee, presque ceremonielle.",
            styleNote:
              "Un visuel plus mode, plus editorial, pense comme une piece de collection sur fond clair.",
            tastingNote:
              "Une cuvee plus solennelle et gastronomique, a raconter comme une experience a part entiere.",
          },
        ]}
        specs={[
          { label: "Collection", value: "Chateau" },
          { label: "Style", value: "Editorial Luxe" },
          { label: "Moment", value: "Degustation" },
        ]}
        primaryCta={{ href: "/contact", label: "Nous Contacter" }}
        secondaryCta={{ href: "/produits", label: "Retour Produits" }}
      />

      <Footer />
    </main>
  )
}
