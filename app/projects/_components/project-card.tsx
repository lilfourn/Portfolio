"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Project } from "./projects-data"
import ProjectDialog from "./project-dialog"

interface ProjectCardProps extends Project {
  index: number
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all"
      >
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-semibold text-blue-400 mb-2">Coming Soon</p>
                <div className="w-16 h-0.5 bg-blue-500/20 mx-auto rounded-full" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {props.title}
            </h3>
          </div>
        </div>
      </motion.div>

      <ProjectDialog
        project={props}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  )
}
