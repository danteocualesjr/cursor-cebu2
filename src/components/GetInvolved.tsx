"use client";

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
    <section id="get-involved" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
            Get Involved
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            There&apos;s a place for you here.
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/40">
            Whether you want to learn, teach, or support — here&apos;s how you
            can be part of Cursor Community Cebu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/5">
                <card.icon className="h-5 w-5 text-white/60" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {card.title}
              </h3>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-white/40">
                {card.description}
              </p>

              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {card.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
