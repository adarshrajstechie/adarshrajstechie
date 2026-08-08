// src/app/page.tsx
import Header from "@/components/Header";
import MiddleBody from "@/components/MiddleBody";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Metadata from "next";

export const metadata = {
  title: "Adarsh Raj S | Web Developer & Performance Specialist",
  description: "Portfolio of Adarsh Raj S - Web Developer specializing in Next.js, React, PHP, Technical SEO, GTmetrix performance tuning, and AI vibe coding workflows.",
  keywords: ["Adarsh Raj S", "Web Developer Kozhikode", "Next.js Developer UAE", "GTmetrix SEO Expert", "React Developer Kerala"],
  openGraph: {
    title: "Adarsh Raj S | Web Developer",
    description: "Building high-performance, GTmetrix A-grade websites using Next.js, React, and AI integrations.",
    url: "https://adarshrajstechie.vercel.app/",
    type: "website",
  },
};

export default function Home() {
  // AI-Level Schema Markup (JSON-LD) for Search Engine Crawlers
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adarsh Raj S",
    jobTitle: "Web Developer",
    url: "https://adarshrajstechie.vercel.app/",
    sameAs: [
      "https://github.com/adarshrajstechie",
      "https://www.linkedin.com/in/adarshrajstechie"
    ],
    knowsAbout: ["Next.js", "React", "Node.js", "PHP", "WordPress", "SEO", "GTmetrix", "AI Tools"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <MiddleBody />
      <FloatingActions />
      <Footer />
    </>
  );
}