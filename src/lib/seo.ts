import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = "/images/hero.jpg",
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  const defaultKeywords = [
    "S V ENTERPRISES",
    "Ahuja Dealers Chennai",
    "Professional Audio Equipment Dealer",
    "PA System Dealer in Chintadripet",
    "Audio Equipment Dealer in Chennai",
    "Professional Speakers Chennai",
    "Amplifiers Dealer Chennai",
    "Microphones Chintadripet",
    "Mixers Chennai",
    "Horn Speakers Chennai",
  ];

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords: [...keywords, ...defaultKeywords].join(", "),
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
