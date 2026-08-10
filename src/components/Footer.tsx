import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative w-full bg-slate-950/20 border-t border-white/10 backdrop-blur-md pt-12 pb-16 text-slate-100 font-sans overflow-hidden transition-all duration-300 pointer-events-auto"
      itemScope 
      itemType="https://schema.org/WPFooter"
    >
      {/* Ambient Lighting Accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 transform-gpu" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 transform-gpu" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
          
          {/* LEFT: Branding / Logo */}
          <div className="flex flex-col items-start space-y-3" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Adarsh Raj S" />
            <meta itemProp="jobTitle" content="Full-Stack Web Developer" />
            
            <a 
              href="#" 
              className="group flex items-center gap-3 text-white font-black text-xl tracking-wider transition-transform duration-300 hover:scale-105 active:scale-95 touch-manipulation drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              aria-label="Adarsh Raj S Home"
              itemProp="url"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/20">
                <svg 
                  className="w-5 h-5 shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                ADARSH RAJ S
              </span>
            </a>
            <p className="text-xs text-slate-200 max-w-sm leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]" itemProp="description">
              Full-Stack Web Developer &amp; Performance Optimization Specialist. Crafting ultra-fast, modern digital experiences.
            </p>
          </div>

          {/* RIGHT: Dedicated Stacked Contact Details */}
          <div className="flex flex-col items-start md:items-start justify-self-start md:justify-self-end w-full max-w-xs md:mr-16 lg:mr-24">
            <h3 className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-4 text-left drop-shadow-sm">
              Direct Contact
            </h3>
            
            <div className="flex flex-col space-y-3 text-sm text-slate-100 items-start text-left w-full font-medium">
              {/* Email */}
              <a 
                href="mailto:adarshrajstechie@gmail.com" 
                className="flex items-center gap-2.5 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors duration-200 group touch-manipulation drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                aria-label="Send email to Adarsh Raj S"
              >
                <span className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30">
                  <svg 
                    className="w-4 h-4 text-blue-300 group-hover:scale-110 transition-transform shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="break-all font-semibold">adarshrajstechie@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+918075551892" 
                className="flex items-center gap-2.5 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm transition-colors duration-200 group touch-manipulation drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                aria-label="Call Adarsh Raj S"
              >
                <span className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30">
                  <svg 
                    className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.01-5.09-3.274-6.10-6.101l1.294-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span className="font-semibold">+91 8075551892</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-slate-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span className="p-1.5 rounded-lg bg-rose-500/20 border border-rose-400/30">
                  <svg 
                    className="w-4 h-4 text-rose-300 shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span className="font-semibold">
                  <span itemProp="addressLocality">Kozhikode</span>, <span itemProp="addressRegion">Kerala</span>, <span itemProp="addressCountry">India</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-white/10 my-6" aria-hidden="true" />

        {/* BOTTOM CENTER: Centered Copyright */}
        <div className="flex justify-center items-center text-center">
          <p className="text-xs text-slate-300 font-medium tracking-wide drop-shadow-sm">
            © {currentYear} <span className="text-white font-bold">Adarsh Raj S</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}