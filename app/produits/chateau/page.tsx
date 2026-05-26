import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EditorialProductShowcase from "@/components/editorial-product-showcase"

import { siteImages } from "@/lib/site-content"

export default function ChateauPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />
      <EditorialProductShowcase
        eyebrow="Édition Premium"
        title="Château de la Crau"
        intro=""
        story=""
        presentationLabel="Infos Produit"
        imageFooterLabel=""
        variants={[
          {
            id: "chateau-main",
            name: "Château de la Crau",
            buttonLabel: "Édition Signature",
            image: siteImages.chateauBottle,
            imageAlt: "Bouteille Château de la Crau",
            tag: "Cuvée Premium",
            description:
              "Une cuvée premium issue du savoir-faire D-TOX, travaillée avec une fermentation plus longue, une texture plus fine et une présentation à la hauteur de son caractère.",
            styleNote: "",
            tastingNote: "",
            detailItems: [
              "Base de recette et process fidèles au D-TOX classique, avec une fermentation prolongée de 30%.",
              "Profil plus mature, plus stable et naturellement riche en bénéfices de fermentation.",
              "Filtration totale des levures pour obtenir une robe claire et élégante.",
              "Stabilité optimale à température ambiante avec une DLUO jusqu'à J + 18 mois.",
              "Injection de fines bulles pour une dégustation plus délicate.",
              "Ingrédients 100% bio, avec des thés certifiés Demeter.",
              "Taux d'alcool moyen : 1,8% vol. À consommer avec modération.",
              "Packaging premium, singulier et soigné, pensé pour accompagner le niveau du produit.",
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
