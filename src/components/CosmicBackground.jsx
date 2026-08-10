import { useEffect, useRef } from "react";

const STAR_COUNT = 220;

const planets = [
  {
    x: 78,
    y: 23,
    size: 9,
    color: "#f65c5c",
    speed: 0.0005,
  },
  {
    x: 91,
    y: 68,
    size: 15,
    color: "#6366f1",
    speed: 0.0003,
  },
  {
    x: 67,
    y: 82,
    size: 6,
    color: "#b3b65d",
    speed: 0.0007,
  },
];

function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.3 + 0.2,
      opacity: Math.random() * 0.7 + 0.15,
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawPlanet = (planet, time) => {
      const x =
        (planet.x / 100) * width +
        Math.sin(time * planet.speed) * 35;

      const y =
        (planet.y / 100) * height +
        Math.cos(time * planet.speed) * 20;

      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        planet.size * 6
      );

      glow.addColorStop(0, `${planet.color}55`);
      glow.addColorStop(0.4, `${planet.color}20`);
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(x, y, planet.size * 6, 0, Math.PI * 2);
      ctx.fill();

      const gradient = ctx.createRadialGradient(
        x - planet.size * 0.35,
        y - planet.size * 0.35,
        0,
        x,
        y,
        planet.size
      );

      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(0.2, planet.color);
      gradient.addColorStop(1, "#09050f");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, planet.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        const opacity =
          star.opacity +
          Math.sin(time * star.speed + star.phase) * 0.15;

        ctx.fillStyle = `rgba(255,255,255,${Math.max(
          opacity,
          0.04
        )})`;

        ctx.beginPath();
        ctx.arc(
          star.x * width,
          star.y * height,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      const nebula = ctx.createRadialGradient(
        width * 0.72,
        height * 0.35,
        0,
        width * 0.72,
        height * 0.35,
        width * 0.45
      );

      nebula.addColorStop(0, "rgba(124,58,237,0.13)");
      nebula.addColorStop(0.45, "rgba(88,28,135,0.045)");
      nebula.addColorStop(1, "transparent");

      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      planets.forEach((planet) => {
        drawPlanet(planet, time);
      });

      animationFrame = requestAnimationFrame(render);
    };

    resize();

    window.addEventListener("resize", resize);

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
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

export default CosmicBackground;