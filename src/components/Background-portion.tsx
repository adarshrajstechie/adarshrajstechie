"use client";

import React from "react";

const Background: React.FC = () => {
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-[0] h-screen w-screen overflow-hidden bg-[#030712] pointer-events-none select-none"
    >
      {/* Lightweight GPU Static Gradient Mesh */}
      <div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(147, 51, 234, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.12) 0%, transparent 45%)
          `
        }}
      />
      
      {/* High-Performance Micro Grid Texture */}
      <div
        className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
};

export default Background;