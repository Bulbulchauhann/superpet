import HeroSection from "./_components/hero-section/hero-section";
import { AboutSection } from "./_components/about-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      <AboutSection />
    </main>
  );
}
