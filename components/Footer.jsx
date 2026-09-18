import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Dev<span>Core</span>
            </a>
            <p>Digital products. Smarter businesses.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <Icon name="linkedin" width="16" height="16" />
              </a>
              <a href="#" aria-label="GitHub">
                <Icon name="github" width="16" height="16" />
              </a>
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" width="16" height="16" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" width="16" height="16" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <a href="#services">Software Development</a>
            <a href="#services">Web Development</a>
            <a href="#services">Mobile Apps</a>
            <a href="#solutions">POS Solutions</a>
            <a href="#services">UI/UX Design</a>
            <a href="#services">AI &amp; Automation</a>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <a href="#">Blog</a>
            <a href="#projects">Case Studies</a>
            <a href="#technology">Technologies</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} DevCore. All rights reserved.</span>
          <span>Designed &amp; engineered by DevCore.</span>
        </div>
      </div>
    </footer>
  );
}
