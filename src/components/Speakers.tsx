"use client";

import Image from "next/image";
import { User, ArrowRight, Mic } from "lucide-react";
import { speakers } from "@/data/speakers";

export default function Speakers() {
  const pastSpeakers = speakers.filter((s) => s.status === "past");
  const upcomingSpeakers = speakers.filter((s) => s.status === "upcoming");

  return (
    <section id="speakers" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
            Speakers
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Learn from the best
              <br />
              <span className="text-white/50">in the community.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.05] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <Mic className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Apply to Speak
            </a>
          </div>
        </div>

        {/* Past Speakers */}
        {pastSpeakers.length > 0 && (
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="mb-4 text-[10px] font-medium tracking-widest text-white/30 uppercase sm:mb-5 sm:text-xs">
              Past Speakers
            </h3>
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3 sm:gap-4">
              {pastSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Speakers */}
        {upcomingSpeakers.length > 0 && (
          <div>
            <h3 className="mb-4 text-[10px] font-medium tracking-widest text-white/30 uppercase sm:mb-5 sm:text-xs">
              Upcoming Speakers
            </h3>
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3 sm:gap-4">
              {upcomingSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center sm:mt-12 sm:p-8">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
            Have something to share?
          </h3>
          <p className="mb-4 text-xs text-white/40 sm:mb-5 sm:text-sm">
            We&apos;re always looking for Cursor power users, builders, and innovators
            to share their stories, workflows, and projects with the community.
          </p>
          <a
            href="#get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Apply to Be a Speaker
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
}: {
  speaker: (typeof speakers)[number];
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04] sm:gap-4 sm:p-5">
      {/* Avatar */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/5 sm:h-12 sm:w-12">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-4 w-4 text-white/30 sm:h-5 sm:w-5" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-white sm:text-base">{speaker.name}</h4>
        <p className="text-xs text-white/40 sm:text-sm">
          {speaker.role}
          {speaker.company && (
            <span className="text-white/25"> at {speaker.company}</span>
          )}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-white/50 line-clamp-2 sm:mt-2 sm:text-sm">
          &ldquo;{speaker.topic}&rdquo;
        </p>
        <p className="mt-1 text-[10px] text-white/20 sm:text-xs">{speaker.event}</p>
      </div>
    </div>
  );
}
