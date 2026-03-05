import "./project.css";
import confetti from "canvas-confetti";

function Project({ darkMode }) {
  const projectData = [
    {
      title: "AI Concepts Website",
      image: "/ai.png",
      description:
        "Responsive website explaining Artificial Intelligence concepts with modern UI design and smooth animations.",
      tech: ["HTML5", "CSS3"],
      live: "https://spiffy-kringle-6171ae.netlify.app/",
      github: "https://github.com/shauryafrontend-droid/AI-A-Modern-Approach-Website"
    },
    {
      title: "Task Management Application",
      image: "/Todo.png",
      description:
        "Task manager with add, delete, and local storage functionality focused on clean UI and usability.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://steady-mermaid-6a182a.netlify.app/",
      github: "https://github.com/shauryafrontend-droid/TO-DO-List"
    },
    {
      title: "Real-Time Weather App",
      image: "/Weather.png",
      description:
        "Weather application using REST API integration with dynamic data rendering and error handling.",
      tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
      live: "https://majestic-raindrop-67fac5.netlify.app/",
      github: "https://github.com/shauryafrontend-droid/WeatherAppAPI"
    }
  ];

  const sparkleCard = (e) => {
    e.stopPropagation(); // prevents double sparkle (since global exists)

    confetti({
      particleCount: 40,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: ["#38bdf8", "#0ea5e9", "#60a5fa"]
    });
  };

  return (
    <section
      id="projects"
      className={`projects ${darkMode ? "projects-dark" : "projects-light"}`}
    >
      <h1>Projects</h1>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={sparkleCard}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;