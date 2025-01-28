"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/app/types/blog-types";
import { AuthorAvatar } from "@/app/components/AuthorAvatar";

const components = {
  h1: ({ children, ...props }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-bold mt-6 mb-3" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: { children: React.ReactNode }) => (
    <li className="mb-2" {...props}>{children}</li>
  ),
  code: ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
    const language = className ? className.replace("language-", "") : "";
    return (
      <code className={`${className} rounded bg-zinc-800 px-1 py-0.5`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: { children: React.ReactNode }) => (
    <pre className="overflow-auto p-4 rounded bg-zinc-800 mb-4" {...props}>{children}</pre>
  ),
  strong: ({ children, ...props }: { children: React.ReactNode }) => (
    <strong className="font-bold" {...props}>{children}</strong>
  ),
  blockquote: ({ children, ...props }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-zinc-500 pl-4 italic mb-4" {...props}>{children}</blockquote>
  ),
  a: ({ children, href, ...props }: { children: React.ReactNode; href?: string }) => (
    <Link href={href || "#"} className="text-blue-400 hover:text-blue-300" {...props}>{children}</Link>
  ),
};

interface BlogPostContentProps {
  post: BlogPost;
  content: React.ReactNode;
}

export default function BlogPostContent({ post, content }: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
      
      <div className="flex items-center text-gray-400 mb-8">
        <div className="flex items-center mr-4">
          <AuthorAvatar name={post.author.name} />
          <span>{post.author.name}</span>
        </div>
        <Calendar className="w-4 h-4 mr-2" />
        <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
      </div>

      {post.coverImage && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </motion.article>
  );
}
