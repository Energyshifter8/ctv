import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <ProjectGrid />
      <ContactSection />
    </main>
  );
}