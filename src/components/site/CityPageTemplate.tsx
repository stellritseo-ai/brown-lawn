import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Scissors,
  Trees,
  Truck,
  Sparkles,
  Home,
  Building2,
  Clock,
  HelpCircle,
  ChevronDown,
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import bbbLogo from "@/assets/bbb.svg";

export interface CityPageProps {
  cityName: string;
  stateCode: string;
  countyName: string;
  zipCodes: string[];
  distanceFromHQ: string;
  isHQ?: boolean;
  introDescription: string;
  localLandmarks: string[];
  keyRoadways: string[];
  turfAndClimateNotes: string;
  faqs: { q: string; a: string }[];
  nearbyCities: { name: string; slug: string }[];
}

export function CityPageTemplate({
  cityName,
  stateCode,
  countyName,
  zipCodes,
  distanceFromHQ,
  isHQ = false,
  introDescription,
  localLandmarks,
  keyRoadways,
  turfAndClimateNotes,
  faqs,
  nearbyCities,
}: CityPageProps) {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: t(`Lawn Mowing & Maintenance in ${cityName}`, `Cortado y Mantenimiento de Césped en ${cityName}`),
      desc: t(
        `Weekly and bi-weekly mowing, string trimming, hard-surface edging, and debris clean-off tailored to ${cityName}'s Bermuda, Zoysia, and St. Augustine lawns.`,
        `Cortado semanal y quincenal, orillado y limpieza con soplador adaptado a las propiedades de ${cityName}.`
      ),
      icon: Scissors,
      href: "/services/lawn-mowing",
      tag: "Popular",
    },
    {
      title: t(`Landscaping & Mulch Installation in ${cityName}`, `Paisajismo y Mantillo en ${cityName}`),
      desc: t(
        `Custom landscape design, double-shredded dark hardwood mulch, weed barrier installation, flower bed edging, and seasonal shrub trimming.`,
        `Diseño de paisajes, instalación de mantillo oscuro, barreras contra maleza y poda de arbustos.`
      ),
      icon: Trees,
      href: "/services/landscaping",
      tag: "Featured",
    },
    {
      title: t(`Tree Cutting & Brush Removal in ${cityName}`, `Remoción de Árboles y Maleza en ${cityName}`),
      desc: t(
        `Safe small tree cutting, overgrown brush clearing, deadwood limb pruning, and rapid emergency storm damage dispatch across ${cityName}.`,
        `Corte seguro de árboles pequeños, limpieza de maleza y respuesta rápida ante tormentas.`
      ),
      icon: Trees,
      href: "/services/tree-brush-removal",
      tag: "Emergency Dispatch",
    },
    {
      title: t(`Gravel Driveway Repair & Grading in ${cityName}`, `Reparación de Entradas de Grava en ${cityName}`),
      desc: t(
        `Pothole and washout repairs, laser grading, screened topsoil delivery, fill dirt, and French drain water mitigation for ${cityName} properties.`,
        `Reparación de baches, nivelación, tierra negra y drenajes franceses para propiedades en ${cityName}.`
      ),
      icon: Truck,
      href: "/services/gravel-dirt-work",
      tag: "Heavy-Duty",
    },
    {
      title: t(`Commercial Office Janitorial in ${cityName}`, `Limpieza Comercial de Oficinas en ${cityName}`),
      desc: t(
        `Scheduled commercial janitorial contracts, corporate office cleaning, floor stripping/waxing, and medical clinic sanitization.`,
        `Contratos comerciales de conserjería, limpieza de oficinas corporativas y desinfección de clínicas.`
      ),
      icon: Building2,
      href: "/services/office-commercial-cleaning",
      tag: "Commercial",
    },
    {
      title: t(`Residential House & Warehouse Cleaning in ${cityName}`, `Limpieza Residencial y Galpones en ${cityName}`),
      desc: t(
        `Move-in/move-out deep house cleaning, carpet steam extraction, and heavy-duty high-pressure power washing for storage facilities and barns.`,
        `Limpieza profunda para mudanzas, extracción de vapor en alfombras y lavado a presión de galpones.`
      ),
      icon: Home,
      href: "/services/residential-wire-house-cleaning",
      tag: "Residential",
    },
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative bg-[#0d160f] text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#D4AF37]/30 overflow-hidden">
        {/* Glow Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2E7D32]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#FFD54F] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/service-areas" className="hover:text-[#FFD54F] transition-colors">Service Areas</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFD54F] font-extrabold">{cityName}, {stateCode}</li>
            </ol>
          </nav>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/20 border border-[#D4AF37]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD54F] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isHQ ? "Company Headquarters" : `${distanceFromHQ} from Horn Lake HQ`} · {countyName}</span>
          </div>

          {/* Primary H1 */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-white">
            {t("Professional Lawn Care & Cleaning Services in ", "Servicios Profesionales de Cuidado de Césped y Limpieza en ")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] via-amber-300 to-[#D4AF37]">
              {cityName}, {stateCode}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-medium">
            {introDescription}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/free-quote">
                📋 {t(`Get Free ${cityName} Quote`, `Solicitar Cotización en ${cityName}`)} <ArrowRight className="h-4 w-4" />
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

          {/* Trust Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#2E7D32]" /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-[#FFD54F]" /> 15+ Years Craftsmanship</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#2E7D32]" /> 100% Bonded</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#FFD54F]" /> Fast 24-Hr Estimates</span>
          </div>
        </div>
      </section>

      {/* ── LOCAL AREA PROFILE & CONTEXT ───────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Col 1 & 2: Local Overview & Roadways */}
            <div className="lg:col-span-2 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t(`Dedicated Property Maintenance for ${cityName} Homeowners & Businesses`, `Mantenimiento Dedicado de Propiedades para ${cityName}`)}
              </h2>
              <p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
                {t(
                  `Whether you manage a busy commercial facility along ${keyRoadways.slice(0, 2).join(" or ")} or own a private residence near ${localLandmarks.slice(0, 2).join(" or ")}, Brown Lawn Care & Cleaning Service LLC delivers dependable craftsmanship. We understand the specific soil conditions, weed pressures, and rapid seasonal growth cycles in ${countyName}.`,
                  `Ya sea que administre instalaciones comerciales o una residencia privada en ${cityName}, Brown Lawn Care & Cleaning Service LLC le ofrece servicio de máxima calidad.`
                )}
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">
                  {cityName} Turf & Seasonal Growth Notes
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {turfAndClimateNotes}
                </p>
              </div>

              {/* Local Landmarks & Corridors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#2E7D32]" />
                    Key Roadways Served
                  </h4>
                  <ul className="text-xs text-slate-600 font-semibold space-y-1">
                    {keyRoadways.map((road) => (
                      <li key={road}>• {road}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2E7D32]" />
                    Local Landmarks & Zones
                  </h4>
                  <ul className="text-xs text-slate-600 font-semibold space-y-1">
                    {localLandmarks.map((mark) => (
                      <li key={mark}>• {mark}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 3: Quick Service Card */}
            <div className="p-6 rounded-3xl bg-[#0d160f] text-white border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between text-left space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD54F] block mb-1">
                  Verified Local Service Area
                </span>
                <h3 className="text-xl font-black text-white">{cityName}, {stateCode}</h3>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  ZIP Codes Covered: <span className="text-white font-bold">{zipCodes.join(", ")}</span>
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300 font-semibold">
                  <div className="flex items-center justify-between">
                    <span>County:</span>
                    <span className="text-white font-bold">{countyName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Distance from HQ:</span>
                    <span className="text-white font-bold">{distanceFromHQ}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Dispatch:</span>
                    <span className="text-[#FFD54F] font-bold">During Business Hours</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:6625711048"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] border border-[#D4AF37]/50 text-[#FFD54F] py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-[1.02] transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" /> Call (662) 571-1048
                </a>
                <Link
                  to="/free-quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-xl text-xs font-bold transition-all text-center"
                >
                  Request Fast Free Estimate
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES OFFERED IN THIS CITY ──────────────────────── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">
              Comprehensive Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              {t(`Services Available in ${cityName}, ${stateCode}`, `Servicios Disponibles en ${cityName}, ${stateCode}`)}
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
              Every service is delivered with professional-grade commercial mowers, precision trimmers, high-pressure equipment, and certified cleaning techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => (
              <Link
                key={srv.title}
                to={srv.href}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#2E7D32] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 border border-[#2E7D32]/30 flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-colors">
                      <srv.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#2E7D32] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL FAQS SECTION ─────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              {t(`Frequently Asked Questions in ${cityName}`, `Preguntas Frecuentes en ${cityName}`)}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-[#2E7D32] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEARBY SERVICE AREAS SILO ─────────────────────────── */}
      {nearbyCities && nearbyCities.length > 0 && (
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">
              Explore Nearby Service Communities
            </h3>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}` as any}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#2E7D32] hover:text-white border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
                >
                  <MapPin className="h-3 w-3" />
                  <span>{city.name}</span>
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2E7D32]/10 hover:bg-[#2E7D32] hover:text-white border border-[#2E7D32]/30 text-xs font-bold text-[#2E7D32] transition-colors"
              >
                <span>View All 15+ Cities →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CONVERSION CTA ──────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0d160f] via-[#112014] to-[#0d160f] text-white text-center relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F]">
            Ready to Transform Your {cityName} Property?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get Your Free, No-Obligation Estimate Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Contact Roy Lee Brown and our experienced family team. Licensed, insured, and bonded with fast 24-hour response across {cityName} and DeSoto County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <Link to="/free-quote">
                📋 Request Free Itemized Quote
              </Link>
            </Button>
            <a
              href="tel:6625711048"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3.5 text-sm font-extrabold text-white transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 text-[#FFD54F]" />
              <span>Call (662) 571-1048</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
