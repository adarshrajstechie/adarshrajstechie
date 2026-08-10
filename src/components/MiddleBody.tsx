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
    <main className="w-full bg-slate-950 text-slate-100 overflow-x-hidden transition-colors duration-300 antialiased selection:bg-blue-500 selection:text-white">
      {/* Search Engine & AI Level Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. ABOUT SECTION */}
      <section id="about" className="w-full py-16 lg:py-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-4 h-4" /> About Me & Qualifications
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Full-Stack Web Developer & <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Digital Engineer</span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Specialized in building ultra-fast Next.js web applications, custom PHP backend systems, and technical SEO architectures. I turn ideas into high-converting, GTmetrix Grade-A platforms across India & UAE.
              </p>

              {/* Education Card */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm shadow-lg hover:border-slate-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/20 flex-shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">B.TECH in Mechanical Engineering</h2>
                    <p className="text-slate-400 text-sm mt-1">LBS College Of Engineering Kasaragod / KTU (2016 - 2020)</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-300 font-medium bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700/60">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" /> Kozhikode, Kerala, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 transform-gpu"></div>
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
                  <Image
                    src="/adarsh_raj_s.jpeg"
                    alt="Adarsh Raj S - Web Developer Profile Image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION (FULL WIDTH RESPONSIVE TIMELINE) */}
      <section id="experience" className="w-full py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase">
              <Briefcase className="w-3.5 h-3.5" /> Professional History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience Journey
            </h2>
            <p className="text-slate-400 text-base">
              Hands-on engineering, performance tuning, and digital marketing results.
            </p>
          </div>

          {/* Full Width Container */}
          <div className="w-full relative pl-6 sm:pl-10">
            {/* Timeline Vertical Track Line */}
            <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500/50 to-slate-800"></div>

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp, idx) => (
                <article key={idx} className="relative group pl-4 sm:pl-6">
                  
                  {/* Timeline Node Bullet Marker */}
                  <div className="absolute -left-[19px] sm:-left-[29px] top-6 -translate-y-1/2 flex items-center justify-center z-10">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-slate-950 border-2 border-blue-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300"></span>
                    </span>
                  </div>

                  {/* Full Width Card Content Box */}
                  <div className="w-full bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30 transform-gpu">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" /> {exp.company}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
      <section id="skills" className="w-full py-16 lg:py-24 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase">
              <Code className="w-3.5 h-3.5" /> Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills & Ecosystem
            </h2>
            <p className="text-slate-400 text-base">
              Tech stack, database systems, digital growth tools, and AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const spanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <div 
                  key={idx} 
                  className={`bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 transform-gpu ${spanClass}`}
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-800/90 hover:bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700/70 font-medium transition-colors">
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
      <section id="projects" className="w-full py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase">
              <Globe className="w-3.5 h-3.5" /> Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Client Projects
            </h2>
            <p className="text-slate-400 text-base">
              Deployments across Next.js, PHP, and AI integrated web setups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <article key={idx} className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 group transform-gpu">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-5 border-t border-slate-800/90">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
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
      <section id="contact" className="w-full py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Have a web application, digital campaign, or GTmetrix speed optimization task? Let&apos;s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <a 
              href="mailto:adarshrajstechie@gmail.com" 
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-blue-500/50 hover:scale-[1.03] transition-all duration-300 shadow-lg transform-gpu"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</span>
              <span className="text-sm font-medium text-white truncate max-w-full">adarshrajstechie@gmail.com</span>
            </a>

            <a 
              href="tel:+918075551892" 
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-emerald-500/50 hover:scale-[1.03] transition-all duration-300 shadow-lg transform-gpu"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Call / WhatsApp</span>
              <span className="text-sm font-medium text-white">+91 8075551892</span>
            </a>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 shadow-lg">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</span>
              <span className="text-sm font-medium text-white">Kozhikode, Kerala, India</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}