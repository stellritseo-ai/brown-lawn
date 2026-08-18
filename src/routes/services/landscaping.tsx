import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LandscapingContent } from "@/components/site/services/LandscapingContent";
import { useLanguage } from "@/hooks/useLanguage";

function LandscapingPage() {
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
        "name": "Landscaping & Design",
        "item": "https://www.brownlawncarecleaningservicellc.com/services/landscaping"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscaping & Design Services",
    "serviceType": "Landscape Design & Mulching",
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
    "description": "Professional landscape design, dark hardwood mulch installation, flower bed edging, shrub and bush trimming, and seasonal flowerbed maintenance across Horn Lake, MS and a 50-mile radius."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of mulch do you install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install premium double-shredded dark hardwood mulch, black mulch, red mulch, pine bark, and pine straw, complete with weed barrier fabric installation and trench edging."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide shrub trimming and bush pruning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team prunes and shapes ornamental shrubs, hedges, boxwoods, and foundation plantings to promote healthy foliage and maintain clean curb appeal."
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
      { title: "Landscaping & Mulch Installation Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Professional landscape design, dark hardwood mulch installation, shrub trimming & flowerbed edging in Horn Lake, MS & 50-mile radius. Call (662) 571-1048." },
      { name: "keywords", content: "landscaping horn lake ms, landscaping company horn lake ms, mulch installation desoto county, shrub trimming horn lake, flower bed edging memphis" },
      { property: "og:title", content: "Landscaping & Mulch Installation Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Expert landscape design, mulching, shrub care, and hardscape installations in MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/services/landscaping" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/services/landscaping" },
    ],
  }),
  component: LandscapingPage,
});
