import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { OfficeCommercialCleaningContent } from "@/components/site/services/OfficeCommercialCleaningContent";
import { useLanguage } from "@/hooks/useLanguage";

function OfficeCommercialCleaningPage() {
  const { t } = useLanguage();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.brownlawncarecleaning.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.brownlawncarecleaning.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Office & Commercial Cleaning",
        "item": "https://www.brownlawncarecleaning.com/services/office-commercial-cleaning"
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
        eyebrow={t("Office & Commercial Cleaning", "Limpieza de Oficinas y Comercial")}
        title={t("Professional Cleanliness That Makes a Lasting Impression", "Limpieza Profesional Que Causa Una Impresión Duradera")}
        subtitle={t("Daily & weekly janitorial care, deep carpet extraction, floor waxing, restroom hygiene, and medical office cleaning in Horn Lake & 50-mile radius.", "Mantenimiento janitorial diario, limpieza de alfombras, encerado de pisos, baños y clínicas en Horn Lake y 50 millas.")}
      />
      <OfficeCommercialCleaningContent />
    </>
  );
}

export const Route = createFileRoute("/services/office-commercial-cleaning")({
  head: () => ({
    meta: [
      { title: "Office & Commercial Cleaning Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Professional office cleaning, daily janitorial services, commercial carpet cleaning, VCT floor waxing, restroom sanitation, and medical office cleaning in Horn Lake, MS and 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Office & Commercial Cleaning | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Expert commercial janitorial services, floor care, and office deep cleaning in MS, TN, & AR." },
    ],
  }),
  component: OfficeCommercialCleaningPage,
});
