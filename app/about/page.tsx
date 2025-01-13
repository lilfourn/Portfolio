"use client";

import { motion } from 'framer-motion';
import { Code2, Brain, Lightbulb, Coffee, Heart, Users, Mountain, Dog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GlowingText from "@/app/components/glowing-text";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      icon: Code2,
      description: "Building beautiful, responsive user interfaces with modern frameworks"
    },
    {
      category: "Backend Solutions",
      items: ["Node.js", "PostgreSQL", "Supabase", "Drizzle ORM"],
      icon: Brain,
      description: "Creating robust server-side applications and database architectures"
    },
    {
      category: "Development Tools",
      items: ["Git", "VS Code", "Figma", "Vercel"],
      icon: Lightbulb,
      description: "Utilizing industry-standard tools for efficient development workflow"
    },
    {
      category: "Professional Skills",
      items: ["Problem Solving", "Team Collaboration", "Quick Learning", "Communication"],
      icon: Coffee,
      description: "Bringing technical expertise and interpersonal skills together"
    },
  ];

  const journey = [
    {
      title: "Leadership in Athletics",
      image: "/about me/UT mens lacrosse photo.png",
      icon: Users,
      description: "As captain of the UT Men's Lacrosse team, I've learned invaluable lessons about leadership, teamwork, and perseverance. These experiences have shaped my approach to project management and team collaboration in tech.",
      photoContext: "Leading the UT Men's Lacrosse team as team captain",
      skills: ["Team Leadership", "Strategic Planning", "Communication"]
    },
    {
      title: "Community & Brotherhood",
      image: "/about me/at Texas OU with my fraternity.png",
      icon: Heart,
      description: "Being part of a fraternity has taught me the importance of building strong relationships and fostering a supportive community. These connections have been crucial in my personal and professional growth.",
      photoContext: "Celebrating with my fraternity brothers at the Texas-OU game",
      skills: ["Community Building", "Networking", "Social Leadership"]
    },
    {
      title: "Family Values",
      image: "/about me/family photo after climbing moutain.png",
      icon: Mountain,
      description: "My family has always encouraged me to push boundaries and take on new challenges. Whether it's climbing mountains or tackling complex coding problems, their support has been my foundation.",
      photoContext: "Family celebration after conquering a mountain climb together",
      skills: ["Determination", "Goal Setting", "Resilience"]
    },
    {
      title: "Work-Life Balance",
      image: "/about me/roux my dog.png",
      icon: Dog,
      description: "My dog Roux reminds me of the importance of balance and joy in life. Just as in coding, sometimes the best solutions come when you take a step back and approach problems with a fresh perspective.",
      photoContext: "Taking a break with my best friend Roux",
      skills: ["Balance", "Perspective", "Joy"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about me/family photo after climbing moutain.png"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GlowingText 
                text="Full Stack Developer & Creative Problem Solver"
                className="text-xl md:text-2xl text-zinc-200"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.category}</h3>
                  <p className="text-zinc-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-zinc-200 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Section */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            My Story
          </motion.h2>
          
          <div className="space-y-16">
            {journey.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="w-full md:w-2/5">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center justify-center gap-2 text-zinc-200 mb-2">
                            <step.icon className="w-4 h-4" />
                            <p className="text-sm font-medium">{step.title}</p>
                          </div>
                          <p className="text-sm text-zinc-300 text-center">
                            {step.photoContext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-3/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <step.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {step.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-zinc-200 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Avatar className="h-32 w-32 ring-2 ring-zinc-800 relative">
                <AvatarImage 
                  src="/about me/Luke Cutout.png" 
                  alt="Luke Fournier"
                  className="object-cover"
                />
                <AvatarFallback>LF</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Create Something Amazing</h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            I&apos;m always excited to take on new challenges and collaborate on innovative projects. 
            Whether you have a specific project in mind or just want to connect, I&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex justify-center">
            <Link 
              href="/hire" 
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Coffee className="w-5 h-5" />
              <span className="relative">Let&apos;s Grab Coffee</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}