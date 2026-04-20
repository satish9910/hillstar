import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Truck,
  MapPin,
  Star,
  Phone,
  ArrowRight,
  Zap,
  Factory,
  Users,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, SUB_BRANDS } from "@/lib/site";
import heroImg from "@/assets/hero-factory.jpg";
import productMotor from "@/assets/product-motor.jpg";
import productFan from "@/assets/product-fan.jpg";
import productPower from "@/assets/product-power.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hill Star Capacitor — Leading Capacitor Manufacturer in India" },
      {
        name: "description",
        content:
          "Premium motor, fan & power capacitors made in India. ISO 9001:2015 certified, 25+ years, trusted by 500+ businesses. Get an instant quote.",
      },
      { property: "og:title", content: "Hill Star Capacitor — Capacitor Manufacturer India" },
      { property: "og:description", content: "ISO certified motor, fan & power capacitors. Pan-India supply, 24-hr dispatch." },
    ],
  }),
  component: HomePage,
});

const trustBadges = [
  { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
  { icon: Award, label: "Premium Quality" },
  { icon: Truck, label: "24-hr Dispatch" },
  { icon: MapPin, label: "Pan-India Supply" },
];

const products = [
  {
    name: "Motor Capacitors",
    desc: "Run & start capacitors for single-phase motors. CBB60 / CBB61 / CD60 series.",
    img: productMotor,
    range: "1µF – 100µF",
  },
  {
    name: "Fan Capacitors",
    desc: "High-precision capacitors for ceiling, exhaust and pedestal fans.",
    img: productFan,
    range: "1.5µF – 5µF",
  },
  {
    name: "Power Capacitors",
    desc: "Heavy-duty capacitors for industrial power-factor correction.",
    img: productPower,
    range: "5 – 100 KVAR",
  },
];

const stats = [
  { icon: Award, value: `${SITE.yearsInBusiness}+`, label: "Years of Excellence" },
  { icon: Users, value: `${SITE.clientsServed}+`, label: "Happy Clients" },
  { icon: Factory, value: SITE.productsShipped, label: "Units Shipped" },
  { icon: Globe2, value: `${SITE.countries}+`, label: "Countries Served" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "ISO Certified Quality",
    desc: "Every unit passes 100% in-line testing & ISO 9001:2015 standards.",
  },
  {
    icon: Factory,
    title: "In-house Manufacturing",
    desc: "Fully integrated factory — winding, assembly, testing, packaging.",
  },
  {
    icon: Truck,
    title: "Fast Pan-India Delivery",
    desc: "24-hour dispatch from our Pune facility. Bulk orders shipped nationwide.",
  },
  {
    icon: Zap,
    title: "Custom Engineering",
    desc: "Tailored capacitor solutions for OEMs and large-volume buyers.",
  },
  {
    icon: Award,
    title: "25 Years of Trust",
    desc: "Three generations of expertise serving India's industrial backbone.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Personal account managers and rapid technical assistance.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Hill Star Capacitor manufacturing facility"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-6">
              <Star className="h-4 w-4 text-accent" fill="currentColor" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                ISO 9001:2015 Certified Manufacturer
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance">
              Leading Capacitor<br />
              Manufacturer{" "}
              <span className="text-accent">in India</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
              25 years of precision engineering. From motor and fan capacitors to industrial
              power-factor units — Hill Star is the first-choice supplier for over 500 businesses
              across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-7 py-4 rounded-md font-bold shadow-accent-glow hover:scale-105 transition-transform"
              >
                Get Instant Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-md font-bold hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/90">
                  <div className="h-7 w-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <b.icon className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUB-BRANDS MARQUEE */}
      <section className="bg-secondary py-8 border-y border-border overflow-hidden">
        <p className="text-center text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
          Our In-House Sub-Brands
        </p>
        <div className="relative">
          <div className="flex animate-marquee gap-12 w-max">
            {[...SUB_BRANDS, ...SUB_BRANDS, ...SUB_BRANDS].map((b, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                <Zap className="h-5 w-5 text-accent" fill="currentColor" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Our Products
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              Built for performance.<br />Engineered to last.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore our complete range of industrial-grade capacitors trusted by India's leading manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card-soft hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-primary">{p.name}</h3>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {p.range}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors"
                  >
                    Request a quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              India's most trusted<br />capacitor partner.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl bg-card p-7 border border-border hover:border-accent/40 hover:shadow-card-soft transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow mb-5">
                  <r.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <s.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-display text-4xl md:text-5xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/70 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              Looking for bulk capacitor supply?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Tell us what you need. Our sales team will respond within 24 hours with a detailed
              quotation, sample availability and lead time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Free product samples on request",
                "Volume discounts for OEMs",
                "Custom specifications welcome",
                "Dedicated account manager",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-xl bg-secondary border border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Prefer to talk?
              </p>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-1 flex items-center gap-2 text-2xl font-display font-bold text-primary hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-card border border-border p-6 md:p-8 shadow-elegant">
            <QuoteForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
