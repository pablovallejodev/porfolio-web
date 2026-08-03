import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/blog";

export async function BlogGrid() {
  const blogPosts = getAllPosts();
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="blog-posts-title"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden />
              Articles
            </p>
            <h2
              id="blog-posts-title"
              className="font-serif mt-4 text-3xl tracking-tight text-text-strong md:text-4xl"
            >
              Latest posts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Short reads on engineering craft, system design, and career
              reflections. Each card is a preview — the full article is one
              click away.
            </p>
          </header>
        </Reveal>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <li key={post.slug} className="flex">
              <Reveal delay={60 * idx} className="flex w-full">
                <BlogPostCard post={post} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
