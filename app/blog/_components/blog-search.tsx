"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  allTags: string[];
  className?: string;
}

export default function BlogSearch({
  searchQuery,
  setSearchQuery,
  selectedTags,
  setSelectedTags,
  allTags,
  className
}: BlogSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={cn("w-full max-w-3xl mx-auto space-y-6", className)}
    >
      {/* Search Input */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 bg-white/5 border-white/10 text-white placeholder:text-zinc-400"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </div>

      {/* Tags */}
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
            className={cn(
              "rounded-full transition-all duration-300",
              selectedTags.includes(tag)
                ? "bg-blue-500/10 text-blue-400 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-500/20 hover:text-blue-400"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800/80 hover:border-blue-500/30 hover:text-blue-300/80"
            )}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Active Filters Display */}
      {selectedTags.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedTags([])}
            className="text-zinc-400 hover:text-blue-400/80"
          >
            Clear all
          </Button>
        </div>
      )}
    </motion.div>
  );
}
