"use client";
import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { servicesData } from "@/data/content";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services">
      <div className="bg-grid"></div>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Services</div>
          <h2>Everything You Need to Build, Launch &amp; Scale.</h2>
          <p>
            A full-stack partner for software, product and infrastructure —
            organized around how businesses actually work.
          </p>
        </Reveal>

        <Reveal className="services-panel">
          <div className="services-list">
            {servicesData.map((s, i) => (
              <button
                key={s.title}
                className={`service-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-icon">
                  <Icon name={s.icon} width="17" height="17" />
                </span>
                <span className="tab-text">
                  <strong>{s.title}</strong>
                  <small>{s.tag}</small>
                </span>
                <span className="tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="services-display">
            {servicesData.map((s, i) => (
              <div
                key={s.title}
                className={`display-inner ${active === i ? "active" : ""}`}
              >
                <div className="display-visual">
                  <Icon name={s.icon} width="24" height="24" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="chip-list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {s.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
