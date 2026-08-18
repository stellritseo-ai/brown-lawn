import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Collierville",
  stateCode: "TN",
  countyName: "Shelby County",
  zipCodes: ["38017"],
  distanceFromHQ: "22 miles",
  isHQ: false,
  introDescription:
    "Known for its historic Town Square, upscale residential subdivisions, and beautiful master-planned neighborhoods, Collierville demands the highest standards of property craftsmanship. Brown Lawn Care & Cleaning Service LLC provides premier weekly lawn mowing, custom dark mulch flower bed installs, shrub pruning, and commercial janitorial cleaning in Collierville, TN.",
  localLandmarks: [
    "Historic Collierville Town Square",
    "Carriage Crossing Outdoor Mall",
    "W.C. Johnson Park",
    "Spring Creek Ranch area",
    "Estanaula & Frank Road acreage corridors",
    "Schilling Farms mixed-use community",
  ],
  keyRoadways: [
    "Poplar Avenue (US-72)",
    "Bill Morris Parkway (TN-385)",
    "Collierville Road",
    "Houston Levee Road",
    "Byhalia Road North",
  ],
  turfAndClimateNotes:
    "Collierville properties feature manicured Meyer Zoysia and Tifway Bermuda lawns alongside detailed landscape architectures. We provide precision striping, meticulous trench flowerbed edging, hand pruning of ornamental boxwoods and crape myrtles, and premium hardwood mulching.",
  faqs: [
    {
      q: "Do you service premier residential neighborhoods in Collierville?",
      a: "Yes, our experienced crews provide high-end residential lawn mowing, landscape detailing, and seasonal flowerbed manicuring across Collierville.",
    },
    {
      q: "Can you install fresh mulch and weed barriers for Collierville gardens?",
      a: "Yes, we install double-shredded dark hardwood mulch, plant shrubs, install commercial weed barrier fabric, and carve clean spade trench edges.",
    },
    {
      q: "Do you clean offices and retail suites in Collierville?",
      a: "Yes, we provide recurring commercial janitorial care, deep carpet cleaning, and facility sanitization for Collierville businesses.",
    },
  ],
  nearbyCities: [
    { name: "Germantown, TN", slug: "germantown-tn" },
    { name: "Cordova, TN", slug: "cordova-tn" },
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
  ],
};

function ColliervillePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Collierville",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/collierville-tn",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Collierville",
      "addressRegion": "TN",
      "postalCode": "38017",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Collierville, TN"
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

export const Route = createFileRoute("/service-areas/collierville-tn")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Collierville TN | Brown Lawn Care" },
      { name: "description", content: "Premier lawn mowing, landscaping, dark mulch install & commercial cleaning in Collierville, TN (38017). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care collierville tn, lawn mowing collierville tn, landscaping collierville tn, mulch installation collierville, office cleaning collierville tn" },
      { property: "og:title", content: "Lawn Care & Landscaping in Collierville TN | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and property cleaning in Collierville, TN. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/collierville-tn" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/collierville-tn" },
    ],
  }),
  component: ColliervillePage,
});
