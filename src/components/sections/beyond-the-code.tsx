import { about } from "@/data/about";
import { Reveal } from "@/components/shared/reveal";

export function BeyondTheCode() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <Reveal>
        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
          About
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-fg mb-10">
          Beyond the Code
        </h2>

        <p className="text-fg-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          {about.blurb}
        </p>

        <div className="flex flex-wrap gap-2 mb-16">
          {about.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 border border-border rounded-full text-sm text-fg"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mb-16">
          {about.beyondTheCode.map((block) => (
            <div key={block.heading}>
              <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                {block.heading}
              </h3>
              <p className="text-fg-muted text-sm md:text-base leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-fg text-base md:text-lg max-w-xl leading-relaxed mb-16">
          {about.goal}
        </p>

        <div className="border-l-2 border-accent pl-6 max-w-xl">
          <p className="font-display text-xl md:text-2xl text-fg mb-2">
            {about.philosophyQuote}
          </p>
          <p className="text-fg-muted text-sm">{about.philosophyNote}</p>
        </div>
      </Reveal>
    </section>
  );
}