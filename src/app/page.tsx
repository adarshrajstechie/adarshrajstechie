import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MiddleBody from "@/components/MiddleBody";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adarshrajstechie.vercel.app";

export const metadata: Metadata = {
  title: "Adarsh Raj S | Web Developer & Digital Marketer",
  description: "Hire Adarsh Raj S — Freelance Full-Stack Web Developer & Digital Marketer in Kozhikode & Remote. Specializing in high-converting Next.js, React, PHP, Technical SEO, and AI integration.",
  keywords: [
    "Freelance Web Developer Kozhikode",
    "Hire Next.js Developer Kerala",
    "Digital Marketer Kozhikode",
    "Freelance React Developer UAE",
    "Adarsh Raj S",
    "Technical SEO Freelancer",
    "Full Stack Developer Kozhikode",
    "Next.js SEO Specialist"
  ],
  authors: [{ name: "Adarsh Raj S", url: SITE_URL }],
  creator: "Adarsh Raj S",
  publisher: "Adarsh Raj S",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adarsh Raj S | Freelance Web Developer & Digital Marketer",
    description: "Get ultra-fast, high-converting custom websites tailored for maximum search engine leads and conversions. Built with Next.js, React, and AI workflows.",
    url: "/",
    type: "website",
    siteName: "Adarsh Raj S Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://adarshrajstechie.vercel.app/adarshrajs-logo.png",
        width: 1200,
        height: 630,
        alt: "Adarsh Raj S Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Raj S | Freelance Web Developer & Digital Marketer",
    description: "Building ultra-fast, high-converting Next.js & React web applications for global clients and businesses.",
    creator: "@adarshrajstechie",
    images: ["https://adarshrajstechie.vercel.app/adarshrajs-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const personSchemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adarsh Raj S",
    jobTitle: "Freelance Web Developer & Digital Marketer",
    url: "/",
    sameAs: [
      "https://github.com/adarshrajstechie",
      "https://www.linkedin.com/in/adarshrajstechie"
    ],
    knowsAbout: [
      "Next.js", 
      "React", 
      "Node.js", 
      "PHP", 
      "WordPress", 
      "Technical SEO", 
      "Digital Marketing", 
      "AI Vibe Coding"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "India"
    }
  };

  const businessSchemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Adarsh Raj S - Web Development & Digital Marketing Services",
    image: "https://adarshrajstechie.vercel.app/adarshrajs-logo.png",
    url: "/",
    telephone: "+918075551892",
    email: "adarshrajstechie@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "India"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2588",
      longitude: "75.7804"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    areaServed: ["Worldwide", "India", "UAE", "Kerala", "Kozhikode"],
    serviceOffered: [
      {
        "@type": "Service",
        name: "Custom Next.js & React Web Development"
      },
      {
        "@type": "Service",
        name: "Digital Marketing & Performance Optimization"
      },
      {
        "@type": "Service",
        name: "Technical SEO & Search Engine Optimization"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchemaData) }}
      />

      {/* Foreground elements */}
      <div className="relative z-10 w-full min-h-screen">
        <Header />
        <HeroSection />
        <MiddleBody />
        <FloatingActions />
        <Footer />
      </div>
    </>
  );
}