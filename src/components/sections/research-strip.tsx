import { publications } from "@/data/publications";

export function ResearchStrip() {
  return (
    <section id="research" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
        Research
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-fg mb-16">
        Publications
      </h2>

      <div className="space-y-12">
        {publications.map((pub) => (
          <div
            key={pub.paperId ?? pub.title}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-border pb-12"
          >
            <div className="max-w-2xl">
              <h3 className="font-display text-xl md:text-2xl font-medium text-fg mb-3 leading-snug">
                {pub.title}
              </h3>
              <p className="text-fg-muted text-sm mb-2">{pub.venue}</p>
              <p className="font-mono text-xs text-fg-muted">
                {pub.authors.join(" · ")}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
              <span className="font-mono text-sm text-accent">{pub.date}</span>
              {pub.pages && (
                <span className="font-mono text-xs text-fg-muted">
                  pp. {pub.pages}
                </span>
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
          </div>
        ))}
      </div>
    </section>
  );
}