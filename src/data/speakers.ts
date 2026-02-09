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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "speaker-2",
    name: "Miguel Santos",
    role: "Cursor Power User",
    company: "TechCebu",
    topic: "Building Full-Stack Apps with Cursor Agents",
    event: "Launch Workshop — Jan 17, 2025",
    status: "past",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: "speaker-3",
    name: "Ana Reyes",
    role: "Non-Technical Builder",
    company: "StartupPH",
    topic: "How I Built My First App Without Writing Code",
    event: "Launch Workshop — Jan 17, 2025",
    status: "past",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
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
