import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Germantown",
  stateCode: "TN",
  countyName: "Shelby County",
  zipCodes: ["38138", "38139"],
  distanceFromHQ: "18 miles",
  isHQ: false,
  introDescription:
    "Germantown is celebrated for its lush tree-canopied residential enclaves, equestrian estates, and upscale commercial corridors along Poplar Pike and Wolf River Boulevard. Brown Lawn Care & Cleaning Service LLC offers detail-oriented weekly lawn mowing, landscape mulch installation, shrub trimming, and corporate office janitorial services in Germantown, TN.",
  localLandmarks: [
    "Wolf River Greenway & Nature Area",
    "Germantown Performing Arts Center (GPAC)",
    "Saddle Creek Shopping Center",
    "Old Germantown & Poplar Pike historic corridor",
    "Farmington & Dogwood residential subdivisions",
  ],
  keyRoadways: [
    "Poplar Avenue (US-72)",
    "Poplar Pike",
    "Wolf River Boulevard",
    "Germantown Parkway",
    "Farmington Boulevard",
  ],
  turfAndClimateNotes:
    "Germantown's mature tree canopies create unique microclimates of deep shade and full sun. Our lawn maintenance specialists tailor mowing heights, edge flower beds with crisp vertical cuts, and apply premium dark hardwood mulch that conserves root moisture and prevents weed proliferation.",
  faqs: [
    {
      q: "Do you offer weekly lawn mowing in Germantown, TN?",
      a: "Yes, our weekly service includes precision mowing, string trimming around trees and fences, hard-surface edging, and thorough blower cleanup.",
    },
    {
      q: "Can you provide specialized shrub and hedge pruning in Germantown?",
      a: "Yes, we shape and prune formal hedges, foundation plantings, and ornamental crape myrtles to preserve property elegance.",
    },
    {
      q: "Do you clean commercial medical and dental offices in Germantown?",
      a: "Yes, we provide hospital-grade sanitization, floor maintenance, and scheduled evening janitorial services for professional suites in Germantown.",
    },
  ],
  nearbyCities: [
    { name: "Collierville, TN", slug: "collierville-tn" },
    { name: "Cordova, TN", slug: "cordova-tn" },
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
  ],
};

function GermantownPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Germantown",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/germantown-tn",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Germantown",
      "addressRegion": "TN",
      "postalCode": "38138",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Germantown, TN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityPageTemplate {...cityData} />
    </>
  );
}

export const Route = createFileRoute("/service-areas/germantown-tn")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Germantown TN | Brown Lawn Care" },
      { name: "description", content: "Premier lawn mowing, landscaping, mulch install & commercial office cleaning in Germantown, TN (38138, 38139). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care germantown tn, lawn mowing germantown tn, landscaping germantown tn, mulch install germantown, office cleaning germantown tn" },
      { property: "og:title", content: "Lawn Care & Landscaping in Germantown TN | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and cleaning solutions in Germantown, TN. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/germantown-tn" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/germantown-tn" },
    ],
  }),
  component: GermantownPage,
});
