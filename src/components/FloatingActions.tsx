import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.402.002 9.795-4.385 9.798-9.789.001-2.586-1.002-5.019-2.827-6.848-1.825-1.829-4.254-2.836-6.843-2.837-5.407 0-9.8 4.393-9.803 9.797-.001 1.554.411 3.076 1.196 4.418L1.933 21.05l5.241-1.376zm11.393-5.267c-.312-.156-1.85-.912-2.137-1.016-.288-.105-.497-.156-.706.156-.209.311-.809 1.016-.992 1.224-.183.208-.366.234-.678.078-1.782-.892-3.111-1.89-4.227-3.811-.295-.507.295-.47.844-1.569.091-.182.046-.34-.023-.496-.068-.156-.587-1.413-.804-1.937-.213-.513-.447-.442-.614-.45-.16-.007-.344-.009-.529-.009-.186 0-.488.07-.744.348-.256.278-.977.954-.977 2.325s1.001 2.69 1.14 2.872c.14.183 1.97 3.007 4.773 4.218.667.288 1.188.46 1.594.59.67.213 1.282.183 1.765.11.539-.08 1.85-.755 2.112-1.448.263-.692.263-1.287.184-1.414-.078-.126-.288-.204-.6-.36z" />
    </svg>
  );
}

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
        className="relative h-14 w-14 flex items-center justify-center rounded-full text-white shadow-elegant hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] cursor-pointer"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: "#25D366" }}
        />
        <WhatsappIcon className="relative h-7 w-7 fill-white" />
      </a>
    </div>
  );
}
