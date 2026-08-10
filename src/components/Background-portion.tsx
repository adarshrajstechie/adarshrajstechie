"use client";

import React, { useEffect, useRef } from "react";

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Device DPR scaling for crisp high-DPI (Retina) screens without performance penalties
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const setupCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    setupCanvasSize();

    let step = 0;

    // Responsive wave density based on viewport width
    const getWaveConfig = () => {
      const isMobile = width < 768;
      return {
        lines: isMobile ? 4 : 7,
        segments: isMobile ? 40 : 80,
      };
    };

    let { lines, segments } = getWaveConfig();

    const handleResize = () => {
      setupCanvasSize();
      const config = getWaveConfig();
      lines = config.lines;
      segments = config.segments;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Digital Transmission Wave Renderer
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.012; // Wave transmission speed

      const segmentWidth = width / segments;
      const centerY = height * 0.65; // Position waves towards lower-center for deep depth

      // Draw digital sine wave transmissions
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();

        // Color gradient per wave line (Cyan to Blue to Purple)
        const lineAlpha = 0.15 + (l / lines) * 0.25;
        const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
        strokeGrad.addColorStop(0, `rgba(6, 182, 212, ${lineAlpha * 0.3})`); // Cyan
        strokeGrad.addColorStop(0.5, `rgba(59, 130, 246, ${lineAlpha})`);   // Electric Blue
        strokeGrad.addColorStop(1, `rgba(139, 92, 246, ${lineAlpha * 0.4})`); // Violet

        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = 1.2 + l * 0.3;

        for (let i = 0; i <= segments; i++) {
          const x = i * segmentWidth;
          
          // Multi-frequency sine combination for dynamic fluid waveform
          const wave1 = Math.sin(i * 0.08 + step + l * 0.4) * (20 + l * 12);
          const wave2 = Math.cos(i * 0.04 - step * 0.8 + l * 0.3) * (15 + l * 8);
          const wave3 = Math.sin((i + l) * 0.02 + step * 1.5) * 10;
          
          const y = centerY + wave1 + wave2 + wave3;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Digital Data Transmission Nodes (Glowing pulses along wave peaks)
        const pulseInterval = Math.floor(segments / (4 + l));
        for (let i = pulseInterval; i < segments; i += pulseInterval) {
          const x = i * segmentWidth;
          const wave1 = Math.sin(i * 0.08 + step + l * 0.4) * (20 + l * 12);
          const wave2 = Math.cos(i * 0.04 - step * 0.8 + l * 0.3) * (15 + l * 8);
          const wave3 = Math.sin((i + l) * 0.02 + step * 1.5) * 10;
          const y = centerY + wave1 + wave2 + wave3;

          const pulseOpacity = (Math.sin(step * 3 + i + l) + 1) / 2;
          
          ctx.beginPath();
          ctx.arc(x, y, 2 + pulseOpacity * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + pulseOpacity * 0.6})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.4; }
        }
        @keyframes pulseSlower {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        .bg-animate-pulse-slow {
          animation: pulseSlow 10s ease-in-out infinite;
        }
        .bg-animate-pulse-slower {
          animation: pulseSlower 14s ease-in-out infinite;
        }
        .bg-animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
      <div
        aria-hidden="true"
        role="presentation"
        className="fixed inset-0 z-0 overflow-hidden bg-[#050814] pointer-events-none select-none"
      >
        {/* Glow Mesh Sphere 1 - Deep Sapphire Blue */}
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-blue-600/35 to-indigo-900/20 blur-[90px] md:blur-[130px] bg-animate-pulse-slow will-change-transform" />

        {/* Glow Mesh Sphere 2 - Electric Cyan */}
        <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] min-w-[320px] min-h-[320px] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-tl from-cyan-500/30 via-sky-600/20 to-transparent blur-[100px] md:blur-[140px] bg-animate-float-slow will-change-transform" />

        {/* Glow Mesh Sphere 3 - Tech Purple Accent */}
        <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] min-w-[280px] min-h-[280px] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-t from-violet-600/25 via-blue-700/15 to-transparent blur-[110px] md:blur-[150px] bg-animate-pulse-slower will-change-transform" />

        {/* Cybernetic Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-75" />

        {/* Dynamic Wave Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" />
      </div>
    </>
  );
};

export default Background;