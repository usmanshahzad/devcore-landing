"use client";
import { useRef } from "react";

export default function MagneticButton({ href = "#", className = "", children, onClick }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic btn-shine ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span className="btn-content">{children}</span>
    </a>
  );
}