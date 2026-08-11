import { useCallback, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import CosmicBackground from "./components/CosmicBackground";
import CursorSpark from "./components/CursorSpark";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import FlatFlow from "./sections/FlatFlow";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useState(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame;

    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  });

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}

      <div className={loading ? "portfolio is-loading" : "portfolio"}>
        <CosmicBackground />
        <CursorSpark />
        <Navbar />
        <main>
          <Hero />
          <Journey />
          <Projects />
          {/* <FlatFlow /> */}
          <About />
          <Skills />
          <Contact />
          {/* <section className="future-section" id="projects">
            <span>02</span>
            <h2>Projects from another orbit.</h2>
          </section> */}

          {/* <section className="future-section" id="about">
            <span>03</span>
            <h2>The human behind the code.</h2>
          </section> */}

          {/* <section className="future-section" id="skills">
            <span>04</span>
            <h2>My technology universe.</h2>
          </section>

          <section className="future-section" id="contact">
            <span>05</span>
            <h2>Let's build something extraordinary.</h2>
          </section> */}
        </main>
      </div>
    </>
  );
}

export default App;