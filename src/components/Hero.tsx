"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
        {/* Badge */}
        <a
          href="https://cursor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
        >
          <Image
            src="/images/cube-25d.png"
            alt="Cursor"
            width={16}
            height={16}
            className="h-auto w-auto"
          />
          <span>Officially supported by Cursor</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Cursor Community
          <br />
          <span className="text-white/50">Cebu</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
          Bringing together builders, creators, and innovators in Cebu, Philippines.
          Learn to build with AI, share best practices, and connect with fellow Cursor users.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            Join Discord
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-white/30 uppercase">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5 text-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
