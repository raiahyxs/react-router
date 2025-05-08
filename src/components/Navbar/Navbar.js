import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ParticleBackground/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    navigate(`/${section}`);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setTop(-80);
      } else {
        setTop(0);
      }
      lastScrollTop = currentScrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isDarkTheme ? "dark-navbar" : "light-navbar"}`} style={{ top: `${top}px` }}>
      <div className="navbar-content">
        <Link to="/" onClick={() => handleNavClick("home")} className="logo">
          <span className="rhealyn">Rhealyn</span>
        </Link>
        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleMenu();
            }
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`} role="navigation" aria-label="Main navigation">
          <li role="presentation">
            <Link
              to="/"
              onClick={() => handleNavClick("home")}
              className={activeSection === "home" ? "active" : ""}
              aria-label="Home section"
            >
              Home
            </Link>
          </li>
          <li role="presentation">
            <Link
              to="/about"
              onClick={() => handleNavClick("about")}
              className={activeSection === "about" ? "active" : ""}
              aria-label="About section"
            >
              About
            </Link>
          </li>
          <li role="presentation">
            <Link
              to="/projects"
              onClick={() => handleNavClick("projects")}
              className={activeSection === "projects" ? "active" : ""}
              aria-label="Projects section"
            >
              Projects
            </Link>
          </li>
          <li role="presentation">
            <Link
              to="/contact"
              onClick={() => handleNavClick("contact")}
              className={activeSection === "contact" ? "active" : ""}
              aria-label="Contact section"
            >
              Contact
            </Link>
          </li>
          <li role="presentation" className="theme-switch-container">
            <label className="theme-switch" role="switch" aria-checked={!isDarkTheme}>
              <div className="slider-shadow"></div>
              <input type="checkbox" checked={!isDarkTheme} onChange={toggleTheme} aria-label="Toggle theme" />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
