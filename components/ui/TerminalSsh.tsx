"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_COMMAND = "ssh terminal.pablovallejo.dev";

type TerminalSshProps = {
  command?: string;
  className?: string;
  density?: "comfortable" | "compact" | "inline";
};

export function TerminalSsh({
  command = DEFAULT_COMMAND,
  className,
  density = "comfortable",
}: TerminalSshProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [typed, setTyped] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let cursor = 0;
    const id = window.setInterval(() => {
      cursor += 1;
      setTyped(command.slice(0, cursor));
      if (cursor >= command.length) {
        window.clearInterval(id);
      }
    }, 55);

    return () => window.clearInterval(id);
  }, [inView, command]);

  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard permissions may be denied – fail silently */
    }
  };

  const pad =
    density === "inline"
      ? "px-3.5 py-2"
      : density === "compact"
        ? "px-4 py-3.5 md:px-5 md:py-4"
        : "px-5 py-4 md:px-6 md:py-5";
  const fontSize =
    density === "inline"
      ? "text-xs sm:text-sm"
      : density === "compact"
        ? "text-sm md:text-base"
        : "text-base md:text-lg";

  const shellClass =
    density === "inline"
      ? "rounded-xl border border-border bg-ice shadow-soft ring-0 hover:ring-0 hover:translate-y-0 hover:shadow-soft"
      : "rounded-2xl border border-white/10 bg-gradient-to-br from-[#141717] via-[#1a1d1d] to-[#1a1d1d] shadow-luminous ring-1 ring-teal/15 hover:-translate-y-0.5 hover:ring-teal/35 hover:shadow-glow-teal";

  return (
    <div
      ref={ref}
      data-in-view={inView ? "true" : "false"}
      className={`group/term relative isolate overflow-hidden transition-all duration-500 ${shellClass} ${className ?? ""}`}
      aria-label={`Run ${command} in your terminal`}
    >
      {density !== "inline" ? (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-teal/25 blur-3xl opacity-60 transition-opacity duration-700 group-hover/term:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-teal-soft/15 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/70 to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(74,184,171,0.18)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07]"
          />
        </>
      ) : null}

      <div className={`relative flex items-center gap-2.5 font-mono ${pad}`}>
        <div
          className={`flex min-w-0 flex-1 items-baseline gap-2 ${fontSize} ${density === "inline" ? "text-ink" : "text-white"}`}
        >
          <span
            className={`select-none ${density === "inline" ? "text-teal" : "text-teal/90"}`}
          >
            $
          </span>
          <span className="flex min-w-0 items-baseline">
            <span
              className={`break-all whitespace-pre-wrap ${density === "inline" ? "text-ink/90" : "text-white/95"}`}
            >
              {typed}
            </span>
            <span
              aria-hidden
              className="ml-px inline-block h-[1.05em] w-[0.55ch] translate-y-[1px] rounded-[1px] bg-teal animate-caret-blink"
            />
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={
            density === "inline"
              ? "inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-surface px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted transition-colors hover:border-teal/40 hover:bg-teal/5 hover:text-teal"
              : "inline-flex shrink-0 items-center gap-1.5 self-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:border-teal/60 hover:bg-teal/15 hover:text-white"
          }
          aria-label={copied ? "Copied to clipboard" : "Copy SSH command"}
        >
          {copied ? (
            <>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
