"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "@/components/ui/logo";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Locations", href: "/locations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]"
          : "bg-[#F5F6F7]/95 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#1683C7] bg-[#1683C7]/10"
                      : "text-[#171A1D] hover:text-[#1683C7] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call Button */}
            <motion.a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 text-sm font-bold text-[#171A1D] hover:text-[#1683C7] transition-colors group cursor-pointer"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <span className="w-11 h-11 rounded-full bg-[#1683C7] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <FaPhone className="w-5 h-5 text-white" />
              </span>
            </motion.a>

            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#171A1D] hover:bg-gray-200/60 focus:outline-none focus:ring-2 focus:ring-[#1683C7] cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 text-[#171A1D]" />
              ) : (
                <FiMenu className="w-6 h-6 text-[#171A1D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-lg overflow-hidden w-full max-w-full"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#1683C7] bg-[#1683C7]/10"
                        : "text-[#171A1D] hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 text-base font-semibold border border-[#E5E7EB] rounded-lg text-[#171A1D] bg-[#F5F6F7] cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1683C7] text-white flex items-center justify-center shadow-xs">
                    <FaPhone className="w-4 h-4 text-white" />
                  </span>
                  <span>Call: {SITE_CONFIG.phone}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 text-base font-semibold bg-[#25D366] text-white rounded-lg shadow cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
