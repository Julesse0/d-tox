import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import BestsellersSection from "@/components/home/bestsellers-section"
import EditorialSection from "@/components/home/editorial-section"
import HomeContactSection from "@/components/home/contact-section"
import PartnersSection from "@/components/partners-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="bg-[var(--brand-cream)]">
      <Navigation variant="light" />
      <HeroSection />
      <BestsellersSection />
      <EditorialSection />
      <HomeContactSection />
      <PartnersSection
        sectionClassName="bg-[#FFECBC]"
        panelClassName="rounded-lg border border-black/10 bg-white px-6 py-12 shadow-[0_18px_44px_rgba(0,0,0,0.06)] sm:px-8 lg:px-10"
      />
      <CTASection />
      <Footer />
    </main>
  )
}
