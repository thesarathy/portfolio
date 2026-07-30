import { Nav } from "@/components/shared/nav";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ResearchStrip } from "@/components/sections/research-strip";
import { Skills } from "@/components/sections/skills";
import { BeyondTheCode } from "@/components/sections/beyond-the-code";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <ResearchStrip />
        <Skills />
        <BeyondTheCode />
      </main>
    </>
  );
}