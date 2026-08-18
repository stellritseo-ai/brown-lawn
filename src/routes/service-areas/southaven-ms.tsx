import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "Southaven",
  stateCode: "MS",
  countyName: "DeSoto County",
  zipCodes: ["38671", "38672"],
  distanceFromHQ: "4 miles",
  isHQ: false,
  introDescription:
    "Southaven is one of our most active service communities. From bustling commercial districts near Tanger Outlets and Snowden Grove to pristine residential subdivisions along Church Road, Goodman Road, and Getwell Road, Brown Lawn Care & Cleaning Service LLC provides dependable weekly mowing, landscape enhancement, tree clearing, and corporate janitorial care.",
  localLandmarks: [
    "Snowden Grove Park & Amphitheater",
    "Tanger Outlets Southaven",
    "BankPlus Amphitheater",
    "Southaven Towne Center",
    "Central Park Southaven",
    "Cherry Valley & Desoto Central neighborhoods",
  ],
  keyRoadways: [
    "Goodman Road (MS-302)",
    "Church Road",
    "Getwell Road",
    "Interstate 55 / I-69 Corridor",
    "Stateline Road",
    "Malone Road",
  ],
  turfAndClimateNotes:
    "Southaven lawns frequently feature hybrid Bermuda and Meyer Zoysia turf. Our crews utilize professional commercial mulching and bagging mowers, sharp blades, and crisp hard-surface edging to maintain golf-course-quality curb appeal across Southaven's residential and commercial properties.",
  faqs: [
    {
      q: "How frequently do you service Southaven neighborhoods?",
      a: "We have dedicated property maintenance crews operating throughout Southaven multiple days each week, ensuring reliable scheduled service for both weekly lawn mowing and commercial cleaning.",
    },
    {
      q: "Do you offer landscaping and mulch delivery in Southaven?",
      a: "Yes, we install double-shredded dark hardwood mulch, edge flower beds, plant shrubs, and install weed barrier fabric across Southaven subdivisions.",
    },
    {
      q: "Do you provide office cleaning for Southaven businesses?",
      a: "Yes, we provide commercial janitorial cleaning, floor waxing, carpet cleaning, and restroom sanitization for business offices, medical clinics, and retail stores in Southaven.",
    },
  ],
  nearbyCities: [
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Olive Branch, MS", slug: "olive-branch-ms" },
    { name: "Hernando, MS", slug: "hernando-ms" },
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "Walls, MS", slug: "walls-ms" },
  ],
};

function SouthavenPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - Southaven",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/southaven-ms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southaven",
      "addressRegion": "MS",
      "postalCode": "38671",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Southaven, MS"
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

export const Route = createFileRoute("/service-areas/southaven-ms")({
  head: () => ({
    meta: [
      { title: "Lawn Care & Landscaping in Southaven MS | Brown Lawn Care" },
      { name: "description", content: "Top-rated lawn mowing, landscaping, mulch, tree trimming & commercial office cleaning in Southaven, MS (38671, 38672). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "lawn care southaven ms, lawn mowing southaven ms, landscaping southaven ms, office cleaning southaven ms, tree removal southaven" },
      { property: "og:title", content: "Lawn Care & Landscaping in Southaven MS | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded lawn care and cleaning services in Southaven, MS. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/southaven-ms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/southaven-ms" },
    ],
  }),
  component: SouthavenPage,
});
