"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  stagger = false,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";

  return (
    <Tag ref={ref} className={`${className} ${base} ${inView ? "in" : ""}`} {...props}>
      {children}
    </Tag>
  );
}
