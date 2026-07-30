import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
        Toolkit
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-fg mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 border border-border rounded-full text-sm text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}