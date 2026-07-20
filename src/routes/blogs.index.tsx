import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import { BLOGS, AUTHOR } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Shogran Travel Blog | Kaghan Valley Guides & Stories" },
      { name: "description", content: "Travel guides, recipes and journal entries from Shogran and the Kaghan Valley — trails to Siri Paye, mountain food and the seasons at Oro Shogran hotel." },
      { name: "keywords", content: "Shogran travel blog, Kaghan Valley guide, Siri Paye trek, Makra Peak hike, things to do in Shogran, Oro Shogran journal" },
      { property: "og:title", content: "Shogran & Kaghan Valley Travel Blog — Oro Shogran" },
      { property: "og:description", content: "Guides, recipes and journal entries from Shogran, Kaghan Valley — written from the mountain by our team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
      { property: "og:image", content: hero2Asset.url },
      { name: "twitter:image", content: hero2Asset.url },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Oro Shogran Journal",
          url: "/blogs",
          description: "Travel guides, recipes and journal entries from Shogran and the Kaghan Valley.",
          author: { "@type": "Person", name: AUTHOR },
          blogPost: BLOGS.map((b) => ({
            "@type": "BlogPosting",
            headline: b.title,
            url: `/blogs/${b.slug}`,
            image: b.image,
            datePublished: new Date(b.date).toISOString(),
            author: { "@type": "Person", name: AUTHOR },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Blogs", item: "/blogs" },
          ],
        }),
      },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  const [featured, ...rest] = BLOGS;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Blogs"
        title="Field notes from"
        italic="the mountain."
        subtitle="Trail notes, seasonal recipes, small guides and quiet essays — written from the Kaghan Valley, one morning at a time."
        image={hero2Asset.url}
      />

      {/* FEATURED */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Featured story</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Link to="/blogs/$slug" params={{ slug: featured.slug }} className="relative block aspect-[16/11] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              <div className="absolute left-6 top-6 bg-gold px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-rich-black">{featured.tag}</div>
            </Link>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                <span>{featured.date}</span><span className="text-gold">·</span><span>{featured.read} read</span>
              </div>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">{featured.title}</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-ivory/75">{featured.excerpt}</p>
              <div className="mt-8 text-sm text-ivory/60">By <span className="text-gold">{AUTHOR}</span></div>
              <Link to="/blogs/$slug" params={{ slug: featured.slug }} className="mt-8 inline-flex w-fit items-center gap-3 border border-gold/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-rich-black">
                Read Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="border-t border-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">More from the blogs</h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link to="/blogs/$slug" params={{ slug: p.slug }} key={p.slug} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  <div className="absolute left-4 top-4 bg-rich-black/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-gold">{p.tag}</div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                  <span>{p.date}</span><span className="text-gold">·</span><span>{p.read}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">{p.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ivory/70">{p.excerpt}</p>
                <div className="mt-4 text-xs text-ivory/50">By <span className="text-gold/80">{AUTHOR}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}