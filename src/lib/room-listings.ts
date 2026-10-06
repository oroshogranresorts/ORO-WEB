import { useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";

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
  tag?: string;
  view?: string;
  order?: number;
};

export const DEFAULT_ROOM_LISTINGS: RoomListing[] = [
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
    tag: "01 — Featured",
    view: "Mountain View",
    order: 1,
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
    tag: "02 — Family Suite",
    view: "Scenic Valley",
    order: 2,
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
    tag: "03 — Standard",
    view: "Valley View",
    order: 3,
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

export const ROOM_LISTINGS = DEFAULT_ROOM_LISTINGS;

// Realtime React Hook for website & admin
export function useLiveRooms() {
  const [rooms, setRooms] = useState<RoomListing[]>(DEFAULT_ROOM_LISTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const roomsCol = collection(db, "rooms");
      const unsubscribe = onSnapshot(
        roomsCol,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: RoomListing[] = [];
            snapshot.forEach((docSnap) => {
              list.push(docSnap.data() as RoomListing);
            });
            // Sort by order or name
            list.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
            setRooms(list);
          } else {
            setRooms(DEFAULT_ROOM_LISTINGS);
          }
          setLoading(false);
        },
        (error) => {
          console.warn("Firestore onSnapshot error, using default rooms fallback:", error);
          setRooms(DEFAULT_ROOM_LISTINGS);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn("Failed to subscribe to Firestore:", err);
      setRooms(DEFAULT_ROOM_LISTINGS);
      setLoading(false);
    }
  }, []);

  return { rooms, loading };
}

// Save or Update a single room
export async function saveRoom(room: RoomListing): Promise<void> {
  const roomDoc = doc(db, "rooms", room.slug);
  await setDoc(roomDoc, room, { merge: true });
}

// Delete a room
export async function deleteRoom(slug: string): Promise<void> {
  const roomDoc = doc(db, "rooms", slug);
  await deleteDoc(roomDoc);
}

// Seed initial default rooms into Firestore
export async function seedInitialRooms(): Promise<void> {
  const batch = writeBatch(db);
  for (const room of DEFAULT_ROOM_LISTINGS) {
    const roomRef = doc(db, "rooms", room.slug);
    batch.set(roomRef, room);
  }
  await batch.commit();
}