"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Code2, Send } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/#projects", id: "projects" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Dynamic Header Blur & Background styling on scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          // Guarantee "Home" is active if scrolled to the top
          if (window.scrollY < 100) {
            setActiveSection("home");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to sync menu active states naturally as user scrolls
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "about", "experience", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -40% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Robust Smooth Scroll & Route Navigation Handler
  const handleNavigation = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (id === "home") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("home");
        } else {
          router.push("/");
        }
        return;
      }

      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(id);
        }
      } else {
        router.push(href);
      }
    },
    [pathname, router]
  );

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Search Engine, AI & Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["Home", "About", "Experience", "Skills", "Projects", "Contact Me"],
            "url": ["/", "/#about", "/#experience", "/#skills", "/#projects", "/#contact"],
          }),
        }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out transform-gpu ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/", "home")}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
            aria-label="ADARSH RAJ S - Home Page"
          >
            <div className="relative p-2.5 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/30 rounded-xl group-hover:scale-105 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <span className="text-lg font-bold text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
              ADARSH RAJ S
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full backdrop-blur-md shadow-inner"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href, link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 border border-blue-500/40 rounded-full -z-10 shadow-sm" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call To Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#contact"
              onClick={(e) => handleNavigation(e, "/#contact", "contact")}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-100 hover:text-white border border-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all active:scale-95"
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
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 left-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-slate-950 border-r border-slate-800/80 p-6 flex flex-col justify-between md:hidden transform-gpu transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/", "home")}
              className="flex items-center gap-2.5"
            >
              <div className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-base font-bold text-slate-100 tracking-tight">
                ADARSH RAJ S
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800/80 focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 pt-6" aria-label="Mobile Navigation Links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href, link.id)}
                  className={`px-4 py-3 text-base font-semibold rounded-xl border transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 border-blue-500/40 font-bold"
                      : "text-slate-200 hover:text-white hover:bg-slate-900/80 border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
            Available for hire
          </div>
          <Link
            href="/#contact"
            onClick={(e) => handleNavigation(e, "/#contact", "contact")}
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