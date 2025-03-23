import { useEffect, useRef } from "react";

const FireRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Prevents errors if ref is null

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireParticles = [];
    for (let i = 0; i < 100; i++) {
      fireParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 3 + 2,
      });
    }

    const draw = () => {
      if (!canvasRef.current) return; // Prevents errors on unmount

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireParticles.forEach((particle) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, "rgba(255, 85, 0, 1)");
        gradient.addColorStop(0.5, "rgba(255, 140, 0, 0.8)");
        gradient.addColorStop(1, "rgba(255, 69, 0, 0.5)");

        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 z-50 left-0 w-full h-16 pointer-events-none" />;
};

export default FireRain;
