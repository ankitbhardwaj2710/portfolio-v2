function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* COSMIC GLOW */}
      <div className="contact-glow" />

      {/* ORBITS */}
      <div className="contact-orbit contact-orbit-1" />
      <div className="contact-orbit contact-orbit-2" />
      <div className="contact-orbit contact-orbit-3" />

      {/* PLANET */}
     <div className="contact-planet" aria-hidden="true">
  <div className="contact-planet-core" />
</div>

      {/* MAIN CONTENT */}
      <div className="contact-content">

        {/* <span className="contact-kicker">
          06 / CONTACT
        </span> */}

        <h2>
          Let&apos;s
          <br />
          <span>build</span>
          <br />
          something.
        </h2>

        <p className="contact-description">
          Have an idea, a project or an opportunity
          worth exploring? Let&apos;s turn it into
          something real.
        </p>

        <a
          href="mailto:ankitbhardwaj2710@gmail.com"
          className="contact-button"
        >
          <span>START A CONVERSATION</span>
          <span className="contact-arrow">↗</span>
        </a>

      </div>

      {/* CONTACT LINKS */}
      <div className="contact-links">

        <a
          href="mailto:ankitbhardwaj2710@gmail.com"
        >
          <span className="contact-link-number">
            01
          </span>

          <span>
            Email
            <small>
              ankitbhardwaj2710@gmail.com
            </small>
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/ankitbhardwaj2710"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-link-number">
            02
          </span>

          <span>
            GitHub
            <small>
              github.com/ankitbhardwaj2710
            </small>
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-bhardwaj-612b34334"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-link-number">
            03
          </span>

          <span>
            LinkedIn
            <small>
              Let&apos;s connect professionally
            </small>
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>

      </div>

      {/* FOOTER */}
      <footer className="contact-footer">

        <div className="contact-footer-brand">
          <div className="contact-footer-mark">
            A
          </div>

          <div>
            <strong>ANKIT</strong>
            <small>BHARDWAJ</small>
          </div>
        </div>

        <div className="contact-footer-status">
          <span />
          AVAILABLE FOR WORK
        </div>

        <div className="contact-footer-year">
          IND / 2026
        </div>

      </footer>

      <div className="contact-bottom">
        <span>DESIGNED &amp; BUILT BY ANKIT BHARDWAJ</span>
        <span>THE JOURNEY CONTINUES →</span>
      </div>

    </section>
  );
}

export default Contact;