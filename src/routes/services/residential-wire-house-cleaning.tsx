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
        "item": "https://www.brownlawncarecleaningservicellc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.brownlawncarecleaningservicellc.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Residential & Warehouse Cleaning",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning"
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
        eyebrow={t("Residential & Warehouse Cleaning", "Limpieza Residencial y de Galpones Agrícolas")}
        title={t("Expert Cleaning Services for Your Home and Commercial Warehouses", "Servicios Expertos de Limpieza para Su Hogar y Almacenes")}
        subtitle={t("Housekeeping, move-in/move-out deep clean, carpet steam extraction, and warehouse power wash sanitization in Horn Lake & 50-mile radius.", "Mantenimiento del hogar, mudanzas, vapor de alfombras y lavado a presión de almacenes en Horn Lake y 50 millas.")}
      />
      <ResidentialWireHouseContent />
    </>
  );
}

export const Route = createFileRoute("/services/residential-wire-house-cleaning")({
  head: () => ({
    meta: [
      { title: "Residential & Warehouse Cleaning | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Expert residential house cleaning, move-in/move-out deep clean, carpet steam cleaning, and warehouse power wash sanitization in Horn Lake, MS and 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Residential & Warehouse Cleaning | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Professional home housekeeping, move-in deep cleaning, and warehouse sanitization in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning" },
    ],
  }),
  component: ResidentialWireHouseCleaningPage,
});
