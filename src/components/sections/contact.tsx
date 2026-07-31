"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site-config";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.696.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
        Get in Touch
      </p>
      <h2 className="font-display text-4xl md:text-6xl font-semibold text-fg mb-16 max-w-2xl leading-tight">
        Let&apos;s build something together.
      </h2>

      {!open && (
        <>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-border" />
            <button
              onClick={() => setOpen(true)}
              className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-accent text-bg text-sm font-medium hover:scale-105 transition-transform flex items-center justify-center shrink-0"
            >
              Get in touch
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            
             <a href={`mailto:${siteConfig.email}`}
              className="px-5 py-3 border border-border rounded-full text-sm text-fg hover:border-accent transition-colors"
            >
              {siteConfig.email}
            </a>
            
            <a  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="px-5 py-3 border border-border rounded-full text-sm text-fg hover:border-accent transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
              <form onSubmit={handleSubmit} className="md:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-fg-muted uppercase tracking-widest block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-border py-2 text-fg placeholder:text-fg-muted/50 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-fg-muted uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-b border-border py-2 text-fg placeholder:text-fg-muted/50 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-fg-muted uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What would you like to build?"
                    className="w-full bg-transparent border-b border-border py-2 text-fg placeholder:text-fg-muted/50 focus:border-accent outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-accent text-bg text-sm font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-accent text-sm">Message sent — I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Try emailing directly instead.</p>
                )}
              </form>

              <div className="space-y-8">
                <div>
                  <p className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-2">
                    Direct
                  </p>
                  
                  <a  href={`mailto:${siteConfig.email}`}
                    className="font-mono text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity break-all block mb-1"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-fg-muted text-sm">{siteConfig.phone}</p>
                </div>

                <div>
                  <p className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-3">
                    Elsewhere
                  </p>
                  <div className="flex gap-5">
                    <a href={siteConfig.github} aria-label="GitHub" className="text-fg-muted hover:text-fg transition-colors">
                      <GithubIcon />
                    </a>
                    <a href={siteConfig.linkedin} aria-label="LinkedIn" className="text-fg-muted hover:text-fg transition-colors">
                      <LinkedinIcon />
                    </a>
                    <a href={siteConfig.twitter} aria-label="Twitter" className="text-fg-muted hover:text-fg transition-colors">
                      <TwitterIcon />
                    </a>
                    <a href={siteConfig.instagram} aria-label="Instagram" className="text-fg-muted hover:text-fg transition-colors">
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}