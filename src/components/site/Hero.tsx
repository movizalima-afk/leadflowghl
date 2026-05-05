import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-tradesman.jpg";

export const Hero = () => (
  <section className="relative bg-foreground text-background overflow-hidden">
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent-brand/15 blur-3xl pointer-events-none" />
    <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 py-20 lg:py-28 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-accent-brand text-background text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-6">
          Done-For-You GoHighLevel · US & UK
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
          Stop Losing Jobs<br />
          To <em className="not-italic text-accent-brand">Missed Calls.</em>
        </h1>
        <p className="text-background/70 text-lg max-w-xl mb-8 leading-relaxed">
          We fully set up and manage your GoHighLevel system — so every plumbing, HVAC,
          roofing, electrical, or landscaping lead gets followed up automatically.
          You answer the jobs. We handle the rest.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Book Free 30-Min Call <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
            <Link to="/services"><Phone /> See How It Works</Link>
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-6 text-xs font-mono-label tracking-widest text-background/50 uppercase">
          <span>✓ 30-Day Guarantee</span>
          <span>✓ Live in 5 Days</span>
          <span>✓ Zero Tech Required</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-accent-brand rounded-md" />
        <img
          src={heroImg}
          alt="Home service tradesman using GoHighLevel CRM on phone"
          width={1280}
          height={1280}
          className="relative rounded-md w-full h-auto object-cover"
        />
      </div>
    </div>
    {/* Stat strip */}
    <div className="bg-accent-brand text-background">
      <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-background/20">
        {[
          ["78%", "of callers won't call back if not answered"],
          ["$800+", "avg. value of one lost home service job"],
          ["5 min", "response time = 21× more likely to convert"],
          ["0", "tech knowledge needed from you"],
        ].map(([num, label]) => (
          <div key={label} className="text-center py-6 px-4">
            <div className="font-display text-4xl">{num}</div>
            <div className="text-[10px] font-mono-label tracking-widest uppercase opacity-90 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);