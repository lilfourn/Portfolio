import { Metadata } from "next";
import AboutContent from "./_components/about-content";

export const metadata: Metadata = {
  title: "About Luke Fournier | Full Stack Developer & Software Engineer",
  description: "Learn about Luke Fournier, a Full Stack Developer with expertise in Next.js, React, and modern web technologies. Discover my journey, skills, and passion for creating innovative web solutions.",
  openGraph: {
    title: "About Luke Fournier | Full Stack Developer & Software Engineer",
    description: "Learn about Luke Fournier, a Full Stack Developer with expertise in Next.js, React, and modern web technologies. Discover my journey, skills, and passion for creating innovative web solutions."
  }
};

export default function AboutPage() {
  return <AboutContent />;
}