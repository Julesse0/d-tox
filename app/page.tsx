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
        sectionClassName="bg-[var(--brand-cream)]"
        panelClassName="rounded-lg border border-[rgba(36,28,20,0.08)] bg-[linear-gradient(145deg,rgba(255,250,243,0.96),rgba(243,233,218,0.86))] px-6 py-12 shadow-[0_18px_44px_rgba(36,28,20,0.08)] sm:px-8 lg:px-10"
      />
      <CTASection />
      <Footer />
    </main>
  )
}
