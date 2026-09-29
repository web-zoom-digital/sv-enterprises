export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  seoHeading: string;
  image: string;
  featuredInHome?: boolean;
  applications: string[];
  features: string[];
  relatedCategories: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "speakers",
    slug: "speakers",
    name: "Speakers",
    shortDescription:
      "High-output cabinet speakers, stage monitors, and sound reinforcement speakers for commercial venue clarity.",
    fullDescription:
      "S V Enterprises offers a complete selection of professional audio speakers suited for commercial venues, auditoriums, places of worship, outdoor spaces, and institutions across Chennai. Engineered for voice intelligibility and reliable continuous performance.",
    seoHeading: "Professional Speakers Dealer in Chintadripet, Chennai",
    image: "/products/speakers.jpg",
    featuredInHome: true,
    applications: [
      "Auditoriums & Event Halls",
      "Places of Worship & Temples",
      "Educational Institutions & Lecture Halls",
      "Commercial Retail & Showrooms",
      "Outdoor Announcement Systems",
    ],
    features: [
      "High sensitivity & voice clarity acoustic designs",
      "Rugged enclosure construction for heavy-duty daily use",
      "Multiple impedance & line voltage (70V/100V) options",
      "Flexible mounting options (wall bracket, pole mount, stand)",
    ],
    relatedCategories: ["amplifiers", "pa-systems", "column-speakers", "horn-speakers"],
  },
  {
    id: "amplifiers",
    slug: "amplifiers",
    name: "Amplifiers",
    shortDescription:
      "Power amplifiers and booster units engineered for continuous commercial duty, high efficiency, and thermal protection.",
    fullDescription:
      "Explore high-power audio amplifiers designed to drive high-impedance PA lines and low-impedance speaker setups seamlessly. S V Enterprises supplies robust amplifiers built with overload protection, active cooling, and clean signal reproduction.",
    seoHeading: "Commercial Audio Amplifier Dealer in Chennai",
    image: "/products/amplifiers.jpg",
    featuredInHome: true,
    applications: [
      "Centralized PA & Paging Systems",
      "Conference Rooms & Boardrooms",
      "Multi-zone Background Music Installations",
      "Large Public Venues & Arenas",
    ],
    features: [
      "High-power output channels with minimal THD distortion",
      "Integrated overload, short-circuit & thermal safeguards",
      "Support for 70V / 100V line transformers and 4-16 Ohm loads",
      "Independent zone volume knobs and balance controls",
    ],
    relatedCategories: ["speakers", "mixers", "pa-systems", "microphones"],
  },
  {
    id: "microphones",
    slug: "microphones",
    name: "Microphones",
    shortDescription:
      "Dynamic handheld, gooseneck podium, and clip-on microphones built for crystal-clear speech reproduction.",
    fullDescription:
      "From podium gooseneck microphones for conference halls to durable handheld dynamic mics for public announcements, S V Enterprises supplies reliable microphone equipment tailored to your exact audio environment.",
    seoHeading: "Professional Microphones Dealer in Chintadripet, Chennai",
    image: "/products/microphones.jpg",
    featuredInHome: true,
    applications: [
      "Public Speaking & Podium Addresses",
      "Conferences & Boardroom Meetings",
      "Religious Recitations & Chants",
      "Stage Performances & Event Announcements",
    ],
    features: [
      "Unidirectional cardioid pickup patterns to reduce feedback",
      "Heavy-duty metallic body construction",
      "High signal-to-noise ratio for pristine voice articulation",
      "Standard XLR and jack connectivity options",
    ],
    relatedCategories: ["wireless-systems", "mixers", "pa-systems"],
  },
  {
    id: "mixers",
    slug: "mixers",
    name: "Mixers",
    shortDescription:
      "Multi-channel audio mixing consoles for smooth sound balance, equalizer control, and signal routing.",
    fullDescription:
      "Achieve precise audio management with audio mixers offered by S V Enterprises. Features include multiple microphone inputs, stereo channels, parametric equalizer controls, digital delay effects, and robust signal output routing.",
    seoHeading: "Audio Mixing Console Dealer in Chennai",
    image: "/products/mixers.jpg",
    featuredInHome: true,
    applications: [
      "Live Sound Reinforcement",
      "Multi-Mic Paging Systems",
      "Institutional Assemblies & Auditoriums",
      "Houses of Worship Sound Booths",
    ],
    features: [
      "Low-noise preamplifiers across all microphone channels",
      "Multi-band channel equalizer control",
      "Built-in digital echo/delay effects for ambient clarity",
      "Versatile auxiliary and main master outputs",
    ],
    relatedCategories: ["amplifiers", "microphones", "speakers"],
  },
  {
    id: "pa-systems",
    slug: "pa-systems",
    name: "PA Systems",
    shortDescription:
      "Integrated public address systems for clear voice announcements, paging, and background audio.",
    fullDescription:
      "Complete public address solutions including mixer-amplifiers, horn speakers, zone selectors, and desktop paging microphones. Ideal for factories, schools, hospitals, railway stations, and public institutions.",
    seoHeading: "Public Address PA System Dealer in Chintadripet, Chennai",
    image: "/products/pa-systems.jpg",
    featuredInHome: true,
    applications: [
      "Educational Campus Announcements",
      "Factory & Industrial Paging",
      "Hospital & Clinic Nurse Call / Announcements",
      "Transportation Hubs & Parking Lots",
    ],
    features: [
      "All-in-one integrated mixer-amplifier architecture",
      "Multi-zone speaker switching and paging control",
      "Emergency priority announcement overrides",
      "High reliability for continuous non-stop operation",
    ],
    relatedCategories: ["horn-speakers", "ceiling-speakers", "amplifiers"],
  },
  {
    id: "wireless-systems",
    slug: "wireless-systems",
    name: "Wireless Audio Systems",
    shortDescription:
      "VHF/UHF multi-channel wireless mic systems with reliable reception range and crystal-clear acoustic quality.",
    fullDescription:
      "Eliminate tangled cables with advanced wireless audio receiver setups. S V Enterprises supplies dual-channel and multi-channel handheld, lapel, and headset wireless systems for seamless movement during presentations.",
    seoHeading: "Wireless Audio Systems Dealer in Chennai",
    image: "/products/wireless-systems.jpg",
    featuredInHome: true,
    applications: [
      "Stage Presentations & Seminars",
      "Fitness Studios & Training Halls",
      "Outdoor Event Rallies",
      "Interactive Q&A Paging",
    ],
    features: [
      "Clean frequency spectrum selection to avoid interference",
      "Extended wireless reception range up to 50+ meters",
      "Low battery indicators & long battery operating life",
      "Balanced XLR and unbalanced 1/4\" jack output options",
    ],
    relatedCategories: ["microphones", "mixers", "pa-systems"],
  },
  {
    id: "horn-speakers",
    slug: "horn-speakers",
    name: "Horn Speakers",
    shortDescription:
      "Weatherproof reflex horn speakers for high sound projection over large outdoor areas.",
    fullDescription:
      "Reflex horn speakers engineered for maximum sound throw and speech penetration in noisy outdoor environments. High-grade aluminum housings withstand extreme weather conditions.",
    seoHeading: "Weatherproof Reflex Horn Speakers Dealer in Chennai",
    image: "/products/horn-speakers.jpg",
    featuredInHome: false,
    applications: [
      "Temple Towers & Mosques",
      "Industrial Plants & Construction Sites",
      "Sports Stadiums & Parade Grounds",
      "Traffic Control & Public Safety",
    ],
    features: [
      "Weather-resistant powder-coated aluminum construction",
      "High acoustic conversion efficiency for long sound throw",
      "100V line matching transformer input options",
      "Heavy-duty mounting brackets included",
    ],
    relatedCategories: ["pa-systems", "amplifiers", "speakers"],
  },
  {
    id: "ceiling-speakers",
    slug: "ceiling-speakers",
    name: "Ceiling Speakers",
    shortDescription:
      "Flush-mount ceiling speakers for clean, unobtrusive interior background music and paging.",
    fullDescription:
      "Aesthetic ceiling speakers designed for seamless ceiling installation in corporate offices, retail stores, hotels, and hospital corridors.",
    seoHeading: "Flush Mount Ceiling Speakers Dealer in Chennai",
    image: "/products/ceiling-speakers.jpg",
    featuredInHome: false,
    applications: [
      "Corporate Office Corridors",
      "Retail Showrooms & Malls",
      "Hotels & Fine Dining Restaurants",
      "Hospitals & Clinics",
    ],
    features: [
      "Ultra-slim bezel design with magnetic metal grille",
      "Built-in 100V line transformer with power tappings",
      "Quick spring-clamp installation system",
      "Balanced wide-dispersion sound pattern",
    ],
    relatedCategories: ["column-speakers", "pa-systems", "amplifiers"],
  },
  {
    id: "column-speakers",
    slug: "column-speakers",
    name: "Column Speakers",
    shortDescription:
      "Slim indoor/outdoor column speakers offering narrow vertical dispersion for reverberant spaces.",
    fullDescription:
      "Acoustically tuned vertical column speakers built to deliver high speech clarity in reverberant spaces such as auditoriums, churches, and marble halls.",
    seoHeading: "Sound Column Speakers Dealer in Chintadripet, Chennai",
    image: "/products/column-speakers.jpg",
    featuredInHome: false,
    applications: [
      "Churches & Religious Auditoriums",
      "Acoustically Echo-Prone Halls",
      "Conference Rooms",
      "Museums & Art Galleries",
    ],
    features: [
      "Extruded metal body with protective metal front grille",
      "Vertical array arrangement for reduced ceiling/floor reflections",
      "Adjustable wall-mount tilt brackets",
      "Multi-tap 100V transformer built-in",
    ],
    relatedCategories: ["speakers", "ceiling-speakers", "pa-systems"],
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Accessories",
    shortDescription:
      "Audio cables, speaker stands, microphone stands, wall brackets, and rack mount hardware.",
    fullDescription:
      "Complete your audio installation with commercial-grade accessories from S V Enterprises. We stock heavy-duty speaker stands, gooseneck stands, microphone cables, line transformers, and mounting brackets.",
    seoHeading: "Professional Audio Accessories Supplier in Chennai",
    image: "/products/accessories.jpg",
    featuredInHome: false,
    applications: [
      "System Installation & Cable Management",
      "Portable Event Setups",
      "Rack Mounting Audio Gear",
      "Custom Speaker Mounting",
    ],
    features: [
      "Oxygen-free copper (OFC) shielded audio cables",
      "Heavy-gauge metal speaker tripods & mic stands",
      "Durable XLR, Speakon, and 6.35mm jack connectors",
      "Robust wall mounting brackets with tilt options",
    ],
    relatedCategories: ["microphones", "speakers", "amplifiers", "road-cases"],
  },
  {
    id: "road-cases",
    slug: "road-cases",
    name: "ROAD CASES / ALL TYPES OF CUSTOMIZED FLIGHT CASES",
    shortDescription:
      "Explore road cases and customized flight cases designed for transporting, organizing, and protecting professional audio equipment. Contact S V ENTERPRISES for product availability and customization enquiries.",
    fullDescription:
      "S V Enterprises supplies durable road cases and customized flight cases designed for transporting, organizing, and protecting professional audio equipment, power amplifiers, mixing consoles, speakers, and delicate audio accessories across Chennai.",
    seoHeading: "Professional Road Cases & Customized Flight Cases Dealer in Chennai",
    image: "/products/road-cases.jpg",
    featuredInHome: false,
    applications: [
      "Touring & Live Event Equipment Transport",
      "Audio Rack & Power Amplifier Protection",
      "Mixing Console & DJ Gear Transit",
      "Microphone & Cable Storage Racks",
    ],
    features: [
      "Heavy-duty aluminum extrusions & reinforced chrome ball corners",
      "High-density impact shock-absorbing interior EVA foam lining",
      "Industrial recessed butterfly latches & spring-loaded handles",
      "Heavy-duty caster wheels with foot brakes for mobile transport",
    ],
    relatedCategories: ["amplifiers", "mixers", "speakers", "accessories"],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}
