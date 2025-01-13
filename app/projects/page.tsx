import { Metadata } from "next"
import ProjectsContent from "./_components/projects-content"

export const metadata: Metadata = {
  title: "Projects | Luke Fournier",
  description: "Explore my portfolio of web development and software engineering projects.",
}

export default async function ProjectsPage() {
  return <ProjectsContent />
}