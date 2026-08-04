import { useState } from "react";
import {
  ArrowRight,
  Scissors,
  Sparkles,
  Home,
  Building2,
  Layers,
  Trash2,
  Trees,
  Star,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Phone
} from "lucide-react";

import mowingImg from "@/assets/service-mowing.png";
import landscapingImg from "@/assets/service-landscaping.png";
import officeImg from "@/assets/service-office-cleaning.png";
import wireHouseImg from "@/assets/service-wire-house.png";
import brushImg from "@/assets/service-brush-removal.png";
import commercialImg from "@/assets/service-commercial-cleaning.png";
import smallTreeCuttingImg from "@/assets/service-small-tree-cutting.png";
import smallTreeTrimmingImg from "@/assets/service-small-tree-trimming.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

/* ── Service Card Component ─────────────────────────────── */
function ServiceCard({
  s,
  aspectRatio = "min-h-[420px]"
}: {
  s: {
    id: string;
    category: string;
    icon: any;
    title: string;
    categoryLabel: string;
    desc: string;
    features: string[];
    image: string;
    to: string;
  };
  aspectRatio?: string;
}) {
  const Icon = s.icon;
  const { t } = useLanguage();

  return (
    <div
      className={`group relative w-full ${aspectRatio} rounded-[32px] overflow-hidden bg-slate-950 border border-slate-200/80 hover:border-[#2E7D32] shadow-xl hover:shadow-[0_22px_60px_rgba(46,125,50,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-end select-none`}
    >
      {/* Background Image */}
      <img
        src={s.image}
        alt={s.title}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Multi-stage Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D08]/98 via-[#070D08]/65 to-black/20 group-hover:from-[#070D08]/98 group-hover:via-[#070D08]/75 group-hover:to-black/40 transition-all duration-500" />

      {/* Gold & Green Accent Border Highlight on Hover */}
      <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-[#2E7D32]/80 transition-colors duration-500 pointer-events-none" />

      {/* Top Glass Header Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        {/* Icon Badge */}
        <div className="w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 text-[#2E7D32] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#2E7D32] group-hover:text-[#FFD54F] transition-all duration-300">
          <Icon className="h-5 w-5" />
        </div>

        {/* Category Label */}
        <span className="bg-black/75 backdrop-blur-md border border-white/20 text-[#FFD54F] text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {s.categoryLabel}
        </span>
      </div>

      {/* Card Body Content */}
      <div className="relative z-20 p-6 sm:p-7 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-1">

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#FFD54F] transition-colors duration-300">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {s.desc}
        </p>

        {/* Feature Checkmarks list */}
        <div className="mt-4 pt-3 border-t border-white/15 space-y-2">
          {s.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54F] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Link Footer — Hidden by default, revealed on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[#FFD54F] text-xs font-black uppercase tracking-widest group/btn">
              <span className="inline-flex items-center gap-1.5 group-hover/btn:underline">
                {t("Get Free Estimate", "Cotización Gratis")}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#2E7D32] text-white group-hover:text-[#FFD54F] flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const services = [
    {
      id: "mowing",
      category: "lawn",
      icon: Scissors,
      title: t("Weekly Lawn Mowing & Edging", "Cortado Semanal y Orillado"),
      categoryLabel: t("Lawn Care", "Cuidado de Césped"),
      desc: t("Precision mowing, string trimming, hard surface edging, and complete clippings cleanup for pristine lawns.", "Corte de precisión, recortado de bordes y limpieza total para mantener céspedes siempre impecables."),
      features: [
        t("Striping & Precision Mowing", "Corte con Rayas de Precisión"),
        t("String Trimming & Edging", "Orillado y Recortado"),
        t("Blower Clean-Off", "Limpieza con Soplado")
      ],
      image: mowingImg,
      to: "/services/lawn-care-landscaping"
    },
    {
      id: "landscaping",
      category: "lawn",
      icon: Layers,
      title: t("Landscape Design & Mulching", "Mantenimiento y Mantillo"),
      categoryLabel: t("Landscaping", "Paisajismo"),
      desc: t("Shrub trimming, fresh dark mulch installation, weed barrier installation, and flowerbed manicuring.", "Poda de arbustos, instalación de mantillo oscuro, barrera de maleza y cuidado de jardines."),
      features: [
        t("Fresh Dark Mulch Install", "Mantillo Oscuro Fresco"),
        t("Shrub & Bush Trimming", "Poda de Arbustos"),
        t("Bed Edging & Weed Barrier", "Orillado y Control de Maleza")
      ],
      image: landscapingImg,
      to: "/services/lawn-care-landscaping"
    },
    {
      id: "small-tree-cutting",
      category: "tree",
      icon: Trees,
      title: t("Small Tree Cutting", "Corte de Árboles Pequeños"),
      categoryLabel: t("Tree Care", "Cuidado de Árboles"),
      desc: t("Safe, professional cutting and removal of small trees, saplings, and hazardous low branches.", "Corte y remoción profesional y segura de árboles pequeños, retoños y ramas bajas peligrosas."),
      features: [
        t("Small Tree & Sapling Cutting", "Corte de Árboles Pequeños y Retoños"),
        t("Overgrown Stem Clearing", "Limpieza de Tallos Sobrecultivados"),
        t("Clean Debris Removal", "Remoción Limpia de Escombros")
      ],
      image: smallTreeCuttingImg,
      to: "/services/tree-brush-removal"
    },
    {
      id: "small-tree-trimming",
      category: "tree",
      icon: Scissors,
      title: t("Small Tree Trimming", "Poda de Árboles Pequeños"),
      categoryLabel: t("Tree Care", "Cuidado de Árboles"),
      desc: t("Precision trimming, branch pruning, crown shaping, and deadwood thinning for healthy small trees.", "Poda de precisión, recortado de ramas, moldeo de copas y eliminación de madera muerta."),
      features: [
        t("Precision Branch Pruning", "Poda de Ramas de Precisión"),
        t("Crown Shaping & Care", "Moldeo y Cuidado de Copas"),
        t("Deadwood Removal", "Remoción de Madera Muerta")
      ],
      image: smallTreeTrimmingImg,
      to: "/services/tree-brush-removal"
    },
    {
      id: "office-cleaning",
      category: "cleaning",
      icon: Sparkles,
      title: t("Commercial Office Cleaning", "Limpieza de Oficinas Comerciales"),
      categoryLabel: t("Cleaning", "Limpieza"),
      desc: t("Daily or weekly janitorial cleaning, office sanitation, floor polishing, and trash disposal for corporate spaces.", "Limpieza diaria o semanal de conserjería, desinfección de oficinas y pulido de pisos."),
      features: [
        t("Floor Care & Polishing", "Cuidado y Pulido de Pisos"),
        t("Desk & Glass Sanitization", "Desinfección de Cristal y Escritorios"),
        t("Trash & Recycling Removal", "Remoción de Basura")
      ],
      image: officeImg,
      to: "/services/cleaning-services"
    },
    {
      id: "wire-house",
      category: "cleaning",
      icon: Building2,
      title: t("Wire House & Barn Cleaning", "Limpieza de Almacén y Galpón"),
      categoryLabel: t("Specialized", "Especializado"),
      desc: t("Heavy-duty high pressure washing and deep sanitation for wire houses, barns, and farm structures.", "Lavado a presión de alto rendimiento y sanitización profunda para almacenes, galpones y granjas."),
      features: [
        t("High-Pressure Power Wash", "Lavado a Alta Presión"),
        t("Agricultural Sanitation", "Desinfección Agrícola"),
        t("Heavy Dirt & Stain Removal", "Remoción de Manchas y Suciedad")
      ],
      image: wireHouseImg,
      to: "/services/cleaning-services"
    },
    {
      id: "brush-removal",
      category: "heavy",
      icon: Trash2,
      title: t("Brush Cutting & Land Clearing", "Corte y Remoción de Maleza"),
      categoryLabel: t("Land Clearing", "Limpieza de Terreno"),
      desc: t("Clearing thick overgrown brush, briars, unwanted bushes, and wild vegetation to reclaim land.", "Limpieza de maleza espesa, zarzales y vegetación silvestre para despejar su terreno."),
      features: [
        t("Overgrown Brush Clearing", "Despeje de Maleza Espesa"),
        t("Briar & Weed Cutting", "Corte de Zarzas y Maleza"),
        t("Property Line Clearing", "Limpieza de Líneas de Propiedad")
      ],
      image: brushImg,
      to: "/services/tree-brush-removal"
    },
    {
      id: "commercial-cleaning",
      category: "cleaning",
      icon: Home,
      title: t("Residential & Commercial Clean", "Limpieza Residencial y Comercial"),
      categoryLabel: t("Cleaning", "Limpieza"),
      desc: t("Comprehensive interior deep cleaning and exterior property wash tailored for homes and businesses.", "Limpieza interior profunda a medida y lavado de propiedad para casas y negocios."),
      features: [
        t("Deep Interior Sanitation", "Limpieza Interior Profunda"),
        t("Exterior Power Washing", "Lavado Exterior a Presión"),
        t("Tailored Maintenance", "Planes de Mantenimiento a Medida")
      ],
      image: commercialImg,
      to: "/services/cleaning-services"
    }
  ];

  const filterTabs = [
    { id: "all", label: t("All Services", "Todos los Servicios"), count: services.length },
    { id: "lawn", label: t("Lawn & Landscaping", "Césped y Paisajismo"), count: services.filter(s => s.category === "lawn").length },
    { id: "cleaning", label: t("Cleaning Services", "Servicios de Limpieza"), count: services.filter(s => s.category === "cleaning").length },
    { id: "tree", label: t("Tree & Brush Care", "Árboles y Maleza"), count: services.filter(s => s.category === "tree" || s.category === "heavy").length },
  ];

  const filteredServices = activeFilter === "all"
    ? services
    : services.filter(s => s.category === activeFilter || (activeFilter === "tree" && (s.category === "tree" || s.category === "heavy")));

  return (
    <section id="services" className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 overflow-hidden border-y border-slate-200/60 relative">
      {/* Background Decor Ambient Blobs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#2E7D32]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl text-left space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#2E7D32]">
              <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
              {t("Our Core Services", "Nuestros Servicios Principales")}
              <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-[22px] sm:text-[28px] lg:text-[31px] mt-0 sm:mt-[-11px] mb-[8px] font-black text-slate-900 tracking-tight leading-tight">
              {t("Professional Solutions for ", "Soluciones Profesionales para ")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] via-[#1B5E20] to-[#2E7D32]">
                {t("Lawns, Landscaping & Cleaning.", "Césped, Paisajismo y Limpieza.")}
              </span>
            </h2>

            <p className="text-slate-600 text-[13.5px] sm:text-base lg:text-lg leading-relaxed font-medium mb-0 sm:mb-[-25px]">
              {t("Licensed, insured & bonded experts serving Horn Lake & a 50-mile radius with top-tier equipment and 15+ years of craftsmanship.", "Expertos con licencia y seguro que sirven a Horn Lake y 50 millas a la redonda con equipos de primera calidad.")}
            </p>
          </div>

          {/* Quick Badges & Callout */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Button variant="hero" size="xl" className="font-extrabold rounded-full px-8 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 shadow-md w-full md:w-auto justify-center">
              {t("Explore All Services", "Explorar Todos los Servicios")}
              <ArrowRight className="w-4 h-4 ml-1 text-[#FFD54F]" />
            </Button>
          </div>
        </div>

        {/* ── Trust & Quality Guarantee Banner ─────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-md mb-10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{t("Licensed & Insured", "Licencia y Seguro")}</span>
              <span className="text-[11px] font-bold text-slate-500">{t("100% Bonded Protection", "Protección 100% Garantizada")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{t("Punctual & Reliable", "Puntual y Confiable")}</span>
              <span className="text-[11px] font-bold text-slate-500">{t("On-Time Job Guarantee", "Garantía de Tiempo")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{t("50-Mile Radius", "Radio de 50 Millas")}</span>
              <span className="text-[11px] font-bold text-slate-500">{t("Horn Lake & Surrounding", "Horn Lake y Alrededores")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{t("Bilingual Service", "Servicio Bilingüe")}</span>
              <span className="text-[11px] font-bold text-slate-500">{t("English & Español", "Inglés y Español")}</span>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs ─────────────────────────────── */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shadow-xs cursor-pointer flex items-center gap-2 ${isActive
                    ? "bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90"
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${isActive ? "bg-white/25 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Filtered Main Grid (Balanced 4-column layout for 8 cards) ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, idx) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <div className="block w-full">
                  <ServiceCard s={s} aspectRatio="min-h-[360px] sm:min-h-[420px] lg:min-h-[470px]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
