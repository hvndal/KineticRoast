"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

interface ProductCardProps {
  number: string;
  origin: string;
  notes: string[];
  weight: string;
}

export function ProductCard({ number, origin, notes, weight }: ProductCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-8 p-8 bg-surface-container-low border border-outline/5 hover:border-primary/20 transition-colors duration-700 group relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 -translate-y-1/2 translate-x-1/2"></div>

      <div className="flex justify-between items-start">
        <h3 className="font-display-xl text-headline-md text-primary tracking-wide">
          {number}
        </h3>
        <span className="font-label-caps text-outline">{weight}</span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-12 relative z-10">
        <div className="w-48 h-64 border border-outline/10 bg-surface flex items-center justify-center relative overflow-hidden group-hover:border-outline/30 transition-colors duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container opacity-50"></div>
          <p className="font-label-caps text-primary rotate-[-90deg] tracking-[0.4em] opacity-50 absolute left-2">EMBER</p>
          <div className="w-24 h-32 border border-primary/20 flex items-center justify-center bg-surface-container z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
             <span className="font-display-xl text-4xl text-on-surface">{number.split('.')[1]}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-label-caps text-primary opacity-70">ORIGIN</p>
          <p className="font-body-lg text-on-surface">{origin}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-label-caps text-primary opacity-70">TASTING NOTES</p>
          <p className="font-body-md text-outline">
            {notes.join(" · ")}
          </p>
        </div>

        <Button variant="secondary" className="mt-4 w-full group-hover:border-primary group-hover:text-primary">
          ACQUIRE
        </Button>
      </div>
    </motion.div>
  );
}
