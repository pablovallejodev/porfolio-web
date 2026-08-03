import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden />
              {eyebrow}
            </p>
            <h2
              id={`${id}-title`}
              className="font-serif mt-4 text-3xl tracking-tight text-text-strong md:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {description}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
