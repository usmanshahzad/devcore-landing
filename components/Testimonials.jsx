import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Testimonials</div>
          <h2>What Partners Say.</h2>
        </Reveal>

        <Reveal className="testi-grid" stagger>
          <div className="testi-card">
            <div className="quote-mark">"</div>
            <p>
              DevCore took the time to understand our operations before
              writing a single line of code. The system they built fit how
              our team actually works.
            </p>
            <div className="testi-who">
              <div className="testi-avatar"></div>
              <div>
                <b>Operations Director</b>
                <span>Retail Business</span>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="quote-mark">"</div>
            <p>
              Communication was clear from day one. We always knew what was
              being built, why, and when it would ship.
            </p>
            <div className="testi-who">
              <div className="testi-avatar"></div>
              <div>
                <b>Founder</b>
                <span>Early-Stage Startup</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
