import React from "react";

function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-avatar">KO</div>
          <h1 className="hero-title">Kofi Osei-Okyere</h1>
          <p className="hero-subtitle">Front-End Web Developer </p>
          <p className="hero-description">
            I craft beautiful, functional, and user-centered digital experiences.
            Passionate about clean code, innovative design and turning ideas into reality.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fas fa-envelope"></i> Contact Me
            </button>
            <button className="btn btn-secondary">
              <a
                href="/cv.pdf"
                download="Kofi-Osei-Okyere-CV.pdf"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kofi-osei-okyere-66b284264/"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:rhis.cky10@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <button
            className="scroll-down"
            onClick={() => scrollToSection("about")}
          >
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
