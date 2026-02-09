import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cursor Community Cebu — The Official Cursor Community in Cebu",
  description:
    "Join Cursor Community Cebu — the official community for Cursor users in Cebu, Philippines. Workshops, hackathons, meetups, and more for developers, founders, designers, and builders.",
  keywords: [
    "Cursor",
    "Cursor IDE",
    "Cebu",
    "Developer Community",
    "AI Coding",
    "Workshops",
    "Hackathons",
    "Meetups",
  ],
  openGraph: {
    title: "Cursor Community Cebu",
    description:
      "The official Cursor community in Cebu, Philippines. Learn, build, and connect with fellow Cursor users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
