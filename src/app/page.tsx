import { Nav } from "@/components/shared/nav";
import { Footer } from "@/components/shared/footer";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ResearchStrip } from "@/components/sections/research-strip";
import { Skills } from "@/components/sections/skills";
import { BeyondTheCode } from "@/components/sections/beyond-the-code";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <ResearchStrip />
        <Skills />
        <BeyondTheCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}