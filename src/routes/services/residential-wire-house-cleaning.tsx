import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ResidentialWireHouseContent } from "@/components/site/services/ResidentialWireHouseContent";
import { useLanguage } from "@/hooks/useLanguage";

function ResidentialWireHouseCleaningPage() {
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
        "name": "Residential & Warehouse Cleaning",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential & Warehouse Cleaning Services",
    "serviceType": "House Cleaning & Warehouse Power Washing",
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
      { "@type": "Southaven, MS", "name": "Southaven, MS" },
      { "@type": "Olive Branch, MS", "name": "Olive Branch, MS" },
      { "@type": "Memphis, TN", "name": "Memphis, TN" }
    ],
    "description": "Professional residential house cleaning, move-in and move-out deep cleaning, carpet steam extraction, and heavy-duty industrial warehouse pressure washing across Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a residential move-in/move-out deep cleaning cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our deep cleaning covers detailed kitchen and appliance degreasing, full bathroom descaling and sanitizing, baseboard cleaning, carpet steam extraction, inside cabinet wipedowns, and window washing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you power wash commercial warehouses and agricultural barns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use commercial-grade high-pressure washing systems to degrease warehouse concrete floors, remove heavy dirt and grime from agricultural barns, and sanitize storage facilities."
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
      { title: "House Cleaning & Warehouse Power Washing Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Professional house cleaning, move-in/out deep cleaning, carpet steam extraction & warehouse pressure washing in Horn Lake, MS & 50-mile radius. Call (662) 571-1048." },
      { name: "keywords", content: "house cleaning horn lake ms, residential cleaning horn lake ms, deep cleaning desoto county, warehouse pressure washing memphis, barn cleaning north ms" },
      { property: "og:title", content: "House Cleaning & Warehouse Power Washing Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Professional home housekeeping, move-in deep cleaning, and warehouse sanitization in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/residential-wire-house-cleaning" },
    ],
  }),
  component: ResidentialWireHouseCleaningPage,
});
