import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, Check, ShieldCheck, Clock } from "lucide-react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSubmitting(true);

  try {
    const response = await fetch("https://services.leadconnectorhq.com/hooks/WfhR4diynaKyHLE9j3jv/webhook-trigger/a9bdb3e3-7a9c-4195-89ca-59e1b2a8b643", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        business,
        email,
        phone,
        trade,
        country,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    setDone(true);

    toast({
      title: "Request received!",
      description: "We'll contact you shortly.",
    });

    // Reset form
    setName("");
    setBusiness("");
    setEmail("");
    setPhone("");
    setTrade("");
    setCountry("");
    setMessage("");

  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again.",
      variant: "destructive",
    });
  } finally {
    setSubmitting(false);
  }

  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Book a call"
        title={<>Free 30-min call. <em className="not-italic text-accent-brand">No pitch. No pressure.</em></>}
        desc="Tell us about your business. We'll audit your current lead flow live on the call and show you exactly what an automated GoHighLevel system would look like for your trade."
      />

      <div className="container py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-display text-2xl mb-4">What you'll get on the call</h3>
            <ul className="space-y-3">
              {[
                "A live audit of your current lead-flow gaps",
                "Custom roadmap for missed-call recovery & follow-up",
                "Honest pricing — no hidden fees",
                "Zero obligation, zero pressure",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent-brand shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary border border-border rounded-md p-6 space-y-4">
            <a href="mailto:hello@leadflowsolutions.uk" className="flex items-start gap-3 text-sm hover:text-accent-brand transition-smooth">
              <Mail className="h-4 w-4 mt-0.5 text-accent-brand" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">hello@leadflowsolutions.uk</div>
              </div>
            </a>
            <a href="tel:+18005551234" className="flex items-start gap-3 text-sm hover:text-accent-brand transition-smooth">
              <Phone className="h-4 w-4 mt-0.5 text-accent-brand" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">US -</div>
                <div className="text-muted-foreground">UK +44 7727 414666</div>
              </div>
            </a>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="h-4 w-4 mt-0.5 text-accent-brand" />
              <div>
                <div className="font-semibold">Reply Time</div>
                <div className="text-muted-foreground">Within 1 business hour</div>
              </div>
            </div>
          </div>

          <div className="bg-foreground text-background rounded-md p-6">
            <ShieldCheck className="h-6 w-6 text-accent-brand mb-3" />
            <div className="font-display text-xl mb-2">30-Day Guarantee</div>
            <p className="text-sm text-background/70 leading-relaxed">
              No measurable improvement in 30 days? We work for free until you see results.
            </p>
          </div>
        </aside>

        {/* Form */}
        <div className="bg-background border border-border rounded-md p-8 lg:p-10 shadow-elegant">
          {done ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-accent-brand text-background flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8" strokeWidth={3} />
              </div>
              <h2 className="font-display text-3xl mb-3">You're booked in.</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We'll email you within 1 business hour to confirm a time. In the meantime, check
                out a couple of our case studies.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-accent-brand" />
                <h2 className="font-display text-2xl">Request your free call</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" required placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business name *</Label>
                  <Input id="business" required placeholder="Smith Plumbing Co." value={business} onChange={(e) => setBusiness(e.target.value)} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required placeholder="you@business.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" required placeholder="+1 555 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Trade *</Label>
                  <Select value={trade} onValueChange={setTrade} required>
                    <SelectTrigger><SelectValue placeholder="Select trade" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumber">Plumber</SelectItem>
                      <SelectItem value="hvac">HVAC</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="roofer">Roofer</SelectItem>
                      <SelectItem value="landscaper">Landscaper</SelectItem>
                      <SelectItem value="other">Other home service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Country *</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What's your biggest lead-flow problem right now?</Label>
                <Textarea id="message" rows={4} placeholder="e.g. We miss too many calls in the field, or our reviews are stuck at 12…" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
                {submitting ? "Sending…" : "Book My Free Call"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No card. No commitment. We reply within 1 business hour.
              </p>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;