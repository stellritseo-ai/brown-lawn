import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LandscapingContent } from "@/components/site/services/LandscapingContent";
import { useLanguage } from "@/hooks/useLanguage";

function LandscapingPage() {
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
        "name": "Landscaping & Design",
        "item": "https://www.brownlawncarecleaning.com/services/landscaping"
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
        eyebrow={t("Landscaping & Design", "Paisajismo y Diseño")}
        title={t("Transform Your Outdoor Space Into a Masterpiece", "Transforme Su Espacio Al Aire Libre En Una Obra Maestra")}
        subtitle={t("Custom landscape design, mulching, shrub trimming, bed edging, dirt work, and hardscapes across Horn Lake & 50-mile radius.", "Diseño de paisajismo, mantillo, poda, orillado, tierra y hardscapes en Horn Lake y 50 millas a la redonda.")}
      />
      <LandscapingContent />
    </>
  );
}

export const Route = createFileRoute("/services/landscaping")({
  head: () => ({
    meta: [
      { title: "Landscaping & Design Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Professional landscape design, mulching, shrub trimming, bed edging, dirt work, seeding, and hardscape services in Horn Lake, MS and a 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Landscaping & Design | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Expert landscape design, mulching, shrub care, and hardscape installations in MS, TN, & AR." },
    ],
  }),
  component: LandscapingPage,
});
