import { createFileRoute } from "@tanstack/react-router";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host = request.headers.get("host") || "www.brownlawncarecleaningservicellc.com";
        const proto = request.headers.get("x-forwarded-proto") || "https";
        const BASE_URL = `${proto}://${host}`;

        const currentDate = "2026-10-09";
        const entries: (SitemapEntry & { lastmod?: string })[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services/lawn-mowing", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services/landscaping", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services/tree-brush-removal", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services/gravel-dirt-work", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/services/office-commercial-cleaning", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services/residential-wire-house-cleaning", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas/horn-lake-ms", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas/southaven-ms", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas/olive-branch-ms", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas/hernando-ms", changefreq: "weekly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/walls-ms", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/nesbit-ms", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/memphis-tn", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/service-areas/collierville-tn", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/germantown-tn", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/cordova-tn", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/service-areas/west-memphis-ar", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/free-quote", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/projects", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/reviews", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/careers", changefreq: "monthly", priority: "0.7", lastmod: currentDate },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path === "/" ? "/" : e.path}</loc>\n    <lastmod>${e.lastmod || currentDate}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
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
