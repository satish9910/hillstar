import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteModalTrigger } from "@/components/QuoteModal";
import productMotor from "@/assets/product-motor-new.jpg";
import productFan from "@/assets/product-fan-new.jpg";
import productPower from "@/assets/product-power-new.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Motor, Fan & Power Capacitors | Hill Star Capacitor" },
      {
        name: "description",
        content:
          "Browse Hill Star's complete capacitor catalog: motor capacitors, fan capacitors, power capacitors and custom industrial units. ISO certified, 24-hr dispatch.",
      },
      { property: "og:title", content: "Hill Star Capacitor — Product Range" },
      { property: "og:description", content: "Industrial capacitor catalog: motor, fan and power capacitors." },
    ],
  }),
  component: ProductsPage,
});

const catalog = [
  {
    name: "Motor Capacitors",
    img: productMotor,
    series: "CBB60 / CBB61 / CD60",
    range: "1µF – 100µF",
    voltage: "250V – 450V AC",
    apps: ["Single-phase motors", "Pumps", "Compressors", "Air conditioners"],
  },
  {
    name: "Fan Capacitors",
    img: productFan,
    series: "CBB61 oil-filled",
    range: "1.5µF – 5µF",
    voltage: "440V AC",
    apps: ["Ceiling fans", "Exhaust fans", "Pedestal fans", "Cooler motors"],
  },
  {
    name: "Power Capacitors",
    img: productPower,
    series: "Cylindrical PFC",
    range: "5 – 100 KVAR",
    voltage: "415V – 525V AC",
    apps: ["Power-factor correction", "Industrial panels", "APFC units", "Harmonic filters"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Products</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-white text-balance max-w-3xl">
            A capacitor for every application.
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl text-lg">
            From 1µF fan capacitors to 100 KVAR power-factor units — we manufacture the full
            spectrum, all under one roof.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-10">
          {catalog.map((p, i) => (
            <div
              key={p.name}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-card-soft aspect-[4/3] lg:aspect-square">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">{p.series}</span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-primary">{p.name}</h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-secondary p-4 border border-border">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      Capacitance
                    </p>
                    <p className="mt-1 font-display font-bold text-primary text-lg">{p.range}</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-4 border border-border">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      Voltage
                    </p>
                    <p className="mt-1 font-display font-bold text-primary text-lg">{p.voltage}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
                    Applications
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.apps.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <QuoteModalTrigger>
                  <button
                    type="button"
                    className="mt-7 inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-6 py-3 rounded-md font-bold shadow-accent-glow hover:scale-105 transition-transform"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </button>
                </QuoteModalTrigger>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
