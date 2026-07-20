import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { BLOGS, AUTHOR, getBlog, type Blog, type BlogSection } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = getBlog(params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const { blog } = loaderData;
    return {
      meta: [
        { title: `${blog.title} — Oro Shogran` },
        { name: "description", content: blog.excerpt },
        { property: "og:title", content: blog.title },
        { property: "og:description", content: blog.excerpt },
        { property: "og:image", content: blog.image },
        { name: "twitter:card", content: "summary_large_image" },
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

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-rich-black/60 to-rich-black" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— {blog.tag}</p>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] tracking-tight text-ivory">
            {blog.title}
          </h1>
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
      <article className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-display text-2xl leading-relaxed text-ivory/90 sm:text-3xl">
          {blog.intro}
        </p>

        <div className="mt-14 space-y-14">
          {blog.sections.map((s: BlogSection, i: number) => (
            <div key={s.heading}>
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
            </div>
          ))}
        </div>

        {/* Author card */}
        <div className="mt-20 flex items-center gap-5 border-t border-gold/15 pt-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-xl text-gold">
            MK
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Written by</div>
            <div className="mt-1 font-display text-2xl text-ivory">{AUTHOR}</div>
            <div className="text-sm text-ivory/60">Field editor · Oro Shogran</div>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/blogs" className="inline-flex items-center gap-3 border border-gold/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-rich-black">
            ← All Blogs
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Keep reading</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">More from the mountain</h2>
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
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— 404</p>
        <h1 className="mt-6 font-display text-5xl text-ivory">This story hasn't been written yet.</h1>
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
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl text-ivory">Something went wrong loading this story.</h1>
        <button onClick={reset} className="mt-8 border border-gold/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-rich-black">
          Try again
        </button>
      </section>
    </SiteLayout>
  );
}