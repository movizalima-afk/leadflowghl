import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Target, Heart, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Specialists, not generalists", desc: "We only work with home service businesses. We know your seasonality, your margins, your customers." },
  { icon: Heart, title: "Plain English, always", desc: "Zero tech jargon. If your nan can't understand our reports, we rewrite them." },
  { icon: Zap, title: "Speed wins jobs", desc: "Every system we ship is engineered around one thing: replying to a lead before your competitor does." },
];

const About = () => (
  <Layout>
    <PageHeader
      eyebrow="About"
      title={<>We build lead systems for the people who <em className="not-italic text-accent-brand">actually do the work.</em></>}
      desc="LeadFlow Solutions is a small, focused team that does one thing: install and run automated lead-flow systems on GoHighLevel for trade and home service businesses across the US and UK."
    />

    <section className="container py-20 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="font-display text-4xl mb-5 leading-tight">Built by people who got tired of watching tradies lose jobs.</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            We started LeadFlow after watching too many great tradies — the kind who actually
            show up on time and do clean work — get out-marketed by competitors with worse
            quality but better follow-up.
          </p>
          <p>
            The tools to fix this exist. GoHighLevel can do everything from missed-call
            text-back to AI receptionists. The problem? Setting it up properly takes weeks of
            technical work that no plumber, electrician, or roofer should ever have to learn.
          </p>
          <p>
            So we do it for you. We build the system, we run the system, and we send you a
            simple report every month. You go back to running jobs.
          </p>
        </div>
      </div>
      <div className="bg-secondary border border-border rounded-md p-8">
        <div className="font-mono-label text-xs tracking-widest text-accent-brand mb-4">— BY THE NUMBERS</div>
        <div className="grid grid-cols-2 gap-6">
          {[
            ["5 days", "Average build time"],
            ["48 hrs", "Missed call text-back live"],
            ["30 day", "Money-back guarantee"],
            ["US + UK", "Markets served"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-foreground">{n}</div>
              <div className="text-xs font-mono-label tracking-wider uppercase text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-secondary border-y border-border">
      <div className="container py-20">
        <SectionLabel>What We Stand For</SectionLabel>
        <h2 className="font-display text-4xl mb-12 max-w-2xl">Three rules we don't break.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-background border border-border rounded-md p-8">
              <div className="w-12 h-12 rounded-md bg-accent-brand text-background flex items-center justify-center mb-5">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBlock />
  </Layout>
);

export default About;