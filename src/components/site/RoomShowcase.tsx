import { useState } from "react";
import { type RoomListing } from "@/lib/room-listings";
import { ChevronLeft, ChevronRight, Maximize2, X, Check, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function RoomShowcase({
  room,
  tag = "Featured Room",
}: {
  room: RoomListing;
  tag?: string;
}) {
  const images = room.images && room.images.length > 0 ? room.images : [room.image];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIdx((i) => (i + 1) % images.length);

  const waMsg = encodeURIComponent(
    `Assalam-o-Alaikum Oro Shogran,\n\nI would like to enquire about booking the ${room.name} (PKR ${room.price}/night).\nKindly share availability and reservation details. Shukriya!`
  );
  const waUrl = `https://wa.me/923479044301?text=${waMsg}`;

  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7">
            {/* Main Featured Photo */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gold/20 bg-rich-black shadow-2xl">
              <img
                src={images[currentIdx]}
                alt={`${room.name} - View ${currentIdx + 1}`}
                className="h-full w-full object-cover transition-opacity duration-300"
              />

              {/* Tag */}
              <div className="absolute left-4 top-4 z-10 bg-rich-black/85 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
                {tag}
              </div>

              {/* Counter */}
              <div className="absolute right-4 top-4 z-10 rounded bg-rich-black/85 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-ivory backdrop-blur-sm">
                {currentIdx + 1} / {images.length} Photos
              </div>

              {/* Nav Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rich-black/75 text-ivory transition-colors hover:bg-gold hover:text-rich-black backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rich-black/75 text-ivory transition-colors hover:bg-gold hover:text-rich-black backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Expand Lightbox */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                title="View full screen"
                className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded bg-rich-black/85 px-3 py-1.5 text-xs text-ivory/90 backdrop-blur-sm transition-colors hover:bg-gold hover:text-rich-black"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setCurrentIdx(i)}
                    aria-label={`Select photo ${i + 1}`}
                    className={`relative h-20 w-28 shrink-0 overflow-hidden rounded border transition-all ${
                      i === currentIdx
                        ? "border-gold ring-2 ring-gold/50 scale-102"
                        : "border-gold/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                    <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white">
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                Oro Shogran Accommodation
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ivory leading-tight">
                {room.name}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-ivory/80">
                {room.blurb}
              </p>

              {/* Price Callout */}
              <div className="mt-8 border-y border-gold/15 py-6 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/50">
                    Room Rate
                  </span>
                  <div className="mt-1 font-display text-4xl text-gold">
                    ₨{room.price}
                    <span className="text-sm font-light text-ivory/60"> / night</span>
                  </div>
                </div>
                <div className="text-right text-[11px] font-medium uppercase tracking-[0.25em] text-ivory/70">
                  <div>{room.beds}</div>
                  <div className="text-gold mt-1">{room.size}</div>
                </div>
              </div>

              {/* Features & Amenities */}
              {room.features && (
                <div className="mt-8">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                    Included Amenities & Features
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm font-light text-ivory/85">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-gold shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-gold/15 flex flex-wrap gap-4 items-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-all hover:bg-ivory"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gold/60 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-rich-black"
              >
                <Phone className="h-4 w-4" />
                Call / Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-rich-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-6xl flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-rich-black/80 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative overflow-hidden rounded">
              <img
                src={images[currentIdx]}
                alt={`${room.name} ${currentIdx + 1}`}
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>

            {/* Bottom bar */}
            <div className="mt-4 flex w-full items-center justify-between px-4 text-ivory">
              <div>
                <h4 className="font-display text-xl text-gold">{room.name}</h4>
                <p className="text-xs text-ivory/60">
                  Photo {currentIdx + 1} of {images.length}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold hover:text-rich-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 flex max-w-full gap-2 overflow-x-auto py-2">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setCurrentIdx(i)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded border transition-all ${
                    i === currentIdx
                      ? "border-gold ring-2 ring-gold/50"
                      : "border-gold/20 opacity-50 hover:opacity-100"
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
