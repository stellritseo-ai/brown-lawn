import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GravelDirtWorkContent } from "@/components/site/services/GravelDirtWorkContent";
import { useLanguage } from "@/hooks/useLanguage";

function GravelDirtWorkPage() {
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
        "name": "Gravel & Dirt Work",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gravel & Dirt Work Services",
    "serviceType": "Gravel Driveway Repair & Site Grading",
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
      { "@type": "City", "name": "Walls, MS" }
    ],
    "description": "Expert gravel driveway installation, pothole and washout repair, site grading, screened topsoil delivery, fill dirt, and drainage trenching across Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you repair washed-out or rutted gravel driveways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regrade the existing driveway base, fill deep ruts and potholes, crown the surface for proper rainwater drainage, and spread fresh compacted crushed stone or gravel."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver and spread screened topsoil and fill dirt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver and grade high-quality screened topsoil for lawn leveling and fill dirt for building pads and slope stabilization across DeSoto County."
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
      { title: "Gravel Driveway Repair & Dirt Work Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Expert gravel driveway repair, new gravel installation, site grading & topsoil delivery in Horn Lake, MS & 50-mile radius. Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "gravel driveway repair horn lake ms, gravel driveway installation desoto county, site grading horn lake, topsoil delivery memphis, driveway leveling ms" },
      { property: "og:title", content: "Gravel Driveway Repair & Dirt Work Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Professional gravel driveway installation, site grading, topsoil, and drainage solutions in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/gravel-dirt-work" },
    ],
  }),
  component: GravelDirtWorkPage,
});
