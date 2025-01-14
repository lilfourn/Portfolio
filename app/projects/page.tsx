import { Metadata } from "next"
import ProjectsContent from "./_components/projects-content"

export const metadata: Metadata = {
  title: "Projects by Luke Fournier | Web Development Portfolio",
  description: "Explore Luke Fournier's portfolio of web development projects. Full Stack applications built with Next.js, React, TypeScript, and modern web technologies. See examples of responsive design, performance optimization, and clean code.",
  openGraph: {
    title: "Projects by Luke Fournier | Web Development Portfolio",
    description: "Explore Luke Fournier's portfolio of web development projects. Full Stack applications built with Next.js, React, TypeScript, and modern web technologies."
  }
};

export default async function ProjectsPage() {
  return <ProjectsContent />
}