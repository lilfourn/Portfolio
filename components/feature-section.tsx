"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-4 sm:p-6 md:p-8", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center text-white">
            {title}
          </h2>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Text content - switches to top on mobile */}
          <div className="order-2 lg:order-1 w-full space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-xl transition-colors duration-200 cursor-pointer",
                  index === currentFeature
                    ? "bg-zinc-800/50"
                    : "hover:bg-zinc-800/30"
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 mt-1",
                    index === currentFeature
                      ? "bg-zinc-800 border-white text-white"
                      : "bg-transparent border-zinc-600 text-zinc-400"
                  )}
                >
                  <span className="text-xs sm:text-sm font-semibold">{index + 1}</span>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image content - switches to bottom on mobile */}
          <div className="order-1 lg:order-2 w-full">
            <div
              className={cn(
                "relative w-full rounded-2xl overflow-hidden",
                imageHeight,
                "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
              )}
            >
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.step}
                          className="w-full h-full object-cover rounded-2xl"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl" />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
