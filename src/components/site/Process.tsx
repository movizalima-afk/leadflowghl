import { SectionLabel } from "./SectionLabel";

const steps = [
  ["Discovery call", "30-min call to understand your business, leads, and goals. We map your current gaps."],
  ["We build everything", "Our team sets up your entire GHL system in 3–5 days. You provide access, we handle the rest."],
  ["Go live & train", "We hand over a working system + 30-min walkthrough. Leads start flowing on day one."],
  ["We manage & optimize", "Monthly reporting, ongoing tweaks, new automations. You focus on the jobs."],
];

export const Process = () => (
  <section className="container py-20 lg:py-24">
    <div className="max-w-2xl mb-12">
      <SectionLabel>How It Works</SectionLabel>
      <h2 className="font-display text-4xl sm:text-5xl">Live in 5 business days</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-border" />
      {steps.map((s, i) => (
        <div key={s[0]} className="text-center relative">
          <div className="w-14 h-14 rounded-full bg-foreground text-background font-display text-2xl flex items-center justify-center mx-auto mb-4 relative z-10 ring-4 ring-background">
            {i + 1}
          </div>
          <h3 className="font-semibold font-sans text-base mb-2">{s[0]}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">{s[1]}</p>
        </div>
      ))}
    </div>
  </section>
);