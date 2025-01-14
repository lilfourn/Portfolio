"use client";

import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog-types";
import GlowingText from "@/app/components/glowing-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoadingCard() {
  return (
    <div className="animate-pulse bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50">
      <div className="aspect-video bg-zinc-800"></div>
      <div className="p-6">
        <div className="flex gap-2 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-5 w-16 bg-zinc-800 rounded-full"></div>
          ))}
        </div>
        <div className="h-6 bg-zinc-800 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-zinc-800 rounded mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 bg-zinc-800 rounded-full"></div>
          <div className="h-4 w-24 bg-zinc-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
        
        // Extract unique tags from all posts
        const tags = Array.from(new Set(allPosts.flatMap(post => post.tags)));
        setAllTags(tags);
        
        setError(null);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Filter posts based on search query and selected tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
       post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) || 
       false);

    const matchesTags = selectedTags.length === 0 || 
      (post.tags && selectedTags.every(tag => post.tags.includes(tag)));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen pb-16 sm:pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Blog & Tutorials
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GlowingText 
                text="Thoughts on software development, economics, and technology"
                className="text-xl md:text-2xl text-zinc-200"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 bg-white/5 border-white/10 text-white placeholder:text-zinc-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {error}
            </h2>
            <p className="text-zinc-400">
              Please try refreshing the page.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && (
          <>
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-zinc-400">
                  No posts found matching your criteria.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              >
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <article className="group relative bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-blue-500/50 transition-all">
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
                        <div className="p-6">
                          <div className="flex gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-white/5 text-zinc-200 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-zinc-400 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-zinc-500">
                            <Calendar className="w-5 h-5" />
                            <time>{post.date}</time>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}