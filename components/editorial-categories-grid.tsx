import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Megaphone, Newspaper, UtensilsCrossed } from "lucide-react"

import {
  blogPrimarySections,
  blogSectionMeta,
  getBlogPosts,
  pressLinks,
  type BlogSection,
} from "@/lib/blog"

const sectionConfig: Record<
  BlogSection,
  {
    icon: typeof Newspaper
    eyebrow: string
    shortDescription: string
  }
> = {
  articles: {
    icon: Newspaper,
    eyebrow: "A lire",
    shortDescription: "Actus, sujets de fond et nouveautes autour de la marque.",
  },
  recettes: {
    icon: UtensilsCrossed,
    eyebrow: "A servir",
    shortDescription: "Cocktails, accords et idees a partager autour de D-tox.",
  },
  reseaux: {
    icon: Megaphone,
    eyebrow: "A relayer",
    shortDescription: "Prises de parole, relais de marque et future rubrique presse.",
  },
  supports: {
    icon: Newspaper,
    eyebrow: "A garder",
    shortDescription: "Conseils pratiques et guides utiles.",
  },
}

export default function EditorialCategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {blogPrimarySections.map((section) => {
        const meta = blogSectionMeta[section]
        const config = sectionConfig[section]
        const posts = getBlogPosts(section)
        const leadPost = posts[0]
        const totalItems = posts.length + (section === "reseaux" ? pressLinks.length : 0)
        const Icon = config.icon

        return (
          <article
            key={section}
            className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(243,233,218,0.92))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.26em] text-[#f6bf5a]">
                    {config.eyebrow}
                  </p>
                  <h3 className="font-serif text-3xl font-bold text-[#1A1A1A]">{meta.title}</h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#B7A680]/20 text-[#f6bf5a]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]/68">{config.shortDescription}</p>

              <div className="rounded-[0.9rem] border border-[#f6bf5a]/10 bg-[#B7A680]/10 px-4 py-3">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[#d99a35]">
                  {totalItems} contenu{totalItems > 1 ? "s" : ""}
                </p>
                {leadPost ? (
                  <div className="mt-3 flex gap-4">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden">
                      <Image
                        src={leadPost.previewImage}
                        alt={leadPost.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 space-y-2">
                      <p className="font-serif text-xl leading-tight text-[#1A1A1A]">{leadPost.title}</p>
                      <p className="line-clamp-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/66">
                        {leadPost.excerpt}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/66">
                    La rubrique est prete a accueillir vos nouveaux contenus.
                  </p>
                )}
              </div>

              {section === "reseaux" && (
                <div className="space-y-3">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[#d99a35]">
                    Liens presse
                  </p>
                  {pressLinks.length > 0 ? (
                    <div className="space-y-2">
                      {pressLinks.slice(0, 2).map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start justify-between gap-3 rounded-md border border-[#f6bf5a]/10 bg-white/70 px-4 py-3 transition-colors hover:border-[#f6bf5a]/30"
                        >
                          <div>
                            <p className="font-serif text-lg text-[#1A1A1A]">{link.title}</p>
                            <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#d99a35]">
                              {link.publication}
                            </p>
                          </div>
                          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#f6bf5a]" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <Link
              href={meta.href}
              className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#f6bf5a] transition-colors hover:text-[#d99a35]"
            >
              Ouvrir la rubrique
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        )
      })}
    </div>
  )
}
