import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOGS } from "@/lib/blogs";

// TODO: replace with your project URL once a custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);

        const staticEntries: SitemapEntry[] = [
          { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
          { path: "/about", lastmod: today, changefreq: "monthly", priority: "0.7" },
          { path: "/rooms", lastmod: today, changefreq: "weekly", priority: "0.9" },
          { path: "/rooms/luxury", lastmod: today, changefreq: "weekly", priority: "0.9" },
          { path: "/rooms/deluxe", lastmod: today, changefreq: "weekly", priority: "0.9" },
          { path: "/facilities", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/contact", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/blogs", lastmod: today, changefreq: "weekly", priority: "0.7" },
        ];

        const blogEntries: SitemapEntry[] = BLOGS.map((b) => ({
          path: `/blogs/${b.slug}`,
          lastmod: new Date(b.updated ?? b.date).toISOString().slice(0, 10),
          changefreq: "yearly",
          priority: "0.6",
        }));

        const entries = [...staticEntries, ...blogEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});