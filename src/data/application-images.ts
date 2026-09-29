export interface ApplicationImageData {
  image: string;
  alt: string;
}

export const APPLICATION_IMAGES: Record<string, Record<string, ApplicationImageData>> = {
  speakers: {
    "Auditoriums & Event Halls": {
      image: "/images/applications/speakers/auditoriums-and-event-halls.jpg",
      alt: "Professional auditorium cabinet speakers installed in event hall venue - S V ENTERPRISES",
    },
    "Places of Worship & Temples": {
      image: "/images/applications/speakers/places-of-worship-and-temples.jpg",
      alt: "Acoustic speakers installed in sanctuary place of worship - S V ENTERPRISES",
    },
    "Educational Institutions & Lecture Halls": {
      image: "/images/applications/speakers/educational-institutions-and-lecture-halls.jpg",
      alt: "Public address speakers installed in educational lecture hall - S V ENTERPRISES",
    },
    "Commercial Retail & Showrooms": {
      image: "/images/applications/speakers/commercial-retail-and-showrooms.jpg",
      alt: "Commercial speakers integrated in retail showroom interior - S V ENTERPRISES",
    },
    "Outdoor Announcement Systems": {
      image: "/images/applications/speakers/outdoor-announcement-systems.jpg",
      alt: "Heavy duty outdoor announcement speakers setup - S V ENTERPRISES",
    },
  },

  amplifiers: {
    "Centralized PA & Paging Systems": {
      image: "/images/applications/amplifiers/centralized-pa-and-paging-systems.jpg",
      alt: "Commercial rackmount power amplifiers for centralized PA paging - S V ENTERPRISES",
    },
    "Conference Rooms & Boardrooms": {
      image: "/images/applications/amplifiers/conference-rooms-and-boardrooms.jpg",
      alt: "Audio power amplifier setup for executive conference room - S V ENTERPRISES",
    },
    "Multi-zone Background Music Installations": {
      image: "/images/applications/amplifiers/multi-zone-background-music-installations.jpg",
      alt: "Multi zone background music amplifier hardware installation - S V ENTERPRISES",
    },
    "Large Public Venues & Arenas": {
      image: "/images/applications/amplifiers/large-public-venues-and-arenas.jpg",
      alt: "High capacity commercial power amplifiers for large venues - S V ENTERPRISES",
    },
  },

  microphones: {
    "Public Speaking & Podium Addresses": {
      image: "/images/applications/microphones/public-speaking-and-podium-addresses.jpg",
      alt: "Professional podium gooseneck microphone for public speech address - S V ENTERPRISES",
    },
    "Conferences & Boardroom Meetings": {
      image: "/images/applications/microphones/conferences-and-boardroom-meetings.jpg",
      alt: "Desktop conference microphones on boardroom meeting table - S V ENTERPRISES",
    },
    "Religious Recitations & Chants": {
      image: "/images/applications/microphones/religious-recitations-and-chants.jpg",
      alt: "Dynamic microphone setup for sanctuary recitations and chants - S V ENTERPRISES",
    },
    "Stage Performances & Event Announcements": {
      image: "/images/applications/microphones/stage-performances-and-event-announcements.jpg",
      alt: "Stage microphone on heavy duty stand for event announcements - S V ENTERPRISES",
    },
  },

  mixers: {
    "Live Sound Reinforcement": {
      image: "/images/applications/mixers/live-sound-reinforcement.jpg",
      alt: "Multi channel audio mixing console for live sound reinforcement - S V ENTERPRISES",
    },
    "Multi-Mic Paging Systems": {
      image: "/images/applications/mixers/multi-mic-paging-systems.jpg",
      alt: "Audio mixer console for multi mic public paging system - S V ENTERPRISES",
    },
    "Institutional Assemblies & Auditoriums": {
      image: "/images/applications/mixers/institutional-assemblies-and-auditoriums.jpg",
      alt: "Audio control booth mixing console for auditorium assemblies - S V ENTERPRISES",
    },
    "Houses of Worship Sound Booths": {
      image: "/images/applications/mixers/houses-of-worship-sound-booths.jpg",
      alt: "Sanctuary sound booth audio mixing console setup - S V ENTERPRISES",
    },
  },

  "pa-systems": {
    "Educational Campus Announcements": {
      image: "/images/applications/pa-systems/educational-campus-announcements.jpg",
      alt: "Campus wide public address PA speakers for educational announcements - S V ENTERPRISES",
    },
    "Factory & Industrial Paging": {
      image: "/images/applications/pa-systems/factory-and-industrial-paging.jpg",
      alt: "Industrial factory floor public address paging speakers setup - S V ENTERPRISES",
    },
    "Hospital & Clinic Nurse Call / Announcements": {
      image: "/images/applications/pa-systems/hospital-and-clinic-nurse-call-announcements.jpg",
      alt: "Hospital corridor flush ceiling PA paging speakers for nurse call - S V ENTERPRISES",
    },
    "Transportation Hubs & Parking Lots": {
      image: "/images/applications/pa-systems/transportation-hubs-and-parking-lots.jpg",
      alt: "Overhead PA announcement speakers at transit hub station - S V ENTERPRISES",
    },
  },

  "wireless-systems": {
    "Stage Presentations & Seminars": {
      image: "/images/applications/wireless-systems/stage-presentations-and-seminars.jpg",
      alt: "Wireless microphone receiver setup for corporate stage seminar - S V ENTERPRISES",
    },
    "Fitness Studios & Training Halls": {
      image: "/images/applications/wireless-systems/fitness-studios-and-training-halls.jpg",
      alt: "Wireless headset mic receiver for fitness studio audio - S V ENTERPRISES",
    },
    "Outdoor Event Rallies": {
      image: "/images/applications/wireless-systems/outdoor-event-rallies.jpg",
      alt: "Multi channel wireless audio receiver system for outdoor event - S V ENTERPRISES",
    },
    "Interactive Q&A Paging": {
      image: "/images/applications/wireless-systems/interactive-qa-paging.jpg",
      alt: "Handheld wireless microphones setup for auditorium Q and A - S V ENTERPRISES",
    },
  },

  "horn-speakers": {
    "Temple Towers & Mosques": {
      image: "/images/applications/horn-speakers/temple-towers-and-mosques.jpg",
      alt: "Weatherproof reflex horn speakers for temple towers long distance sound - S V ENTERPRISES",
    },
    "Industrial Plants & Construction Sites": {
      image: "/images/applications/horn-speakers/industrial-plants-and-construction-sites.jpg",
      alt: "Industrial grade reflex horn speakers installed on steel beams - S V ENTERPRISES",
    },
    "Sports Stadiums & Parade Grounds": {
      image: "/images/applications/horn-speakers/sports-stadiums-and-parade-grounds.jpg",
      alt: "Outdoor sports stadium grandstand horn speakers setup - S V ENTERPRISES",
    },
    "Traffic Control & Public Safety": {
      image: "/images/applications/horn-speakers/traffic-control-and-public-safety.jpg",
      alt: "Municipal emergency public address horn speakers mast - S V ENTERPRISES",
    },
  },

  "ceiling-speakers": {
    "Corporate Office Corridors": {
      image: "/images/applications/ceiling-speakers/corporate-office-corridors.jpg",
      alt: "Flush mounted white ceiling speakers in corporate office hallway - S V ENTERPRISES",
    },
    "Retail Showrooms & Malls": {
      image: "/images/applications/ceiling-speakers/retail-showrooms-and-malls.jpg",
      alt: "Aesthetic ceiling speakers integrated in luxury retail showroom - S V ENTERPRISES",
    },
    "Hotels & Fine Dining Restaurants": {
      image: "/images/applications/ceiling-speakers/hotels-and-fine-dining-restaurants.jpg",
      alt: "Discreet flush ceiling speakers in hotel dining room interior - S V ENTERPRISES",
    },
    "Hospitals & Clinics": {
      image: "/images/applications/ceiling-speakers/hospitals-and-clinics.jpg",
      alt: "Flush ceiling acoustic speakers in medical clinic reception - S V ENTERPRISES",
    },
  },

  "column-speakers": {
    "Churches & Religious Auditoriums": {
      image: "/images/applications/column-speakers/churches-and-religious-auditoriums.jpg",
      alt: "Slim white sound column speakers mounted on stone sanctuary pillars - S V ENTERPRISES",
    },
    "Acoustically Echo-Prone Halls": {
      image: "/images/applications/column-speakers/acoustically-echo-prone-halls.jpg",
      alt: "Vertical array column speakers for high speech clarity in marble hall - S V ENTERPRISES",
    },
    "Conference Rooms": {
      image: "/images/applications/column-speakers/conference-rooms.jpg",
      alt: "Wall mounted acoustic column speakers in corporate conference room - S V ENTERPRISES",
    },
    "Museums & Art Galleries": {
      image: "/images/applications/column-speakers/museums-and-art-galleries.jpg",
      alt: "Minimalist sound column speakers mounted on art gallery walls - S V ENTERPRISES",
    },
  },

  accessories: {
    "System Installation & Cable Management": {
      image: "/images/applications/accessories/system-installation-and-cable-management.jpg",
      alt: "Organized heavy duty shielded XLR audio cables in equipment rack - S V ENTERPRISES",
    },
    "Portable Event Setups": {
      image: "/images/applications/accessories/portable-event-setups.jpg",
      alt: "Heavy duty metallic speaker tripod stands for portable event setup - S V ENTERPRISES",
    },
    "Rack Mounting Audio Gear": {
      image: "/images/applications/accessories/rack-mounting-audio-gear.jpg",
      alt: "Standard 19 inch commercial audio equipment rack mounting setup - S V ENTERPRISES",
    },
    "Custom Speaker Mounting": {
      image: "/images/applications/accessories/custom-speaker-mounting.jpg",
      alt: "Heavy duty adjustable steel speaker wall mount brackets - S V ENTERPRISES",
    },
  },

  "road-cases": {
    "Touring & Live Event Equipment Transport": {
      image: "/images/applications/road-cases/touring-and-live-event-equipment-transport.jpg",
      alt: "Heavy duty customized road cases and flight cases loaded for touring & live event equipment transport - S V ENTERPRISES",
    },
    "Audio Rack & Power Amplifier Protection": {
      image: "/images/applications/road-cases/audio-rack-and-power-amplifier-protection.jpg",
      alt: "Customized rackmount flight cases for audio power amplifier and processor protection - S V ENTERPRISES",
    },
    "Mixing Console & DJ Gear Transit": {
      image: "/images/applications/road-cases/mixing-console-and-dj-gear-transit.jpg",
      alt: "Custom foam padded flight cases for mixing console and DJ gear safe transit - S V ENTERPRISES",
    },
    "Microphone & Cable Storage Racks": {
      image: "/images/applications/road-cases/microphone-and-cable-storage-racks.jpg",
      alt: "Professional road case drawers and storage racks for microphones and audio cables - S V ENTERPRISES",
    },
  },
};

export function getApplicationImage(categorySlug: string, applicationTitle: string): ApplicationImageData {
  const catMap = APPLICATION_IMAGES[categorySlug];
  if (catMap && catMap[applicationTitle]) {
    return catMap[applicationTitle];
  }

  // Robust fallback
  return {
    image: `/images/heroes/${categorySlug}.jpg`,
    alt: `Professional ${categorySlug} audio setup for ${applicationTitle} - S V ENTERPRISES`,
  };
}
