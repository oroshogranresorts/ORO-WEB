import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero from "@/assets/oro/hero2.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";

export const Route = createFileRoute("/rooms/deluxe")({
  head: () => ({
    meta: [
      { title: "Deluxe Rooms — Oro Shogran" },
      { name: "description", content: "Deluxe family rooms and suites at Oro Shogran — comfortable stays with balconies overlooking the Kaghan Valley." },
      { property: "og:title", content: "Deluxe Rooms — Oro Shogran" },
      { property: "og:description", content: "Comfortable deluxe stays with balconies and valley views." },
    ],
  }),
  component: DeluxeRooms,
});

function DeluxeRooms() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Deluxe Rooms"
        title="Comfortable stays"
        italic="above the valley."
        subtitle="Well-appointed rooms and family suites — three considered spaces, each with its own character."
        image={hero.url}
      />
      <RoomGrid rooms={ROOM_LISTINGS} eyebrow="Our Deluxe Rooms" />
    </SiteLayout>
  );
}