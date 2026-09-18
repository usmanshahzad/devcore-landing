"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { processData } from "@/data/content";

export default function Process() {
  const timelineRef = useRef(null);
  const [fillPct, setFillPct] = useState(0);
  const stepRefs = useRef([]);
  const [inSteps, setInSteps] = useState(new Array(processData.length).fill(false));

  useEffect(() => {
    let raf;
    function update() {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const scrolled = Math.min(Math.max(vh * 0.75 - rect.top, 0), total);
      setFillPct(total > 0 ? (scrolled / total) * 100 : 0);
    }
    function onScroll() {
      raf = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target);
            if (idx !== -1) {
              setInSteps((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">How We Work</div>
          <h2>From Idea to Production.</h2>
          <p style={{ marginInline: "auto" }}>
            A clear, disciplined process — from first conversation to
            long-term support.
          </p>
        </Reveal>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-track">
            <div className="timeline-fill" style={{ height: `${fillPct}%` }}></div>
          </div>
          <div>
            {processData.map(([num, title, desc], i) => (
              <div
                key={num}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`t-step ${inSteps[i] ? "in" : ""}`}
              >
                <div className="content">
                  <h4>
                    {num} — {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className="num">{num}</div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
