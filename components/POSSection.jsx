"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import MagneticButton from "./MagneticButton";
import Icon from "./Icon";
import TiltCard from "./TiltCard";

export default function POSSection() {
  const lineRef = useRef(null);
  const dashRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const dash = dashRef.current;
    if (!line || !dash) return;

    const len = line.getTotalLength();
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line.style.transition = "stroke-dashoffset 1.6s ease";
            line.style.strokeDashoffset = 0;
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(dash);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pos-section" id="solutions">
      <div className="container">
        <div className="pos-layout">
          <Reveal className="pos-copy">
            <div className="eyebrow">Featured Solution</div>
            <h2>A Smarter POS for Modern Businesses.</h2>
            <p>
              Sales, inventory, customers and reporting in one connected
              system — built for retail, restaurants and pharmacies alike.
            </p>
            <div className="pos-stats">
              <div><strong><Counter value={1204} /></strong><span>Orders / week</span></div>
              <div><strong><Counter value={98} suffix="%" /></strong><span>Uptime SLA</span></div>
              <div><strong><Counter value={42} prefix="$" suffix="k" /></strong><span>Avg. monthly revenue</span></div>
            </div>
            <MagneticButton href="#contact" className="btn btn-ghost">
              View POS Solution <Icon name="arrowRight" width="16" height="16" />
            </MagneticButton>
          </Reveal>

          <Reveal className="pos-dashboard-wrap">
            <TiltCard className="pos-dashboard" max={4}>
              <div ref={dashRef}>
                <div className="dash-top">
                  <b>DevCore POS — Overview</b>
                  <div className="dash-status"><i></i> Live</div>
                </div>
                <div className="dash-grid">
                  <div className="dash-card"><small>Sales Today</small><strong><Counter value={6840} prefix="$" /></strong><em>+12%</em></div>
                  <div className="dash-card"><small>Orders</small><strong><Counter value={312} /></strong><em>+8%</em></div>
                  <div className="dash-card"><small>Customers</small><strong><Counter value={188} /></strong><em>+4%</em></div>
                  <div className="dash-card"><small>Inventory</small><strong><Counter value={954} /></strong><em>-2%</em></div>
                </div>
                <div className="dash-main">
                  <div className="dash-chart">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                      <path
                        ref={lineRef}
                        d="M0,90 C30,70 50,95 80,60 C110,25 140,70 170,45 C200,20 230,55 260,30 C280,15 290,30 300,20"
                        fill="none" stroke="url(#g1)" strokeWidth="2.5"
                      />
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0" stopColor="#4F7CFF" />
                          <stop offset="1" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="dash-list">
                    <h5>Payments</h5>
                    <div className="row"><span>Card</span><span>64%</span></div>
                    <div className="row"><span>Cash</span><span>21%</span></div>
                    <div className="row"><span>Wallet</span><span>15%</span></div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}