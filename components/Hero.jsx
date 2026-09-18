import Icon from "./Icon";
import SplitText from "./SplitText";

export default function Hero() {
  return (
    <section className="hero studio-hero" id="home">
      <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="studio-label"><span /> YOUR NEXT CHAPTER, ENGINEERED.</div>
          <h1 className="hero-title">
            <SplitText text="Big ideas." as="span" className="hero-line" delay={0.1} />
            <SplitText text="Beautifully" as="span" className="hero-line" delay={0.25} />
            <SplitText text="built." as="span" className="hero-line hero-line-em" delay={0.4} />
          </h1>
          <p className="hero-sub">We turn ambitious ideas into exceptional digital experiences. Software, websites, and systems built for your next stage of growth.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Let’s build something <Icon name="arrowRight" width="18" height="18" /></a>
            <a href="#projects" className="hero-work-link"><span>↗</span> Explore our work</a>
          </div>
          <div className="hero-signoff"><div className="signoff-symbol">✳</div><p>Thoughtful design. Powerful engineering.<br /><strong>One dedicated technology partner.</strong></p></div>
        </div>
        <div className="studio-visual">
          <div className="visual-caption"><span>FROM COMPLEXITY TO CLARITY</span><span>01 / DEVCORE</span></div>
          <div className="product-window">
            <div className="product-toolbar"><div className="window-dots"><i /><i /><i /></div><span>workspace.devcore.io</span><span>↗</span></div>
            <div className="product-shell">
              <div className="product-rail"><b>dc<span>_</span></b><span className="rail-active">▦</span><span>◫</span><span>↗</span><span>◷</span><span className="rail-bottom">⚙</span></div>
              <div className="product-main">
                <div className="product-heading"><div><small>YOUR BUSINESS, CONNECTED</small><h3>Overview <span>↗</span></h3></div><span className="live-pill"><i /> Live</span></div>
                <div className="product-metrics"><div><small>Total revenue</small><strong>$48,290<span>↗ 18.6%</span></strong></div><div><small>Active customers</small><strong>2,481<span>↗ 12.8%</span></strong></div></div>
                <div className="revenue-graph"><div><b>Revenue overview</b><span>This month⌄</span></div><div className="graph-canvas"><div className="graph-grid"><span>$50k</span><span>$25k</span><span>$0</span></div><svg viewBox="0 0 440 130" preserveAspectRatio="none" aria-label="Illustrative revenue growth chart" role="img"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9ee8bd" stopOpacity=".25"/><stop offset="100%" stopColor="#9ee8bd" stopOpacity="0"/></linearGradient></defs><path d="M0 115 C25 115 25 90 55 94 S95 112 120 72 S160 92 185 62 S220 83 250 42 S292 65 325 30 S360 46 395 13 S420 23 440 4 L440 130 L0 130Z" fill="url(#chart-fill)"/><path className="animated-chart-line" d="M0 115 C25 115 25 90 55 94 S95 112 120 72 S160 92 185 62 S220 83 250 42 S292 65 325 30 S360 46 395 13 S420 23 440 4" fill="none" stroke="#9ee8bd" strokeWidth="3"/></svg></div><div className="graph-dates"><span>01 Sep</span><span>07 Sep</span><span>14 Sep</span><span>21 Sep</span><span>30 Sep</span></div></div>
                <div className="product-activity"><b>Recent activity</b><span>View all ↗</span></div><div className="activity-row"><span className="activity-icon">✓</span><div><b>Payment received</b><small>Online store · Just now</small></div><strong>+$249.00</strong></div>
              </div>
            </div>
          </div>
          <div className="build-chip"><span>⌘</span><div><small>BUILT FOR WHAT’S NEXT</small><b>Designed to scale with you.</b></div><i>↗</i></div>
          <div className="code-chip"><span>● ● ●</span><code><i>const</i> nextChapter = <b>await</b><br />devcore.<em>build</em>(yourIdea);</code></div>
          <div className="visual-footnote"><span>DESIGN + DEVELOPMENT + POSSIBILITY</span><span>✳</span></div>
        </div>
      </div>
      <div className="container hero-bottom"><a href="#services"><span>↓</span> SCROLL TO EXPLORE</a><span>FROM FIRST IDEA TO WHAT’S NEXT.</span></div>
    </section>
  );
}
