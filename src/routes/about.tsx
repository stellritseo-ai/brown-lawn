import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutPageContent } from "@/components/site/AboutPageContent";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function AboutPage() {
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
        "name": "About Us",
        "item": "https://www.brownlawncarecleaningservicellc.com/about"
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
        eyebrow={t("Where Quality Meets Community", "Donde la Calidad Encuentra la Comunidad")}
        title={t("About Brown Lawn Care & Cleaning Service, LLC", "Acerca de Brown Lawn Care & Cleaning Service, LLC")}
        subtitle={t("Family owned & operated deeply rooted in Horn Lake, MS, serving a 50-mile radius across MS, TN, and AR.", "Empresa familiar con sede en Horn Lake, MS, sirviendo en un radio de 50 millas en MS, TN y AR.")}
      />
      <AboutPageContent />
      <WhyChooseUs />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Brown Lawn Care & Cleaning Service, LLC" },
      { name: "description", content: "Learn about Brown Lawn Care & Cleaning Service, LLC. Family-owned with 6 years in business as an LLC and 15+ years experience, serving Horn Lake, MS and a 50-mile radius across MS, TN, and AR with lawn care, landscaping, tree removal, and commercial cleaning." },
      { property: "og:title", content: "About Us | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Family-owned lawn care, landscaping, tree care, and cleaning services in Horn Lake, MS serving MS, TN, & AR." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/about" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/about" },
    ],
  }),
  component: AboutPage,
});
