import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label="Call us"
        className="md:hidden h-13 w-13 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative h-14 w-14 flex items-center justify-center rounded-full text-white shadow-elegant hover:scale-110 transition-transform"
        style={{ backgroundColor: "oklch(0.65 0.16 150)" }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: "oklch(0.65 0.16 150)" }}
        />
        <MessageCircle className="relative h-7 w-7" fill="currentColor" />
      </a>
    </div>
  );
}
