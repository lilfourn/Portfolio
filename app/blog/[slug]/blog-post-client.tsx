"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/types/blog-types";
import type { ReactNode } from 'react';
import { AuthorAvatar } from "@/app/components/AuthorAvatar";

interface BlogPostClientProps {
  post: BlogPost;
  content: ReactNode;
}

export function BlogPostClient({ post, content }: BlogPostClientProps) {
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 pt-28 pb-8"
    >
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center">
            <AuthorAvatar name={post.author.name} />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
        </div>
        {post.image && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="prose prose-invert max-w-none mt-8">
        {content}
      </div>
    </motion.article>
  );
}
