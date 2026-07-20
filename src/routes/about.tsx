import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import aboutAsset from "@/assets/oro/about.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import srv1Asset from "@/assets/oro/srv1.jpg.asset.json";
import srv3Asset from "@/assets/oro/srv3.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Oro Shogran | Luxury Hotel in Shogran, Kaghan" },
      { name: "description", content: "Meet the family behind Oro Shogran — a luxury hotel in Shogran, Kaghan Valley, built on quiet hospitality, local craft and love of the Himalayan slopes." },
      { name: "keywords", content: "About Oro Shogran, Luxury Hotel in Shogran, Family Hotel in Shogran, Kaghan Valley hotel story, Shogran resort owners" },
      { property: "og:title", content: "About Oro Shogran — Luxury Family Hotel in Shogran" },
      { property: "og:description", content: "A family-run luxury hotel in Shogran, Kaghan Valley — quiet hospitality, local craft and warmth on the Himalayan slopes." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutAsset.url },
      { name: "twitter:image", content: aboutAsset.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Oro Shogran",
          url: "/about",
          description: "The story, philosophy and team behind Oro Shogran — a luxury family hotel in Shogran, Kaghan Valley.",
          mainEntity: {
            "@type": "LodgingBusiness",
            name: "Oro Shogran",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Shogran",
              addressRegion: "Khyber Pakhtunkhwa",
              addressCountry: "PK",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { n: "01", title: "Rooted in the Valley", copy: "Every stone, timber beam and hand-woven throw was sourced within a day's walk of Shogran. Our home is built from the mountain that surrounds it." },
  { n: "02", title: "Quiet Hospitality", copy: "Our team greets you by name, remembers how you take your chai, and disappears when you want the fireplace and the silence to yourselves." },
  { n: "03", title: "Slow, Local, Honest", copy: "Trout from the Kunhar, honey from Naran's hives, apples pressed the morning you arrive — the pantry is a love letter to the region." },
  { n: "04", title: "Guardians of the Land", copy: "We plant more deodars than we cut, filter every drop of grey-water, and pack out every visitor's trace so the next family sees what we did." },
];

const TIMELINE = [
  { y: "2018", t: "A dream is drawn on a napkin", c: "Two brothers, one sketchbook and a spring hillside outside Shogran. The first plans for a warm, honest lodge take shape." },
  { y: "2019", t: "Oro Shogran opens its doors", c: "Six rooms, a wood stove and a single copper kettle. Our first guests arrive on horseback in a spring hailstorm." },
  { y: "2021", t: "The Deluxe wing", c: "We double the property and build the glass-walled dining room facing the snowline." },
  { y: "2023", t: "The Journal begins", c: "We start documenting the valley — trails, artisans, wild recipes — and share it with every guest." },
  { y: "2026", t: "Today", c: "Three suite categories, a full-time naturalist on staff, and a valley we love more than the day we opened." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="A family retreat, "
        italic="rooted in the mountain."
        subtitle="Oro Shogran began as a quiet promise — to build a place in the Kaghan Valley where warmth, craft and the wildness of the Himalaya could meet under one roof."
        image={aboutAsset.url}
      />

      {/* INTRO */}
      <section className="py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Our Philosophy</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
              A house shaped by<span className="italic text-gold"> the valley itself.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base font-light leading-relaxed text-ivory/75 lg:col-span-7">
            <p>
              We do not think of Oro Shogran as a hotel. It is a family home
              that we happen to share with travellers — a house whose windows
              are cut to frame Malika Parbat at dawn, whose fires are lit before
              you arrive, and whose kitchen answers to the season rather than
              the menu card.
            </p>
            <p>
              Every corner of the property is designed to slow you down: a
              reading nook tucked beneath the staircase, a copper bath that
              looks straight into the pines, a terrace where the only schedule
              is when the light turns gold across the ridge.
            </p>
            <p>
              We are a small, quietly obsessive team of eleven — a chef, a
              naturalist, three housekeepers who could teach masterclasses in
              linen, and a night watchman who knows every star above the
              valley by name.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— What we believe</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">Four quiet principles.</h2>
          </div>
          <div className="mt-20 grid gap-10 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.n} className="border-t border-gold/20 pt-6">
                <div className="font-display text-2xl text-gold/50">{v.n}</div>
                <h3 className="mt-3 font-display text-3xl text-ivory">{v.title}</h3>
                <p className="mt-4 text-base font-light leading-relaxed text-ivory/70">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE STORY */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={srv3Asset.url} alt="Kitchen" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— The Table</p>
            <h3 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
              Every plate begins<span className="italic text-gold"> in the valley.</span>
            </h3>
            <p className="mt-8 text-base font-light leading-relaxed text-ivory/75">
              Our chef Kamran walks the meadows most mornings before service — foraging morels in May, wild watercress from the streams, and the small purple berries that turn our late-summer sorbet.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-ivory/75">
              Breakfast is the only fixed meal. Everything after that is a conversation between what the mountain offered that day and what you feel like eating.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-32 grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— The Trails</p>
            <h3 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
              A naturalist on staff,<span className="italic text-gold"> a valley at your feet.</span>
            </h3>
            <p className="mt-8 text-base font-light leading-relaxed text-ivory/75">
              Zain, our resident naturalist, has spent fourteen years mapping the ridgelines between Shogran and Siri Paye. He walks with guests who want the geology and the folklore, and quietly stays behind when you'd rather have the trail to yourself.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-ivory/75">
              Ask him about the Himalayan monal at sunrise — you'll never look at a bird the same way again.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden lg:order-2">
            <img src={srv1Asset.url} alt="Naturalist" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— A short history</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">Eight years, one valley.</h2>
          </div>
          <div className="mt-20 space-y-14">
            {TIMELINE.map((e) => (
              <div key={e.y} className="grid grid-cols-[80px_1fr] gap-8 border-t border-gold/15 pt-8 sm:grid-cols-[120px_1fr]">
                <div className="font-display text-3xl text-gold">{e.y}</div>
                <div>
                  <h3 className="font-display text-2xl text-ivory">{e.t}</h3>
                  <p className="mt-3 text-base font-light leading-relaxed text-ivory/70">{e.c}</p>
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
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <h2 className="font-display text-5xl leading-[1.05] text-ivory">Come and stay awhile.</h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-ivory/75">Three suite categories, a fire always lit, and a valley that will change the pace of everything.</p>
          <Link to="/rooms" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            View Rooms →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}