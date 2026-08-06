import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Trash2,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Trees,
  Truck,
  Building2,
  Home,
  AlertTriangle,
  Scissors,
  HelpCircle,
  ChevronDown,
  Globe,
  HardHat,
  BadgeCheck,
  Compass,
  FileCheck,
  Shovel,
  Sprout,
  TreeDeciduous,
  Flame,
  Construction,
  Ruler,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

import serviceTreeRemoval from "@/assets/service-tree-removal.png";
import serviceBrushRemoval from "@/assets/service-brush-removal.png";
import aboutEstateYard from "@/assets/about-estate-yard.png";
import bbbLogo from "@/assets/bbb.svg";

export function TreeBrushRemovalContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const smallTreeOffers = [
    t("Small tree and sapling precision cutting", "Corte de precisión de árboles pequeños y retoños"),
    t("Overgrown stem and woody sucker clearing", "Limpieza de tallos desbordados y brotes leñosos"),
    t("Stump removal or stump grinding options", "Opciones de remoción o trituración de tocones"),
    t("Complete debris cleanup and haul-off", "Limpieza completa de escombros y retiro"),
    t("Safe removal without damaging surrounding lawns or structures", "Remoción segura sin dañar céspedes o estructuras"),
  ];

  const largeTreeOffers = [
    t("Safe, controlled tree felling and removal", "Tala y remoción de árboles segura y controlada"),
    t("Sectional dismantling and cutting for tight residential spaces", "Desmontaje y corte por secciones en espacios reducidos"),
    t("Rigging and lowering heavy limbs safely", "Sujeción y descenso seguro de ramas pesadas"),
    t("Complete stump grinding and root cleanup", "Trituración completa de tocones y limpieza de raíces"),
    t("Comprehensive post-removal site cleanup and hauling", "Limpieza y retiro completo del sitio posterior"),
  ];

  const emergencyResponseOffers = [
    t("Rapid emergency dispatch during business hours", "Despacho de emergencia rápido en horario laboral"),
    t("Fallen tree and heavy limb immediate clearance", "Despeje inmediato de árboles caídos y ramas pesadas"),
    t("Debris clearance from roofs, driveways, and structures", "Limpieza de escombros en techos, entradas y estructuras"),
    t("Property securing and hazard mitigation", "Aseguramiento de propiedad y mitigación de peligros"),
    t("Thorough site cleanup and branch hauling", "Limpieza profunda del sitio y transporte de ramas"),
  ];

  const deadwoodBenefits = [
    t("Eliminates dangerous falling branch hazards to protect family & visitors", "Elimina los peligros de caída de ramas para proteger a su familia"),
    t("Improves overall tree health, airflow, and aesthetics", "Mejora la salud general del árbol, el flujo de aire y la estética"),
    t("Reduces risk of wood-boring pest infestations and fungal decay", "Reduce el riesgo de plagas perforadoras e infecciones de hongos"),
    t("Prevents costly roof, fence, and vehicle property damage", "Previene daños costosos en techos, cercas y vehículos"),
  ];

  const trimmingServices = [
    t("Precision branch pruning for structural canopy health", "Poda de precisión de ramas para salud del dosel"),
    t("Crown shaping, elevation, and aesthetic balancing", "Moldeo de copa, elevación y equilibrio estético"),
    t("Hazardous overhanging branch elimination", "Eliminación de ramas peligrosas colgantes"),
    t("Canopy thinning to allow light reach lower grass and beds", "Adelgazamiento de copa para permitir luz a plantas bajas"),
  ];

  const brushCuttingOffers = [
    t("Thick overgrown brush and dense thicket clearing", "Limpieza de maleza espesa y matorrales densos"),
    t("Briars, thorny vegetation, and wild vines removal", "Remoción de zarzas, vegetación espinosa y enredaderas"),
    t("Unwanted invasive bushes, saplings, and wild shrubs", "Remoción de arbustos invasores no deseados y retoños"),
    t("Property lines, fence rows, and field boundary clearing", "Limpieza de líneas de propiedad, cercas y bordes"),
    t("Mechanical clearing with professional-grade equipment", "Limpieza mecánica con equipos de nivel profesional"),
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Assessment & Consultation", "Evaluación y Consulta"),
      desc: t("We evaluate your property, identify trees or brush needing removal, and assess safety concerns, access points, and surrounding structures.", "Evaluamos su propiedad, identificamos árboles o maleza a remover y evaluamos aspectos de seguridad y puntos de acceso."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("Detailed Estimate", "Cotización Detallada"),
      desc: t("You receive an upfront, itemized quote with no hidden fees. We clearly explain every aspect of the work, timeline, equipment needed, and haul-off.", "Recibe una cotización desglosada y transparente sin tarifas ocultas. Explicamos claramente el plan y los equipos."),
      icon: FileCheck,
    },
    {
      step: "03",
      title: t("Safety Planning", "Planificación de Seguridad"),
      desc: t("Our team develops a site-specific safety plan, establishes drop zones, inspects rigging, and prepares equipment for risk-free operation.", "Nuestro equipo desarrolla un plan de seguridad específico, establece zonas de caída y prepara los equipos."),
      icon: HardHat,
    },
    {
      step: "04",
      title: t("Professional Execution", "Ejecución Profesional"),
      desc: t("Using chainsaws, rigging gear, chippers, and heavy clearing machinery, we safely cut, trim, and clear vegetation with expert precision.", "Utilizando motosierras, trituradoras y maquinaria pesada, cortamos y limpiamos la vegetación con precisión."),
      icon: Construction,
    },
    {
      step: "05",
      title: t("Cleanup & Final Inspection", "Limpieza e Inspección Final"),
      desc: t("We chip limbs, haul away all debris, sweep paved areas, and conduct a final walkthrough with you to ensure your 100% satisfaction.", "Trituramos ramas, retiramos todos los escombros, barremos las áreas y realizamos un recorrido final."),
      icon: BadgeCheck,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
      desc: t("Tree cutting carries inherent risks. Our full liability insurance and 100% bonding protect your home and business completely.", "La remoción de árboles conlleva riesgos. Nuestra cobertura de responsabilidad y fianza protegen su propiedad por completo."),
      icon: ShieldCheck,
    },
    {
      title: t("15+ Years of Proven Experience", "15+ Años de Experiencia Comprobada"),
      desc: t("Over 15 years handling thousands of tree, stump, and brush projects across MS, TN, and AR. We know how to tackle complex removals safely.", "Más de 15 años realizando miles de proyectos de remoción de árboles y maleza en MS, TN y AR con máxima seguridad."),
      icon: Award,
    },
    {
      title: t("Professional Heavy-Duty Equipment", "Equipos Profesionales de Uso Pesado"),
      desc: t("Equipped with commercial chainsaws, wood chippers, stump grinders, and clearing gear for fast, efficient execution.", "Equipados con motosierras comerciales, trituradoras de madera y trituradoras de tocones para ejecución rápida."),
      icon: Construction,
    },
    {
      title: t("Full Cleanup & Complete Debris Hauling", "Limpieza Total y Retiro de Escombros"),
      desc: t("We never leave wood piles or messy brush behind. Every job includes complete hauling, chipping, and site clean-up.", "Nunca dejamos pilas de madera o maleza desordenada. Cada trabajo incluye retiro completo y limpieza del sitio."),
      icon: Sparkles,
    },
    {
      title: t("Punctual, Reliable & Bilingual Service", "Servicio Puntual, Confiable y Bilingüe"),
      desc: t("We arrive on time, respect your schedule, and communicate fluently in both English and Spanish.", "Llegamos a tiempo, respetamos su horario y nos comunicamos con fluidez tanto en inglés como en español."),
      icon: Globe,
    },
  ];

  const faqs = [
    {
      q: t("How quickly can you respond to storm emergencies?", "¿Qué tan rápido pueden responder a emergencias por tormentas?"),
      a: t("We provide rapid emergency dispatch during business hours. For urgent storm damage, fallen trees blocking driveways, or dangerous hanging limbs in Horn Lake and surrounding areas, our crew can deploy quickly to secure your property.", "Brindamos despacho de emergencia rápido en horario laboral para árboles caídos o ramas peligrosas que bloqueen accesos."),
    },
    {
      q: t("Are you fully licensed, insured, and bonded?", "¿Están totalmente licenciados, asegurados y afianzados?"),
      a: t("Yes, absolutely. Brown Lawn Care & Cleaning Service, LLC maintains full commercial general liability insurance and bonding, ensuring 100% property protection on every project.", "Sí, absolutamente. Mantenemos seguro de responsabilidad general y fianza comercial para total protección de su propiedad."),
    },
    {
      q: t("Do you offer stump removal and grinding?", "¿Ofrecen servicio de remoción y trituración de tocones?"),
      a: t("Yes! We offer complete stump removal and stump grinding services, either as part of a tree removal package or as a standalone service for existing stumps.", "¡Sí! Ofrecemos servicios completos de remoción y trituración de tocones como paquete o servicio independiente."),
    },
    {
      q: t("What areas do you serve for tree & brush removal?", "¿Qué áreas cubren para remoción de árboles y maleza?"),
      a: t("We proudly serve Horn Lake and a 50-mile radius across Mississippi (Southaven, Olive Branch, Hernando, Oxford, etc.), Tennessee (Memphis, Germantown, Collierville, etc.), and Arkansas (West Memphis, Marion).", "Servimos a Horn Lake y 50 millas a la redonda en Mississippi, Tennessee y Arkansas."),
    },
    {
      q: t("Do you provide bilingual communication?", "¿Ofrecen servicio de comunicación bilingüe?"),
      a: t("Yes! Our team speaks both English and Spanish fluently, ensuring seamless communication from quote to final walkthrough.", "¡Sí! Nuestro equipo habla inglés y español con fluidez para una comunicación clara."),
    },
  ];

  const addOns = [
    { title: t("Lawn Mowing & Maintenance", "Cortado de Césped"), desc: t("Keep newly cleared lawn areas pristine", "Mantenga impecables las áreas de césped despejadas"), icon: Scissors },
    { title: t("Landscaping & Design", "Paisajismo y Diseño"), desc: t("Replant, install mulch & beautify cleared space", "Replante, instale mantillo y embellezca el espacio"), icon: Trees },
    { title: t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"), desc: t("Driveway repair, site grading & topsoil delivery", "Reparación de entradas, nivelación y tierra"), icon: Truck },
    { title: t("Cleaning Services", "Servicios de Limpieza"), desc: t("Commercial janitorial & residential deep clean", "Limpieza comercial de oficinas y residencial"), icon: Sparkles },
    { title: t("Brush Clearing & Land Reclamation", "Limpieza de Terrenos"), desc: t("Large acreage land clearing & lot prep", "Limpieza de grandes terrenos y preparación de lotes"), icon: Sprout },
  ];

  return (
    <div className="bg-white text-[#111111] overflow-hidden">
      
      {/* ── HERO BANNER SECTION ────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7F7F7] via-white to-white border-b border-slate-100">
        <div aria-hidden className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1B5E20]/8 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-6 shadow-xs">
                <Trash2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Heavy Vegetation & Tree Management", "Manejo de Vegetación Pesada y Árboles")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Tree & Brush ", "Remoción de Árboles y ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Removal", "Maleza")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Professional Tree and Vegetation Management You Can Trust", "Manejo Profesional de Árboles y Vegetación en el que Puede Confiar")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "Trees and brush can quickly become more than just an eyesore—they can pose serious safety hazards, block access, and damage your property. At Brown Lawn Care & Cleaning Service, we provide professional tree and brush removal services that are safe, efficient, and thorough. With over 15 years of experience, our family-owned team has the expertise and equipment to handle everything from small saplings to storm-damaged trees and overgrown brush on large properties. We're licensed, insured, and bonded, so you can trust us with your property's safety and beauty.",
                  "Los árboles y la maleza pueden convertirse rápidamente en un peligro de seguridad. En Brown Lawn Care & Cleaning Service, ofrecemos servicios profesionales de remoción de árboles y maleza que son seguros, eficientes y exhaustivos. Con más de 15 años de experiencia, nuestro equipo familiar tiene la capacidad y equipos necesarios."
                )}
              </p>

              {/* Quick Info Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  {t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#2E7D32]" />
                  {t("15+ Years Experience", "15+ Años de Experiencia")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#2E7D32]" />
                  {t("Full Debris Haul-Off", "Retiro Completo de Escombros")}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:6625711048"
                  className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/50 shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FFD54F] fill-current" />
                  <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-[#111111] hover:bg-[#222222] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>{t("Get Free Tree Quote", "Cotización de Árboles Gratis")}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={serviceTreeRemoval}
                  alt="Professional Tree Removal and Equipment"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Heavy Equipment & Safety First", "Equipos Pesados y Prioridad en Seguridad")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Tree Cutting, Pruning & Stump Grinding", "Corte de Árboles, Poda y Trituración")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR TREE REMOVAL SERVICES SECTION ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Tree Services", "Servicios de Árboles")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Tree Removal & Maintenance Services", "Nuestros Servicios de Remoción y Poda de Árboles")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From small sapling removal to large hazardous tree sectioning and emergency storm damage dispatch.",
                "Desde la eliminación de retoños hasta el corte de árboles grandes peligrosos y emergencias por tormentas."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Small Tree Cutting & Removal */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <TreeDeciduous className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Small Tree Cutting & Removal", "Corte y Remoción de Árboles Pequeños")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Not every tree removal requires heavy machinery. We specialize in the safe, professional cutting and removal of small trees, saplings, and unwanted woody growth that clutter your landscape or block sunlight.",
                    "No toda remoción requiere maquinaria pesada. Nos especializamos en el corte y remoción profesional de árboles pequeños y retoños."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("What's Included:", "Lo Que Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {smallTreeOffers.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Large Tree Removal */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Trash2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Large Tree Removal", "Remoción de Árboles Grandes")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "When larger trees become hazardous, diseased, or unstable near structures, professional removal is critical. Our experienced team safely removes large trees using sectional cutting and rigging equipment.",
                    "Cuando los árboles grandes representan un peligro cerca de estructuras, la remoción profesional es crítica. Desmontamos por secciones con seguridad."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Services Include:", "Los Servicios Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {largeTreeOffers.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Storm Damage & Emergency Tree Removal */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <AlertTriangle className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Storm Damage & Emergency Removal", "Daños por Tormenta y Emergencias")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Severe weather can leave trees uprooted or blocking driveways and roofs. We offer rapid emergency dispatch during business hours to clear fallen limbs, secure your site, and restore safety.",
                    "El clima severo puede dejar árboles caídos o bloqueando entradas. Ofrecemos despacho de emergencia rápido en horario comercial para despejar accesos."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Emergency Response Includes:", "La Respuesta de Emergencia Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {emergencyResponseOffers.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: Deadwood Removal */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Deadwood Removal", "Remoción de Madera Muerta")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Dead branches are not only unsightly—they are safety hazards waiting to drop. Our deadwood removal service eliminates dangerous decaying branches before they fall on vehicles or family members.",
                    "Las ramas muertas son peligros de caída imprevistos. Eliminamos ramas podridas antes de que causen lesiones o daños."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Key Benefits:", "Beneficios Clave:")}
                  </h4>
                  <ul className="space-y-2">
                    {deadwoodBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 5: Tree Trimming & Pruning */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Tree Trimming & Pruning", "Poda y Mantenimiento de Árboles")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Not all tree issues require complete removal. Our professional trimming and pruning services maintain canopy structural health, improve overall property appearance, and eliminate hazardous overhanging limbs.",
                    "No todos los problemas requieren remoción total. Nuestros servicios de poda profesional mantienen la salud del árbol y eliminan ramas peligrosas."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Trimming Services:", "Servicios de Poda:")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trimmingServices.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR BRUSH REMOVAL & LAND CLEARING SECTION ───────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Land Reclamation", "Recuperación de Terrenos")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Brush Removal & Land Clearing Services", "Servicios de Limpieza de Maleza y Terrenos")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "Clear thick overgrown vegetation, briars, boundary lines, and unmanageable lots to reclaim your usable land.",
                "Limpie vegetación densa, zarzas, líneas de propiedad y terrenos desbordados para recuperar su espacio."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-4">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#111111]">
                  {t("Brush Cutting & Clearing", "Corte y Limpieza de Maleza")}
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                  {t("Overgrown vegetation reduces usable space and creates fire hazards. We clear thick brush, briars, thorny bushes, and wild thickets mechanically.", "La vegetación desbordada reduce el espacio útil. Limpiamos maleza espesa, zarzas y matorrales.")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-4">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#111111]">
                  {t("Property Line Clearing", "Limpieza de Líneas de Propiedad")}
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                  {t("Maintain clear boundaries along fence lines, property borders, and easements to restore access, visibility, and security.", "Mantenga límites claros en cercas y bordes de propiedad para restaurar visibilidad y acceso.")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-4">
                  <Trees className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#111111]">
                  {t("Overgrown Yard Restoration", "Restauración de Jardines Desbordados")}
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                  {t("We restore wild, unmanageable yards to clean beauty—selectively removing wild overgrowth while preserving healthy specimen trees.", "Restauramos jardines salvajes a una belleza limpia, eliminando el exceso de vegetación salvaje.")}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-[#111111]">
                  {t("Driveway & Access Clearing", "Limpieza de Entradas y Accesos")}
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                  {t("Vegetation encroaching on gravel driveways, access roads, and pathways is trimmed back to maintain safe, wide vehicle clearance.", "Recortamos la vegetación que invade entradas de grava y caminos para mantener un paso vehículo seguro.")}
                </p>
              </div>
            </div>

          </div>

          {/* Special Image Feature Box */}
          <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-3">
                <HardHat className="w-3.5 h-3.5" />
                <span>{t("Heavy Land Clearing", "Limpieza Pesada de Terrenos")}</span>
              </div>
              <h3 className="text-2xl font-black text-[#111111]">
                {t("Mechanical Brush Cutting & Debris Haul-Off", "Corte Mecánico de Maleza y Retiro de Escombros")}
              </h3>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                {t(
                  "We utilize heavy-duty brush cutters, wood chippers, and dump trailers to clear acres of thick vegetation efficiently. We don't just cut—we chip and haul away every branch so your property is clean and ready for immediate building, landscaping, or agricultural use.",
                  "Utilizamos trituradoras de madera y remolques para limpiar hectáreas de vegetación de manera eficiente. Trituramos y retiramos cada rama."
                )}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="tel:6625711048"
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-5 py-3 rounded-full border border-[#D4AF37]/50 shadow-sm"
                >
                  {t("Call (662) 571-1048", "Llamar (662) 571-1048")}
                </a>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100">
                <img src={serviceBrushRemoval} alt="Brush Clearing and Land Reclamation" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── OUR 5-STEP TREE & BRUSH PROCESS ──────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Safety First Process", "Proceso Priorizando Seguridad")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Tree & Brush Removal Process", "Nuestro Proceso de Remoción de Árboles y Maleza")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#2E7D32]">{st.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-black text-[#111111] group-hover:text-[#2E7D32] transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STORM DAMAGE EMERGENCY RESPONSE PROTOCOL BOX ─────────────── */}
      <section className="py-12 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#2E7D32] text-white p-8 sm:p-10 border border-[#D4AF37]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#FFD54F] text-xs font-black uppercase tracking-widest border border-white/20">
                <AlertTriangle className="w-4 h-4 text-[#FFD54F] animate-pulse" />
                <span>{t("Emergency Dispatch During Business Hours", "Despacho de Emergencia en Horario Comercial")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#FFD54F] tracking-tight">
                {t("Fallen Trees or Severe Storm Damage?", "¿Árboles Caídos o Daños Severos por Tormentas?")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                {t(
                  "When severe weather strikes, fallen limbs and uprooted trees can block driveways, crush roofs, or threaten power lines. Call our emergency response line at (662) 571-1048. We deploy rapidly during business hours to remove hazards and secure your site.",
                  "Cuando el clima severo golpea, las ramas caídas pueden bloquear entradas o aplastar techos. Llame a nuestra línea de emergencia al (662) 571-1048."
                )}
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col gap-3">
              <a
                href="tel:6625711048"
                className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full border border-[#D4AF37]/50 shadow-xl transition active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current text-[#FFD54F]" />
                <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BROWN LAWN CARE ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Property Protection", "Protección de Propiedad")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Choose Brown Lawn Care for Tree & Brush Services?", "¿Por Qué Elegir Brown Lawn Care para Árboles y Maleza?")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-3xl bg-[#F7F7F7] border border-slate-200 hover:border-[#2E7D32] transition shadow-xs text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#111111]">{item.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL VS COMMERCIAL TREE & BRUSH ───────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Targeted Services", "Servicios Dirigidos")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Residential & Commercial Tree & Brush Services", "Servicios Residenciales y Comerciales de Árboles y Maleza")}
            </h2>

            {/* Toggle Switch */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "residential"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-700 hover:text-[#111111]"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t("Residential Services", "Servicios Residenciales")}</span>
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "commercial"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-700 hover:text-[#111111]"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{t("Commercial Services", "Servicios Comerciales")}</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mt-10 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto text-left">
            {activeTab === "residential" ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Residential Tree & Brush Removal", "Remoción Residencial de Árboles y Maleza")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Protect your home, roof, fence, and vehicles from dangerous overhanging branches while reclaiming overgrown yard space.",
                    "Proteja su hogar, techo y vehículos de ramas peligrosas mientras recupera espacio desbordado en su jardín."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Hazardous tree and dangerous limb removal", "Remoción de árboles peligrosos y ramas riesgosas"),
                    t("Overgrown yard & fence line restoration", "Restauración de jardines desbordados y cercas"),
                    t("Storm damage response for homeowners", "Respuesta de daños por tormenta para propietarios"),
                    t("Driveway and private access route clearing", "Limpieza de entradas y rutas de acceso privadas"),
                    t("Wooded lot underbrush management", "Manejo de sotobosque en terrenos arbolados"),
                    t("Stump removal and stump grinding options", "Opciones de remoción y trituración de tocones"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-[#F7F7F7] p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Commercial Lot Clearing & Tree Management", "Limpieza Comercial de Lotes y Manejo de Árboles")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Maintain safe sightlines, clear parking areas, and prepare commercial lots for land development while complying with municipality guidelines.",
                    "Mantenga líneas de visión seguras, despeje estacionamientos y prepare lotes comerciales para desarrollo."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Commercial lot clearing and acreage land prep", "Limpieza comercial de lotes y preparación de terrenos"),
                    t("Property maintenance & hazard mitigation", "Mantenimiento de propiedad y mitigación de peligros"),
                    t("Storm damage response for retail & business parks", "Respuesta de daños por tormenta en parques comerciales"),
                    t("Access roads, parking lot & signage clearing", "Limpieza de rutas de acceso y estacionamientos"),
                    t("Utility line clearance and easement upkeep", "Limpieza de líneas de servicios y servidumbres"),
                    t("Land development and site construction clearing", "Limpieza para desarrollo de terrenos y construcción"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-[#F7F7F7] p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Got Questions?", "¿Tiene Preguntas?")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Frequently Asked Questions", "Preguntas Frecuentes")}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#F7F7F7] border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#111111] hover:text-[#2E7D32] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
            {t("Complete Care", "Cuidado Completo")}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
            {t("Combine With Our Other Property Services", "Combine Con Nuestros Otros Servicios")}
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {addOns.map((add) => {
              const Icon = add.icon;
              return (
                <div key={add.title} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2E7D32] transition shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{add.title}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-snug">{add.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS (MS, TN, AR) ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                {t("Service Radius", "Radio de Servicio")}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t("Tree & Brush Removal Service Areas (50-Mile Radius)", "Áreas de Servicio de Remoción de Árboles (50 Millas)")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide professional tree cutting, land clearing, and emergency response across Horn Lake and a 50-mile radius:",
                  "Ofrecemos corte profesional de árboles, limpieza de terrenos y emergencia en Horn Lake y 50 millas a la redonda:"
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Mississippi</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  Horn Lake, Southaven, Olive Branch, Hernando, Nesbit, Walls, Tunica, Senatobia, Batesville, Oxford, and surrounding communities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Tennessee</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  Memphis, Germantown, Bartlett, Collierville, Arlington, and surrounding areas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Arkansas</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  West Memphis, Marion, and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET STARTED TODAY CTA BANNER ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Get Your Free Tree & Brush Removal Quote", "Obtenga Su Cotización Gratis de Árboles y Maleza")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Don't let hazardous trees or overgrown brush compromise your property's safety, beauty, or access. Contact Brown Lawn Care & Cleaning Service today for a free, no-obligation estimate.",
              "No permita que los árboles peligrosos o la maleza desbordada pongan en riesgo la seguridad de su propiedad. Contáctenos hoy para un presupuesto sin compromiso."
            )}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:6625711048"
              className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full border border-[#D4AF37]/50 shadow-xl transition active:scale-95 flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#FFD54F] fill-current" />
              <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-[#111111] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2"
            >
              <span>{t("Request Online Quote", "Solicitar Cotización")}</span>
              <ArrowRight className="w-4 h-4 text-[#2E7D32]" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-xs font-bold text-slate-200 flex flex-col items-center gap-1">
            <div className="text-[#FFD54F] font-black uppercase tracking-widest text-[11px]">
              Brown Lawn Care & Cleaning Service, LLC — Family Owned & Operated • 6 Years in Business • 15+ Years Experience
            </div>
            <div className="text-slate-200 text-[10px]">
              Licensed • Insured • Bonded • Bilingual Service (English & Spanish) • Proudly Serving Horn Lake & 50-Mile Radius
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
