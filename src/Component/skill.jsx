import "./Skills.css";

function Skill({ darkMode }) {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Responsive Design",
    "Git & GitHub",
    "REST API",
    "Vite",
  ];

  return (
    <section
      id="skills"
      className={`skills-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="skills-container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;