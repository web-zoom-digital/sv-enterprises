import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { ABOUT_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { MotionSection } from "@/components/ui/motion-section";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Phone,
  CheckCircle2,
  Volume2,
  ArrowRight,
  Layers,
  Building2,
  Church,
  GraduationCap,
  Factory,
  Hotel,
  Clock,
  MessageSquare,
  Navigation,
  Radio,
  Sliders,
  Mic,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About S V Enterprises | Professional Audio Equipment in Chennai",
  description:
    "Learn about S V Enterprises in Chintadripet, Chennai, offering professional audio equipment including speakers, amplifiers, microphones, mixers and PA systems.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [{ name: "About Us", url: "/about" }];
  const featuredCategories = PRODUCT_CATEGORIES.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. PAGE HERO (Full Screen Width) */}
      <PageHero
        title="About S V Enterprises"
        description="Learn more about S V Enterprises, a professional audio equipment business based in Chintadripet, Chennai."
        backgroundImage="/images/heroes/about.jpg"
        breadcrumbItems={breadcrumbItems}
        badgeText="ESTABLISHED DEALER • CHINTADRIPET, CHENNAI"
        primaryCTA={{
          text: "Explore Products",
          href: "/products",
          icon: "arrow",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "Contact Showroom",
          href: "/contact",
          icon: "quote",
          variant: "secondary",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* 2. ABOUT S V ENTERPRISES (Two-Column Layout) */}
        <MotionSection className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
                About S V Enterprises
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
                Professional Audio Equipment for Different Requirements
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Operating directly from <strong>129/60, W Coovam Road, Chintadripet, Chennai</strong>, S V Enterprises supplies professional sound reinforcement equipment, public address (PA) systems, power amplifiers, microphones, mixers, and audio accessories.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                We assist customers, venue operators, institutions, and audio contractors with product selection, technical guidance on component matching, 70V/100V line transformer calculations, and direct stock availability.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#171A1D]">Physical Showroom</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">129/60, W Coovam Road, Chintadripet</p>
                  </div>
                </div>

                <div className="p-4 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#171A1D]">Direct Phone Assistance</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">Call hotline at 099404 51673</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] h-[340px] bg-gray-100">
                <Image
                  src="/images/about-hero.jpg"
                  alt="S V ENTERPRISES Chintadripet Showroom - Professional Audio Equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                    Chintadripet Base Store
                  </span>
                  <h3 className="text-base sm:text-lg font-bold">129/60, W Coovam Road, Chennai</h3>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* 3. WHAT WE OFFER */}
        <MotionSection className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Equipment Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Professional Speakers</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Cabinet speakers, sound column speakers, flush ceiling speakers, and outdoor reflex horn speakers.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Power Amplifiers</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Commercial power amplifiers, booster units, and multi-zone background music amplifiers.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Microphones</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Dynamic handheld microphones, podium gooseneck mics, and specialized speech microphones.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Audio Mixers</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Multi-channel audio mixing consoles, equalizer controllers, and signal distribution hubs.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Public Address Systems</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Integrated PA paging systems, priority mic desks, and bell chimers for commercial buildings.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Wireless Audio Systems</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Multi-channel VHF/UHF wireless microphone receivers, lapels, and handheld transmitters.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* 4. PRODUCT CATEGORIES */}
        <MotionSection className="space-y-8 cursor-pointer">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Explore Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
              Explore Our Audio Equipment
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {featuredCategories.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs flex flex-col justify-between group hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={`${cat.name} - S V Enterprises`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 ">
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1683C7] group-hover:text-[#126fa9] transition-colors"
                  >
                    <span>Explore {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Redirect Button Below Content */}
          <div className="pt-4 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionSection>

        {/* 5. APPLICATIONS / INDUSTRIES SERVED */}
        <MotionSection className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Venue Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
              Professional Audio for Different Applications
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Auditoriums & Event Halls</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for high-power cabinet speaker setups and multi-channel mixing consoles.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Church className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Places of Worship</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for echo management in tall halls, column arrays, and reflex horns.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Educational Institutions</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for campus-wide announcements, bell chimers, and podium gooseneck mics.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Factories & Industrial Plants</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for high-penetration reflex horn speakers and heavy-duty zone amplifiers.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Hotels & Retail Showrooms</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for flush ceiling speakers and multi-zone background music installations.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-3 hover:border-[#1683C7]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1683C7]/10 text-[#1683C7] flex items-center justify-center">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">Commercial Paging Systems</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Audio equipment suitable for priority desktop microphones and constant-voltage 100V line systems.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* 6. WHY CHOOSE S V ENTERPRISES */}
        <MotionSection className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
              Why Choose S V Enterprises?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="p-6 bg-[#F5F6F7] rounded-2xl border border-[#E5E7EB] space-y-3">
              <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171A1D]">Professional Audio Product Range</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Comprehensive catalog of speakers, amplifiers, microphones, mixers, and PA systems.
              </p>
            </div>

            <div className="p-6 bg-[#F5F6F7] rounded-2xl border border-[#E5E7EB] space-y-3">
              <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171A1D]">Convenient Chennai Location</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Physical store access at 129/60, W Coovam Road, Chintadripet for in-person consultations.
              </p>
            </div>

            <div className="p-6 bg-[#F5F6F7] rounded-2xl border border-[#E5E7EB] space-y-3">
              <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171A1D]">Product-Focused Guidance</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Technical assistance with wattage sizing, impedance matching, and line voltage tap selection.
              </p>
            </div>

            <div className="p-6 bg-[#F5F6F7] rounded-2xl border border-[#E5E7EB] space-y-3">
              <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171A1D]">Easy Enquiry & Contact</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Direct hotline phone support at 099404 51673 and WhatsApp response for fast price quotes.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* 7. LOCAL SERVICE AREA */}
        <MotionSection className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-xs space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D]">
              Serving Customers Across Chennai & Nearby Areas
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
              While S V Enterprises maintains its primary physical store in Chintadripet, Chennai, we serve customers across all commercial sectors including Egmore, Pudupet, Triplicane, Park Town, T. Nagar, Anna Nagar, Ambattur, Nungambakkam, and Adyar, as well as nearby districts such as Tiruvallur, Kanchipuram, and Chengalpattu.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-2">
            {[
              "Chintadripet",
              "Chennai",
              "Egmore",
              "Pudupet",
              "Triplicane",
              "Park Town",
              "Periamet",
              "George Town",
              "T. Nagar",
              "Anna Nagar",
              "Nungambakkam",
              "Adyar",
              "Ambattur",
              "Tiruvallur",
              "Kanchipuram",
              "Chengalpattu",
            ].map((loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 bg-[#F5F6F7] text-xs font-semibold text-[#171A1D] border border-[#E5E7EB] rounded-lg"
              >
                📍 {loc}
              </span>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all"
            >
              <span>View Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionSection>

        {/* 8. BUSINESS INFORMATION / CONTACT */}
        <MotionSection className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Store Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D]">
              Visit S V Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 cursor-pointer">
            {/* Card 1: Store Address */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1683C7]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
              <div className="space-y-3">
                <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#171A1D]">Store Address</h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1 leading-relaxed">
                    S V ENTERPRISES<br />
                    129/60, W Coovam Road, Chintadripet,<br />
                    Chennai, Tamil Nadu 600002
                  </p>
                </div>
              </div>
              <div className="pt-3 ">
                <a
                  href={SITE_CONFIG.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#171A1D] hover:bg-black text-white font-bold text-xs sm:text-sm py-2.5 px-3 sm:px-4 rounded-xl shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1683C7]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Card 2: Phone Hotline */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1683C7]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
              <div className="space-y-3">
                <div className="p-3 bg-[#1683C7]/10 text-[#1683C7] rounded-xl w-fit group-hover:bg-[#1683C7] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#171A1D]">Phone Number</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-xs sm:text-sm text-[#6B7280] hover:text-[#1683C7] transition-colors block mt-1 font-semibold"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-[11px] sm:text-xs text-[#6B7280] mt-0.5">Direct Store Line</p>
                </div>
              </div>
              <div className="pt-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-xs sm:text-sm py-2.5 px-3 sm:px-4 rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Card 3: Operating Hours */}
            <div className="col-span-2 md:col-span-1 bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1683C7]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
              <div className="space-y-3">
                <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl w-fit group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#171A1D]">Operating Hours</h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1 leading-relaxed">
                    Mon – Sat: 09:30 AM – 08:30 PM<br />
                    Sun: On Call / Appointment
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm py-2.5 px-3 sm:px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <MapSection />
        </MotionSection>

        {/* 9. FAQ */}
        <MotionSection>
          <FAQ faqs={ABOUT_FAQS} title="Frequently Asked Questions" />
        </MotionSection>

        {/* 10. CTA */}
        <MotionSection>
          <CTA
            title="Looking for Professional Audio Equipment?"
            description="Contact S V Enterprises to discuss your professional audio equipment requirements."
          />
        </MotionSection>
      </div>
    </div>
  );
}
