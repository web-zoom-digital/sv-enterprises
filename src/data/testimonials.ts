export interface TestimonialItem {
  id: string;
  clientCategory: string;
  clientName: string;
  location: string;
  rating: number;
  feedbackPlaceholder: string;
  isPlaceholder: boolean;
}

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientCategory: "Institutional Auditoriums",
    clientName: "Rajesh Krishnan",
    location: "Chennai",
    rating: 5,
    feedbackPlaceholder:
      "High voice clarity and reliable amplifier performance supplied for campus auditoriums. Outstanding technical advice on matching speaker taps.",
    isPlaceholder: true,
  },
  {
    id: "test-2",
    clientCategory: "Religious Facilities",
    clientName: "Rev. Fr. Thomas",
    location: "Chintadripet, Chennai",
    rating: 5,
    feedbackPlaceholder:
      "Weatherproof reflex horn speakers and column speaker solutions provided with prompt store support. Excellent acoustic clarity during large gatherings.",
    isPlaceholder: true,
  },
  {
    id: "test-3",
    clientCategory: "Commercial Facilities",
    clientName: "S. Venkatraman",
    location: "Ambattur Industrial Estate",
    rating: 5,
    feedbackPlaceholder:
      "Heavy-duty PA system components and multi-zone paging amplifiers delivered for industrial facility use. Reliable continuous operation.",
    isPlaceholder: true,
  },
  {
    id: "test-4",
    clientCategory: "Educational Institutions",
    clientName: "Dr. K. Ananthi",
    location: "Egmore, Chennai",
    rating: 5,
    feedbackPlaceholder:
      "Excellent podium microphone setup and campus-wide PA bell chimer system supplied for daily operations. Genuine products with full support.",
    isPlaceholder: true,
  },
  
 
  
  {
    id: "test-8",
    clientCategory: "Industrial Paging Systems",
    clientName: "R. Murali",
    location: "Sriperumbudur",
    rating: 5,
    feedbackPlaceholder:
      "100V constant-voltage reflex horn speakers and zone selectors supplied for factory plant floors. Exceptional volume coverage.",
    isPlaceholder: true,
  },
  {
    id: "test-9",
    clientCategory: "Corporate Conference Centers",
    clientName: "A. Arvind",
    location: "Guindy, Chennai",
    rating: 5,
    feedbackPlaceholder:
      "UHF wireless microphone systems and low-noise mixing consoles configured for executive boardrooms. Seamless signal stability.",
    isPlaceholder: true,
  },
];
