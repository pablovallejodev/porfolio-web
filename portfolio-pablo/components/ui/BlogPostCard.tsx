import Link from "next/link";
import type { BlogPost } from "@/types";
import { Icon } from "./Icon";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const { slug, title, excerpt, publishedAt, readTime } = post;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft md:p-7">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-teal transition-transform duration-500 group-hover:scale-y-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">
        <time dateTime={publishedAt}>{publishedAt}</time>
        <span aria-hidden>·</span>
        <span>{readTime} read</span>
      </div>

      <h3 className="font-serif mt-4 text-lg leading-snug text-text-strong md:text-xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted md:text-[15px]">
        {excerpt}
      </p>

      <div className="mt-6">
        <Link
          href={`/blog/${slug}`}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-border-strong bg-ice px-5 text-sm font-semibold text-ink transition-all hover:border-teal hover:bg-teal hover:text-white hover:shadow-glow-teal"
        >
          Read article
          <Icon name="arrow" size={14} />
        </Link>
      </div>
    </article>
  );
}
