"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function CTA() {
  const [sent, setSent] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry: ${data.get("type") || "New project"}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:hello@devcore.io?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="cta" id="contact">
      <div className="glow glow-a"></div>
      <div className="glow glow-b"></div>
      <div className="container cta-layout">
        <Reveal className="cta-copy">
          <div className="eyebrow">Contact</div>
          <h2>Have an Idea? <br />Let&apos;s Build It.</h2>
          <p>
            Tell us what you&apos;re building. We&apos;ll help turn your idea
            into a scalable digital product.
          </p>
          <div className="cta-info">
            <a href="mailto:hello@devcore.io" className="cta-info-item">
              <Icon name="link" width="16" height="16" /> hello@devcore.io
            </a>
            <span className="cta-info-item">
              <Icon name="globe" width="16" height="16" /> Remote &amp; on-site — worldwide
            </span>
          </div>
        </Reveal>

        <Reveal className="cta-form-card">
          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <h4>Your email draft is ready.</h4>
              <p>Complete sending in your email app. Your enquiry has not been submitted through this website.</p><button className="btn btn-ghost" onClick={() => setSent(false)}>Back to form</button>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label><span>Name</span><input name="name" autoComplete="name" type="text" placeholder="Your name" required /></label>
                <label><span>Email</span><input name="email" autoComplete="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <label>
                <span>Project Type</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Software Development</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>POS Solution</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
              </label>
              <button type="submit" className="btn btn-primary form-submit">
                Prepare email
                <Icon name="arrowRight" width="16" height="16" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}