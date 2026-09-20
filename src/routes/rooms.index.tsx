import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import room1Asset from "@/assets/oro/room1.jpg.asset.json";
import room2Asset from "@/assets/oro/room2.jpg.asset.json";
import room3Asset from "@/assets/oro/room3.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";

export const Route = createFileRoute("/rooms/")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites in Shogran | Oro Shogran Family Hotel" },
      { name: "description", content: "Comfortable suite and room categories at Oro Shogran, a luxury family hotel in Shogran — mountain-view rooms, warm hospitality, and modern amenities from ₨16,500 per night." },
      { name: "keywords", content: "Rooms in Shogran, Suites in Shogran, Family Hotel in Shogran, Luxury Hotel in Shogran, Shogran Accommodation, Mountain View Hotel Shogran, Hotels in Kaghan Valley" },
      { property: "og:title", content: "Rooms & Suites in Shogran — Oro Shogran" },
      { property: "og:description", content: "Mountain-view family rooms and suites at Oro Shogran, Kaghan Valley — from ₨16,500 per night." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.oroshogran.com/rooms" },
      { property: "og:image", content: room1Asset.url },
      { name: "twitter:image", content: room1Asset.url },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/rooms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Rooms & Suites — Oro Shogran",
          url: "https://www.oroshogran.com/rooms",
          description: "Rooms and suites at Oro Shogran, a boutique hotel in Shogran, Kaghan Valley.",
          hasPart: [
            { "@type": "HotelRoom", name: "Luxury Room", url: "https://www.oroshogran.com/rooms/luxury", occupancy: { "@type": "QuantitativeValue", maxValue: 3 }, offers: { "@type": "Offer", price: "18500", priceCurrency: "PKR" } },
            { "@type": "HotelRoom", name: "Deluxe Family Suite", url: "https://www.oroshogran.com/rooms/deluxe", occupancy: { "@type": "QuantitativeValue", maxValue: 6 }, offers: { "@type": "Offer", price: "33500", priceCurrency: "PKR" } },
            { "@type": "HotelRoom", name: "Deluxe Room", url: "https://www.oroshogran.com/rooms/deluxe", occupancy: { "@type": "QuantitativeValue", maxValue: 4 }, offers: { "@type": "Offer", price: "16500", priceCurrency: "PKR" } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "Rooms", item: "https://www.oroshogran.com/rooms" },
          ],
        }),
      },
    ],
  }),
  component: Rooms,
});

const ROOMS = [
  {
    tag: "01 — Featured",
    name: "Luxury Room",
    img: "/oro/luxury-family.jpg",
    beds: "King + Sofa Bed",
    sqm: "Spacious",
    view: "Mountain View",
    price: "₨ 18,500",
    lede: "Refined comfort featuring an exclusive private balcony and panoramic mountain views.",
    features: [
      "King Bed + Sofa Bed",
      "Private balcony with mountain view",
      "Rain shower & attached bath",
      "Complimentary breakfast for 2",
      "Free Wi-Fi & 24/7 Hot Water",
      "Car parking",
    ],
    long: "The Luxury Room is designed for guests seeking quiet relaxation, featuring an exclusive private balcony overlooking the Shogran valley. Complete with comfortable bedding, warm lighting, and dedicated hospitality.",
  },
  {
    tag: "02 — Family Suite",
    name: "Deluxe Family Suite",
    img: "/oro/deluxe-suit.jpg",
    beds: "Multiple Beds",
    sqm: "Family-friendly",
    view: "Scenic Valley",
    price: "₨ 33,500",
    lede: "Expansive family suite offering generous space, comfort, and peaceful mountain surroundings.",
    features: [
      "Multiple family beds",
      "Spacious family lounge area",
      "Attached modern bathroom",
      "Complimentary breakfast for 2",
      "24/7 Hot Water & Power Backup",
      "Car parking",
    ],
    long: "Designed for families and groups travelling together, the Deluxe Family Suite combines ample space with practical comforts. An ideal mountain retreat for families looking to relax and enjoy the scenic beauty of Shogran.",
  },
  {
    tag: "03 — Standard",
    name: "Deluxe Room",
    img: "/oro/deluxe-family.jpg",
    beds: "Family Bedding",
    sqm: "Comfortable",
    view: "Valley View",
    price: "₨ 16,500",
    lede: "Cozy mountain-view rooms with clean interiors and comfortable family bedding.",
    features: [
      "Multiple comfortable beds",
      "Attached clean bathroom",
      "Scenic mountain surroundings",
      "Complimentary breakfast for 2",
      "24/7 Hot Water & Free Wi-Fi",
      "Car parking",
    ],
    long: "The Deluxe Rooms offer dependable comfort and essentials in a restful alpine setting, providing a relaxing base to explore Shogran and Kaghan Valley.",
  },
];

const INCLUDED = [
  "Complimentary breakfast for 2 guests",
  "24/7 hot water & standby generator",
  "Free Wi-Fi access",
  "Secure on-site car parking",
  "24/7 Front Desk assistance",
  "Garden & outdoor sitting areas",
  "Bonfire nights (weather permitting)",
  "Hiking & local tour assistance",
];

function Rooms() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rooms & Suites"
        title="Three rooms,"
        italic="one mountain."
        subtitle="Each suite is dressed in linen, wool and warm wood, and shaped to catch a different part of the valley — sunrise, snowline, or the deep quiet of the deodar."
        image={room2Asset.url}
      />

      {/* ROOMS */}
      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {ROOMS.map((r, i) => (
            <article key={r.name} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{r.tag}</div>
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">{r.name}</h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-ivory/80">{r.lede}</p>
                <p className="mt-4 text-base font-light leading-relaxed text-ivory/65">{r.long}</p>

                <div className="mt-8 grid grid-cols-3 border-y border-gold/15 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                  <span>{r.beds}</span><span className="text-center">{r.sqm}</span><span className="text-right">{r.view}</span>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-2 text-sm font-light text-ivory/75 sm:grid-cols-2">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-1 w-3 shrink-0 bg-gold" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-baseline justify-between border-t border-gold/15 pt-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/50">From / night</div>
                    <div className="mt-2 font-display text-3xl text-gold">{r.price}</div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
                    Reserve
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INCLUDED */}
      <section className="border-t border-gold/10 py-14 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Every Stay Includes</p>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
                Small things,<span className="italic text-gold"> done well.</span>
              </h2>
              <p className="mt-8 text-base font-light leading-relaxed text-ivory/70">
                No hidden lines on the bill, no clip-boards at check-in. What follows is included in every room, in every season.
              </p>
            </div>
            <ul className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
              {INCLUDED.map((f, i) => (
                <li key={f} className="flex gap-4 border-t border-gold/15 pt-4">
                  <span className="font-display text-xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-light text-ivory/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/10">
        <img src={hero2Asset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-rich-black/40" />
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">Reserve your room.</h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-ivory/75">Tell us your dates and how many are travelling — we'll write back within the day.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            Enquire Now →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}