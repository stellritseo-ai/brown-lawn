import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Welcome } from "@/components/site/Welcome";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactIllustrationSection } from "@/components/site/ContactIllustrationSection";
import { ServiceArea } from "@/components/site/ServiceArea";
import { GetInTouch } from "@/components/site/GetInTouch";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brown Lawn Care & Cleaning Service, LLC | Horn Lake, MS" },
      { name: "description", content: "Family-owned lawn care, landscaping, tree removal, gravel driveway repair, and commercial/residential cleaning in Horn Lake, MS & 50-mile radius. Call (662) 571-1048." },
      { name: "keywords", content: "lawn care horn lake, landscaping horn lake ms, office cleaning southhaven, tree removal olive branch, gravel driveway repair memphis, residential cleaning horn lake" },
      { property: "og:title", content: "Brown Lawn Care & Cleaning Service, LLC | Horn Lake, MS" },
      { property: "og:description", content: "Licensed, insured & bonded family business with 15+ years experience. Serving a 50-mile radius with emergency dispatch during business hours." },
    ],
  }),
  component: Index,
});

function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC",
    "image": "https://www.brownlawncarecleaning.com/assets/logo.png",
    "@id": "https://www.brownlawncarecleaning.com/#organization",
    "url": "https://www.brownlawncarecleaning.com",
    "telephone": "+16625711048",
    "email": "royleebrown@ymail.com",
    "priceRange": "$$",
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
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      {/* <TrustBar /> */}
      <Welcome />
      <Services />
      <EmergencyCTA />
      <Process />
      <WhyChooseUs />
      <Projects isLanding={true} />
      <Testimonials />
      <ContactIllustrationSection />
      <ServiceArea />
      <GetInTouch />
      {/* <Toaster /> */}
    </SiteLayout>
  );
}
