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
    description: "Les nouveautes D-tox, les sujets autour du kombucha et les contenus de fond les plus utiles.",
    href: "/blog/articles",
  },
  recettes: {
    label: "Recettes",
    title: "Recettes",
    description: "Cocktails, accords et inspirations a servir avec D-tox pour un usage plus lifestyle et convivial.",
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
  "la-cure-dtox-comment-proceder": "La cure DTOX, comment proceder ?",
  "le-microbiote-kesako": "Le microbiote : KESAKO ?",
  "comment-conserver-notre-produit": "Comment conserver notre produit ?",
  "le-choix-de-nos-bouteilles-en-plastique-p-e-t": "Le choix de nos bouteilles en plastique P.E.T",
  "le-pouvoir-antioxydant-du-d-tox-kombucha": "Le pouvoir antioxydant du D-TOX Kombucha",
  "notre-mention-de-complement-alimentaire": "Notre mention de complement alimentaire",
  "le-scoby-ou-la-mere-de-kombucha": "Le Scoby, ou la mere de kombucha",
  "le-kombucha-cest-quoi": "Le kombucha, c'est quoi ?",
}

const legacySymbolReplacements = [
  ["Ã¢â‚¬â„¢", "'"],
  ["Ã¢â‚¬Ëœ", "'"],
  ["Ã¢â‚¬Å“", "\""],
  ["Ã¢â‚¬Â", "\""],
  ["Ã¢â‚¬â€œ", "-"],
  ["Ã¢â‚¬â€", "-"],
  ["Ã¢â‚¬Â¦", "..."],
  ["ÃƒÂ©", "e"],
  ["ÃƒÂ¨", "e"],
  ["ÃƒÂª", "e"],
  ["ÃƒÂ«", "e"],
  ["ÃƒÂ ", "a"],
  ["Ãƒ ", "a"],
  ["ÃƒÂ¢", "a"],
  ["ÃƒÂ§", "c"],
  ["ÃƒÂ¹", "u"],
  ["ÃƒÂ»", "u"],
  ["ÃƒÂ´", "o"],
  ["ÃƒÂ®", "i"],
  ["ÃƒÂ¯", "i"],
  ["ÃƒÂ¶", "o"],
  ["ÃƒÂ¼", "u"],
  ["Ãƒâ€°", "E"],
  ["Ãƒâ‚¬", "A"],
  ["Ãƒâ€¡", "C"],
  ["Ã…â€œ", "oe"],
  ["Ã…â€™", "OE"],
  ["Ã‚Â°", "deg"],
  ["Ã‚Â«", "\""],
  ["Ã‚Â»", "\""],
  ["Ã‚", ""],
  ["Ã°Å¸Â¤Â­", ""],
  ["Ã°Å¸Â¤â€œ", ""],
  ["Ã°Å¸Ëœâ€°", ""],
  ["Ã°Å¸Ëœâ€¦", ""],
  ["Ã°Å¸â€Å½", ""],
  ["Ã°Å¸Â§Â", ""],
  ["Ã°Å¸â€˜Å’Ã°Å¸ÂÂ»", ""],
  ["Ã°Å¸Â¤Å¡Ã°Å¸ÂÂ»", ""],
  ["Ã°Å¸â€™ÂªÃ°Å¸ÂÂ»", ""],
  ["Ã¢Å“â€¦", ""],
  ["Ã¢ÂÂ³", ""],
  ["Ã¢Å¡â€“Ã¯Â¸Â", ""],
  ["â€¦", "..."],
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

  return paragraphExcerpt || cleanedExcerpt || "Contenu restaure depuis les archives."
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
