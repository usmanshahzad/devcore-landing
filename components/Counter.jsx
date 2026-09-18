"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, prefix = "", suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const reduceMotion = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reduceMotion) {
              setDisplay(value);
              return;
            }

            let start = null;
            function step(ts) {
              if (!start) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.floor(eased * value));
              if (progress < 1) requestAnimationFrame(step);
              else setDisplay(value);
            }
            requestAnimationFrame(step);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
