import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const deliverables = [
  ["Full GHL account setup & configuration", "Your branded sub-account built from scratch in 5 days"],
  ["Missed call text-back automation", "Instant SMS replies when you can't pick up — live in 48hrs"],
  ["Automated review request system", "Auto-ask every completed job for a Google review"],
  ["Lead pipeline & booking calendar", "Every lead tracked from enquiry to booked job"],
  ["SMS + email follow-up sequences", "Automated nurture for leads who haven't booked yet"],
  ["Monthly results report & strategy call", "Plain-English report every month — no tech jargon"],
];

export const Solution = () => (
  <section className="container py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    <div>
      <SectionLabel>What We Do</SectionLabel>
      <h2 className="font-display text-4xl sm:text-5xl mb-5 leading-tight">
        We build and run your entire automated lead system
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        We handle everything inside GoHighLevel — the #1 platform for home service
        businesses. Setup, automations, management. You just answer the jobs we send you.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        No learning curve. No tech headaches. No missed follow-ups. Just more booked jobs.
      </p>
    </div>
    <ul className="divide-y divide-border">
      {deliverables.map(([main, sub]) => (
        <li key={main} className="flex gap-4 py-4">
          <div className="w-6 h-6 rounded-full bg-accent-brand flex items-center justify-center shrink-0 mt-0.5">
            <Check className="h-3.5 w-3.5 text-background" strokeWidth={3} />
          </div>
          <div>
            <div className="font-semibold text-sm">{main}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);