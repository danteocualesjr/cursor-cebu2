"use client";

import { motion } from "framer-motion";
import { Ticket, Mic, Handshake, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Ticket,
    title: "Attend Events",
    description:
      "Join our workshops, hackathons, meetups, and Cafe Cursor sessions. Open to everyone — whether you're a seasoned developer or just getting started.",
    cta: "View Upcoming Events",
    href: "#events",
  },
  {
    icon: Mic,
    title: "Become a Speaker",
    description:
      "Share your Cursor expertise, projects, and workflows with the community. We welcome talks of all formats — lightning talks, demos, deep dives, and panels.",
    cta: "Apply to Speak",
    href: "mailto:dante@nativestack.ai?subject=Speaker%20Application%20-%20Cursor%20Community%20Cebu",
  },
  {
    icon: Handshake,
    title: "Become a Sponsor",
    description:
      "Support Cebu's growing tech community. Sponsorship helps us host better events, provide resources, and make our programs accessible to everyone.",
    cta: "Sponsorship Info",
    href: "mailto:dante@nativestack.ai?subject=Sponsorship%20Inquiry%20-%20Cursor%20Community%20Cebu",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">
            Get Involved
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            There&apos;s a place for you here.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/40">
            Whether you want to learn, teach, or support — here&apos;s how you
            can be part of Cursor Community Cebu.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border group flex flex-col rounded-2xl bg-[#141414] p-8 transition-colors hover:bg-[#1a1a1a]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-colors group-hover:bg-white/[0.08]">
                <card.icon className="h-7 w-7 text-white/60" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mb-6 flex-1 leading-relaxed text-white/40">
                {card.description}
              </p>

              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {card.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
