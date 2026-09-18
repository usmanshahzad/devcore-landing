"use client";
import { useEffect, useState } from "react";

const sections = [
  ["01", "#home"],
  ["02", "#services"],
  ["03", "#solutions"],
  ["04", "#industries"],
  ["05", "#projects"],
  ["06", "#about"],
  ["07", "#technology"],
  ["08", "#contact"],
];

export default function SectionIndicator() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const els = sections.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="section-indicator" aria-hidden="true">
      {sections.map(([num, href]) => (
        <a
          key={href}
          href={href}
          className={`si-dot ${active === href ? "active" : ""}`}
        >
          <span className="si-num">{num}</span>
          <span className="si-line"></span>
        </a>
      ))}
    </div>
  );
}