"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Code2, Sparkles, Send } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Refresh home page logic
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection("Home");
    setIsMobileMenuOpen(false);
    
    // Hard refresh/navigate to root home page
    if (window.location.pathname === "/") {
      window.location.href = "/";
    } else {
      router.push("/");
      router.refresh();
    }
  };

  // Passive, high-performance scroll listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility & lock body scroll safely without jump
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, handleKeyDown]);

  const navLinks = [
    { name: "Home", href: "/", isHome: true },
    { name: "About", href: "#about", isHome: false },
    { name: "Experience", href: "#experience", isHome: false },
    { name: "Skills", href: "#skills", isHome: false },
    { name: "Projects", href: "#projects", isHome: false },
  ];

  return (
    <>
      {/* Schema.org SEO for AI & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["Home", "About", "Experience", "Skills", "Projects", "Contact Me"],
            "url": ["/", "#about", "#experience", "#skills", "#projects", "#contact"]
          }),
        }}
      />

      {/* Ultra-Modern Glassmorphic Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out transform-gpu ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Reloads Home Page */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
            aria-label="ADARSH RAJ S - Refresh Home Page"
          >
            <div className="relative p-2.5 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/30 rounded-xl group-hover:scale-105 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent tracking-tight">
                ADARSH RAJ S
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 bg-slate-900/40 border border-slate-800/60 rounded-full backdrop-blur-md shadow-inner"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.isHome) {
                      handleHomeClick(e);
                    } else {
                      setActiveSection(link.name);
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/30 rounded-full -z-10 animate-fade-in" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-200 hover:text-white border border-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all active:scale-95"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Navigation Drawer */}
      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 left-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800/80 p-6 flex flex-col justify-between md:hidden transform-gpu will-change-transform transition-transform duration-300 ease-out shadow-2xl shadow-blue-950/50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2.5"
            >
              <div className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
                ADARSH RAJ S
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800/80 focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-1.5 pt-6" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isHome) {
                    handleHomeClick(e);
                  } else {
                    setActiveSection(link.name);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`px-4 py-3 text-base font-medium rounded-xl border transition-all duration-200 ${
                  activeSection === link.name
                    ? "bg-blue-600/10 text-blue-400 border-blue-500/30"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-900/80 border-transparent hover:border-slate-800/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Available for hire
          </div>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-center w-full py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95"
          >
            Hire Me
            <Send className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}