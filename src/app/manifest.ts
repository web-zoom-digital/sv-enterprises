import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "S V ENTERPRISES",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F6F7",
    theme_color: "#1683C7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
