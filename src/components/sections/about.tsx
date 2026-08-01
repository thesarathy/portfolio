import { about } from "@/data/about";
import { skills } from "@/data/skills";
import { publications } from "@/data/publications";
import { Reveal } from "@/components/shared/reveal";

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-[var(--section-padding)] border-t border-border">
      <Reveal>
        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
          About
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-fg mb-10">
          About me
        </h2>

        <p className="text-fg-muted text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          {about.blurb}
        </p>
      </Reveal>

      {/* Services / capabilities */}
      <div className="mb-20">
        <Reveal>
          <h3 className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-8">
            What I work with
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <div>
                <h4 className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 border border-border rounded-full text-sm text-fg cursor-default transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-16">
        <Reveal>
          <h3 className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-8">
            Research
          </h3>
        </Reveal>
        <ul>
          {publications.map((pub) => (
            <Reveal key={pub.paperId ?? pub.title}>
              <li className="border-t border-border py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="max-w-2xl">
                  <h4 className="font-display text-lg md:text-xl font-medium text-fg mb-2 leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-fg-muted text-sm mb-2">{pub.venue}</p>
                  <p className="font-mono text-xs text-fg-muted">
                    {pub.authors.join(" · ")}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                  <span className="font-mono text-sm text-accent">{pub.date}</span>
                  {pub.pages && (
                    <span className="font-mono text-xs text-fg-muted">pp. {pub.pages}</span>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      className="font-mono text-xs text-fg underline underline-offset-4 hover:text-accent transition-colors mt-2"
                    >
                      View Paper →
                    </a>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
