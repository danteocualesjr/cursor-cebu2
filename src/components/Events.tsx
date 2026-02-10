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
    <section id="events" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
            Events
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Workshops, meetups,
              <br />
              <span className="text-white/50">and everything in between.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Book an Event
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                activeFilter === filter.value
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events grid - 3 columns */}
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3 sm:gap-5">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04] sm:p-5"
            >
              {/* Type badge and status */}
              <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs ${eventTypeColors[event.type]}`}
                >
                  {eventTypeLabels[event.type]}
                </span>
                {event.status === "upcoming" ? (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 sm:gap-1.5 sm:text-xs">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400 sm:h-1.5 sm:w-1.5" />
                    Upcoming
                  </span>
                ) : (
                  <span className="text-[10px] text-white/30 sm:text-xs">Completed</span>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-1.5 text-sm font-semibold text-white line-clamp-2 sm:mb-2 sm:text-base">
                {event.title}
              </h3>

              {/* Description */}
              <p className="mb-3 flex-1 text-xs leading-relaxed text-white/40 line-clamp-3 sm:mb-4 sm:text-sm">
                {event.description}
              </p>

              {/* Meta */}
              <div className="space-y-1 border-t border-white/5 pt-3 text-[10px] text-white/30 sm:space-y-1.5 sm:pt-4 sm:text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              {/* Highlights (for past events) */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-3 space-y-1 border-t border-white/5 pt-3 sm:mt-4 sm:pt-4">
                  {event.highlights.slice(0, 2).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-1.5 text-[10px] text-white/30 sm:gap-2 sm:text-xs"
                    >
                      <span className="mt-1 h-0.5 w-0.5 shrink-0 rounded-full bg-white/30 sm:mt-1.5 sm:h-1 sm:w-1" />
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
