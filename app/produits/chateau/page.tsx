import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

import { siteImages } from "@/lib/site-content"

export default function ChateauPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />
      <EditorialProductShowcase
        eyebrow="Edition Premium"
        title="Chateau de la Crau"
        intro=""
        story=""
        presentationLabel="Infos Produit"
        imageFooterLabel=""
        variants={[
          {
            id: "chateau-main",
            name: "Chateau de la Crau",
            buttonLabel: "Edition Signature",
            image: siteImages.chateauBottle,
            imageAlt: "Bouteille Chateau de la Crau",
            tag: "Cuvee Premium",
            description:
              "La meme recette & process que le D-TOX classique mais avec une fermentation plus poussee et une presentation encore plus singuliere.",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "La meme recette & process que le D-TOX classique mais :",
              "Fermentation plus poussee (+30%)",
              "Donc logiquement plus de bienfaits que le D-TOX",
              "Filtration totale des levures",
              "Lui donnant un aspect clair",
              "Et ultra stable a la conservation en ambiant, DLUO : J + 18 mois !",
              "Injection de fines bulles",
              "Ingredients 100% bio, Demeter pour les thes",
              "Taux d'alcool moyen 1.8% vol - a consommer avec moderation",
              "Un packaging sublime et inedit, a la hauteur du produit",
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
