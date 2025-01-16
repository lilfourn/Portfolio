"use client";

import { BlogPost } from "@/types/blog-types";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`} className="h-full">
        <article className="group relative bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-blue-500/50 transition-all h-full flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs sm:text-sm rounded-full bg-white/5 text-zinc-200 border border-white/10 truncate max-w-[150px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mb-4 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 text-zinc-500 text-sm">
              <Calendar className="w-4 h-4" />
              <time>{post.date}</time>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
