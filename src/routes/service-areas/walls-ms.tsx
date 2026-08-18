import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Walls",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38680"],
  distanceFromHQ: "5 miles",
  isHQ: false,
  introDescription:
    "Located in western DeSoto County near the Mississippi River Delta corridor, Walls features agricultural properties, peaceful residential neighborhoods, and expanding commercial sectors along Highway 61. Brown Lawn Care & Cleaning Service LLC provides dependable weekly lawn mowing, brush clearing, gravel driveway grading, and residential/warehouse cleaning across Walls, MS.",
  localLandmarks: [
    "Town of Walls Municipal area",
    "Highway 61 Delta corridor",
    "Delta View & Lake Cormorant rural edges",
    "Starlanding Road residential subdivisions",
  ],
  keyRoadways: [
    "US Route 61 (Blues Highway)",
    "MS-302 (Goodman Road West)",
    "Starlanding Road",
    "Delta View Road",
  ],
  turfAndClimateNotes:
    "Properties in Walls often deal with rich delta soils and vigorous weed growth. Our maintenance programs feature high-lift mower blades, thorough perimeter trimming, ditch line management, and heavy-duty brush cutting to keep large lots tidy and accessible.",
  faqs: [
    {
      q: "Do you service homes and farms along Hwy 61 in Walls, MS?",
      a: "Yes, we regularly service properties, farm residences, and small businesses along the Highway 61 and Goodman Road West corridors.",
    },
    {
      q: "Can you repair gravel driveways and clear thick brush in Walls?",
      a: "Yes, we grade gravel driveways, deliver fill dirt/topsoil, clear overgrown briars, and remove fallen trees across Walls and western DeSoto County.",
    },
  ],
  nearbyCities: [
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Hernando, MS", slug: "hernando-ms" },
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "West Memphis, AR", slug: "west-memphis-ar" },
  ],
};

function WallsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Walls",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/walls-ms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Walls",
      "addressRegion": "MS",
      "postalCode": "38680",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Walls, MS"
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

export const Route = createFileRoute("/service-areas/walls-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Walls MS | Brown Lawn Care" },
      { name: "description", content: "Professional lawn mowing, landscaping, gravel driveway repair, brush clearing & cleaning in Walls, MS (38680). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care walls ms, lawn mowing walls ms, gravel driveway repair walls ms, brush clearing desoto county, property maintenance walls ms" },
      { property: "og:title", content: "Lawn Care & Landscaping in Walls MS | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and property cleaning in Walls, MS. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/walls-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/walls-ms" },
    ],
  }),
  component: WallsPage,
});
