export default function BrandMarquee() {
  const text = "Let's Build Something Exceptional — DevCore — ";
  const items = Array(6).fill(text);

  return (
    <div className="brand-marquee">
      <div className="brand-marquee-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}