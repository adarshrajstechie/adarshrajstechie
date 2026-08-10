import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-800/60 pt-12 pb-12 text-slate-100 font-sans pointer-events-auto"
      itemScope 
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
          
          {/* LEFT: Branding / Logo & Metadata */}
          <div className="flex flex-col items-start space-y-3" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Adarsh Raj S" />
            <meta itemProp="jobTitle" content="Full-Stack Web Developer" />
            
            <a 
              href="#" 
              className="group flex items-center gap-3 text-white font-black text-xl tracking-wider min-h-[44px] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Adarsh Raj S Home"
              itemProp="url"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
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
              <span className="text-white font-bold">
                ADARSH RAJ S
              </span>
            </a>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-normal" itemProp="description">
              Full-Stack Web Developer &amp; Performance Optimization Specialist. Crafting ultra-fast, modern digital experiences.
            </p>
          </div>

          {/* RIGHT: Contact Details */}
          <div className="flex flex-col items-start md:items-start justify-self-start md:justify-self-end w-full max-w-xs md:mr-16 lg:mr-24">
            <h3 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4 text-left">
              Direct Contact
            </h3>
            
            <div className="flex flex-col space-y-3 text-sm text-slate-100 items-start text-left w-full font-medium">
              {/* Email */}
              <a 
                href="mailto:adarshrajstechie@gmail.com" 
                className="flex items-center gap-2.5 text-slate-200 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md transition-colors duration-200 group min-h-[44px] w-full"
                aria-label="Send email to Adarsh Raj S"
                itemProp="email"
              >
                <span className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-blue-400 shrink-0">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="break-all font-medium">adarshrajstechie@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+918075551892" 
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md transition-colors duration-200 group min-h-[44px] w-full"
                aria-label="Call Adarsh Raj S"
                itemProp="telephone"
              >
                <span className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-emerald-400 shrink-0">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.01-5.09-3.274-6.10-6.101l1.294-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span className="font-medium">+91 8075551892</span>
              </a>

              {/* Location */}
              <div 
                className="flex items-center gap-2.5 text-slate-200 min-h-[44px] w-full" 
                itemProp="address" 
                itemScope 
                itemType="https://schema.org/PostalAddress"
              >
                <span className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-rose-400 shrink-0">
                  <svg 
                    className="w-4 h-4" 
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
                <span className="font-medium text-xs sm:text-sm">
                  <span itemProp="addressLocality">Kozhikode</span>, <span itemProp="addressRegion">Kerala</span>, <span itemProp="addressCountry">India</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-slate-800/80 my-6" aria-hidden="true" />

        {/* BOTTOM CENTER: Centered Copyright */}
        <div className="flex justify-center items-center text-center">
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            © <time dateTime={currentYear.toString()}>{currentYear}</time> <span className="text-white font-semibold">Adarsh Raj S</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}