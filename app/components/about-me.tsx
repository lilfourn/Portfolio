"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Coffee, Dog, Mountain, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowingText from "./glowing-text";

const AboutMe = () => {
  const aboutCards = [
    {
      icon: Code2,
      title: "Web Development",
      subtitle: "TECH PASSION",
      description:
        "Building modern web applications with a focus on clean code and exceptional user experiences.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Rocket,
      title: "Entrepreneurship",
      subtitle: "FUTURE VISION",
      description:
        "Aspiring to build innovative software solutions and lead a tech company that makes a difference.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Mountain,
      title: "Life Balance",
      subtitle: "BEYOND CODE",
      description:
        "Finding inspiration in outdoor adventures and quality time with my dog, Roux.",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32 relative">
      <div className="w-full md:w-[720px] lg:w-[920px] xl:w-[1200px] mx-auto">
        {/* Section Header with Photo */}
        <div className="relative mb-40">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  About{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Me</span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[25%] bg-blue-600 -skew-x-12"
                      style={{
                        background:
                          "linear-gradient(to bottom, #4f46e5, #3b82f6)",
                        boxShadow: "0 4px 6px rgba(59, 130, 246, 0.5)",
                      }}
                    ></div>
                  </span>
                </h2>
                <div className="space-y-4">
                  <GlowingText
                    text="As a sophomore at The University of Texas at Austin, I'm on a journey to blend my passion for web development with innovative design thinking. Every line of code I write is driven by the belief that great software should be both beautiful and functional."
                    className="text-zinc-400 text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
                  />
                  <GlowingText
                    text="When I'm not crafting digital experiences, you'll find me exploring Austin's outdoor trails with my adventurous companion, Roux, or brainstorming ideas for the software company I aspire to build one day."
                    className="text-zinc-400 text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
                  />

                  {/* Read More Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-2"
                    >
                      <div className="relative overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative px-6 py-2 bg-zinc-900/90 backdrop-blur-sm border border-white/10 rounded-full group-hover:border-white/20 transition-colors duration-300">
                          <span className="text-white font-medium">
                            Read More
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Photo Container with Creative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] aspect-[4/5] mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-zinc-800/50 rounded-2xl backdrop-blur-sm -z-10" />
                <div className="absolute -inset-0.5 bg-zinc-700/20 rounded-2xl" />

                {/* Image */}
                <div className="relative h-full rounded-xl overflow-hidden border border-zinc-700/50">
                  <Image
                    src="/Luke.png"
                    alt="Luke Fournier"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 p-3 bg-zinc-900/90 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <Dog className="w-6 h-6 text-amber-400" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -left-6 p-3 bg-zinc-900/90 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <Code2 className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative mt-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
                card.gradient
              } p-px ${index === 1 ? "md:-mt-12" : ""}`}
            >
              <div className="relative h-full rounded-2xl bg-zinc-900/90 p-8 transition-all duration-300 group-hover:bg-zinc-900/70 backdrop-blur-sm">
                <div className="mb-6 inline-flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="rounded-xl bg-zinc-800/50 p-3 ring-1 ring-white/10"
                  >
                    <card.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-zinc-400">
                    {card.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300">
                    {card.description}
                  </p>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coffee Break */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/hire" className="group inline-flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-400 ring-1 ring-white/10 group-hover:bg-zinc-800/70 group-hover:ring-white/20 transition-all duration-300">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="group-hover:animate-bounce"
                >
                  <Coffee className="h-4 w-4 group-hover:text-amber-400 transition-colors duration-300" />
                </motion.div>
                <span className="text-sm group-hover:text-white transition-colors duration-300">
                  Always up for a coffee chat about tech and design
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
