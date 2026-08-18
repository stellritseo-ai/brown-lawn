import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";

const cityData = {
  cityName: "West Memphis",
  stateCode: "AR",
  countyName: "Crittenden County",
  zipCodes: ["72301", "72303"],
  distanceFromHQ: "18 miles",
  isHQ: false,
  introDescription:
    "Located just across the Mississippi River bridges within our verified 50-mile service corridor, West Memphis is a major transport, logistics, and residential hub. Brown Lawn Care & Cleaning Service LLC provides commercial janitorial cleaning, industrial warehouse floor power washing, and property maintenance services across West Memphis, AR.",
  localLandmarks: [
    "Southland Casino Hotel area",
    "West Memphis Port & River Industrial District",
    "Interstate Logistics Parks (I-40 / I-55 junction)",
    "Meadowbrook Country Club area",
  ],
  keyRoadways: [
    "Interstate 40",
    "Interstate 55",
    "US Route 70",
    "Missouri Street",
    "Broadway Avenue",
  ],
  turfAndClimateNotes:
    "West Memphis commercial and logistics facilities demand reliable, heavy-duty janitorial maintenance, high-pressure concrete degreasing, and perimeter weed abatement to ensure safe and clean operating standards.",
  faqs: [
    {
      q: "Do you service commercial facilities and warehouses in West Memphis, AR?",
      a: "Yes, we specialize in warehouse pressure washing, industrial sanitization, office janitorial contracts, and grounds maintenance for West Memphis businesses.",
    },
    {
      q: "Are you licensed and insured to work in Arkansas?",
      a: "Yes, Brown Lawn Care & Cleaning Service LLC carries comprehensive liability insurance and is bonded to operate across our entire 50-mile tri-state corridor (MS · TN · AR).",
    },
  ],
  nearbyCities: [
    { name: "Memphis, TN", slug: "memphis-tn" },
    { name: "Walls, MS", slug: "walls-ms" },
    { name: "Horn Lake, MS (HQ)", slug: "horn-lake-ms" },
    { name: "Southaven, MS", slug: "southaven-ms" },
  ],
};

function WestMemphisPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC - West Memphis",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas/west-memphis-ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West Memphis",
      "addressRegion": "AR",
      "postalCode": "72301",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "West Memphis, AR"
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

export const Route = createFileRoute("/service-areas/west-memphis-ar")({
  head: () => ({
    meta: [
      { title: "Commercial Cleaning & Property Care in West Memphis AR | Brown Lawn Care" },
      { name: "description", content: "Professional commercial janitorial, warehouse power washing & property maintenance in West Memphis, AR (72301, 72303). Call (662) 571-1048 for free quotes." },
      { name: "keywords", content: "commercial cleaning west memphis ar, warehouse pressure washing west memphis, lawn care west memphis, janitorial service crittenden county" },
      { property: "og:title", content: "Commercial Cleaning & Property Care in West Memphis AR | Brown Lawn Care" },
      { property: "og:description", content: "Licensed, insured & bonded commercial cleaning and property services in West Memphis, AR. Fast 24-hr estimates." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas/west-memphis-ar" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas/west-memphis-ar" },
    ],
  }),
  component: WestMemphisPage,
});
