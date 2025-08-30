// src/components/About.js
import React from "react";


function About() {
return (
<section id="about" className="about">
<div className="container">
<div className="section-header">
<h2>About Me</h2>
<p>I'm a passionate developer who loves creating digital experiences that make a difference.</p>
</div>
<div className="about-content">
<div className="about-image">
<img src="/images/2.jpg" alt="Kofi Osei-Okyere" className="profile-image" />
</div>
<div className="about-text">
<h3>Hello! I'm Kofi Osei-Okyere</h3>
<p>I'm a Front-End developer with 3+ years of experience creating web applications that solve real-world problems. I specialize in basic HTML, CSS & JavaScript, React.js and modern web technologies, with a keen eye for design and user experience.</p>
<p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects or enjoying a good book. I believe in continuous learning and staying up-to-date with the latest industry trends.</p>
<p>My mission is to create digital solutions that are not only functional but also beautiful, accessible and user-friendly. Let's build something amazing together!</p>
</div>
</div>
</div>
</section>
);
}


export default About;