import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/hero/hero";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { LocationCard } from "@/components/location-card/location-card";
import { BlogCard } from "@/components/blog-card/blog-card";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { CTA } from "@/components/cta/cta";
import { TestimonialsSection } from "@/components/testimonial/testimonial";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blogs";
import { HOME_FAQS } from "@/data/faqs";
import { ContactForm } from "@/components/contact-form/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { MotionSection } from "@/components/ui/motion-section";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import {
  ShieldCheck,
  Award,
  Truck,
  Headphones,
  CheckCircle2,
  Building2,
  Church,
  GraduationCap,
  Factory,
  Hotel,
  Volume2,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  Layers,
  FileText,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Professional Audio Equipment Dealer in Chintadripet, Chennai",
  description:
    "S V ENTERPRISES is a premier professional audio equipment dealer in Chintadripet, Chennai. We offer speakers, amplifiers, microphones, mixers, PA systems, and commercial audio solutions.",
  path: "/",
});

export default function HomePage() {
  const featuredCategories = PRODUCT_CATEGORIES.slice(0, 6);
  const featuredLocations = LOCATIONS.slice(0, 6);
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST / BUSINESS HIGHLIGHTS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#1683C7]/40 transition-all duration-300 flex items-start gap-4 group">
            <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0 group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#171A1D]">Established Dealer</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Physical showroom in Chintadripet</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#1683C7]/40 transition-all duration-300 flex items-start gap-4 group">
            <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0 group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#171A1D]">Commercial Audio</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Heavy-duty audio equipment</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#1683C7]/40 transition-all duration-300 flex items-start gap-4 group">
            <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0 group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#171A1D]">Chennai & Districts</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Direct supply & dispatch</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#1683C7]/40 transition-all duration-300 flex items-start gap-4 group">
            <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0 group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#171A1D]">Technical Support</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Call guidance at 099404 51673</p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 3. PRODUCT CATEGORIES */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Audio Product Range
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Explore Our Professional Audio Equipment
          </h2>
        </div>

        <ProductGrid categories={featuredCategories} />

        {/* Redirect CTA Button at Bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MotionSection>

      {/* 4. ABOUT / BUSINESS INTRODUCTION */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            About S V Enterprises
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171A1D] tracking-tight">
            Professional Audio Equipment for Your Requirements
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            Operating directly from our store at 129/60, W Coovam Road, Chintadripet, S V Enterprises is a premier professional audio equipment dealer in Chennai. We assist venue owners, institutions, and contractors in selecting high-performance sound hardware engineered for continuous operation.
          </p>

          {/* Details in Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
            <div className="flex items-start gap-3 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="block text-[#171A1D] font-bold">Central Chintadripet Base:</strong>
                <span className="text-[#6B7280]">Physical store at W Coovam Road for ready stock & in-person consultations.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="block text-[#171A1D] font-bold">Complete Audio Range:</strong>
                <span className="text-[#6B7280]">PA speakers, power amplifiers, microphones, mixers, and reflex horns.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="block text-[#171A1D] font-bold">Technical Component Sizing:</strong>
                <span className="text-[#6B7280]">Accurate wattage tap & impedance matching to prevent audio distortion.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="block text-[#171A1D] font-bold">Chennai & Regional Supply:</strong>
                <span className="text-[#6B7280]">Direct dispatch across Chennai and districts like Tiruvallur & Kanchipuram.</span>
              </div>
            </div>
          </div>

          {/* Centered Button */}
          <div className="pt-4 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* 5. WHY CHOOSE S V ENTERPRISES */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Why Choose S V Enterprises?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300 space-y-2 sm:space-y-3">
            <div className="p-2.5 sm:p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Professional Range</h3>
            <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
              High-output speakers, multi-zone amplifiers, mixers, and commercial PA hardware.
            </p>
          </div>

          <div className="p-3.5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300 space-y-2 sm:space-y-3">
            <div className="p-2.5 sm:p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Product Guidance</h3>
            <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
              Accurate component sizing and line transformer (70V/100V) tap matching.
            </p>
          </div>

          <div className="p-3.5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300 space-y-2 sm:space-y-3">
            <div className="p-2.5 sm:p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Customer Support</h3>
            <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
              Direct phone consultations and stock verification assistance.
            </p>
          </div>

          <div className="p-3.5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300 space-y-2 sm:space-y-3">
            <div className="p-2.5 sm:p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Chennai Location</h3>
            <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
              Physical showroom access at 129/60, W Coovam Road, Chintadripet.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* 6. PROFESSIONAL AUDIO APPLICATIONS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Versatile Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Audio Solutions for Different Applications
          </h2>
          <p className="text-sm text-[#6B7280]">
            We supply specialized sound reinforcement equipment designed for specific acoustic requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Auditoriums & Event Halls</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              High-power cabinet speakers and multi-channel mixing consoles for pristine music and speech clarity.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <Church className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Places of Worship</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Column speakers to manage acoustic echo in tall halls, plus weatherproof reflex horns for outdoor addresses.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Educational Institutions</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Campus-wide public address paging systems, bell chimers, and gooseneck podium microphones.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Factories & Plants</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              High-penetration reflex horn speakers and heavy-duty zone amplifiers for loud industrial floors.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <Hotel className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Hotels & Retail Showrooms</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Flush ceiling speakers and multi-zone background music amplifiers for aesthetic commercial spaces.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">Commercial Paging Systems</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Priority microphone desks and constant-voltage 100V line systems for reliable public announcements.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* 7. FEATURED PRODUCTS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Equipment Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Featured Professional Audio Products
          </h2>
        </div>

        <ProductGrid categories={featuredCategories} />

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MotionSection>

      {/* 8. SERVICE AREAS / LOCATIONS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Distribution Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Serving Chennai & Nearby Areas
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featuredLocations.map((loc) => (
            <div key={loc.slug} className="flex flex-col">
              <LocationCard location={loc} />
            </div>
          ))}
        </div>

        {/* Redirect CTA Button at Bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MotionSection>

      {/* 9. MAIN CTA SECTION */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTA
          title="Looking for the Right Professional Audio Equipment?"
          description="Talk to S V Enterprises about your professional audio equipment requirements. Store consultation, stock checks, and direct dispatch across Tamil Nadu."
        />
      </MotionSection>

      {/* 10. TESTIMONIALS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection />
      </MotionSection>

      {/* 11. BLOG / INSIGHTS */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Knowledge Base
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Audio Equipment Guides & Insights
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {latestBlogs.map((post) => (
            <div key={post.slug} className="flex flex-col">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Redirect CTA Button at Bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MotionSection>

      {/* 12. FAQ */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ faqs={HOME_FAQS} title="Frequently Asked Questions" />
      </MotionSection>

      {/* 13. CONTACT / LOCATION MAP */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
            Visit S V Enterprises
          </h2>
          <p className="text-sm text-[#6B7280]">
            Visit our Chintadripet showroom or send an online enquiry below for price quotes and equipment availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Showroom Details & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#171A1D]">
              Showroom Details
            </h3>

            <div className="space-y-5 text-sm text-[#171A1D]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-[#171A1D] font-bold text-base">Store Address</strong>
                  <p className="text-[#6B7280] mt-1 leading-relaxed">
                    S V ENTERPRISES<br />
                    129/60, W Coovam Road, Chintadripet,<br />
                    Chennai, Tamil Nadu 600002, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-[#171A1D] font-bold text-base">Phone Hotline</strong>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-[#6B7280]"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-[#171A1D] font-bold text-base">Operating Hours</strong>
                  <p className="text-[#6B7280] mt-1">
                    Monday – Saturday: 09:30 AM – 08:30 PM<br />
                    Sunday: On Call / Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FaPhone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>

              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>WhatsApp Message</span>
              </a>

              <a
                href={SITE_CONFIG.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#171A1D] hover:bg-black text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#1683C7]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Embedded Map */}
        <MapSection />
      </MotionSection>
    </div>
  );
}
