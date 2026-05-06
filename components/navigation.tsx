"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type FocusEvent } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

import siteLogo from "@/assets/Plan de travail 2LOGO v1.png"

type NavLink = {
  label: string
  href: string
  children?: Array<{ label: string; href: string }>
}

const navLinks: NavLink[] = [
  {
    label: "Nos Produits",
    href: "/produits",
    children: [
      { label: "D-tox Original 1L", href: "/produits/d-tox" },
      { label: "Chateau de la Crau", href: "/produits/chateau" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "News", href: "/blog/articles" },
      { label: "Recettes", href: "/blog/recettes" },
      { label: "On parle de nous / Presse", href: "/blog/reseaux" },
    ],
  },
  {
    label: "A Propos",
    href: "/a-propos",
    children: [
      { label: "Notre Histoire", href: "/a-propos#histoire" },
      { label: "Chronologie", href: "/a-propos#chronologie" },
      { label: "Processus", href: "/a-propos#processus" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

export default function Navigation({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isDark = variant === "dark"
  const textColor = isDark ? "text-[#F6F1E8]" : "text-[#1A1A1A]"
  const bgColor = isDark ? "bg-[#1A1A1A]" : "bg-[#F6F1E8]"
  const hoverColor = isDark ? "hover:text-white" : "hover:text-[#f6bf5a]"
  const dropdownBg = isDark ? "bg-[#2A241E]" : "bg-white"
  const dropdownText = isDark ? "text-[#F6F1E8]" : "text-[#1A1A1A]"
  const dropdownHover = isDark ? "hover:bg-[#342d26]" : "hover:bg-[#F3E9DA]"

  const closeDropdown = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenDropdown(null)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgColor}/95 backdrop-blur-md`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="relative block h-12 w-24">
            <Image
              src={siteLogo}
              alt="D-tox"
              fill
              priority
              className="object-contain"
              sizes="96px"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => link.children && setOpenDropdown(link.label)}
                onBlur={closeDropdown}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-sans font-light uppercase tracking-widest ${textColor} ${hoverColor} transition-colors`}
                  aria-expanded={link.children ? openDropdown === link.label : undefined}
                  aria-haspopup={link.children ? "menu" : undefined}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {link.children && (
                  <div
                    className={`absolute left-0 top-full z-20 pt-4 transition-all duration-150 ${
                      openDropdown === link.label
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className={`min-w-56 ${dropdownBg} py-2 shadow-lg`}>
                      <Link
                        href={link.href}
                        className={`block border-b border-[#f6bf5a]/10 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] ${dropdownText} ${dropdownHover} transition-colors`}
                      >
                        Voir {link.label}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-5 py-2.5 text-sm font-sans font-light ${dropdownText} ${dropdownHover} transition-colors`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={`lg:hidden ${bgColor} border-t border-[#f6bf5a]/20`}>
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`block py-3 text-sm font-sans font-light uppercase tracking-widest ${textColor} ${hoverColor} transition-colors`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block py-2 text-xs font-sans font-light ${textColor}/70 ${hoverColor} transition-colors`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
