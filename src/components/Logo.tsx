import { Link } from "@tanstack/react-router";
import logoImage from "@/assets/logo.webp";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Hill Star Capacitor home">
      <img
        src={logoImage}
        alt="Hill Star Capacitor"
        className={`w-auto object-contain transition-transform group-hover:scale-110 ${light
          ? "h-20 brightness-0 invert drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]"
          : "h-11 lg:h-13 scale-105 origin-left ml-2"
          }`}
        loading="eager"
      />
    </Link>
  );
}
