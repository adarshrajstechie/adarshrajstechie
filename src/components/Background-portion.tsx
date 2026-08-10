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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let step = 0;
    const waveCount = 5;

    const colors = [
      { r: 99, g: 102, b: 241, a: 0.35 },  // Electric Indigo
      { r: 168, g: 85, b: 247, a: 0.30 },   // Neon Purple
      { r: 236, g: 72, b: 153, a: 0.25 },   // Cyber Pink
      { r: 56, g: 189, b: 248, a: 0.30 },   // Vibrant Cyan
      { r: 129, g: 140, b: 248, a: 0.25 },  // Soft Violet
    ];

    const render = () => {
      // Reduced step increment from 0.008 to 0.003 for smoother, slower energy wave flow
      step += 0.003;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < waveCount; i++) {
        const color = colors[i % colors.length];
        ctx.beginPath();

        const frequency = 0.0025 + i * 0.0008;
        const amplitude = Math.min(height * 0.15, 100) + i * 15;
        const speed = step * (1 + i * 0.2);
        const yOffset = (height / (waveCount + 1)) * (i + 1);

        for (let x = 0; x <= width; x += 10) {
          const y =
            yOffset +
            Math.sin(x * frequency + speed) * amplitude +
            Math.cos(x * 0.001 + speed * 0.5) * (amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(
          0,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        );
        gradient.addColorStop(
          1,
          `rgba(${color.r / 2}, ${color.g / 2}, ${color.b}, 0.05)`
        );

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-[0] h-screen w-screen overflow-hidden bg-[#060913] pointer-events-none select-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block pointer-events-none"
      />
      
      {/* Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-indigo-600/30 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute top-[35%] -right-20 w-[550px] h-[550px] rounded-full bg-purple-600/25 blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/25 blur-[150px] animate-pulse pointer-events-none" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default Background;