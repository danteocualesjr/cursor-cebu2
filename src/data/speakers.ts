export interface Speaker {
  id: string;
  name: string;
  role: string;
  company?: string;
  topic: string;
  event: string;
  status: "past" | "upcoming";
  image?: string;
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dante Cuales",
    role: "Community Lead",
    company: "NativeStack",
    topic: "Welcome & Introduction to Cursor Community Cebu",
    event: "Launch Workshop — Jan 17, 2025",
    status: "past",
  },
  {
    id: "speaker-2",
    name: "Speaker TBA",
    role: "Cursor Power User",
    topic: "Building Full-Stack Apps with Cursor Agents",
    event: "Launch Workshop — Jan 17, 2025",
    status: "past",
  },
  {
    id: "speaker-3",
    name: "Speaker TBA",
    role: "Non-Technical Builder",
    topic: "How I Built My First App Without Writing Code",
    event: "Launch Workshop — Jan 17, 2025",
    status: "past",
  },
  {
    id: "speaker-4",
    name: "To Be Announced",
    role: "Cursor Power User",
    topic: "Advanced Cursor Workflows & Productivity Tips",
    event: "Workshop: Mastering Agents — Apr 2025",
    status: "upcoming",
  },
  {
    id: "speaker-5",
    name: "To Be Announced",
    role: "Developer / Founder",
    topic: "From Idea to MVP in a Weekend with Cursor",
    event: "Community Meetup — Q2 2025",
    status: "upcoming",
  },
];
