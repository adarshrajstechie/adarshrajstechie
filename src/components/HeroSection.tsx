import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      aria-label="Hero Section" 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-950"
    >
      {/* High-Performance Lightweight CSS Background Grid replacing heavy video on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.25),rgba(255,255,255,0))]" />

      {/* Optimized Background Video for Desktop with lazy execution and fallback image */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-background.png"
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="/hero-background-video-1.mp4" type="video/mp4" />
      </video>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950 z-10" />

      {/* Hero Content */}
      <div 
        itemScope 
        itemType="https://schema.org/Person"
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-5 pt-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs sm:text-sm font-medium text-blue-300 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Full-Stack Web Developer
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span itemProp="name" className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent font-extrabold">
            ADARSH RAJ S
          </span>
          <br />
          Building Scalable &amp; Interactive Web <span className="underline decoration-blue-500/40 underline-offset-8">Applications</span>
        </h1>

        <p 
          itemProp="description"
          className="max-w-xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed"
        >
          Transforming complex ideas into clean, maintainable code and seamless user interfaces from backend architecture to frontend interaction.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base transition-all shadow-lg shadow-blue-500/25 active:scale-95"
          >
            Explore Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 font-medium text-sm sm:text-base transition-all active:scale-95"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}