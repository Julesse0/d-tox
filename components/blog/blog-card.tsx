import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3 } from "lucide-react"

import type { BlogPost } from "@/lib/blog"

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-5 rounded-lg border border-[var(--brand-line)] bg-[rgba(255,250,243,0.78)] p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:gap-6 sm:p-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:p-6"
      >
        <div className="relative min-h-[230px] overflow-hidden sm:min-h-[320px]">
          <Image
            src={post.previewImage}
            alt={post.title}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 sm:p-6"
          />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-[var(--brand-rock)] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.24em] text-[var(--brand-ink)]">
                {post.sectionLabel}
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-[rgba(36,28,20,0.46)]">
                <Clock3 className="h-3.5 w-3.5" />
                {post.dateLabel}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[var(--brand-ink)] transition-colors group-hover:text-[var(--brand-rock)] sm:text-3xl md:text-4xl">
              {post.title}
            </h2>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-[rgba(36,28,20,0.68)]">{post.excerpt}</p>
          </div>

          <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--brand-rock)]">
            Lire l'article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-lg border border-[var(--brand-line)] bg-[rgba(255,250,243,0.78)] p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-5"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden">
        <Image
          src={post.previewImage}
          alt={post.title}
          fill
        className="object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-5"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md border border-[rgba(190,44,52,0.12)] bg-[rgba(255,236,188,0.14)] px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--brand-rock)]">
            {post.sectionLabel}
          </span>
          <span className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.16em] text-[rgba(36,28,20,0.46)]">
            <Clock3 className="h-3.5 w-3.5" />
            {post.dateLabel}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-[var(--brand-ink)] transition-colors group-hover:text-[var(--brand-rock)] sm:text-2xl">
          {post.title}
        </h3>
        <p className="flex-1 font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.66)]">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--brand-rock)]">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
