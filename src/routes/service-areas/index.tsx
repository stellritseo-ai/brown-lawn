import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Building2,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceArea as ServiceAreaMapSection } from "@/components/site/ServiceArea";
import { useLanguage } from "@/hooks/useLanguage";

const mississippiCities = [
  { name: "Horn Lake (HQ)", slug: "horn-lake-ms", zip: "38637", desc: "Company headquarters. Full lawn care, mowing, mulch, tree clearing, gravel, and cleaning.", hq: true },
  { name: "Southaven", slug: "southaven-ms", zip: "38671, 38672", desc: "Premier residential mowing, commercial groundskeeping, and office janitorial along Goodman & Church Rd." },
  { name: "Olive Branch", slug: "olive-branch-ms", zip: "38654", desc: "Estate lawn care, custom mulch installation, shrub trimming, and commercial property maintenance." },
  { name: "Hernando", slug: "hernando-ms", zip: "38632", desc: "Acreage lawn mowing, gravel driveway regrading, topsoil delivery, and tree pruning." },
  { name: "Walls", slug: "walls-ms", zip: "38680", desc: "Rural property maintenance, field mowing, ditch clearing, and driveway gravel repair along Hwy 61." },
  { name: "Nesbit", slug: "nesbit-ms", zip: "38651", desc: "Residential lawn maintenance, weed prevention, tree clearing, and house cleaning." },
];

const tennesseeCities = [
  { name: "Memphis", slug: "memphis-tn", zip: "Shelby County", desc: "Commercial janitorial, corporate office cleaning, and residential lawn mowing within the service corridor." },
  { name: "Collierville", slug: "collierville-tn", zip: "38017", desc: "Upscale estate landscaping, precision lawn striping, flowerbed edging, and tree care." },
  { name: "Germantown", slug: "germantown-tn", zip: "38138, 38139", desc: "Luxury residential lawn maintenance, dark mulch installation, and commercial office cleaning." },
  { name: "Cordova", slug: "cordova-tn", zip: "38016, 38018", desc: "Weekly grass cutting, shrub trimming, and deep residential housekeeping." },
];

const arkansasCities = [
  { name: "West Memphis", slug: "west-memphis-ar", zip: "72301, 72303", desc: "Commercial facility cleaning, industrial warehouse power washing, and property maintenance." },
];

function ServiceAreasIndex() {
  const { t } = useLanguage();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.brownlawncarecleaningservicellc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://www.brownlawncarecleaningservicellc.com/service-areas"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Brown Lawn Care & Cleaning Service, LLC",
    "telephone": "+16625711048",
    "url": "https://www.brownlawncarecleaningservicellc.com/service-areas",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alden Lake Dr W",
      "addressLocality": "Horn Lake",
      "addressRegion": "MS",
      "postalCode": "38637",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Horn Lake, MS" },
      { "@type": "City", "name": "Southaven, MS" },
      { "@type": "City", "name": "Olive Branch, MS" },
      { "@type": "City", "name": "Hernando, MS" },
      { "@type": "City", "name": "Walls, MS" },
      { "@type": "City", "name": "Nesbit, MS" },
      { "@type": "City", "name": "Memphis, TN" },
      { "@type": "City", "name": "Collierville, TN" },
      { "@type": "City", "name": "Germantown, TN" },
      { "@type": "City", "name": "Cordova, TN" },
      { "@type": "City", "name": "West Memphis, AR" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative bg-[#0d160f] text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#D4AF37]/30 overflow-hidden text-left">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2E7D32]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#FFD54F] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFD54F] font-extrabold">Service Areas</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/20 border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD54F] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>50-Mile Tri-State Coverage · MS · TN · AR</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-white">
            {t("Lawn Care, Landscaping & Cleaning ", "Cuidado de Césped, Paisajismo y Limpieza ")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] via-amber-300 to-[#D4AF37]">
              {t("Service Areas", "Áreas de Servicio")}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-medium">
            {t(
              "Headquartered in Horn Lake, Mississippi, Brown Lawn Care & Cleaning Service LLC proudly serves residential homeowners and commercial businesses within our verified 50-mile tri-state corridor across Mississippi, Tennessee, and Arkansas.",
              "Con sede en Horn Lake, Mississippi, servimos con orgullo a propietarios residenciales y empresas comerciales en nuestro radio verificado de 50 millas."
            )}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/free-quote">
                📋 {t("Request Free Estimate", "Solicitar Cotización Gratis")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:6625711048"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-extrabold text-white transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 text-[#FFD54F] animate-pulse" />
              <span>Call (662) 571-1048</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE COVERAGE MAP ────────────────────────────── */}
      <ServiceAreaMapSection />

      {/* ── CITY DIRECTORY BY STATE & COUNTY ────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* MISSISSIPPI */}
          <div>
            <div className="border-b border-slate-200 pb-4 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">Primary Market (Tier 1 & 2)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Mississippi — DeSoto County Locations
                </h2>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full">
                6 Verified Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mississippiCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}` as any}
                  className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    city.hq
                      ? "bg-white border-[#2E7D32] shadow-md hover:shadow-xl ring-2 ring-[#2E7D32]/20"
                      : "bg-white border-slate-200 hover:border-[#2E7D32] hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className={`h-4 w-4 ${city.hq ? "text-[#2E7D32]" : "text-slate-500"}`} />
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-[#2E7D32] transition-colors">
                          {city.name}
                        </h3>
                      </div>
                      {city.hq && (
                        <span className="text-[9px] font-black bg-[#2E7D32] text-[#FFD54F] px-2 py-0.5 rounded-full">
                          HQ
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-bold block mb-2">ZIP: {city.zip}</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {city.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                    <span>View {city.name} Services</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* TENNESSEE */}
          <div>
            <div className="border-b border-slate-200 pb-4 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">Extended Market (Tier 3)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Tennessee — Memphis & Shelby County Locations
                </h2>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full">
                4 Verified Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tennesseeCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}` as any}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#2E7D32] transition-colors">
                        {city.name}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 font-bold block mb-2">ZIP: {city.zip}</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {city.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                    <span>View City Info</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ARKANSAS */}
          <div>
            <div className="border-b border-slate-200 pb-4 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">50-Mile Corridor (Tier 4)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Arkansas Locations
                </h2>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full">
                1 Verified Hub
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {arkansasCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}` as any}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#2E7D32] transition-colors">
                        {city.name}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 font-bold block mb-2">ZIP: {city.zip}</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {city.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                    <span>View City Info</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Service Areas | Brown Lawn Care & Cleaning Service LLC" },
      { name: "description", content: "Explore our 50-mile service radius across Mississippi, Tennessee, and Arkansas. Serving Horn Lake, Southaven, Olive Branch, Hernando, Memphis, and beyond." },
      { name: "keywords", content: "lawn care service areas desoto county ms, lawn care memphis tn, lawn care horn lake ms, property maintenance southaven ms, cleaning service olive branch ms" },
      { property: "og:title", content: "Service Areas | Brown Lawn Care & Cleaning Service LLC" },
      { property: "og:description", content: "Explore our 50-mile service radius across Mississippi, Tennessee, and Arkansas." },
      { property: "og:url", content: "https://www.brownlawncarecleaningservicellc.com/service-areas" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.brownlawncarecleaningservicellc.com/service-areas" },
    ],
  }),
  component: ServiceAreasIndex,
});
