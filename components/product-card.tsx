import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  description: string
  image: string | StaticImageData
  href: string
}

export default function ProductCard({ name, description, image, href }: ProductCardProps) {
  return (
    <Link href={href} className="group flex flex-col">
      {/* Image Container */}
      <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5e3cb_55%,#ebcfad_100%)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-serif text-lg md:text-xl font-semibold text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#761218] transition-colors text-balance">
          {name}
        </h3>
        <p className="font-sans font-light text-sm leading-relaxed text-[#1A1A1A]/60 max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </Link>
  )
}
