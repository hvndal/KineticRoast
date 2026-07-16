"use client";

import { motion } from "framer-motion";

interface JournalCardProps {
  category: string;
  date: string;
  title: string;
  readTime: string;
}

export function JournalCard({ category, date, title, readTime }: JournalCardProps) {
  return (
    <motion.article
      className="group cursor-pointer border-t border-outline/10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors duration-500 hover:bg-surface-container/50 px-4 -mx-4"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-2 max-w-xl">
        <div className="flex items-center gap-4">
          <span className="font-label-caps text-primary">{category}</span>
          <span className="w-1 h-1 rounded-full bg-outline/30"></span>
          <span className="font-label-caps text-outline">{date}</span>
        </div>
        <h3 className="font-display-xl text-headline-md text-on-surface group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-label-caps text-outline group-hover:text-on-surface transition-colors duration-500">
          {readTime}
        </span>
        <div className="w-8 h-8 rounded-full border border-outline/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
          <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-colors duration-500">
            arrow_forward
          </span>
        </div>
      </div>
    </motion.article>
  );
}
