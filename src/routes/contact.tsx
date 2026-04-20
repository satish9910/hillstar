import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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
          "Contact Hill Star Capacitor for instant quotes on motor, fan and power capacitors. Call +91 98765 43210 or fill our quick quote form. Reply within 24 hours.",
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
              icon={MessageCircle}
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
              cta="Pune, India"
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
