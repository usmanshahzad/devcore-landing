"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }
    let raf, start = null;
    const duration = 1100;

    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        setTimeout(() => setHide(true), 200);
        setTimeout(() => setVisible(false), 850);
      }
    }
    document.body.style.overflow = "hidden";
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hide) document.body.style.overflow = "";
  }, [hide]);

  if (!visible) return null;

  return (
    <div className={`preloader ${hide ? "hide" : ""}`}>
      <div className="preloader-inner">
        <div className="preloader-logo">Dev<span>Core</span></div>
        <div className="preloader-bar">
          <div className="preloader-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="preloader-pct">{progress}%</div>
      </div>
    </div>
  );
}