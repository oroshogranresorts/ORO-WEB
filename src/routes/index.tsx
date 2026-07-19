import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/oro-hero.jpg";
import valleyImg from "@/assets/oro-valley.jpg";
import suiteLuxury from "@/assets/oro-suite-luxury.jpg";
import suiteFamily from "@/assets/oro-suite-family.jpg";
import suiteDeluxe from "@/assets/oro-suite-deluxe.jpg";
import bonfireImg from "@/assets/oro-bonfire.jpg";
import cuisineImg from "@/assets/oro-cuisine.jpg";
import jeepImg from "@/assets/oro-jeep.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "The Retreat", href: "#retreat" },
  { label: "Suites", href: "#suites" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const SUITES = [
  {
    tag: "01 — Signature",
    name: "The Kaghan Suite",
    img: suiteLuxury,
    beds: "1 King",
    sqm: "50 sqm",
    view: "Panoramic Valley",
    price: "₨ 30,500",
    copy: "A cliffside signature suite. Fireplace, oak floors and a wall of glass framing the snowline.",
  },
  {
    tag: "02 — Residence",
    name: "Luxury Family",
    img: suiteFamily,
    beds: "2 Beds",
    sqm: "48 sqm",
    view: "Pine Forest",
    price: "₨ 22,500",
    copy: "Timber beams, hand-loom linens and morning light drawn through the deodars.",
  },
  {
    tag: "03 — Retreat",
    name: "The Deluxe Cabin",
    img: suiteDeluxe,
    beds: "2 Beds",
    sqm: "40 sqm",
    view: "Mountain Window",
    price: "₨ 18,500",
    copy: "Walnut walls, a low platform bed and a single quiet window onto the Himalaya.",
  },
];

const EXPERIENCES = [
  { n: "I", title: "Bonfire Evenings", img: bonfireImg, copy: "Wool throws, cast-iron chai and the peaks lit blue by the moon." },
  { n: "II", title: "The Guided Jeep", img: jeepImg, copy: "A private ascent through pine to Siri Paye and the meadows above the clouds." },
  { n: "III", title: "Valley Table", img: cuisineImg, copy: "A menu drawn from the mountain — karahi, saag, warm naan, mountain herbs." },
];

const FACILITIES = [
  "Cliffside Concierge",
  "24-Hour Hot Water",
  "Private Parking",
  "Wireless Throughout",
  "In-Room Dining",
  "Guided Excursions",
];

const TESTIMONIALS = [
  {
    quote:
      "A two-day stay with a scenic view I still cannot describe. The clouds sat below us. The service was quiet, precise, generous.",
    name: "Faraz Memon",
    from: "Karachi",
  },
  {
    quote:
      "Spotless rooms, warm staff, and a view of the mountains I will remember for a long time. Comfort, cleanliness, top-notch service.",
    name: "Azeem Khalid",
    from: "Lahore",
  },
  {
    quote:
      "The respect, warmth and care of the team were outstanding. Words fall short. A truly wonderful trip.",
    name: "Majid Shamrez",
    from: "Islamabad",
  },
];

function Index() {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="min-h-screen bg-rich-black font-body text-ivory selection:bg-gold/30">
      {/* Utility Bar */}
      <div className="border-b border-gold/15 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex min-w-0 gap-6 sm:gap-8">
            <a
              href="tel:+923479044301"
              className="truncate text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold"
            >
              +92 347 904 4301
            </a>
            <a
              href="mailto:contact@oroshogran.com"
              className="hidden truncate text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold sm:inline"
            >
              contact@oroshogran.com
            </a>
          </div>
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/60">
            Shogran · Kaghan Valley · 2,362 m
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gold/10 bg-rich-black/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:grid-cols-3">
          <a href="#" className="font-display text-2xl leading-none tracking-tight text-ivory">
            Oro <span className="text-gold">Shogran</span>
          </a>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-end">
            <a
              href="#reserve"
              className="group relative inline-flex items-center gap-3 border border-gold/60 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-rich-black"
            >
              Reserve
              <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-9" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Oro Shogran cliffside retreat at golden hour"
            className="h-full w-full object-cover"
            width={1600}
            height={1008}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/25 to-rich-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-rich-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-24">
          <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-gold/80">
            <span className="h-px w-10 bg-gold/60" />
            Est. 2019 · Kaghan Valley
          </div>

          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              A Private Mountain Retreat
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-ivory">
              Where the clouds
              <br />
              <span className="italic text-gold">rest below you.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
              A cliffside sanctuary in Shogran — five stories of warm stone, oak
              and quiet light, held between the pines and the Himalaya.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#suites"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-all hover:bg-ivory"
              >
                Explore The Suites
                <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-10" />
              </a>
              <a
                href="#retreat"
                className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80 underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors hover:text-gold"
              >
                The Story
              </a>
            </div>
          </div>

          {/* Booking Widget */}
          <div
            id="reserve"
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-gold/25 bg-rich-black/60 backdrop-blur-lg sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
          >
            {[
              ["Arrival", "Select date"],
              ["Departure", "Select date"],
              ["Guests", "2 Adults"],
              ["Suite", "Any residence"],
            ].map(([label, value]) => (
              <div key={label} className="bg-rich-black/70 p-5">
                <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
                  {label}
                </div>
                <div className="mt-2 font-display text-lg text-ivory">{value}</div>
              </div>
            ))}
            <button className="col-span-2 bg-gold p-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory sm:col-span-4 lg:col-span-1">
              Check Availability
            </button>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-gold/15 bg-rich-black/90 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-[10px] font-medium uppercase tracking-[0.4em] text-ivory/60">
            <span>Kaghan Valley</span>
            <span className="text-gold">✦</span>
            <span>2,362 Metres</span>
            <span className="text-gold">✦</span>
            <span>Siri Paye Meadows</span>
            <span className="text-gold">✦</span>
            <span>Pine & Deodar</span>
            <span className="text-gold">✦</span>
            <span>Since 2019</span>
          </div>
        </div>
      </section>

      {/* THE RETREAT / STORY */}
      <section id="retreat" className="relative overflow-hidden py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              — The Retreat
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Serenity, held between
              <span className="italic text-gold"> pine and peak.</span>
            </h2>
            <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-ivory/70">
              <p>
                Nestled in the heart of the majestic Kaghan Valley, Oro Shogran
                offers an unforgettable escape into nature's paradise —
                surrounded by lush meadows, snow-capped peaks and skies so
                clear you can hear them.
              </p>
              <p>
                Every room, every terrace, every fire is set with the same
                intent: to give guests a place to be quiet, together, in the
                mountains.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/20 pt-8">
              {[
                ["12", "Private Suites"],
                ["2,362m", "Elevation"],
                ["24/7", "Concierge"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{v}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[5/6] overflow-hidden">
              <img
                src={valleyImg}
                alt="Siri Paye meadow and Himalayan peaks"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1400}
                height={900}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs border border-gold/30 bg-rich-black/95 p-8 backdrop-blur lg:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                Coordinates
              </div>
              <div className="mt-3 font-display text-2xl text-ivory">
                34.63°N · 73.45°E
              </div>
              <div className="mt-2 text-xs font-light text-ivory/60">
                Shogran, Kaghan Valley, Pakistan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES */}
      <section id="suites" className="relative border-t border-gold/10 bg-rich-black py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                — Suites & Residences
              </p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
                Rooms with a
                <span className="italic text-gold"> view of the sky.</span>
              </h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-ivory/65 sm:justify-self-end">
              Twelve residences carved into the cliff. Each with a private
              window onto the valley, each dressed in linen, wool and warm
              wood.
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {SUITES.map((s, i) => (
              <article
                key={s.name}
                className={`group relative ${i === 1 ? "lg:mt-16" : ""} ${i === 2 ? "lg:mt-32" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={1500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                    {s.tag}
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="font-display text-3xl leading-tight text-ivory">
                      {s.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-b border-gold/15 pb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                  <span>{s.beds}</span>
                  <span>{s.sqm}</span>
                  <span>{s.view}</span>
                </div>

                <p className="mt-5 text-sm font-light leading-relaxed text-ivory/70">
                  {s.copy}
                </p>

                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/50">
                      From / night
                    </div>
                    <div className="mt-1 font-display text-2xl text-gold">
                      {s.price}
                    </div>
                  </div>
                  <a
                    href="#reserve"
                    className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-gold"
                  >
                    Reserve →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              — The Hours
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              A day, composed by
              <span className="italic text-gold"> the mountain.</span>
            </h2>
          </div>

          <div className="mt-20 space-y-24">
            {EXPERIENCES.map((e, i) => (
              <div
                key={e.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={1400}
                    height={1000}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
                </div>
                <div>
                  <div className="font-display text-6xl leading-none text-gold/40">
                    {e.n}
                  </div>
                  <h3 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                    {e.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70">
                    {e.copy}
                  </p>
                  <a
                    href="#reserve"
                    className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold transition-colors hover:text-ivory"
                  >
                    Arrange
                    <span aria-hidden className="h-px w-8 bg-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES STRIP */}
      <section className="border-y border-gold/15 bg-rich-black/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <div key={f} className="flex items-center gap-5">
                <span className="font-display text-xl text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="journal" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              — Guest Journal
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Told by those who
              <span className="italic text-gold"> came & stayed.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className={`relative border border-gold/15 bg-rich-black/60 p-10 transition-colors hover:border-gold/40 ${i === 1 ? "md:-translate-y-6" : ""}`}
              >
                <div className="font-display text-6xl leading-none text-gold/60">
                  &ldquo;
                </div>
                <blockquote className="mt-4 font-display text-xl leading-[1.5] text-ivory/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 border-t border-gold/15 pt-5">
                  <div className="text-sm font-medium text-gold">{t.name}</div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
                    {t.from}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* DINING BAND */}
      <section id="dining" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cuisineImg}
            alt="Valley table"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1400}
            height={1000}
          />
          <div className="absolute inset-0 bg-rich-black/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
            — The Valley Table
          </p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-7xl">
            Cooked by the fire,
            <br />
            <span className="italic text-gold">served with the view.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75">
            Traditional Pakistani mountain cuisine — karahi, saag, warm naan,
            cardamom chai — prepared fresh each morning and served on brass
            with a horizon of pine and snow.
          </p>
          <a
            href="#reserve"
            className="mt-10 inline-flex items-center gap-3 border border-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold hover:text-rich-black"
          >
            Reserve a Table
          </a>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t border-gold/15 bg-rich-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-display text-4xl leading-tight text-ivory">
                Oro <span className="text-gold">Shogran</span>
              </div>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
                A serene mountain escape offering cozy stays, breathtaking
                views, and warm hospitality in the heart of Shogran.
              </p>
              <div className="mt-10 flex gap-3">
                {["EN", "FR", "UR"].map((l) => (
                  <button
                    key={l}
                    className="border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                Address
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ivory/75">
                Oro Shogran
                <br />
                Shogran, Kaghan Valley
                <br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
              <a
                href="https://www.google.com/maps/dir//Shogran+kaghan+valley"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold underline decoration-1 underline-offset-8 transition-colors hover:text-ivory"
              >
                Get Directions →
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                Shortcuts
              </div>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition-colors hover:text-gold">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                Contact
              </div>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                <li>
                  <a href="tel:+923479044301" className="transition-colors hover:text-gold">
                    +92 347 904 4301
                  </a>
                </li>
                <li>
                  <a href="mailto:info@oroshogran.com" className="transition-colors hover:text-gold">
                    info@oroshogran.com
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-gold">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-gold/15 pt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/40 sm:flex-row sm:items-center">
            <div>© {year} Oro Shogran · All Rights Reserved</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Terms</a>
              <a href="#" className="hover:text-gold">Press</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
