import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import productMotor from "@/assets/product-motor.jpg";
import productFan from "@/assets/product-fan.jpg";
import productPower from "@/assets/product-power.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Hill Star Capacitor's Manufacturing Facility" },
      {
        name: "description",
        content:
          "Take a tour of Hill Star Capacitor's ISO-certified factory, quality testing labs and product range — see how India's trusted capacitors are made.",
      },
      { property: "og:title", content: "Hill Star Capacitor — Factory & Product Gallery" },
      { property: "og:description", content: "Behind the scenes at India's trusted capacitor manufacturer." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, caption: "Assembly line — 100% in-line testing" },
  { src: g2, caption: "Quality control & precision testing lab" },
  { src: productMotor, caption: "Motor capacitor production batch" },
  { src: g6, caption: "Automated film winding station" },
  { src: g4, caption: "Electrolytic capacitor close-up" },
  { src: productPower, caption: "Heavy-duty power capacitor" },
  { src: g3, caption: "Pan-India dispatch warehouse" },
  { src: g5, caption: "Field engineer — power-factor correction install" },
  { src: productFan, caption: "Fan capacitor — ceiling fan series" },
];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Gallery</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-white text-balance max-w-3xl">
            Inside our facility.
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            A look at our manufacturing floor, testing labs, products and people.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {items.map((it, i) => (
              <motion.button
                key={i}
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border shadow-card-soft cursor-pointer"
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-semibold leading-tight">{it.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[open].src}
                alt={items[open].caption}
                className="w-full h-auto rounded-lg shadow-elegant max-h-[80vh] object-contain"
              />
              <p className="text-center text-white mt-4 font-semibold">{items[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
