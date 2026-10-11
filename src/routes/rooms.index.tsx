import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import room1Asset from "@/assets/oro/room1.jpg.asset.json";
import room2Asset from "@/assets/oro/room2.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import { ChevronLeft, ChevronRight, Eye, X, Maximize2 } from "lucide-react";
import { useLiveRooms } from "@/lib/room-listings";

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
      { property: "og:image", content: "https://www.oroshogran.com/oro/rooms/luxury/1.jpg" },
      { name: "twitter:image", content: "https://www.oroshogran.com/oro/rooms/luxury/1.jpg" },
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
    slug: "luxury-rooms",
    link: "/rooms/luxury" as const,
    img: "/oro/rooms/luxury/1.jpg",
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
    sqm: "Spacious",
    view: "Mountain View",
    price: "₨ 18,500",
    lede: "Refined comfort featuring an exclusive private balcony and panoramic mountain views.",
    features: [
      "King Bed + Sofa Bed",
      "Private balcony with mountain view",
      "Rain shower & modern bath",
      "Complimentary breakfast for 2",
      "Free Wi-Fi & 24/7 Hot Water",
      "Secure car parking",
    ],
    long: "The Luxury Room is designed for guests seeking quiet relaxation, featuring an exclusive private balcony overlooking the Shogran valley. Complete with comfortable bedding, warm lighting, and dedicated hospitality.",
  },
  {
    tag: "02 — Family Suite",
    name: "Deluxe Family Suite",
    slug: "deluxe-family-suite",
    link: "/rooms/deluxe" as const,
    img: "/oro/rooms/deluxe-suite/1.jpg",
    images: [
      "/oro/rooms/deluxe-suite/1.jpg",
      "/oro/rooms/deluxe-suite/2.jpg",
      "/oro/rooms/deluxe-suite/3.jpg",
      "/oro/rooms/deluxe-suite/4.jpg",
      "/oro/rooms/deluxe-suite/5.jpg",
    ],
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
      "Secure car parking",
    ],
    long: "Designed for families and groups travelling together, the Deluxe Family Suite combines ample space with practical comforts. An ideal mountain retreat for families looking to relax and enjoy the scenic beauty of Shogran.",
  },
  {
    tag: "03 — Standard",
    name: "Deluxe Room",
    slug: "deluxe-rooms",
    link: "/rooms/deluxe" as const,
    img: "/oro/rooms/deluxe/1.jpg",
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
      "Secure car parking",
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

function RoomPhotoCarousel({
  images,
  name,
  tag,
  onOpenGallery,
}: {
  images: string[];
  name: string;
  tag: string;
  onOpenGallery?: (index: number) => void;
}) {
  const [idx, setIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded border border-gold/15 bg-rich-black/60 shadow-xl select-none group">
      <img
        src={images[idx]}
        alt={`${name} - Photo ${idx + 1}`}
        onClick={() => onOpenGallery?.(idx)}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
        loading="lazy"
        title="Click to view full photo gallery"
      />
      <div className="pointer-events-none absolute left-6 top-6 z-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold bg-rich-black/85 px-3 py-1.5 backdrop-blur-sm">
        {tag}
      </div>

      {/* Expand Fullscreen / Gallery Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpenGallery?.(idx);
        }}
        title="Open photo gallery"
        aria-label="Open photo gallery"
        className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded bg-rich-black/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ivory/90 backdrop-blur-sm transition-colors hover:bg-gold hover:text-rich-black cursor-pointer shadow-lg"
      >
        <Maximize2 className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Gallery</span>
      </button>

      {images.length > 1 && (
        <>
          <div className="absolute right-6 top-6 z-10 rounded bg-rich-black/85 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-ivory/90 backdrop-blur-sm">
            {idx + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-rich-black/75 text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-rich-black cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-rich-black/75 text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-rich-black cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 max-w-[65%] overflow-hidden py-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIdx(i);
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`transition-all cursor-pointer ${
                  i === idx
                    ? "h-1.5 w-5 bg-gold rounded-full"
                    : "h-1.5 w-1.5 bg-ivory/40 rounded-full hover:bg-ivory/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Rooms() {
  const { rooms } = useLiveRooms();
  const [lightbox, setLightbox] = useState<{ room: { name: string; images: string[] }; index: number } | null>(null);

  const displayRooms = (rooms.length > 0 ? rooms : ROOMS).map((r: any, idx: number) => ({
    tag: r.tag || `0${idx + 1} — Category`,
    name: r.name,
    slug: r.slug,
    link: (r.slug === "luxury-rooms" ? "/rooms/luxury" : "/rooms/deluxe") as const,
    img: r.image || r.images?.[0] || "/oro/rooms/luxury/1.jpg",
    images: r.images && r.images.length > 0 ? r.images : [r.image || "/oro/rooms/luxury/1.jpg"],
    beds: r.beds,
    sqm: r.size || r.sqm || "Spacious",
    view: r.view || "Mountain View",
    price: typeof r.price === "string" && r.price.startsWith("₨") ? r.price : `₨ ${r.price}`,
    lede: r.blurb || r.lede || "",
    features: r.features || [
      "24/7 Hot Water & Standby Generator",
      "Secure on-site car parking",
      "Complimentary breakfast for 2",
    ],
    long: r.long || r.blurb || "",
  }));

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
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-28 px-6">
          {displayRooms.map((r, i) => (
            <article
              key={r.name}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <RoomPhotoCarousel
                images={r.images}
                name={r.name}
                tag={r.tag}
                onOpenGallery={(idx) => setLightbox({ room: { name: r.name, images: r.images }, index: idx })}
              />

              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
                  {r.name}
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-ivory/80">{r.lede}</p>
                <p className="mt-4 text-base font-light leading-relaxed text-ivory/65">{r.long}</p>

                <div className="mt-8 grid grid-cols-3 border-y border-gold/15 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                  <span>{r.beds}</span>
                  <span className="text-center">{r.sqm}</span>
                  <span className="text-right">{r.view}</span>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-2 text-sm font-light text-ivory/75 sm:grid-cols-2">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-1 w-3 shrink-0 bg-gold" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-gold/15 pt-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/50">
                      From / night
                    </div>
                    <div className="mt-2 font-display text-3xl text-gold">{r.price}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          room: { name: r.name, images: r.images },
                          index: 0,
                        })
                      }
                      className="inline-flex items-center gap-2 border border-gold/50 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold hover:text-rich-black cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Gallery
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-colors hover:bg-ivory"
                    >
                      Reserve Now
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INCLUDED */}
      <section className="border-t border-gold/10 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                — Every Stay Includes
              </p>
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
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
            Reserve your room.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-ivory/75">
            Tell us your dates and how many are travelling — we'll write back within the day.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory"
          >
            Enquire Now →
          </Link>
        </div>
      </section>

      {/* Lightbox Gallery Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-rich-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-5xl flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close photo gallery"
              className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-rich-black/85 text-ivory transition-colors hover:bg-gold hover:text-rich-black cursor-pointer shadow-xl"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative overflow-hidden rounded bg-black/60 shadow-2xl">
              <img
                src={lightbox.room.images[lightbox.index]}
                alt={`${lightbox.room.name} - Photo ${lightbox.index + 1}`}
                className="max-h-[74vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Bar */}
            <div className="mt-4 flex w-full items-center justify-between px-3 text-ivory">
              <div>
                <h4 className="font-display text-xl text-gold">{lightbox.room.name}</h4>
                <p className="text-xs text-ivory/60 mt-0.5">
                  Photo {lightbox.index + 1} of {lightbox.room.images.length}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      ...lightbox,
                      index:
                        (lightbox.index - 1 + lightbox.room.images.length) %
                        lightbox.room.images.length,
                    })
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      ...lightbox,
                      index: (lightbox.index + 1) % lightbox.room.images.length,
                    })
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {lightbox.room.images.length > 1 && (
              <div className="mt-3 flex max-w-full gap-2 overflow-x-auto py-2">
                {lightbox.room.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightbox({ ...lightbox, index: i })}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded border transition-all cursor-pointer ${
                      i === lightbox.index
                        ? "border-gold ring-2 ring-gold/40 scale-102"
                        : "border-gold/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                    <span className="absolute bottom-0.5 right-0.5 rounded bg-black/70 px-1 text-[8px] font-medium text-white">
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}