"use client";

import { getAllPosts } from "@/lib/mdx";
import { useEffect, useState } from "react";
import { BlogPost } from "@/types/blog-types";
import BlogHero from "./_components/blog-hero";
import BlogGrid from "./_components/blog-grid";
import BlogSearch from "./_components/blog-search";
import LoadingCard from "./_components/loading-card";
import { motion, AnimatePresence } from "framer-motion";

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
        const tags = Array.from(
          new Set(allPosts.flatMap(post => post.tags || []))
        ).sort();
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
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => post.tags?.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <>
      <BlogHero />

      <div className="container mx-auto px-4">
        {/* Search and Filter Section */}
        {!loading && !error && (
          <BlogSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            allTags={allTags}
            className=" mt-[-6rem] mb-12"
          />
        )}

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && (
          <>
            <AnimatePresence mode="wait">
              {filteredPosts.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-zinc-400">
                    No posts found matching your criteria.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BlogGrid posts={filteredPosts} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}