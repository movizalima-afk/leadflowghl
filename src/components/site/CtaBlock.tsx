import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaBlock = ({
  eyebrow = "Ready to stop losing jobs?",
  title = "Book your free 30-minute discovery call",
  desc = "We'll audit your current lead flow, show you exactly where revenue is leaking, and map out what an automated system would look like for your business. No pitch. No pressure.",
}: {
  eyebrow?: string;
  title?: string;
  desc?: string;
}) => (
  <section className="container py-20 lg:py-24">
    <div className="bg-foreground text-background rounded-md p-10 lg:p-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-brand/15 blur-3xl pointer-events-none" />
      <div className="relative">
        <div className="font-mono-label text-xs tracking-widest text-accent-brand mb-3">— {eyebrow}</div>
        <h2 className="font-display text-4xl sm:text-5xl mb-4 leading-tight">{title}</h2>
        <p className="text-background/70 leading-relaxed max-w-xl">{desc}</p>
      </div>
      <div className="relative bg-background/5 border border-background/10 rounded-md p-6 backdrop-blur">
        <div className="font-mono-label text-xs tracking-widest text-background/60 mb-3">NEXT AVAILABLE SLOT</div>
        <div className="font-display text-3xl text-accent-brand mb-1">This Week</div>
        <div className="text-sm text-background/70 mb-6">Free · 30 minutes · Zoom or phone</div>
        <Button asChild variant="hero" size="lg" className="w-full">
          <Link to="/contact">Book Now <ArrowRight /></Link>
        </Button>
        <div className="text-center text-[10px] font-mono-label tracking-widest text-background/50 mt-4 uppercase">
          ✓ No card · No commitment
        </div>
      </div>
    </div>
  </section>
);