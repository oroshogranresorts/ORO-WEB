import luxury from "@/assets/oro/luxury-family.jpg.asset.json";
import deluxe from "@/assets/oro/deluxe-family.jpg.asset.json";
import suit from "@/assets/oro/deluxe-suit.jpg.asset.json";

export type RoomListing = {
  slug: string;
  name: string;
  price: string;
  image: string;
  beds: number;
  size: string;
  blurb: string;
};

export const ROOM_LISTINGS: RoomListing[] = [
  {
    slug: "luxury-family-rooms",
    name: "Luxury Family Rooms",
    price: "22,500.00",
    image: luxury.url,
    beds: 2,
    size: "48 Sqm",
    blurb: "Private balcony with stunning mountain and valley views for a serene escape.",
  },
  {
    slug: "deluxe-family-rooms",
    name: "Deluxe Family Rooms",
    price: "18,500.00",
    image: deluxe.url,
    beds: 2,
    size: "40 Sqm",
    blurb: "Cozy comfort with access to a shared balcony overlooking natural beauty.",
  },
  {
    slug: "deluxe-family-suit",
    name: "Deluxe Family Suit",
    price: "30,500.00",
    image: suit.url,
    beds: 2,
    size: "50 Sqm",
    blurb: "Spacious stay with a private balcony, perfect for families or groups.",
  },
];