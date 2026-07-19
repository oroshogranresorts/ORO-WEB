import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import room1Asset from "@/assets/oro/room1.jpg.asset.json";
import room2Asset from "@/assets/oro/room2.jpg.asset.json";
import room3Asset from "@/assets/oro/room3.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Oro Shogran" },
      { name: "description", content: "Three curated suite categories at Oro Shogran — Luxury Family, Deluxe Family Suit and Deluxe Family Rooms, each with mountain-view design and warm hospitality." },
      { property: "og:title", content: "Rooms & Suites — Oro Shogran" },
      { property: "og:description", content: "Warm timber, hand-loom linens and windows framing the Kaghan Valley." },
    ],
  }),
  component: Rooms,
});

const ROOMS = [
  {
    tag: "01 — Signature",
    name: "Luxury Family Rooms",
    img: room1Asset.url,
    beds: "2 Beds", sqm: "48 sqm", view: "Valley View", price: "₨ 22,500",
    lede: "Our most-loved room — warm timber, wide windows and the sound of pines through the sash.",
    features: ["King + queen bedding", "Fireplace with seasoned deodar", "Copper bath, rain shower", "Private balcony with valley view", "Complimentary breakfast for 4", "Motorcycle parking"],
    long: "The Luxury Family Room is the heart of the house — the corner suite on the second floor where the morning light lands first and the pine wind carries in through the tall shutters. We dressed it in hand-loomed wool, black walnut and copper, and left the ceiling beams exposed so you can see how the mountain built the room.",
  },
  {
    tag: "02 — Residence",
    name: "Deluxe Family Suit",
    img: room2Asset.url,
    beds: "2 Beds", sqm: "50 sqm", view: "Snowline & Cliff", price: "₨ 30,500",
    lede: "A cliffside residence with a wall of glass — the snowline seems close enough to touch.",
    features: ["Separate sitting room", "Full-height glass to Malika Parbat", "Freestanding tub, twin vanities", "Fireplace + private terrace", "Turndown with almond milk & honey", "Motorcycle parking"],
    long: "The Deluxe Family Suit is the largest room on the estate, occupying the northern wing where the ground drops away toward the Kunhar. A sitting room in oak and cream opens onto a private terrace; the bedroom's glass wall runs the full width of the suite, so the snowline is present the moment you wake.",
  },
  {
    tag: "03 — Retreat",
    name: "Deluxe Family Rooms",
    img: room3Asset.url,
    beds: "2 Beds", sqm: "40 sqm", view: "Deodar Forest", price: "₨ 18,500",
    lede: "Walnut walls, a low platform bed and a single quiet window onto the Himalaya.",
    features: ["Walnut-panelled walls", "Low platform bed, linen sheets", "Walk-in rain shower", "Reading nook with lamp & books", "Complimentary breakfast for 4", "Car parking"],
    long: "The Deluxe Family Rooms are a study in restraint — dark walnut walls, a single low bed, and one window cut like a painting toward the forest. The smallest of our suites, and often the guest favourite for a solo writer or a couple who came here for the quiet.",
  },
];

const INCLUDED = [
  "Warm welcome tea & valley map",
  "Cooked-to-order breakfast, daily",
  "24/7 hot water & filtered drinking water",
  "High-speed valley Wi-Fi",
  "Nightly turndown with a hand-written note",
  "Bonfire on request, weather permitting",
  "Concierge & jeep-tour desk",
  "In-room safe & USB charging",
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {ROOMS.map((r, i) => (
            <article key={r.name} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{r.tag}</div>
              </div>
              <div>
                <h2 className="font-display text-5xl leading-[1.05] text-ivory">{r.name}</h2>
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
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Every Stay Includes</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
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
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <h2 className="font-display text-5xl leading-[1.05] text-ivory">Reserve your room.</h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-ivory/75">Tell us your dates and how many are travelling — we'll write back within the day.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            Enquire Now →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}