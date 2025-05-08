import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import "../../App.css"; 
import "../Home/Home.css";
import ParticleBackground from "../ParticleBackground/ParticlesBackground";
import { ThemeContext } from "../ParticleBackground/ThemeContext";
import profileDark from "../../assets/profile.png";
import profileLight from "../../assets/profile1.png";

function Home() {
  const navigate = useNavigate();
  const { isDarkTheme } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const textArray = useMemo(() => ["Graphic Designer", "Web Developer", "Freelancer"], []);

  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (charIndex < textArray[currentIndex].length) {
      const typingTimer = setTimeout(() => {
        setText((prevText) => prevText + textArray[currentIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimer);
    } else {
      const delayTimer = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 2000);
      return () => clearTimeout(delayTimer);
    }
  }, [charIndex, currentIndex, textArray]);

  const themeColor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <section
      id="home"
      className={`home-section ${homeInView ? "animate-in" : ""}`}
      ref={homeRef}
      aria-labelledby="home-title"
    >
      <ParticleBackground themeColor={themeColor} />
      <div className="home-content">
        <div className="home-text">
        <div className="home-profile-picture">
            <img
              src={isDarkTheme ? profileDark : profileLight}
              alt="Profile"
              className="home-profile-image"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
          <p>Hello, I'm</p>
          <h1 id="home-title">Rhealyn Vasquez</h1>
          <h2>
            <span>{text}</span>
          </h2>

          <button
            className="home-text"
            onClick={() => navigate("/contact")}
            aria-label="Navigate to Contact section"
          >
            Connect with Me
          </button>
        </div>
      </div>

      <div className="social-icons" aria-label="Social media links">
        <a
          href="https://www.facebook.com/raiayxs/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
          aria-label="Facebook profile"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://github.com/raiahyxs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
          aria-label="GitHub profile"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://instagram.com/raiayxs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          aria-label="Instagram profile"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </section>
  );
}

export default Home;
