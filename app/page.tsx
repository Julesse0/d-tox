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
    <main>
      <Navigation variant="dark" />
      <HeroSection />
      <BestsellersSection />
      <EditorialSection />
      <HomeContactSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
