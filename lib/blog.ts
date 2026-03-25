import type { StaticImageData } from "next/image"

import legacyPosts from "@/data/legacy-blog.json"
import { siteImages } from "@/lib/site-content"

export type BlogSection = "articles" | "recettes" | "supports" | "reseaux"

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
  gallery: string[]
  paragraphs: string[]
}

export const blogSectionMeta = {
  all: {
    label: "Tous",
    title: "Blog D-tox",
    description:
      "Retrouve les articles historiques de DTOX4Life remis au propre dans la mise en page actuelle du site.",
    href: "/blog",
  },
  articles: {
    label: "Articles",
    title: "Nos Articles",
    description:
      "Bienfaits, fermentation, microbiote et culture kombucha: toute la partie éditoriale héritée de DTOX4Life.",
    href: "/blog/articles",
  },
  recettes: {
    label: "Recettes",
    title: "Nos Recettes",
    description:
      "Les affiches cocktails et les contenus food récupérés depuis l'ancien site, réintégrés dans notre design.",
    href: "/blog/recettes",
  },
  supports: {
    label: "Supports",
    title: "Nos Supports",
    description:
      "Conservation, emballage et informations utiles: la base pratique du blog historique est de retour.",
    href: "/blog/supports",
  },
  reseaux: {
    label: "Réseaux",
    title: "Presse & Réseaux",
    description:
      "Les contenus de notoriété et de découverte du kombucha regroupés dans une vue plus éditoriale.",
    href: "/blog/reseaux",
  },
} as const

const fallbackImages: Record<BlogSection, string | StaticImageData> = {
  articles: siteImages.articleProcess,
  recettes: siteImages.articleRecipe,
  supports: siteImages.articleSupport,
  reseaux: siteImages.articleRoutine,
}

const titleOverrides: Record<string, string> = {
  "que-manger-avec-le-kombucha": "Que manger avec le kombucha ?",
  "recette-cocktail-royaltox": "Recette cocktail : Royal’TOX",
  "recette-de-cocktail-sangritox": "Recette de cocktail : Sangri’TOX",
  "recette-de-cocktail-sex-on-the-tox": "Recette de cocktail : Sex On The TOX",
  "recette-de-cocktail-mojitox": "Recette de cocktail : Moji’TOX",
  "recette-cocktail-pina-colatox": "Recette cocktail : Piña Cola’TOX",
  "kombuchas-dtox-et-sucres": "Kombuchas, DTOX et sucres",
  "la-double-fermentation-du-dtox": "La double fermentation du DTOX",
  "la-cure-dtox-comment-proceder": "La cure DTOX, comment procéder ?",
  "le-microbiote-kesako": "Le microbiote : KESAKO ?",
  "comment-conserver-notre-produit": "Comment conserver notre produit ?",
  "le-choix-de-nos-bouteilles-en-plastique-p-e-t": "Le choix de nos bouteilles en plastique P.E.T",
  "le-pouvoir-antioxydant-du-d-tox-kombucha": "Le pouvoir antioxydant du D-TOX Kombucha",
  "notre-mention-de-complement-alimentaire": "Notre mention de complément alimentaire",
  "le-scoby-ou-la-mere-de-kombucha": "Le Scoby, ou la mère de kombucha",
  "le-kombucha-cest-quoi": "Le kombucha, c'est quoi ?",
}

const legacySymbolReplacements = [
  ["â€™", "’"],
  ["â€˜", "‘"],
  ["â€œ", "“"],
  ["â€", "”"],
  ["â€“", "–"],
  ["â€”", "—"],
  ["â€¦", "…"],
  ["Ã©", "é"],
  ["Ã¨", "è"],
  ["Ãª", "ê"],
  ["Ã«", "ë"],
  ["Ã ", "à"],
  ["Ã ", "à"],
  ["Ã¢", "â"],
  ["Ã§", "ç"],
  ["Ã¹", "ù"],
  ["Ã»", "û"],
  ["Ã´", "ô"],
  ["Ã®", "î"],
  ["Ã¯", "ï"],
  ["Ã¶", "ö"],
  ["Ã¼", "ü"],
  ["Ã‰", "É"],
  ["Ã€", "À"],
  ["Ã‡", "Ç"],
  ["Å“", "œ"],
  ["Å’", "Œ"],
  ["Â°", "°"],
  ["Â«", "«"],
  ["Â»", "»"],
  ["Â", ""],
  ["ðŸ¤­", ""],
  ["ðŸ¤“", ""],
  ["ðŸ˜‰", ""],
  ["ðŸ˜…", ""],
  ["ðŸ”Ž", ""],
  ["ðŸ§", ""],
  ["ðŸ‘ŒðŸ»", ""],
  ["ðŸ¤šðŸ»", ""],
  ["ðŸ’ªðŸ»", ""],
  ["âœ…", ""],
  ["â³", ""],
  ["âš–ï¸", ""],
  ["…", "…"],
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

  return paragraphExcerpt || cleanedExcerpt || "Contenu restauré depuis l’archive DTOX4Life."
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
    gallery: post.gallery,
    paragraphs,
  }
})

export function getBlogPosts(section: BlogSection | "all" = "all") {
  if (section === "all") {
    return blogPosts
  }

  if (section === "reseaux") {
    return blogPosts.filter((post) => post.section === "reseaux" || post.slug === "le-kombucha-cest-quoi")
  }

  return blogPosts.filter((post) => post.section === section)
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
