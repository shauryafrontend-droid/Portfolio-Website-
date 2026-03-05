import { useState, useEffect } from "react";
import "./App.css";
import About from "./Component/About";
import Project from "./Component/Project";
import Skill from "./Component/skill";
import Contact from "./Component/Contact";
import confetti from "canvas-confetti";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const fullText =
    "Frontend Developer | Seeking Internship Opportunities";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Fade in
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Sparkle effect
  const sparkle = (e) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ["#38bdf8", "#0ea5e9", "#60a5fa"],
    });
  };

  return (
    <div
      className={darkMode ? "container dark" : "container light"}
      onClick={sparkle}
    >
      {/* Cursor */}
      <div
        className="cursor"
        style={{ left: cursor.x, top: cursor.y }}
      ></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">Shaurya Aggarwal</div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className={`hero ${show ? "fade-in" : ""}`}>
        <div className="hero-content">
          <h1>Hi, I'm Shaurya 👋</h1>
          <h2 className="typing">{text}</h2>
          <p>
            Passionate frontend developer building responsive and
            modern web applications using React and JavaScript.
            Currently open to internship opportunities.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="/Shaurya Aggarwal_Frontend Developer_Resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <About darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <Skill darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;