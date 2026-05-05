import { SectionLabel } from "./SectionLabel";
import { AlertTriangle, Star, MessageSquareOff } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Missed calls = lost jobs",
    desc: "Every unanswered call after hours or during a busy job is revenue walking straight to your competitor. No follow-up = no booking.",
  },
  {
    icon: Star,
    title: "No review system",
    desc: "You do great work but have 11 Google reviews. Your competitor has 200+. New customers choose them every time — even if your work is better.",
  },
  {
    icon: MessageSquareOff,
    title: "Zero lead follow-up",
    desc: "Website enquiries, Facebook leads, referrals — they ask for a quote and never hear back. You're leaving 30–40% of your pipeline on the table.",
  },
];

export const Problem = () => (
  <section className="bg-secondary border-y border-border">
    <div className="container py-20 lg:py-24">
      <div className="max-w-2xl mb-12">
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl">
          Your business is leaking <span className="text-accent-brand">revenue every single day</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="bg-background border-l-4 border-accent-brand p-6 rounded-r-md shadow-sm">
            <it.icon className="h-6 w-6 text-accent-brand mb-3" />
            <h3 className="font-semibold text-base mb-2 font-sans">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);