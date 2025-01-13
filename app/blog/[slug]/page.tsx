"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { MDXRemote } from "next-mdx-remote";
import { getPostBySlug, serializeMDX } from "@/lib/mdx";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { BlogPost } from "@/types/blog-types";
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXComponentProps {
  children: React.ReactNode;
  className?: string;
}

interface MDXComponents {
  [key: string]: React.ComponentType<MDXComponentProps>;
}

const components: MDXComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-2xl font-bold text-white mt-8 mb-4" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="text-zinc-300 leading-relaxed mb-4" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-300" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-zinc-300" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="text-zinc-300" {...props}>{children}</li>
  ),
  code: ({ children, className, ...props }: MDXComponentProps) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded text-sm" {...props}>
        {children}
      </code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre className="bg-zinc-800 p-4 rounded-lg mb-4 overflow-x-auto" {...props}>{children}</pre>
  ),
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong className="font-bold text-white" {...props}>{children}</strong>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-zinc-700 pl-4 my-4 text-zinc-400" {...props}>{children}</blockquote>
  ),
  a: ({ children, ...props }: MDXComponentProps & { href?: string }) => (
    <a className="text-blue-400 hover:text-blue-300 transition-colors" {...props}>{children}</a>
  ),
};

function LoadingPost() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-2/3 bg-zinc-800 rounded mb-4"></div>
      <div className="h-4 w-1/2 bg-zinc-800 rounded mb-8"></div>
      <div className="h-64 bg-zinc-800 rounded-xl mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-zinc-800 rounded"></div>
        <div className="h-4 bg-zinc-800 rounded"></div>
        <div className="h-4 w-2/3 bg-zinc-800 rounded"></div>
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        if (typeof params.slug !== 'string') {
          throw new Error('Invalid slug');
        }

        const post = await getPostBySlug(params.slug);
        const mdxSource = await serializeMDX(post.content);
        
        setPost(post);
        setMdxSource(mdxSource);
        setError(null);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
        router.push('/blog');
      }
    }
    
    loadPost();
  }, [params.slug, router]);

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              {error}
            </h1>
            <p className="text-zinc-400">
              The blog post you&apos;re looking for couldn&apos;t be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!post || !mdxSource) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Suspense fallback={<LoadingPost />}>
            <LoadingPost />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 mb-12"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-zinc-400">
            {post.description}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-lg font-medium">{post.author.name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 not-prose">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-zinc-900/50 text-zinc-400 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div className="markdown-content">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
