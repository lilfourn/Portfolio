"use client";

import { BlogPost } from "@/app/types/blog-types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50 z-10" />
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {post.category}
              </span>
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-2">
                {post.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1 text-zinc-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
              <Avatar className="h-8 w-8 ring-2 ring-zinc-800 bg-zinc-900">
                <AvatarImage 
                  src={post.author.image} 
                  alt={post.author.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-blue-500/10 text-blue-400 font-medium">
                  {post.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-zinc-400 font-medium">{post.author.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
