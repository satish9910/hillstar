import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, Twitter, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="[&_*]:!text-white">
            <Logo light />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            ISO 9001:2015 certified manufacturer of motor, fan and power capacitors —
            trusted by 500+ businesses across India.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-3">
            {[Globe, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-accent transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-gradient-accent text-accent-foreground px-5 py-3 rounded-md font-bold text-sm shadow-accent-glow"
          >
            Request a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
