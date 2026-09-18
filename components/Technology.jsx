import Reveal from "./Reveal";
import { techNodes } from "@/data/content";

export default function Technology() {
  const total = techNodes.length;
  const radiusPct = 44;

  return (
    <section id="technology">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Technology</div>
          <h2>A Modern, Connected Stack.</h2>
        </Reveal>

        <Reveal className="orbit-wrap">
          <div className="orbit-ring"></div>
          <div className="orbit-center">
            <b>DevCore</b>
            <span>Technology Stack</span>
          </div>

          {techNodes.map(([name, sub], i) => {
            const angle = (360 / total) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + radiusPct * Math.cos(rad);
            const y = 50 + radiusPct * Math.sin(rad);
            return (
              <div
                key={name}
                className="orbit-node"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <b>{name}</b>
                <span>{sub}</span>
              </div>
            );
          })}

          {techNodes.map(([name], i) => {
            const angle = (360 / total) * i - 90;
            return (
              <div
                key={`line-${name}`}
                className="orbit-line"
                style={{ width: `${radiusPct}%`, transform: `rotate(${angle}deg)` }}
              ></div>
            );
          })}
        </Reveal>

        <div className="orbit-fallback">
          {techNodes.map(([name, sub]) => (
            <div key={name}>
              <b>{name}</b>
              <span>{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
