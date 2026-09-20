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
    price: "12,500.00",
    image: "/oro/room-deluxe-master-1.jpg",
    beds: "King + Sofa Bed",
    size: "Spacious",
    blurb: "Private balcony with stunning mountain views, rain shower, and complimentary breakfast for 2.",
  },
  {
    slug: "deluxe-family-suite",
    name: "Deluxe Family Suite",
    price: "26,500.00",
    image: "/oro/room-deluxe-suite-1.jpg",
    beds: "Multiple Beds",
    size: "Family-friendly",
    blurb: "Spacious family suite with attached modern bath and valley views, perfect for families or groups.",
  },
  {
    slug: "deluxe-family-rooms",
    name: "Deluxe Family Rooms",
    price: "12,500.00",
    image: "/oro/room-four-seater-1.jpg",
    beds: "Family Bedding",
    size: "Comfortable",
    blurb: "Comfortable mountain-view rooms with clean interiors, warm hospitality, and peaceful surroundings.",
  },
];