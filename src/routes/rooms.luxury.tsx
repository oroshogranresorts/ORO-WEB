import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero from "@/assets/oro/hero1.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";
import { RoomShowcase } from "@/components/site/RoomShowcase";

export const Route = createFileRoute("/rooms/luxury")({
  head: () => ({
    meta: [
      { title: "Luxury Rooms in Shogran | Oro Shogran Retreat" },
      { name: "description", content: "Luxury rooms at Oro Shogran, Kaghan Valley — private balconies, mountain views, and warm hospitality. Book the best hotel in Shogran online." },
      { name: "keywords", content: "Luxury Hotel in Shogran, Luxury Rooms Shogran, Mountain View Hotel Shogran, Hotels near Siri Paye, Best Resort in Shogran" },
      { property: "og:title", content: "Luxury Rooms in Shogran — Oro Shogran" },
      { property: "og:description", content: "Luxury rooms with private balconies and Kaghan Valley views. Reserve at Oro Shogran." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.oroshogran.com/rooms/luxury" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/rooms/luxury" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "Rooms", item: "https://www.oroshogran.com/rooms" },
            { "@type": "ListItem", position: 3, name: "Luxury Rooms", item: "https://www.oroshogran.com/rooms/luxury" },
          ],
        }),
      },
    ],
  }),
  component: LuxuryRooms,
});

function LuxuryRooms() {
  const luxuryRoom = ROOM_LISTINGS.find((r) => r.slug === "luxury-rooms") || ROOM_LISTINGS[0];
  const otherRooms = ROOM_LISTINGS.filter((r) => r.slug !== "luxury-rooms");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Luxury Rooms"
        title="Refined stays"
        italic="in the mountains."
        subtitle="Thoughtfully designed rooms with private balconies, mountain views, and warm hospitality."
        image={hero.url}
      />
      <RoomShowcase room={luxuryRoom} tag="01 — Featured Luxury Room" />
      <RoomGrid rooms={otherRooms} eyebrow="Other Accommodations" />
    </SiteLayout>
  );
}