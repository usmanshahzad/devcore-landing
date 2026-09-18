import Reveal from "./Reveal";

export default function Solutions() {
  return (
    <section>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Digital Solutions</div>
          <h2>Products Built Around Your Business.</h2>
        </Reveal>

        <Reveal className="bento" stagger>
          <div className="bento-item b1">
            <div className="deco deco-saas"></div>
            <h4>SaaS Platforms</h4>
            <p>Custom, scalable cloud applications built for growth.</p>
          </div>

          <div className="bento-item b3">
            <div className="deco deco-commerce">
              <span style={{ height: "30%" }}></span>
              <span style={{ height: "60%" }}></span>
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "80%" }}></span>
            </div>
            <h4>E-commerce</h4>
            <p>Modern online stores and commerce platforms.</p>
          </div>

          <div className="bento-item b4">
            <div className="deco deco-mobile">
              <i></i>
            </div>
            <h4>Mobile Apps</h4>
            <p>iOS &amp; Android experiences.</p>
          </div>

          <div className="bento-item b2">
            <div className="deco deco-bms"></div>
            <h4>Business Management Systems</h4>
            <p>Custom systems designed around real operational workflows.</p>
          </div>

          <div className="bento-item b5">
            <div className="deco deco-auto">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <h4>Automation</h4>
            <p>
              Automate repetitive business processes and manual workflows
              end-to-end.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
