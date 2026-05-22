import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { QuoteModalTrigger } from "./QuoteModal";
import { SITE } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            ISO 9001:2015 certified manufacturer of motor, fan and power capacitors —
            trusted by 500+ businesses across India.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="pt-2 border-t border-white/5 mt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Registration Details</p>
              <p className="text-[11px] font-semibold text-white/60">GSTIN: {SITE.gstin}</p>
              <p className="text-[11px] font-semibold text-white/60">MSME: {SITE.msme}</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Follow Us</h4>
          <div className="flex items-center gap-3 mb-6">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300 cursor-pointer"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on LinkedIn"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <div className="relative group">
              <button
                type="button"
                disabled
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-white/30 cursor-not-allowed transition-all duration-300"
                aria-label="YouTube channel coming soon"
              >
                <YoutubeIcon className="h-5 w-5" />
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 text-[9px] font-bold text-white bg-black/90 border border-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          </div>
          <QuoteModalTrigger>
            <button
              type="button"
              className="inline-block bg-gradient-accent text-accent-foreground px-5 py-3 rounded-md font-bold text-sm shadow-accent-glow hover:scale-105 transition-transform"
            >
              Request a Quote
            </button>
          </QuoteModalTrigger>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
