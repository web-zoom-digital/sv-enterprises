import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1683C7]/10 text-[#1683C7] text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171A1D] tracking-tight">
        Page Not Found
      </h1>
      <p className="text-base text-[#6B7280] max-w-lg mx-auto">
        The page or audio product route you are looking for does not exist or has been moved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold px-5 py-3 rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#171A1D] font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#1683C7]" />
          <span>Call Showroom</span>
        </a>
      </div>
    </div>
  );
}
