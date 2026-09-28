import Link from "next/link";
import {
  MapPin,
  ExternalLink,
  ShieldCheck,
  Navigation,
  ChevronRight,
  Mail,
  Clock,
  Phone,
} from "lucide-react";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Logo } from "@/components/ui/logo";
import { SITE_CONFIG } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { LOCATIONS } from "@/data/locations";

export function Footer() {
  const topCategories = PRODUCT_CATEGORIES.slice(0, 6);
  const topLocations = LOCATIONS.filter(
    (l) =>
      l.type === "primary" ||
      l.slug === "egmore" ||
      l.slug === "t-nagar" ||
      l.slug === "ambattur" ||
      l.slug === "tiruvallur" ||
      l.slug === "kanchipuram"
  ).slice(0, 6);

  return (
    <footer className="bg-[#051C2C] text-white pt-16 pb-24 md:pb-16 border-t border-[#0d2a3f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 4 Main Columns (RonEx Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Company Branding & Description & Social Icons */}
          <div className="space-y-5">
            <Logo isFooter />
            <p className="text-gray-300 text-sm leading-relaxed">
              S V ENTERPRISES is a premier professional audio equipment dealer
              and supplier in Chintadripet, Chennai. Offering high-quality
              speakers, amplifiers, microphones, mixers, and PA systems.
            </p>
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 shadow-xs cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                aria-label="Call Us"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1683C7] text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 shadow-xs cursor-pointer"
              >
                <FaPhone className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 shadow-xs cursor-pointer"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E4405F] text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 shadow-xs cursor-pointer"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] text-gray-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 shadow-xs cursor-pointer"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links (with Chevron ChevronRight) */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Product Categories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Service Areas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Showroom Map</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 tracking-wide">
              Our Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {topCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="hover:text-[#1683C7] transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 text-[#1683C7] shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Branch Address */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1683C7] shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-white hover:text-[#1683C7] transition-colors font-medium cursor-pointer"
                  >
                    {SITE_CONFIG.phoneRaw}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1683C7] shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@sv-enterprises.in"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    info@sv-enterprises.in
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1683C7] shrink-0 mt-1" />
                <div className="text-xs text-gray-300 space-y-0.5">
                  <p>Mon–Sat: 09:30 AM – 08:30 PM</p>
                  <p className="text-gray-400">Sun: On Call / By Appointment</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-4 pt-3" />

              {/* Branch Title & Address */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-[#1683C7] uppercase tracking-wider">
                  CHINTADRIPET BRANCH (MAIN)
                </h4>
                <div className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#1683C7] shrink-0 mt-0.5" />
                  <p>
                    129/60, W Coovam Road, Chintadripet, Chennai, Tamil Nadu 600002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Cards (RonEx Reference Cards Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-white/10">
          {/* Card 1: Main Showroom Map Container */}
          <div className="bg-[#08253A] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-md text-xs font-bold text-white uppercase tracking-wider">
                CHINTADRIPET BRANCH (MAIN)
              </span>
              <a
                href={SITE_CONFIG.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1683C7] hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10 bg-gray-900 shadow-inner">
              <iframe
                title="S V ENTERPRISES Showroom Location"
                src={SITE_CONFIG.googleEmbedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          
        </div>

        {/* Footer Bottom Copyright & Legal */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} S V ENTERPRISES. All Rights Reserved.</p>
            <p className="text-gray-400">
              Design And Developed By -{" "}
              <a
                href="https://www.zoomdigital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#1683C7] transition-colors underline decoration-white/20 underline-offset-2 cursor-pointer"
              >
                Zoom Digital
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-center md:text-right text-gray-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1683C7] shrink-0" />
              <span>S V ENTERPRISES | Chintadripet, Chennai 600002</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

