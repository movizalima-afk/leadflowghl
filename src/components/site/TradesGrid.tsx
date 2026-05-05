import { Wrench, Wind, Zap, Home, Trees } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const trades = [
  { icon: Wrench, name: "Plumbers", desc: "Emergency calls captured 24/7. Never lose a burst-pipe job again." },
  { icon: Wind, name: "HVAC", desc: "Seasonal demand spikes handled automatically with smart routing." },
  { icon: Zap, name: "Electricians", desc: "Quote requests followed up in under 5 minutes — every time." },
  { icon: Home, name: "Roofers", desc: "High-ticket leads nurtured from first click to signed contract." },
  { icon: Trees, name: "Landscapers", desc: "Recurring maintenance bookings on autopilot, all season long." },
];

export const TradesGrid = () => (
  <section className="container py-20 lg:py-28">
    <div className="max-w-2xl mb-12">
      <SectionLabel>Who We Build For</SectionLabel>
      <h2 className="font-display text-4xl sm:text-5xl mb-4">Built For Home Service Pros</h2>
      <p className="text-muted-foreground text-base leading-relaxed">
        We specialize in one thing: turning the chaos of running a trade business into
        a calm, automated system that books more jobs without you lifting a finger.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {trades.map((t) => (
        <div
          key={t.name}
          className="group bg-secondary border border-border rounded-md p-6 hover:border-accent-brand hover:-translate-y-1 transition-smooth cursor-default"
        >
          <div className="w-11 h-11 rounded-md bg-foreground text-background flex items-center justify-center mb-4 group-hover:bg-accent-brand transition-smooth">
            <t.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-2xl mb-2">{t.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
        </div>
      ))}
    </div>
  </section>
);