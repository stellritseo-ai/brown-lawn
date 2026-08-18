import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lawn Care Horn Lake MS | Brown Lawn Care & Cleaning Service LLC" },
      { name: "description", content: "Professional lawn care, lawn mowing, landscaping & commercial cleaning in Horn Lake, MS & 50-mile radius across MS, TN, and AR. Licensed, insured, bonded. Call (662) 571-1048." },
      { name: "keywords", content: "lawn care horn lake ms, lawn service horn lake ms, lawn mowing horn lake ms, lawn maintenance horn lake ms, landscaping horn lake ms, tree removal horn lake ms, commercial cleaning horn lake ms, cleaning services horn lake ms" },
      { property: "og:title", content: "Lawn Care Horn Lake MS | Brown Lawn Care & Cleaning Service LLC" },
      { property: "og:description", content: "15+ Years Experience & 6 Years in Business — Licensed, Insured & Bonded Lawn Care, Landscaping & Cleaning in Horn Lake, MS & 50-Mile Radius." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com" },
    ],
  }),
  component: Index,
});

function Index() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC",
    "image": "https://www.brownlawncarecleaningservicellc.com/assets/logo.png",
    "@id": "https://www.brownlawncarecleaningservicellc.com/#organization",
    "url": "https://www.brownlawncarecleaningservicellc.com",
    "telephone": "+16625711048",
    "email": "royleebrown@ymail.com",
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Roy Lee Brown"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alden Lake Dr W",
      "addressLocality": "Horn Lake",
      "addressRegion": "MS",
      "postalCode": "38637",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.9537,
      "longitude": -90.0348
    },
    "areaServed": [
      { "@type": "City", "name": "Horn Lake, MS" },
      { "@type": "City", "name": "Southaven, MS" },
      { "@type": "City", "name": "Olive Branch, MS" },
      { "@type": "City", "name": "Hernando, MS" },
      { "@type": "City", "name": "Walls, MS" },
      { "@type": "City", "name": "Nesbit, MS" },
      { "@type": "City", "name": "Memphis, TN" },
      { "@type": "City", "name": "Collierville, TN" },
      { "@type": "City", "name": "Germantown, TN" },
      { "@type": "City", "name": "Cordova, TN" },
      { "@type": "City", "name": "West Memphis, AR" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care & Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Mowing & Maintenance",
            "description": "Weekly and bi-weekly precision lawn mowing, edging, string trimming, and blower cleanup in Horn Lake, MS."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping & Design",
            "description": "Custom landscape design, dark hardwood mulch installation, flower bed edging, and shrub trimming."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree & Brush Removal",
            "description": "Tree cutting, small tree trimming, land brush clearing, and storm emergency dispatch."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gravel & Dirt Work",
            "description": "Gravel driveway installation and repair, site grading, topsoil delivery, and French drain installation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office & Commercial Cleaning",
            "description": "Scheduled commercial janitorial services, floor maintenance, carpet extraction, and office sanitization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential & Warehouse Cleaning",
            "description": "Residential deep cleaning, move-in/out housekeeping, and warehouse pressure wash sanitization."
          }
        }
      ]
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What lawn care services do you provide in Horn Lake, MS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brown Lawn Care & Cleaning Service LLC provides weekly precision lawn mowing, string trimming, hard surface edging, shrub trimming, mulch installation, tree and brush removal, gravel driveway repair, and commercial grounds maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve outside of Horn Lake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We proudly serve a 50-mile radius across Mississippi, Tennessee, and Arkansas, including Southaven, Olive Branch, Hernando, Walls, Nesbit, Memphis, Collierville, Germantown, Cordova, and West Memphis."
        }
      },
      {
        "@type": "Question",
        "name": "Is Brown Lawn Care & Cleaning Service licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully licensed, general liability insured, and bonded for all residential and commercial lawn care and cleaning operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% free, no-obligation itemized quotes within 24 hours. Call us at (662) 571-1048 or submit a request on our website."
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brown Lawn Care & Cleaning Service LLC",
    "url": "https://www.brownlawncarecleaningservicellc.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.brownlawncarecleaningservicellc.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
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
    </SiteLayout>
  );
}
