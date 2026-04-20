import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-card-soft border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Logo />

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

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="bg-gradient-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-bold shadow-accent-glow hover:scale-105 transition-transform"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-primary hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <nav className="flex flex-col p-4 gap-1">
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
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 flex items-center gap-2 px-4 py-3 rounded-md text-primary font-semibold border border-border"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="mt-2 bg-gradient-accent text-accent-foreground px-5 py-3 rounded-md text-center font-bold"
            >
              Get Instant Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
