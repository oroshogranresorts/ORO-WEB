import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Phone as PhoneIcon, Mail as MailIcon, MapPin, Clock } from "lucide-react";
import hero2Asset from "@/assets/oro/hero2.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Oro Shogran | Best Hotel in Shogran, Kaghan Valley" },
      { name: "description", content: "Reserve your stay at Oro Shogran, the best family hotel in Shogran, Kaghan Valley. Call, WhatsApp or email — a warm reply within the day, every day." },
      { name: "keywords", content: "Book Oro Shogran, Reserve Hotel Shogran, Best Hotel in Shogran, Shogran Accommodation, Hotels in Kaghan Valley, Contact Oro Shogran, Hotel booking Kaghan Valley" },
      { property: "og:title", content: "Book Oro Shogran — Best Hotel in Shogran" },
      { property: "og:description", content: "Reserve a mountain-view suite at Oro Shogran. Phone, WhatsApp or email — a warm reply within the day." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.oroshogran.com/contact" },
      { property: "og:image", content: "https://www.oroshogran.com/oro/hero2.jpg" },
      { name: "twitter:image", content: "https://www.oroshogran.com/oro/hero2.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.oroshogran.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact & Reservations — Oro Shogran",
          url: "https://www.oroshogran.com/contact",
          mainEntity: {
            "@type": "LodgingBusiness",
            name: "Oro Shogran",
            url: "https://www.oroshogran.com/",
            telephone: "+92-347-904-4301",
            email: "info@oroshogran.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shogran",
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
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How do I reach Shogran?", acceptedAnswer: { "@type": "Answer", text: "Shogran is a scenic drive from Islamabad via Hazara Motorway (M-15), Balakot, and Kiwai. The final leg from Kiwai to Shogran is accessible via 4x4 jeep, and our team can assist with coordinating jeep transfers upon your arrival at Kiwai." } },
            { "@type": "Question", name: "Is the property open in winter?", acceptedAnswer: { "@type": "Answer", text: "Yes — we operate year-round. During snowy winter months (December through March), road access requires 4x4 vehicles, and our team is ready to assist with winter transport arrangements from Kiwai." } },
            { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Please contact ORO SHOGRAN directly for available payment options, bank transfer details, and booking confirmation." } },
            { "@type": "Question", name: "What is your cancellation policy?", acceptedAnswer: { "@type": "Answer", text: "Free cancellation is available up to 48 hours before your scheduled check-in date for bookings with eligible advance payment. Cancellations made within 48 hours of check-in will forfeit the advance deposit. In case of a no-show, 100% of the advance is non-refundable. Eligible refunds are processed within 5 to 7 working days." } },
            { "@type": "Question", name: "Do you welcome children?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — Oro Shogran is a dedicated family hotel designed to accommodate families with children comfortably." } },
            { "@type": "Question", name: "Can you help arrange jeep tours?", acceptedAnswer: { "@type": "Answer", text: "Yes. Jeep excursions to Siri Paye Meadows, Sharan Forest, and surrounding scenic spots can be coordinated through our front desk with trusted local drivers." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oroshogran.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.oroshogran.com/contact" },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const FAQ = [
  { q: "How do I reach Shogran?", a: "Shogran is a scenic drive from Islamabad via Hazara Motorway (M-15), Balakot, and Kiwai. The final leg from Kiwai to Shogran is accessible via 4x4 jeep, and our team can assist with coordinating jeep transfers upon your arrival at Kiwai." },
  { q: "Is the property open in winter?", a: "Yes — we operate year-round. During snowy winter months (December through March), road access requires 4x4 vehicles, and our team is ready to assist with winter transport arrangements from Kiwai." },
  { q: "What payment methods do you accept?", a: "Please contact ORO SHOGRAN directly for available payment options, bank transfer details, and booking confirmation." },
  { q: "What is your cancellation policy?", a: "Free cancellation is available up to 48 hours before your scheduled check-in date for bookings with eligible advance payment. Cancellations made within 48 hours of check-in will forfeit the advance deposit. In case of a no-show, 100% of the advance is non-refundable. Eligible refunds are processed within 5 to 7 working days." },
  { q: "Do you welcome children?", a: "Absolutely — Oro Shogran is a dedicated family hotel designed to accommodate families with children comfortably." },
  { q: "Can you help arrange jeep tours?", a: "Yes. Jeep excursions to Siri Paye Meadows, Sharan Forest, and surrounding scenic spots can be coordinated through our front desk with trusted local drivers." },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact & Reservations"
        title="We'd love to hear"
        italic="from you."
        subtitle="Tell us your dates, the number in your party and anything you're hoping the valley will offer — we'll write back within the day."
        image={hero2Asset.url}
      />

      {/* CONTACT + FORM */}
      <section className="py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24">
          {/* Contact details */}
          <aside className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Reach the desk</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl leading-[1.05] text-ivory">A warm line, always answered.</h2>

            <div className="mt-10 space-y-8 text-sm">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  <span className="flex h-9 w-9 items-center justify-center border border-gold/30 text-gold"><PhoneIcon className="h-4 w-4" /></span>
                  Reservations
                </div>
                <a href="tel:+923479044301" className="mt-3 block font-display text-2xl text-ivory transition-colors hover:text-gold">+92 347 904 4301</a>
                <a href="https://wa.me/923479044301" target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs uppercase tracking-[0.28em] text-ivory/60 transition-colors hover:text-gold">Message on WhatsApp →</a>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  <span className="flex h-9 w-9 items-center justify-center border border-gold/30 text-gold"><MailIcon className="h-4 w-4" /></span>
                  Email
                </div>
                <a href="mailto:info@oroshogran.com" className="mt-3 block text-ivory transition-colors hover:text-gold">info@oroshogran.com</a>
                <a href="mailto:contact@oroshogran.com" className="mt-1 block text-ivory transition-colors hover:text-gold">contact@oroshogran.com</a>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  <span className="flex h-9 w-9 items-center justify-center border border-gold/30 text-gold"><MapPin className="h-4 w-4" /></span>
                  Address
                </div>
                <p className="mt-3 leading-relaxed text-ivory/75">
                  ORO SHOGRAN<br />
                  Shogran, Kaghan Valley<br />
                  Khyber Pakhtunkhwa, Pakistan
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Oro+Shogran&destination_place_id=ChIJmZlkywYC3jgRAy4HKPeT_sI" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:text-ivory">Get Directions →</a>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  <span className="flex h-9 w-9 items-center justify-center border border-gold/30 text-gold"><Clock className="h-4 w-4" /></span>
                  Front Desk Hours
                </div>
                <p className="mt-3 leading-relaxed text-ivory/75">24 hours a day, every day of the year.</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="border border-gold/20 bg-rich-black/60 p-8 sm:p-12">
              <h3 className="font-display text-3xl text-ivory">Send us a note</h3>
              <p className="mt-3 text-sm font-light text-ivory/65">We reply within the day. For same-day arrivals please call or WhatsApp directly.</p>

              {sent ? (
                <div className="mt-10 border border-gold/30 bg-gold/5 p-8 text-center">
                  <div className="font-display text-3xl text-gold">Thank you.</div>
                  <p className="mt-3 text-sm text-ivory/75">Your note is on its way. We'll write back within the day.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const fd = new FormData(form);
                    const get = (k: string) => String(fd.get(k) ?? "").trim();
                    const first = get("first");
                    const last = get("last");
                    const email = get("email");
                    const phone = get("phone");
                    const arr = get("arr");
                    const dep = get("dep");
                    const room = get("room");
                    const msg = get("msg");
                    const subject = `Reservation Enquiry — ${first} ${last}`.trim();
                    const body = [
                      `Name: ${first} ${last}`,
                      `Email: ${email}`,
                      `Phone / WhatsApp: ${phone}`,
                      `Arrival: ${arr}`,
                      `Departure: ${dep}`,
                      `Room preference: ${room}`,
                      "",
                      "Message:",
                      msg,
                    ].join("\n");
                    const href = `mailto:info@oroshogran.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = href;
                    setSent(true);
                  }}
                  className="mt-10 grid gap-6 sm:grid-cols-2"
                >
                  {[
                    { l: "First name", n: "first", t: "text" },
                    { l: "Last name", n: "last", t: "text" },
                    { l: "Email", n: "email", t: "email" },
                    { l: "Phone / WhatsApp", n: "phone", t: "tel" },
                    { l: "Arrival date", n: "arr", t: "date" },
                    { l: "Departure date", n: "dep", t: "date" },
                  ].map((f) => (
                    <label key={f.n} className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{f.l}</span>
                      <input required type={f.t} name={f.n} className="mt-2 block w-full border-b border-gold/25 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none" />
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Room preference</span>
                    <select name="room" className="mt-2 block w-full border-b border-gold/25 bg-transparent py-3 text-sm text-ivory focus:border-gold focus:outline-none">
                      <option className="bg-rich-black">Luxury Room</option>
                      <option className="bg-rich-black">Deluxe Family Suite</option>
                      <option className="bg-rich-black">Deluxe Family Room</option>
                      <option className="bg-rich-black">Let us recommend</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Tell us more</span>
                    <textarea name="msg" rows={5} placeholder="Anything we should know? Number in your party, dietary needs, tours you're interested in..." className="mt-2 block w-full border-b border-gold/25 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none" />
                  </label>
                  <button type="submit" className="mt-2 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-rich-black transition-colors hover:bg-ivory sm:col-span-2 sm:w-fit">
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-gold/15">
            <iframe
              title="Oro Shogran location"
              src="https://www.google.com/maps?q=Oro+Shogran,+Shogran,+Kaghan+Valley&ll=34.639738,73.4593162&z=15&output=embed"
              loading="lazy"
              className="h-full w-full grayscale-[.4] invert-[.85] contrast-[.9]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/10 py-14 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Before you write</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-ivory">Frequently asked.</h2>
          </div>
          <div className="mt-16 divide-y divide-gold/15 border-y border-gold/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                  <span className="font-display text-xl text-ivory transition-colors group-open:text-gold">{f.q}</span>
                  <span className="font-display text-2xl text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-ivory/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}