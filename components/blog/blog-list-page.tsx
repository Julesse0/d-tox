import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import BlogCard from "@/components/blog/blog-card"
import EditorialCategoriesGrid from "@/components/editorial-categories-grid"
import { blogPrimarySections, blogSectionMeta, getBlogPosts, type BlogSection } from "@/lib/blog"

export default function BlogListPage({ section = "all" }: { section?: BlogSection | "all" }) {
  const posts = getBlogPosts(section)
  const [featured, ...rest] = posts
  const activeMeta = blogSectionMeta[section]
  const filterKeys = section === "supports" ? ["all", ...blogPrimarySections, "supports"] : ["all", ...blogPrimarySections]

  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />

      <section className="px-6 pb-10 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {section !== "all" && (
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--brand-rock)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour au journal
            </Link>
          )}

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-rock)]">
              Editorial
            </p>
            <h1 className="font-serif text-5xl font-extrabold text-[var(--brand-ink)] text-balance md:text-6xl lg:text-7xl">
              {activeMeta.title}
            </h1>
            {activeMeta.description ? (
              <p className="mt-4 font-sans text-lg leading-relaxed text-[rgba(36,28,20,0.66)]">
                {activeMeta.description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {section === "all" && (
        <section className="px-6 pb-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <EditorialCategoriesGrid />
          </div>
        </section>
      )}

      <section className="px-6 pb-10 pt-2 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {filterKeys.map((key) => {
            const count = getBlogPosts(key as BlogSection | "all").length
            const isActive = key === section

            return (
              <Link
                key={key}
                href={blogSectionMeta[key as keyof typeof blogSectionMeta].href}
                className={`rounded-md px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "bg-[var(--brand-rock)] text-[var(--brand-ink)]"
                    : "border border-[rgba(246,191,90,0.12)] bg-[var(--brand-panel)] text-[var(--brand-ink)] hover:border-[rgba(246,191,90,0.3)] hover:text-[var(--brand-rock)]"
                }`}
              >
                {blogSectionMeta[key as keyof typeof blogSectionMeta].label} ({count})
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-[1.3rem] border border-[var(--brand-line)] bg-[rgba(255,250,243,0.76)] px-8 py-16 text-center">
              <h2 className="font-serif text-3xl font-bold text-[var(--brand-ink)]">Aucun billet dans cette rubrique</h2>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
