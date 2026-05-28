import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { QuoteModalTrigger } from "./QuoteModal";
import { SITE } from "@/lib/site";
import { WhatsappIcon } from "./FloatingActions";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <>
      {/* Top Utility Bar (scrolls away, hidden on mobile) */}
      <div className="hidden lg:block bg-slate-950 text-white border-b border-white/5 font-sans">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs lg:px-8">
          {/* Contact Details */}
          <div className="flex items-center gap-4 flex-wrap text-white/80">
            {/* Phone */}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
              <span>{SITE.phone}</span>
            </a>

            <span className="text-white/20">|</span>

            {/* Email */}
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Mail className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
              <span className="break-all">{SITE.email}</span>
            </a>

            {/* Address (Hidden on medium screens (lg) to guarantee perfect responsiveness, visible on xl+) */}
            <span className="hidden xl:inline text-white/20">|</span>
            <div className="hidden xl:flex items-center gap-1.5 font-medium min-w-0">
              <MapPin className="h-3.5 w-3.5 text-accent stroke-[2.5] flex-shrink-0" />
              <span
                className="truncate max-w-[450px]"
                title={SITE.address}
              >
                {SITE.address}
              </span>
            </div>
          </div>

          {/* Quick Pill Actions (24 Hours Service Pill and Get Free Quote Button) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Styled 24 Hours Service Pill (no navigation link as requested) */}
            <div className="px-3.5 py-1 rounded-full border border-white/10 text-white/85 text-[11px] font-semibold tracking-wide flex items-center gap-1.5 bg-white/5">
              <Clock className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
              <span>24 Hours Service</span>
            </div>

            <QuoteModalTrigger>
              <button
                type="button"
                className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-[11px] font-bold shadow-accent-glow hover:scale-105 transition-all cursor-pointer"
              >
                Get Free Quote
              </button>
            </QuoteModalTrigger>
          </div>
        </div>
      </div>

      {/* Main Header Nav Bar (Sticky to top of viewport) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-card-soft border-b border-border py-1 lg:py-1.5"
            : "bg-background border-b border-border/50 py-2 lg:py-2.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                    active
                      ? "text-accent bg-accent/10"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (WhatsApp & Call) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Pill Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:scale-105 transition-transform"
            >
              <WhatsappIcon className="h-4.5 w-4.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Pill Button */}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 bg-[#123E2F] hover:bg-[#0c2e22] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4 text-accent fill-accent" />
              <span>{SITE.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-primary hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-up">
            <nav className="flex flex-col p-4 gap-2">
              {NAV.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-4 py-3 rounded-md text-base font-semibold ${
                      active
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <hr className="my-2 border-border/50" />

              {/* Mobile Operating Hours Info Badge */}
              <div className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm text-foreground/80 font-bold bg-secondary rounded-md">
                <Clock className="h-4 w-4 text-accent stroke-[2.5]" />
                <span>24 Hours Service Available</span>
              </div>

              {/* Mobile WhatsApp Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-md text-base font-bold transition-colors"
              >
                <WhatsappIcon className="h-5 w-5 fill-white" />
                <span>WhatsApp Chat</span>
              </a>

              {/* Mobile Phone Call Button */}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-[#123E2F] hover:bg-[#0c2e22] text-white px-4 py-3 rounded-md text-base font-bold transition-colors"
              >
                <Phone className="h-4 w-4 text-accent fill-accent" />
                <span>Call {SITE.phone}</span>
              </a>

              <QuoteModalTrigger>
                <button
                  type="button"
                  className="w-full bg-gradient-accent text-accent-foreground px-5 py-3 rounded-md text-center font-bold"
                >
                  Get Instant Quote
                </button>
              </QuoteModalTrigger>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
