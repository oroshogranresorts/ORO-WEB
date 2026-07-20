import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "923479044301";
const WHATSAPP_MESSAGE = "Hello Oro Shogran, I'd like to enquire about a stay.";

export function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
      setProgress(p);
      setVisible(h.scrollTop > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const size = 56;
  const stroke = 2;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (1 - progress);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
        <svg
          className="relative h-7 w-7"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.7.244-1.06 0-.257-2.02-1.633-2.278-1.633zm-2.334 7.263h-.043c-1.63 0-3.216-.487-4.577-1.376l-3.202 1.032 1.046-3.088A8.276 8.276 0 0 1 8.44 16.14c0-4.612 3.774-8.37 8.386-8.37 2.235 0 4.34.874 5.92 2.45a8.319 8.319 0 0 1 2.457 5.92c-.015 4.612-3.79 8.386-8.4 8.386zm7.12-15.52a10.03 10.03 0 0 0-7.12-2.95c-5.558 0-10.07 4.512-10.086 10.07 0 1.774.472 3.5 1.36 5.03L6 26.66l5.744-1.505a10.104 10.104 0 0 0 4.828 1.23h.015c5.558 0 10.07-4.512 10.086-10.07a10.05 10.05 0 0 0-2.965-7.19z" />
        </svg>
      </a>

      {/* Scroll to top with progress ring */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`pointer-events-auto relative flex items-center justify-center rounded-full border border-gold/40 bg-rich-black/80 text-gold backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
        style={{ width: size, height: size }}
      >
        <svg
          className="absolute inset-0 -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.15}
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={dash}
            style={{ transition: "stroke-dashoffset 120ms linear" }}
          />
        </svg>
        <ArrowUp className="relative h-5 w-5" strokeWidth={2.2} />
      </button>
    </div>
  );
}