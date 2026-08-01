import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedProjects() {
  return (
    <section id="work" className="px-6 md:px-12 py-[var(--section-padding)] border-t border-border">
      <Reveal>
        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-fg mb-16">
          Projects
        </h2>
      </Reveal>

      <ul>
        {projects.map((project, i) => {
          const href = project.github ?? project.liveDemo;
          const inner = (
            <>
              <div className="flex items-center gap-4 md:gap-8">
                <span className="font-mono text-xs md:text-sm text-fg-muted shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-medium text-fg leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="mt-3 md:mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
                <p className="text-fg-muted text-sm md:text-base max-w-xl leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden md:flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border border-border rounded-full text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    className="text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    size={28}
                  />
                </div>
              </div>
            </>
          );

          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <li className="border-t border-border py-10 md:py-14">
                {href ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
