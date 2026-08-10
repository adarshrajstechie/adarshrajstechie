import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Eliminates FOIT / FOUT and improves LCP
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4bizinternational.com"),
  title: "Adarsh Raj S | Web Developer & GTmetrix Performance Specialist",
  description: "Portfolio of Adarsh Raj S - Web Developer specializing in Next.js, React, PHP, Technical SEO, and GTmetrix performance tuning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}