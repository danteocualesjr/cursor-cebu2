"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border mb-8 inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <Image
              src="/images/cube-25d.png"
              alt="Cursor"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Officially supported by Cursor
            <ArrowRight className="h-3 w-3" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="glow-text mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Cursor Community
          <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
            Cebu
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
        >
          Bringing together builders, creators, and innovators in Cebu, Philippines.
          Learn to build with AI, share best practices, and connect with fellow Cursor users.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-[1.02]"
          >
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
          >
            Join Discord
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium tracking-widest text-white/25 uppercase">
            Scroll to explore
          </span>
          <motion.div 
            className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
