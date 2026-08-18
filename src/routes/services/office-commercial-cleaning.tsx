import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { OfficeCommercialCleaningContent } from "@/components/site/services/OfficeCommercialCleaningContent";
import { useLanguage } from "@/hooks/useLanguage";

function OfficeCommercialCleaningPage() {
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
        "name": "Office & Commercial Cleaning",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/office-commercial-cleaning"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office & Commercial Cleaning Services",
    "serviceType": "Commercial Janitorial & Office Cleaning",
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
    "description": "Professional daily, weekly, and monthly commercial janitorial cleaning, office sanitation, carpet extraction, floor stripping and waxing, and restroom hygiene in Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What commercial facilities do you clean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide contract cleaning for corporate offices, medical clinics, dental practices, retail stores, banks, daycare centers, and commercial facilities across DeSoto and Shelby counties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer after-hours and weekend cleaning schedules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we tailor our janitorial schedules to your business hours, including evening and weekend visits so your operations are never disrupted."
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
        eyebrow={t("Office & Commercial Cleaning", "Limpieza de Oficinas y Comercial")}
        title={t("Professional Cleanliness That Makes a Lasting Impression", "Limpieza Profesional Que Causa Una Impresión Duradera")}
        subtitle={t("Daily & weekly janitorial care, deep carpet extraction, floor waxing, restroom hygiene, and medical office cleaning in Horn Lake & 50-mile radius.", "Mantenimiento janitorial diario, limpieza de alfombras, encerado de pisos, baños y clínicas en Horn Lake y 50 millas.")}
      />
      <OfficeCommercialCleaningContent />
    </>
  );
}

export const Route = createFileRoute("/services/office-commercial-cleaning")({
  head: () => ({
    meta: [
      { title: "Commercial Cleaning & Janitorial Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Professional commercial office cleaning, daily janitorial care, floor waxing & medical facility cleaning in Horn Lake, MS & 50-mile radius. Call (662) 571-1048." },
      { name: "keywords", content: "commercial cleaning horn lake ms, office cleaning horn lake ms, janitorial service desoto county ms, commercial carpet cleaning memphis, business cleaning southaven" },
      { property: "og:title", content: "Commercial Cleaning & Janitorial Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Expert commercial janitorial services, floor care, and office deep cleaning in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/office-commercial-cleaning" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/office-commercial-cleaning" },
    ],
  }),
  component: OfficeCommercialCleaningPage,
});
