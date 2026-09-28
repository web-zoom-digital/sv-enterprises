import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { CTA } from "@/components/cta/cta";
import { FAQ } from "@/components/faq/faq";
import { MapSection } from "@/components/map/map";
import { BLOG_POSTS, getBlogBySlug } from "@/data/blogs";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { LOCATIONS } from "@/data/locations";
import { formatDate } from "@/lib/utils";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, User, ArrowRight, List, ShieldCheck } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
      description: "Requested blog article could not be found.",
    });
  }

  return constructMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.featuredImage,
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const relatedProducts = PRODUCT_CATEGORIES.filter((c) =>
    post.relatedProductSlugs.includes(c.slug)
  );

  const relatedLocations = LOCATIONS.filter((l) =>
    post.relatedLocationSlugs.includes(l.slug)
  );

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
    image: post.featuredImage,
  });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Hero (Full Screen Width) */}
      <PageHero
        title={post.title}
        description={post.description}
        backgroundImage={post.featuredImage}
        breadcrumbItems={breadcrumbItems}
        badgeText={`AUDIO GUIDE • BY ${post.author.toUpperCase()}`}
        primaryCTA={{
          text: "Explore Products",
          href: "/products",
          icon: "arrow",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "Get Quote",
          href: "/contact",
          icon: "quote",
          variant: "secondary",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Article Meta Bar */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-xs">
        <span className="flex items-center gap-1.5 font-semibold text-[#1683C7]">
          <User className="w-4 h-4" />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          Published: {formatDate(post.publishedAt)}
        </span>
        {post.updatedAt && (
          <span className="flex items-center gap-1.5 text-gray-500">
            Updated: {formatDate(post.updatedAt)}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>

      {/* Table of Contents */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <nav
          aria-label="Table of contents"
          className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs space-y-3"
        >
          <div className="flex items-center gap-2 text-base font-bold text-[#171A1D]">
            <List className="w-5 h-5 text-[#1683C7]" />
            <span>Table of Contents</span>
          </div>

          <ul className="space-y-2 text-sm text-[#1683C7] font-semibold">
            {post.tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Main Body Content */}
      <article
        className="prose prose-lg max-w-none text-[#171A1D] leading-relaxed space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Products Internal Links */}
      {relatedProducts.length > 0 && (
        <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#171A1D] text-center">
            Related Audio Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {relatedProducts.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="p-4 bg-[#F5F6F7] hover:bg-gray-200 border border-[#E5E7EB] rounded-xl flex items-center justify-between transition-colors group"
              >
                <div>
                  <h3 className="font-bold text-sm text-[#171A1D] group-hover:text-[#1683C7]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] line-clamp-1">{cat.shortDescription}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#1683C7] shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Locations Internal Links */}
      {relatedLocations.length > 0 && (
        <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#171A1D] text-center">
            Relevant Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {relatedLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-3.5 py-1.5 bg-[#F5F6F7] hover:bg-gray-200 text-xs font-bold text-[#171A1D] border border-[#E5E7EB] rounded-lg transition-colors"
              >
                📍 {loc.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Article FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQ faqs={post.faqs} title="Article FAQs" />
      )}

      {/* CTA */}
      <CTA title="Have Questions About Component Compatibility?" />

      {/* Map */}
      <MapSection />
      </div>
    </div>
  );
}
