import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { FreeQuoteContent } from "@/components/site/FreeQuoteContent";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

function FreeQuotePage() {
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
        "name": "Get a Free Quote",
        "item": "https://www.brownlawncarecleaning.com/free-quote"
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
        eyebrow={t("Get a Free Quote", "Solicitar Cotización Gratis")}
        title={t("Fast, Transparent, and No Obligation Estimates", "Estimaciones Rápida, Transparente y Sin Compromiso")}
        subtitle={t("Upfront itemized quotes for lawn care, landscaping, tree removal, gravel work, commercial janitorial, and residential cleaning in Horn Lake & 50-mile radius.", "Presupuestos desglosados para cortado de césped, paisajismo, árboles, grava y limpieza en Horn Lake y 50 millas.")}
      />
      <FreeQuoteContent />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/free-quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Request a 100% free, no-obligation itemized quote from Brown Lawn Care & Cleaning Service, LLC. Serving Horn Lake, MS and a 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Get a Free Quote | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Fast 24-hour response on free estimates for lawn mowing, landscaping, tree removal, gravel work, and commercial cleaning." },
    ],
  }),
  component: FreeQuotePage,
});
