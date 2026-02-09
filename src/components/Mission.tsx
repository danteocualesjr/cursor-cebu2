"use client";

import { motion } from "framer-motion";
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
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">
            Our Mission
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Building the future of software development,{" "}
            <span className="text-white/50">together.</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/50">
            Cursor Community Cebu is a community committed to bringing people
            from Cebu&apos;s local tech ecosystem — founders, developers, designers,
            product managers, and Cursor power users — together to foster
            learning, collaboration, and innovation. Whether you&apos;re writing
            your first line of code or shipping production apps with AI, there&apos;s
            a place for you here.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border group rounded-2xl bg-[#141414] p-8 transition-colors hover:bg-[#1a1a1a]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <pillar.icon className="h-6 w-6 text-white/60" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-white/40">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supported by Cursor badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border inline-flex items-center gap-3 rounded-full bg-white/[0.02] px-6 py-3 text-sm text-white/50 transition-colors hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Officially supported by the Cursor team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
