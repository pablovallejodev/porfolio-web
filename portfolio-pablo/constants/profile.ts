import type { Profile } from "@/types";

export const projectRepoUrl = "https://github.com/pablovallejodev/porfolio-web";

export const profile: Profile = {
  name: "Pablo Vallejo",
  headline: "Senior Backend Engineer — Node.js · TypeScript · Big Data",
  shortHeadline: "Senior Backend Engineer",
  status: "Open to permanent and freelance opportunities",
  summary: [
    "Spanish Senior Backend Engineer with 8+ years of experience designing high-performance microservices and monoliths backed by real-time Big Data pipelines.",
    "Expert in Node.js and TypeScript, with proven impact in high-throughput environments serving more than 10 million users. Comfortable owning systems end-to-end, from architecture and observability to production rollout.",
    "EU citizen. Available for permanent positions and freelance engagements worldwide.",
  ],
  highlights: [
    {
      value: "8+ yrs",
      label: "Backend engineering",
    },
    {
      value: "10M+",
      label: "Users served in production",
    },
    {
      value: "<300ms",
      label: "SLA on critical services",
    },
    {
      value: "3",
      label: "Languages spoken",
    },
  ],
  social: [
    {
      label: "Email",
      value: "pablo@pablovallejo.dev",
      href: "mailto:pablo@pablovallejo.dev",
      icon: "email",
    },
    {
      label: "LinkedIn",
      value: "pablovallejodev",
      href: "https://linkedin.com/in/pablovallejodev/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "pablovallejodev",
      href: "https://github.com/pablovallejodev",
      icon: "github",
    },
    {
      label: "Status",
      value: "Spanish · EU Citizen",
      href: "",
      icon: "passport",
    },
  ],
};
