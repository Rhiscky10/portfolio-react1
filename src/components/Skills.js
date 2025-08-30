import React, { useRef } from "react";
import useInView from "../hooks/useInView";

function Skills() {
  const sectionRef = useRef(null);

  // Animate bars safely when the section enters the viewport
  useInView(sectionRef, () => {
    const bars = sectionRef.current.querySelectorAll(".skill-progress");
    bars.forEach((bar) => {
      const target = bar.getAttribute("data-progress"); // e.g. "75%"
      if (target) {
        // ensure transition exists (in case CSS doesn't set it)
        if (!bar.style.transition) {
          bar.style.transition = "width 1.5s ease-in-out";
        }
        requestAnimationFrame(() => {
          bar.style.width = target; // animate to final width
        });
      }
    });
  });

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Skills &amp; Expertise</h2>
          <p>A comprehensive overview of my technical abilities and professional skills.</p>
        </div>

        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-category">
            <h3>Technical Skills</h3>

            <div className="skill">
              <div className="skill-header">
                <span>React.js</span><span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="75%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>C++</span><span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="85%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Node.js</span><span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="75%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Html/css</span><span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>MySQL</span><span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="85%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>MongoDB</span><span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Javascript</span><span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="88%" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <h3>Soft Skills</h3>

            <div className="skill">
              <div className="skill-header">
                <span>Problem Solving</span><span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="95%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Communication</span><span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="90%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Team Leadership</span><span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="85%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Project Management</span><span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Critical Thinking</span><span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="90%" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Adaptability</span><span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="90%" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools-section">
          <h3>Tools &amp; Technologies</h3>
          <div className="tools-grid">
            <span className="tool-tag">HTML 5</span>
            <span className="tool-tag">CSS</span>
            <span className="tool-tag">JavaScript</span>
            {/* (kept same list you sent) */}
            <span className="tool-tag">React.js</span>
            <span className="tool-tag">MongoDB</span>
            <span className="tool-tag">Firebase</span>
            <span className="tool-tag">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
