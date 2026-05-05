import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import upvc from "@/assets/case-upvc.jpg";
import booking from "@/assets/case-booking.jpg";

const cases = [
  {
    img: upvc,
    tag: "Lead Generation Funnel",
    location: "United Kingdom · Home Improvement",
    title: "uPVC Windows & Doors — Limited-Time Offer Funnel",
    summary:
      "We built a high-conversion single opt-in funnel for a UK-based uPVC windows & doors company. Strong hook, name/phone/email capture, and an instant SMS + email follow-up sequence that pushes leads straight into the sales pipeline.",
    metrics: [
      ["3.2×", "More qualified enquiries vs. their old form"],
      ["< 60s", "First SMS reply after opt-in"],
      ["100%", "Of leads tracked in CRM pipeline"],
    ],
    deliverables: [
      "Single opt-in landing page with limited-time offer",
      "Automated SMS + email nurture inside GHL",
      "CRM pipeline routing to sales team",
      "Branded thank-you & booking page",
    ],
    link: "https://tradeupvc-offer.vibepreview.com",
  },
  {
    img: booking,
    tag: "Service Booking Funnel",
    location: "Service Business · Multi-Step Funnel",
    title: "Multi-Step Appointment Booking Funnel",
    summary:
      "A qualifying funnel built to filter tire-kickers before they hit the calendar. Landing page → short qualifying form → embedded GHL calendar. Confirmation emails and SMS reminders cut no-shows in half.",
    metrics: [
      ["52%", "Reduction in no-shows after SMS reminders"],
      ["4 step", "Qualifying flow before calendar slot"],
      ["GHL", "Native calendar embed + auto-reminders"],
    ],
    deliverables: [
      "Multi-step landing + qualifying flow",
      "GHL calendar embed with team round-robin",
      "Automated booking confirmation (email + SMS)",
      "24h & 1h reminder workflows",
    ],
    link: "https://preview-1777102161674910234.vibepreview.com",
  },
];

const CaseStudies = () => (
  <Layout>
    <PageHeader
      eyebrow="Case Studies"
      title={<>Real funnels. <em className="not-italic text-accent-brand">Real results.</em></>}
      desc="A few of the lead systems we've built and shipped. Every project is a custom build inside GoHighLevel — but the playbook is the same: capture, follow up fast, book the job."
    />
    <div className="container py-20 space-y-20">
      {cases.map((c, i) => (
        <article
          key={c.title}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-accent-brand rounded-md" />
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="relative rounded-md w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <SectionLabel>{c.tag}</SectionLabel>
            <div className="text-xs font-mono-label tracking-widest text-muted-foreground uppercase mb-4">
              {c.location}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-4 leading-tight">{c.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{c.summary}</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {c.metrics.map(([n, l]) => (
                <div key={l} className="bg-secondary border border-border rounded-md p-4 text-center">
                  <div className="font-display text-2xl text-accent-brand">{n}</div>
                  <div className="text-[10px] font-mono-label uppercase tracking-wider text-muted-foreground mt-1 leading-snug">{l}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
              {c.deliverables.map((d) => (
                <li key={d}><span className="text-accent-brand">—</span> {d}</li>
              ))}
            </ul>

            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-accent-brand pb-1 hover:text-accent-brand transition-smooth"
            >
              View live funnel <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      ))}
    </div>
    <CtaBlock
      eyebrow="Want results like these?"
      title="Let's build your funnel next"
      desc="Book a free 30-min call and we'll map exactly how a system like this could work for your trade business."
    />
  </Layout>
);

export default CaseStudies;