import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "deepfriend",
    company: "Deepfriend LLC",
    companyUrl: "https://dfbubbles.com/",
    role: "Founder & CTO",
    location: "Delaware, US · Remote",
    start: "Apr 2024",
    end: "Present",
    current: true,
    description:
      "Founded a science-first AI mental health platform grounded in Cognitive Behavioral Therapy (CBT), owning the product end-to-end from architecture to public launch.",
    bullets: [
      "Designed and deployed a scalable backend powering real-time AI-driven conversations with LLMs, including an advanced memory system and voice chat under a 1s SLA.",
      "Architected a sustainable Big Data system on Google Cloud Platform (GCP) to handle sensitive user data with high availability and compliance.",
      "Launched on the Google Play Store, reaching 1k+ downloads with a 30% 7-day retention rate through continuous data-driven iteration.",
      "Incorporated the company in Delaware and led legal, privacy and data-handling compliance from day one.",
    ],
    tags: ["Node.js", "TypeScript", "LLMs", "GCP", "Real-time", "Voice"],
  },
  {
    id: "rrverse",
    company: "Rrverse Consulting",
    companyUrl: "https://rrverse.com/",
    role: "Senior Backend Developer",
    location: "Madrid, Spain",
    start: "Nov 2022",
    end: "Dec 2025",
    description:
      "Telecommunications client serving 10M+ subscribers. Owned the core network anomaly detection backend and the real-time Big Data pipeline behind it.",
    bullets: [
      "Engineered the core network anomaly detection backend for a 10M+ client telecommunications network.",
      "Optimized critical microservices under a 300ms SLA, delivering an estimated 60% reduction in average response time.",
      "Architected and implemented a real-time Big Data pipeline processing millions of network events daily, integrating Elastic Machine Learning for predictive anomaly detection.",
      "Redesigned complex queries in ClickHouse, BigQuery and MariaDB, cutting data retrieval latency by 30% and ensuring stability during national peak traffic.",
      "Deployed and operated containerized services on Kubernetes (Rancher / OpenShift), guaranteeing high availability for mission-critical services.",
      "Built a real-time client status backend that drastically reduced incident resolution time for the customer support department.",
    ],
    tags: [
      "Node.js",
      "TypeScript",
      "Kubernetes",
      "ClickHouse",
      "BigQuery",
      "Elastic ML",
    ],
  },
  {
    id: "aszendit",
    company: "Aszendit Consulting",
    companyUrl: "https://aszendit.com/",
    role: "Backend Developer",
    location: "Madrid, Spain",
    start: "Sep 2021",
    end: "Nov 2022",
    description:
      "Renewable energy consultancy. Built the backend powering real-time solar generation analytics for a client-facing mobile application.",
    bullets: [
      "Designed and implemented a backend system to process real-time solar panel generation data.",
      "Created high-performance microservices to serve generation metrics to the client-facing application.",
      "Contributed to the mobile app interface (Expo / React Native) and ensured seamless backend integration.",
      "Stepped up to lead the app's final development phase, working in fast-paced 1-week SCRUM cycles.",
    ],
    tags: ["Node.js", "Microservices", "React Native", "SCRUM"],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    location: "Barcelona, Spain",
    start: "Mar 2018",
    end: "Nov 2022",
    description:
      "Independent full-stack work for small and mid-sized businesses across retail and services.",
    bullets: [
      "Designed digital presence and SEO strategies for 10+ SMEs in retail and service sectors.",
      "Handled everything from domain management to full-stack deployment and ongoing maintenance.",
    ],
    tags: ["Full-stack", "SEO", "Deployment"],
  },
];
