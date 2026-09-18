import Reveal from "./Reveal";
import { whyData } from "@/data/content";

export default function WhyDevCore() {
  return (
    <section>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Why DevCore</div>
          <h2>Engineering With Intent.</h2>
        </Reveal>

        <div>
          {whyData.map(([num, title, desc]) => (
            <Reveal key={num} className="why-row">
              <div className="big-num">{num}</div>
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
