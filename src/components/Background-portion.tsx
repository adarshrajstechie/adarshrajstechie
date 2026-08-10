"use client";

import React, { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let step = 0;
    // Reduce wave rendering detail on small screens for faster mobile CPU execution
    const isMobile = width < 768;
    const waveCount = isMobile ? 2 : 4;
    const stepIncrement = isMobile ? 20 : 10;

    const colors = [
      { r: 99, g: 102, b: 241, a: 0.25 },
      { r: 168, g: 85, b: 247, a: 0.20 },
      { r: 56, g: 189, b: 248, a: 0.20 },
    ];

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      step += 0.002;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < waveCount; i++) {
        const color = colors[i % colors.length];
        ctx.beginPath();

        const frequency = 0.002 + i * 0.0008;
        const amplitude = Math.min(height * 0.12, 80) + i * 10;
        const speed = step * (1 + i * 0.2);
        const yOffset = (height / (waveCount + 1)) * (i + 1);

        for (let x = 0; x <= width; x += stepIncrement) {
          const y =
            yOffset +
            Math.sin(x * frequency + speed) * amplitude +
            Math.cos(x * 0.001 + speed * 0.5) * (amplitude * 0.5);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
        gradient.addColorStop(1, `rgba(${color.r / 2}, ${color.g / 2}, ${color.b}, 0.02)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-[0] h-screen w-screen overflow-hidden bg-[#060913] pointer-events-none select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block pointer-events-none" />
      
      {/* Optimized Orbs with Reduced Blur Radius for GPU Performance */}
      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-indigo-600/20 blur-[60px] pointer-events-none" />
      <div className="absolute top-[35%] -right-20 w-[350px] h-[350px] rounded-full bg-purple-600/15 blur-[60px] pointer-events-none" />
    </div>
  );
};

export default Background;