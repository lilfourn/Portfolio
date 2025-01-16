"use client";

import { BlogPost } from "@/types/blog-types";
import { motion } from "framer-motion";
import BlogCard from "./blog-card";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
    >
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </motion.div>
  );
}
