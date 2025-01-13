import { Globe } from "lucide-react"

export interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  details: {
    overview: string
    challenges: string[]
    solutions: string[]
    impact: string
  }
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "The Coffee Social",
    subtitle: "Coming Soon",
    description: "Coming Soon",
    image: "/projects/coming-soon.png",
    details: {
      overview: "Coming Soon",
      challenges: ["Coming Soon"],
      solutions: ["Coming Soon"],
      impact: "Coming Soon"
    },
    technologies: ["Coming Soon"]
  },
  {
    title: "Eden",
    subtitle: "Coming Soon",
    description: "Coming Soon",
    image: "/projects/coming-soon.png",
    details: {
      overview: "Coming Soon",
      challenges: ["Coming Soon"],
      solutions: ["Coming Soon"],
      impact: "Coming Soon"
    },
    technologies: ["Coming Soon"]
  }
]

export const categories = [
  {
    name: "Web Development",
    icon: Globe,
    description: "Modern web applications built with cutting-edge technologies"
  },
  {
    name: "AI & Machine Learning",
    icon: null,
    description: "Intelligent solutions powered by machine learning"
  },
  {
    name: "Open Source",
    icon: null,
    description: "Contributions to the developer community"
  }
]
