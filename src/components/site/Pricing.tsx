import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$997",
    monthly: "then $700/mo management",
    features: [
      "Full GHL sub-account setup",
      "Missed call text-back",
      "Review request automation",
      "3-stage lead pipeline",
      "Online booking calendar",
      "Monthly reporting call",
    ],
  },
  {
    name: "Growth",
    price: "$1,997",
    monthly: "then $1,200/mo management",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom lead generation funnel",
      "Google / Facebook ad integration",
      "SMS + email nurture sequences",
      "Reputation management dashboard",
      "Bi-weekly strategy calls",
    ],
  },
];

export const Pricing = () => (
  <section className="bg-secondary border-y border-border">
    <div className="container py-20 lg:py-24">
      <div className="max-w-2xl mb-12">
        <SectionLabel>Investment</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl mb-3">Starting at $997</h2>
        <p className="text-muted-foreground">
          Simple, transparent pricing. One-time setup, then a flat monthly management fee.
          No long contracts. Cancel anytime after 90 days.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-md overflow-hidden border-2 ${
              t.featured ? "border-accent-brand shadow-elegant" : "border-border bg-background"
            }`}
          >
            <div className={`p-6 ${t.featured ? "bg-foreground text-background" : "bg-background"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-label text-xs tracking-widest uppercase">
                  {t.name}
                </span>
                {t.featured && (
                  <span className="bg-accent-brand text-background text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="font-display text-5xl">{t.price}<span className="text-lg font-sans font-light opacity-70 ml-1">setup</span></div>
              <div className="text-sm opacity-70 mt-1">{t.monthly}</div>
            </div>
            <div className="p-6 bg-background">
              <ul className="space-y-3 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent-brand shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.featured ? "accent" : "outline"} className="w-full">
                <Link to="/contact">Book Free Call</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);