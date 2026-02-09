"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="events" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.01] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">
            Events
          </p>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Workshops, meetups,
              <br />
              <span className="text-white/50">and everything in between.</span>
            </h2>
            <a
              href="#get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              Book an Event
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                activeFilter === filter.value
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/5 bg-transparent text-white/40 hover:border-white/10 hover:text-white/60"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="gradient-border group flex flex-col rounded-2xl bg-[#141414] p-6 transition-colors hover:bg-[#1a1a1a]"
              >
                {/* Type badge and status */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      eventTypeColors[event.type]
                    }`}
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
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/40">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                </div>

                {/* Highlights (for past events) */}
                {event.highlights && (
                  <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4">
                    {event.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 text-xs text-white/30"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/20" />
                        {h}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
