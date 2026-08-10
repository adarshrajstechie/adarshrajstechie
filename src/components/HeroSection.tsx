import React from "react";

export default function HeroSection() {
  return (
    <section 
      aria-label="Hero Section" 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-950 transform-gpu"
    >
      {/* High-Performance Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/bg-video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transform translate-z-0 will-change-transform opacity-90"
      >
        <source src="/hero-background-video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Modern High-Performance Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90 z-10 backdrop-blur-[1px]" />

      {/* Hero Content Container */}
      <div 
        itemScope 
        itemType="https://schema.org/Person"
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-5 pt-16"
      >
        {/* Subtle Badge Tag for Modern Aesthetic */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-xs sm:text-sm font-medium text-blue-300 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Full-Stack Web Developer
        </div>

        {/* Scaled-Down Modern Title with Name */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-tight md:leading-tight">
          Hi, I&apos;m{" "}
          <span itemProp="name" className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent font-extrabold">
            ADARSH RAJ S
          </span>
          <br />
          Building Scalable &amp; Interactive Web Applications
        </h1>

        {/* Subtitle for SEO & AI Crawler Context */}
        <p 
          itemProp="description"
          className="max-w-xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-normal"
        >
          Transforming complex ideas into clean, maintainable code and seamless user interfaces from backend architecture to frontend interaction.
        </p>

        {/* Call to Action Buttons */}
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base transition-all shadow-lg shadow-blue-500/25 active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 font-medium text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}