"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

// Placeholder gallery items — replace with real photos
const galleryItems = [
  {
    id: 1,
    alt: "Workshop opening — Jan 17, 2025",
    gradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    id: 2,
    alt: "Hands-on Cursor session",
    gradient: "from-[#1a1a1a] to-[#2d2d2d]",
  },
  {
    id: 3,
    alt: "Speaker presentation",
    gradient: "from-[#0f0f23] to-[#1a1a2e]",
  },
  {
    id: 4,
    alt: "Community networking",
    gradient: "from-[#1a2332] to-[#0f1923]",
  },
  {
    id: 5,
    alt: "Pair programming session",
    gradient: "from-[#1a1a1a] to-[#111]",
  },
  {
    id: 6,
    alt: "Group photo",
    gradient: "from-[#1e1e2e] to-[#14141e]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-white/[0.01] blur-[100px]" />
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
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Moments from
            <br />
            <span className="text-white/50">our community.</span>
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity">
                <Camera className="h-8 w-8 text-white/10" />
                <span className="px-4 text-center text-xs text-white/15">
                  {item.alt}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

              {/* Caption on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                <p className="text-sm text-white/80">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-white/20"
        >
          Photos from the Cursor Community Cebu Launch Workshop — January 17,
          2025
        </motion.p>
      </div>
    </section>
  );
}
