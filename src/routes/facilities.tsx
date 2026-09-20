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
      { property: "og:url", content: "https://www.oroshogran.com/facilities" },
      { property: "og:image", content: "https://www.oroshogran.com/oro/srv2.jpg" },
      { name: "twitter:image", content: "https://www.oroshogran.com/oro/srv2.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/facilities" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "Facilities", item: "https://www.oroshogran.com/facilities" },
          ],
        }),
      },
    ],
  }),
  component: Facilities,
});

const EXPERIENCES = [
  { n: "I", title: "Comfortable Stay & Warm Hospitality", img: srv1Asset.url, copy: "Well-furnished rooms with breathtaking valley views, clean interiors, and genuine mountain hospitality to make your family feel at home." },
  { n: "II", title: "Bonfire & Outdoor Evenings", img: srv2Asset.url, copy: "Cozy evenings under the stars — bonfire setups arranged on request (weather permitting) with warm tea and crisp pine air." },
  { n: "III", title: "Fresh Local Cuisine & Dining", img: srv3Asset.url, copy: "Freshly prepared home-style meals, local trout, and traditional Pakistani favorites cooked fresh daily for our guests." },
  { n: "IV", title: "Jeep Tours & Excursions", img: srv4Asset.url, copy: "Assistance with jeep arrangements for Siri Paye Meadows, Sharan Forest, and scenic viewpoints across Kaghan Valley with trusted local drivers." },
];

const FACILITIES = [
  { title: "Jeep Tours & Excursions", copy: "Assistance with booking jeep trips to Siri Paye Meadows, Sharan Forest, and surrounding Kaghan Valley viewpoints." },
  { title: "Secure On-Site Parking", copy: "Dedicated and secure on-site parking for guests traveling with cars and vehicles." },
  { title: "Dining & Fresh Meals", copy: "Delicious home-style meals, local delicacies, and hot tea prepared fresh daily." },
  { title: "24/7 Hot Water", copy: "Reliable hot water supply throughout your stay, essential for crisp mountain mornings and chilly nights." },
  { title: "Free Wi-Fi", copy: "Complimentary wireless internet available across the hotel to keep you connected with loved ones." },
  { title: "Standby Generator", copy: "Uninterrupted power backup ensuring continuous lighting and essential services during mountain outages." },
  { title: "24/7 Front Desk", copy: "Warm local hospitality with round-the-clock desk support to assist with room needs, luggage, and travel guidance." },
  { title: "Bonfire Nights", copy: "Cozy outdoor bonfire arrangements made upon request (weather permitting) under starlit skies." },
  { title: "Outdoor Sitting Area", copy: "Spacious seating area with breathtaking panoramic views of Malika Parbat and lush pine forests." },
];

const DAY = [
  { t: "07:00", h: "Sunrise & Morning Chai", c: "Wake up to crisp pine air and fresh morning tea with panoramic mountain views." },
  { t: "08:30", h: "Hearty Mountain Breakfast", c: "Enjoy fresh eggs, warm parathas, and hot tea before setting out for your daily adventure." },
  { t: "10:30", h: "Jeep Excursion to Siri Paye", c: "Board a local 4x4 jeep for an unforgettable ride through alpine forests up to the Paye meadows." },
  { t: "14:00", h: "Fresh Lunch & Valley Views", c: "Return to Shogran for freshly prepared lunch and relax on the hotel grounds." },
  { t: "17:00", h: "Pine Walk & Evening Breeze", c: "Enjoy a relaxed stroll along Shogran's scenic pine trails as the afternoon cools." },
  { t: "19:30", h: "Dinner & Evening Bonfire", c: "Savor a warm freshly cooked dinner followed by a relaxing bonfire under the stars on request." },
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
      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {EXPERIENCES.map((e, i) => (
            <div key={e.title} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
              </div>
              <div>
                <div className="font-display text-4xl sm:text-5xl md:text-6xl leading-none text-gold/40">{e.n}</div>
                <h3 className="mt-6 font-display text-3xl sm:text-4xl leading-tight text-ivory md:text-5xl">{e.title}</h3>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="border-t border-gold/10 py-14 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Every Detail</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
              Nine quiet<span className="italic text-gold"> comforts.</span>
            </h2>
          </div>
          <div className="mt-12 md:mt-16 grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="border-t border-gold/10 py-14 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— A Day at Oro</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">The valley, hour by hour.</h2>
          </div>
          <div className="mt-12 md:mt-16 space-y-8">
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
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">Plan your stay.</h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            Contact Us →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}