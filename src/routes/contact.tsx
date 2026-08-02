import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Estimate } from "@/components/site/Estimate";
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
        "item": "https://www.brownlawncarecleaning.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.brownlawncarecleaning.com/contact"
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
        eyebrow={t("Contact", "Contacto")}
        title={t("Get Your Free, No-Obligation Quote.", "Obtenga Su Cotización Sin Compromiso.")}
        subtitle={t("Tell us what you need — lawn care, landscaping, cleaning, tree removal, or gravel work — replies within 24 hours.", "Díganos lo que necesita — respuestas en 24 horas.")}
      />
      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Get a free, no-obligation quote from Brown Lawn Care & Cleaning Service, LLC. Call (662) 571-1048 or submit our online form." },
      { property: "og:title", content: "Contact Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Free lawn care, landscaping, and cleaning estimates within 24 hours." },
    ],
  }),
  component: ContactPage,
});
