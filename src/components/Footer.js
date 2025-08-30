import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Logo + Text */}
          <div className="footer-main">
            <div className="logo">
              <div className="logo-avatar">KO</div>
              <div className="logo-text">
                <h3>Kofi Osei-Okyere</h3>
                <p>Front-End Web Developer</p>
              </div>
            </div>
            <p className="footer-description">
              Creating digital experiences that make a difference.
              <br />
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kofi-osei-okyere-66b284264/"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#contact" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Rhiscky. All rights reserved.</p>
          <p className="footer-made">
            Made by <i className="fas fa-heart"></i> Rhiscky
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
