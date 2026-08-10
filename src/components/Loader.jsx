import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    const number = numberRef.current;
    const name = nameRef.current;
    const line = lineRef.current;

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.to(loader, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.1,
            ease: "power4.inOut",
            onComplete,
          });
        },
      });

      timeline
        .set(name, {
          opacity: 1,
        })
        .from(name.querySelectorAll("span"), {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        })
        .to(
          counter,
          {
            value: 100,
            duration: 2.4,
            ease: "power2.inOut",
            onUpdate: () => {
              const value = Math.round(counter.value);

              number.textContent = String(value).padStart(3, "0");
              progress.style.width = `${value}%`;
            },
          },
          "-=0.35"
        )
        .to(
          line,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.7"
        )
        .to(name, {
          y: -30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        })
        .to(
          ".loader-meta",
          {
            opacity: 0,
            y: -10,
            duration: 0.4,
          },
          "<"
        );
    }, loader);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-top">
        <span>ANKIT BHARDWAJ</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="loader-center">
        <div ref={nameRef} className="loader-name">
          <span>ANKIT</span>
          <span>BHARDWAJ</span>
        </div>

        <div className="loader-progress">
          <div
            ref={progressRef}
            className="loader-progress-bar"
          />
        </div>

        <div ref={lineRef} className="loader-line" />

        <div className="loader-meta">
          <span>ENTERING THE UNIVERSE</span>

          <strong ref={numberRef}>000</strong>
        </div>
      </div>

      <div className="loader-bottom">
        <span>Creative Developer</span>
        <span>Scroll / Explore / Discover</span>
      </div>

      <div className="loader-glow" />
    </div>
  );
}