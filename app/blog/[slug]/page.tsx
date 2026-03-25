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

  const backHref =
    post.section === "reseaux" && post.slug === "le-kombucha-cest-quoi"
      ? blogSectionMeta.reseaux.href
      : blogSectionMeta[post.section].href

  const hasBody = post.paragraphs.length > 0

  return (
    <main className="min-h-screen bg-[#F9D9B9]">
      <Navigation variant="light" />

      <article className="px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href={backHref}
            className="mb-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-[#761218]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au blog
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative min-h-[460px] overflow-hidden rounded-[2.2rem] border border-[#1A1A1A]/10 bg-[radial-gradient(circle_at_top,#fffdf8_0%,#f2e1cb_55%,#e8c7a0_100%)]">
                <Image src={post.image} alt={post.title} fill className="object-contain p-8 sm:p-10" priority />
              </div>

              {post.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {post.gallery.map((image) => (
                    <div
                      key={image}
                      className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-[#1A1A1A]/10 bg-white/70"
                    >
                      <Image src={image} alt={post.title} fill className="object-contain p-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#761218] px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.28em] text-white">
                    {post.sectionLabel}
                  </span>
                  {post.legacyCategory && (
                    <span className="rounded-full border border-[#1A1A1A]/12 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.24em] text-[#1A1A1A]/55">
                      {post.legacyCategory}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/45">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.dateLabel}
                  </span>
                </div>

                <h1 className="font-serif text-5xl font-bold text-[#1A1A1A] text-balance md:text-6xl">
                  {post.title}
                </h1>
                <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/62">
                  {post.excerpt}
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#1A1A1A]/10 bg-white/68 p-6 sm:p-8">
                {hasBody ? (
                  <div className="space-y-5">
                    {post.paragraphs.map((paragraph, index) => (
                      <p key={`${post.slug}-${index}`} className="font-sans text-base leading-relaxed text-[#1A1A1A]/72">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="font-sans text-base leading-relaxed text-[#1A1A1A]/72">
                      Cette recette venait du blog historique DTOX4Life et était principalement présentée sous forme
                      de visuel.
                    </p>
                    <p className="font-sans text-base leading-relaxed text-[#1A1A1A]/72">
                      L’affiche d’origine a été réintégrée ci-contre pour garder l’esprit du contenu source dans une
                      mise en page plus propre.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
