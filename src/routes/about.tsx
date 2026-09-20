import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import aboutAsset from "@/assets/oro/about.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import prop1Asset from "@/assets/oro/prop1.jpg.asset.json";
import prop2Asset from "@/assets/oro/prop2.jpg.asset.json";
import srv2Asset from "@/assets/oro/srv2.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Oro Shogran | Boutique Mountain Resort in Kaghan Valley" },
      { name: "description", content: "Learn about ORO SHOGRAN — a boutique mountain resort in Shogran, Kaghan Valley offering comfortable stays, mountain views, and warm hospitality." },
      { name: "keywords", content: "About Oro Shogran, Hotel in Shogran, Boutique Resort Shogran, Kaghan Valley hotel, Shogran Accommodation" },
      { property: "og:title", content: "About Oro Shogran — Boutique Resort in Shogran" },
      { property: "og:description", content: "A boutique mountain resort in Shogran, Kaghan Valley — comfortable stays, family spaces and peaceful mountain surroundings." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.oroshogran.com/about" },
      { property: "og:image", content: "https://www.oroshogran.com/oro/about.jpg" },
      { name: "twitter:image", content: "https://www.oroshogran.com/oro/about.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Oro Shogran",
          url: "https://www.oroshogran.com/about",
          description: "About ORO SHOGRAN — a boutique mountain resort in Shogran, Kaghan Valley.",
          mainEntity: {
            "@type": "Hotel",
            name: "Oro Shogran",
            url: "https://www.oroshogran.com/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Shogran",
              addressRegion: "Khyber Pakhtunkhwa",
              postalCode: "21210",
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://www.oroshogran.com/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const PILLARS = [
  { n: "01", title: "Comfort & Cleanliness", copy: "Clean, well-maintained rooms and comfortable bedding designed to provide a restful stay in the high mountains." },
  { n: "02", title: "Warm Hospitality", copy: "Attentive front desk service, dependable 24/7 hot water, power backup, and assistance whenever you need it." },
  { n: "03", title: "Mountain & Valley Views", copy: "Stunning alpine panoramas of Shogran and the surrounding peaks right from our property and terrace." },
  { n: "04", title: "Memorable Stays", copy: "Peaceful environment, evening bonfires, delicious dining, and an ideal base to explore Siri Paye and Kaghan Valley." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Oro Shogran"
        title="Boutique mountain resort"
        italic="in Kaghan Valley."
        subtitle="Comfort, cleanliness, and peaceful mountain surroundings in the heart of Shogran."
        image={aboutAsset.url}
      />

      {/* INTRO STORY */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Who We Are</p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-ivory">
            About <span className="italic text-gold">ORO SHOGRAN</span>
          </h2>
          <div className="mt-8 space-y-6 text-base sm:text-lg font-light leading-relaxed text-ivory/80 text-left sm:text-center">
            <p>
              ORO SHOGRAN is a boutique mountain resort located in the beautiful hills of Shogran, Kaghan Valley, Khyber Pakhtunkhwa.
            </p>
            <p>
              We offer comfortable accommodation, beautiful mountain surroundings, family-friendly spaces and a peaceful environment for guests looking to relax and enjoy the natural beauty of Shogran.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-gold/20 bg-gold/[0.04] p-8 shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Our Focus Is Simple</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base font-medium tracking-wide text-ivory">
              <span>Comfort</span>
              <span className="text-gold">•</span>
              <span>Cleanliness</span>
              <span className="text-gold">•</span>
              <span>Hospitality</span>
              <span className="text-gold">•</span>
              <span>Mountain Views</span>
              <span className="text-gold">•</span>
              <span>Memorable Stays</span>
            </div>
          </div>

          <p className="mt-10 text-base sm:text-lg font-light leading-relaxed text-ivory/80">
            Whether you are travelling with family, friends or as a couple, ORO SHOGRAN provides a comfortable base to explore Shogran and the surrounding Kaghan Valley.
          </p>
        </div>
      </section>

      {/* PILLARS / VALUES */}
      <section className="border-t border-gold/10 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— What Guides Us</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">Our Core Commitments</h2>
          </div>
          <div className="mt-12 md:mt-16 grid gap-10 sm:grid-cols-2">
            {PILLARS.map((v) => (
              <div key={v.n} className="border-t border-gold/20 pt-6">
                <div className="font-display text-2xl text-gold/60">{v.n}</div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl text-ivory">{v.title}</h3>
                <p className="mt-4 text-base font-light leading-relaxed text-ivory/70">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY PHOTO SHOWCASE */}
      <section className="border-t border-gold/10 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— The Property</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ivory">Serenity in the Pines</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/15">
              <img src={prop1Asset.url} alt="Oro Shogran exterior view" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/15">
              <img src={prop2Asset.url} alt="Oro Shogran surroundings" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/15">
              <img src={srv2Asset.url} alt="Evening bonfire at Oro Shogran" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMINGS */}
      <section className="border-t border-gold/10 py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Operating Hours</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
              ORO <span className="italic text-gold">SHOGRAN</span>
            </h2>
            <p className="mt-6 text-base font-light text-ivory/70">24/7 Front Desk assistance throughout the year.</p>
          </div>
          <ul className="mx-auto mt-12 max-w-xl divide-y divide-gold/15 border-y border-gold/15">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((d) => (
              <li key={d} className="flex items-center justify-between py-3.5 text-sm font-light text-ivory/80">
                <span className="font-medium uppercase tracking-[0.24em] text-ivory">{d}</span>
                <span className="tracking-wide text-gold">24 Hours (Open)</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/10">
        <img src={hero2Asset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-rich-black/40" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">Plan Your Mountain Getaway.</h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-ivory/75">Comfortable rooms, scenic views, and warm hospitality await you in Shogran.</p>
          <Link to="/rooms" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory">
            View Rooms →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}