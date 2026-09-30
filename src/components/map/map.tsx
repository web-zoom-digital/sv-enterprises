"use client";

import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SITE_CONFIG } from "@/lib/constants";

interface MapSectionProps {
  title?: string;
  subtitle?: string;
  isServiceArea?: boolean;
  locationName?: string;
}

export function MapSection({
  title = "Visit Our Chintadripet Showroom",
  subtitle = "Our central store is located at 129/60, W Coovam Road, Chintadripet, Chennai.",
  isServiceArea = false,
  locationName,
}: MapSectionProps) {
  return (
    <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 mb-6 sm:p-6 shadow-xs overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">


        {/* Embedded Pinned Map Container */}
        <div className="lg:col-span-12 w-full h-[360px] sm:h-[420px] rounded-2xl  border border-[#E5E7EB] relative bg-gray-100 shadow-inner">
          {/* Floating Pinned Location Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 bg-[#171A1D]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 shadow-md max-w-[92%] sm:max-w-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="truncate">
              {locationName || "S V ENTERPRISES / AHUJA DEALERS / Professional Audio Equipment"}
            </span>
          </div>

          <iframe
            title="S V ENTERPRISES / AHUJA DEALERS / Professional Audio Equipment - Map Location"
            src={SITE_CONFIG.googleEmbedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
