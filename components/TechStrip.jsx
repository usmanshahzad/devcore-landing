import { techList } from "@/data/content";

export default function TechStrip() {
  const items = [...techList, ...techList];

  return (
    <section className="strip">
      <div className="container">
        <p>Modern technology. Scalable architecture. Reliable products.</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
