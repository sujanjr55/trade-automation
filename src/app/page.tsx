import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InteractivePortfolio } from "@/components/sections/InteractivePortfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <RoiCalculator />
      <HowItWorks />
      <InteractivePortfolio />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <Footer />
    </main>
  );
}
