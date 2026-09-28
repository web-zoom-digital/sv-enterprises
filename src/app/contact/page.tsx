import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { ContactForm } from "@/components/contact-form/contact-form";
import { MapSection } from "@/components/map/map";
import { FAQ } from "@/components/faq/faq";
import { CONTACT_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, MapPin, Clock, MessageSquare, Navigation } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact S V ENTERPRISES - Professional Audio Equipment Chintadripet",
  description:
    "Contact S V ENTERPRISES at 129/60, W Coovam Road, Chintadripet, Chennai. Phone: 099404 51673. Get price quotes for speakers, amplifiers, microphones, and PA systems.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: "Contact Us", url: "/contact" }];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Contact S V ENTERPRISES"
        description="Get in touch with our audio sales team in Chintadripet, Chennai for component quotes, stock checks, technical consultations, and commercial sound requirements."
        backgroundImage="/images/heroes/contact.jpg"
        breadcrumbItems={breadcrumbItems}
        badgeText="DIRECT STORE CONTACT • CHINTADRIPET, CHENNAI"
        primaryCTA={{
          text: "WhatsApp Message",
          href: SITE_CONFIG.whatsapp,
          icon: "whatsapp",
          variant: "whatsapp",
          external: true,
        }}
        secondaryCTA={{
          text: `Call: ${SITE_CONFIG.phone}`,
          href: `tel:${SITE_CONFIG.phoneRaw}`,
          icon: "call",
          variant: "call",
          external: true,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Grid: Contact Info Card & Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#171A1D]">
            Showroom Details
          </h2>

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
                  className="text-[#1683C7] font-bold text-lg hover:underline block mt-0.5"
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

          {/* Quick Action Buttons */}
          <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Message</span>
            </a>

            <a
              href={SITE_CONFIG.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#171A1D] hover:bg-black text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
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
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Contact FAQ */}
      <FAQ faqs={CONTACT_FAQS} title="Contact & Order FAQs" />
      </div>
    </div>
  );
}
