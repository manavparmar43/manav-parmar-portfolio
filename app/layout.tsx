import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Manav Parmar | Software Developer",
  description:
    "Software Developer with 4+ years of experience in Backend & Full-Stack Engineering and AI Product Development. Specializing in Python, Django, FastAPI, React, Node.js, and AI/ML integrations. Based in Ahmedabad, India.",
  keywords: [
    "Manav Parmar",
    "Software Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Python Developer",
    "React Developer",
    "AI Developer",
    "Ahmedabad",
    "India",
    "Django",
    "FastAPI",
    "Node.js",
  ],
  authors: [{ name: "Manav Parmar" }],
  creator: "Manav Parmar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manav Parmar | Software Developer",
    description:
      "Software Developer with 4+ years of experience specializing in Backend, Full-Stack, and AI Product Development.",
    siteName: "Manav Parmar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Parmar | Software Developer",
    description:
      "Software Developer with 4+ years of experience specializing in Backend, Full-Stack, and AI Product Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
