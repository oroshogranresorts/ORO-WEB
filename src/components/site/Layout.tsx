import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Facilities", to: "/facilities" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-rich-black font-body text-ivory selection:bg-gold/30">
      {/* Utility Bar */}
      <div className="border-b border-gold/15 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex min-w-0 gap-6 sm:gap-8">
            <a href="tel:+923479044301" className="truncate text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold">
              +92 347 904 4301
            </a>
            <a href="mailto:contact@oroshogran.com" className="hidden truncate text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold sm:inline">
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
          <Link to="/" className="font-display text-2xl leading-none tracking-tight text-ivory">
            Oro <span className="text-gold">Shogran</span>
          </Link>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-ivory/70" }}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-gold/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? "Close" : "Menu"}
            </button>
            <Link to="/contact" className="group relative hidden items-center gap-3 border border-gold/60 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-rich-black md:inline-flex">
              Book Now
              <span aria-hidden className="h-px w-6 bg-current transition-all group-hover:w-9" />
            </Link>
          </div>
        </div>
        {open && (
          <div className="border-t border-gold/10 bg-rich-black/95 md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-gold" }}
                  inactiveProps={{ className: "text-ivory/80" }}
                  className="py-2 text-[12px] font-medium uppercase tracking-[0.28em]"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-gold/15 bg-rich-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-display text-4xl leading-tight text-ivory">
                Oro <span className="text-gold">Shogran</span>
              </div>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
                A serene mountain escape offering cozy stays, breathtaking
                views and warm hospitality in the heart of Shogran, Kaghan
                Valley.
              </p>
              <div className="mt-10 flex gap-3">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">Facebook</a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Address</div>
              <p className="mt-5 text-sm leading-relaxed text-ivory/75">
                ORO SHOGRAN
                <br />
                Shogran, Kaghan Valley
                <br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
              <a href="https://www.google.com/maps/dir//Shogran+kaghan+valley/@34.6397103,73.376915,28865m/data=!3m1!1e3" target="_blank" rel="noreferrer" className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold underline decoration-1 underline-offset-8 transition-colors hover:text-ivory">
                Get Directions →
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Shortcuts</div>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="transition-colors hover:text-gold">{n.label}</Link>
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
              <Link to="/" className="hover:text-gold">Privacy</Link>
              <Link to="/" className="hover:text-gold">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/40 to-rich-black" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— {eyebrow}</p>
        <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-ivory">
          {title} {italic && <span className="italic text-gold">{italic}</span>}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export const IMG = {
  hero1: "@/assets/oro/hero1.jpg",
  hero2: "@/assets/oro/hero2.jpg",
};