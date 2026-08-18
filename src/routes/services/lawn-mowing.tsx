import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LawnMowingContent } from "@/components/site/services/LawnMowingContent";
import { useLanguage } from "@/hooks/useLanguage";

function LawnMowingPage() {
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
        "name": "Lawn Mowing & Maintenance",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/lawn-mowing"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lawn Mowing & Maintenance Services",
    "serviceType": "Lawn Mowing & Turf Care",
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
    "description": "Professional residential and commercial lawn mowing, string trimming, hard surface edging, striping, and clean-off services in Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included with your weekly lawn mowing service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every visit includes precision mowing at the recommended height for your turf type, string trimming around obstacles and fence lines, crisp edging along sidewalks and driveways, and thorough leaf blower cleanup of all hard surfaces."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer commercial grounds maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle commercial properties, business complexes, retail storefronts, and HOAs across Horn Lake, Southaven, Olive Branch, and Memphis."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have my lawn mowed in Mississippi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During peak growing season (Spring through late Summer), weekly mowing is recommended for healthy Bermuda, Zoysia, and St. Augustine grasses. Bi-weekly service is available during slower growth periods."
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
      { title: "Lawn Mowing & Maintenance Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Professional weekly lawn mowing, precision edging, string trimming & commercial groundskeeping in Horn Lake, MS & 50-mile radius. Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn mowing horn lake ms, lawn mowing service horn lake ms, residential lawn mowing horn lake, commercial lawn mowing horn lake, grass cutting desoto county ms" },
      { property: "og:title", content: "Lawn Mowing & Maintenance Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Expert weekly lawn mowing, edging, striping, and property maintenance in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/lawn-mowing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/lawn-mowing" },
    ],
  }),
  component: LawnMowingPage,
});
