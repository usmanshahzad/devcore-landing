"use client";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { projectsData } from "@/data/content";

function Visual({ type }) {
  if (type === "chart")
    return (
      <div className="visual-chart">
        {[40, 70, 35, 85, 55, 95, 60].map((h, i) => <span key={i} style={{ height: `${h}%` }}></span>)}
      </div>
    );
  if (type === "flow")
    return <div className="visual-flow">{Array.from({ length: 6 }).map((_, i) => <i key={i}></i>)}</div>;
  if (type === "grid")
    return <div className="visual-grid">{Array.from({ length: 6 }).map((_, i) => <i key={i}></i>)}</div>;
  if (type === "phone")
    return <div className="visual-phone"><i></i></div>;
  if (type === "pulse")
    return (
      <div className="visual-pulse">
        <svg viewBox="0 0 200 60">
          <path d="M0,30 L40,30 L55,10 L70,50 L85,30 L200,30" fill="none" stroke="#8B5CF6" strokeWidth="2" />
        </svg>
      </div>
    );
  return null;
}

export default function Projects() {
  const previewRef = useRef(null);
  const [activeVisual, setActiveVisual] = useState(null);
  const [active, setActive] = useState(false);

  function handleMove(e, visual) {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    if (previewRef.current) {
      previewRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
    if (visual !== activeVisual) setActiveVisual(visual);
    if (!active) setActive(true);
  }
  function handleLeave() {
    setActive(false);
  }

  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Selected Work</div>
          <h2>Products We&apos;ve Engineered.</h2>
        </Reveal>

        <div onMouseLeave={handleLeave}>
          {projectsData.map((p) => (
            <Reveal
              key={p.title}
              className="project-row"
              data-cursor-text="View"
              onMouseMove={(e) => handleMove(e, p.visual)}
            >
              <div className="project-visual">
                <div className="frame"><Visual type={p.visual} /></div>
              </div>
              <div className="project-info">
                <div className="project-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#contact" className="case-link">
                  Discuss a similar project <Icon name="arrowRight" width="16" height="16" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div ref={previewRef} className={`cursor-preview ${active ? "show" : ""}`}>
        <div className="cursor-preview-inner"><Visual type={activeVisual} /></div>
      </div>
    </section>
  );
}