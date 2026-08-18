import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function ProjectsPage() {
  const { t } = useLanguage();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.brownlawncarecleaningservicellc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://www.brownlawncarecleaningservicellc.com/projects"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader
        eyebrow={t("Gallery", "Galería")}
        title={t("See Our Work — Before & After.", "Vea Nuestro Trabajo — Antes y Después.")}
        subtitle={t("Every project tells a story. Browse our gallery to see the Brown difference in Horn Lake, MS & 50-mile radius.", "Cada proyecto cuenta una historia. Explore nuestra galería para ver la diferencia de Brown en Horn Lake y 50 millas.")}
      />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work Gallery & Before/After | Brown Lawn Care & Cleaning Service LLC" },
      { name: "description", content: "Before & after project gallery of lawn mowing, landscaping, tree cutting, gravel driveway repair, and cleaning work across Horn Lake, MS & 50-mile radius." },
      { name: "keywords", content: "lawn care before and after horn lake ms, landscaping projects desoto county, gravel driveway repair photos memphis, tree removal gallery" },
      { property: "og:title", content: "Work Gallery & Before/After | Brown Lawn Care & Cleaning Service LLC" },
      { property: "og:description", content: "Browse our before and after gallery of lawn care, landscaping, and cleaning craftsmanship in Horn Lake, MS." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/projects" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/projects" },
    ],
  }),
  component: ProjectsPage,
});
