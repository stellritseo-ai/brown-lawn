import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LawnMowingContent } from "@/components/site/services/LawnMowingContent";
import { useLanguage } from "@/hooks/useLanguage";

function LawnMowingPage() {
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
        "name": "Lawn Mowing & Maintenance",
        "item": "https://www.brownlawncarecleaning.com/services/lawn-mowing"
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
        eyebrow={t("Lawn Mowing & Maintenance", "Cortado y Mantenimiento de Césped")}
        title={t("Professional Lawn Care That Transforms Your Property", "Cuidado Profesional del Césped Que Transforma Su Propiedad")}
        subtitle={t("Weekly mowing, edging, trimming, striping, and hard surface clean-off across Horn Lake and a 50-mile radius.", "Cortado semanal, orillado, podado y limpieza completa en Horn Lake y 50 millas a la redonda.")}
      />
      <LawnMowingContent />
    </>
  );
}

export const Route = createFileRoute("/services/lawn-mowing")({
  head: () => ({
    meta: [
      { title: "Lawn Mowing & Maintenance Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Professional lawn mowing and maintenance services in Horn Lake, MS and a 50-mile radius. Weekly mowing, edging, striping, string trimming, commercial groundskeeping, and residential lawn care." },
      { property: "og:title", content: "Lawn Mowing & Maintenance | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Expert weekly lawn mowing, edging, striping, and property maintenance in MS, TN, & AR." },
    ],
  }),
  component: LawnMowingPage,
});
