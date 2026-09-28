"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "@/components/ui/logo";
import { SITE_CONFIG } from "@/lib/constants";
import { useMobileMenu } from "@/context/mobile-menu-context";

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
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Attractive Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleMenu}
              className={`flex items-center gap-2 h-11 px-3.5 rounded-2xl border transition-all duration-300 shadow-xs cursor-pointer ${
                isOpen
                  ? "bg-[#1683C7] text-white border-[#1683C7] shadow-sky-500/20"
                  : "bg-white/90 text-[#171A1D] border-gray-300/80 hover:border-[#1683C7]/50 hover:bg-sky-50/50"
              }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {/* <span className="text-xs font-bold uppercase tracking-wider">
                {isOpen ? "Close" : "Menu"}
              </span> */}
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isOpen ? (
                  <FiX className="w-5 h-5 text-white" />
                ) : (
                  <FiMenu className="w-5 h-5 text-[#1683C7]" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Attractive Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB] shadow-2xl overflow-y-auto max-h-[calc(100vh-5rem)] w-full"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#1683C7] bg-[#1683C7]/10 font-bold border-l-4 border-[#1683C7] shadow-xs"
                          : "text-[#171A1D] font-semibold hover:bg-sky-50/60 hover:text-[#1683C7]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#1683C7] translate-x-1" : "text-gray-400"}`} />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-5 border-t border-[#E5E7EB] flex flex-col gap-3">
                <a
                  href={`tel:09940451673`}
                  className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 text-base font-bold bg-gradient-to-r from-[#1683C7] to-[#126fa9] text-white rounded-xl shadow-md shadow-sky-500/20 active:scale-98 transition-transform cursor-pointer"
                >
                  <FaPhone className="w-4 h-4 text-white" />
                  <span>Call: {SITE_CONFIG.phone}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 text-base font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl shadow-md shadow-emerald-500/20 active:scale-98 transition-transform cursor-pointer"
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
