import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { profile } from "@/constants/profile";

export const metadata: Metadata = {
  title: `Blog | ${profile.name}`,
  description:
    "Personal blog by Pablo Vallejo — notes on backend engineering, production systems, and opinions from eight years building software at scale.",
  openGraph: {
    title: `Blog | ${profile.name}`,
    description:
      "Personal blog by Pablo Vallejo — backend engineering, TypeScript, Node.js, and Big Data at scale.",
    url: "https://pablovallejo.dev/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
