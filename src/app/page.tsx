import HeroSection from "@/components/HeroSection";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProjectGrid />
    </main>
  );
}