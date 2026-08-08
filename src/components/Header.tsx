"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Optimize scroll event listener with passive strategy for GTmetrix performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      {/* Fixed Glitch-Free Glassmorphic Header Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-md border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20"
            : "bg-slate-950/0 backdrop-blur-none border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <div className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
              ADARSH RAJ S
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile/Tablet Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 text-slate-200 hover:text-white border border-slate-800 focus:outline-none transition-all active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile Left Flyout Menu */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Left Flyout Drawer Menu */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800/80 p-6 flex flex-col justify-between md:hidden transform transition-transform duration-300 ease-out shadow-2xl shadow-blue-950/50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
                ADARSH RAJ S
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800/80 focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-2 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-900/80 rounded-xl border border-transparent hover:border-slate-800/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-slate-800/80">
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-3.5 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </aside>
    </>
  );
}