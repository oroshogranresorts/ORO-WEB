import { useState } from "react";
import { type RoomListing } from "@/lib/room-listings";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

function RoomCardImageCarousel({
  images,
  name,
  onOpenLightbox,
}: {
  images: string[];
  name: string;
  onOpenLightbox: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-rich-black/80 select-none">
      <img
        src={images[current] || images[0]}
        alt={`${name} - Photo ${current + 1}`}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rich-black/70 text-ivory/90 backdrop-blur-sm transition-all hover:bg-gold hover:text-rich-black"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rich-black/70 text-ivory/90 backdrop-blur-sm transition-all hover:bg-gold hover:text-rich-black"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-3 right-3 z-10 rounded bg-rich-black/80 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-ivory/90 backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>

          {/* Lightbox trigger */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenLightbox(current);
            }}
            title="Expand photo"
            aria-label="Expand photo"
            className="absolute bottom-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded bg-rich-black/75 text-ivory/80 backdrop-blur-sm transition-colors hover:bg-gold hover:text-rich-black"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 max-w-[80%] overflow-hidden py-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(i);
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`transition-all ${
                  i === current
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

export function RoomGrid({ rooms, eyebrow }: { rooms: RoomListing[]; eyebrow: string }) {
  const [lightbox, setLightbox] = useState<{ room: RoomListing; index: number } | null>(null);

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— {eyebrow}</p>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => {
            const roomImages = r.images && r.images.length > 0 ? r.images : [r.image];
            const roomUrl = r.slug === "luxury-rooms" ? "/rooms/luxury" : "/rooms/deluxe";

            return (
              <article
                key={r.slug}
                className="group flex flex-col border border-gold/10 bg-rich-black/40 transition-colors hover:border-gold/40"
              >
                <div className="relative">
                  <RoomCardImageCarousel
                    images={roomImages}
                    name={r.name}
                    onOpenLightbox={(idx) => setLightbox({ room: r, index: idx })}
                  />
                  <div className="pointer-events-none absolute left-3 top-3 z-10 bg-rich-black/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                    From <span className="text-ivory">₨{r.price}</span> /night
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl sm:text-3xl leading-tight text-ivory transition-colors group-hover:text-gold">
                    {r.name}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ivory/70">{r.blurb}</p>

                  <div className="mt-5 flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory/60">
                    <span>{typeof r.beds === "number" ? `${r.beds} Beds` : r.beds}</span>
                    <span className="text-gold">·</span>
                    <span>{r.size}</span>
                  </div>

                  {r.features && (
                    <ul className="mt-5 space-y-1.5 border-t border-gold/10 pt-4 text-xs font-light text-ivory/70">
                      {r.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex items-center justify-between border-t border-gold/10 pt-6">
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-[0.32em] text-ivory/50">From</div>
                      <div className="mt-1 font-display text-2xl text-gold">
                        ₨{r.price}
                        <span className="text-sm text-ivory/60"> /night</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={roomUrl}
                        className="inline-flex items-center gap-1 border border-gold/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/80 transition-all hover:border-gold hover:text-gold"
                      >
                        Details
                      </Link>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-gold bg-gold/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold transition-all hover:bg-gold hover:text-rich-black"
                      >
                        Book →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-rich-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close photo viewer"
              className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-rich-black/80 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative overflow-hidden rounded">
              <img
                src={lightbox.room.images[lightbox.index]}
                alt={`${lightbox.room.name} ${lightbox.index + 1}`}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Controls */}
            <div className="mt-4 flex w-full items-center justify-between px-2 text-ivory">
              <div>
                <h4 className="font-display text-lg text-gold">{lightbox.room.name}</h4>
                <p className="text-xs text-ivory/60">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      ...lightbox,
                      index: (lightbox.index + 1) % lightbox.room.images.length,
                    })
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-3 flex max-w-full gap-2 overflow-x-auto py-2">
              {lightbox.room.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setLightbox({ ...lightbox, index: i })}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded border transition-all ${
                    i === lightbox.index ? "border-gold ring-2 ring-gold/40" : "border-gold/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}