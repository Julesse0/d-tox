import type { StaticImageData } from "next/image"

import heroBackgroundImage from "@/assets/hero.jpg"
import processImage from "@/assets/embouteillage-bg.jpg"
import aboutStoryImage from "@/assets/mission.jpg"
import dtoxBottle33Image from "@/assets/DTOX-_bouteille_33cl-removebg-preview.png"
import dtoxBottle1LImage from "@/assets/DTOX_bouteille-_1L_-removebg-preview.png"
import chateauBottleImage from "@/assets/chateau-de-la-crau_packshot_-removebg-preview.png"
import articleProcessImage from "@/assets/kombucha.jpg"
import articleRecipeImage from "@/assets/mission.jpg"
import articleRoutineImage from "@/assets/hero.jpg"
import articleSupportImage from "@/assets/points-vente.jpg"
import vitafraisLogo from "@/assets/vitafrais logo.png"
import relaisVertLogo from "@/assets/relais vert logo.png"
import jolieImportsLogo from "@/assets/joli imports logo.jpg"
import myBioShopLogo from "@/assets/Logo-MyBioShop.webp"
import pronaturaLogo from "@/assets/logo-pronatura-oa-marine-deux.png"
import biofreshLogo from "@/assets/biofresh logo.png"
import bioFraisLogo from "@/assets/bio frais logo.png"

export type SiteImage = StaticImageData

export const siteImages = {
  heroBackground: heroBackgroundImage,
  process: processImage,
  aboutStory: aboutStoryImage,
  dtoxBottle33: dtoxBottle33Image,
  dtoxBottle1L: dtoxBottle1LImage,
  chateauBottle: chateauBottleImage,
  articleProcess: articleProcessImage,
  articleRecipe: articleRecipeImage,
  articleRoutine: articleRoutineImage,
  articleSupport: articleSupportImage,
} satisfies Record<string, SiteImage>

export const partners = [
  {
    name: "Vitafrais",
    href: "https://www.vitafrais.fr/",
    logo: vitafraisLogo,
    logoFrameClassName: "h-14 sm:h-16",
  },
  {
    name: "Relais Vert",
    href: "https://www.relaisverts.com/",
    logo: relaisVertLogo,
    logoFrameClassName: "h-16 sm:h-20",
  },
  {
    name: "Jolie Imports",
    href: "https://jolieimports.nl/",
    logo: jolieImportsLogo,
    logoFrameClassName: "h-16 sm:h-20",
  },
  {
    name: "MyBioShop",
    href: "https://mybioshop.fr/",
    logo: myBioShopLogo,
    logoFrameClassName: "h-12 sm:h-14",
  },
  {
    name: "ProNatura",
    href: "https://www.pronatura.com/",
    logo: pronaturaLogo,
    logoFrameClassName: "h-12 sm:h-14",
  },
  {
    name: "Biofresh",
    href: "https://www.biofresh.be/",
    logo: biofreshLogo,
    logoFrameClassName: "h-16 sm:h-20",
  },
  {
    name: "BioFrais",
    href: "https://www.biofrais.com/",
    logo: bioFraisLogo,
    logoFrameClassName: "h-16 sm:h-20",
  },
] as const
