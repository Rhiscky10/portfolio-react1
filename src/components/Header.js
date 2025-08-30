// src/components/Header.js
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";


function Header() {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
const [menuOpen, setMenuOpen] = useState(false);


useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("theme", theme);
}, [theme]);


return (
<header className="header">
<div className="container header-content">
<div className="logo">
<div className="logo-avatar">KO</div>
<div className="logo-text">
<h1>Kofi Osei-Okyere</h1>
<p>Front-End Web Developer</p>
</div>
</div>


<nav className="nav-desktop">
<a href="#about" className="nav-link">About</a>
<a href="#skills" className="nav-link">Skills</a>
<a href="#projects" className="nav-link">Projects</a>
<a href="#testimonials" className="nav-link">Testimonials</a>
<a href="#contact" className="nav-link">Contact</a>
<button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
{theme === "light" ? <FaMoon /> : <FaSun />}
</button>
</nav>


<div className="mobile-controls">
<button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
{theme === "light" ? <FaMoon /> : <FaSun />}
</button>
<button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes /> : <FaBars />}
</button>
</div>
</div>


{menuOpen && (
<nav className="nav-mobile">
<a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
<a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
<a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
<a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
<a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
</nav>
)}
</header>
);
}


export default Header;