import { CardImageSlider } from "@/components/ui/card-image-slider";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { LOCATIONS_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";
import { WHATSAPP_NUMBER, createWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbSchema } from "@/lib/schema";
import {
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building,
  Volume2,
  Sliders,
} from "lucide-react";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return constructMetadata({
      title: "Location Not Found",
      description: "Requested service area location could not be found.",
    });
  }

  return constructMetadata({
    title: location.seoTitle,
    description: location.seoDescription,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const isBaseStore = location.type === "primary";

  const breadcrumbItems = [
    { name: "Locations", url: "/locations" },
    { name: location.name, url: `/locations/${location.slug}` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
  const heroImage = `/images/heroes/${location.slug}.jpg`;

  const locationWhatsappMessage =
    `Hello S V Enterprises,\n\n` +
    `I would like to enquire about audio equipment supply and availability for *${location.name}*.\n\n` +
    `Source Page: ${SITE_CONFIG.url}/locations/${location.slug}\n\n` +
    `Please share pricing and stock information.`;
  const locationWhatsappUrl = createWhatsAppUrl(WHATSAPP_NUMBER, locationWhatsappMessage);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Hero (Full Screen Width) */}
      <PageHero
        title={location.h1Heading}
        description={location.intro}
        backgroundImage={heroImage}
        breadcrumbItems={breadcrumbItems}
        badgeText={
          isBaseStore
            ? "PRIMARY BASE SHOWROOM • CHINTADRIPET"
            : `SERVING ${location.name.toUpperCase()} • CHENNAI DISTRIBUTION`
        }
        primaryCTA={{
          text: "Get a Quote",
          href: "/contact",
          icon: "quote",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "WhatsApp Enquiry",
          href: locationWhatsappUrl,
          icon: "whatsapp",
          variant: "whatsapp",
          external: true,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Location Overview (Left Content & Bullet Points, Right Image) */}
        <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Context & Bullet Points */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 text-[#1683C7] text-xs font-bold uppercase tracking-wider border border-[#1683C7]/30">
                  <MapPin className="w-3.5 h-3.5" />
                  {isBaseStore ? "Primary Base Showroom" : `Supply Coverage: ${location.name}`}
                </span>
                <span className="text-xs text-[#6B7280] font-medium">
                  📍 {location.distanceFromBase}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
                {location.h1Heading}
              </h2>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {location.localContext}
              </p>

              {/* Equipment & Highlights Bullet Points */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#1683C7] uppercase tracking-wider">
                  Equipment Available & Key Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {location.equipmentFocus.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl hover:border-[#1683C7]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#171A1D]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Request Quote for {location.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#171A1D] hover:bg-black text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-xs transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Side: Location Image Slider (5 second auto slide) */}
            <div className="lg:col-span-5 relative">
              <CardImageSlider
                images={[
                  isBaseStore ? "/images/about-hero.jpg" : heroImage,
                  "/images/store-front.jpg",
                  "/images/hero-slide-1.jpg",
                  "/images/hero-slide-2.jpg",
                ]}
                badge={isBaseStore ? "Central Showroom Base" : `Serving ${location.name}`}
                title="129/60, W Coovam Road, Chintadripet"
              />
            </div>
          </div>
        </section>

        {/* Premium Specifications & Purchasing Guidance */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#171A1D] via-[#1E232A] to-[#0F1216] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-gray-800 space-y-8">
          {/* Subtle Background Accent Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1683C7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 space-y-3 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-sky-400 uppercase tracking-wider">
              Technical Verification & Sizing Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Specifications & Purchasing Guidance
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Product specifications vary by wattage, 70V/100V line transformer taps, impedance matching, and acoustic environment. S V ENTERPRISES does not display unverified claims. Contact our Chintadripet showroom directly for exact model numbers, stock verification, and custom price estimates for {location.name}.
            </p>
          </div>

          {/* 3 Key Trust Pillars / Guidance Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-sky-400/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#1683C7]/20 text-sky-400 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Accurate Wattage & Tap Sizing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Precise impedance & wattage calculations to avoid audio distortion and prevent amplifier thermal overload.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-sky-400/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Genuine Brand Hardware</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                100% authentic equipment backed by original manufacturer warranty support and serial number verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-sky-400/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Store Stock Check</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Physical showroom inspection at 129/60, W Coovam Road, Chintadripet for immediate order fulfillment.
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Speak with Audio Specialist</span>
            </a>

            <a
              href={locationWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Send WhatsApp Specs Inquiry</span>
            </a>
          </div>
        </section>

        {/* Section 2: Why Choose S V ENTERPRISES */}
        <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Service Standards
            </span>
            <h2 className="text-2xl font-bold text-[#171A1D] tracking-tight">
              Why Choose S V ENTERPRISES for Audio Supply near {location.name}?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="p-3.5 sm:p-5 bg-[#F5F6F7] rounded-xl border border-[#E5E7EB] space-y-1.5 sm:space-y-2 hover:border-[#1683C7]/40 transition-colors">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#1683C7]" />
              <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Truthful Sizing</h3>
              <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
                Accurate wattage & impedance matching without unverified claims.
              </p>
            </div>

            <div className="p-3.5 sm:p-5 bg-[#F5F6F7] rounded-xl border border-[#E5E7EB] space-y-1.5 sm:space-y-2 hover:border-[#1683C7]/40 transition-colors">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#1683C7]" />
              <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Central Base</h3>
              <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
                Base store at 129/60, W Coovam Road, Chintadripet.
              </p>
            </div>

            <div className="p-3.5 sm:p-5 bg-[#F5F6F7] rounded-xl border border-[#E5E7EB] space-y-1.5 sm:space-y-2 hover:border-[#1683C7]/40 transition-colors">
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1683C7]" />
              <h3 className="text-xs sm:text-base font-bold text-[#171A1D]">Direct Phone Advice</h3>
              <p className="text-[11px] sm:text-xs text-[#6B7280] leading-snug">
                Direct hotline support at 099404 51673.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: CTA */}
        <CTA title={`Need Audio Equipment for Your Setup in ${location.name}?`} />

        {/* Section 4: FAQ */}
        <FAQ faqs={LOCATIONS_FAQS} title={`Frequently Asked Questions for ${location.name}`} />

        {/* Section 5: MapSection */}
        <MapSection
          title={isBaseStore ? `Showroom Location in ${location.name}` : `Map & Supply Context for ${location.name}`}
          subtitle={isBaseStore ? "Visit our physical store on W Coovam Road" : `Serving customers in ${location.name} from our central Chintadripet showroom`}
          isServiceArea={!isBaseStore}
          locationName={location.name}
        />

        {/* Section 6: Related Product Categories & Nearby Areas (Moved below Map section) */}
        <section className="space-y-10 pt-4">
          {/* Explore Popular Products Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
                Catalog Navigation
              </span>
              <h2 className="text-2xl font-bold text-[#171A1D] tracking-tight">
                Explore Popular Products for {location.name} Setups
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                <div key={cat.slug} className="bg-white border border-[#E5E7EB] rounded-2xl p-3.5 sm:p-6 shadow-xs flex flex-col justify-between group hover:border-[#1683C7]/40 transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed line-clamp-2">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                    <Link
                      href={`/products/${cat.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1683C7] hover:underline"
                    >
                      <span>Explore {cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas List */}
          {location.nearbyAreas && location.nearbyAreas.length > 0 && (
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-lg font-bold text-[#171A1D] text-center">
                Nearby Areas Served Around {location.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-2.5">
                {location.nearbyAreas.map((area, i) => {
                  const normalized = area.toLowerCase().trim();
                  const matchedLoc = LOCATIONS.find(
                    (l) =>
                      l.name.toLowerCase() === normalized ||
                      l.slug === normalized.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") ||
                      l.name.toLowerCase().includes(normalized) ||
                      normalized.includes(l.name.toLowerCase())
                  );
                  const href = matchedLoc ? `/locations/${matchedLoc.slug}` : `/locations`;

                  return (
                    <Link
                      key={i}
                      href={href}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F5F6F7] hover:bg-[#1683C7] text-xs font-bold text-[#171A1D] hover:text-white rounded-lg border border-[#E5E7EB] hover:border-[#1683C7] shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 group"
                    >
                      <span className="group-hover:scale-110 transition-transform">📍</span>
                      <span>{area}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
