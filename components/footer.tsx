import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F9D9B9]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-3xl font-bold tracking-wider">D-tox</h3>
            <p className="font-sans font-light text-sm leading-relaxed text-[#F9D9B9]/70">
              Kombucha artisanal brasse avec des ingredients naturels et une fermentation vivante.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-[#F9D9B9]">Nos Produits</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/produits/d-tox" className="font-sans font-light text-sm text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                D-tox Original 1L
              </Link>
              <Link href="/produits/chateau" className="font-sans font-light text-sm text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                Chateau de la Crau
              </Link>
            </nav>
          </div>

          {/* About */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-[#F9D9B9]">A Propos</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/a-propos#histoire" className="font-sans font-light text-sm text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                Notre Histoire
              </Link>
              <Link href="/a-propos#equipes" className="font-sans font-light text-sm text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                Nos Equipes
              </Link>
              <Link href="/a-propos#valeurs" className="font-sans font-light text-sm text-[#F9D9B9]/60 hover:text-[#761218] transition-colors">
                Nos Valeurs
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-[#F9D9B9]">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#761218]" />
                <span className="font-sans font-light text-sm text-[#F9D9B9]/60">contact@d-tox.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#761218]" />
                <span className="font-sans font-light text-sm text-[#F9D9B9]/60">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#761218]" />
                <span className="font-sans font-light text-sm text-[#F9D9B9]/60">Lille, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F9D9B9]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans font-light text-xs text-[#F9D9B9]/40">
            {"© 2026 D-tox. Tous droits reserves."}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-sans font-light text-xs text-[#F9D9B9]/40 hover:text-[#761218] transition-colors">
              Mentions Legales
            </Link>
            <Link href="#" className="font-sans font-light text-xs text-[#F9D9B9]/40 hover:text-[#761218] transition-colors">
              Politique de Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
