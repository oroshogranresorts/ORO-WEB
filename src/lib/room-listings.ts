export type RoomListing = {
  slug: string;
  name: string;
  price: string;
  image: string;
  beds: number | string;
  size: string;
  blurb: string;
};

export const ROOM_LISTINGS: RoomListing[] = [
  {
    slug: "luxury-rooms",
    name: "Luxury Room",
    price: "18,500.00",
    image: "/oro/luxury-family.jpg",
    beds: "King + Sofa Bed",
    size: "Spacious",
    blurb: "Private balcony with stunning mountain views, rain shower, and complimentary breakfast for 2.",
  },
  {
    slug: "deluxe-family-suite",
    name: "Deluxe Family Suite",
    price: "33,500.00",
    image: "/oro/deluxe-suit.jpg",
    beds: "Multiple Beds",
    size: "Family-friendly",
    blurb: "Spacious family suite with attached modern bath and valley views, perfect for families or groups.",
  },
  {
    slug: "deluxe-rooms",
    name: "Deluxe Room",
    price: "16,500.00",
    image: "/oro/deluxe-family.jpg",
    beds: "Family Bedding",
    size: "Comfortable",
    blurb: "Comfortable mountain-view rooms with clean interiors, warm hospitality, and peaceful surroundings.",
  },
];