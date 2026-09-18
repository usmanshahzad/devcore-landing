"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0, gx = 0, gy = 0, raf;

    function onMove(e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
    }
    function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.07; gy += (my - gy) * 0.07;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      glow.style.left = gx + "px"; glow.style.top = gy + "px";
      raf = requestAnimationFrame(loop);
    }
    function onOver(e) {
      const target = e.target.closest("[data-cursor-text], a, button, .ind-row, .service-tab, .project-row");
      if (!target) return;
      ring.classList.add("hover");
      const text = target.getAttribute("data-cursor-text");
      if (text) {
        setLabel(text);
        ring.classList.add("has-label");
      }
    }
    function onOut(e) {
      const target = e.target.closest("[data-cursor-text], a, button, .ind-row, .service-tab, .project-row");
      if (!target) return;
      ring.classList.remove("hover");
      ring.classList.remove("has-label");
      setLabel("");
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}>
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </>
  );
}