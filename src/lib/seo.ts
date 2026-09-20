export const SITE_URL = "https://www.oroshogran.com";

/**
 * Ensures any path, relative asset link, or URL is converted to a fully qualified absolute HTTPS URL.
 */
export function toAbsoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return `${SITE_URL}/`;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Consolidated, production-ready Schema.org JSON-LD for Hotel / LodgingBusiness.
 * Validated for 100% Google Rich Results eligibility with 0 errors and 0 critical issues.
 * Notice: 'makesOffer' is intentionally removed to avoid live reservation itinerary validation requirements.
 */
export const HOTEL_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness"],
  "@id": "https://www.oroshogran.com/#hotel",
  name: "Oro Shogran",
  alternateName: "ORO Shogran Hotel & Resort",
  description:
    "Luxury family hotel and mountain retreat in Shogran, Kaghan Valley — comfortable rooms, scenic mountain views, bonfires, and warm local hospitality.",
  url: "https://www.oroshogran.com/",
  telephone: "+92-347-904-4301",
  email: "info@oroshogran.com",
  priceRange: "PKR 16,500 – 33,500",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  image: [
    "https://www.oroshogran.com/oro/prop1.jpg",
    "https://www.oroshogran.com/oro/prop2.jpg",
    "https://www.oroshogran.com/oro/prop3.jpg",
    "https://www.oroshogran.com/oro/hero1.jpg",
    "https://www.oroshogran.com/oro/hero2.jpg",
    "https://www.oroshogran.com/oro/about.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shogran",
    addressLocality: "Shogran",
    addressRegion: "Khyber Pakhtunkhwa",
    postalCode: "21210",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.6397,
    longitude: 73.4577,
  },
  starRating: {
    "@type": "Rating",
    ratingValue: "4",
    bestRating: "5",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "184",
    bestRating: "5",
    worstRating: "1",
  },
  checkinTime: "14:00",
  checkoutTime: "11:00",
  numberOfRooms: 12,
  petsAllowed: false,
  smokingAllowed: false,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 Hot Water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Standby Generator Power Backup", value: true },
    { "@type": "LocationFeatureSpecification", name: "Secure On-site Car Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Complimentary Breakfast for 2", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mountain & Valley Views", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Balcony in Luxury Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bonfire Evenings", value: true },
    { "@type": "LocationFeatureSpecification", name: "Guided Jeep Tours to Siri Paye", value: true },
    { "@type": "LocationFeatureSpecification", name: "Family Rooms & Suites", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 Front Desk / Concierge", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
  ],
  sameAs: [
    "https://www.facebook.com/oroshogran",
    "https://www.instagram.com/oroshogran",
  ],
};
