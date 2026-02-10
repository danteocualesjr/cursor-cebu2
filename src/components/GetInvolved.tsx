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
    <section id="get-involved" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
            Get Involved
          </p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:mb-3 sm:text-3xl md:text-4xl">
            There&apos;s a place for you here.
          </h2>
          <p className="mx-auto max-w-lg text-xs text-white/40 sm:text-sm md:text-base">
            Whether you want to learn, teach, or support — here&apos;s how you
            can be part of Cursor Community Cebu.
          </p>
        </div>

        {/* Cards - 3 columns */}
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 sm:gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04] sm:p-5 md:p-6"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 sm:mb-4 sm:h-10 sm:w-10 md:h-11 md:w-11">
                <card.icon className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" />
              </div>

              <h3 className="mb-1.5 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                {card.title}
              </h3>

              <p className="mb-4 flex-1 text-xs leading-relaxed text-white/40 sm:mb-5 sm:text-sm">
                {card.description}
              </p>

              <a
                href={card.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white sm:gap-2 sm:text-sm"
              >
                {card.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
