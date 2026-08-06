import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Lawn care, landscaping, tree removal, brush cutting, gravel driveways, and office/residential cleaning in Horn Lake, MS & 50-mile radius." },
      { property: "og:title", content: "Our Services | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Full-service lawn care, landscaping, and cleaning in Horn Lake, MS." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
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
        "name": "Services",
        "item": "https://www.brownlawncarecleaningservicellc.com/services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader
        eyebrow={t("Services", "Servicios")}
        title={t("What We Do — From Your Lawn to Your Office.", "Lo Que Hacemos — Desde Su Césped Hasta Su Oficina.")}
        subtitle={t("Licensed, insured, and bonded property care across Horn Lake and the 50-mile radius.", "Cuidado de propiedad licenciado y asegurado en Horn Lake y 50 millas a la redonda.")}
      />
      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
