import { useState } from "react";
import { GOOGLE_REVIEWS, type GoogleReview } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className={`h-3.5 w-3.5 ${n <= rating ? "fill-gold" : "fill-ivory/20"}`}>
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.5 7.6l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ r }: { r: GoogleReview }) {
  const [failed, setFailed] = useState(false);
  const initials = r.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  if (!r.avatar || failed) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold ring-1 ring-gold/30">
        {initials}
      </div>
    );
  }
  return (
    <img
      src={r.avatar}
      alt={r.name}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/30"
    />
  );
}

function ReviewCard({ r }: { r: GoogleReview }) {
  return (
    <figure className="flex h-[300px] w-[330px] shrink-0 flex-col border border-gold/15 bg-rich-black/60 p-7 transition-colors hover:border-gold/40 sm:w-[360px]">
      <div className="flex items-center gap-3">
        <Avatar r={r} />
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-gold">{r.name}</div>
          <div className="mt-1 flex items-center gap-2">
            <Stars rating={r.rating} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/45">{r.when}</span>
          </div>
        </div>
        <svg viewBox="0 0 48 48" className="ml-auto h-5 w-5 shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.5 5-4.7 7l6.4 5C41.5 36.4 45 30.9 45 24z" />
          <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4C29.7 36.6 27.1 37.5 24 37.5c-5.8 0-10.7-3.8-12.5-9.1l-7.2 5.6C8 41.6 15.4 46 24 46z" />
          <path fill="#FBBC05" d="M11.5 28.4A13.9 13.9 0 0 1 10.8 24c0-1.5.3-3 .7-4.4l-7.2-5.6A22 22 0 0 0 2 24c0 3.6.9 6.9 2.3 9.9l7.2-5.5z" />
          <path fill="#EA4335" d="M24 10.5c3.3 0 6.2 1.1 8.5 3.3l6.1-6.1C34.9 4.1 29.9 2 24 2 15.4 2 8 6.4 4.3 14l7.2 5.6C13.3 14.3 18.2 10.5 24 10.5z" />
        </svg>
      </div>
      <blockquote className="mt-5 overflow-hidden text-sm font-light leading-[1.7] text-ivory/75">{r.text}</blockquote>
    </figure>
  );
}

function Row({ items, duration, reverse }: { items: GoogleReview[]; duration: number; reverse?: boolean }) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-x ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const half = Math.ceil(GOOGLE_REVIEWS.length / 2);
  const rowA = GOOGLE_REVIEWS.slice(0, half);
  const rowB = GOOGLE_REVIEWS.slice(half);
  return (
    <div className="relative space-y-6">
      <Row items={rowA} duration={60} />
      <Row items={rowB} duration={70} reverse />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-rich-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-rich-black to-transparent" />
    </div>
  );
}