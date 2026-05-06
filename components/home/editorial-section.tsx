import Link from "next/link"
import { ArrowRight } from "lucide-react"

import EditorialCategoriesGrid from "@/components/editorial-categories-grid"

export default function EditorialSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#B7A680]">
              Editorial
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#F6F1E8] md:text-5xl lg:text-6xl">
              Une parole plus proche, sans changer l'esprit du site
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#F6F1E8]/68">
              Le site accueille maintenant un espace editorial structure en trois categories pour faire vivre la
              marque, les recettes et la presse avec plus de clarte.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-[#B7A680]/30 px-5 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#B7A680] transition-colors hover:border-[#B7A680] hover:text-white"
          >
            Voir tout l'edito
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <EditorialCategoriesGrid />
      </div>
    </section>
  )
}
