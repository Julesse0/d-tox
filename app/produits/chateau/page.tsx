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
              "Une cuvee premium issue du savoir-faire D-TOX, travaillee avec une fermentation plus longue, une texture plus fine et une presentation a la hauteur de son caractere.",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Base de recette et process fideles au D-TOX classique, avec une fermentation prolongee de 30%.",
              "Profil plus mature, plus stable et naturellement riche en benefices de fermentation.",
              "Filtration totale des levures pour obtenir une robe claire et elegante.",
              "Stabilite optimale a temperature ambiante avec une DLUO jusqu'a J + 18 mois.",
              "Injection de fines bulles pour une degustation plus delicate.",
              "Ingredients 100% bio, avec des thes certifies Demeter.",
              "Taux d'alcool moyen : 1,8% vol. A consommer avec moderation.",
              "Packaging premium, singulier et soigne, pense pour accompagner le niveau du produit.",
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
