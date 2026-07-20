import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
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
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: hero2Asset.url },
      { name: "twitter:image", content: hero2Asset.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact & Reservations — Oro Shogran",
          url: "/contact",
          mainEntity: {
            "@type": "LodgingBusiness",
            name: "Oro Shogran",
            telephone: "+92-347-904-4301",
            email: "info@oroshogran.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shogran",
              addressLocality: "Shogran",
              addressRegion: "Khyber Pakhtunkhwa",
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
            { "@type": "Question", name: "How do I reach Shogran?", acceptedAnswer: { "@type": "Answer", text: "Shogran is a ~7 hour drive from Islamabad via Balakot and Kiwai. The last stretch is a 45-minute jeep ride — we can arrange this from Kiwai on arrival." } },
            { "@type": "Question", name: "Is the property open in winter?", acceptedAnswer: { "@type": "Answer", text: "Yes — we operate year-round. From late December through early March, the road may require a 4x4; we arrange transfers from Kiwai as part of a winter package." } },
            { "@type": "Question", name: "Do you accept card payments?", acceptedAnswer: { "@type": "Answer", text: "We accept Visa and Mastercard, bank transfer and cash (PKR). A 30% deposit confirms your reservation; the balance is paid on departure." } },
            { "@type": "Question", name: "What is your cancellation policy?", acceptedAnswer: { "@type": "Answer", text: "Full refund up to 14 days before arrival. 50% refund between 7 and 14 days. Non-refundable within 7 days — we're happy to move dates once, free of charge." } },
            { "@type": "Question", name: "Do you welcome children?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — our family rooms are built for it. High chairs, cribs and a simpler children's menu are all available on request." } },
            { "@type": "Question", name: "Can you help arrange jeep tours?", acceptedAnswer: { "@type": "Answer", text: "Yes. Half-day and full-day tours to Siri Paye, Sharan Forest, Naran and Lake Saif ul Malook are arranged through our concierge, with vetted local drivers." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "/contact" },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const FAQ = [
  { q: "How do I reach Shogran?", a: "Shogran is a ~7 hour drive from Islamabad via Balakot and Kiwai. The last stretch is a 45-minute jeep ride — we can arrange this from Kiwai on arrival." },
  { q: "Is the property open in winter?", a: "Yes — we operate year-round. From late December through early March, the road may require a 4x4; we arrange transfers from Kiwai as part of a winter package." },
  { q: "Do you accept card payments?", a: "We accept Visa and Mastercard, bank transfer and cash (PKR). A 30% deposit confirms your reservation; the balance is paid on departure." },
  { q: "What is your cancellation policy?", a: "Full refund up to 14 days before arrival. 50% refund between 7 and 14 days. Non-refundable within 7 days — we're happy to move dates once, free of charge." },
  { q: "Do you welcome children?", a: "Absolutely — our family rooms are built for it. High chairs, cribs and a simpler children's menu are all available on request." },
  { q: "Can you help arrange jeep tours?", a: "Yes. Half-day and full-day tours to Siri Paye, Sharan Forest, Naran and Lake Saif ul Malook are arranged through our concierge, with vetted local drivers." },
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
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24">
          {/* Contact details */}
          <aside className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Reach the desk</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ivory">A warm line, always answered.</h2>

            <div className="mt-10 space-y-8 text-sm">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Reservations</div>
                <a href="tel:+923479044301" className="mt-3 block font-display text-2xl text-ivory transition-colors hover:text-gold">+92 347 904 4301</a>
                <a href="https://wa.me/923479044301" target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs uppercase tracking-[0.28em] text-ivory/60 transition-colors hover:text-gold">Message on WhatsApp →</a>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Email</div>
                <a href="mailto:info@oroshogran.com" className="mt-3 block text-ivory transition-colors hover:text-gold">info@oroshogran.com</a>
                <a href="mailto:contact@oroshogran.com" className="mt-1 block text-ivory transition-colors hover:text-gold">contact@oroshogran.com</a>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Address</div>
                <p className="mt-3 leading-relaxed text-ivory/75">
                  ORO SHOGRAN<br />
                  Shogran, Kaghan Valley<br />
                  Khyber Pakhtunkhwa, Pakistan
                </p>
                <a href="https://www.google.com/maps/dir//Shogran+kaghan+valley/@34.6397103,73.376915,28865m/data=!3m1!1e3" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:text-ivory">Get Directions →</a>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Front Desk Hours</div>
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
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
                      <option className="bg-rich-black">Luxury Family Rooms</option>
                      <option className="bg-rich-black">Deluxe Family Suit</option>
                      <option className="bg-rich-black">Deluxe Family Rooms</option>
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
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-gold/15">
            <iframe
              title="Oro Shogran location"
              src="https://www.google.com/maps?q=Shogran+kaghan+valley&output=embed"
              loading="lazy"
              className="h-full w-full grayscale-[.4] invert-[.85] contrast-[.9]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">— Before you write</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory">Frequently asked.</h2>
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