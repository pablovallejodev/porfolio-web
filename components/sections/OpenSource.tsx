import Image from "next/image";
import githubMark from "@/public/github.png";
import { projectRepoUrl } from "@/constants/profile";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function OpenSource() {
  return (
    <Section
      id="source"
      eyebrow="08 · Source"
      title="This site ships with the source."
      description="The portfolio is public. Inspect the stack, the structure, and how the pieces fit — then fork it if it helps."
    >
      <Reveal direction="scale">
        <div className="mx-auto w-full max-w-xl">
          <a
            href={projectRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/source relative isolate flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141717] via-[#1a1d1d] to-[#1a1d1d] px-5 py-4 shadow-luminous ring-1 ring-teal/15 transition-all duration-500 hover:-translate-y-0.5 hover:ring-teal/35 hover:shadow-glow-teal md:gap-5 md:px-6 md:py-5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-teal/25 opacity-60 blur-3xl transition-opacity duration-700 group-hover/source:opacity-100"
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

            <span
              aria-hidden
              className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ring-1 ring-teal/20 md:size-14"
            >
              <Image
                src={githubMark}
                alt=""
                width={32}
                height={32}
                className="size-7 md:size-8"
              />
            </span>

            <span className="relative min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-white md:text-base">
                View on GitHub
              </span>
              <span className="mt-0.5 block truncate font-mono text-xs text-teal/90 md:text-sm">
                pablovallejodev/porfolio-web
              </span>
            </span>

            <Icon
              name="external"
              size={18}
              className="relative shrink-0 text-teal/80 transition-transform duration-300 group-hover/source:translate-x-0.5 group-hover/source:-translate-y-0.5 group-hover/source:text-teal"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
