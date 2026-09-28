import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { LocationCard } from "@/components/location-card/location-card";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { LOCATIONS } from "@/data/locations";
import { LOCATIONS_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = constructMetadata({
  title: "Service Areas & Locations - Professional Audio Equipment Chennai",
  description:
    "S V ENTERPRISES supplies professional audio equipment across Chennai (Chintadripet, Egmore, Triplicane, T. Nagar, Ambattur) as well as Tiruvallur, Kanchipuram, and Chengalpattu.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  const breadcrumbItems = [{ name: "Locations", url: "/locations" }];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Professional Audio Equipment Near You"
        description="Explore the service areas covered by S V ENTERPRISES across Chennai and nearby regions. Central showroom in Chintadripet with direct dispatch across Tamil Nadu."
        backgroundImage="/images/heroes/locations.png"
        breadcrumbItems={breadcrumbItems}
        badgeText="CHENNAI & NEIGHBORING DISTRICTS DISTRIBUTION"
        primaryCTA={{
          text: "Contact Showroom",
          href: "/contact",
          icon: "quote",
          variant: "primary",
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
        {/* Locations Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {LOCATIONS.map((location) => (
            <div key={location.slug} className="flex flex-col">
              <LocationCard location={location} />
            </div>
          ))}
        </section>

        {/* CTA */}
        <CTA title="Looking for Audio Equipment Supply in Your Area?" />

        {/* FAQ */}
        <FAQ faqs={LOCATIONS_FAQS} title="Location & Service Area FAQs" />

        {/* Map */}
        <MapSection />
      </div>
    </div>
  );
}
