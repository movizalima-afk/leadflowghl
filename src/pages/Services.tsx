import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { Guarantee } from "@/components/site/Guarantee";
import { CtaBlock } from "@/components/site/CtaBlock";
import { SectionLabel } from "@/components/site/SectionLabel";
import { PhoneCall, MessageSquare, Star, Calendar, Mail, BarChart3, Megaphone, Bot } from "lucide-react";

const services = [
  { icon: PhoneCall, title: "Missed Call Text-Back", desc: "Auto-SMS every missed call within 30 seconds. Recover up to 35% of lost calls." },
  { icon: MessageSquare, title: "2-Way SMS Inbox", desc: "Reply to every lead from one inbox — desktop, mobile, or your team." },
  { icon: Star, title: "Reputation Engine", desc: "Auto-request Google reviews after every job. Reply to reviews with AI assistance." },
  { icon: Calendar, title: "Online Booking Calendar", desc: "Branded booking page synced to your team's availability. SMS reminders included." },
  { icon: Mail, title: "Email + SMS Nurture", desc: "Multi-step sequences for cold leads, quoted-but-not-booked, and past customers." },
  { icon: BarChart3, title: "Lead Pipeline & CRM", desc: "Every lead tracked from first touch to invoice. No more spreadsheets or Post-its." },
  { icon: Megaphone, title: "Ad Campaign Integration", desc: "Plug Google Local Service & Facebook leads straight into your follow-up engine." },
  { icon: Bot, title: "AI Receptionist (Add-On)", desc: "24/7 AI voice agent that books jobs while you sleep. UK & US accents available." },
];

const Services = () => (
  <Layout>
    <PageHeader
      eyebrow="Services"
      title={<>Everything you need to <em className="not-italic text-accent-brand">book more jobs</em>.</>}
      desc="One platform. One agency. Eight battle-tested systems we install and run for plumbers, HVAC, electricians, roofers and landscapers across the US & UK."
    />
    <section className="container py-20">
      <SectionLabel>What's Included</SectionLabel>
      <h2 className="font-display text-4xl sm:text-5xl mb-12 max-w-3xl">Built on GoHighLevel. Tuned for the trades.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-background border border-border rounded-md p-6 hover:border-accent-brand hover:shadow-elegant transition-smooth"
          >
            <div className="w-11 h-11 rounded-md bg-secondary text-foreground flex items-center justify-center mb-4 group-hover:bg-accent-brand group-hover:text-background transition-smooth">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold font-sans text-base mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <Process />
    <Guarantee />
    <Pricing />
    <CtaBlock />
  </Layout>
);

export default Services;