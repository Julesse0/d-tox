import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, User } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PartnersSection from "@/components/partners-section"
import ContactForm from "@/components/contact/contact-form"
import { siteContact, socialLinks } from "@/lib/site-content"

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
} as const

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <Navigation variant="light" />

      <section className="px-6 pb-10 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.32em] text-[var(--brand-rock)]">
              Nous joindre
            </p>
            <h1 className="font-serif text-5xl font-extrabold text-[var(--brand-ink)] md:text-6xl">Contact</h1>
          </div>
        </div>
      </section>

      <PartnersSection
        eyebrow="Points de vente"
        title="Où nous trouver"
        description="Retrouvez D-tox chez nos partenaires et distributeurs, en ligne comme en magasin."
        sectionClassName="bg-[var(--brand-cream)]"
        sectionPaddingClassName="pb-16 pt-0"
        panelClassName="rounded-lg border border-black/10 bg-[#FFECBC] px-6 py-12 shadow-[0_18px_44px_rgba(0,0,0,0.06)] sm:px-8 lg:px-10"
      />

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-[var(--brand-line)] bg-white p-6 shadow-[0_18px_44px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-[var(--brand-rock)]">
                  Atelier Velaux
                </p>
                <h2 className="font-serif text-4xl font-extrabold text-[var(--brand-ink)] sm:text-5xl">Restons en contact</h2>
                <p className="max-w-md font-sans text-base leading-relaxed text-[rgba(36,28,20,0.68)]">
                  Toutes les infos utiles pour joindre D-tox rapidement, que ce soit pour une demande commerciale, un
                  point de distribution ou une question produit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-lg border border-black/10 bg-[#FFF9EB] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#be2c34] text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                        Adresse
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.76)]">
                        {siteContact.company}
                        <br />
                        {siteContact.addressLines[0]}
                        <br />
                        {siteContact.addressLines[1]}
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-lg border border-black/10 bg-[#FFF9EB] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-ink)] text-[#FFF9EB]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                        Téléphone
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.76)]">{siteContact.phone}</p>
                      <p className="font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.76)]">Portable : {siteContact.mobile}</p>
                    </div>
                  </div>
                </article>

                <article className="rounded-lg border border-black/10 bg-[#FFF9EB] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#be2c34] text-white">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                        Contact France
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.76)]">{siteContact.contactName}</p>
                    </div>
                  </div>
                </article>

                <article className="rounded-lg border border-black/10 bg-[#FFF9EB] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-ink)] text-[#FFF9EB]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-earth)]">
                        E-mail
                      </p>
                      <a
                        href={`mailto:${siteContact.email}`}
                        className="font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.76)] underline-offset-4 transition-colors hover:text-[var(--brand-rock)] hover:underline"
                      >
                        {siteContact.email}
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <div className="rounded-lg bg-[#FFECBC] p-6 text-[#1A1A1A] shadow-[0_18px_46px_rgba(0,0,0,0.06)]">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--brand-champagne)]">
                  Communauté
                </p>
                <h3 className="mt-3 font-serif text-3xl font-bold">Suivez-nous</h3>
                <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-[#1A1A1A]/70">
                  Retrouvez nos actualités, nos produits et nos prises de parole sur les réseaux de la marque.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = socialIconMap[social.platform]

                    return (
                      <a
                        key={social.platform}
                        href={social.href}
                        aria-label={social.platform}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-black/12 bg-white text-[#be2c34] transition-colors hover:border-[#be2c34] hover:bg-[#be2c34] hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[1.35rem] border border-[var(--brand-line)] bg-[var(--brand-panel)] p-4 shadow-[0_20px_48px_rgba(36,28,20,0.08)] sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--brand-rock)]">
                Adresse
              </p>
              <h2 className="mt-2 font-serif text-3xl font-extrabold text-[var(--brand-ink)]">Nous trouver</h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-[rgba(36,28,20,0.66)]">
              Notre atelier et point de contact principal restent basés à Velaux.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1rem] border border-[rgba(190,44,52,0.12)]">
            <div className="h-[280px] w-full sm:h-[340px] lg:h-[380px]">
              <iframe
                title="Carte D-tox Velaux"
                src={siteContact.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
