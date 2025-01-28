"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Tags, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import "./blog-search.css";

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
  const [showAllTags, setShowAllTags] = useState(false);
  const [open, setOpen] = useState(false);
  const maxVisibleTags = 15;
  const shouldShowMore = allTags.length > maxVisibleTags;
  const visibleTags = showAllTags ? allTags : allTags.slice(0, maxVisibleTags);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagButtonClick = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={cn("w-full max-w-4xl mx-auto space-y-4", className)}
    >
      <div className="flex gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-12 bg-white/5 border-white/10 text-white placeholder:text-zinc-400"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <X className="w-4 h-4 text-zinc-400 hover:text-zinc-300" />
            </button>
          )}
        </div>

        {/* Tag Filter Popover */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              onClick={handleTagButtonClick}
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors",
                "h-10 px-4 py-2",
                "bg-white/5 hover:bg-white/10 border border-white/10",
                "text-white hover:bg-white/10",
                "cursor-pointer",
                selectedTags.length > 0 && "text-blue-400 border-blue-500/50",
                "relative z-10"
              )}
            >
              <Tags className="w-4 h-4 mr-2" />
              <span className="mr-1">Tags</span>
              {selectedTags.length > 0 && (
                <span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full text-xs mr-1">
                  {selectedTags.length}
                </span>
              )}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </PopoverTrigger>
          <PopoverContent 
            className="p-0 w-80 z-50" 
            align="end"
            sideOffset={8}
          >
            <div className="p-4 border-b border-zinc-800">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-zinc-300">Filter by tags</h3>
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedTags([]);
                      setOpen(false);
                    }}
                    className="text-zinc-400 hover:text-blue-400/80 text-xs h-7"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-[200px] overflow-y-auto hide-scrollbar">
                {visibleTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTagClick(tag)}
                    className={cn(
                      "rounded-full h-7 text-xs transition-all duration-300",
                      selectedTags.includes(tag)
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/50 hover:bg-blue-500/20"
                        : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800/80 hover:border-blue-500/30 hover:text-blue-300/80"
                    )}
                  >
                    {tag}
                  </Button>
                ))}
                {shouldShowMore && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="text-zinc-400 hover:text-blue-400/80 h-7 text-xs"
                  >
                    {showAllTags ? "Show Less" : `+${allTags.length - maxVisibleTags} More`}
                  </Button>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters Display */}
      {selectedTags.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900/50 p-2 rounded-lg"
        >
          <span className="text-xs">Filters:</span>
          <div className="flex gap-1.5 flex-wrap">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
                <button
                  onClick={() => handleTagClick(tag)}
                  className="ml-1 hover:text-blue-300"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
