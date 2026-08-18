import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Olive Branch",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38654"],
  distanceFromHQ: "12 miles",
  isHQ: false,
  introDescription:
    "Olive Branch blends historic charm in Old Towne with sprawling suburban estates and expansive commercial business parks. Brown Lawn Care & Cleaning Service LLC provides comprehensive property care including weekly lawn mowing, custom dark mulch flower bed installs, tree thinning, gravel driveway maintenance, and corporate office janitorial services across Olive Branch.",
  localLandmarks: [
    "Old Towne Olive Branch",
    "Olive Branch City Park",
    "Cherokee Valley Golf Club area",
    "Plantation Golf Club area",
    "Hacks Cross Industrial & Logistics Park",
    "Alexander & Craft Road Subdivisions",
  ],
  keyRoadways: [
    "MS-302 (Goodman Road)",
    "Hacks Cross Road",
    "Craft Road",
    "Alexander Road",
    "US-78 / Interstate 22 Corridor",
    "Bethel Road",
  ],
  turfAndClimateNotes:
    "Olive Branch properties often possess larger estate acreage and manicured bermudagrass turf. Our commercial zero-turn mowers deliver immaculate striping patterns while our detailing crews ensure precise trimming along fence lines, stone borders, and decorative masonry.",
  faqs: [
    {
      q: "Do you service large residential lots and acreage in Olive Branch?",
      a: "Yes, we have commercial equipment capable of handling both compact residential subdivision yards and multi-acre private estates in Olive Branch.",
    },
    {
      q: "What commercial cleaning services do you offer in Olive Branch business parks?",
      a: "We provide scheduled janitorial maintenance, warehouse floor power washing, carpet steam cleaning, and sanitized office maintenance for corporate centers along the US-78 / I-22 and Hacks Cross corridors.",
    },
    {
      q: "Can you repair gravel driveways and deliver topsoil in Olive Branch?",
      a: "Yes, we grade gravel driveways, repair potholes, install French drainage systems, and deliver screened topsoil across Olive Branch.",
    },
  ],
  nearbyCities: [
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Hernando, MS", slug: "hernando-ms" },
    { name: "Collierville, TN", slug: "collierville-tn" },
    { name: "Germantown, TN", slug: "germantown-tn" },
  ],
};

function OliveBranchPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Olive Branch",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/olive-branch-ms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Olive Branch",
      "addressRegion": "MS",
      "postalCode": "38654",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Olive Branch, MS"
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

export const Route = createFileRoute("/service-areas/olive-branch-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Olive Branch MS | Brown Lawn Care" },
      { name: "description", content: "Professional lawn mowing, landscaping, tree cutting, gravel driveways & commercial cleaning in Olive Branch, MS (38654). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care olive branch ms, lawn mowing olive branch ms, landscaping olive branch ms, tree removal olive branch, commercial cleaning olive branch" },
      { property: "og:title", content: "Lawn Care & Landscaping in Olive Branch MS | Brown Lawn Care" },
      { property: "og:description", content: "Expert property maintenance and cleaning solutions in Olive Branch, MS. Licensed, insured, bonded." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/olive-branch-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/olive-branch-ms" },
    ],
  }),
  component: OliveBranchPage,
});
