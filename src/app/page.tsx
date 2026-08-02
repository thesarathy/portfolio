import { Nav } from "@/components/shared/nav";
import { Footer } from "@/components/shared/footer";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { PageReveal } from "@/components/shared/page-reveal";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { About } from "@/components/sections/about";
import { BeyondTheCode } from "@/components/sections/beyond-the-code";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <PageReveal />
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <BeyondTheCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
