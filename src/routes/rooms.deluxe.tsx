import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS, useLiveRooms } from "@/lib/room-listings";
import hero from "@/assets/oro/hero2.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";
import { RoomShowcase } from "@/components/site/RoomShowcase";

export const Route = createFileRoute("/rooms/deluxe")({
  head: () => ({
    meta: [
      { title: "Deluxe Rooms & Suites in Shogran | Oro Shogran Kaghan Valley" },
      { name: "description", content: "Deluxe family rooms and suites at Oro Shogran, Kaghan Valley — cosy interiors, valley views and warm hospitality from ₨16,500 per night." },
      { name: "keywords", content: "Deluxe Rooms Shogran, Deluxe Family Suite Shogran, Hotel in Shogran, Family Hotel in Shogran, Shogran Accommodation, Hotels in Kaghan Valley" },
      { property: "og:title", content: "Deluxe Rooms & Suites in Shogran — Oro Shogran" },
      { property: "og:description", content: "Comfortable deluxe family rooms and suites with scenic Kaghan Valley views — from ₨16,500 per night at Oro Shogran." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.oroshogran.com/rooms/deluxe" },
      { property: "og:image", content: "https://www.oroshogran.com/oro/rooms/deluxe-suite/1.jpg" },
      { name: "twitter:image", content: "https://www.oroshogran.com/oro/rooms/deluxe-suite/1.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/rooms/deluxe" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "Rooms", item: "https://www.oroshogran.com/rooms" },
            { "@type": "ListItem", position: 3, name: "Deluxe Rooms", item: "https://www.oroshogran.com/rooms/deluxe" },
          ],
        }),
      },
    ],
  }),
  component: DeluxeRooms,
});

function DeluxeRooms() {
  const { rooms } = useLiveRooms();
  const deluxeSuite = rooms.find((r) => r.slug === "deluxe-family-suite") || rooms[1] || ROOM_LISTINGS[1];
  const deluxeRoom = rooms.find((r) => r.slug === "deluxe-rooms") || rooms[2] || ROOM_LISTINGS[2];
  const luxuryRoom = rooms.filter((r) => r.slug === "luxury-rooms");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Deluxe Rooms & Suites"
        title="Comfortable stays"
        italic="above the valley."
        subtitle="Well-appointed rooms and family suites — comfortable spaces for an unforgettable stay in Kaghan Valley."
        image={hero.url}
      />
      <RoomShowcase room={deluxeSuite} tag="02 — Deluxe Family Suite" />
      <div className="border-t border-gold/10" />
      <RoomShowcase room={deluxeRoom} tag="03 — Deluxe Room" />
      <RoomGrid rooms={luxuryRoom} eyebrow="Also Available: Luxury Rooms" />
    </SiteLayout>
  );
}