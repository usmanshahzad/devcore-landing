"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Services", "#services"],
  ["Solutions", "#solutions"],
  ["Projects", "#projects"],
  ["About", "#about"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const onContact = active === "#contact";

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo"><span className="logo-mark">✳</span> devcore<span className="logo-period">.</span></a>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={active === href ? "active" : ""}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            href="#contact"
            className={`btn btn-primary btn-sm nav-cta ${onContact ? "is-hidden" : ""}`}
          >
            Start a Project
          </a>
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`nav-mobile ${open ? "open" : ""}`} inert={open ? undefined : ""}>
        <div className="nav-mobile-top"><ThemeToggle /></div>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Start a Project
        </a>
      </div>
    </header>
  );
}