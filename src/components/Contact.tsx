"use client";

import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 min-[640px]:grid-cols-2 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left column — info */}
          <div>
            <p className="mb-2 text-xs font-medium tracking-widest text-white/40 uppercase sm:mb-3 sm:text-sm">
              Contact
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:mb-5 sm:text-3xl md:text-4xl">
              Get in touch.
            </h2>
            <p className="mb-6 max-w-md text-xs leading-relaxed text-white/40 sm:mb-8 sm:text-sm md:text-base">
              Have a question, want to collaborate, or just want to say hi?
              Reach out to us and we&apos;ll get back to you.
            </p>

            {/* Direct email */}
            <a
              href="mailto:dante@nativestack.ai"
              className="mb-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white sm:mb-10 sm:gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 sm:h-10 sm:w-10">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-white sm:text-sm">
                  dante@nativestack.ai
                </p>
                <p className="text-[10px] text-white/30 sm:text-xs">Community Lead</p>
              </div>
            </a>

            {/* Social links */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase sm:text-xs">
                Follow Us
              </p>
              <div className="flex gap-2 sm:gap-3">
                <SocialLink
                  href="#"
                  label="Discord"
                  icon={
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  label="X (Twitter)"
                  icon={
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  label="LinkedIn"
                  icon={
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <form
              action="mailto:dante@nativestack.ai"
              method="POST"
              encType="text/plain"
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 md:p-6"
            >
              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-white/60 sm:mb-2 sm:text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors sm:px-4 sm:py-3 sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-white/60 sm:mb-2 sm:text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors sm:px-4 sm:py-3 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-white/60 sm:mb-2 sm:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors sm:px-4 sm:py-3 sm:text-sm"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors hover:bg-white/90 sm:px-6 sm:py-3 sm:text-sm"
              >
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:h-10 sm:w-10"
    >
      {icon}
    </a>
  );
}
