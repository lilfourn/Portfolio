"use client";

import { motion } from 'framer-motion';
import { Code2, Brain, Lightbulb, Coffee, Heart, Users, Mountain, Dog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GlowingText from "@/app/components/glowing-text";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FeatureSteps } from "@/components/feature-section";

export default function AboutContent() {
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
      category: "Development Practices",
      items: ["Git", "CI/CD", "Testing", "Documentation"],
      icon: Lightbulb,
      description: "Following industry best practices for reliable software delivery"
    }
  ];

  const steps = [
    {
      title: "Early Years",
      description: "Started my journey in tech with a passion for problem-solving and creating user-friendly solutions.",
      icon: Heart,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Professional Growth",
      description: "Expanded my skills through hands-on experience and continuous learning in modern web technologies.",
      icon: Mountain,
      skills: ["React", "Node.js", "TypeScript"]
    },
    {
      title: "Current Focus",
      description: "Specializing in full-stack development with a focus on creating scalable, performant web applications.",
      icon: Lightbulb,
      skills: ["Next.js", "Supabase", "Tailwind"]
    }
  ];

  const interests = [
    {
      title: "Community",
      description: "Active participant in tech communities, sharing knowledge and learning from others.",
      icon: Users
    },
    {
      title: "Coffee & Code",
      description: "Love exploring new coffee shops while working on side projects.",
      icon: Coffee
    },
    {
      title: "Dogs",
      description: "Passionate about dogs and their amazing companionship.",
      icon: Dog
    }
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-screen -mt-24 -ml-[50vw] left-1/2 right-1/2  overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/about me/my brothers.png"
            alt="Luke with his brothers"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 " />
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mt-8 mb-6 text-white"
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <GlowingText 
                text="Get to know me better"
                className="text-xl md:text-2xl text-zinc-200"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-1">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Me</span>
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[25%] bg-blue-600 -skew-x-12"
                  style={{
                    opacity: 0.3,
                    transform: 'skew(-12deg) translateY(40%)'
                  }}
                />
              </span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I'm a Full Stack Developer with a passion for creating elegant, efficient, and user-friendly web applications. 
                My journey in software development has been driven by a constant desire to learn and innovate.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                With expertise in modern web technologies and a keen eye for design, I specialize in building responsive, 
                performant applications that provide exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to tackle complex challenges and deliver robust solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">{skill.description}</p>
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
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              The path that led me to where I am today, and where I'm headed next.
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400">
                        <Icon className="w-6 h-6" />
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
              );
            })}
          </div>
        </div>

        {/* Life Outside Coding */}
        <div className="mt-20 sm:mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Life Beyond the Screen</h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
              From lacrosse fields to mountain peaks, here's a glimpse into the moments that shape who I am.
            </p>
          </motion.div>

          <FeatureSteps
            features={[
              {
                step: "Sports & Leadership",
                title: "UT Men's Lacrosse",
                content: "Building leadership and teamwork on the field. Strategy meets execution.",
                image: "/about me/UT mens lacrosse photo.png"
              },
              {
                step: "Community & Tradition",
                title: "Texas OU Weekend",
                content: "Creating lifelong bonds through shared traditions and celebrations.",
                image: "/about me/at Texas OU with my fraternity.png"
              },
              {
                step: "Adventure & Family",
                title: "Mountain Adventures",
                content: "Conquering peaks and making memories with family by my side.",
                image: "/about me/family photo after climbing moutain.png"
              },
              {
                step: "Companionship",
                title: "Meet Roux",
                content: "My faithful companion and coding buddy, always by my side.",
                image: "/about me/roux my dog.png"
              }
            ]}
            className="bg-transparent"
            autoPlayInterval={6000}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12 md:mt-16 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto px-4"
          >
            These experiences shape my perspective and bring creativity to my work. Whether it's the discipline from sports, 
            the joy of adventure, or the bonds of friendship and family – each moment contributes to who I am as a developer and person.
          </motion.p>
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
