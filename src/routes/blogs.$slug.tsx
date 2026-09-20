import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { BLOGS, AUTHOR, getBlog, type Blog, type BlogSection } from "@/lib/blogs";
import { toAbsoluteUrl } from "@/lib/seo";

function toISO(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function slugifyHeading(h: string): string {
  return h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = getBlog(params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const { blog } = loaderData;
    const url = `https://www.oroshogran.com/blogs/${params.slug}`;
    const imageUrl = toAbsoluteUrl(blog.image);
    const published = toISO(blog.date);
    const modified = toISO(blog.updated ?? blog.date);
    const wordCount = blog.sections.reduce(
      (n, s) => n + s.body.reduce((m, p) => m + p.split(/\s+/).length, 0),
      blog.intro.split(/\s+/).length,
    );
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.excerpt,
      image: [imageUrl],
      datePublished: published,
      dateModified: modified,
      author: { "@type": "Person", name: AUTHOR },
      publisher: {
        "@type": "Organization",
        name: "Oro Shogran",
        url: "https://www.oroshogran.com/",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: blog.tag,
      keywords: (blog.keywords ?? []).join(", "),
      wordCount,
    };
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
        { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.oroshogran.com/blogs" },
        { "@type": "ListItem", position: 3, name: blog.title, item: url },
      ],
    };
    const faqLd = blog.faqs && blog.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

    return {
      meta: [
        { title: `${blog.title} — Oro Shogran` },
        { name: "description", content: blog.excerpt },
        { name: "keywords", content: (blog.keywords ?? []).join(", ") },
        { name: "author", content: AUTHOR },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: blog.title },
        { property: "og:description", content: blog.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: imageUrl },
        { property: "article:published_time", content: published },
        { property: "article:modified_time", content: modified },
        { property: "article:author", content: AUTHOR },
        { property: "article:section", content: blog.tag },
        ...(blog.keywords ?? []).map((k) => ({ property: "article:tag", content: k })),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: blog.title },
        { name: "twitter:description", content: blog.excerpt },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
        ...(faqLd
          ? [{ type: "application/ld+json", children: JSON.stringify(faqLd) }]
          : []),
      ],
    };
  },
  component: BlogDetail,
  notFoundComponent: BlogNotFound,
  errorComponent: BlogError,
});

function BlogDetail() {
  const { blog } = Route.useLoaderData() as { blog: Blog };
  const related = BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3);
  const furtherReads = (blog.furtherReading ?? [])
    .map((slug) => BLOGS.find((b) => b.slug === slug))
    .filter((b): b is Blog => Boolean(b) && b!.slug !== blog.slug)
    .slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-rich-black/60 to-rich-black" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
          {/* Breadcrumb (visual) */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/60">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="text-gold/50">/</span>
            <Link to="/blogs" className="hover:text-gold">Blogs</Link>
            <span className="text-gold/50">/</span>
            <span className="text-ivory/80">{blog.tag}</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— {blog.tag}</p>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] tracking-tight text-ivory">
            {blog.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            {blog.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/60">
            <span>{blog.date}</span>
            <span className="text-gold">·</span>
            <span>{blog.read} read</span>
            <span className="text-gold">·</span>
            <span>By <span className="text-gold">{AUTHOR}</span></span>
          </div>
        </div>
      </section>

      {/* Feature image */}
      <section className="mx-auto -mt-8 max-w-5xl px-6">
        <div className="aspect-[16/9] overflow-hidden">
          <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-14">
        {/* Key takeaways */}
        {blog.takeaways && blog.takeaways.length > 0 && (
          <aside className="mb-14 border border-gold/25 bg-gold/[0.03] p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              Key takeaways
            </div>
            <ul className="mt-5 space-y-3 text-ivory/85">
              {blog.takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed sm:text-[17px]">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Table of contents */}
        {blog.sections.length > 2 && (
          <nav aria-label="In this story" className="mb-16 border-t border-b border-gold/15 py-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              In this story
            </div>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {blog.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugifyHeading(s.heading)}`}
                    className="group flex items-baseline gap-3 text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="border-b border-transparent group-hover:border-gold/50">
                      {s.heading}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="font-display text-2xl leading-relaxed text-ivory/90 sm:text-3xl">
          {blog.intro}
        </p>

        {/* Quick facts strip */}
        {blog.quickFacts && blog.quickFacts.length > 0 && (
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-4">
            {blog.quickFacts.map((f) => (
              <div key={f.label} className="bg-rich-black p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-lg leading-snug text-ivory">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-14 space-y-14">
          {blog.sections.map((s: BlogSection, i: number) => (
            <section key={s.heading} id={slugifyHeading(s.heading)} className="scroll-mt-14 md:mt-12 md:mt-16">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gold/20" />
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl">{s.heading}</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-[1.85] text-ivory/80 sm:text-lg">
                {s.body.map((p: string, j: number) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              {blog.pullquote && i === Math.floor(blog.sections.length / 2) && (
                <blockquote className="my-14 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-gold sm:text-3xl">
                  “{blog.pullquote}”
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion */}
        {blog.conclusion && blog.conclusion.length > 0 && (
          <section className="mt-12 md:mt-16 border-t border-gold/15 pt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— In closing</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              A last thought before you go
            </h2>
            <div className="mt-6 space-y-5 text-base font-light leading-[1.85] text-ivory/80 sm:text-lg">
              {blog.conclusion.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-gold bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-transparent hover:text-gold"
              >
                Reserve your stay
              </Link>
              <Link
                to="/rooms"
                className="inline-flex items-center gap-3 border border-gold/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-colors hover:bg-gold hover:text-rich-black"
              >
                See our suites
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="mt-14 md:mt-12 md:mt-16 border-t border-gold/15 pt-14" id="faqs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Frequently asked</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              Questions guests often ask
            </h2>
            <dl className="mt-10 divide-y divide-gold/15">
              {blog.faqs.map((f, i) => (
                <div key={i} className="py-6">
                  <dt className="font-display text-xl leading-snug text-ivory sm:text-2xl">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-base font-light leading-[1.85] text-ivory/75 sm:text-lg">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Further reading (curated by tag) */}
        {furtherReads.length > 0 && (
          <section className="mt-12 md:mt-16 border-t border-gold/15 pt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Further reading</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              If you liked this piece
            </h2>
            <ul className="mt-8 divide-y divide-gold/15">
              {furtherReads.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: r.slug }}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-display text-xl leading-snug text-ivory transition-colors group-hover:text-gold sm:text-2xl">
                      {r.title}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                      {r.tag} · {r.read}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Keyword tags */}
        {blog.keywords && blog.keywords.length > 0 && (
          <div className="mt-16 flex flex-wrap gap-2">
            {blog.keywords.map((k) => (
              <span
                key={k}
                className="border border-gold/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/70"
              >
                #{k}
              </span>
            ))}
          </div>
        )}

        {/* Author card */}
        <div className="mt-12 md:mt-16 flex items-center gap-5 border-t border-gold/15 pt-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-xl text-gold">
            MK
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Written by</div>
            <div className="mt-1 font-display text-2xl text-ivory">{AUTHOR}</div>
            <div className="text-sm text-ivory/60">Field editor · Oro Shogran</div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/60">
              Mazhar Khan writes from the retreat about mountain travel, food, and the small rituals of hospitality in the Kaghan Valley.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/blogs" className="inline-flex items-center gap-3 border border-gold/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-rich-black">
            ← All Blogs
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-gold/10 py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Keep reading</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-ivory">More from the mountain</h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link to="/blogs/$slug" params={{ slug: p.slug }} key={p.slug} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  <div className="absolute left-4 top-4 bg-rich-black/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-gold">{p.tag}</div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                  <span>{p.date}</span><span className="text-gold">·</span><span>{p.read}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">{p.title}</h3>
                <div className="mt-3 text-xs text-ivory/50">By <span className="text-gold/80">{AUTHOR}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function BlogNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-14 md:py-14 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— 404</p>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-ivory">This story hasn't been written yet.</h1>
        <p className="mt-6 text-ivory/70">The post you were looking for is not on the shelf.</p>
        <Link to="/blogs" className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-rich-black">
          ← All Blogs
        </Link>
      </section>
    </SiteLayout>
  );
}

function BlogError({ reset }: { reset: () => void }) {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-14 md:py-14 text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-ivory">Something went wrong loading this story.</h1>
        <button onClick={reset} className="mt-8 border border-gold/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-rich-black">
          Try again
        </button>
      </section>
    </SiteLayout>
  );
}