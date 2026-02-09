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
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
            Our Mission
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building the future of software development,{" "}
            <span className="text-white/50">together.</span>
          </h2>
          <p className="text-base leading-relaxed text-white/50 sm:text-lg">
            Cursor Community Cebu is a community committed to bringing people
            from Cebu&apos;s local tech ecosystem — founders, developers, designers,
            product managers, and Cursor power users — together to foster
            learning, collaboration, and innovation. Whether you&apos;re writing
            your first line of code or shipping production apps with AI, there&apos;s
            a place for you here.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <pillar.icon className="h-5 w-5 text-white/60" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/40">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supported by Cursor badge */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Officially supported by the Cursor team
          </a>
        </div>
      </div>
    </section>
  );
}
