import Image from "next/image";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Bot, 
  Globe, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Calendar,
  Sparkles
} from "lucide-react";

// Custom SVG for GitHub Icon
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function MiddleBody() {
  const experiences = [
    {
      role: "Web Developer",
      company: "4Biz International LLC",
      period: "January 2026 - Present",
      desc: "Developed, maintained, and optimized high-performance websites for a diverse portfolio of clients across the UAE and India using WordPress, PHP, React, Next.js, and Node.js. Optimized GTmetrix performance and applied advanced technical SEO."
    },
    {
      role: "Web Developer Cum Digital Marketer & SMM",
      company: "Zag Signs",
      period: "September 2025 - Present",
      desc: "Managed WordPress e-commerce and Malayalam news platforms (Zag News). Developed custom PHP platforms with video/voice calling and integrated online payments. Ran Meta/Google Ads and optimized YouTube/Instagram monetization."
    },
    {
      role: "Web Developer Cum Digital Marketer",
      company: "Deityom Digital Marketing Agency",
      period: "October 2024 - September 2025",
      desc: "Built websites on Shopify, WordPress, Django, and PHP. Executed end-to-end performance marketing campaigns, Search Console web analysis, and full-stack SEO strategies."
    },
    {
      role: "Python Developer Intern",
      company: "Futura Labs Calicut",
      period: "Jan 2024 - April 2024",
      desc: "Focused on Python, Django, REST APIs, HTML, CSS, JavaScript, and real-time backend integrations."
    },
    {
      role: "Python Developer Intern",
      company: "Inmakes Infotech Pvt. Ltd.",
      period: "Dec 2022 - March 2023",
      desc: "Python full-stack engineering utilizing Django and Flask frameworks along with web frontends."
    }
  ];

  const projects = [
    {
      title: "Dubai IT Company Corporate Website",
      tech: ["React", "Next.js", "Node.js", "Gemini AI API"],
      desc: "Features automated form submissions, mail delivery auto-responses, and an interactive Gemini AI Chatbot for client support.",
      live: "https://www.4bizinternational.com/",
      github: "https://github.com/adarshrajstechie/4bizinternational_company_website_next.js.git"
    },
    {
      title: "Emarald Ace Corporate MEP Platform",
      tech: ["Next.js", "React", "Tailwind CSS"],
      desc: "High-performance enterprise web app for UAE-based MEP and facility management, showcasing HVAC, AMC, and civil engineering modules.",
      live: "https://emaraldace-company-website-next-js.vercel.app/",
      github: "https://github.com/adarshrajstechie/emaraldace_company_website_next.js.git"
    },
    {
      title: "Client Feedback Landing Page",
      tech: ["Next.js", "Hostinger", "PHP Mailer"],
      desc: "Testimonial and feedback collection platform configured with custom PHP mail handlers.",
      live: "https://feedback.4bizinternational.com/",
      github: "https://github.com/adarshrajstechie/4biz_feedback_landing_page_next.js.git"
    },
    {
      title: "Theyyampattil UAE Furniture Brand",
      tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
      desc: "Custom interior solutions platform with optimized GTmetrix score and technical SEO.",
      live: "https://theyyampattilgcc.com/",
      github: "https://github.com/adarshrajstechie/theyyampattil_gcc_php-html-website.git"
    }
  ];

  const categories = [
    { name: "Web Technologies", icon: Code, items: ["Next.js", "React", "Node.js", "PHP", "WordPress", "Shopify", "HTML/CSS", "JavaScript"] },
    { name: "Mobile App Tech", icon: Smartphone, items: ["Flutter", "Dart", "Progressive Web Apps (PWA)"] },
    { name: "AI Tools & Vibe Coding", icon: Bot, items: ["Gemini AI", "ChatGPT", "GitHub Copilot", "Claude", "Google AI Studio", "DeepSeek", "Canva AI"] },
    { name: "Databases & Cloud", icon: Database, items: ["MySQL", "PostgreSQL", "Supabase", "Vercel", "Hostinger", "Render", "GitHub"] },
    { name: "SEO & Digital Growth", icon: TrendingUp, items: ["Technical SEO", "GTmetrix Optimization", "Google Search Console", "Google Analytics", "Meta & Google Ads"] },
  ];

  // Schema Markup for Search Engine & AI Crawler Level SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adarsh Raj S",
    "jobTitle": "Full-Stack Web Developer & Digital Engineer",
    "url": "https://www.4bizinternational.com/",
    "email": "adarshrajstechie@gmail.com",
    "telephone": "+918075551892",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "Next.js",
      "React",
      "Node.js",
      "PHP",
      "WordPress",
      "Technical SEO",
      "GTmetrix Performance Optimization",
      "Digital Marketing"
    ],
    "worksFor": experiences.map((exp) => ({
      "@type": "EmployeeRole",
      "roleName": exp.role,
      "worksFor": {
        "@type": "Organization",
        "name": exp.company
      }
    }))
  };

  return (
    <main className="w-full bg-transparent text-slate-100 overflow-x-hidden transition-colors duration-300 antialiased selection:bg-blue-500 selection:text-white">
      {/* Search Engine & AI Level Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. ABOUT SECTION */}
      <section id="about" className="w-full py-12 lg:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold tracking-wide uppercase backdrop-blur-xl shadow-lg">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" /> About Me & Qualifications
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Full-Stack Web Developer & <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">Digital Engineer</span>
              </h1>
              
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Specialized in building ultra-fast Next.js web applications, custom PHP backend systems, and technical SEO architectures. I turn ideas into high-converting, GTmetrix Grade-A platforms across India & UAE.
              </p>

              {/* Education Glass Card */}
              <div className="relative group overflow-hidden bg-slate-950/30 border border-white/10 hover:border-blue-500/40 p-5 sm:p-6 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30 flex-shrink-0 shadow-inner">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white drop-shadow-sm">B.TECH in Mechanical Engineering</h2>
                    <p className="text-slate-300 text-sm mt-1 drop-shadow-sm">LBS College Of Engineering Kasaragod / KTU (2016 - 2020)</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-blue-200 font-semibold bg-slate-900/60 px-3 py-1 rounded-lg border border-white/10 backdrop-blur-sm">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" /> Kozhikode, Kerala, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-indigo-500/30 to-cyan-500/50 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500 transform-gpu"></div>
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/20 bg-slate-950/20 backdrop-blur-sm shadow-2xl">
                  <Image
                    src="/adarsh_raj_s.jpeg"
                    alt="Adarsh Raj S - Web Developer Profile Image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="experience" className="w-full py-12 lg:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase backdrop-blur-md shadow-md">
              <Briefcase className="w-3.5 h-3.5" /> Professional History
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Work Experience Journey
            </h2>
            <p className="text-slate-200 text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Hands-on engineering, performance tuning, and digital marketing results.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="w-full relative pl-6 sm:pl-10">
            {/* Timeline Vertical Line */}
            <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400/50 to-transparent"></div>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, idx) => (
                <article key={idx} className="relative group pl-4 sm:pl-6">
                  
                  {/* Timeline Bullet Marker */}
                  <div className="absolute -left-[19px] sm:-left-[29px] top-6 -translate-y-1/2 flex items-center justify-center z-10">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-slate-950 border-2 border-blue-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all duration-300"></span>
                    </span>
                  </div>

                  {/* Glass Card Box */}
                  <div className="relative overflow-hidden w-full bg-slate-950/30 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-950/40 transition-all duration-300 shadow-2xl hover:shadow-blue-950/30 transform-gpu">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-sm">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 bg-blue-500/20 border border-blue-400/30 px-3 py-1.5 rounded-lg backdrop-blur-md">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                          <Briefcase className="w-3.5 h-3.5 text-slate-300" /> {exp.company}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)]">
                      {exp.desc}
                    </p>
                  </div>

                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL SKILLS & ECOSYSTEM */}
      <section id="skills" className="w-full py-12 lg:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase backdrop-blur-md shadow-md">
              <Code className="w-3.5 h-3.5" /> Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Technical Skills & Ecosystem
            </h2>
            <p className="text-slate-200 text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Tech stack, database systems, digital growth tools, and AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const spanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <div 
                  key={idx} 
                  className={`bg-slate-950/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-950/40 transition-all duration-300 hover:-translate-y-1 transform-gpu shadow-2xl ${spanClass}`}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30 flex-shrink-0 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-sm">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-900/60 hover:bg-blue-600/20 text-slate-100 text-xs rounded-lg border border-white/10 font-medium transition-colors backdrop-blur-sm shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="projects" className="w-full py-12 lg:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase backdrop-blur-md shadow-md">
              <Globe className="w-3.5 h-3.5" /> Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Featured Client Projects
            </h2>
            <p className="text-slate-200 text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Deployments across Next.js, PHP, and AI integrated web setups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((proj, idx) => (
              <article key={idx} className="bg-slate-950/30 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-950/40 transition-all duration-300 shadow-2xl group transform-gpu">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-sm">
                    {proj.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-md font-semibold backdrop-blur-md shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-100 text-sm leading-relaxed mb-6 drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)]">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-blue-200 transition-colors drop-shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors drop-shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" /> Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="w-full py-12 lg:py-16 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-slate-100 text-base sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Have a web application, digital campaign, or GTmetrix speed optimization task? Let&apos;s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <a 
              href="mailto:adarshrajstechie@gmail.com" 
              className="bg-slate-950/30 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-md hover:border-blue-400/50 hover:bg-slate-950/50 hover:scale-[1.02] transition-all duration-300 shadow-2xl transform-gpu"
            >
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300 border border-blue-400/30 shadow-inner">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-bold">Email</span>
              <span className="text-sm font-semibold text-white truncate max-w-full drop-shadow-sm">adarshrajstechie@gmail.com</span>
            </a>

            <a 
              href="tel:+918075551892" 
              className="bg-slate-950/30 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-md hover:border-emerald-400/50 hover:bg-slate-950/50 hover:scale-[1.02] transition-all duration-300 shadow-2xl transform-gpu"
            >
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-300 border border-emerald-400/30 shadow-inner">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-bold">Call / WhatsApp</span>
              <span className="text-sm font-semibold text-white drop-shadow-sm">+91 8075551892</span>
            </a>

            <div className="bg-slate-950/30 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-md shadow-2xl transform-gpu">
              <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-300 border border-indigo-400/30 shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-300 uppercase tracking-wider font-bold">Location</span>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Kozhikode, Kerala, India</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}