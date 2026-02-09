"use client";

import Image from "next/image";
import { User, ArrowRight, Mic } from "lucide-react";
import { speakers } from "@/data/speakers";

export default function Speakers() {
  const pastSpeakers = speakers.filter((s) => s.status === "past");
  const upcomingSpeakers = speakers.filter((s) => s.status === "upcoming");

  return (
    <section id="speakers" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
            Speakers
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learn from the best
              <br />
              <span className="text-white/50">in the community.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Mic className="h-4 w-4" />
              Apply to Speak
            </a>
          </div>
        </div>

        {/* Past Speakers */}
        {pastSpeakers.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-5 text-xs font-medium tracking-widest text-white/30 uppercase">
              Past Speakers
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pastSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Speakers */}
        {upcomingSpeakers.length > 0 && (
          <div>
            <h3 className="mb-5 text-xs font-medium tracking-widest text-white/30 uppercase">
              Upcoming Speakers
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-white">
            Have something to share?
          </h3>
          <p className="mb-5 text-sm text-white/40">
            We&apos;re always looking for Cursor power users, builders, and innovators
            to share their stories, workflows, and projects with the community.
          </p>
          <a
            href="#get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Apply to Be a Speaker
            <ArrowRight className="h-4 w-4" />
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
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]">
      {/* Avatar */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/5">
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
            <User className="h-5 w-5 text-white/30" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-white">{speaker.name}</h4>
        <p className="text-sm text-white/40">
          {speaker.role}
          {speaker.company && (
            <span className="text-white/25"> at {speaker.company}</span>
          )}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
          &ldquo;{speaker.topic}&rdquo;
        </p>
        <p className="mt-1 text-xs text-white/20">{speaker.event}</p>
      </div>
    </div>
  );
}
