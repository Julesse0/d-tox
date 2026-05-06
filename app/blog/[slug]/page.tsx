import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock3 } from "lucide-react"
import { notFound } from "next/navigation"

import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import { blogSectionMeta, blogPosts, getBlogPost } from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const backHref = blogSectionMeta[post.section].href

  const hasBody = post.paragraphs.length > 0
  const isRecipe = post.section === "recettes"
  const isTextFocusedSection = ["articles", "supports", "reseaux"].includes(post.section)

  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />

      <article
        className={
          isRecipe
            ? "h-[100svh] overflow-hidden px-4 pb-4 pt-24 sm:px-6 sm:pb-6 lg:px-8"
            : "px-6 pb-24 pt-32 lg:px-8"
        }
      >
        <div className={`mx-auto ${isRecipe ? "flex h-full max-w-5xl flex-col" : "max-w-6xl"}`}>
          <Link
            href={backHref}
            className={`inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--brand-rock)] ${
              isRecipe ? "mb-4" : "mb-8"
            }`}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au journal
          </Link>

          {isRecipe ? (
            <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-4 text-center sm:gap-6">
              <h1 className="font-serif text-3xl font-bold text-[var(--brand-ink)] text-balance md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="relative mx-auto min-h-0 w-full max-w-[42rem] rounded-[1.3rem] border border-[var(--brand-line)] bg-[rgba(255,250,243,0.76)]">
                <Image src={post.image} alt={post.title} fill className="object-contain p-6" priority />
              </div>
            </div>
          ) : (
            <div
              className={`grid items-start ${
                isTextFocusedSection
                  ? "gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]"
                  : "gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
              }`}
            >
              <div className={`space-y-6 ${isTextFocusedSection ? "" : "lg:sticky lg:top-28"}`}>
                <div
                  className={`relative overflow-hidden ${
                    isTextFocusedSection
                      ? "min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]"
                      : "min-h-[460px] rounded-[1.35rem] border border-[var(--brand-line)] bg-[linear-gradient(180deg,#fffaf3_0%,#efe3d1_100%)]"
                  }`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={isTextFocusedSection ? "object-contain" : "object-contain p-8 sm:p-10"}
                    priority
                  />
                </div>

                {post.gallery.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {post.gallery.map((image) => (
                      <div
                        key={image}
                        className={`relative overflow-hidden ${
                          isTextFocusedSection
                            ? "min-h-[160px] sm:min-h-[180px]"
                            : "min-h-[220px] rounded-[1rem] border border-[var(--brand-line)] bg-[rgba(255,250,243,0.76)]"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={post.title}
                          fill
                          className={isTextFocusedSection ? "object-contain" : "object-contain p-4"}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-[var(--brand-rock)] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.24em] text-white">
                      {post.sectionLabel}
                    </span>
                    {post.legacyCategory && (
                      <span className="rounded-md border border-[rgba(112,73,25,0.12)] bg-[rgba(183,166,128,0.12)] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--brand-earth)]">
                        {post.legacyCategory}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-[rgba(36,28,20,0.46)]">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.dateLabel}
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl font-bold text-[var(--brand-ink)] text-balance md:text-6xl">
                    {post.title}
                  </h1>
                  <p className="max-w-2xl font-sans text-lg leading-relaxed text-[rgba(36,28,20,0.66)]">{post.excerpt}</p>
                </div>

                <div className="rounded-[1.25rem] border border-[var(--brand-line)] bg-[rgba(255,250,243,0.76)] p-6 sm:p-8">
                  {hasBody ? (
                    <div className="space-y-5">
                      {post.paragraphs.map((paragraph, index) => (
                        <p key={`${post.slug}-${index}`} className="font-sans text-base leading-relaxed text-[rgba(36,28,20,0.76)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="font-sans text-base leading-relaxed text-[rgba(36,28,20,0.76)]">
                        Cette recette venait du blog historique DTOX4Life et etait surtout presentee sous forme de visuel.
                      </p>
                      <p className="font-sans text-base leading-relaxed text-[rgba(36,28,20,0.76)]">
                        L'affiche d'origine a ete reintegree ici pour conserver l'esprit du contenu dans une mise en page
                        plus claire.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {!isRecipe && <Footer />}
    </main>
  )
}
