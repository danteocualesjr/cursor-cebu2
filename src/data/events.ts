export type EventType = "workshop" | "meetup" | "hackathon" | "cafe-cursor";
export type EventStatus = "upcoming" | "past";

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  status: EventStatus;
  description: string;
  highlights?: string[];
}

export const eventTypeLabels: Record<EventType, string> = {
  workshop: "Workshop",
  meetup: "Meetup",
  hackathon: "Hackathon",
  "cafe-cursor": "Cafe Cursor",
};

export const eventTypeColors: Record<EventType, string> = {
  workshop: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  meetup: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  hackathon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "cafe-cursor": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export const events: CommunityEvent[] = [
  {
    id: "inaugural-workshop",
    title: "Cursor Community Cebu Launch Workshop",
    date: "January 17, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Cebu City",
    type: "workshop",
    status: "past",
    description:
      "Our inaugural event! A hands-on workshop covering how to use Cursor, building with Cursor for non-technical users, and power user best practices, projects, and workflows.",
    highlights: [
      "Hands-on Cursor workshop for beginners",
      "Building with Cursor for non-technical users",
      "Power user talks on best practices & workflows",
    ],
  },
  {
    id: "cafe-cursor-feb",
    title: "Cafe Cursor: Casual Co-working & Cursor Tips",
    date: "March 2025",
    time: "2:00 PM - 5:00 PM",
    location: "TBA — Cebu City",
    type: "cafe-cursor",
    status: "upcoming",
    description:
      "A relaxed afternoon of co-working, sharing Cursor tips, and networking with fellow builders in the community. Bring your laptop and your curiosity.",
  },
  {
    id: "workshop-agents",
    title: "Workshop: Mastering Cursor Agents & Workflows",
    date: "April 2025",
    time: "1:00 PM - 5:00 PM",
    location: "TBA — Cebu City",
    type: "workshop",
    status: "upcoming",
    description:
      "Deep dive into Cursor's agentic features — learn how to leverage agents, background tasks, and multi-file editing to supercharge your development workflow.",
  },
  {
    id: "hackathon-q2",
    title: "Build with Cursor Hackathon",
    date: "Q2 2025",
    time: "Full Day",
    location: "TBA — Cebu City",
    type: "hackathon",
    status: "upcoming",
    description:
      "A full-day hackathon where teams build real projects using Cursor. Open to all skill levels — from first-time coders to seasoned engineers. Prizes and mentorship included.",
  },
  {
    id: "meetup-q2",
    title: "Community Meetup: Show & Tell",
    date: "Q2 2025",
    time: "6:00 PM - 9:00 PM",
    location: "TBA — Cebu City",
    type: "meetup",
    status: "upcoming",
    description:
      "An evening of lightning talks and demos. Community members share what they've built with Cursor — apps, automations, workflows, and creative projects.",
  },
];
