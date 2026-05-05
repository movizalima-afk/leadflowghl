import { ShieldCheck } from "lucide-react";

export const Guarantee = () => (
  <section className="bg-foreground text-background">
    <div className="container py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="w-24 h-24 rounded-full border-2 border-accent-brand flex items-center justify-center text-accent-brand shrink-0 relative">
        <ShieldCheck className="h-10 w-10" />
      </div>
      <div className="flex-1">
        <div className="font-mono-label text-xs tracking-widest text-accent-brand mb-2">— OUR PROMISE</div>
        <h2 className="font-display text-3xl sm:text-4xl mb-3">
          Results in 30 days or you don't pay a penny more
        </h2>
        <p className="text-background/70 leading-relaxed max-w-3xl">
          We're so confident in our system that we back it with a full guarantee. If you don't see
          a measurable improvement in lead capture and follow-up response within your first 30 days,{" "}
          <strong className="text-background">we'll continue working for free until you do.</strong>{" "}
          No small print. No excuses.
        </p>
      </div>
    </div>
  </section>
);