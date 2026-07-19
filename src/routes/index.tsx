import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import hero1Asset from "@/assets/oro/hero1.jpg.asset.json";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";
import aboutAsset from "@/assets/oro/about.jpg.asset.json";
import room1Asset from "@/assets/oro/room1.jpg.asset.json";
import room2Asset from "@/assets/oro/room2.jpg.asset.json";
import room3Asset from "@/assets/oro/room3.jpg.asset.json";
import srv1Asset from "@/assets/oro/srv1.jpg.asset.json";
import srv2Asset from "@/assets/oro/srv2.jpg.asset.json";
import srv3Asset from "@/assets/oro/srv3.jpg.asset.json";
import srv4Asset from "@/assets/oro/srv4.jpg.asset.json";
import t1Asset from "@/assets/oro/t1.jpg.asset.json";
import t2Asset from "@/assets/oro/t2.jpg.asset.json";
import t3Asset from "@/assets/oro/t3.jpg.asset.json";
import { SiteLayout } from "@/components/site/Layout";

const heroImg = hero1Asset.url;
const valleyImg = hero2Asset.url;
const aboutImg = aboutAsset.url;
const suiteLuxury = room1Asset.url;
const suiteFamily = room2Asset.url;
const suiteDeluxe = room3Asset.url;
const stayImg = srv1Asset.url;
const bonfireImg = srv2Asset.url;
const cuisineImg = srv3Asset.url;
const jeepImg = srv4Asset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const SUITES = [
  {
    tag: "01 — Signature",
    name: "Luxury Family Rooms",
    img: suiteLuxury,
    beds: "2 Beds",
    sqm: "48 sqm",
    view: "Motorcycle Parking",
    price: "₨ 22,500",
    copy: "Warm timber, hand-loom linens and morning light drawn through the deodars.",
  },
  {
    tag: "02 — Residence",
    name: "Deluxe Family Suit",
    img: suiteFamily,
    beds: "2 Beds",
    sqm: "50 sqm",
    view: "Motorcycle Parking",
    price: "₨ 30,500",
    copy: "A cliffside residence — fireplace, oak floors and a wall of glass framing the snowline.",
  },
  {
    tag: "03 — Retreat",
    name: "Deluxe Family Rooms",
    img: suiteDeluxe,
    beds: "2 Beds",
    sqm: "40 sqm",
    view: "Car Parking",
    price: "₨ 18,500",
    copy: "Walnut walls, a low platform bed and a single quiet window onto the Himalaya.",
  },
];

const EXPERIENCES = [
  {
    n: "I",
    title: "Comfortable Stay & Warm Hospitality",
    img: stayImg,
    copy: "Relax in our well-furnished rooms, offering breathtaking views, clean interiors and modern amenities. Our friendly staff is always ready to assist and make your stay comfortable and memorable.",
  },
  {
    n: "II",
    title: "Bonfire & Outdoor Evenings",
    img: bonfireImg,
    copy: "Enjoy cozy evenings under the stars with our bonfire setup. Gather with friends and family, share stories, and create unforgettable memories in the fresh mountain air.",
  },
  {
    n: "III",
    title: "Local Cuisine & Dining",
    img: cuisineImg,
    copy: "Savor the taste of authentic local dishes prepared fresh daily. Our on-site kitchen offers a variety of traditional and continental meals for a delightful dining experience.",
  },
  {
    n: "IV",
    title: "Guided Jeep Tours",
    img: jeepImg,
    copy: "Discover the stunning landscapes of Shogran, Siri Paye and Kaghan Valley with our guided jeep tours. Experienced drivers ensure a safe and thrilling journey through scenic mountain roads.",
  },
];

const FACILITIES = [
  { title: "Guided Tours & Excursions", copy: "Discover the hidden gems of Shogran with our expertly guided tours and unforgettable outdoor adventures." },
  { title: "Parking Space", copy: "Spacious and secure on-site parking available for your convenience and peace of mind." },
  { title: "Room Service", copy: "Prompt and attentive room service, delivering comfort and delicious meals right to your door." },
  { title: "24/7 Hot Water", copy: "Enjoy round-the-clock hot water supply for a comfortable and relaxing stay, no matter the season." },
  { title: "Internet Service", copy: "Stay connected with our high-speed, reliable internet service available throughout the hotel." },
  { title: "Breakfast", copy: "Start your day with a freshly prepared breakfast, served with stunning mountain views." },
];

const TESTIMONIALS = [
  {
    quote:
      "I really enjoyed at Shogran due to the comfortable and peaceful environment at Oro Shogran hotel. One of the amazing sceneries at the hotel. Room service and hot water excellent.",
    name: "Jasvinder Kumar",
    from: "Guest",
    img: t3Asset.url,
  },
  {
    quote:
      "An amazingly beautiful experience. A two-day stay at Oro Shogran having a scenic view — the mountains and clouds in front of the hotel are fascinating. Rent affordable, food tasty, service great.",
    name: "Faraz Memon",
    from: "Guest",
    img: t1Asset.url,
  },
  {
    quote:
      "A fantastic stay. Service excellent from start to finish. Staff friendly and accommodating. Beautiful mountain view, spotless rooms — comfort, cleanliness and top-notch service.",
    name: "Azeem Khalid",
    from: "Guest",
    img: t1Asset.url,
  },
  {
    quote:
      "A wonderful trip. Truly appreciate the respect and warmth shown throughout. Administration and management were outstanding — words fall short in expressing my gratitude.",
    name: "Majid Shamrez",
    from: "Guest",
    img: t2Asset.url,
  },
];

function Index() {
  const [year] = useState(new Date().getFullYear());

  return (
    <div id="top" className="min-h-screen bg-rich-black font-body text-ivory selection:bg-gold/30">
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
            Shogran · Kaghan Valley
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gold/10 bg-rich-black/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:grid-cols-3">
          <a href="#top" className="font-display text-2xl leading-none tracking-tight text-ivory">
            Oro <span className="text-gold">Shogran</span>
          </a>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-gold"
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
              Book Now
              <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-9" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Oro Shogran" className="h-full w-full object-cover" width={1600} height={1008} />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/25 to-rich-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-rich-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-24">
          <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-gold/80">
            <span className="h-px w-10 bg-gold/60" />
            Luxury in the Mountains
          </div>

          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              ORO SHOGRAN
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-ivory">
              Where Serenity
              <br />
              <span className="italic text-gold">Meets Luxury.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
              Nestled in the heart of the majestic Kaghan Valley — a serene
              mountain escape offering cozy stays, breathtaking views and
              warm hospitality.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#suites" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-rich-black transition-all hover:bg-ivory">
                Explore Rooms
                <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-10" />
              </a>
              <a href="#retreat" className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80 underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors hover:text-gold">
                About Us
              </a>
            </div>
          </div>

          {/* Booking Widget */}
          <div id="reserve" className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-gold/25 bg-rich-black/60 backdrop-blur-lg sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            {[
              ["Check in", "Select date"],
              ["Check out", "Select date"],
              ["Guests", "2 Persons"],
              ["Beds / Baths", "Any"],
            ].map(([label, value]) => (
              <div key={label} className="bg-rich-black/70 p-5">
                <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">{label}</div>
                <div className="mt-2 font-display text-lg text-ivory">{value}</div>
              </div>
            ))}
            <button className="col-span-2 bg-gold p-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory sm:col-span-4 lg:col-span-1">
              Search
            </button>
          </div>
        </div>

        <div className="relative border-y border-gold/15 bg-rich-black/90 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-[10px] font-medium uppercase tracking-[0.4em] text-ivory/60">
            <span>Kaghan Valley</span>
            <span className="text-gold">✦</span>
            <span>Siri Paye</span>
            <span className="text-gold">✦</span>
            <span>Pine & Deodar</span>
            <span className="text-gold">✦</span>
            <span>Since 2019</span>
          </div>
        </div>
      </section>

      {/* THE RETREAT / ABOUT */}
      <section id="retreat" className="relative overflow-hidden py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              — Welcome to Oro Shogran
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Where Nature Meets
              <span className="italic text-gold"> Hospitality.</span>
            </h2>
            <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-ivory/70">
              <p>
                Nestled in the heart of the majestic Kaghan Valley, Oro Shogran
                Hotel offers an unforgettable escape into nature's paradise.
                Surrounded by lush green meadows, snow-capped peaks and
                crystal-clear skies — the perfect retreat for travelers seeking
                peace, adventure and unmatched hospitality.
              </p>
              <p>
                Our culinary philosophy is inspired by the rich flavors of
                traditional Pakistani and regional cuisine, reimagined with
                modern touches and the freshest local ingredients.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/20 pt-8">
              {[["3", "Room Types"], ["24/7", "Concierge"], ["★★★★★", "Guest Rated"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{v}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[5/6] overflow-hidden">
              <img src={aboutImg} alt="Oro Shogran valley" className="h-full w-full object-cover" loading="lazy" width={1400} height={900} />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs border border-gold/30 bg-rich-black/95 p-8 backdrop-blur lg:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Address</div>
              <div className="mt-3 font-display text-xl text-ivory">Shogran, Kaghan Valley</div>
              <div className="mt-2 text-xs font-light text-ivory/60">Khyber Pakhtunkhwa, Pakistan</div>
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
                — The Best For Your Family
              </p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
                Our Favorite
                <span className="italic text-gold"> Rooms.</span>
              </h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-ivory/65 sm:justify-self-end">
              Well-furnished rooms with breathtaking views, clean interiors and
              modern amenities — dressed in linen, wool and warm wood.
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {SUITES.map((s, i) => (
              <article key={s.name} className={`group relative ${i === 1 ? "lg:mt-16" : ""} ${i === 2 ? "lg:mt-32" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" width={1200} height={1500} />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{s.tag}</div>
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="font-display text-3xl leading-tight text-ivory">{s.name}</h3>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-b border-gold/15 pb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                  <span>{s.beds}</span>
                  <span>{s.sqm}</span>
                  <span>{s.view}</span>
                </div>
                <p className="mt-5 text-sm font-light leading-relaxed text-ivory/70">{s.copy}</p>
                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/50">From / night</div>
                    <div className="mt-1 font-display text-2xl text-gold">{s.price}</div>
                  </div>
                  <a href="#reserve" className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory underline decoration-gold decoration-1 underline-offset-8 transition-colors hover:text-gold">
                    Book now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Our Service</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Hotel
              <span className="italic text-gold"> Facilities.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* EXPERIENCES */}
      <section className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Our Service</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              A day, composed by
              <span className="italic text-gold"> the mountain.</span>
            </h2>
          </div>

          <div className="mt-20 space-y-24">
            {EXPERIENCES.map((e, i) => (
              <div key={e.title} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={e.title} className="h-full w-full object-cover" loading="lazy" width={1400} height={1000} />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
                </div>
                <div>
                  <div className="font-display text-6xl leading-none text-gold/40">{e.n}</div>
                  <h3 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">{e.title}</h3>
                  <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70">{e.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="journal" className="relative border-t border-gold/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Guest Feedback</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
              Testimonials
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name + i} className="relative border border-gold/15 bg-rich-black/60 p-8 transition-colors hover:border-gold/40">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/30" loading="lazy" />
                  <div>
                    <div className="text-sm font-medium text-gold">{t.name}</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">{t.from}</div>
                  </div>
                </div>
                <div className="mt-6 font-display text-4xl leading-none text-gold/60">&ldquo;</div>
                <blockquote className="mt-2 text-sm font-light leading-[1.7] text-ivory/80">{t.quote}</blockquote>
              </figure>
            ))}
          </div>
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
                Oro Shogran — a serene mountain escape offering cozy stays,
                breathtaking views and warm hospitality in the heart of
                Shogran.
              </p>
              <div className="mt-10 flex gap-3">
                {["English", "French"].map((l) => (
                  <button key={l} className="border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Address</div>
              <p className="mt-5 text-sm leading-relaxed text-ivory/75">
                ORO SHOGRAN
                <br />
                Shogran, Kaghan Valley
              </p>
              <a href="https://www.google.com/maps/dir//Shogran+kaghan+valley/@34.6397103,73.376915,28865m/data=!3m1!1e3" target="_blank" rel="noreferrer" className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold underline decoration-1 underline-offset-8 transition-colors hover:text-ivory">
                Get Directions →
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Shortcuts</div>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition-colors hover:text-gold">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Contact Us</div>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                <li><a href="tel:+923479044301" className="transition-colors hover:text-gold">+92 347 904 4301</a></li>
                <li><a href="mailto:info@oroshogran.com" className="transition-colors hover:text-gold">info@oroshogran.com</a></li>
                <li><a href="mailto:contact@oroshogran.com" className="transition-colors hover:text-gold">contact@oroshogran.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-gold/15 pt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/40 sm:flex-row sm:items-center">
            <div>© {year} All Rights Reserved · Oro Shogran</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}