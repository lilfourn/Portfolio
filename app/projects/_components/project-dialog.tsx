"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Project } from "./projects-data"

interface ProjectDialogProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[80vh] overflow-y-auto">
        <div className="relative h-60 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-foreground/80 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Challenges</h3>
              <ul className="space-y-2">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
                    <span className="text-foreground/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="space-y-2">
                {project.details.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
                    <span className="text-foreground/80">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Impact</h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.details.impact}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {project.githubUrl && (
              <Button variant="outline" className="flex-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button className="flex-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
