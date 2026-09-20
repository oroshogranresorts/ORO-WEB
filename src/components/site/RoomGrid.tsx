import { type RoomListing } from "@/lib/room-listings";

export function RoomGrid({ rooms, eyebrow }: { rooms: RoomListing[]; eyebrow: string }) {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— {eyebrow}</p>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <article key={r.slug} className="group flex flex-col border border-gold/10 bg-rich-black/40 transition-colors hover:border-gold/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                <div className="absolute left-4 top-4 bg-rich-black/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                  From <span className="text-ivory">₨{r.price}</span> /night
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-3xl leading-tight text-ivory transition-colors group-hover:text-gold">{r.name}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-ivory/70">{r.blurb}</p>
                <div className="mt-6 flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory/60">
                  <span>{typeof r.beds === "number" ? `${r.beds} Beds` : r.beds}</span>
                  <span className="text-gold">·</span>
                  <span>{r.size}</span>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-gold/10 pt-6">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.32em] text-ivory/50">From</div>
                    <div className="mt-1 font-display text-2xl text-gold">₨{r.price}<span className="text-sm text-ivory/60"> /night</span></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-rich-black">
                    Book →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}