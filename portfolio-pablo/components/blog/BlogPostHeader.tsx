import Link from "next/link";
import type { BlogPost } from "@/types";
import { formatPostDate } from "@/lib/blog";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

type BlogPostHeaderProps = {
  post: BlogPost;
};

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const { title, excerpt, publishedAt, readTime } = post;

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(80%_60%_at_50%_0%,black_20%,transparent_75%)]" />
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-science/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-14 pt-20 md:px-10 md:pb-16 md:pt-24">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-teal"
          >
            <Icon name="arrow" size={14} className="rotate-180" />
            Back to blog
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <p className="eyebrow-pill mt-8">
            <span className="eyebrow-dot" aria-hidden />
            <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
            <span aria-hidden>·</span>
            {readTime} read
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="font-serif mt-6 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-slate">
            {excerpt}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
