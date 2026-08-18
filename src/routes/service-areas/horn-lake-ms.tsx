import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Horn Lake",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38637"],
  distanceFromHQ: "0 miles (Headquarters)",
  isHQ: true,
  introDescription:
    "As our hometown and company headquarters, Horn Lake is the heart of Brown Lawn Care & Cleaning Service LLC. We provide premier weekly lawn mowing, custom mulch installation, tree cutting, gravel driveway grading, and commercial janitorial services to homeowners and businesses throughout the Alden Lake, Goodman Road, and Nail Road corridors.",
  localLandmarks: [
    "Alden Lake",
    "Latimer Lakes Park",
    "Horn Lake City Hall area",
    "Goodman Road Commercial Corridor",
    "Nail Road Residential Neighborhoods",
    "Shadow Oaks Subdivision",
  ],
  keyRoadways: [
    "US Route 51",
    "Goodman Road (MS-302)",
    "Nail Road",
    "Interstate 55 (nearby access)",
    "Center Street",
  ],
  turfAndClimateNotes:
    "Horn Lake's climate features long, humid summers and mild winters, ideal for vigorous Bermuda, Zoysia, and St. Augustine growth. We provide weekly mowing at optimal blade heights during the peak May through September surge, complemented by autumn leaf cleanup and early spring pre-emergent weed protection.",
  faqs: [
    {
      q: "Are you based directly in Horn Lake, MS?",
      a: "Yes! Brown Lawn Care & Cleaning Service LLC is headquartered right here in Horn Lake on Alden Lake Dr W. We provide same-day estimates and fast emergency dispatch for our local neighbors.",
    },
    {
      q: "What lawn maintenance schedule do you recommend for Horn Lake homes?",
      a: "We recommend weekly precision mowing during the high-growth summer months (April through September), transitioning to bi-weekly maintenance and fall leaf management in October and November.",
    },
    {
      q: "Do you clean commercial offices along Goodman Road?",
      a: "Yes, we handle recurring commercial janitorial contracts, floor care, carpet cleaning, and office sanitation for businesses along the Goodman Road and Hwy 51 corridors.",
    },
  ],
  nearbyCities: [
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
    { name: "Walls, MS", slug: "walls-ms" },
    { name: "Hernando, MS", slug: "hernando-ms" },
    { name: "Memphis, TN", slug: "memphis-tn" },
  ],
};

function HornLakePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Horn Lake HQ",
    "telephone": "+16625711048",
    "email": "royleebrown@ymail.com",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/horn-lake-ms",
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
    "areaServed": {
      "@type": "City",
      "name": "Horn Lake, MS"
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

export const Route = createFileRoute("/service-areas/horn-lake-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Cleaning Services in Horn Lake MS | Brown Lawn Care" },
      { name: "description", content: "Professional lawn mowing, landscaping, tree cutting, gravel driveways & commercial cleaning in Horn Lake, MS (38637). HQ local team. Call (662) 571-1048." },
      { name: "keywords", content: "lawn care horn lake ms, lawn mowing horn lake ms, landscaping horn lake ms, commercial cleaning horn lake, tree removal horn lake" },
      { property: "og:title", content: "Lawn Care & Cleaning Services in Horn Lake MS | Brown Lawn Care" },
      { property: "og:description", content: "Family-owned lawn care, landscaping & cleaning headquartered in Horn Lake, MS. Licensed, insured, bonded." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/horn-lake-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/horn-lake-ms" },
    ],
  }),
  component: HornLakePage,
});
