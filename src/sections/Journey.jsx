import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyItems = [
  {
    year: "2024",
    label: "THE FIRST ORBIT",
    title: "Starting the journey.",
    description:
      "Started my B.Tech journey in Computer Science Engineering with a specialization in Artificial Intelligence & Machine Learning at World College of Technology & Management, Gurugram.",
    meta: "B.Tech CSE (AI & ML)",
    extra: "2024 — 2028",
    color: "#8b5cf6",
  },
  {
    year: "2025",
    label: "BUILDING THROUGH EXPERIENCE",
    title: "SAMVEDAN · Smart India Hackathon",
    description:
      "Worked as the sole frontend developer on a civic issue reporting application. I took ownership of UI design, screen flows and Flutter implementation while collaborating with the team on Firebase and backend integration.",
    meta: "Flutter · Firebase · UI/UX",
    extra: "Team Project",
    color: "#6366f1",
  },
  {
    year: "2025",
    label: "FIRST REAL PRODUCT EXPERIENCE",
    title: "AI Tourist Guider",
    description:
      "Developed the mobile frontend for an AI-powered travel companion featuring attraction recommendations, personalized itinerary planning and a mobile-first user experience.",
    meta: "Flutter · AI/ML · Frontend",
    extra: "Team Project",
    color: "#a855f7",
  },
  {
    year: "JUL 2026",
    label: "GOING PROFESSIONAL",
    title: "CodeAlpha · App Development Intern",
    description:
      "Building production-style Flutter applications as part of a structured app development internship, focusing on clean UI, application architecture, local data persistence, Firebase integration and real-world features.",
    meta: "Flutter · Dart · Firebase",
    extra: "GitHub · App Development",
    color: "#c084fc",
  },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const universeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const universe = universeRef.current;

    if (!section || !universe) return;

    const ctx = gsap.context(() => {
      gsap.from(".journey-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
        },
      });

      gsap.from(".journey-wave-path", {
        strokeDashoffset: 1800,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      gsap.from(".journey-card", {
        scale: 0.82,
        opacity: 0,
        y: 25,
        duration: 0.9,
        stagger: 0.12,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: section,
          start: "top 62%",
        },
      });

      gsap.to(universe, {
        y: -12,
        duration: 4,
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
      className="journey-section"
      id="journey"
    >
      <div className="journey-heading">
        <div className="journey-section-number">
          02 / MY JOURNEY
        </div>

        <h2>
          Learning by building,
          <br />
          <span>growing by doing.</span>
        </h2>

        <p>
          There was never really a straight line.
          Each year became another orbit — college,
          projects, experience and everything that came
          along the way.
        </p>
      </div>

      <div
        ref={universeRef}
        className="journey-universe"
      >
        <svg
          className="journey-wave"
          viewBox="0 0 1600 470"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="journeyWaveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#5b21b6" />
              <stop offset="45%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>

            <filter id="journeyGlow">
              <feGaussianBlur
                stdDeviation="7"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="journey-wave-glow"
            d="
              M 0 270
              C 150 70,
                280 55,
                430 220
              S 710 420,
                850 185
              S 1120 35,
                1320 175
              S 1480 330,
                1600 210
            "
            fill="none"
            stroke="rgba(139,92,246,0.13)"
            strokeWidth="22"
          />

          <path
            className="journey-wave-path"
            d="
              M 0 270
              C 150 70,
                280 55,
                430 220
              S 710 420,
                850 185
              S 1120 35,
                1320 175
              S 1480 330,
                1600 210
            "
            fill="none"
            stroke="url(#journeyWaveGradient)"
            strokeWidth="1.5"
            strokeDasharray="1800"
            strokeDashoffset="0"
            filter="url(#journeyGlow)"
          />
        </svg>

        <div className="journey-stars" aria-hidden="true">
          <span>✦</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
        </div>

        {journeyItems.map((item, index) => (
          <article
            className={`journey-card journey-card-${index + 1}`}
            key={`${item.year}-${item.title}`}
          >
            <div
              className="journey-planet"
              style={{
                "--planet-color": item.color,
              }}
            >
              <div className="journey-planet-halo" />

              <div className="journey-planet-surface">
                <span>{item.year}</span>
              </div>

              <div className="journey-planet-ring ring-one" />
              <div className="journey-planet-ring ring-two" />
            </div>

            <div className="journey-info">
              <span className="journey-label">
                {item.label}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="journey-meta">
                <span>{item.meta}</span>
                <span>{item.extra}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="journey-certificates">
        <div className="journey-achievements-heading">
          {/* <span>05 / ACHIEVEMENTS</span> */}

          <h3>
            Milestones along
            <br />
            <em>the way.</em>
          </h3>
        </div>

        <div className="journey-achievement-grid">
          <div className="journey-certificate">
            <div className="certificate-number">
              01
            </div>

            <div className="certificate-content">
              <span>TRAINING WORKSHOP</span>

              <strong>
                5G Network Security
              </strong>

              <em>IIT Delhi</em>
            </div>
          </div>

          <div className="journey-certificate">
            <div className="certificate-number">
              02
            </div>

            <div className="certificate-content">
              <span>TRAINING</span>

              <strong>
                iOS Mobile Application
                Development with AI/ML
              </strong>

              <em>WCTM Gurugram</em>
            </div>
          </div>

          <div className="journey-certificate">
            <div className="certificate-number">
              03
            </div>

            <div className="certificate-content">
              <span>PROFESSIONAL TRAINING</span>

              <strong>
                Advanced Backend Development
              </strong>

              <em>
                APIs · Databases · Security · Deployment
              </em>
            </div>
          </div>

          <div className="journey-certificate featured">
            <div className="certificate-number">
              04
            </div>

            <div className="certificate-content">
              <span>INTERNSHIP · 2026</span>

              <strong>
                CodeAlpha
                <br />
                App Development
              </strong>

              <em>Certificate of Internship</em>
            </div>

            <div className="achievement-glow" />
          </div>

          <div className="journey-certificate featured">
            <div className="certificate-number">
              05
            </div>

            <div className="certificate-content">
              <span>RECOGNITION · 2026</span>

              <strong>
                CodeAlpha
                <br />
                Letter of Recommendation
              </strong>

              <em>
                App Development Internship
              </em>
            </div>

            <div className="achievement-glow" />
          </div>
        </div>
      </div>

      <div className="journey-end">
        <span>THE JOURNEY CONTINUES</span>
        <i />
        <strong>∞</strong>
      </div>
    </section>
  );
}