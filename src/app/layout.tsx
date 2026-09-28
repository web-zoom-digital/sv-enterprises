import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { MobileBottomBar } from "@/components/mobile-bottom-bar/mobile-bottom-bar";
import { FloatingWidgets } from "@/components/floating-widgets/floating-widgets";
import { MobileMenuProvider } from "@/context/mobile-menu-context";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Professional Audio Equipment Dealer in Chennai`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: [
      { url: "/logo/sv-enterprises.jpeg", type: "image/jpeg" },
      { url: "/logo/sv-enterprises-logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/logo/sv-enterprises.jpeg",
    apple: "/logo/sv-enterprises.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo/sv-enterprises.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo/sv-enterprises.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo/sv-enterprises.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F6F7] text-[#171A1D] antialiased">
        <MobileMenuProvider>
          <Navbar />
          <main className="flex-grow pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
          <FloatingWidgets />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
