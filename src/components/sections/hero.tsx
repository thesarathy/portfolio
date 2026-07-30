import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-12 pt-32 md:pt-48 pb-12">
      <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
        {siteConfig.role}
      </p>

      <h1 className="font-display font-semibold leading-[0.9] tracking-tight text-fg">
        <span className="block text-6xl md:text-8xl lg:text-9xl">
          Sarathy
        </span>
        <span className="block text-6xl md:text-8xl lg:text-9xl text-accent">
          S P
        </span>
      </h1>

      <p className="text-fg-muted text-base md:text-lg max-w-xl mt-10 leading-relaxed">
        {siteConfig.tagline}
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link
          href="/#projects"
          className="px-6 py-3 bg-accent text-bg text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          View Work
        </Link>
        <a
        
          href={siteConfig.resumeUrl}
          className="px-6 py-3 border border-border text-fg text-sm font-medium rounded-full hover:border-accent transition-colors"
        >
          Resume
        </a>
      </div>
    </section>
  );
}