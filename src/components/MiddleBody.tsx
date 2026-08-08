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
  Zap
} from "lucide-react";

// Custom SVG for GitHub Icon
const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Custom SVG for LinkedIn Icon
const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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

  return (
    <main className="pt-24 pb-16 bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] bg-indigo-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md text-blue-400 text-xs sm:text-sm font-medium shadow-inner">
            <Zap className="w-4 h-4 text-blue-400" /> Web Developer & AI Vibe Coder
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Building High-Performance Digital <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Experiences</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Dynamic Web Developer specializing in Next.js, React, PHP, and AI workflows. Expert in GTmetrix speed optimization, Technical SEO, and full-cycle hosting deployment across UAE & India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-900/90 border border-slate-800 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6">
            <a href="https://github.com/adarshrajstechie" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/adarshrajstechie" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Briefcase className="text-blue-500" /> Work Experience
          </h2>
          <p className="text-slate-400">Proven history in engineering, performance tuning, and digital marketing.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/10">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                <p className="text-slate-300 font-medium text-sm">{exp.company}</p>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Code className="text-blue-500" /> Technical Skills & Tools
          </h2>
          <p className="text-slate-400">Stack, databases, and AI tools I leverage to accelerate development.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-lg border border-slate-700/60 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Globe className="text-blue-500" /> Featured Projects
          </h2>
          <p className="text-slate-400">High-speed Next.js and PHP web applications deployed live.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-8 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
              <div>
                <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 my-4">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <GithubIcon className="w-4 h-4" /> Code Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-700 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/20">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.TECH in Mechanical Engineering</h3>
              <p className="text-slate-400 text-sm">LBS College Of Engineering Kasaragod / KTU (2016 - 2020)</p>
            </div>
          </div>
          <div className="text-right">
            <span className="px-4 py-2 bg-slate-800/80 text-slate-300 text-sm rounded-xl font-medium border border-slate-700/60 inline-block">
              Kozhikode, Kerala, India
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s Work Together</h2>
        <p className="text-slate-300 max-w-xl mx-auto">
          Need a fast Next.js platform, custom web solutions, or GTmetrix performance tuning? Drop me a message.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 pt-6">
          <a href="mailto:adarshrajstechie@gmail.com" className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 hover:border-slate-700 transition-all duration-200">
            <Mail className="w-6 h-6 text-blue-400" />
            <span className="text-xs text-slate-400">Email</span>
            <span className="text-sm font-medium text-white truncate max-w-full">adarshrajstechie@gmail.com</span>
          </a>

          <a href="tel:+918075551892" className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 hover:border-slate-700 transition-all duration-200">
            <Phone className="w-6 h-6 text-emerald-400" />
            <span className="text-xs text-slate-400">Call / WhatsApp</span>
            <span className="text-sm font-medium text-white">+91 8075551892</span>
          </a>

          <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-slate-700 transition-all duration-200">
            <MapPin className="w-6 h-6 text-indigo-400" />
            <span className="text-xs text-slate-400">Location</span>
            <span className="text-sm font-medium text-white">Kozhikode, Kerala</span>
          </div>
        </div>
      </section>
    </main>
  );
}