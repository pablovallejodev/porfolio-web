import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function BlogPostFooter() {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-[20px] border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-md text-sm leading-relaxed text-text-muted md:text-[15px]">
              Thanks for reading. More notes on backend engineering, production
              systems, and lessons from the field — all in one place.
            </p>
            <Link
              href="/blog"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-teal px-5 text-sm font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
            >
              All articles
              <Icon name="arrow" size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
