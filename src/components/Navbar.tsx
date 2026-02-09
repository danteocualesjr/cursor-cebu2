"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Speakers", href: "#speakers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/cube-25d.png"
            alt="Cursor Community Cebu"
            width={32}
            height={32}
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            Cursor Community <span className="text-white/60">Cebu</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
          >
            Cursor.com
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-white/90 md:inline-flex"
        >
          Join the Community
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              Cursor.com
              <ExternalLink className="h-3 w-3" />
            </a>
            <div className="mt-2 border-t border-white/5 pt-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                Join the Community
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
