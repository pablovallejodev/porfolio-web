import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "node-js-high-throughput-backends",
    title: "Why I still choose Node.js for high-throughput backends",
    excerpt:
      "After eight years building production systems, Node.js keeps earning its place. Not because it is trendy, but because event-driven I/O still wins when latency budgets are tight.",
    publishedAt: "Mar 2026",
    readTime: "6 min",
  },
  {
    slug: "lessons-from-ten-million-users",
    title: "Lessons from serving 10 million users",
    excerpt:
      "Scale changes the rules. Caching strategies that worked at 100k users become liabilities at 10M. Here is what I learned shipping backends where every millisecond counts.",
    publishedAt: "Feb 2026",
    readTime: "8 min",
  },
  {
    slug: "typescript-strict-mode-production",
    title: "TypeScript strict mode saved our production twice",
    excerpt:
      "Strict mode is not bureaucracy. It is insurance. Two incidents that never reached users because the compiler caught contract drift before deploy.",
    publishedAt: "Jan 2026",
    readTime: "5 min",
  },
  {
    slug: "big-data-batch-vs-stream",
    title: "Big Data pipelines: batch vs stream in practice",
    excerpt:
      "The textbook says stream everything. Production says pick the right tool. A pragmatic framework for choosing between batch and real-time pipelines.",
    publishedAt: "Dec 2025",
    readTime: "7 min",
  },
  {
    slug: "observability-at-scale",
    title: "Observability is not optional at scale",
    excerpt:
      "Logs alone will not save you. Metrics, traces, and structured context are the minimum viable toolkit for teams running services under strict SLAs.",
    publishedAt: "Nov 2025",
    readTime: "6 min",
  },
  {
    slug: "microservices-vs-monoliths",
    title: "Microservices vs monoliths: a pragmatic take",
    excerpt:
      "The best architecture is the one your team can operate. I have shipped both. Here is when each approach actually makes sense for backend teams.",
    publishedAt: "Oct 2025",
    readTime: "9 min",
  },
  {
    slug: "sub-300ms-sla-engineering",
    title: "SLAs under 300ms: what actually moves the needle",
    excerpt:
      "Faster frameworks help. Better indexes help more. The real gains come from eliminating synchronous hops, right-sizing payloads, and measuring the right things.",
    publishedAt: "Sep 2025",
    readTime: "5 min",
  },
  {
    slug: "async-communication-backend-teams",
    title: "Async communication for distributed backend teams",
    excerpt:
      "Remote backend work demands clarity over speed. How I structure RFCs, incident write-ups, and design docs so async teams ship without constant meetings.",
    publishedAt: "Aug 2025",
    readTime: "4 min",
  },
];
