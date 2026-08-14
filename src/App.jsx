import { useCallback, useEffect, useState } from "react";
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

  /*
   * Lenis smooth scrolling
   *
   * IMPORTANT:
   * useEffect is used here instead of useState
   * so the animation loop is properly cleaned up.
   */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      lerp: 0.1,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);

      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && (
        <Loader onComplete={handleLoaderComplete} />
      )}

      <div
        className={
          loading
            ? "portfolio is-loading"
            : "portfolio"
        }
      >
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
        </main>
      </div>
    </>
  );
}

export default App;