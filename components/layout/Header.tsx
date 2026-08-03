"use client";

import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/constants";
import { profile } from "@/constants/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-background/0"
        }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="group flex items-center gap-2.5">
          <span className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal to-ink font-mono text-sm font-semibold text-white shadow-soft">
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

        <nav aria-label="Primary">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className={`relative inline-flex items-center px-3 py-2 text-sm transition-colors ${isActive
                        ? "text-teal"
                        : "text-text-muted hover:text-text-strong"
                      }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-teal to-teal-soft transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"
                        } origin-left`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-deep px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
