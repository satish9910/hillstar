import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Factory,
  Globe2,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteModalTrigger } from "@/components/QuoteModal";
import { SITE, SUB_BRANDS } from "@/lib/site";
import gallery1 from "@/assets/gallery-production-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Hill Star Capacitor | 25 Years of Capacitor Excellence" },
      {
        name: "description",
        content:
          "Hill Star Capacitor is an ISO 9001:2015 certified manufacturer with 25 years of experience producing motor, fan and power capacitors for India's industrial sector.",
      },
      { property: "og:title", content: "About Hill Star Capacitor" },
      { property: "og:description", content: "25 years of capacitor manufacturing excellence in India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">About Us</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-white text-balance max-w-3xl">
              25 years powering India's industries.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              From a small workshop in Delhi to one of India's most trusted capacitor brands —
              Hill Star has been the silent partner behind countless motors, fans and power systems
              since 1999.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img src={gallery1} alt="Hill Star manufacturing floor" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">Our Story</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary text-balance">
              Three generations of precision engineering.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 1999, Hill Star Capacitor began as a family-run workshop with a simple mission:
              build capacitors that don't fail. Today we operate a 30,000 sq.ft ISO-certified facility
              in Delhi with seven sub-brands and a dealer network spanning every Indian state.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our clients range from small motor rewinding shops to Fortune 500 OEMs. The
              constant: every unit that leaves our factory is 100% tested and backed by our
              lifetime engineering support.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "25+", l: "Years" },
                { v: "500+", l: "Clients" },
                { v: "1M+", l: "Units shipped" },
                { v: "15+", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-secondary p-5 border border-border">
                  <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">What drives us</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              Built on quality, trust and grit.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: "Our Mission", d: "To deliver world-class capacitors that power India's industrial growth, with uncompromising quality." },
              { icon: Eye, t: "Our Vision", d: "To be India's most trusted capacitor brand, known for engineering excellence and customer obsession." },
              { icon: Heart, t: "Our Values", d: "Quality. Integrity. Speed. Long-term relationships over short-term wins." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-7 border border-border">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow mb-5">
                  <v.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-BRANDS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">Our Family of Brands</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              Seven sub-brands. One promise.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SUB_BRANDS.map((b) => (
              <div
                key={b}
                className="rounded-xl bg-gradient-card p-6 border border-border text-center hover:border-accent transition-colors hover:-translate-y-1 hover:shadow-card-soft duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-accent mx-auto mb-3 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent-foreground" />
                </div>
                <p className="font-display font-bold text-primary">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-balance">
              Reach our business team
            </h2>
            <p className="mt-4 text-white/80">All sales, OEM, dealer & technical enquiries.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, label: "Sales", v: SITE.phone, href: `tel:${SITE.phoneRaw}` },
              { icon: Mail, label: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
              { icon: MapPin, label: "Factory", v: SITE.address, href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <c.icon className="h-7 w-7 text-accent mb-3" />
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">{c.label}</p>
                <p className="mt-1 text-white font-semibold break-words">{c.v}</p>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <QuoteModalTrigger>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-7 py-4 rounded-md font-bold shadow-accent-glow hover:scale-105 transition-transform"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </button>
            </QuoteModalTrigger>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
