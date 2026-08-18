import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Nesbit",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38651"],
  distanceFromHQ: "7 miles",
  isHQ: false,
  introDescription:
    "Situated between Southaven and Hernando, Nesbit features quiet rural-suburban neighborhoods, equestrian properties, and multi-acre residential parcels. Brown Lawn Care & Cleaning Service LLC provides dependable weekly lawn mowing, shrub trimming, tree thinning, gravel driveway maintenance, and house cleaning services across Nesbit.",
  localLandmarks: [
    "Pleasant Hill Road Corridor",
    "Nesbit Water Association area",
    "Scenic rural homesteads along Hwy 51",
    "I-55 Nesbit Overpass area",
  ],
  keyRoadways: [
    "US Highway 51",
    "Pleasant Hill Road",
    "Interstate 55 Corridor",
    "Church Road East",
  ],
  turfAndClimateNotes:
    "Nesbit's rolling topography and mix of open turf and wooded tree canopies require attentive lawn mowing schedules and seasonal leaf removal. Our precision equipment keeps expansive turf areas well-manicured without scalping high ridges or leaving unsightly ruts.",
  faqs: [
    {
      q: "Do you service acreage properties and large lots in Nesbit?",
      a: "Yes, we handle residential acreage, long private gravel lanes, and estate yards throughout Nesbit and central DeSoto County.",
    },
    {
      q: "Can you provide recurring weekly grass cutting in Nesbit?",
      a: "Yes, we have weekly and bi-weekly lawn mowing routes in Nesbit that include precision mowing, string trimming, edging, and hard surface blower cleanup.",
    },
  ],
  nearbyCities: [
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Hernando, MS", slug: "hernando-ms" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
  ],
};

function NesbitPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Nesbit",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/nesbit-ms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nesbit",
      "addressRegion": "MS",
      "postalCode": "38651",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nesbit, MS"
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

export const Route = createFileRoute("/service-areas/nesbit-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Nesbit MS | Brown Lawn Care" },
      { name: "description", content: "Reliable lawn mowing, landscaping, gravel driveway repair & tree trimming in Nesbit, MS (38651). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care nesbit ms, lawn mowing nesbit ms, landscaping nesbit ms, gravel driveway repair nesbit, property care desoto county" },
      { property: "og:title", content: "Lawn Care & Landscaping in Nesbit MS | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and cleaning services in Nesbit, MS. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/nesbit-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/nesbit-ms" },
    ],
  }),
  component: NesbitPage,
});
