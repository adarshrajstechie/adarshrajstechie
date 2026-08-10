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
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

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

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.4bizinternational.com/#person",
        "name": "Adarsh Raj S",
        "jobTitle": "Full-Stack Web Developer & Digital Engineer",
        "url": "https://www.4bizinternational.com/",
        "email": "mailto:adarshrajstechie@gmail.com",
        "telephone": "+918075551892",
        "sameAs": [
          "https://github.com/adarshrajstechie"
        ],
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
          "Digital Marketing",
          "Full-Stack Web Development",
          "AI Application Integration"
        ],
        "worksFor": experiences.map((exp) => ({
          "@type": "EmployeeRole",
          "roleName": exp.role,
          "worksFor": {
            "@type": "Organization",
            "name": exp.company
          }
        }))
      },
      {
        "@type": "ItemList",
        "name": "Featured Portfolio Projects by Adarsh Raj S",
        "itemListElement": projects.map((proj, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.title,
            "description": proj.desc,
            "url": proj.live,
            "applicationCategory": "DeveloperApplication"
          }
        }))
      }
    ]
  };

  return (
    <main className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950/40 to-slate-950 text-slate-100 overflow-x-hidden antialiased selection:bg-cyan-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. ABOUT SECTION */}
      <section id="about" className="w-full py-20 lg:py-32 relative overflow-hidden">
        {/* Hardware-accelerated background light glows */}
        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full transform-gpu" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" /> 
                <span>About Me &amp; Qualifications</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Full-Stack Web Developer &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Digital Engineer</span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Specialized in building ultra-fast <strong className="text-white font-semibold">Next.js</strong> web applications, custom <strong className="text-white font-semibold">PHP</strong> backend systems, and technical SEO architectures. I turn ambitious ideas into high-converting, GTmetrix Grade-A platforms across India &amp; UAE.
              </p>

              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  <div className="p-3.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="text-xl font-bold text-white">B.TECH in Mechanical Engineering</h2>
                    <p className="text-slate-400 text-sm font-medium">LBS College Of Engineering Kasaragod / KTU (2016 - 2020)</p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs text-slate-300 font-medium bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700/80">
                        <MapPin className="w-4 h-4 text-cyan-400" /> Kozhikode, Kerala, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-25 group-hover:opacity-50 transition duration-300 transform-gpu" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <Image
                    src="/adarsh_raj_s.jpeg"
                    alt="Adarsh Raj S - Web Developer Profile"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 416px"
                    className="object-cover object-center transform-gpu transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="experience" className="w-full py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <Briefcase className="w-4 h-4" /> <span>Professional History</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Work Experience Journey
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Hands-on engineering, performance tuning, and digital marketing results.
            </p>
          </div>

          <div className="w-full relative pl-4 sm:pl-8 lg:pl-10 max-w-4xl mx-auto">
            <div aria-hidden="true" className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <article key={idx} className="relative group pl-6 sm:pl-8">
                  
                  <div className="absolute -left-[19px] sm:-left-[27px] top-7 -translate-y-1/2 flex items-center justify-center z-10">
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200" />
                  </div>

                  <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
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

      {/* 3. TECHNICAL SKILLS */}
      <section id="skills" className="w-full py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <Code className="w-4 h-4" /> <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technical Skills &amp; Ecosystem
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
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
                  className={`bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-slate-700 transition-colors duration-200 ${spanClass}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-800/90 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/80 hover:text-white transition-colors duration-150">
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
      <section id="projects" className="w-full py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <Globe className="w-4 h-4" /> <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Client Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Deployments across Next.js, PHP, and AI-integrated web setups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <article key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-colors duration-200 shadow-xl group">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors duration-200 shrink-0" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-slate-800/80">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-150"
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
      <section id="contact" className="w-full py-20 lg:py-32 relative">
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full transform-gpu" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Have a web application, digital campaign, or GTmetrix speed optimization task? Let&apos;s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a 
              href="mailto:adarshrajstechie@gmail.com" 
              className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 shadow-xl group"
            >
              <div className="p-3.5 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1 max-w-full">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Email</span>
                <span className="text-sm font-medium text-white truncate block">adarshrajstechie@gmail.com</span>
              </div>
            </a>

            <a 
              href="tel:+918075551892" 
              className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200 shadow-xl group"
            >
              <div className="p-3.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-200">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Call / WhatsApp</span>
                <span className="text-sm font-medium text-white block">+91 8075551892</span>
              </div>
            </a>

            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-4 shadow-xl">
              <div className="p-3.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-sm font-medium text-white block">Kozhikode, Kerala, India</span>
              </div>
            </div>
          </div>



        </div>
      </section>

    </main>
  );
}