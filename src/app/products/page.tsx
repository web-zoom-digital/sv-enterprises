import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { PRODUCTS_FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = constructMetadata({
  title: "Professional Audio Equipment Categories - S V ENTERPRISES",
  description:
    "Explore professional audio equipment categories at S V ENTERPRISES Chintadripet, Chennai. Speakers, power amplifiers, microphones, mixers, PA systems, and horn speakers.",
  path: "/products",
});

export default function ProductsIndexPage() {
  const breadcrumbItems = [{ name: "Products", url: "/products" }];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Professional Audio Equipment & Sound Solutions"
        description="S V ENTERPRISES in Chintadripet, Chennai supplies complete commercial sound systems. Explore our specialized product categories below for heavy-duty acoustic performance."
        backgroundImage="/images/heroes/products.png"
        breadcrumbItems={breadcrumbItems}
        badgeText="FULL PRODUCT CATALOG • CHINTADRIPET SHOWROOM"
        primaryCTA={{
          text: "Get a Quote",
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
        {/* Product Grid */}
        <section>
          <ProductGrid categories={PRODUCT_CATEGORIES} />
        </section>

        {/* CTA */}
        <CTA title="Need Help Choosing the Right Audio Equipment?" />

        {/* FAQ */}
        <FAQ faqs={PRODUCTS_FAQS} title="Product Category FAQs" />

        {/* Map */}
        <MapSection />
      </div>
    </div>
  );
}
