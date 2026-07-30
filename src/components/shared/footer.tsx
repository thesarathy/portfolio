import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="text-xs text-fg-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
      <p className="font-mono text-xs text-fg-muted">
        Built with Next.js, TypeScript &amp; Tailwind
      </p>
    </footer>
  );
}