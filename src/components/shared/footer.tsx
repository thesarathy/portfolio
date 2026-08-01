import { siteConfig } from "@/data/site-config";

const socials = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Twitter", href: siteConfig.twitter },
  { label: "Instagram", href: siteConfig.instagram },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <p className="text-xs text-fg-muted">
        © {new Date().getFullYear()} Code by {siteConfig.name}
      </p>
      <div className="flex items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-fg-muted hover:text-fg transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
