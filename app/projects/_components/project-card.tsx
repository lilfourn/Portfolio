"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react"
import ProjectDialog from "./project-dialog"
import { Project } from "./projects-data"

interface ProjectCardProps extends Project {
  index: number
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => props.liveUrl && window.open(props.liveUrl, '_blank')}
        className="cursor-pointer relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all"
      >
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            <Image src={props.image} alt={props.title} fill className="object-cover" />
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
