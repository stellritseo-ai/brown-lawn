import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GravelDirtWorkContent } from "@/components/site/services/GravelDirtWorkContent";
import { useLanguage } from "@/hooks/useLanguage";

function GravelDirtWorkPage() {
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
        "name": "Gravel & Dirt Work",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work"
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
        eyebrow={t("Gravel & Dirt Work", "Trabajos de Grava y Tierra")}
        title={t("Expert Site Preparation and Surface Solutions", "Soluciones Expertas de Preparación de Sitio y Superficies")}
        subtitle={t("Gravel driveway installation, repair, site grading, fill dirt, screened topsoil, French drains, and trenching across Horn Lake & 50-mile radius.", "Instalación de entradas de grava, reparación, nivelación, tierra vegetal, drenes franceses y zanjas en Horn Lake y 50 millas.")}
      />
      <GravelDirtWorkContent />
    </>
  );
}

export const Route = createFileRoute("/services/gravel-dirt-work")({
  head: () => ({
    meta: [
      { title: "Gravel & Dirt Work Services | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Expert gravel driveway installation, driveway repair, site grading, building pad preparation, fill dirt, topsoil delivery, French drains, and excavation in Horn Lake, MS and 50-mile radius across MS, TN, and AR." },
      { property: "og:title", content: "Gravel & Dirt Work | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Professional gravel driveway installation, site grading, topsoil, and drainage solutions in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work" },
    ],
  }),
  component: GravelDirtWorkPage,
});
