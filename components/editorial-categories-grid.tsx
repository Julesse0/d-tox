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
    eyebrow: "À lire",
    shortDescription: "Actus, sujets de fond et nouveautés autour de la marque.",
  },
  recettes: {
    icon: UtensilsCrossed,
    eyebrow: "À servir",
    shortDescription: "Cocktails, accords et idées à partager autour de DTÖX.",
  },
  reseaux: {
    icon: Megaphone,
    eyebrow: "À relayer",
    shortDescription: "Prises de parole, relais de marque et future rubrique presse.",
  },
  supports: {
    icon: Newspaper,
    eyebrow: "À garder",
    shortDescription: "Conseils pratiques et guides utiles.",
  },
}

export default function EditorialCategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
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
            className="flex h-full flex-col justify-between rounded-lg border border-black/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.06)] sm:p-6"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-[#be2c34]">
                    {config.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] sm:text-3xl">{meta.title}</h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#FFECBC] text-[#be2c34]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]/68">{config.shortDescription}</p>

              <div className="rounded-lg border border-black/10 bg-[#FFF9EB] px-4 py-3">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#be2c34]">
                  {totalItems} contenu{totalItems > 1 ? "s" : ""}
                </p>
                {leadPost ? (
                  <div className="mt-3 flex gap-3 sm:gap-4">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden sm:h-24 sm:w-20">
                      <Image
                        src={leadPost.previewImage}
                        alt={leadPost.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 space-y-2">
                      <p className="font-serif text-lg leading-tight text-[#1A1A1A] sm:text-xl">{leadPost.title}</p>
                      <p className="line-clamp-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/66">
                        {leadPost.excerpt}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#1A1A1A]/66">
                    La rubrique est prête à accueillir vos nouveaux contenus.
                  </p>
                )}
              </div>

              {section === "reseaux" && (
                <div className="space-y-3">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#be2c34]">
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
                          className="flex items-start justify-between gap-3 rounded-md border border-black/10 bg-white px-4 py-3 transition-colors hover:border-[#be2c34]/40"
                        >
                          <div>
                            <p className="font-serif text-lg text-[#1A1A1A]">{link.title}</p>
                            <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#be2c34]">
                              {link.publication}
                            </p>
                          </div>
                          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#be2c34]" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <Link
              href={meta.href}
              className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-semibold text-[#be2c34] transition-colors hover:text-[#9f2229]"
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
