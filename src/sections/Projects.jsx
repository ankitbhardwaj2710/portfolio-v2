const projects = [
  {
    id: "01",
    title: "FlatFlow",
    category: "PRODUCTIVITY / FINTECH",
    description:
      "A modern roommate and flat-management application built to simplify shared living, expenses, settlements and member management.",
    stack: ["Flutter", "Firebase", "Riverpod", "Firestore"],
    featured: true,
    color: "#a855f7",
  },
  {
    id: "02",
    title: "FitPulse",
    category: "HEALTH / FITNESS",
    description:
      "A fitness companion focused on workout tracking, water intake, goals, challenges and daily activity.",
    stack: ["Flutter", "Firebase", "SQLite"],
    color: "#8b5cf6",
  },
  {
    id: "03",
    title: "Lingo Learn",
    category: "EDUCATION",
    description:
      "A language-learning experience with vocabulary, pronunciation, quizzes, categories, favourites and progress tracking.",
    stack: ["Flutter", "Firebase", "Authentication"],
    color: "#c084fc",
  },
  {
    id: "04",
    title: "Flashcard Quiz",
    category: "LEARNING",
    description:
      "An interactive flashcard and quiz application designed around focused learning and quick knowledge checks.",
    stack: ["Flutter", "Dart", "Firebase"],
    color: "#7c3aed",
  },
  {
    id: "05",
    title: "SAMVEDAN",
    category: "CIVIC TECHNOLOGY",
    description:
      "A civic issue reporting application created for identifying and reporting community problems through a mobile-first experience.",
    stack: ["Flutter", "Firebase", "UI/UX"],
    color: "#a78bfa",
  },
  {
    id: "06",
    title: "AI Tourist Guider",
    category: "TRAVEL / AI",
    description:
      "A mobile travel companion designed around attraction discovery, recommendations and personalised itinerary planning.",
    stack: ["Flutter", "AI/ML", "Firebase"],
    color: "#8b5cf6",
  },
];

function ProjectPlanet({ color, featured = false }) {
  return (
    <div
      className={`project-planet ${
        featured ? "project-planet-featured" : ""
      }`}
      style={{ "--project-color": color }}
    >
      <div className="project-planet-glow" />

      <div className="project-planet-ring project-ring-one" />
      <div className="project-planet-ring project-ring-two" />

      <div className="project-planet-surface">
        <span>✦</span>
      </div>
    </div>
  );
}

function Projects() {
  const featured = projects.find(
    (project) => project.featured
  );

  const secondaryProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="projects-section"
    >
      {/* HEADER */}
      <div className="projects-heading">
        <div className="projects-kicker">
          03 / SELECTED PROJECTS
        </div>

        <h2>
          Built along
          <br />
          <span>the way.</span>
        </h2>

        <p>
          A collection of products, experiments and
          applications built while exploring technology,
          design and real-world problems.
        </p>
      </div>

      {/* FEATURED PROJECT */}
      <div className="featured-project">
        <div className="featured-project-planet">
          <ProjectPlanet
            color={featured.color}
            featured
          />
        </div>

        <div className="featured-project-content">
          <div className="project-index">
            {featured.id} / 06
          </div>

          <div className="project-category">
            {featured.category}
          </div>

          <h3>{featured.title}</h3>

          <p>{featured.description}</p>

          <div className="project-stack">
            {featured.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href="https://github.com/ankitbhardwaj2710"
              target="_blank"
              rel="noreferrer"
            >
              VIEW PROJECT
              <span>↗</span>
            </a>

            <span className="project-status">
              ● LATEST BUILD
            </span>
          </div>
        </div>
      </div>

      {/* PROJECT ORBITS */}
      <div className="projects-orbit-grid">
        {secondaryProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            style={{
              "--project-color": project.color,
            }}
          >
            <div className="project-card-top">
              <span>{project.id}</span>
              <span>{project.category}</span>
            </div>

            <ProjectPlanet
              color={project.color}
            />

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card-bottom">
              <span>PROJECT / {project.id}</span>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>

      {/* FOOTER */}
      <div className="projects-end">
        <span />
        MORE PROJECTS IN ORBIT
        <span />
      </div>
    </section>
  );
}

export default Projects;