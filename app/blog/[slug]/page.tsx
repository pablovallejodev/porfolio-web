import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Footer } from "@/components/layout/Footer";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogPostFooter } from "@/components/blog/BlogPostFooter";
import { BlogProse } from "@/components/ui/BlogProse";
import { Reveal } from "@/components/ui/Reveal";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { profile } from "@/constants/profile";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${profile.name}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${profile.name}`,
      description: post.excerpt,
      url: `https://pablovallejo.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogHeader />
      <main className="flex-1">
        <BlogPostHeader post={post} />
        <article className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <Reveal delay={120}>
              <BlogProse content={post.content} />
            </Reveal>
          </div>
        </article>
        <BlogPostFooter />
      </main>
      <Footer />
    </>
  );
}
