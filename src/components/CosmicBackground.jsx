import { useEffect, useRef } from "react";

const STAR_COUNT = 240;

const PLANETS = [
  {
    radiusX: 330,
    radiusY: 150,
    size: 10,
    color: "#8b5cf6",
    speed: 0.00035,
    offset: 0,
  },
  {
    radiusX: 470,
    radiusY: 210,
    size: 6,
    color: "#c084fc",
    speed: -0.00022,
    offset: 2.2,
  },
  {
    radiusX: 590,
    radiusY: 270,
    size: 16,
    color: "#6366f1",
    speed: 0.00014,
    offset: 4.5,
  },
];

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame;

    const mouse = {
      x: 0,
      y: 0,
    };

    const stars = Array.from(
      { length: STAR_COUNT },
      () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.35 + 0.25,
        opacity: Math.random() * 0.65 + 0.15,
        twinkle: Math.random() * 0.02 + 0.004,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random(),
      })
    );

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawStar = (star, time) => {
      const twinkle =
        Math.sin(
          time * star.twinkle + star.phase
        ) * 0.25;

      const opacity = Math.max(
        0.04,
        star.opacity + twinkle
      );

      const parallaxX =
        mouse.x * star.depth * 10;

      const parallaxY =
        mouse.y * star.depth * 7;

      const x =
        star.x * width + parallaxX;

      const y =
        star.y * height + parallaxY;

      ctx.globalAlpha = opacity;

      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        star.size,
        0,
        Math.PI * 2
      );

      ctx.fill();
    };

    const drawOrbit = (
      centerX,
      centerY,
      radiusX,
      radiusY,
      rotation,
      opacity
    ) => {
      ctx.save();

      ctx.translate(centerX, centerY);

      ctx.rotate(rotation);

      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        radiusX,
        radiusY,
        0,
        0,
        Math.PI * 2
      );

      ctx.stroke();

      ctx.restore();
    };

    const drawPlanet = (
      planet,
      centerX,
      centerY,
      time
    ) => {
      const angle =
        planet.offset +
        time * planet.speed;

      const x =
        centerX +
        Math.cos(angle) * planet.radiusX;

      const y =
        centerY +
        Math.sin(angle) * planet.radiusY;

      /* Planet glow */

      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        planet.size * 7
      );

      glow.addColorStop(
        0,
        `${planet.color}55`
      );

      glow.addColorStop(
        0.35,
        `${planet.color}20`
      );

      glow.addColorStop(
        1,
        "transparent"
      );

      ctx.globalAlpha = 1;

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        planet.size * 7,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /* Planet body */

      const gradient = ctx.createRadialGradient(
        x - planet.size * 0.35,
        y - planet.size * 0.35,
        0,
        x,
        y,
        planet.size
      );

      gradient.addColorStop(
        0,
        "#ffffff"
      );

      gradient.addColorStop(
        0.18,
        planet.color
      );

      gradient.addColorStop(
        0.65,
        planet.color
      );

      gradient.addColorStop(
        1,
        "#08050f"
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        planet.size,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /* Tiny highlight */

      ctx.fillStyle =
        "rgba(255,255,255,0.55)";

      ctx.beginPath();

      ctx.arc(
        x - planet.size * 0.35,
        y - planet.size * 0.35,
        planet.size * 0.18,
        0,
        Math.PI * 2
      );

      ctx.fill();
    };

    const render = (time) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      ctx.globalAlpha = 1;

      /*
       * Deep-space nebula
       */

      const nebula =
        ctx.createRadialGradient(
          width * 0.72,
          height * 0.38,
          0,
          width * 0.72,
          height * 0.38,
          width * 0.5
        );

      nebula.addColorStop(
        0,
        "rgba(124,58,237,0.12)"
      );

      nebula.addColorStop(
        0.4,
        "rgba(88,28,135,0.045)"
      );

      nebula.addColorStop(
        1,
        "transparent"
      );

      ctx.fillStyle = nebula;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * Stars
       */

      stars.forEach((star) => {
        drawStar(star, time);
      });

      /*
       * Orbital system
       */

      const centerX =
        width * 0.76 +
        mouse.x * 18;

      const centerY =
        height * 0.45 +
        mouse.y * 12;

      ctx.globalAlpha = 1;

      PLANETS.forEach((planet, index) => {
        drawOrbit(
          centerX,
          centerY,
          planet.radiusX,
          planet.radiusY,
          -0.25,
          0.055 + index * 0.01
        );
      });

      /*
       * Small central star
       */

      const coreGlow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          70
        );

      coreGlow.addColorStop(
        0,
        "rgba(216,180,254,0.15)"
      );

      coreGlow.addColorStop(
        0.35,
        "rgba(139,92,246,0.07)"
      );

      coreGlow.addColorStop(
        1,
        "transparent"
      );

      ctx.fillStyle = coreGlow;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        70,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Planets
       */

      PLANETS.forEach((planet) => {
        drawPlanet(
          planet,
          centerX,
          centerY,
          time
        );
      });

      ctx.globalAlpha = 1;

      animationFrame =
        requestAnimationFrame(render);
    };

    const handleMouseMove = (event) => {
      const normalizedX =
        event.clientX / width - 0.5;

      const normalizedY =
        event.clientY / height - 0.5;

      mouse.x +=
        (normalizedX - mouse.x) * 0.05;

      mouse.y +=
        (normalizedY - mouse.y) * 0.05;
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animationFrame =
      requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cosmic-background"
      aria-hidden="true"
    />
  );
}