"use client";

import WebsitePreview from "@/app/components/website-preview";
import MockWebsite from "@/public/mock-website";
import GlowingText from "@/app/components/glowing-text";
import PulsingLight from "@/app/components/pulsinglight";
import AboutMe from "@/app/components/about-me";
import Image from "next/image";
import { Code2, Briefcase, GraduationCap, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const Page = () => {
  const techStack = [
    { name: 'Next.js', icon: '/Tech Stack Logos/Next.js Logo Icon.png' },
    { name: 'React', icon: '/Tech Stack Logos/React Logo Icon.png' },
    { name: 'Node.js', icon: '/Tech Stack Logos/Node.js Logo Icon.png' },
    { name: 'PostgreSQL', icon: '/Tech Stack Logos/PostgresSQL Logo.png' },
  ];

  const timeline = [
    {
      icon: GraduationCap,
      title: "Digital Design",
      company: "Design Enthusiast",
      date: "2020 - 2022",
      description: "Started my creative journey with Canva, creating professional logos, branding, and presentations",
      tags: ["Branding", "Logo Design", "Visual Design"]
    },
    {
      icon: Briefcase,
      title: "Web & App Design",
      company: "Self-Taught Designer",
      date: "2022 - 2023",
      description: "Expanded into web and mobile app design, focusing on user experience and interface design",
      tags: ["UI/UX", "Web Design", "App Design"]
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      company: "University of Texas at Austin",
      date: "2024 - Present",
      description: "Pursuing full stack development through formal education and self-learning platforms",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL"]
    },
    {
      icon: GitBranch,
      title: "Continuous Learning",
      company: "Self-Driven",
      date: "2020 - Present",
      description: "Constantly expanding my skills through various platforms and hands-on projects",
      tags: ["Self-Learning", "Growth", "Innovation"]
    }
  ];

  return (
    <section className="min-h-screen">
      {/* First Section */}
      <div className="container mx-auto px-4 pt-32">
        <div className="w-full md:w-[720px] lg:w-[920px] xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-300 ease-in-out">
          {/* Left side - Text content and status */}
          <div className="space-y-12">
            {/* Online Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-opacity-10 bg-white rounded-full">
              <PulsingLight />
              <span className="text-white/80 text-sm">Online.</span>
            </div>
            
            {/* Introduction Text */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-none">
                Hey, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Luke</span>
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[25%] bg-blue-600 -skew-x-12"
                    style={{
                      background: 'linear-gradient(to bottom, #4f46e5, #3b82f6)',
                      boxShadow: '0 4px 6px rgba(59, 130, 246, 0.5)'
                    }}
                  ></div>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-none bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                Fullstack Developer.
              </h2>

              {/* Divider */}
              <div className="w-full h-0.5 bg-white/10"></div>
              <GlowingText 
                text="Hi, I am Luke Fournier, a student, developer, and creator from the University of Texas at Austin. I work with Next, React, Node.js, and PostgreSQL."
                className="text-zinc-400 text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
              />

              {/* Tech Stack */}
              <div className="pt-4">
                <h3 className="text-zinc-300 text-sm font-medium mb-4">TECH STACK</h3>
                <div className="flex gap-6 items-center">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="group flex flex-col items-center gap-2">
                      <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          fill
                          className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Website Preview */}
          <div className="relative">
            <WebsitePreview />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="w-full md:w-[720px] lg:w-[920px] xl:w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Development Journey</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A timeline of my professional development and experiences in software development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}>
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
                      <item.icon className="w-4 h-4 text-white/70" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] p-6 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group`}>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="text-sm text-white/70">{item.company}</p>
                        </div>
                        <span className="text-sm text-white/40">{item.date}</span>
                      </div>
                      <p className="text-sm text-white/60">{item.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:border-white/20 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />
    </section>
  );
};

export default Page;