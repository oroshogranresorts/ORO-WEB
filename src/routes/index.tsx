import { createFileRoute } from "@tanstack/react-router";
import heroTerrace from "@/assets/hero-terrace.jpg";
import heritageMarble from "@/assets/heritage-marble.jpg";
import suiteAlabaster from "@/assets/suite-alabaster.jpg";
import suiteBelvedere from "@/assets/suite-belvedere.jpg";
import diningOrangerie from "@/assets/dining-orangerie.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-rich-black font-body text-ivory selection:bg-gold/30">
      {/* Utility Bar */}
      <div className="border-b border-gold/15 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex gap-8">
            <a
              href="tel:+390451234567"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold"
            >
              +39 045 123 4567
            </a>
            <a
              href="mailto:concierge@romancy.com"
              className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold sm:inline"
            >
              Concierge@Romancy.com
            </a>
          </div>
          <a
            href="#"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold"
          >
            Member Access
          </a>
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="sticky top-0 z-50 border-b border-gold/10 bg-rich-black/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-12">
            <span className="font-display text-2xl tracking-tight text-ivory">
              Romancy
            </span>
            <div className="hidden gap-8 md:flex">
              <a
                href="#estate"
                className="text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-gold"
              >
                The Estate
              </a>
              <a
                href="#residences"
                className="text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-gold"
              >
                Residences
              </a>
              <a
                href="#cuisine"
                className="text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-gold"
              >
                Cuisine
              </a>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 bg-gold py-2 pl-3 pr-4 text-[11px] font-medium uppercase tracking-[0.2em] text-rich-black ring-1 ring-gold/20 transition-colors hover:bg-gold/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4 shrink-0"
              aria-hidden="true"
            >
              <path d="M4.5 7c.276 0 .5-.224.5-.5S4.776 6 4.5 6 4 6.224 4 6.5s.224.5.5.5Z" />
              <path
                fillRule="evenodd"
                d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-9Zm1.5-.5a.5.5 0 0 0-.5.5V11h8V3.5a.5.5 0 0 0-.5-.5h-7ZM4 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V12H4v.5Z"
                clipRule="evenodd"
              />
            </svg>
            Reserve Stay
          </button>
        </div>
      </nav>

      <main>
        {/* Hero: Editorial Split */}
        <section
          id="estate"
          className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-[42%_58%]"
        >
          <div className="flex flex-col justify-center border-r border-gold/10 p-8 lg:p-20">
            <span className="mb-6 text-[10px] uppercase tracking-[0.3em] text-gold">
              Lake Como • Italy
            </span>
            <h1 className="mb-8 text-balance font-display text-5xl leading-tight text-ivory lg:text-7xl">
              A quiet rhythm
              <br />
              of refined living.
            </h1>
            <p className="mb-12 max-w-[40ch] text-pretty leading-relaxed text-ivory/60">
              Nestled in the foothills of the Italian Alps, Romancy is an
              editorial expression of light, marble, and the hushed tones of
              dawn on the water.
            </p>

            {/* Booking Widget */}
            <div className="border border-gold/20 bg-surface/50 p-6 ring-1 ring-black/5">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-widest text-gold/60">
                    Arrival
                  </label>
                  <div className="border-b border-gold/30 pb-2 text-sm">
                    12 October
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-widest text-gold/60">
                    Departure
                  </label>
                  <div className="border-b border-gold/30 pb-2 text-sm">
                    18 October
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="w-full border border-gold/40 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-gold/5"
              >
                Check Availability
              </button>
            </div>
          </div>
          <div className="relative min-h-[500px] lg:min-h-full">
            <img
              src={heroTerrace}
              alt="Romancy terrace at dusk overlooking Lake Como"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Heritage Story */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-end gap-20 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={heritageMarble}
                  alt="Neoclassical marble detail inside the villa"
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-[min(1vw,12px)] object-cover"
                />
              </div>
              <div className="w-full pb-12 lg:w-1/2">
                <span className="mb-8 block text-[10px] uppercase tracking-[0.4em] text-gold">
                  01 — The Heritage
                </span>
                <h2 className="mb-8 text-balance font-display text-4xl lg:text-5xl">
                  The weight of history
                  <br />
                  in every stone.
                </h2>
                <p className="mb-8 max-w-[48ch] text-pretty leading-relaxed text-ivory/70">
                  Originally commissioned in 1894, Romancy has served as a
                  sanctuary for poets, composers, and those who seek a
                  deliberate pace. Our restoration honors the original
                  neoclassical architecture while introducing a modern silence.
                </p>
                <a
                  href="#"
                  className="inline-block border-b border-gold pb-1 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-gold"
                >
                  Read the Chronology
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetric Suite Spreads */}
        <section
          id="residences"
          className="border-y border-gold/10 bg-surface/30 py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 flex items-baseline justify-between">
              <h2 className="font-display text-4xl">The Residences</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Selected Collection
              </span>
            </div>

            <div className="space-y-32">
              {/* Suite 01 */}
              <div className="group flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="w-full lg:w-3/5">
                  <img
                    src={suiteAlabaster}
                    alt="The Alabaster Suite — bedroom facing Lake Como"
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="aspect-[3/2] w-full rounded-[min(1vw,12px)] object-cover"
                  />
                </div>
                <div className="w-full pt-12 lg:w-2/5">
                  <div className="mb-6 border-t border-gold/30 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60">
                      01 / The Alabaster Suite
                    </span>
                  </div>
                  <h3 className="mb-6 font-display text-3xl">
                    Morning light and curated stillness.
                  </h3>
                  <div className="mb-8 flex items-center justify-between border-b border-gold/10 pb-4">
                    <span className="text-xs text-ivory/50">
                      Lake Facing • 85 sqm
                    </span>
                    <span className="text-sm text-gold">From 1,450 EUR</span>
                  </div>
                  <p className="mb-8 max-w-[40ch] text-sm leading-relaxed text-ivory/60">
                    A masterwork of texture, featuring hand-carved stone baths
                    and private balconies overlooking the silent wake of the
                    ferry.
                  </p>
                </div>
              </div>

              {/* Suite 02 */}
              <div className="flex flex-col gap-12 lg:flex-row-reverse lg:gap-24">
                <div className="w-full lg:w-3/5">
                  <img
                    src={suiteBelvedere}
                    alt="The Belvedere Wing — panoramic lounge with velvet chairs"
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="aspect-[3/2] w-full rounded-[min(1vw,12px)] object-cover"
                  />
                </div>
                <div className="w-full pt-12 lg:w-2/5">
                  <div className="mb-6 border-t border-gold/30 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60">
                      02 / The Belvedere Wing
                    </span>
                  </div>
                  <h3 className="mb-6 font-display text-3xl">
                    The elevation of architectural intent.
                  </h3>
                  <div className="mb-8 flex items-center justify-between border-b border-gold/10 pb-4">
                    <span className="text-xs text-ivory/50">
                      Panoramic • 120 sqm
                    </span>
                    <span className="text-sm text-gold">From 2,800 EUR</span>
                  </div>
                  <p className="mb-8 max-w-[40ch] text-sm leading-relaxed text-ivory/60">
                    Spread across the upper floors, these dual-level residences
                    offer 270-degree views of the Grigna mountain range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Section */}
        <section id="cuisine" className="py-24 lg:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="order-2 flex flex-col justify-center lg:order-1">
                <span className="mb-8 block text-[10px] uppercase tracking-[0.4em] text-gold">
                  Gastronomy
                </span>
                <h2 className="mb-8 font-display text-4xl lg:text-5xl">
                  Orangerie 1894
                </h2>
                <p className="mb-12 max-w-[48ch] text-pretty leading-relaxed text-ivory/70">
                  Chef Matteo Rossi presents a menu defined by the seasons of
                  the Lombardy region. Dining is held in our historic
                  glasshouse, under the shade of century-old citrus trees.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-gold/20 pt-12">
                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-widest text-gold">
                      Breakfast
                    </span>
                    <p className="text-xs text-ivory/60">07:00 — 11:00</p>
                  </div>
                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-widest text-gold">
                      Dinner
                    </span>
                    <p className="text-xs text-ivory/60">19:30 — 23:00</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={diningOrangerie}
                  alt="Plated tasting course at Orangerie 1894"
                  width={1000}
                  height={1250}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/15 bg-rich-black pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr_1fr]">
            <div>
              <span className="mb-8 block font-display text-3xl">Romancy</span>
              <p className="mb-12 max-w-[30ch] text-sm leading-relaxed text-ivory/50">
                A private residence on the shores of Lake Como. Membership by
                invitation, sanctuary by design.
              </p>
            </div>
            <div>
              <h4 className="mb-8 text-[10px] uppercase tracking-widest text-gold">
                Navigational
              </h4>
              <ul className="space-y-4 text-xs text-ivory/60">
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Our Philosophy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Suites & Rates
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Private Events
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Press Inquiry
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-8 text-[10px] uppercase tracking-widest text-gold">
                Connect
              </h4>
              <ul className="space-y-4 text-xs text-ivory/60">
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Vogue Editorial
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Concierge Desk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-gold/10 pt-12 md:flex-row">
            <p className="text-[9px] uppercase tracking-[0.2em] text-ivory/30">
              © 2024 Romancy International Hotels S.p.A.
            </p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-ivory/30">
              <a href="#" className="hover:text-gold">
                Privacy
              </a>
              <a href="#" className="hover:text-gold">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
