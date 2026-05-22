import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import { WhatsappIcon } from "@/components/FloatingActions";

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
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Get a Quote | Hill Star Capacitor" },
      {
        name: "description",
        content:
          `Contact Hill Star Capacitor for instant quotes on motor, fan and power capacitors. Call ${SITE.phone} or fill our quick quote form. Reply within 24 hours.`,
      },
      { property: "og:title", content: "Contact Hill Star Capacitor" },
      { property: "og:description", content: "Get an instant capacitor quote. Pan-India supply, 24-hour dispatch." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-white text-balance max-w-3xl">
            Let's talk capacitors.
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg">
            Tell us what you need — we'll respond within 24 hours with a detailed quotation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={Phone}
              label="Call Sales"
              value={SITE.phone}
              href={`tel:${SITE.phoneRaw}`}
              cta="Tap to call"
            />
            <ContactCard
              icon={WhatsappIcon}
              label="WhatsApp"
              value="Chat with our team"
              href={waUrl}
              cta="Open WhatsApp"
              accent
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
              cta="Send email"
            />
            <ContactCard
              icon={MapPin}
              label="Factory & Office"
              value={SITE.address}
              cta="New Delhi, India"
            />
            <div className="rounded-2xl bg-gradient-card border border-border p-6">
              <div className="flex items-center gap-2 text-primary font-bold mb-3">
                <Clock className="h-5 w-5 text-accent" />
                Business Hours
              </div>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Mon – Sat</span><span className="font-semibold text-foreground">9:00 — 19:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card-soft">
              <div className="flex items-center gap-2 text-primary font-bold mb-3">
                <Share2 className="h-5 w-5 text-accent" />
                Connect With Us
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Follow our official pages for the latest product releases, capacitor updates, and news.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-card text-foreground hover:bg-[#1877F2]/5 hover:border-[#1877F2] hover:text-[#1877F2] transition-all duration-300 cursor-pointer"
                >
                  <FacebookIcon className="h-5 w-5 mb-1.5 text-[#1877F2]" />
                  <span className="text-[10px] font-bold">Facebook</span>
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-card text-foreground hover:bg-[#0A66C2]/5 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-300 cursor-pointer"
                >
                  <LinkedinIcon className="h-5 w-5 mb-1.5 text-[#0A66C2]" />
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>
                <div className="relative group/yt flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-white/5 opacity-55 cursor-not-allowed">
                  <YoutubeIcon className="h-5 w-5 mb-1.5 text-muted-foreground" />
                  <span className="text-[10px] font-bold text-muted-foreground">YouTube</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 text-[9px] font-bold text-white bg-black/90 border border-white/10 rounded opacity-0 group-hover/yt:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl bg-gradient-card border border-border p-6 md:p-8 shadow-elegant">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
              Request a Quote
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in the details below — our team will get back to you with pricing & lead time.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  cta,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  cta?: string;
  accent?: boolean;
}) {
  const content = (
    <div
      className={`rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
        accent
          ? "bg-success/5 border-success/30 hover:border-success"
          : "bg-card border-border hover:border-accent/40 hover:shadow-card-soft"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
            accent ? "bg-success text-white" : "bg-gradient-accent text-accent-foreground shadow-accent-glow"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-1 font-display font-bold text-primary text-lg break-words">{value}</p>
          {cta && (
            <p className={`mt-1 text-xs font-semibold ${accent ? "text-success" : "text-accent"}`}>
              {cta} →
            </p>
          )}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
