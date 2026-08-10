import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlatFlow() {
  const sectionRef = useRef(null);
  const planetRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(planetRef.current, {
        scale: 0.65,
        opacity: 0,
        rotate: -25,

        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.2,
        },
      });

      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.to(planetRef.current, {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flatflow-section"
      id="projects"
    >
      <div className="flatflow-grid" />

      <div
        ref={planetRef}
        className="flatflow-planet"
      >
        <div className="flatflow-planet-glow" />

        <div className="flatflow-orbit orbit-a" />
        <div className="flatflow-orbit orbit-b" />

        <div className="flatflow-core">
          <span>FF</span>
        </div>
      </div>

      <div
        ref={contentRef}
        className="flatflow-content"
      >
        <div className="flatflow-label">
          <span>01</span>
          <i />
          FEATURED PROJECT
        </div>

        <p className="flatflow-eyebrow">
          SHARED LIVING · MOBILE EXPERIENCE
        </p>

        <h2>
          FLAT
          <span>FLOW</span>
        </h2>

        <p className="flatflow-description">
          A modern shared-living management experience
          designed to make everyday flat life simpler,
          more organized and more connected.
        </p>

        <div className="flatflow-tech">
          <span>FLUTTER</span>
          <span>FIREBASE</span>
          <span>FIRESTORE</span>
          <span>RIVERPOD</span>
        </div>

        <div className="flatflow-actions">
          <a
            href="https://github.com/ankitbhardwaj2710"
            target="_blank"
            rel="noreferrer"
            className="flatflow-button primary"
          >
            View project
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="flatflow-button secondary"
          >
            Discuss the project
          </a>
        </div>
      </div>

      <div className="flatflow-meta">
        <span>FLATFLOW / 001</span>
        <span>2026</span>
      </div>
    </section>
  );
}