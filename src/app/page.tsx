// src/app/page.tsx
import Header from "@/components/Header";
import MiddleBody from "@/components/MiddleBody";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "/";

export const metadata: Metadata = {
  title: "Adarsh Raj S | Freelance Next.js Developer & GTmetrix Performance Specialist",
  description: "Hire Adarsh Raj S — Freelance Full-Stack Web Developer in Kozhikode & Remote. Specializing in high-converting Next.js, React, PHP, Technical SEO, GTmetrix Grade-A speed tuning, and AI integration.",
  keywords: [
    "Freelance Web Developer Kozhikode",
    "Hire Next.js Developer Kerala",
    "GTmetrix Speed Optimization Expert",
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
    title: "Adarsh Raj S | Freelance Web Developer & GTmetrix Speed Specialist",
    description: "Get ultra-fast, GTmetrix A-grade custom websites tailored for maximum search engine leads and conversions. Built with Next.js, React, and AI workflows.",
    url: "/",
    type: "website",
    siteName: "Adarsh Raj S Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Raj S | Freelance Web Developer & Performance Tuning",
    description: "Building ultra-fast, high-converting Next.js & React web applications for global clients and businesses.",
    creator: "@adarshrajstechie",
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
  // AI-Level Schema Markup (JSON-LD) for Person & Freelance Professional Service
  const personSchemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adarsh Raj S",
    jobTitle: "Freelance Full-Stack Web Developer",
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
      "GTmetrix Speed Tuning", 
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
    name: "Adarsh Raj S - Freelance Web Development Services",
    image: "/og-image.jpg",
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
        name: "GTmetrix Grade-A Website Speed Optimization"
      },
      {
        "@type": "Service",
        name: "Technical SEO & Search Engine Optimization"
      }
    ]
  };

  return (
    <>
      {/* Search Engine & AI Crawler Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchemaData) }}
      />

      <Header />
      <MiddleBody />
      <FloatingActions />
      <Footer />
    </>
  );
}