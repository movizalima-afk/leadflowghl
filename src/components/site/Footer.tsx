import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background mt-24">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2 space-y-4">
        <Logo light />
        <p className="text-background/60 text-sm max-w-md leading-relaxed">
          Done-for-you GoHighLevel systems for plumbers, HVAC, electricians, roofers,
          and landscapers across the US & UK. More booked jobs, zero missed calls.
        </p>
        <div className="space-y-2 text-sm text-background/70 pt-2">
          <a href="mailto:hello@leadflowsolutions.uk" className="flex items-center gap-2 hover:text-accent-brand transition-smooth">
            <Mail className="h-4 w-4" /> hello@leadflowsolutions.uk
          </a>
          <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-accent-brand transition-smooth">
            <Phone className="h-4 w-4" /> - · UK +44 7727 414666
          </a>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Remote · US & UK</div>
        </div>
      </div>
      <div>
        <h4 className="font-mono-label text-xs tracking-widest text-accent-brand mb-4">EXPLORE</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li><Link to="/services" className="hover:text-accent-brand">Services</Link></li>
          <li><Link to="/case-studies" className="hover:text-accent-brand">Case Studies</Link></li>
          <li><Link to="/about" className="hover:text-accent-brand">About</Link></li>
          <li><Link to="/blog" className="hover:text-accent-brand">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-accent-brand">Book a Call</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono-label text-xs tracking-widest text-accent-brand mb-4">WHO WE SERVE</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li>Plumbers</li>
          <li>HVAC Technicians</li>
          <li>Electricians</li>
          <li>Roofers</li>
          <li>Landscapers</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/50 font-mono-label tracking-wider">
        <span>© {new Date().getFullYear()} LeadFlow Solutions · ALL RIGHTS RESERVED</span>
        <span>BUILT FOR HOME SERVICE PROS · US & UK</span>
      </div>
    </div>
  </footer>
);