import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Careers } from "@/components/site/Careers";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function CareersPage() {
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
        "name": "Careers",
        "item": "https://www.brownlawncarecleaningservicellc.com/careers"
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
        eyebrow={t("Careers", "Carreras")}
        title={t("Join the Brown Lawn Care & Cleaning Team", "Únase al Equipo de Brown Lawn Care & Cleaning")}
        subtitle={t("We are always looking for hardworking crew members, equipment operators, and cleaning specialists in Horn Lake, MS.", "Siempre buscamos miembros de equipo dedicados, operadores de equipos y especialistas de limpieza.")}
      />
      <Careers />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Job Openings | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Apply for lawn care jobs, landscaping positions, and commercial cleaning roles at Brown Lawn Care & Cleaning Service, LLC in Horn Lake, MS." },
      { property: "og:title", content: "Careers | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Join our family-owned property care and cleaning crew in Horn Lake, MS." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/careers" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/careers" },
    ],
  }),
  component: CareersPage,
});
