"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";
type RevealAs = "div" | "li";

type RevealProps = {
  as?: RevealAs;
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
};

export function Reveal({
  as = "div",
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  threshold = 0.12,
}: RevealProps) {
  const Component = as as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`reveal ${className ?? ""}`}
      data-reveal={visible ? "visible" : "hidden"}
      data-reveal-direction={direction}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
}
