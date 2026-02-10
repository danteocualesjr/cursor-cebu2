"use client";

import { BookOpen, Code2, Users } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Hands-on workshops and talks that help you master Cursor — from beginner fundamentals to advanced agentic workflows.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Hackathons, project showcases, and co-working sessions where you ship real products with AI-powered development.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "A vibrant network of developers, founders, designers, and creators collaborating to push the boundaries of what's possible.",
  },
];

export default function Mission() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
            Our Mission
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:mb-6 sm:text-3xl md:text-4xl">
            Building the future of software development,{" "}
            <span className="text-white/50">together.</span>
          </h2>
          <p className="text-sm leading-relaxed text-white/50 sm:text-base md:text-lg">
            Cursor Community Cebu is a community committed to bringing people
            from Cebu&apos;s local tech ecosystem — founders, developers, designers,
            product managers, and Cursor power users — together to foster
            learning, collaboration, and innovation. Whether you&apos;re writing
            your first line of code or shipping production apps with AI, there&apos;s
            a place for you here.
          </p>
        </div>

        {/* Pillars - 3 columns on all screens */}
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 sm:gap-5 md:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04] sm:p-5 md:p-6"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 sm:mb-4 sm:h-10 sm:w-10">
                <pillar.icon className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" />
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supported by Cursor badge */}
        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/50 transition-colors hover:border-white/20 hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
            Officially supported by the Cursor team
          </a>
        </div>
      </div>
    </section>
  );
}
