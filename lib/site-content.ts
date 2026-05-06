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
import pronaturaLogo from "@/assets/pronatura_logo.png"
import biofreshLogo from "@/assets/biofresh logo.png"
import bioFraisLogo from "@/assets/bio frais logo.png"
import naturaliaLogo from "@/assets/Naturalia_logo.png"
import sobioLogo from "@/assets/sobio_logo.png"
import greenweezLogo from "@/assets/greenweez_logo.png"
import marcelFilsLogo from "@/assets/marcel &fils logo.svg"
import biomondeLogo from "@/assets/logo-biomonde.png"
import bioCBonLogo from "@/assets/Logo_Bio_C'Bon.svg"
import laMirandeLogo from "@/assets/la_mirande_logo.png"
import biodisLogo from "@/assets/biodis_logo.png"

export type SiteImage = StaticImageData
export type PartnerMapLocation = {
  id: string
  name: string
  city: string
  country: string
  role: string
  note: string
  href?: string
  position: [number, number]
  zoom?: number
}

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

export const siteContact = {
  company: "D-TOX SARL",
  contactName: "Eisso Weert jr",
  email: "eisso@dtox4life.fr",
  phone: "04 42 02 65 91",
  mobile: "06 31 55 22 60",
  cityLabel: "Velaux, France",
  addressLines: ["690, Chemin de la Crau", "13880 Velaux"],
  mapEmbedUrl:
    "https://www.google.com/maps?q=690+Chemin+de+la+Crau,+13880+Velaux,+France&z=15&output=embed",
} as const

export const socialLinks = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/dtox4life.kombucha/?hl=fr",
  },
  {
    platform: "facebook",
    href: "https://www.facebook.com/Eisdude?fref=ts#",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/d-tox-kombucha-06178320b/",
  },
] as const

export const partners = [
  {
    name: "Vitafrais",
    href: "https://www.vitafrais.fr/",
    logo: vitafraisLogo,
  },
  {
    name: "Relais Vert",
    href: "https://www.relaisverts.com/",
    logo: relaisVertLogo,
  },
  {
    name: "Jolie Imports",
    href: "https://jolieimports.nl/",
    logo: jolieImportsLogo,
  },
  {
    name: "MyBioShop",
    href: "https://mybioshop.fr/",
    logo: myBioShopLogo,
  },
  {
    name: "ProNatura",
    href: "https://www.pronatura.com/",
    logo: pronaturaLogo,
  },
  {
    name: "Biofresh",
    href: "https://www.biofresh.be/",
    logo: biofreshLogo,
  },
  {
    name: "BioFrais",
    href: "https://www.biofrais.com/",
    logo: bioFraisLogo,
  },
  {
    name: "Naturalia",
    href: "https://www.naturalia.fr/",
    logo: naturaliaLogo,
  },
  {
    name: "So.bio",
    href: "https://www.sobio.fr/",
    logo: sobioLogo,
  },
  {
    name: "Greenweez",
    href: "https://www.greenweez.com/",
    logo: greenweezLogo,
  },
  {
    name: "marcel&fils",
    href: "https://marceletfils.com/",
    logo: marcelFilsLogo,
  },
  {
    name: "Biomonde",
    href: "https://www.biomonde.fr/",
    logo: biomondeLogo,
  },
  {
    name: "Bio c' Bon",
    href: "https://www.bio-c-bon.eu/",
    logo: bioCBonLogo,
  },
  {
    name: "La Mirande",
    href: "https://www.la-mirande.fr/fr/",
    logo: laMirandeLogo,
  },
  {
    name: "Biodis",
    href: "https://www.biodis.eu/",
    logo: biodisLogo,
  },
] as const

export const partnerMapLocations: PartnerMapLocation[] = [
  {
    id: "dtox-lille",
    name: "D-tox",
    city: "Lille",
    country: "France",
    role: "Atelier",
    note: "Base D-tox",
    position: [50.6365654, 3.0635282],
    zoom: 7,
  },
  {
    id: "vitafrais-champigny",
    name: "Vitafrais",
    city: "Reims / Champigny",
    country: "France",
    role: "Distributeur",
    note: "Hub Grand Est",
    href: "https://www.vitafrais.fr/",
    position: [49.2683007, 3.9671604],
    zoom: 7,
  },
  {
    id: "mybioshop-carpentras",
    name: "MyBioShop",
    city: "Carpentras",
    country: "France",
    role: "Boutique en ligne",
    note: "Zone Bellecour",
    href: "https://mybioshop.fr/",
    position: [44.0468654, 5.0573852],
    zoom: 7,
  },
  {
    id: "pronatura-cavaillon",
    name: "ProNatura",
    city: "Cavaillon",
    country: "France",
    role: "Grossiste bio",
    note: "Hub sud-est",
    href: "https://www.pronatura.com/",
    position: [43.8216787, 5.0451537],
    zoom: 7,
  },
  {
    id: "biofrais-chaponnay",
    name: "BioFrais",
    city: "Lyon / Chaponnay",
    country: "France",
    role: "Distributeur",
    note: "Couverture centre-est",
    href: "https://www.biofrais.com/",
    position: [45.6477908, 4.9252502],
    zoom: 7,
  },
  {
    id: "relais-vert-carpentras",
    name: "Relais Vert",
    city: "Carpentras",
    country: "France",
    role: "Distributeur",
    note: "Plateforme Bellecour",
    href: "https://www.relaisverts.com/",
    position: [44.0378654, 5.0383852],
    zoom: 7,
  },
]
