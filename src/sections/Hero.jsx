import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const projectRef = useRef(null);
  const orbitOneRef = useRef(null);
  const orbitTwoRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.15,
      });

      timeline
        .from(".hero-status", {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".hero-kicker",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-roles",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          projectRef.current,
          {
            x: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".hero-scroll",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        );

      gsap.to(orbitOneRef.current, {
        rotation: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      gsap.to(orbitTwoRef.current, {
        rotation: -360,
        duration: 65,
        repeat: -1,
        ease: "none",
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(contentRef.current, {
        x: x * 12,
        y: y * 8,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(projectRef.current, {
        x: x * -25,
        y: y * -18,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.to(orbitOneRef.current, {
        x: x * 25,
        y: y * 18,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to(orbitTwoRef.current, {
        x: x * -18,
        y: y * -12,
        duration: 1.8,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(projectRef.current, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to([orbitOneRef.current, orbitTwoRef.current], {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div
        ref={orbitOneRef}
        className="hero-orbit hero-orbit-one"
      />

      <div
        ref={orbitTwoRef}
        className="hero-orbit hero-orbit-two"
      />

      <div ref={contentRef} className="hero-content">
        <div className="hero-status">
          <span />
          Available for work
        </div>

        <p className="hero-kicker">
          Creative Developer · Builder · Explorer
        </p>

        <h1 className="hero-title">
          <span className="hero-title-mask">
            <span className="hero-title-line">ANKIT</span>
          </span>

          <span className="hero-title-mask">
            <span className="hero-title-line">BHARDWAJ</span>
          </span>
        </h1>

        <div className="hero-roles">
          <span>Flutter Developer</span>
          <i />
          <span>Frontend Engineer</span>
          <i />
          <span>AI/ML Student</span>
        </div>

        <p className="hero-description">
          I build digital products and immersive experiences
          where technology meets creativity.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            <span>Explore my universe</span>
            <span className="button-arrow">↗</span>
          </a>

          <a href="#contact" className="hero-button secondary">
            Let's talk
          </a>
        </div>
      </div>

      <div ref={projectRef} className="hero-project">
        <span>Featured project</span>

        <strong>FlatFlow</strong>

        <small>01 / 06</small>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}