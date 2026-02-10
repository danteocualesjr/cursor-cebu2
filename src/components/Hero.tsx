"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-[200px] w-[200px] rounded-full bg-white/[0.015] blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center sm:max-w-4xl">
        {/* Badge */}
        <a
          href="https://cursor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-white/20 hover:text-white sm:mb-8 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
        >
          <Image
            src="/images/cube-25d.png"
            alt="Cursor"
            width={16}
            height={16}
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
          />
          <span>Officially supported by Cursor</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </a>

        {/* Headline */}
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Cursor Community
          <br />
          <span className="text-white/50">Cebu</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50 sm:mb-10 sm:max-w-xl sm:text-base md:text-lg">
          Bringing together builders, creators, and innovators in Cebu, Philippines.
          Learn to build with AI, share best practices, and connect with fellow Cursor users.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors hover:bg-white/90 sm:px-6 sm:py-3 sm:text-sm"
          >
            Explore Events
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.05] sm:px-6 sm:py-3 sm:text-sm"
          >
            Join Discord
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-1.5 sm:mt-16 sm:gap-2">
          <span className="text-[10px] font-medium tracking-widest text-white/30 uppercase sm:text-xs">
            Scroll to explore
          </span>
          <ChevronDown className="h-4 w-4 text-white/30 animate-bounce sm:h-5 sm:w-5" />
        </div>
      </div>
    </section>
  );
}
