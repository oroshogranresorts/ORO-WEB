import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero from "@/assets/oro/hero2.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";

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
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
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
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Deluxe Rooms"
        title="Comfortable stays"
        italic="above the valley."
        subtitle="Well-appointed rooms and family suites — comfortable spaces for an unforgettable stay in Kaghan Valley."
        image={hero.url}
      />
      <RoomGrid rooms={ROOM_LISTINGS} eyebrow="Our Deluxe Rooms" />
    </SiteLayout>
  );
}