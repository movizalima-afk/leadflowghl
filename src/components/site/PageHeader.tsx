export const PageHeader = ({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) => (
  <section className="bg-foreground text-background relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent-brand/15 blur-3xl pointer-events-none" />
    <div className="container relative py-20 lg:py-28">
      <div className="font-mono-label text-xs tracking-widest text-accent-brand mb-4">— {eyebrow}</div>
      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-4xl mb-5">
        {title}
      </h1>
      {desc && <p className="text-background/70 text-lg max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  </section>
);