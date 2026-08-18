import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Memphis",
  stateCode: "TN",
  countyName: "Shelby County",
  zipCodes: ["38103", "38104", "38116", "38119", "38125", "38141"],
  distanceFromHQ: "12 miles",
  isHQ: false,
  introDescription:
    "Serving homeowners and commercial businesses across the Memphis metro area and Shelby County, Brown Lawn Care & Cleaning Service LLC brings 15+ years of craftsmanship north across the state line. From commercial janitorial services and office floor maintenance in corporate corridors to weekly residential mowing, landscaping, and tree care in Whitehaven, East Memphis, and Midtown, we deliver licensed and insured property solutions.",
  localLandmarks: [
    "Downtown Memphis & Riverfront",
    "East Memphis Business District (Poplar Corridor)",
    "Whitehaven & Graceland area",
    "Midtown Memphis & Cooper-Young",
    "Shelby Farms Park perimeter",
    "Memphis International Airport Logistics Corridor",
  ],
  keyRoadways: [
    "Interstate 55",
    "Interstate 240 (Memphis Loop)",
    "Interstate 40",
    "US Route 51 (Elvis Presley Blvd)",
    "Poplar Avenue (US-72)",
    "Bill Morris Parkway (MS-385 / TN-385)",
  ],
  turfAndClimateNotes:
    "Memphis properties experience hot, humid summer conditions that require sharp lawn mower blades, appropriate cutting heights to avoid turf burning, and scheduled commercial groundskeeping. Our janitorial crews also provide heavy-duty indoor carpet steam extraction and hard floor waxing for Memphis corporate facilities.",
  faqs: [
    {
      q: "Do you service commercial properties and offices in Memphis, TN?",
      a: "Yes, we handle scheduled commercial office janitorial services, medical clinic sanitization, carpet extraction, and commercial grounds lawn mowing across Memphis and Shelby County.",
    },
    {
      q: "Are you licensed and insured to work in Tennessee?",
      a: "Yes, Brown Lawn Care & Cleaning Service LLC carries comprehensive general liability insurance and is bonded for all operations across Mississippi, Tennessee, and Arkansas.",
    },
    {
      q: "Can you provide emergency storm tree clearing in Memphis?",
      a: "Yes, we dispatch tree cutting and debris haul-off crews during regular business hours for storm-damaged properties in the greater Memphis service area.",
    },
  ],
  nearbyCities: [
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
    { name: "Collierville, TN", slug: "collierville-tn" },
    { name: "Germantown, TN", slug: "germantown-tn" },
    { name: "West Memphis, AR", slug: "west-memphis-ar" },
  ],
};

function MemphisPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Memphis Metro",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/memphis-tn",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Memphis",
      "addressRegion": "TN",
      "postalCode": "38103",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Memphis, TN"
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

export const Route = createFileRoute("/service-areas/memphis-tn")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Commercial Cleaning in Memphis TN | Brown Lawn Care" },
      { name: "description", content: "Professional lawn mowing, landscaping, commercial office cleaning & tree removal in Memphis, TN and Shelby County. Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care memphis tn, commercial lawn care memphis tn, office cleaning memphis tn, commercial janitorial memphis, tree removal memphis tn" },
      { property: "og:title", content: "Lawn Care & Commercial Cleaning in Memphis TN | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and commercial cleaning serving Memphis, TN & 50-mile radius." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/memphis-tn" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/memphis-tn" },
    ],
  }),
  component: MemphisPage,
});
