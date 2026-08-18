import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactPageContent } from "@/components/site/ContactPageContent";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://www.brownlawncarecleaningservicellc.com/contact"
      }
    ]
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Brown Lawn Care & Cleaning Service, LLC",
    "url": "https://www.brownlawncarecleaningservicellc.com/contact",
    "mainEntity": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Brown Lawn Care & Cleaning Service, LLC",
      "telephone": "+16625711048",
      "email": "royleebrown@ymail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alden Lake Dr W",
        "addressLocality": "Horn Lake",
        "addressRegion": "MS",
        "postalCode": "38637",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "15:00",
          "closes": "20:00"
        }
      ]
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <PageHeader
        eyebrow={t("Contact Us", "Contáctenos")}
        title={t("Contact Brown Lawn Care & Cleaning Service", "Contacto con Brown Lawn Care & Cleaning Service")}
        subtitle={t("We're here to help — request a free quote, call (662) 571-1048, or schedule emergency storm damage service.", "Estamos aquí para ayudarle — pida su cotización gratis o llame al (662) 571-1048.")}
      />
      <ContactPageContent />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Free Estimates | Brown Lawn Care & Cleaning Service LLC" },
      { name: "description", content: "Contact Brown Lawn Care & Cleaning Service LLC in Horn Lake, MS. Call (662) 571-1048 for free quotes on lawn care, landscaping, tree removal, and commercial cleaning." },
      { name: "keywords", content: "contact lawn care horn lake ms, brown lawn care phone number, free lawn care estimate horn lake ms, desoto county lawn service contact" },
      { property: "og:title", content: "Contact Us & Free Estimates | Brown Lawn Care & Cleaning Service LLC" },
      { property: "og:description", content: "Free lawn care, landscaping, tree removal, and commercial cleaning estimates within 24 hours. Call (662) 571-1048." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/contact" },
    ],
  }),
  component: ContactPage,
});
