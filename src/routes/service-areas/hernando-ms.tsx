import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Hernando",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38632"],
  distanceFromHQ: "9 miles",
  isHQ: false,
  introDescription:
    "As the historic county seat of DeSoto County, Hernando features beautiful tree-lined historic neighborhoods surrounding the Courthouse Square as well as scenic rural acreage properties. Brown Lawn Care & Cleaning Service LLC provides dependable weekly lawn mowing, brush clearing, gravel driveway maintenance, landscape enhancement, and office cleaning throughout Hernando.",
  localLandmarks: [
    "Historic DeSoto County Courthouse Square",
    "Hernando Memorial Cemetery grounds",
    "Conger Park & Renasant Park",
    "Commerce Street Business District",
    "Hernando Hills & McIngvale Subdivisions",
    "Nesbit / Hernando rural corridors",
  ],
  keyRoadways: [
    "Commerce Street (MS-304)",
    "Interstate 55 Corridor (Exit 280 & 284)",
    "McIngvale Road",
    "Hwy 51 South",
    "Byhalia Road",
  ],
  turfAndClimateNotes:
    "Hernando properties range from tight historic town lots to multi-acre residential parcels with rolling terrain. Our heavy-duty mowing equipment, topsoil grading attachments, and tree trimming chainsaws handle both manicured turf maintenance and rough brush clearing with equal precision.",
  faqs: [
    {
      q: "Do you service rural and acreage properties around Hernando, MS?",
      a: "Yes, we have commercial equipment specially suited for multi-acre properties, long gravel driveways, perimeter fence line trimming, and pasture brush cutting.",
    },
    {
      q: "Can you regrade gravel driveways after heavy rains in Hernando?",
      a: "Yes, we specialize in gravel driveway leveling, pothole filling, washout grading, and fresh stone delivery across Hernando.",
    },
    {
      q: "Do you clean offices and storefronts near the Hernando Square?",
      a: "Yes, we provide commercial janitorial cleaning, floor waxing, and routine office maintenance for businesses in the Hernando commercial district.",
    },
  ],
  nearbyCities: [
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Nesbit, MS", slug: "nesbit-ms" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
    { name: "Walls, MS", slug: "walls-ms" },
  ],
};

function HernandoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Hernando",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/hernando-ms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hernando",
      "addressRegion": "MS",
      "postalCode": "38632",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hernando, MS"
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

export const Route = createFileRoute("/service-areas/hernando-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Hernando MS | Brown Lawn Care" },
      { name: "description", content: "Reliable lawn mowing, landscaping, gravel driveway repair, brush clearing & commercial cleaning in Hernando, MS (38632). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care hernando ms, lawn mowing hernando ms, landscaping hernando ms, gravel driveway repair hernando, brush clearing desoto county" },
      { property: "og:title", content: "Lawn Care & Landscaping in Hernando MS | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care, landscaping & cleaning in Hernando, MS. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/hernando-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/hernando-ms" },
    ],
  }),
  component: HernandoPage,
});
