import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Cordova",
  stateCode: "TN",
  countyName: "Shelby County",
  zipCodes: ["38016", "38018"],
  distanceFromHQ: "20 miles",
  isHQ: false,
  introDescription:
    "Cordova features a vibrant blend of established subdivisions, modern residential developments, and busy commercial retail centers surrounding the Germantown Parkway corridor. Brown Lawn Care & Cleaning Service LLC provides dependable weekly lawn mowing, mulch installation, shrub trimming, tree thinning, and residential/commercial cleaning in Cordova, TN.",
  localLandmarks: [
    "Historic Old Cordova Country Store area",
    "Germantown Parkway Commercial District",
    "Bert Ferguson Community Center & Park",
    "Shelby Farms Park north boundary",
    "Countrywood & Riverwood subdivisions",
  ],
  keyRoadways: [
    "Germantown Parkway",
    "Macon Road",
    "Houston Levee Road",
    "Interstate 40 (Exit 16 & 18)",
    "Dexter Road",
  ],
  turfAndClimateNotes:
    "Cordova lawns thrive on consistent weekly mowing and proper aeration. Our crews use commercial-grade zero-turn mowers with sharp blades to promote deep green turf coloration, while our edging equipment ensures sharp lines along concrete sidewalks and driveways.",
  faqs: [
    {
      q: "Do you service residential subdivisions across Cordova, TN?",
      a: "Yes, we provide weekly and bi-weekly lawn mowing, edging, shrub trimming, and leaf cleanup for homes throughout Cordova.",
    },
    {
      q: "Do you offer move-in / move-out house cleaning in Cordova?",
      a: "Yes, our cleaning team provides comprehensive deep cleaning, carpet steam cleaning, and sanitization for Cordova home sellers, buyers, and renters.",
    },
  ],
  nearbyCities: [
    { name: "Germantown, TN", slug: "germantown-tn" },
    { name: "Collierville, TN", slug: "collierville-tn" },
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
  ],
};

function CordovaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Cordova",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/cordova-tn",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cordova",
      "addressRegion": "TN",
      "postalCode": "38016",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Cordova, TN"
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

export const Route = createFileRoute("/service-areas/cordova-tn")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Cleaning Services in Cordova TN | Brown Lawn Care" },
      { name: "description", content: "Reliable lawn mowing, landscaping, mulch, shrub trimming & house cleaning in Cordova, TN (38016, 38018). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care cordova tn, lawn mowing cordova tn, landscaping cordova tn, house cleaning cordova tn, property maintenance memphis" },
      { property: "og:title", content: "Lawn Care & Cleaning Services in Cordova TN | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and cleaning services in Cordova, TN. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/cordova-tn" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/cordova-tn" },
    ],
  }),
  component: CordovaPage,
});
