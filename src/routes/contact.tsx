import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactPageContent } from "@/components/site/ContactPageContent";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://www.brownlawncarecleaningservicellc.com/contact"
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
      { title: "Contact Us & Free Quotes | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Contact Brown Lawn Care & Cleaning Service, LLC in Horn Lake, MS. Call (662) 571-1048 for free quotes on lawn care, landscaping, tree removal, and commercial cleaning." },
      { property: "og:title", content: "Contact Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Free lawn care, landscaping, tree removal, and commercial cleaning estimates within 24 hours." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/contact" },
    ],
  }),
  component: ContactPage,
});
