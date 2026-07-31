import { Reveal } from "@/components/shared/reveal";

export function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-fg mb-16">
          Projects
        </h2>

        <div className="border border-border rounded-2xl px-8 py-16 text-center">
          <p className="text-fg-muted text-sm">
            Project case studies coming soon.
          </p>
        </div>
      </Reveal>
    </section>
  );
}