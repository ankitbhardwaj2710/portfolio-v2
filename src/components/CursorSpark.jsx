import { useEffect, useRef } from "react";

const COLORS = [
  "#ffffff",
  "#c084fc",
  "#a855f7",
  "#8b5cf6",
];

export default function CursorSpark() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;

    const mouse = {
      x: width / 2,
      y: height / 2,
      previousX: width / 2,
      previousY: height / 2,
      active: false,
    };

    const particles = [];

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

    const createSpark = (x, y, amount = 1) => {
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.8 + 0.4;

        particles.push({
          x,
          y,

          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,

          size: Math.random() * 1.8 + 0.5,

          life: 1,

          decay: Math.random() * 0.025 + 0.018,

          color:
            COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const createBurst = (x, y) => {
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;

        particles.push({
          x,
          y,

          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,

          size: Math.random() * 2.2 + 0.7,

          life: 1,

          decay: Math.random() * 0.018 + 0.012,

          color:
            COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const handleMouseMove = (event) => {
      mouse.previousX = mouse.x;
      mouse.previousY = mouse.y;

      mouse.x = event.clientX;
      mouse.y = event.clientY;

      mouse.active = true;

      const dx = mouse.x - mouse.previousX;
      const dy = mouse.y - mouse.previousY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 2) {
        createSpark(
          mouse.x,
          mouse.y,
          Math.min(Math.ceil(distance / 12), 3)
        );
      }
    };

    const handleClick = (event) => {
      createBurst(event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          70
        );

        glow.addColorStop(
          0,
          "rgba(168, 85, 247, 0.12)"
        );

        glow.addColorStop(
          0.35,
          "rgba(139, 92, 246, 0.05)"
        );

        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;

        ctx.beginPath();
        ctx.arc(
          mouse.x,
          mouse.y,
          70,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.985;
        particle.vy *= 0.985;

        particle.life -= particle.decay;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = particle.life;

        ctx.shadowBlur = 12;
        ctx.shadowColor = particle.color;

        ctx.fillStyle = particle.color;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size * particle.life,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrame = requestAnimationFrame(render);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-sparks"
      aria-hidden="true"
    />
  );
}