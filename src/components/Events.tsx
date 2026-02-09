"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import {
  events,
  eventTypeLabels,
  eventTypeColors,
  type EventStatus,
} from "@/data/events";

const filters: { label: string; value: "all" | EventStatus }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<"all" | EventStatus>("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.status === activeFilter);

  return (
    <section id="events" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
            Events
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Workshops, meetups,
              <br />
              <span className="text-white/50">and everything in between.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Book an Event
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeFilter === filter.value
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
            >
              {/* Type badge and status */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${eventTypeColors[event.type]}`}
                >
                  {eventTypeLabels[event.type]}
                </span>
                {event.status === "upcoming" ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Upcoming
                  </span>
                ) : (
                  <span className="text-xs text-white/30">Completed</span>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-white line-clamp-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-white/40 line-clamp-3">
                {event.description}
              </p>

              {/* Meta */}
              <div className="space-y-1.5 border-t border-white/5 pt-4 text-xs text-white/30">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              {/* Highlights (for past events) */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-4 space-y-1 border-t border-white/5 pt-4">
                  {event.highlights.slice(0, 2).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-white/30"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
