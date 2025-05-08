import React, { useEffect, useRef, useContext, useState } from "react";
import "./AboutMe.css";
import profileDark from "../../assets/profile.png";
import profileLight from "../../assets/profile1.png";
import { ThemeContext } from "../ParticleBackground/ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const aboutMeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = aboutMeRef.current;
      const top = container.getBoundingClientRect().top;
      const bottom = container.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isVisible) {
        aboutMeRef.current
          .querySelectorAll(
            ".about-me-title, .about-me-card, .about-me-introduction, .about-me-quote"
          )
          .forEach((element, index) => {
            if (element.classList.contains("about-me-title")) {
              element.style.animation = `slideDown 1s ease forwards`;
            } else if (element.classList.contains("about-me-card")) {
              element.style.animation = `slideUp 1s ease forwards`;
              element.style.animationDelay = `${index * 0.3}s`;
            } else if (
              element.classList.contains("about-me-introduction") ||
              element.classList.contains("about-me-quote")
            ) {
              element.style.animation = `fadeIn 1.3s ease forwards`;
              element.style.animationDelay = `${index * 0.3}s`;
            }
          });
      }
    }, 300);
  }, [isVisible]);

  return (
    <section
      className={`about-me-section ${isVisible ? "visible" : ""}`}
      aria-labelledby="about-me-title"
      ref={aboutMeRef}
    >
      <div className="about-me-container">
        <h2 id="about-me-title" className="about-me-title">
          About Me
        </h2>
        <div className="about-me-card">
          <div className="about-me-profile-picture">
            <img
              src={isDarkTheme ? profileDark : profileLight}
              alt="Profile"
              className="about-me-profile-image"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
          <div className="about-me-content">
            <p className="about-me-introduction">
              Hello! I'm currently pursuing a Bachelor of Science in Information Technology. 🎓
            </p>
            <p className="about-me-introduction">
              I specialize in front-end development, creating visually appealing and user-friendly web interfaces using modern technologies. 💻
            </p>
            <p className="about-me-introduction">
              I'm also a graphic designer and web developer, passionate about blending design with functionality to build engaging digital experiences. 🎨🌐
            </p>
            <blockquote className="about-me-quote">
              "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
