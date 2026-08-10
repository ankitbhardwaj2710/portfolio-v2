import { useEffect, useRef } from "react";

export default function CursorSpark() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;

    const particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (event) => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: event.clientX + (Math.random() - 0.5) * 10,
          y: event.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6,
          size: Math.random() * 2 + 0.4,
          life: 1,
          decay: Math.random() * 0.025 + 0.02,
        });
      }

      if (particles.length > 180) {
        particles.splice(0, particles.length - 180);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.life -= particle.decay;
        particle.size *= 0.985;

        ctx.save();

        ctx.shadowBlur = 14;
        ctx.shadowColor = "#a855f7";

        ctx.fillStyle = `rgba(216,180,254,${particle.life})`;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
        ctx.restore();
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas className="cursor-sparks" ref={canvasRef} />;
}