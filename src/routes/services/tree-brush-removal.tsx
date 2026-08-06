import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TreeBrushRemovalContent } from "@/components/site/services/TreeBrushRemovalContent";
import { useLanguage } from "@/hooks/useLanguage";

function TreeBrushRemovalPage() {
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
        "name": "Tree & Brush Removal",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal"
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
      { title: "Tree & Brush Removal Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Professional tree cutting, large tree removal, brush clearing, stump grinding, deadwood pruning, and storm emergency dispatch in Horn Lake, MS and 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Tree & Brush Removal | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Expert tree cutting, land brush clearing, and storm emergency dispatch in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/tree-brush-removal" },
    ],
  }),
  component: TreeBrushRemovalPage,
});
