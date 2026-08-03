import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/blog";

export async function BlogCta() {
  const postCount = getAllPosts().length;
  return (
    <Section
      id="blog"
      eyebrow="06 · Blog"
      title="If you want to go deeper, read the blog."
      description="Personal notes on backend engineering, production lessons, and opinions from the field — written for peers and hiring managers alike."
    >
      <Reveal direction="scale">
        <article className="group relative overflow-hidden rounded-[24px] border border-border bg-surface transition-all duration-300 hover:border-teal/40 hover:shadow-soft">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-teal/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-science/5 blur-3xl"
          />

          <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_auto] md:items-center md:gap-12 md:p-10">
            <div className="flex flex-col gap-4">
              <p className="max-w-xl text-[15px] leading-relaxed text-text md:text-base">
                Short articles on Node.js, TypeScript, Big Data, and what it
                really takes to run backends at scale. No corporate voice — just
                honest experience you can skim before we connect on LinkedIn.
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {postCount} articles · Updated regularly
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex h-12 w-fit shrink-0 items-center gap-2 rounded-full bg-teal px-6 text-[15px] font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
            >
              Visit the blog
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
