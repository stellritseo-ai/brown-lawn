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
        subtitle={t("Every project tells a story. Browse our gallery to see the Brown difference.", "Cada proyecto cuenta una historia. Explore nuestra galería para ver la diferencia de Brown.")}
      />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work Gallery | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Before & after gallery of lawn care, landscaping, tree removal, gravel driveways, and cleaning projects by Brown Lawn Care & Cleaning Service." },
      { property: "og:title", content: "Work Gallery | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Browse our gallery of lawn care and cleaning work in Horn Lake, MS." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/projects" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/projects" },
    ],
  }),
  component: ProjectsPage,
});
