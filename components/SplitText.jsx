"use client";
import { useEffect, useRef, useState } from "react";

export default function SplitText({ text, className = "", as: Tag = "span", delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const words = text.split(" ");

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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`split-text ${className}`}>
      {words.map((word, i) => (
        <span className="split-word-wrap" key={i}>
          <span
            className={`split-word ${inView ? "in" : ""}`}
            style={{ transitionDelay: `${delay + i * 0.055}s` }}
          >
            {word}
            {i !== words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}