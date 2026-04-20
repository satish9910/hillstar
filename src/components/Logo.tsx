import { Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-accent shadow-accent-glow group-hover:scale-105 transition-transform">
        <Zap className="h-5 w-5 text-accent-foreground" strokeWidth={2.5} fill="currentColor" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-lg tracking-tight ${
            light ? "text-white" : "text-primary"
          }`}
        >
          HILL STAR
        </span>
        <span
          className={`text-[10px] font-semibold tracking-[0.25em] ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          CAPACITOR
        </span>
      </div>
    </Link>
  );
}
