import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import srv1Asset from "@/assets/oro/srv1.jpg.asset.json";
import srv2Asset from "@/assets/oro/srv2.jpg.asset.json";
import srv3Asset from "@/assets/oro/srv3.jpg.asset.json";
import srv4Asset from "@/assets/oro/srv4.jpg.asset.json";
import hero1Asset from "@/assets/oro/hero1.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal — Field Notes from the Kaghan Valley" },
      { name: "description", content: "Trail notes, seasonal recipes and quiet essays from Oro Shogran — our field journal from the Kaghan Valley." },
      { property: "og:title", content: "The Journal — Oro Shogran" },
      { property: "og:description", content: "Field notes, recipes and slow essays from the mountain." },
    ],
  }),
  component: Journal,
});

const POSTS = [
  {
    tag: "Trail",
    date: "May 12, 2026",
    read: "6 min",
    title: "Sunrise on Siri Paye — a photographer's walk",
    excerpt: "How to catch the first light on the meadows without the crowds, and where the wild irises grow after the last snow melts.",
    img: srv4Asset.url,
    author: "Zain Ahmed",
  },
  {
    tag: "Recipe",
    date: "April 30, 2026",
    read: "4 min",
    title: "Trout, brown butter, walnut — the valley on a plate",
    excerpt: "Our chef Kamran on the three-ingredient dish that opens most of our dinners, and the small stream that supplies it.",
    img: srv3Asset.url,
    author: "Kamran Yousaf",
  },
  {
    tag: "Essay",
    date: "April 14, 2026",
    read: "8 min",
    title: "The night the bonfire stayed lit until dawn",
    excerpt: "A quiet essay on hospitality, silence, and the small ritual of tending a fire long past the point of usefulness.",
    img: srv2Asset.url,
    author: "Umair Rehman",
  },
  {
    tag: "Guide",
    date: "March 22, 2026",
    read: "5 min",
    title: "Packing for a Kaghan spring — a short list",
    excerpt: "Layers, boots, one book and the kind of small camera you'll actually carry. Everything else is here waiting.",
    img: srv1Asset.url,
    author: "Ayesha Malik",
  },
  {
    tag: "Trail",
    date: "March 04, 2026",
    read: "7 min",
    title: "The old shepherd's path to Sharan Forest",
    excerpt: "A half-day trail few guests know about — deodar cathedrals, a hidden stream and, if you're lucky, a distant monal call.",
    img: hero2Asset.url,
    author: "Zain Ahmed",
  },
  {
    tag: "Journal",
    date: "February 18, 2026",
    read: "3 min",
    title: "First snowfall — what the valley looks like from the terrace",
    excerpt: "A short letter, written the morning the valley disappeared under six inches of powder and everything at Oro went quiet.",
    img: hero1Asset.url,
    author: "Umair Rehman",
  },
];

function Journal() {
  const [featured, ...rest] = POSTS;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Journal"
        title="Field notes from"
        italic="the mountain."
        subtitle="Trail notes, seasonal recipes, small guides and quiet essays — written by our team from the Kaghan Valley, one morning at a time."
        image={hero2Asset.url}
      />

      {/* FEATURED */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Featured story</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div className="relative aspect-[16/11] overflow-hidden">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
              <div className="absolute left-6 top-6 bg-gold px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-rich-black">{featured.tag}</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                <span>{featured.date}</span><span className="text-gold">·</span><span>{featured.read} read</span>
              </div>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">{featured.title}</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-ivory/75">{featured.excerpt}</p>
              <div className="mt-8 text-sm text-ivory/60">By <span className="text-gold">{featured.author}</span></div>
              <button className="mt-8 inline-flex w-fit items-center gap-3 border border-gold/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-rich-black">
                Read Story →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="border-t border-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">More from the journal</h2>
            <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/60">
              {["All", "Trail", "Recipe", "Essay", "Guide"].map((c, i) => (
                <button key={c} className={`border px-4 py-2 transition-colors ${i === 0 ? "border-gold bg-gold text-rich-black" : "border-gold/20 hover:border-gold hover:text-gold"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  <div className="absolute left-4 top-4 bg-rich-black/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-gold">{p.tag}</div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                  <span>{p.date}</span><span className="text-gold">·</span><span>{p.read}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">{p.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ivory/70">{p.excerpt}</p>
                <div className="mt-4 text-xs text-ivory/50">By <span className="text-gold/80">{p.author}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— The Letter</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">
            A quiet letter,<span className="italic text-gold"> once a season.</span>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ivory/70">
            Four times a year we write — a note on the season, a recipe, a trail, and a small offer for our readers. No noise, no unsubscribe traps.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" required placeholder="Your email address" className="flex-1 border border-gold/25 bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none" />
            <button type="submit" className="bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">Subscribe</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}