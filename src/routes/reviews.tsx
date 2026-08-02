import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function ReviewsPage() {
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
        "name": "Testimonials",
        "item": "https://www.brownlawncarecleaning.com/reviews"
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
        eyebrow={t("Testimonials", "Testimonios")}
        title={t("What Our Customers Say", "Lo Que Dicen Nuestros Clientes")}
        subtitle={t("Real experiences from homeowners and businesses across Horn Lake, MS & 50-mile radius.", "Experiencias reales de propietarios y empresas en Horn Lake, MS y 50 millas a la redonda.")}
      />
      <Testimonials isGrid={true} />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Read customer reviews for Brown Lawn Care & Cleaning Service, LLC. Trusted lawn care, landscaping, tree removal, and office cleaning." },
      { property: "og:title", content: "Customer Reviews | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "5-star customer reviews from Horn Lake, Southaven, Olive Branch, and Memphis." },
    ],
  }),
  component: ReviewsPage,
});
