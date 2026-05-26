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
      <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-lg border border-[#be2c34]/10 bg-[linear-gradient(160deg,#fffdf9_0%,#FFF9EB_58%,#FFECBC_100%)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-serif text-lg md:text-xl font-bold text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#be2c34] transition-colors text-balance">
          {name}
        </h3>
        <p className="font-sans font-light text-sm leading-relaxed text-[#1A1A1A]/60 max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </Link>
  )
}
