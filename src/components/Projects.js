import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card featured">
            <img
              src="/images/3.png"
              alt="E-Commerce Platform"
              className="hala"
              width="450px"
              height="auto"
            />
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution with payment integration,
                inventory management and admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/SHOP/blob/main/adidas_home_page.html"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://rhisckyshop.created.app"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card featured">
            <img
              src="/images/4.png"
              alt="Health & Wellness Tracker"
              className="hala"
              width="500px"
              height="auto"
            />
            <div className="project-content">
              <h3>Health & Wellness Tracker</h3>
              <p>My Wellness Tracker System – Prioritize Your Mind & Body!</p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
              src="/images/5.png"
              alt="Student Time Manager"
              className="hala"
              width="450px"
              height="auto"
            />
            <div className="project-content">
              <h3>Student Time Manager</h3>
              <p>Stay organized and manage your academic life effectively</p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card featured">
            <img
              src="/images/6.png"
              alt="PharmaFind"
              className="hala"
              width="300px"
              height="auto"
            />
            <div className="project-content">
              <h3>PharmaFind</h3>
              <p>
                A new project where anyone can find Pharmacies around the places
                they live making it easy to get medications from their homes.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Google Places API</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <img
              src="/images/8.png"
              alt="Portfolio Website"
              className="hala"
              width="400px"
              height="auto"
            />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A responsive portfolio website with smooth animations, contact
                forms, and blog integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="http://127.0.0.1:5500/index.html"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <img
              src="/images/7.png"
              alt="Study Planner"
              className="hala"
              width="400px"
              height="auto"
            />
            <div className="project-content">
              <h3>Study Planner</h3>
              <p>
                Study Planner is a web application designed to help students
                organize their study schedules, manage tasks, and track academic
                goals.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <a
            href="https://github.com/Rhiscky10"
            className="btn btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
