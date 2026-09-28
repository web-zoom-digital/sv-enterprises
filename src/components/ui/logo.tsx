import Link from "next/link";
import Image from "next/image";

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
      {/* Brand Logo Image */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs shrink-0 group-hover:border-[#1683C7]/60 group-hover:shadow-sm transition-all duration-300">
        <Image
          src="/logo/sv-enterprises.jpeg"
          alt="S V ENTERPRISES Logo"
          width={44}
          height={44}
          className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
          priority
        />
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
