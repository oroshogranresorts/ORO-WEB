import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ROOM_LISTINGS } from "@/lib/room-listings";
import hero1Asset from "@/assets/oro/hero1.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import aboutAsset from "@/assets/oro/about.jpg.asset.json";
import room1Asset from "@/assets/oro/room1.jpg.asset.json";
import room2Asset from "@/assets/oro/room2.jpg.asset.json";
import room3Asset from "@/assets/oro/room3.jpg.asset.json";
import srv1Asset from "@/assets/oro/srv1.jpg.asset.json";
import srv2Asset from "@/assets/oro/srv2.jpg.asset.json";
import srv3Asset from "@/assets/oro/srv3.jpg.asset.json";
import srv4Asset from "@/assets/oro/srv4.jpg.asset.json";
import t1Asset from "@/assets/oro/t1.jpg.asset.json";
import t2Asset from "@/assets/oro/t2.jpg.asset.json";
import t3Asset from "@/assets/oro/t3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Hotel in Shogran | Oro Shogran — Kaghan Valley Retreat" },
      { name: "description", content: "Stay at Oro Shogran, the best hotel in Shogran, Kaghan Valley. Mountain-view family suites, jeep tours to Siri Paye, bonfires and warm local hospitality." },
      { name: "keywords", content: "Best Hotel in Shogran, ORO Shogran, Hotel in Shogran, Luxury Hotel in Shogran, Family Hotel in Shogran, Best Resort in Shogran, Hotels in Kaghan Valley, Shogran Accommodation, Mountain View Hotel Shogran, Hotels near Siri Paye, Hotels near Makra Peak" },
      { property: "og:title", content: "Best Hotel in Shogran — Oro Shogran, Kaghan Valley" },
      { property: "og:description", content: "Luxury family hotel in Shogran, Kaghan Valley — mountain-view suites, bonfires and guided jeep tours to Siri Paye and Makra Peak." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero1Asset.url },
      { name: "twitter:title", content: "Best Hotel in Shogran — Oro Shogran" },
      { name: "twitter:description", content: "Luxury family retreat in the Kaghan Valley — mountain-view suites, jeep tours and bonfires." },
      { name: "twitter:image", content: hero1Asset.url },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero1Asset.url, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "@id": "/#hotel",
          name: "Oro Shogran",
          description: "Best hotel in Shogran — a luxury family retreat in the Kaghan Valley, Khyber Pakhtunkhwa, Pakistan.",
          image: [hero1Asset.url, hero2Asset.url, aboutAsset.url],
          telephone: "+92-347-904-4301",
          priceRange: "₨18,500 – ₨30,500",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shogran",
            addressLocality: "Shogran",
            addressRegion: "Khyber Pakhtunkhwa",
            addressCountry: "PK",
          },
          geo: { "@type": "GeoCoordinates", latitude: 34.6397, longitude: 73.4577 },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "184" },
          makesOffer: [
            { "@type": "Offer", name: "Luxury Family Rooms", price: "22500", priceCurrency: "PKR" },
            { "@type": "Offer", name: "Deluxe Family Suit", price: "30500", priceCurrency: "PKR" },
            { "@type": "Offer", name: "Deluxe Family Rooms", price: "18500", priceCurrency: "PKR" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const SUITES = [
  { tag: "01 — Signature", name: "Luxury Family Rooms", img: room1Asset.url, beds: "2 Beds", sqm: "48 sqm", view: "Motorcycle Parking", price: "₨ 22,500", copy: "Warm timber, hand-loom linens and morning light drawn through the deodars." },
  { tag: "02 — Residence", name: "Deluxe Family Suit", img: room2Asset.url, beds: "2 Beds", sqm: "50 sqm", view: "Motorcycle Parking", price: "₨ 30,500", copy: "A cliffside residence — fireplace, oak floors and a wall of glass framing the snowline." },
  { tag: "03 — Retreat", name: "Deluxe Family Rooms", img: room3Asset.url, beds: "2 Beds", sqm: "40 sqm", view: "Car Parking", price: "₨ 18,500", copy: "Walnut walls, a low platform bed and a single quiet window onto the Himalaya." },
];

const TESTIMONIALS = [
  { quote: "I really enjoyed at Shogran due to the comfortable and peaceful environment at Oro Shogran hotel. One of the amazing sceneries at the hotel. Room service and hot water excellent.", name: "Jasvinder Kumar", from: "Guest", img: t3Asset.url },
  { quote: "An amazingly beautiful experience. A two-day stay at Oro Shogran having a scenic view — the mountains and clouds in front of the hotel are fascinating.", name: "Faraz Memon", from: "Guest", img: t1Asset.url },
  { quote: "A fantastic stay. Service excellent from start to finish. Staff friendly and accommodating. Beautiful mountain view, spotless rooms.", name: "Azeem Khalid", from: "Guest", img: t1Asset.url },
  { quote: "A wonderful trip. Truly appreciate the respect and warmth shown throughout. Administration and management were outstanding.", name: "Majid Shamrez", from: "Guest", img: t2Asset.url },
];

function Home() {
  const heroImages = [hero1Asset.url, hero2Asset.url, aboutAsset.url, srv1Asset.url, srv2Asset.url];
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, [heroImages.length]);
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Oro Shogran"
              width={1600}
              height={1008}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/25 to-rich-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-rich-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-24">
          <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-gold/80">
            <span className="h-px w-10 bg-gold/60" />
            Luxury in the Mountains
          </div>

          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">ORO SHOGRAN</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-ivory">
              Where Serenity
              <br />
              <span className="italic text-gold">Meets Luxury.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
              Nestled in the heart of the majestic Kaghan Valley — a serene
              mountain escape offering cozy stays, breathtaking views and
              warm hospitality.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/rooms" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-all hover:bg-ivory">
                Explore Rooms
                <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-10" />
              </Link>
              <Link to="/about" className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80 underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors hover:text-gold">
                About Us
              </Link>
            </div>
          </div>

          {/* Booking Widget */}
          <BookingWidget />
        </div>

        <div className="relative border-y border-gold/15 bg-rich-black/90 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-[10px] font-medium uppercase tracking-[0.4em] text-ivory/60">
            <span>Kaghan Valley</span><span className="text-gold">✦</span>
            <span>Siri Paye</span><span className="text-gold">✦</span>
            <span>Pine & Deodar</span><span className="text-gold">✦</span>
            <span>Since 2019</span>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative overflow-hidden py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Welcome to Oro Shogran</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Where Nature Meets<span className="italic text-gold"> Hospitality.</span>
            </h2>
            <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-ivory/70">
              <p>Nestled in the heart of the majestic Kaghan Valley, Oro Shogran offers an unforgettable escape into nature's paradise — lush meadows, snow-capped peaks and crystal-clear skies.</p>
              <p>Our culinary philosophy draws from traditional Pakistani and regional cuisine, reimagined with modern touches and the freshest local ingredients.</p>
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 border border-gold/60 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-rich-black">
              Our Story <span aria-hidden className="h-px w-6 bg-current" />
            </Link>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/20 pt-8">
              {[["3", "Room Types"], ["24/7", "Concierge"], ["★★★★★", "Guest Rated"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{v}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <TiltImage src={aboutAsset.url} alt="Oro Shogran valley" />
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs border border-gold/30 bg-rich-black/95 p-8 backdrop-blur lg:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Address</div>
              <div className="mt-3 font-display text-xl text-ivory">Shogran, Kaghan Valley</div>
              <div className="mt-2 text-xs font-light text-ivory/60">Khyber Pakhtunkhwa, Pakistan</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES */}
      <section className="relative border-t border-gold/10 bg-rich-black py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— The Best For Your Family</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
                Our Favorite<span className="italic text-gold"> Rooms.</span>
              </h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-ivory/65 sm:justify-self-end">
              Well-furnished rooms with breathtaking views, clean interiors and modern amenities — dressed in linen, wool and warm wood.
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {SUITES.map((s, i) => (
              <article key={s.name} className={`group relative ${i === 1 ? "lg:mt-16" : ""} ${i === 2 ? "lg:mt-32" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{s.tag}</div>
                  <div className="absolute inset-x-6 bottom-6"><h3 className="font-display text-3xl leading-tight text-ivory">{s.name}</h3></div>
                </div>
                <div className="mt-6 flex items-center justify-between border-b border-gold/15 pb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                  <span>{s.beds}</span><span>{s.sqm}</span><span>{s.view}</span>
                </div>
                <p className="mt-5 text-sm font-light leading-relaxed text-ivory/70">{s.copy}</p>
                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/50">From / night</div>
                    <div className="mt-1 font-display text-2xl text-gold">{s.price}</div>
                  </div>
                  <Link to="/rooms" className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-gold">
                    View →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES PREVIEW */}
      <section className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Our Service</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              A day, composed by<span className="italic text-gold"> the mountain.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: srv1Asset.url, title: "Comfortable Stay" },
              { img: srv2Asset.url, title: "Bonfire Evenings" },
              { img: srv3Asset.url, title: "Local Cuisine" },
              { img: srv4Asset.url, title: "Guided Jeep Tours" },
            ].map((e) => (
              <Link key={e.title} to="/facilities" className="group relative aspect-[3/4] overflow-hidden">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-display text-2xl text-ivory">{e.title}</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Discover →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Guest Feedback</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">Testimonials</h2>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name + i} className="relative border border-gold/15 bg-rich-black/60 p-8 transition-colors hover:border-gold/40">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/30" loading="lazy" />
                  <div>
                    <div className="text-sm font-medium text-gold">{t.name}</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">{t.from}</div>
                  </div>
                </div>
                <div className="mt-6 font-display text-4xl leading-none text-gold/60">&ldquo;</div>
                <blockquote className="mt-2 text-sm font-light leading-[1.7] text-ivory/80">{t.quote}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/10">
        <img src={hero2Asset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/70 to-rich-black/40" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Reserve your stay</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
            The valley is<span className="italic text-gold"> waiting.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/70">
            Reserve directly and receive a warm welcome, a curated valley itinerary, and complimentary morning tea overlooking the deodars.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            Book Your Stay →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function todayISO(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

function matchRoom(guests: number, bedsPref: string) {
  // bedsPref: "any" | "1" | "2" | "3"
  if (bedsPref === "3" || guests >= 5) {
    return ROOM_LISTINGS.find((r) => r.slug === "deluxe-family-suit")!;
  }
  if (guests >= 3) {
    return ROOM_LISTINGS.find((r) => r.slug === "luxury-family-rooms")!;
  }
  return ROOM_LISTINGS.find((r) => r.slug === "deluxe-family-rooms")!;
}

function BookingWidget() {
  const [checkIn, setCheckIn] = useState(todayISO(1));
  const [checkOut, setCheckOut] = useState(todayISO(2));
  const [guests, setGuests] = useState(2);
  const [beds, setBeds] = useState("any");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nights = useMemo(() => {
    const a = new Date(checkIn).getTime();
    const b = new Date(checkOut).getTime();
    if (isNaN(a) || isNaN(b)) return 0;
    return Math.max(0, Math.round((b - a) / (1000 * 60 * 60 * 24)));
  }, [checkIn, checkOut]);

  const match = useMemo(() => matchRoom(guests, beds), [guests, beds]);
  const pricePerNight = useMemo(() => Number(match.price.replace(/[^0-9.]/g, "")), [match]);
  const total = nights > 0 ? pricePerNight * nights : 0;
  const fmt = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });

  function onEnquire(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!checkIn || !checkOut) return setError("Please choose both dates.");
    if (nights <= 0) return setError("Check-out must be after check-in.");
    setSubmitted(true);
  }

  const waMsg = encodeURIComponent(
    `Assalam-o-Alaikum Oro Shogran,\n\nI would like to enquire about a stay:\n• Room: ${match.name}\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Nights: ${nights}\n• Guests: ${guests}\n• Estimated total: PKR ${fmt.format(total)}\n\nKindly confirm availability. Shukriya!`
  );
  const waLink = `https://wa.me/923479044301?text=${waMsg}`;

  return (
    <div className="mt-16">
      <form
        onSubmit={onEnquire}
        className="grid grid-cols-2 gap-px overflow-hidden border border-gold/25 bg-rich-black/60 backdrop-blur-lg sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
      >
        <label className="block bg-rich-black/70 p-5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">Check in</div>
          <input
            type="date"
            value={checkIn}
            min={todayISO(0)}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-2 w-full bg-transparent font-display text-lg text-ivory outline-none [color-scheme:dark]"
          />
        </label>
        <label className="block bg-rich-black/70 p-5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">Check out</div>
          <input
            type="date"
            value={checkOut}
            min={checkIn || todayISO(1)}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-2 w-full bg-transparent font-display text-lg text-ivory outline-none [color-scheme:dark]"
          />
        </label>
        <label className="block bg-rich-black/70 p-5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">Guests</div>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 w-full bg-transparent font-display text-lg text-ivory outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-rich-black text-ivory">
                {n} {n === 1 ? "Person" : "Persons"}
              </option>
            ))}
          </select>
        </label>
        <label className="block bg-rich-black/70 p-5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">Beds</div>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="mt-2 w-full bg-transparent font-display text-lg text-ivory outline-none"
          >
            <option value="any" className="bg-rich-black text-ivory">Any</option>
            <option value="1" className="bg-rich-black text-ivory">1 Bed</option>
            <option value="2" className="bg-rich-black text-ivory">2 Beds</option>
            <option value="3" className="bg-rich-black text-ivory">3+ Beds</option>
          </select>
        </label>
        <button
          type="submit"
          className="col-span-2 flex items-center justify-center bg-gold p-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory sm:col-span-4 lg:col-span-1"
        >
          Enquire
        </button>
      </form>

      {error && (
        <div className="mt-4 border border-red-400/40 bg-red-500/10 p-4 text-[11px] font-medium uppercase tracking-[0.25em] text-red-200">
          {error}
        </div>
      )}

      {submitted && !error && (
        <div className="mt-6 border border-gold/30 bg-rich-black/70 backdrop-blur-lg">
          <div className="grid gap-0 md:grid-cols-[minmax(0,220px)_1fr]">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img src={match.image} alt={match.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rich-black/60" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                <span>Suggested for you</span>
                <span className="h-px flex-1 bg-gold/30" />
                <span className="text-ivory/60">{nights} night{nights === 1 ? "" : "s"} · {guests} guest{guests === 1 ? "" : "s"}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl text-ivory">{match.name}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ivory/70">{match.blurb}</p>

              <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-gold/15 pt-5">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/50">Estimated total</div>
                  <div className="mt-1 font-display text-3xl text-gold">₨ {fmt.format(total)}</div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/50">
                    ₨ {fmt.format(pricePerNight)} / night
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-colors hover:bg-ivory"
                  >
                    Reserve on WhatsApp
                  </a>
                  <Link
                    to={match.slug === "luxury-family-rooms" ? "/rooms/luxury" : "/rooms/deluxe"}
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-gold"
                  >
                    View Room →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}