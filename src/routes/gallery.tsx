import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import productMotor from "@/assets/product-motor-new.jpg";
import productFan from "@/assets/product-fan-new.jpg";
import productPower from "@/assets/product-power-new.jpg";
import prod1 from "@/assets/gallery-production-1.jpg";
import prod2 from "@/assets/gallery-production-2.jpg";
import prod3 from "@/assets/gallery-production-3.jpg";
import prod4 from "@/assets/gallery-production-4.jpg";
import gp7 from "@/assets/gallery-product-7.jpg";
import gp8 from "@/assets/gallery-product-8.jpg";
import gp9 from "@/assets/gallery-product-9.jpg";
import gp10 from "@/assets/gallery-product-10.jpg";
import v1 from "@/assets/production-video-1.mp4";
import v2 from "@/assets/production-video-2.mp4";
import v3 from "@/assets/production-video-3.mp4";
import v4 from "@/assets/production-video-4.mp4";
import v5 from "@/assets/production-video-5.mp4";
import v6 from "@/assets/production-video-6.mp4";
import v7 from "@/assets/production-video-7.mp4";

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

// Dynamically import all images and videos to ensure nothing is missed
// Using relative path for glob to ensure maximum compatibility with Vite
const allImages = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" }) as Record<
  string,
  string
>;
const allVideos = import.meta.glob("../assets/*.mp4", { eager: true, import: "default" }) as Record<string, string>;

const manualItems = [
  { src: v1, caption: "Inside the Production Line", type: "video" },
  { src: v2, caption: "Automated Testing Station", type: "video" },
  { src: v3, caption: "Quality Control Process", type: "video" },
  { src: v4, caption: "Bulk Dispatch Preparation", type: "video" },
  { src: v5, caption: "Manufacturing Flow", type: "video" },
  { src: v6, caption: "Precision Winding", type: "video" },
  { src: v7, caption: "Final Inspection", type: "video" },
  { src: productMotor, caption: "Hill Star Motor Capacitors — 200/250 MFD Series" },
  { src: productFan, caption: "Fan Capacitors — Multi-MFD Range for All Fan Types" },
  { src: productPower, caption: "Heavy Duty Power Capacitors — Made in India" },
  { src: prod1, caption: "Bulk Production — Ready for Dispatch" },
  { src: prod2, caption: "Quality Inspected Batches" },
  { src: prod3, caption: "Precision Engineering & Winding" },
  { src: prod4, caption: "Testing Phase — 100% Reliability Check" },
  { src: gp7, caption: "Hill Star Premium Product Range" },
  { src: gp8, caption: "Industrial Grade Capacitor Solutions" },
  { src: gp9, caption: "High Performance Capacitors" },
  { src: gp10, caption: "Standard Product Packaging" },
  { src: g1, caption: "Assembly line — 100% in-line testing" },
  { src: g2, caption: "Quality control & precision testing lab" },
  { src: g6, caption: "Automated film winding station" },
];

const manualSrcs = new Set(manualItems.map((it) => it.src));
const dynamicItems: any[] = [];

// Filter and add videos
Object.entries(allVideos).forEach(([path, src]) => {
  if (!manualSrcs.has(src)) {
    dynamicItems.push({
      src,
      caption: "Production Highlight",
      type: "video",
    });
  }
});

// Filter and add images
Object.entries(allImages).forEach(([path, src]) => {
  const filename = path.split("/").pop() || "";
  // Exclude only the logo and hero factory, keep everything else
  const isExcluded = filename.includes("logo") || filename.includes("hero-factory");

  if (!manualSrcs.has(src) && !isExcluded) {
    let caption = "Manufacturing Facility";
    if (filename.includes("2026-05-12")) {
      caption = "Hillspeed Premium Series";
    } else if (filename.includes("WhatsApp")) {
      caption = "Factory & Production";
    }
    
    dynamicItems.push({
      src,
      caption,
      type: "image",
    });
  }
});

const items = [...manualItems, ...dynamicItems];

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
            A look at our manufacturing floor, testing labs, products and people — featuring {items.length} photos and videos.
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
                className="group relative aspect-square overflow-hidden rounded-xl border border-border shadow-card-soft cursor-pointer bg-muted"
              >
                {it.type === "video" ? (
                  <div className="h-full w-full relative">
                    <video
                      src={it.src}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseOut={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.pause();
                        v.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <PlayCircle className="h-12 w-12 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={it.src}
                    alt={it.caption}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                )}
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
              {items[open].type === "video" ? (
                <video
                  src={items[open].src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg shadow-elegant max-h-[80vh]"
                />
              ) : (
                <img
                  src={items[open].src}
                  alt={items[open].caption}
                  className="w-full h-auto rounded-lg shadow-elegant max-h-[80vh] object-contain"
                />
              )}
              <p className="text-center text-white mt-4 font-semibold">{items[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
