import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import IngredientsSection from "@/components/home/ingredients-section"
import RoutineSection from "@/components/home/routine-section"
import BestsellersSection from "@/components/home/bestsellers-section"
import PartnersSection from "@/components/partners-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Navigation variant="dark" />
      <HeroSection />
      <IngredientsSection />
      <RoutineSection />
      <BestsellersSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
