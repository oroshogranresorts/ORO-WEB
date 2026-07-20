import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import srv1Asset from "@/assets/oro/srv1.jpg.asset.json";
import srv2Asset from "@/assets/oro/srv2.jpg.asset.json";
import srv3Asset from "@/assets/oro/srv3.jpg.asset.json";
import srv4Asset from "@/assets/oro/srv4.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Hotel Facilities in Shogran | Jeep Tours & Bonfires" },
      { name: "description", content: "Bonfires, guided jeep tours to Siri Paye and Makra Peak, 24/7 hot water and slow mountain dining at Oro Shogran, a luxury family hotel in Shogran, Kaghan." },
      { name: "keywords", content: "Hotel Facilities Shogran, Bonfire Shogran hotel, Jeep tour Siri Paye, Hotels near Siri Paye, Hotels near Makra Peak, Wi-Fi hotel Shogran, Kaghan Valley experiences" },
      { property: "og:title", content: "Facilities & Experiences — Oro Shogran, Shogran" },
      { property: "og:description", content: "Bonfires under the stars, guided jeep trails to Siri Paye and Makra Peak, mountain cuisine and 24/7 hot water at Oro Shogran." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/facilities" },
      { property: "og:image", content: srv2Asset.url },
      { name: "twitter:image", content: srv2Asset.url },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Facilities", item: "/facilities" },
          ],
        }),
      },
    ],
  }),
  component: Facilities,
});

const EXPERIENCES = [
  { n: "I", title: "Comfortable Stay & Warm Hospitality", img: srv1Asset.url, copy: "Well-furnished rooms with breathtaking views, clean interiors and modern amenities. Our small team greets you by name and remembers how you take your tea by the second morning." },
  { n: "II", title: "Bonfire & Outdoor Evenings", img: srv2Asset.url, copy: "Cozy evenings under the stars — our bonfire is lit on request, weather permitting, with warm shawls, seasonal chai and, if you'd like, a local musician on the rabab." },
  { n: "III", title: "Local Cuisine & Slow Dining", img: srv3Asset.url, copy: "Trout from the Kunhar, honey from Naran, and slow-cooked chapli kebabs over open flame. Our kitchen writes the day's menu the morning of, based on what the mountain has offered." },
  { n: "IV", title: "Guided Jeep Tours", img: srv4Asset.url, copy: "Discover Siri Paye's alpine plateau, Sharan Forest and the upper Kaghan Valley with experienced local drivers. Half-day and full-day itineraries, private guide on request." },
];

const FACILITIES = [
  { title: "Guided Tours & Excursions", copy: "Curated half-day and full-day itineraries to Siri Paye, Sharan Forest, Naran and Lake Saif ul Malook." },
  { title: "Secure Parking", copy: "Covered on-site parking with 24/7 attendant for cars and motorcycles." },
  { title: "In-Room Dining", copy: "A quiet knock, a hot meal — full-menu room service through the day and evening." },
  { title: "24/7 Hot Water", copy: "Solar-boosted, gas-backed hot water — dependable in every season, including snowfall." },
  { title: "High-Speed Internet", copy: "Fibre-backed valley Wi-Fi in every room and across the property, verified daily." },
  { title: "Slow Breakfast", copy: "Fresh eggs, warm parathas, spiced chai and seasonal fruit — served until you are ready." },
  { title: "Concierge & Trip Desk", copy: "Trail advice, jeep hire, local artisans and quiet spots the guidebooks miss." },
  { title: "Laundry & Pressing", copy: "Same-day laundry, hand-pressed and folded — perfect for longer stays and hikes." },
  { title: "Naturalist On Staff", copy: "Walks with our resident naturalist Zain — birds, geology and local folklore, at your pace." },
];

const DAY = [
  { t: "07:00", h: "Sunrise & first light chai", c: "Warm cardamom chai delivered to your door as the first light lands on Malika Parbat." },
  { t: "08:30", h: "Slow breakfast on the terrace", c: "Cooked-to-order eggs, freshly-milled parathas, wildflower honey and a valley view." },
  { t: "10:30", h: "Trail or jeep expedition", c: "Choose between a naturalist-led walk to the deodar ridge or a jeep up to Siri Paye." },
  { t: "13:30", h: "Long lunch, valley-side", c: "Trout, mountain vegetables and slow-braised meats — served under the cedars." },
  { t: "16:00", h: "Reading hour", c: "Return to the fireplace, a book from the library and the smell of woodsmoke." },
  { t: "19:30", h: "Bonfire & dinner", c: "A four-course menu written that morning, followed by a fire under the stars." },
];

function Facilities() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Facilities & Experiences"
        title="Every comfort,"
        italic="every adventure."
        subtitle="From bonfires under the stars to jeep expeditions across Siri Paye, we've quietly built the small luxuries and the wild adventures a mountain stay deserves."
        image={srv4Asset.url}
      />

      {/* Feature Experiences */}
      <section className="py-12 md:py-10 md:py-14">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {EXPERIENCES.map((e, i) => (
            <div key={e.title} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
              </div>
              <div>
                <div className="font-display text-6xl leading-none text-gold/40">{e.n}</div>
                <h3 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">{e.title}</h3>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="border-t border-gold/10 py-14 md:py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Every Detail</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
              Nine quiet<span className="italic text-gold"> comforts.</span>
            </h2>
          </div>
          <div className="mt-20 grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <div key={f.title} className="border-t border-gold/20 pt-6">
                <div className="font-display text-2xl text-gold/50">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-2xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ivory/65">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A DAY AT ORO */}
      <section className="border-t border-gold/10 py-14 md:py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— A Day at Oro</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">The valley, hour by hour.</h2>
          </div>
          <div className="mt-20 space-y-8">
            {DAY.map((d) => (
              <div key={d.t} className="grid grid-cols-[80px_1fr] gap-8 border-t border-gold/15 pt-6 sm:grid-cols-[120px_1fr]">
                <div className="font-display text-2xl text-gold">{d.t}</div>
                <div>
                  <h3 className="font-display text-xl text-ivory">{d.h}</h3>
                  <p className="mt-2 text-base font-light leading-relaxed text-ivory/70">{d.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/10">
        <img src={hero2Asset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-rich-black/40" />
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-10 md:py-14 text-center">
          <h2 className="font-display text-5xl leading-[1.05] text-ivory">Plan your stay.</h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            Contact Us →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}