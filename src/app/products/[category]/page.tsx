import { CardImageSlider } from "@/components/ui/card-image-slider";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { PRODUCT_CATEGORIES, getCategoryBySlug } from "@/data/products";
import { getApplicationImage } from "@/data/application-images";
import { PRODUCTS_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";
import { WHATSAPP_NUMBER, createWhatsAppUrl } from "@/lib/whatsapp";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { getProductCategorySchema, getBreadcrumbSchema } from "@/lib/schema";
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileText,
  Sliders,
  Building,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return constructMetadata({
      title: "Category Not Found",
      description: "Requested product category could not be found.",
    });
  }

  return constructMetadata({
    title: category.seoHeading,
    description: category.fullDescription,
    path: `/products/${category.slug}`,
    ogImage: category.image,
  });
}

function getAppImage(app: string, categorySlug: string): string {
  const lowerApp = app.toLowerCase();

  if (lowerApp.includes("podium") || lowerApp.includes("public speaking") || lowerApp.includes("announcement")) {
    return "/images/heroes/microphones.jpg";
  }
  if (lowerApp.includes("conference") || lowerApp.includes("boardroom") || lowerApp.includes("meeting") || lowerApp.includes("seminar")) {
    return "/images/heroes/wireless-systems.jpg";
  }
  if (lowerApp.includes("worship") || lowerApp.includes("religious") || lowerApp.includes("temple") || lowerApp.includes("chant") || lowerApp.includes("prayer")) {
    return "/images/heroes/column-speakers.jpg";
  }
  if (lowerApp.includes("stage") || lowerApp.includes("performance") || lowerApp.includes("concert")) {
    return "/images/hero-slide-3.jpg";
  }
  if (lowerApp.includes("auditorium") || lowerApp.includes("event hall") || lowerApp.includes("multipurpose")) {
    return "/images/hero-slide-2.jpg";
  }
  if (lowerApp.includes("educational") || lowerApp.includes("school") || lowerApp.includes("college") || lowerApp.includes("lecture")) {
    return "/images/heroes/ceiling-speakers.jpg";
  }
  if (lowerApp.includes("horn") || lowerApp.includes("outdoor") || lowerApp.includes("industrial") || lowerApp.includes("factory") || lowerApp.includes("tower")) {
    return "/images/heroes/horn-speakers.jpg";
  }
  if (lowerApp.includes("pa") || lowerApp.includes("paging") || lowerApp.includes("centralized") || lowerApp.includes("building")) {
    return "/images/heroes/pa-systems.jpg";
  }
  if (lowerApp.includes("amplifier") || lowerApp.includes("booster") || lowerApp.includes("zone")) {
    return "/images/heroes/amplifiers.jpg";
  }
  if (lowerApp.includes("retail") || lowerApp.includes("showroom") || lowerApp.includes("hotel") || lowerApp.includes("cafe")) {
    return "/images/about-hero.jpg";
  }
  if (lowerApp.includes("accessory") || lowerApp.includes("bracket") || lowerApp.includes("cable") || lowerApp.includes("rack")) {
    return "/images/heroes/accessories.jpg";
  }
  if (lowerApp.includes("mixer") || lowerApp.includes("studio") || lowerApp.includes("tuning")) {
    return "/images/heroes/mixers.jpg";
  }

  if (categorySlug) {
    return `/images/heroes/${categorySlug}.jpg`;
  }
  return "/images/heroes/speakers.jpg";
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Products", url: "/products" },
    { name: category.name, url: `/products/${category.slug}` },
  ];

  const relatedCategories = PRODUCT_CATEGORIES.filter((cat) =>
    category.relatedCategories.includes(cat.slug)
  );

  const categorySchema = getProductCategorySchema({
    name: category.name,
    description: category.fullDescription,
    slug: category.slug,
  });
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  const heroImage = `/images/heroes/${category.slug}.jpg`;

  const categoryWhatsappMessage =
    `Hello S V Enterprises,\n\n` +
    `I am interested in your *${category.name}* equipment.\n\n` +
    `Source Page: ${SITE_CONFIG.url}/products/${category.slug}\n\n` +
    `Please share details, model specifications, and pricing.`;
  const categoryWhatsappUrl = createWhatsAppUrl(WHATSAPP_NUMBER, categoryWhatsappMessage);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Hero (Full Screen Width) */}
      <PageHero
        title={category.seoHeading}
        description={category.fullDescription}
        backgroundImage={heroImage}
        breadcrumbItems={breadcrumbItems}
        badgeText={`${category.name.toUpperCase()} • S V ENTERPRISES`}
        primaryCTA={{
          text: "Get a Quote",
          href: "/contact",
          icon: "quote",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "WhatsApp Enquiry",
          href: categoryWhatsappUrl,
          icon: "whatsapp",
          variant: "whatsapp",
          external: true,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Product Overview Section: Left Bullet Points, Right Image */}
        <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Content & Bullet Points */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
                Product Overview & Features
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
                {category.name} Range & Technical Highlights
              </h2>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {category.fullDescription}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#1683C7] uppercase tracking-wider">
                  Key Features & Capabilities:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl hover:border-[#1683C7]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1683C7] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#171A1D]">
                        {feat}
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
                  <span>Request Quote & Price</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#171A1D] hover:bg-black text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <FaPhone className="w-4 h-4 text-sky-400" />
                  <span>Call Hotline</span>
                </a>
              </div>
            </div>

            {/* Right Side: Product Category Image Slider (5 second auto slide) */}
            <div className="lg:col-span-5 relative">
              <CardImageSlider
                images={[
                  category.image,
                  heroImage,
                  "/images/about-hero.jpg",
                  "/images/hero-slide-2.jpg",
                ]}
                badge="Verified Audio Stock"
                title={`${category.name} at Chintadripet Store`}
              />
            </div>
          </div>
        </section>

        {/* Recommended Applications (Visual Cards with Venue Photography & Context) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
              Acoustic Suitability
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1D] tracking-tight">
              Recommended Applications for {category.name}
            </h2>
            <p className="text-sm text-[#6B7280]">
              Discover how our {category.name.toLowerCase()} hardware is deployed across commercial, institutional, and religious sound installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.applications.map((app, i) => {
              // Dedicated unique commercial photography asset & descriptive alt text for every application
              const appImageData = getApplicationImage(category.slug, app);

              return (
                <div
                  key={i}
                  className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#1683C7]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Dedicated Ultrarealistic Venue Photography */}
                    <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                      <Image
                        src={appImageData.image}
                        alt={appImageData.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-sky-300">
                          📍 Venue Application #{i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 space-y-2">
                      <h3 className="text-base font-bold text-[#171A1D] group-hover:text-[#1683C7] transition-colors">
                        {app}
                      </h3>
                      <p className="text-xs text-[#6B7280] leading-relaxed">
                        Engineered for optimal voice intelligibility, continuous duty power handling, and acoustic sound distribution tailored for {app.toLowerCase()} environments.
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1683C7] group-hover:text-[#126fa9] transition-colors"
                    >
                      <span>Get Solution Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Product Detail Architecture / Premium Specifications & Purchasing Guidance */}
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
              Product specifications vary by wattage, 70V/100V line transformer taps, impedance matching, and acoustic environment. S V ENTERPRISES does not display unverified claims. Contact our Chintadripet showroom directly for exact model numbers, stock verification, and custom price estimates.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaPhone className="w-4 h-4 text-white" />
              <span>Speak with Audio Specialist</span>
            </a>

            <a
              href={categoryWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>Send WhatsApp Specs Inquiry</span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <CTA title={`Interested in ${category.name} for Your Venue?`} />

        {/* FAQ */}
        <FAQ faqs={PRODUCTS_FAQS} title={`${category.name} FAQs`} />

        {/* Map */}
        <MapSection title="Visit Our Chintadripet Showroom for Stock Inspection" />

        {/* Related Categories (Moved below Map section) */}
        {relatedCategories.length > 0 && (
          <section className="space-y-6 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#1683C7]/10 border border-[#1683C7]/30 text-xs font-bold text-[#1683C7] uppercase tracking-wider">
                Explore More
              </span>
              <h2 className="text-2xl font-bold text-[#171A1D]">
                Related Product Categories
              </h2>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 sm:pb-0 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="min-w-[75%] sm:min-w-0 snap-start shrink-0 sm:shrink bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#1683C7] transition-all shadow-xs group flex items-center justify-between"
                >
                  <span className="font-bold text-sm text-[#171A1D] group-hover:text-[#1683C7]">
                    {rel.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#1683C7] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
