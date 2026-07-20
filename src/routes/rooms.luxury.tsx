import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero from "@/assets/oro/hero1.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";

export const Route = createFileRoute("/rooms/luxury")({
  head: () => ({
    meta: [
      { title: "Luxury Rooms — Oro Shogran" },
      { name: "description", content: "Luxury family rooms and suites at Oro Shogran, Kaghan Valley — private balconies, mountain views." },
      { property: "og:title", content: "Luxury Rooms — Oro Shogran" },
      { property: "og:description", content: "Private balconies, mountain views and refined comfort in the Kaghan Valley." },
    ],
  }),
  component: LuxuryRooms,
});

function LuxuryRooms() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Luxury Rooms"
        title="Refined stays"
        italic="in the mountains."
        subtitle="Three considered rooms — each with private or shared balconies, deodar-framed views and warm, quiet service."
        image={hero.url}
      />
      <RoomGrid rooms={ROOM_LISTINGS} eyebrow="Our Luxury Rooms" />
    </SiteLayout>
  );
}