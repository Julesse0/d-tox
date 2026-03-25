import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3 } from "lucide-react"

import type { BlogPost } from "@/lib/blog"

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-8 rounded-[2rem] border border-[#1A1A1A]/10 bg-white/72 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:p-8"
      >
        <div className="relative min-h-[340px] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_top,#fffdf8_0%,#f2e1cb_55%,#e8c7a0_100%)]">
          <Image src={post.image} alt={post.title} fill className="object-contain p-6 transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#761218] px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.28em] text-white">
                {post.sectionLabel}
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/45">
                <Clock3 className="h-3.5 w-3.5" />
                {post.dateLabel}
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#761218] md:text-4xl">
              {post.title}
            </h2>
            <p className="max-w-2xl font-sans text-base font-light leading-relaxed text-[#1A1A1A]/65">
              {post.excerpt}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.24em] text-[#761218]">
            Lire l’article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-[1.8rem] border border-[#1A1A1A]/10 bg-white/68 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_top,#fffdf8_0%,#f2e1cb_55%,#e8c7a0_100%)]">
        <Image src={post.image} alt={post.title} fill className="object-contain p-5 transition-transform duration-700 group-hover:scale-105" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#761218]/15 bg-[#761218]/8 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-[#761218]">
            {post.sectionLabel}
          </span>
          <span className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.16em] text-[#1A1A1A]/45">
            <Clock3 className="h-3.5 w-3.5" />
            {post.dateLabel}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#761218]">
          {post.title}
        </h3>
        <p className="flex-1 font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/62">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#761218]">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
