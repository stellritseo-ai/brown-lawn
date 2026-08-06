import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ResidentialWireHouseContent } from "@/components/site/services/ResidentialWireHouseContent";
import { useLanguage } from "@/hooks/useLanguage";

function ResidentialWireHouseCleaningPage() {
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
        "name": "Residential & Wire House Cleaning",
        "item": "https://www.brownlawncarecleaning.com/services/residential-wire-house-cleaning"
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
        eyebrow={t("Residential & Wire House Cleaning", "Limpieza Residencial y de Galpones Agrícolas")}
        title={t("Expert Cleaning Services for Your Home and Agricultural Properties", "Servicios Expertos de Limpieza para Su Hogar y Propiedades Agrícolas")}
        subtitle={t("Housekeeping, move-in/move-out deep clean, carpet steam extraction, and agricultural wire house power wash sanitization in Horn Lake & 50-mile radius.", "Mantenimiento del hogar, mudanzas, vapor de alfombras y lavado a presión agrícola en Horn Lake y 50 millas.")}
      />
      <ResidentialWireHouseContent />
    </>
  );
}

export const Route = createFileRoute("/services/residential-wire-house-cleaning")({
  head: () => ({
    meta: [
      { title: "Residential & Wire House Cleaning | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Expert residential house cleaning, move-in/move-out deep clean, carpet steam cleaning, and agricultural wire house power wash sanitization in Horn Lake, MS and 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Residential & Wire House Cleaning | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Professional home housekeeping, move-in deep cleaning, and agricultural wire house sanitization in MS, TN, & AR." },
    ],
  }),
  component: ResidentialWireHouseCleaningPage,
});
