import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="font-display text-2xl tracking-widest">
    <span className={light ? "text-background" : "text-foreground"}>Lead</span>
    <span className="text-accent-brand">Flow</span>
    <span className={`ml-1 text-xs font-mono-label tracking-[0.25em] ${light ? "text-background/60" : "text-muted-foreground"}`}>
      AGENCY
    </span>
  </Link>
);