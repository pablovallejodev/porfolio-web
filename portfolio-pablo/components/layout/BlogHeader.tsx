"use client";

import { useEffect, useState } from "react";
import { profile } from "@/constants/profile";

const emailHref =
  profile.social.find((item) => item.icon === "email")?.href ??
  "mailto:pablo@pablovallejo.dev";

export function BlogHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Go to homepage"
        >
          <span
            aria-hidden
            className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal to-ink font-mono text-sm font-semibold text-white shadow-soft"
          >
            <span className="relative z-10">PV</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-sm text-text-strong">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              {profile.shortHeadline}
            </span>
          </span>
        </a>

        <a
          href={emailHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
