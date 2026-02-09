"use client";

import { motion } from "framer-motion";
import { User, ArrowRight, Mic } from "lucide-react";
import { speakers } from "@/data/speakers";

export default function Speakers() {
  const pastSpeakers = speakers.filter((s) => s.status === "past");
  const upcomingSpeakers = speakers.filter((s) => s.status === "upcoming");

  return (
    <section id="speakers" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">
            Speakers
          </p>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Learn from the best
              <br />
              <span className="text-white/50">in the community.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
            >
              <Mic className="h-4 w-4" />
              Apply to Speak
            </a>
          </div>
        </motion.div>

        {/* Past Speakers */}
        {pastSpeakers.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-6 text-sm font-medium tracking-widest text-white/30 uppercase">
              Past Speakers
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pastSpeakers.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Speakers */}
        {upcomingSpeakers.length > 0 && (
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-widest text-white/30 uppercase">
              Upcoming Speakers
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingSpeakers.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-white/5 bg-[#141414] p-8 text-center sm:p-12"
        >
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Have something to share?
          </h3>
          <p className="mb-6 text-white/40">
            We&apos;re always looking for Cursor power users, builders, and innovators
            to share their stories, workflows, and projects with the community.
          </p>
          <a
            href="#get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
          >
            Apply to Be a Speaker
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="gradient-border group flex items-start gap-4 rounded-2xl bg-[#141414] p-6 transition-colors hover:bg-[#1a1a1a]"
    >
      {/* Avatar placeholder */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
        <User className="h-5 w-5 text-white/30" />
      </div>

      <div className="min-w-0">
        <h4 className="font-semibold text-white">{speaker.name}</h4>
        <p className="text-sm text-white/40">
          {speaker.role}
          {speaker.company && (
            <span className="text-white/25"> at {speaker.company}</span>
          )}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          &ldquo;{speaker.topic}&rdquo;
        </p>
        <p className="mt-1.5 text-xs text-white/20">{speaker.event}</p>
      </div>
    </motion.div>
  );
}
