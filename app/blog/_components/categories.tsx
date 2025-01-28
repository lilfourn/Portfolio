"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CategoriesProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  allCategories: string[];
  className?: string;
}

export default function Categories({
  selectedCategories,
  setSelectedCategories,
  allCategories,
  className
}: CategoriesProps) {
  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {allCategories.map((category) => (
        <Button
          key={category}
          variant={selectedCategories.includes(category) ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className={cn(
            "rounded-full transition-all duration-300",
            selectedCategories.includes(category)
              ? "bg-blue-500/10 text-blue-400 border-blue-500/50 hover:bg-blue-500/20"
              : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800/80"
          )}
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
}