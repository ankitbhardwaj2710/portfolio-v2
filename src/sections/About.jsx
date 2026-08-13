import GitHubActivity from "./GitHubActivity";

function About() {
  return (
    <section id="about" className="about-section">
      {/* HEADER */}
      <div className="about-heading">
        <span className="about-kicker">
          04 / ABOUT ME
        </span>

        <h2>
          Building with
          <br />
          <span>purpose.</span>
        </h2>

        <p>
          I&apos;m Ankit Bhardwaj — a Flutter developer,
          frontend engineer and AI/ML student who enjoys
          turning ideas into useful digital products.
        </p>
      </div>

      {/* MAIN ABOUT */}
      <div className="about-universe">
        {/* CENTRAL PLANET */}
        <div className="about-core">
          <div className="about-orbit orbit-1" />
          <div className="about-orbit orbit-2" />
          <div className="about-orbit orbit-3" />

          <div className="about-planet">
            <span>AB</span>
          </div>

          <div className="about-core-label">
            ANKIT
            <small>BHARDWAJ</small>
          </div>
        </div>

        {/* GITHUB ACTIVITY — UPPER RIGHT */}
        <div className="about-github">
          <GitHubActivity compact />
        </div>

        {/* LEFT CONTENT */}
        <div className="about-copy about-copy-left">
          <span className="about-small-label">
            THE BUILDER
          </span>

          <h3>
            Ideas are
            <br />
            meant to <em>ship.</em>
          </h3>

          <p>
            I like building products from the first
            idea to the final interface. My work sits
            between development, design and curiosity —
            always with a focus on creating experiences
            that feel simple and purposeful.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-copy about-copy-right">
          <span className="about-small-label">
            CURRENTLY EXPLORING
          </span>

          <div className="about-exploration">
            <div>
              <strong>Flutter</strong>
              <span>Mobile experiences</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Modern interfaces</span>
            </div>

            <div>
              <strong>AI / ML</strong>
              <span>Intelligent products</span>
            </div>

            <div>
              <strong>Firebase</strong>
              <span>Real-time applications</span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="about-stat">
          <strong>06+</strong>
          <span>PROJECTS</span>
        </div>

        <div className="about-stat">
          <strong>02+</strong>
          <span>YEARS BUILDING</span>
        </div>

        <div className="about-stat">
          <strong>01</strong>
          <span>INTERNSHIP</span>
        </div>

        <div className="about-stat">
          <strong>AI/ML</strong>
          <span>SPECIALIZATION</span>
        </div>
      </div>

      {/* CLOSING LINE */}
      <div className="about-end">
        <span />
        STILL EXPLORING
        <span />
      </div>
    </section>
  );
}

export default About;