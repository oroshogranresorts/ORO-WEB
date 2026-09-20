export type RoomListing = {
  slug: string;
  name: string;
  price: string;
  image: string;
  images: string[];
  beds: number | string;
  size: string;
  blurb: string;
  features?: string[];
};

export const ROOM_LISTINGS: RoomListing[] = [
  {
    slug: "luxury-rooms",
    name: "Luxury Room",
    price: "18,500.00",
    image: "/oro/rooms/luxury/1.jpg",
    images: [
      "/oro/rooms/luxury/1.jpg",
      "/oro/rooms/luxury/2.jpg",
      "/oro/rooms/luxury/3.jpg",
      "/oro/rooms/luxury/4.jpg",
      "/oro/rooms/luxury/5.jpg",
      "/oro/rooms/luxury/6.jpg",
      "/oro/rooms/luxury/7.jpg",
      "/oro/rooms/luxury/8.jpg",
      "/oro/rooms/luxury/9.jpg",
      "/oro/rooms/luxury/10.jpg",
      "/oro/rooms/luxury/11.jpg",
    ],
    beds: "King + Sofa Bed",
    size: "Spacious",
    blurb: "Private balcony with stunning mountain views, rain shower, and complimentary breakfast for 2.",
    features: [
      "King Bed + Sofa Bed",
      "Private balcony with mountain view",
      "Rain shower & modern bath",
      "Complimentary breakfast for 2",
      "24/7 Hot Water & Standby Generator",
      "Secure on-site car parking",
    ],
  },
  {
    slug: "deluxe-family-suite",
    name: "Deluxe Family Suite",
    price: "33,500.00",
    image: "/oro/rooms/deluxe-suite/1.jpg",
    images: [
      "/oro/rooms/deluxe-suite/1.jpg",
      "/oro/rooms/deluxe-suite/2.jpg",
      "/oro/rooms/deluxe-suite/3.jpg",
      "/oro/rooms/deluxe-suite/4.jpg",
      "/oro/rooms/deluxe-suite/5.jpg",
    ],
    beds: "Multiple Beds",
    size: "Family-friendly",
    blurb: "Spacious family suite with attached modern bath and valley views, perfect for families or groups.",
    features: [
      "Multiple family beds",
      "Spacious living space for families",
      "Attached modern bathroom",
      "Complimentary breakfast for 2",
      "24/7 Hot Water & Standby Generator",
      "Secure on-site car parking",
    ],
  },
  {
    slug: "deluxe-rooms",
    name: "Deluxe Room",
    price: "16,500.00",
    image: "/oro/rooms/deluxe/1.jpg",
    images: [
      "/oro/rooms/deluxe/1.jpg",
      "/oro/rooms/deluxe/2.jpg",
      "/oro/rooms/deluxe/3.jpg",
      "/oro/rooms/deluxe/4.jpg",
      "/oro/rooms/deluxe/5.jpg",
      "/oro/rooms/deluxe/6.jpg",
      "/oro/rooms/deluxe/7.jpg",
      "/oro/rooms/deluxe/8.jpg",
      "/oro/rooms/deluxe/9.jpg",
      "/oro/rooms/deluxe/10.jpg",
      "/oro/rooms/deluxe/11.jpg",
      "/oro/rooms/deluxe/12.jpg",
      "/oro/rooms/deluxe/13.jpg",
    ],
    beds: "Family Bedding",
    size: "Comfortable",
    blurb: "Comfortable mountain-view rooms with clean interiors, warm hospitality, and peaceful surroundings.",
    features: [
      "Comfortable family bedding",
      "Scenic mountain & valley views",
      "Attached clean bathroom",
      "Complimentary breakfast for 2",
      "24/7 Hot Water & Free Wi-Fi",
      "Secure on-site car parking",
    ],
  },
];