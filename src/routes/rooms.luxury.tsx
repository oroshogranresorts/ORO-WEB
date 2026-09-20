import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero from "@/assets/oro/hero1.jpg.asset.json";
import { RoomGrid } from "@/components/site/RoomGrid";

export const Route = createFileRoute("/rooms/luxury")({
  head: () => ({
    meta: [
      { title: "Luxury Rooms in Shogran | Oro Shogran Family Suites" },
      { name: "description", content: "Luxury family rooms and suites at Oro Shogran, Kaghan Valley — private balconies, fireplaces and Siri Paye views. Book the best hotel in Shogran online." },
      { name: "keywords", content: "Luxury Hotel in Shogran, Luxury Rooms Shogran, Family Suites Shogran, Mountain View Hotel Shogran, Hotels near Siri Paye, Best Resort in Shogran" },
      { property: "og:title", content: "Luxury Rooms in Shogran — Oro Shogran" },
      { property: "og:description", content: "Family suites with private balconies and Kaghan Valley views. Reserve at Oro Shogran, the best luxury hotel in Shogran." },
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