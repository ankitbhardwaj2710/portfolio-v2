const coreSkills = [
  {
    name: "Flutter",
    type: "MOBILE",
    level: "PRIMARY",
    description: "Cross-platform mobile applications",
  },
  {
    name: "Dart",
    type: "LANGUAGE",
    level: "PRIMARY",
    description: "Flutter application development",
  },
  {
  name: "Node.js",
  type: "BACKEND",
  level: "PRIMARY",
  className: "skill-node",
  description: "Server-side JavaScript runtime",
},
  {
    name: "React",
    type: "FRONTEND",
    level: "PRIMARY",
    description: "Modern interactive interfaces",
  },
  {
    name: "JavaScript",
    type: "LANGUAGE",
    level: "CORE",
    description: "Frontend and web development",
  },
  {
    name: "Firebase",
    type: "BACKEND / BaaS",
    level: "PRIMARY",
    description: "Authentication and real-time data",
  },
  {
    name: "Python",
    type: "LANGUAGE",
    level: "CORE",
    description: "AI / ML and development",
  },
];

const ecosystem = [
  "Git",
  "GitHub",
  "Firestore",
  "SQLite",
  "REST APIs",
  "MySQL",
  "Tailwind CSS",
  "VS Code",
  "Android Studio",
];

function SkillPlanet({ skill, index }) {
  return (
    <div
      className={`skill-node skill-node-${index + 1}`}
      style={{
        "--skill-delay": `${index * 0.35}s`,
      }}
    >
      <div className="skill-node-orbit" />

      <div className="skill-node-planet">
        <span>{skill.name.slice(0, 2).toUpperCase()}</span>
      </div>

      <div className="skill-node-info">
        <strong>{skill.name}</strong>
        <small>{skill.type}</small>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* HEADER */}
      <div className="skills-heading">
        <span className="skills-kicker">
          05 / SKILLS
        </span>

        <h2>
          The tools
          <br />
          <span>behind the builds.</span>
        </h2>

        <p>
          Technologies I use to turn ideas into
          interfaces, applications and products.
        </p>
      </div>

      {/* SKILL UNIVERSE */}
      <div className="skills-universe">
        <div className="skills-orbit skills-orbit-1" />
        <div className="skills-orbit skills-orbit-2" />
        <div className="skills-orbit skills-orbit-3" />

        {/* CENTER */}
        <div className="skills-core">
          <div className="skills-core-glow" />

          <div className="skills-core-planet">
            <span>BUILD</span>
            <strong>STACK</strong>
          </div>

          <small>
            TECHNOLOGY
            <br />
            SYSTEM
          </small>
        </div>

        {/* SKILLS */}
        {coreSkills.map((skill, index) => (
          <SkillPlanet
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>

      {/* CORE SKILLS LIST */}
      <div className="skills-list">
        <div className="skills-list-header">
          <span>CORE TECHNOLOGIES</span>
          {/* <span>06 / 06</span> */}
        </div>

        {coreSkills.map((skill, index) => (
          <div
            className="skill-row"
            key={skill.name}
          >
            <span className="skill-row-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{skill.name}</strong>

            <span className="skill-row-type">
              {skill.type}
            </span>

            <span className="skill-row-description">
              {skill.description}
            </span>

            <span className="skill-row-level">
              {skill.level}
            </span>
          </div>
        ))}
      </div>

      {/* ECOSYSTEM */}
      <div className="skills-ecosystem">
        <div>
          <span className="skills-ecosystem-kicker">
            TOOLS / ECOSYSTEM
          </span>

          <h3>
            Everything around
            <br />
            <span>the stack.</span>
          </h3>
        </div>

        <div className="ecosystem-tags">
          {ecosystem.map((item, index) => (
            <span key={item}>
              <small>
                {String(index + 1).padStart(2, "0")}
              </small>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-end">
        <span />
        ALWAYS LEARNING
        <span />
      </div>
    </section>
  );
}

export default Skills;