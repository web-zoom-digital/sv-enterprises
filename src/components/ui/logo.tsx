import Link from "next/link";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className = "", isFooter = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1683C7] rounded-md ${className}`}
      aria-label="S V ENTERPRISES - Professional Audio Equipment Dealer"
    >
      {/* Speaker & Soundwave SVG Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#171A1D] text-[#1683C7] group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Speaker body */}
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          {/* Sound waves */}
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-tight leading-none ${
            isFooter ? "text-xl text-white" : "text-xl text-[#171A1D]"
          }`}
        >
          S V <span className="text-[#1683C7]">ENTERPRISES</span>
        </span>
        <span
          className={`text-[10px] font-semibold tracking-wider uppercase mt-1 ${
            isFooter ? "text-gray-400" : "text-[#6B7280]"
          }`}
        >
          Professional Audio Equipment
        </span>
      </div>
    </Link>
  );
}
