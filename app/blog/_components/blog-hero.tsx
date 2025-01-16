"use client";

import { motion } from "framer-motion";
import GlowingText from "@/app/components/glowing-text";

export default function BlogHero() {
  return (
    <div className="relative h-[60vh] mt-[-4rem] overflow-hidden">
      <div className="absolute inset-0" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Blog & Tutorials
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GlowingText 
              text="Thoughts on software development, economics, and technology"
              className="text-xl md:text-2xl text-zinc-200"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
