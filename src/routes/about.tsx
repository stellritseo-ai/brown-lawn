import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
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
        "item": "https://www.brownlawncarecleaning.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.brownlawncarecleaning.com/about"
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
        eyebrow={t("About Us", "Sobre Nosotros")}
        title={t("6 Years of Keeping Horn Lake Beautiful.", "6 Años Manteniendo Hermoso a Horn Lake.")}
        subtitle={t("A family-owned, licensed, insured, and bonded team led by Roy Lee Brown.", "Un equipo familiar, licenciado y asegurado liderado por Roy Lee Brown.")}
      />
      <About />
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
      { name: "description", content: "Learn about Brown Lawn Care & Cleaning Service, LLC. Family-owned with 6 years in business and 15+ years experience, serving Horn Lake and a 50-mile radius with lawn care, landscaping, tree removal, and commercial cleaning." },
      { property: "og:title", content: "About Us | Brown Lawn Care & Cleaning Service, LLC" },
      { property: "og:description", content: "Family-owned lawn care, landscaping, and cleaning services in Horn Lake, MS." },
    ],
  }),
  component: AboutPage,
});
