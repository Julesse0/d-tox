import Link from "next/link"
import { ArrowRight } from "lucide-react"

import EditorialCategoriesGrid from "@/components/editorial-categories-grid"

export default function EditorialSection() {
  return (
    <section className="bg-[#FFECBC] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#be2c34]">
              Éditorial
            </p>
            <h2 className="font-serif text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl md:text-5xl lg:text-6xl">
              Blog
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#be2c34] px-5 py-3 font-sans text-[11px] font-semibold text-white transition-colors hover:bg-[#9f2229]"
          >
            Voir tout l'édito
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <EditorialCategoriesGrid />
      </div>
    </section>
  )
}
