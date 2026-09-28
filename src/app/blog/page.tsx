import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { BlogCard } from "@/components/blog-card/blog-card";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { BLOG_POSTS } from "@/data/blogs";
import { HOME_FAQS } from "@/data/faqs";

export const metadata = constructMetadata({
  title: "Professional Audio Blog & Equipment Guides - S V ENTERPRISES",
  description:
    "Read practical guides on PA systems, commercial speakers, amplifier matching, and professional audio equipment in Chennai by S V ENTERPRISES.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const breadcrumbItems = [{ name: "Blog", url: "/blog" }];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Audio Equipment Buying Guides & Technical Insights"
        description="Practical advice from the technical team at S V ENTERPRISES, Chintadripet. Learn about speaker selection, amplifier matching, PA system setups, and commercial sound installation."
        backgroundImage="/images/heroes/blog.jpg"
        breadcrumbItems={breadcrumbItems}
        badgeText="AUDIO KNOWLEDGE CENTER • TECHNICAL GUIDES"
        primaryCTA={{
          text: "Explore Products",
          href: "/products",
          icon: "arrow",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "Contact Specialists",
          href: "/contact",
          icon: "quote",
          variant: "secondary",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Blog Cards Grid */}
        <section className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 md:pb-0 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.slug} className="min-w-[84%] md:min-w-0 snap-start shrink-0 md:shrink flex flex-col">
              <BlogCard post={post} />
            </div>
          ))}
        </section>

        {/* CTA */}
        <CTA title="Have Questions About an Audio Setup?" />

        {/* FAQ */}
        <FAQ faqs={HOME_FAQS} title="Audio Guide & Consultation FAQs" />

        {/* Map */}
        <MapSection />
      </div>
    </div>
  );
}
