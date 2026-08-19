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
  Share2,
  BarChart,
  Truck
} from "lucide-react";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function MiddleBody() {
  const experiences = [
    {
      role: "Web Developer",
      company: "4Biz International LLC",
      period: "January 2026 - Present",
      desc: "Developed, maintained, and optimized high-performance websites for a diverse portfolio of clients across the UAE and India using WordPress, PHP, HTML, CSS, JavaScript, React, Next.js, and Node.js. Solved critical site crashes to ensure maximum uptime, managed end-to-end hosting deployments, and executed technical SEO, performance tuning, and GTmetrix optimizations."
    },
    {
      role: "Web Developer Cum Digital Marketer & Social Media Manager",
      company: "Zag Signs",
      period: "September 2025 - Present",
      desc: "Developed and managed WordPress e-commerce and Malayalam news platforms (Zag News). Built custom PHP social platforms featuring video/voice group calling, group chat, and credit purchases. Handled Meta/Google Ads (including election campaigns), YouTube/Facebook/Instagram monetization, AdSense, and Google Business Profiles."
    },
    {
      role: "Web Developer Cum Digital Marketer",
      company: "Deityom Digital Marketing Agency",
      period: "October 2024 - September 2025",
      desc: "Developed client web portals on Shopify, WordPress, HTML, CSS, Bootstrap, JavaScript, Python, and Django while managing Google AdSense. Executed end-to-end SEO, web analytics (Search Console, Analytics), Meta/Google Ads, social media management, poster design, video reel editing, and GMB profiling."
    },
    {
      role: "Python Developer Intern",
      company: "Futura Labs Calicut",
      period: "Jan 2024 - April 2024",
      desc: "Practiced Python, Django, HTML, CSS, Bootstrap, JavaScript, GitHub, and REST API development through real-time projects and guided training."
    },
    {
      role: "Python Developer Intern",
      company: "Inmakes Infotech Pvt. Ltd.",
      period: "Dec 2022 - March 2023",
      desc: "Python full-stack engineering utilizing Django, Flask, HTML, CSS, JS, and Bootstrap. Delivered assigned client development projects on schedule."
    }
  ];

  const featuredProjects = [
    {
      title: "Dubai IT Company Corporate Web Platform",
      tech: ["React", "Next.js", "Node.js", "Gemini AI API"],
      desc: "Official corporate site for 4Biz International with automated form submissions, mail delivery auto-responses via Node.js, and an interactive Gemini AI Chatbot for client support.",
      live: "https://www.4bizinternational.com/",
      github: "https://github.com/adarshrajstechie/4bizinternational_company_website_next.js.git"
    },
    {
      title: "Emrald Ace Corporate MEP Platform",
      tech: ["Next.js", "React", "Tailwind CSS"],
      desc: "High-performance web app for UAE-based MEP and facility management enterprise, showcasing HVAC, annual maintenance contracts (AMC), and civil engineering modules.",
      live: "https://www.emraldace.ae/",
      github: "https://github.com/adarshrajstechie/emaraldace_company_website_next.js.git"
    },
    {
      title: "Client Feedback & Testimonial Landing Page",
      tech: ["Next.js", "Hostinger", "PHP Mailer"],
      desc: "Feedback and testimonial collection platform hosted statically on Hostinger with custom PHP mail handler configuration.",
      live: "https://feedback.4bizinternational.com/",
      github: "https://github.com/adarshrajstechie/4biz_feedback_landing_page_next.js.git"
    },
    {
      title: "Theyyampattil UAE Furniture Brand Platform",
      tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
      desc: "Custom home interior solutions platform built with mobile-first UI, secure form validation, Core Web Vitals optimization, and GTmetrix Grade-A speed.",
      live: "https://theyyampattilgcc.com/",
      github: "https://github.com/adarshrajstechie/theyyampattil_gcc_php-html-website.git"
    },
    {
      title: "Logistics and Relocation Service Website",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
      desc: "Modern web presence for a UAE relocation and logistics enterprise (Fastlibra Mover and Packer). Designed clean, fast-loading user interfaces with interactive UI components, clear service tiers, mobile-first layouts, and direct lead channels.",
      live: "https://fastlibramoverandpacker.com/",
      github: ""
    }
  ];

  const wordpressProjects = [
    { name: "Aimbridge Education", url: "https://aimbridgeeducation.com/" },
    { name: "ALM Trading UAE", url: "https://almtrading.ae/" },
    { name: "TJI Model Making (Gemini AI Chatbot)", url: "https://tjimodelmaking.com/" },
    { name: "Opus Business Management", url: "https://www.opusbm.com/" },
    { name: "Opus Acoustic", url: "https://opusacoustic.com/" }
  ];

  const previousProjects = [
    { name: "Damaru Gold & Diamonds", category: "Shopify E-Commerce", url: "https://www.damarugoldanddiamonds.com/" },
    { name: "Zag News Portal", category: "Digital Publishing", url: "https://zagnews.in/" },
    { name: "The City of Spices", category: "Culinary & Blog", url: "https://thecityofspices.com/" },
    { name: "Deityom Spiritual Portal", category: "Web Platform", url: "https://deityom.com/" },
    { name: "Kozhikode For Rent", category: "Real Estate Portal", url: "https://kozhikodeforrent.com/" },
    { name: "Omkaar Tourist Home", category: "Hospitality", url: "https://omkaartouristhome.com/" },
    { name: "Arora Tourist Home", category: "Hospitality", url: "https://aroratouristhome.com/" },  
  ];

  const categories = [
    { name: "Web Technologies", icon: Code, items: ["Next.js", "React", "Node.js", "PHP", "WordPress", "Shopify", "HTML5/CSS3", "JavaScript", "Python", "Django", "Flask", "Bootstrap"] },
    { name: "Mobile App Tech", icon: Smartphone, items: ["Flutter", "Dart", "Progressive Web Apps (PWA)"] },
    { name: "AI Tools & Vibe Coding", icon: Bot, items: ["Gemini AI", "ChatGPT", "GitHub Copilot", "Claude", "Google AI Studio", "Antigravity", "DeepSeek", "Canva AI"] },
    { name: "Deployment & Databases", icon: Database, items: ["MySQL", "PostgreSQL", "Supabase", "GitHub", "Vercel", "Render", "Hostinger"] },
    { name: "SEO & Growth Marketing", icon: TrendingUp, items: ["Technical SEO", "On-Page SEO", "Off-Page SEO", "GTmetrix Tuning", "Google Search Console", "Google Analytics", "Meta Ads", "Google Ads"] },
    { name: "Monetization & Management", icon: BarChart, items: ["Google AdSense", "Meta Monetization", "YouTube Ads", "Razorpay Integration", "GMB Management", "Team Leadership"] },
    { name: "SMM & Content Creation", icon: Share2, items: ["Facebook SMM", "Instagram SMM", "YouTube SMM", "Canva Design", "VN Video Editing", "Copywriting"] }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://adarshrajstechie.vercel.app/#person",
        "name": "Adarsh Raj S",
        "jobTitle": "Web Developer & Digital Engineer",
        "url": "https://adarshrajstechie.vercel.app/",
        "email": "mailto:adarshrajstechie@gmail.com",
        "telephone": ["+918075551892", "+919496081054"],
        "sameAs": [
          "https://github.com/adarshrajstechie",
          "https://www.linkedin.com/in/adarshrajstechie"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "LBS College Of Engineering Kasaragod / APJ Abdul Kalam Technological University"
        },
        "knowsAbout": [
          "Next.js",
          "React",
          "Node.js",
          "PHP",
          "WordPress",
          "Shopify",
          "Technical SEO",
          "GTmetrix Performance Tuning",
          "Digital Marketing",
          "Meta Ads & Google Ads",
          "Python Django",
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
        "name": "Featured Projects by Adarsh Raj S",
        "itemListElement": featuredProjects.map((proj, index) => ({
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
    <main className="w-full bg-slate-950 text-slate-100 overflow-x-hidden antialiased selection:bg-cyan-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* HERO / ABOUT SECTION */}
      <section id="about" className="w-full py-12 lg:py-20 relative overflow-hidden contain-paint">
        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full transform-gpu" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" /> 
                <span>Web Developer &amp; Digital Engineer</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Adarsh Raj S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  Full-Stack &amp; Growth Specialist
                </span>
              </h1>
              
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Dynamic and results-driven Web Developer with extensive experience building, maintaining, and optimizing high-performance websites for international clients across the UAE and India. Adept at combining Next.js, React, PHP, Node.js, and WordPress with advanced vibe coding AI workflows.
              </p>

              {/* Education Card */}
              <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-white">B.TECH in Mechanical Engineering</h2>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium">LBS College Of Engineering Kasaragod / KTU (2016 - 2020)</p>
                    <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-200 font-medium bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Kozhikode, Kerala, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social CTA Links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="https://github.com/adarshrajstechie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-all duration-200 shadow-md"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/adarshrajstechie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-500/40 text-sky-200 font-medium text-sm transition-all duration-200 shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
                <div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform-gpu" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <Image
                    src="/adarsh_raj_s.jpeg"
                    alt="Adarsh Raj S - Web Developer Profile"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 384px"
                    className="object-cover object-center transform-gpu transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="w-full py-12 lg:py-20 relative contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Briefcase className="w-3.5 h-3.5 shrink-0" /> <span>Professional Career</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work Experience Journey
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Hands-on engineering, website crash solutions, GTmetrix performance tuning, and growth marketing.
            </p>
          </div>

          <div className="w-full relative pl-4 sm:pl-8 lg:pl-10 max-w-6xl 2xl:max-w-7xl mx-auto">
            <div aria-hidden="true" className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent" />

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, idx) => (
                <article key={idx} className="relative group pl-6 sm:pl-8">
                  
                  <div className="absolute -left-[19px] sm:-left-[27px] top-6 -translate-y-1/2 flex items-center justify-center z-10">
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200" />
                  </div>

                  <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl hover:border-slate-700 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                          <Calendar className="w-3 h-3 text-cyan-400 shrink-0" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                          <Briefcase className="w-3 h-3 text-slate-400 shrink-0" /> {exp.company}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>

                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL SKILLS & ECOSYSTEM */}
      <section id="skills" className="w-full py-12 lg:py-20 relative contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Code className="w-3.5 h-3.5 shrink-0" /> <span>Full Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills, AI &amp; Digital Ecosystem
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Tech stack, AI vibe coding, cloud deployment, monetization, and growth tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const spanClass = idx < 3 ? "lg:col-span-2" : idx < 5 ? "lg:col-span-3" : "lg:col-span-3";
              return (
                <div 
                  key={idx} 
                  className={`bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-slate-700 transition-all duration-200 ${spanClass}`}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 hover:text-white transition-colors duration-150">
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

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="w-full py-12 lg:py-20 relative contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Globe className="w-3.5 h-3.5 shrink-0" /> <span>Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Client Engineering
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Custom applications built with Next.js, React, Node.js, PHP, HTML5, and AI API integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((proj, idx) => (
              <article key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-200 shadow-xl group">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200 shrink-0" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-800">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-150"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Live Web Application
                  </a>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-150"
                    >
                      <GithubIcon className="w-3.5 h-3.5 shrink-0" /> Source Repository
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WORDPRESS & CMS CLIENT BUILDS */}
      <section id="wordpress-projects" className="w-full py-12 lg:py-16 relative contain-paint bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              WordPress &amp; Enterprise Webmaster Builds
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              End-to-end development, Gemini AI Chatbot integrations, technical SEO, and speed optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wordpressProjects.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between hover:border-cyan-500/30 transition-colors duration-150 group"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL PORTFOLIO PROJECTS */}
      <section id="other-projects" className="w-full py-12 lg:py-16 relative contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              E-Commerce, Publishing &amp; Specialized Portals
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              News platforms, real estate portals, hospitality systems, and Shopify deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {previousProjects.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between hover:border-indigo-500/30 transition-colors duration-150 group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <div className="pt-3 flex items-center gap-1 text-[11px] font-medium text-slate-300 group-hover:text-slate-100">
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-100 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full py-12 lg:py-20 relative contain-paint">
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full transform-gpu" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Have a web application, digital campaign, or GTmetrix speed optimization task? Let&apos;s connect.
            </p>
          </div>

          <address className="not-italic grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a 
              href="mailto:adarshrajstechie@gmail.com" 
              className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-cyan-500/50 transition-all duration-200 shadow-xl group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-200 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 max-w-full">
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block">Email</span>
                <span className="text-xs sm:text-sm font-medium text-white truncate block">adarshrajstechie@gmail.com</span>
              </div>
            </a>

            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-3 shadow-xl hover:border-emerald-500/50 transition-all duration-200">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block">Call / WhatsApp</span>
                <a href="tel:+918075551892" className="text-xs sm:text-sm font-medium text-white block hover:text-emerald-400 transition-colors">+91 8075551892</a>
                <a href="tel:+919496081054" className="text-xs sm:text-sm font-medium text-slate-200 block hover:text-emerald-400 transition-colors">+91 9496081054</a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-3 shadow-xl">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block">Location</span>
                <span className="text-xs sm:text-sm font-medium text-white block">Kozhikode, Kerala, India</span>
              </div>
            </div>
          </address>

        </div>
      </section>

    </main>
  );
}