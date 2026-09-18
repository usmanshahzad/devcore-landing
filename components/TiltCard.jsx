"use client";
import { useRef } from "react";

export default function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);

  function handleMove(e) {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -max;
    const ry = (px - 0.5) * max;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
  }
  function handleLeave() {
    if (ref.current) el_reset(ref.current);
  }
  function el_reset(el) {
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  }

  return (
    <div ref={ref} className={`tilt-card ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}