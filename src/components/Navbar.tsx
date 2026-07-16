"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-margin-mobile md:px-margin-desktop py-6 flex justify-between items-center bg-surface/50 backdrop-blur-xl border-b border-outline/10"
    >
      <Link href="/" className="font-display-xl text-headline-md text-primary tracking-tighter hover:text-secondary transition-colors duration-500">
        EMBER
      </Link>

      <nav className="hidden md:flex gap-12">
        {["Philosophy", "Collection", "Journal"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-label-caps text-on-surface hover:text-primary transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2" />
          </Link>
        ))}
      </nav>

      <button className="flex items-center gap-2 font-label-caps text-on-surface hover:text-primary transition-colors duration-300">
        <Coffee size={16} />
        <span className="hidden md:inline">Cart (0)</span>
      </button>
    </motion.header>
  );
}
