import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { ArrowUpRight } from "lucide-react";
import hvac from "@/assets/trade-hvac.jpg";
import roofer from "@/assets/trade-roofer.jpg";
import landscaper from "@/assets/trade-landscaper.jpg";

const posts = [
  {
    img: hvac,
    tag: "HVAC",
    date: "May 2026",
    read: "6 min read",
    title: "Why 78% of HVAC callers never call back (and how to fix it in 48 hours)",
    excerpt: "The simple missed-call text-back automation that recovers thousands in lost revenue every month — without hiring a single new person.",
  },
  {
    img: roofer,
    tag: "Roofers",
    date: "Apr 2026",
    read: "8 min read",
    title: "The 5-minute rule: Why fast follow-up wins 21× more roofing jobs",
    excerpt: "High-ticket roofing leads ghost you for one reason — your competitor replied first. Here's the GHL workflow that fixes it.",
  },
  {
    img: landscaper,
    tag: "Landscapers",
    date: "Apr 2026",
    read: "5 min read",
    title: "How to turn one-off lawn jobs into recurring monthly revenue",
    excerpt: "The two-message follow-up sequence that converted 34% of one-time customers into seasonal contracts for a US landscaping company.",
  },
];

const Blog = () => (
  <Layout>
    <PageHeader
      eyebrow="Blog"
      title={<>Plays, playbooks & <em className="not-italic text-accent-brand">field notes.</em></>}
      desc="Tactical articles for plumbers, HVAC, electricians, roofers and landscapers who want more booked jobs without hiring a marketing team."
    />
    <div className="container py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((p) => (
        <article key={p.title} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-md mb-5 aspect-[4/3]">
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
            />
            <div className="absolute top-3 left-3 bg-accent-brand text-background text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
              {p.tag}
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono-label tracking-wider text-muted-foreground uppercase mb-3">
            <span>{p.date}</span><span>·</span><span>{p.read}</span>
          </div>
          <h2 className="font-display text-2xl leading-tight mb-3 group-hover:text-accent-brand transition-smooth">{p.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-accent-brand pb-0.5">
            Read article <ArrowUpRight className="h-4 w-4" />
          </span>
        </article>
      ))}
    </div>
    <CtaBlock />
  </Layout>
);

export default Blog;