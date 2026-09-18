import Reveal from "./Reveal";
import { industriesData } from "@/data/content";

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Industries</div>
          <h2>Built for the Way Your Industry Works.</h2>
        </Reveal>

        <Reveal className="industries-list">
          {industriesData.map(([name, desc], i) => (
            <div key={name} className="ind-row">
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
              <span className="arrow">→</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
