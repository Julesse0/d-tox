import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

import { siteContact } from "@/lib/site-content"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#FFF9EB] text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-3xl font-extrabold tracking-wider">DTÖX</h3>
            <p className="font-sans font-light text-sm leading-relaxed text-[#1A1A1A]/70">
              Kombucha artisanal brassé avec des ingrédients naturels et une fermentation vivante.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/dtox4life.kombucha/?hl=fr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Eisdude?fref=ts#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                aria-label="Email"
                className="text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">Nos Produits</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/produits/d-tox" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                D-tox Original 1L
              </Link>
              <Link href="/produits/chateau" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                Château de la Crau
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">Éditorial</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/blog/articles" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                News
              </Link>
              <Link href="/blog/recettes" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                Recettes
              </Link>
              <Link href="/blog/reseaux" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                On parle de nous / Presse
              </Link>
              <Link href="/contact#formulaire" className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors">
                Nous contacter
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#be2c34]" />
                <a
                  href={`mailto:${siteContact.email}`}
                  className="font-sans font-light text-sm text-[#1A1A1A]/60 hover:text-[#be2c34] transition-colors"
                >
                  {siteContact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#be2c34]" />
                <span className="font-sans font-light text-sm text-[#1A1A1A]/60">{siteContact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#be2c34]" />
                <span className="font-sans font-light text-sm text-[#1A1A1A]/60">{siteContact.cityLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans font-light text-xs text-[#1A1A1A]/45">
            {"(c) 2026 D-tox. Tous droits reserves."}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-sans font-light text-xs text-[#1A1A1A]/45 hover:text-[#be2c34] transition-colors">
              Mentions Legales
            </Link>
            <Link href="#" className="font-sans font-light text-xs text-[#1A1A1A]/45 hover:text-[#be2c34] transition-colors">
              Politique de Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
