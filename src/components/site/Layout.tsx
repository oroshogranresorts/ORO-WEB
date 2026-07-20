import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { FloatingActions } from "./FloatingActions";
import { Phone, Mail } from "lucide-react";
import oroIconAsset from "@/assets/oro-icon.png.asset.json";

const SOCIAL = {
  instagram: "https://www.instagram.com/oro_shogran?utm_source=qr",
  facebook: "https://www.facebook.com/share/1EqrwSGJX1/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@oro.shogran?_r=1&_t=ZS-97FtBDhHOn1",
};

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.7c0-.85.24-1.43 1.46-1.43h1.56V4.65c-.27-.04-1.19-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.9v2.18H7.9v2.94h2.56V21h3.04Z" />
    </svg>
  );
}
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 8.32a6.3 6.3 0 0 1-3.68-1.18v6.94a5.42 5.42 0 1 1-4.68-5.37v2.75a2.7 2.7 0 1 0 1.94 2.6V3h2.74a3.6 3.6 0 0 0 3.68 3.53v1.79Z" />
    </svg>
  );
}

function SocialIcons({ className = "", size = 14 }: { className?: string; size?: number }) {
  const cls = "text-gold/80 transition-colors hover:text-gold";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={cls}>
        <InstagramIcon width={size} height={size} />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={cls}>
        <FacebookIcon width={size} height={size} />
      </a>
      <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className={cls}>
        <TikTokIcon width={size} height={size} />
      </a>
    </div>
  );
}

const MARQUEE_POINTS = [
  "Oro Shogran",
  "Luxury Mountain Retreat",
  "Shogran · Kaghan Valley",
  "24/7 Hot Water & Front Desk",
  "Bonfire Evenings",
  "Guided Jeep Tours",
  "Panoramic Alpine Views",
];

function MarqueeStrip() {
  const loop = [...MARQUEE_POINTS, ...MARQUEE_POINTS];
  return (
    <div className="overflow-hidden border-b border-gold/15 bg-gold/[0.04] py-2.5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loop.map((p, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-[12px] font-medium uppercase tracking-[0.32em] text-ivory/70">
            {p}
            <span aria-hidden className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Rooms",
    to: "/rooms",
    children: [
      { label: "Luxury Rooms", to: "/rooms/luxury" },
      { label: "Deluxe Rooms", to: "/rooms/deluxe" },
    ],
  },
  { label: "Facilities", to: "/facilities" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-rich-black font-body text-ivory selection:bg-gold/30">
      {/* Utility Bar */}
      <div className="border-b border-gold/15 py-4">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
          <div className="flex min-w-0 items-center gap-6 sm:gap-8">
            <a href="tel:+923479044301" className="truncate text-[13px] font-medium uppercase tracking-[0.2em] text-gold/85 transition-colors hover:text-gold">
              +92 347 904 4301
            </a>
            <a href="mailto:contact@oroshogran.com" className="hidden truncate text-[13px] font-medium uppercase tracking-[0.2em] text-gold/85 transition-colors hover:text-gold sm:inline">
              contact@oroshogran.com
            </a>
          </div>
          <SocialIcons size={18} className="justify-self-center" />
          <span className="justify-self-end shrink-0 text-[13px] font-medium uppercase tracking-[0.2em] text-gold/70 hidden md:inline">
            Shogran · Kaghan Valley
          </span>
        </div>
      </div>

      {/* Marquee strip */}
      <MarqueeStrip />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gold/10 bg-rich-black/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:grid-cols-3">
          <Link to="/" aria-label="Oro Shogran — home" className="inline-flex items-center gap-3">
            <img
              src={oroIconAsset.url}
              alt="Oro Shogran"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-2xl leading-none tracking-tight text-ivory">
              Oro <span className="text-gold">Shogran</span>
            </span>
          </Link>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((n) => (
              n.children ? (
                <div key={n.to} className="group relative">
                  <Link
                    to={n.to}
                    activeProps={{ className: "text-gold" }}
                    inactiveProps={{ className: "text-ivory/70" }}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold"
                  >
                    {n.label}
                    <span aria-hidden className="text-gold/70 transition-transform group-hover:rotate-180">▾</span>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="border border-gold/20 bg-rich-black/95 py-2 shadow-2xl backdrop-blur-md">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          activeProps={{ className: "text-gold bg-gold/5" }}
                          inactiveProps={{ className: "text-ivory/80" }}
                          className="block whitespace-nowrap px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:bg-gold/10 hover:text-gold"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
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
                <div key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "text-gold" }}
                    inactiveProps={{ className: "text-ivory/80" }}
                    className="block py-2 text-[12px] font-medium uppercase tracking-[0.28em]"
                  >
                    {n.label}
                  </Link>
                  {n.children && (
                    <div className="ml-4 mb-1 flex flex-col gap-1 border-l border-gold/20 pl-4">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          activeProps={{ className: "text-gold" }}
                          inactiveProps={{ className: "text-ivory/70" }}
                          className="py-1.5 text-[11px] font-medium uppercase tracking-[0.26em]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
              <Link to="/" aria-label="Oro Shogran — home" className="inline-flex items-center gap-4">
                <img
                  src={oroIconAsset.url}
                  alt="Oro Shogran"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <span className="font-display text-4xl leading-tight text-ivory">
                  Oro <span className="text-gold">Shogran</span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
                A serene mountain escape offering cozy stays, breathtaking
                views and warm hospitality in the heart of Shogran, Kaghan
                Valley.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">
                  <InstagramIcon width={14} height={14} /> Instagram
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">
                  <FacebookIcon width={14} height={14} /> Facebook
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold">
                  <TikTokIcon width={14} height={14} /> TikTok
                </a>
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
              <a href="https://www.google.com/maps/dir/?api=1&destination=Oro+Shogran&destination_place_id=ChIJmZlkywYC3jgRAy4HKPeT_sI" target="_blank" rel="noreferrer" className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold underline decoration-1 underline-offset-8 transition-colors hover:text-ivory">
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
                <li>
                  <a href="tel:+923479044301" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
                    +92 347 904 4301
                  </a>
                </li>
                <li>
                  <a href="mailto:info@oroshogran.com" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
                    info@oroshogran.com
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@oroshogran.com" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
                    contact@oroshogran.com
                  </a>
                </li>
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
          <div className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/40">
            © 2019 All Rights Reserved. Developed By{" "}
            <a
              href="https://www.oscargraphix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-gold/80"
            >
              Oscar Graphix
            </a>
          </div>
        </div>
      </footer>
      <FloatingActions />
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