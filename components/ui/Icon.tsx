import type { SVGProps } from "react";
import type { SkillIcon, SocialIcon } from "@/types";

type IconName = SocialIcon | SkillIcon | "arrow" | "external" | "github";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 18, ...rest }: IconProps) {
  const props: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...rest,
  };

  switch (name) {
    case "email":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7" />
          <path d="M8 7v.01" />
          <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
          <path d="M12 10v7" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "passport":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="11" r="3" />
          <path d="M9 17h6" />
        </svg>
      );
    case "website":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "stack":
      return (
        <svg {...props}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...props}>
          <path d="M3 12h4l2-6 4 12 2-6h6" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props}>
          <path d="M7 18a4 4 0 0 1-.9-7.9 5 5 0 0 1 9.6-1.4A4 4 0 0 1 17 18H7Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="m6 6 2.5 2.5" />
          <path d="M15.5 15.5 18 18" />
          <path d="m6 18 2.5-2.5" />
          <path d="M15.5 8.5 18 6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "external":
      return (
        <svg {...props}>
          <path d="M14 4h6v6" />
          <path d="M20 4 10 14" />
          <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </svg>
      );
    case "github":
      return (
        <svg {...props}>
          <path d="M9 19c-4 1-4-2-6-2" />
          <path d="M15 22v-3.9a3.4 3.4 0 0 0-1-2.7c3-.3 6-1.4 6-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.7 5.8 3 5.8 3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.4c0 4.5 3 5.7 6 6a3.4 3.4 0 0 0-1 2.6V22" />
        </svg>
      );
    default:
      return null;
  }
}
