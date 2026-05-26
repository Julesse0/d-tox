import type { StaticImageData } from "next/image"

import kirRoyalImage from "@/assets/kir royal.png"
import mojitoImage from "@/assets/mojito.png"
import pinaColadaImage from "@/assets/pina colada.png"
import sangriaImage from "@/assets/sangria.png"
import sexOnTheBeachImage from "@/assets/sex on the beach.png"
import legacyPosts from "@/data/legacy-blog.json"
import { siteImages } from "@/lib/site-content"

export type BlogSection = "articles" | "recettes" | "supports" | "reseaux"

export type PressLink = {
  title: string
  publication: string
  href: string
  description: string
}

type RawLegacyPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  section: BlogSection
  legacyCategory: string
  heroImage: string
  gallery: string[]
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  dateLabel: string
  excerpt: string
  section: BlogSection
  sectionLabel: string
  legacyCategory: string
  image: string | StaticImageData
  previewImage: string | StaticImageData
  gallery: string[]
  paragraphs: string[]
}

export const blogPrimarySections: BlogSection[] = ["articles", "recettes", "reseaux"]

export const blogSectionMeta = {
  all: {
    label: "Tout lire",
    title: "Le Journal D-tox",
    description: "",
    href: "/blog",
  },
  articles: {
    label: "News",
    title: "News",
    description: "Les nouveautÃ©s D-tox, les sujets autour du kombucha et les contenus de fond les plus utiles.",
    href: "/blog/articles",
  },
  recettes: {
    label: "Recettes",
    title: "Recettes",
    description: "Cocktails, accords et inspirations Ã  servir avec D-tox pour un usage plus lifestyle et convivial.",
    href: "/blog/recettes",
  },
  supports: {
    label: "Guides",
    title: "Guides pratiques",
    description: "Conservation, emballage et infos pratiques issues des archives D-tox.",
    href: "/blog/supports",
  },
  reseaux: {
    label: "On parle de nous",
    title: "On parle de nous / Presse",
    description: "",
    href: "/blog/reseaux",
  },
} as const

export const pressLinks: PressLink[] = []

const fallbackImages: Record<BlogSection, string | StaticImageData> = {
  articles: siteImages.articleProcess,
  recettes: siteImages.articleRecipe,
  supports: siteImages.articleSupport,
  reseaux: siteImages.articleRoutine,
}

const imageOverrides: Record<string, StaticImageData> = {
  "recette-cocktail-royaltox": kirRoyalImage,
  "recette-de-cocktail-sangritox": sangriaImage,
  "recette-de-cocktail-sex-on-the-tox": sexOnTheBeachImage,
  "recette-de-cocktail-mojitox": mojitoImage,
  "recette-cocktail-pina-colatox": pinaColadaImage,
}

const titleOverrides: Record<string, string> = {
  "que-manger-avec-le-kombucha": "Que manger avec le kombucha ?",
  "recette-cocktail-royaltox": "Recette cocktail : Royal'TOX",
  "recette-de-cocktail-sangritox": "Recette de cocktail : Sangri'TOX",
  "recette-de-cocktail-sex-on-the-tox": "Recette de cocktail : Sex On The TOX",
  "recette-de-cocktail-mojitox": "Recette de cocktail : Moji'TOX",
  "recette-cocktail-pina-colatox": "Recette cocktail : Pina Cola'TOX",
  "kombuchas-dtox-et-sucres": "Kombuchas, DTOX et sucres",
  "la-double-fermentation-du-dtox": "La double fermentation du DTOX",
  "la-cure-dtox-comment-proceder": "La cure DTOX, comment procÃ©der ?",
  "le-microbiote-kesako": "Le microbiote : KESAKO ?",
  "comment-conserver-notre-produit": "Comment conserver notre produit ?",
  "le-choix-de-nos-bouteilles-en-plastique-p-e-t": "Le choix de nos bouteilles en plastique P.E.T",
  "le-pouvoir-antioxydant-du-d-tox-kombucha": "Le pouvoir antioxydant du D-TOX Kombucha",
  "notre-mention-de-complement-alimentaire": "Notre mention de complÃ©ment alimentaire",
  "le-scoby-ou-la-mere-de-kombucha": "Le Scoby, ou la mÃ¨re de kombucha",
  "le-kombucha-cest-quoi": "Le kombucha, c'est quoi ?",
}

const legacySymbolReplacements = [
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢", "'"],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“", "'"],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ", "\""],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â", "\""],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“", "-"],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â", "-"],
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦", "..."],
  ["ÃƒÆ’Ã‚Â©", "é"],
  ["ÃƒÆ’Ã‚Â¨", "è"],
  ["ÃƒÆ’Ã‚Âª", "ê"],
  ["ÃƒÆ’Ã‚Â«", "ë"],
  ["ÃƒÆ’Ã‚Â ", "à"],
  ["ÃƒÆ’ ", "à"],
  ["ÃƒÆ’Ã‚Â¢", "â"],
  ["ÃƒÆ’Ã‚Â§", "ç"],
  ["ÃƒÆ’Ã‚Â¹", "ù"],
  ["ÃƒÆ’Ã‚Â»", "û"],
  ["ÃƒÆ’Ã‚Â´", "ô"],
  ["ÃƒÆ’Ã‚Â®", "î"],
  ["ÃƒÆ’Ã‚Â¯", "ï"],
  ["ÃƒÆ’Ã‚Â¶", "ö"],
  ["ÃƒÆ’Ã‚Â¼", "ü"],
  ["ÃƒÆ’Ã¢â‚¬Â°", "É"],
  ["ÃƒÆ’Ã¢â€šÂ¬", "À"],
  ["ÃƒÆ’Ã¢â‚¬Â¡", "Ç"],
  ["Ãƒâ€¦Ã¢â‚¬Å“", "œ"],
  ["Ãƒâ€¦Ã¢â‚¬â„¢", "Œ"],
  ["Ãƒâ€šÃ‚Â°", "°"],
  ["Ãƒâ€šÃ‚Â«", "\""],
  ["Ãƒâ€šÃ‚Â»", "\""],
  ["Ãƒâ€š", ""],
  ["ÃƒÂ°Ã…Â¸Ã‚Â¤Ã‚Â­", ""],
  ["ÃƒÂ°Ã…Â¸Ã‚Â¤Ã¢â‚¬Å“", ""],
  ["ÃƒÂ°Ã…Â¸Ã‹Å“Ã¢â‚¬Â°", ""],
  ["ÃƒÂ°Ã…Â¸Ã‹Å“Ã¢â‚¬Â¦", ""],
  ["ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ…Â½", ""],
  ["ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â", ""],
  ["ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ…â€™ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â»", ""],
  ["ÃƒÂ°Ã…Â¸Ã‚Â¤Ã…Â¡ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â»", ""],
  ["ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚ÂªÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â»", ""],
  ["ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦", ""],
  ["ÃƒÂ¢Ã‚ÂÃ‚Â³", ""],
  ["ÃƒÂ¢Ã…Â¡Ã¢â‚¬â€œÃƒÂ¯Ã‚Â¸Ã‚Â", ""],
  ["Ã¢â‚¬Â¦", "..."],
]

function normalizeLegacyText(value: string) {
  let normalized = value ?? ""

  for (const [search, replace] of legacySymbolReplacements) {
    normalized = normalized.split(search).join(replace)
  }

  return normalized.replace(/\s+/g, " ").trim()
}

function buildExcerpt(post: RawLegacyPost, paragraphs: string[]) {
  const paragraphExcerpt =
    paragraphs.find((paragraph) => paragraph.length > 90 && !paragraph.startsWith("#")) ??
    paragraphs.find((paragraph) => paragraph.length > 45)

  const cleanedExcerpt = normalizeLegacyText(post.excerpt)

  return paragraphExcerpt || cleanedExcerpt || "Contenu restaurÃ© depuis les archives."
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value))
}

const rawPosts = legacyPosts as RawLegacyPost[]

export const blogPosts: BlogPost[] = rawPosts.map((post) => {
  const paragraphs = post.paragraphs.map(normalizeLegacyText).filter(Boolean)

  return {
    slug: post.slug,
    title: titleOverrides[post.slug] ?? normalizeLegacyText(post.title),
    date: post.date,
    dateLabel: formatDate(post.date),
    excerpt: buildExcerpt(post, paragraphs),
    section: post.section,
    sectionLabel: blogSectionMeta[post.section].label,
    legacyCategory: normalizeLegacyText(post.legacyCategory),
    image: post.heroImage || fallbackImages[post.section],
    previewImage: imageOverrides[post.slug] || post.heroImage || fallbackImages[post.section],
    gallery: post.gallery,
    paragraphs,
  }
})

export function getBlogPosts(section: BlogSection | "all" = "all") {
  if (section === "all") {
    return blogPosts
  }

  return blogPosts.filter((post) => post.section === section)
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
