"use client";

import { motion } from "framer-motion";
import { HeroShader } from "@/components/HeroShader";
import { CoffeeRitual } from "@/components/CoffeeRitual";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { JournalCard } from "@/components/JournalCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-on-background w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroShader />

        <div className="relative z-10 flex flex-col items-center gap-8 px-margin-mobile md:px-margin-desktop text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="font-label-caps text-primary tracking-[0.3em]">THE KINETIC ROAST</p>
            <h1 className="font-display-xl text-display-xl md:text-[200px] leading-none text-on-surface tracking-tighter mix-blend-screen drop-shadow-[0_0_30px_rgba(255,191,0,0.2)]">
              EMBER
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="max-w-md font-body-lg text-outline"
          >
            A roasting house dedicated to the intersection of thermal science and the human spirit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8"
          >
            <Button variant="primary">EXPLORE THE ROASTS</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <span className="font-label-caps text-outline text-[10px]">SCROLL TO IGNITE</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-5 md:col-start-2 flex flex-col justify-center gap-8"
          >
            <h2 className="font-label-caps text-primary tracking-widest">THE PHILOSOPHY</h2>
            <p className="font-display-xl text-headline-lg text-on-surface leading-tight">
              WE BELIEVE HEAT IS NOT JUST A VARIABLE, IT IS AN <span className="text-primary italic">INSTRUMENT</span>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="md:col-span-4 md:col-start-8 flex flex-col justify-center gap-6 mt-8 md:mt-0"
          >
            <p className="font-body-lg text-outline leading-relaxed">
              Every bean contains a universe of kinetic potential. Our roasting process is a deliberate act of thermal unlocking—applying precise energetic curves to coax out delicate floral esters and deep, resonant Maillard notes.
            </p>
            <p className="font-body-lg text-outline leading-relaxed">
              We do not mass produce. We do not rush. We orchestrate heat.
            </p>
            <div className="mt-4">
              <Button variant="secondary" className="px-0 border-none hover:bg-transparent">
                <span className="border-b border-primary pb-1">READ THE MANIFESTO</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-stack-xl bg-surface-container-lowest w-full relative z-10 border-t border-outline/5">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-md gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-4 max-w-2xl"
            >
              <h2 className="font-label-caps text-primary tracking-widest">CURRENT HARVEST</h2>
              <h3 className="font-display-xl text-headline-lg text-on-surface">THE COLLECTION</h3>
              <p className="font-body-md text-outline">
                Micro-lot selections, roasted to order. Quantities are strictly limited to ensure peak kinetic vitality upon delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Button variant="secondary">VIEW ALL ROASTS</Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              number="NO. 01"
              origin="SINGLE ORIGIN COLOMBIA"
              notes={["DARK CHOCOLATE", "CHERRY", "HONEY"]}
              weight="250G"
            />
            <ProductCard
              number="NO. 02"
              origin="ETHIOPIA YIRGACHEFFE"
              notes={["JASMINE", "BERGAMOT", "PEACH"]}
              weight="250G"
            />
            <ProductCard
              number="NO. 03"
              origin="GUATEMALA ANTIGUA"
              notes={["CARAMEL", "HAZELNUT", "COCOA"]}
              weight="250G"
            />
          </div>
        </div>
      </section>

      {/* Ritual Section */}
      <section id="ritual" className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="md:col-span-6 h-[600px] bg-gradient-to-br from-surface-container-low to-surface border border-outline/5 relative rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(184,115,51,0.5) 0%, transparent 70%)' }}></div>
            <CoffeeRitual />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 md:col-start-8 flex flex-col gap-8"
          >
            <h2 className="font-label-caps text-primary tracking-widest">THE RITUAL</h2>
            <h3 className="font-display-xl text-headline-lg text-on-surface leading-none">
              PRECISION IN <br/><span className="text-outline">EVERY POUR</span>
            </h3>
            <p className="font-body-lg text-outline leading-relaxed">
              Excellent beans demand excellent extraction. The ritual of the pour-over is a meditation on variables: grind size, water temperature, flow rate, and time.
            </p>

            <div className="flex flex-col gap-4 mt-4 border-l border-primary/30 pl-6 py-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface">WATER TEMP</span>
                <span className="font-body-md text-primary font-mono">93°C / 200°F</span>
              </div>
              <div className="w-full h-[1px] bg-outline/10"></div>
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface">COFFEE:WATER RATIO</span>
                <span className="font-body-md text-primary font-mono">1:15</span>
              </div>
              <div className="w-full h-[1px] bg-outline/10"></div>
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface">BLOOM TIME</span>
                <span className="font-body-md text-primary font-mono">45 SECONDS</span>
              </div>
            </div>

            <div className="mt-8">
               <Button variant="primary">BREWING GUIDES</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-stack-xl bg-surface-container-lowest border-t border-outline/5 w-full relative z-10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
              className="flex flex-col gap-4 max-w-2xl"
            >
              <h2 className="font-label-caps text-primary tracking-widest">EDITORIAL</h2>
              <h3 className="font-display-xl text-headline-lg text-on-surface">THE JOURNAL</h3>
            </motion.div>
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
            >
              <Button variant="secondary">READ ALL NOTES</Button>
            </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 0.4 }}
             className="flex flex-col"
          >
            <JournalCard
              category="SCIENCE"
              date="OCT 12, 2024"
              title="WHY ALTITUDE CHANGES EVERYTHING"
              readTime="5 MIN READ"
            />
            <JournalCard
              category="RITUAL"
              date="SEP 28, 2024"
              title="DESIGNING THE PERFECT MORNING RITUAL"
              readTime="4 MIN READ"
            />
            <JournalCard
              category="SOURCING"
              date="SEP 15, 2024"
              title="SUSTAINABILITY BEYOND THE BEAN"
              readTime="8 MIN READ"
            />
             <JournalCard
              category="ROASTING"
              date="AUG 30, 2024"
              title="NOTES FROM THE ROASTERY: THE MAILLARD REACTION"
              readTime="6 MIN READ"
            />
          </motion.div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-stack-xl relative w-full flex items-center justify-center overflow-hidden z-10 border-y border-outline/5 min-h-[70vh]">
        <div className="absolute inset-0 bg-surface-container-low z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,185,36,0.1)_0%,transparent_60%)] z-0"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl px-margin-mobile gap-8"
        >
          <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-4">
             <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
          </div>
          <h2 className="font-display-xl text-headline-lg text-on-surface tracking-wide">THE SUBSCRIPTION SERVICE</h2>
          <p className="font-body-lg text-outline">
            Curated roasts delivered at the peak of their kinetic energy. Join the roster and receive exclusive laboratory notes with every harvest.
          </p>
          <div className="mt-8">
            <Button variant="primary" className="px-12 py-5 text-[14px]">ENROLL NOW</Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
