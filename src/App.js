import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutme/AboutMe";
import Contact from "./components/contact/contact";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/ParticleBackground/ThemeContext";
import LoadingAnimation from "./LoadingAnimation";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppWithLoading />
      </Router>
    </ThemeProvider>
  );
};

const AppWithLoading = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  if (isLoading && location.pathname === "/") {
    return <LoadingAnimation />;
  }

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
