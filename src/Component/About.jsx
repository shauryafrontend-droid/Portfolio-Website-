import React from "react";
import "./About.css";
import confetti from "canvas-confetti";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = ({ darkMode }) => {

  const handleClick = (e) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });
  };

  return (
    <section
      id="about"
      onClick={handleClick}
      className={`about ${darkMode ? "about-dark" : "about-light"}`}
    >
      <div className="about-container">
        <div className="about-image">
          <img src="/Shaurya.png" alt="Shaurya Aggarwal" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <h2>Frontend Developer & BCA Student</h2>

          <p>
            I am a passionate and detail-oriented Frontend Developer currently
            pursuing Bachelor of Computer Applications (BCA). I specialize in
            building responsive, modern, and user-centric web applications using
            HTML, CSS, JavaScript, and React.
          </p>

          <p>
            I enjoy transforming ideas into clean and interactive digital
            experiences. My focus is on writing maintainable code, improving
            performance, and designing intuitive user interfaces that enhance usability.
          </p>

          <p>
            Along with frontend development, I consistently practice Data
            Structures and Algorithms to strengthen my logical thinking and
            problem-solving skills.
          </p>

          <p>
            I am actively seeking internship opportunities where I can contribute
            to real-world projects, collaborate with experienced developers,
            and grow both technically and professionally.
          </p>

          <h3 className="internship-tag">
            🚀 Open to Internship Opportunities
          </h3>
          <div className="social-links">

            <a
              href="mailto:shauryaaggnoida1@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/shauryafrontend-droid"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shaurya-aggarwal-7b655b326/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
