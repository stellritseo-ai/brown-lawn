import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TreeBrushRemovalContent } from "@/components/site/services/TreeBrushRemovalContent";
import { useLanguage } from "@/hooks/useLanguage";

function TreeBrushRemovalPage() {
  const { t } = useLanguage();
  const breadcrumbSchema = {
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
        "name": "Tree & Brush Removal",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tree & Brush Removal Services",
    "serviceType": "Tree Cutting & Brush Clearing",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Brown Lawn Care & Cleaning Service, LLC",
      "telephone": "+16625711048",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alden Lake Dr W",
        "addressLocality": "Horn Lake",
        "addressRegion": "MS",
        "postalCode": "38637",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Horn Lake, MS" },
      { "@type": "City", "name": "Southaven, MS" },
      { "@type": "City", "name": "Olive Branch, MS" },
      { "@type": "City", "name": "Hernando, MS" },
      { "@type": "City", "name": "Memphis, TN" }
    ],
    "description": "Safe tree cutting, small tree trimming, deadwood branch pruning, overgrown land brush clearing, and emergency storm response in Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide emergency storm tree clearing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide same-day emergency dispatch during regular business hours for fallen trees, hazardous broken limbs, and storm debris across Horn Lake and DeSoto County."
        }
      },
      {
        "@type": "Question",
        "name": "Can you clear thick overgrown brush and briars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in heavy-duty brush clearing, sapling removal, fence line clearing, and overgrown lot reclamation with complete debris haul-off."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow={t("Tree & Brush Removal", "Remoción de Árboles y Maleza")}
        title={t("Professional Tree and Vegetation Management You Can Trust", "Manejo Profesional de Árboles y Vegetación en el que Puede Confiar")}
        subtitle={t("Safe tree cutting, brush clearing, deadwood pruning, storm emergency response, and debris haul-off in Horn Lake & 50-mile radius.", "Corte seguro de árboles, limpieza de maleza, poda, respuesta de emergencias y retiro de escombros en Horn Lake y 50 millas.")}
      />
      <TreeBrushRemovalContent />
    </>
  );
}

export const Route = createFileRoute("/services/tree-brush-removal")({
  head: () => ({
    meta: [
      { title: "Tree Removal & Brush Clearing Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Safe tree cutting, small tree trimming, overgrown brush clearing & storm damage dispatch in Horn Lake, MS & 50-mile radius. Call (662) 571-1048 for free estimates." },
      { name: "keywords", content: "tree removal horn lake ms, tree cutting horn lake ms, brush clearing desoto county, small tree trimming olive branch, emergency tree service southaven" },
      { property: "og:title", content: "Tree Removal & Brush Clearing Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Expert tree cutting, land brush clearing, and storm emergency dispatch in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal" },
    ],
  }),
  component: TreeBrushRemovalPage,
});
