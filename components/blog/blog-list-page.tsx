import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import BlogCard from "@/components/blog/blog-card"
import { blogSectionMeta, getBlogPosts, type BlogSection } from "@/lib/blog"

export default function BlogListPage({ section = "all" }: { section?: BlogSection | "all" }) {
  const posts = getBlogPosts(section)
  const [featured, ...rest] = posts
  const activeMeta = blogSectionMeta[section]

  return (
    <main className="min-h-screen bg-[#F9D9B9]">
      <Navigation variant="light" />

      <section className="px-6 pb-12 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {section !== "all" && (
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-[#761218]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour au blog
            </Link>
          )}

          <div className="flex flex-col gap-4 text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.32em] text-[#761218]">Archive DTOX4Life</p>
            <h1 className="font-serif text-5xl font-bold text-[#1A1A1A] text-balance md:text-6xl lg:text-7xl">
              {activeMeta.title}
            </h1>
            <p className="mx-auto max-w-3xl font-sans text-lg font-light leading-relaxed text-[#1A1A1A]/62">
              {activeMeta.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {(Object.keys(blogSectionMeta) as Array<keyof typeof blogSectionMeta>).map((key) => {
            const sectionKey = key === "all" ? "all" : key
            const count = getBlogPosts(sectionKey).length
            const isActive = key === section

            return (
              <Link
                key={key}
                href={blogSectionMeta[key].href}
                className={`rounded-full px-5 py-3 font-sans text-xs uppercase tracking-[0.22em] transition-colors ${
                  isActive
                    ? "bg-[#761218] text-white"
                    : "border border-[#1A1A1A]/12 text-[#1A1A1A] hover:border-[#761218] hover:text-[#761218]"
                }`}
              >
                {blogSectionMeta[key].label} ({count})
              </Link>
            )
          })}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {featured ? (
            <div className="space-y-8">
              <BlogCard post={featured} featured />
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#1A1A1A]/10 bg-white/70 px-8 py-16 text-center">
              <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A]">Aucun billet dans cette rubrique</h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-[#1A1A1A]/62">
                Cette section de l’archive DTOX4Life ne contenait pas encore de contenu exploitable.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
