import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "default" | "hero";
}

export function Breadcrumb({ items, variant = "default" }: BreadcrumbProps) {
  if (variant === "hero") {
    return (
      <nav
        aria-label="Breadcrumb"
        className="inline-flex items-center py-1.5 px-3.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-gray-300 mb-4 overflow-x-auto max-w-full"
      >
        <ol className="flex items-center gap-2 whitespace-nowrap">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                {isLast ? (
                  <span className="text-white font-bold truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 bg-white/70 backdrop-blur-xs border border-[#E5E7EB] rounded-xl text-xs font-semibold text-[#6B7280] mb-6 overflow-x-auto"
    >
      <ol className="flex items-center gap-2 whitespace-nowrap">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#1683C7] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#1683C7]" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {isLast ? (
                <span className="text-[#171A1D] font-bold truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[#1683C7] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
