import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Trees,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Truck,
  Building2,
  Home,
  AlertTriangle,
  Layers,
  Sun,
  CloudSun,
  Wind,
  Snowflake,
  BadgeCheck,
  Scissors,
  Trash2,
  Compass,
  FileCheck,
  Sprout,
  Shovel,
  Ruler,
  Globe,
  Users,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

import aboutHeroLandscaping from "@/assets/about-hero-landscaping.png";
import bbbLogo from "@/assets/bbb.svg";

export function LandscapingContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  const landscapeDesignOffers = [
    t("Complete landscape design consultation", "Consulta completa de diseño de paisajismo"),
    t("Custom planting plans and garden layouts", "Planes de plantación personalizados y diseño de jardines"),
    t("Hardscape integration (walkways, patios, retaining walls)", "Integración de elementos duros (caminos, patios, muros de contención)"),
    t("Drainage solutions and topsoil grading", "Soluciones de drenaje y nivelación de capa superior de tierra"),
    t("Full-service installation from concept to completion", "Instalación de servicio completo desde el concepto hasta la finalización"),
  ];

  const mulchingIncluded = [
    t("Professional-grade dark organic mulch installation", "Instalación de mantillo orgánico oscuro de calidad profesional"),
    t("Proper depth application (2-3 inches for optimal soil protection)", "Aplicación a profundidad adecuada (2-3 pulgadas para protección del suelo)"),
    t("Weed barrier installation for long-term weed control", "Instalación de barrera contra malezas para control a largo plazo"),
    t("Deep trench bed edging for clean, defined borders", "Orillado de jardineras con zanja profunda para bordes definidos"),
    t("Removal and disposal of old, faded mulch if needed", "Remoción y eliminación de mantillo viejo si es necesario"),
  ];

  const trimmingApproach = [
    t("Precision pruning for optimal natural shape and plant growth", "Poda de precisión para una forma natural y crecimiento óptimo"),
    t("Removal of dead, diseased, or damaged branches", "Remoción de ramas muertas, enfermas o dañadas"),
    t("Seasonal trimming schedules for best horticultural results", "Programas de poda estacional para mejores resultados de jardinería"),
    t("Specialized care for flowering shrubs and ornamental hedges", "Cuidado especializado para arbustos de flores y setos ornamentales"),
    t("Size control to prevent structure overgrowth and clear sightlines", "Control de tamaño para evitar el sobrecrecimiento estructural"),
  ];

  const edgingServices = [
    t("Trench edging for clean, crisp lines between turf and beds", "Orillado con zanja para líneas limpias entre césped y jardineras"),
    t("Landscape border installation (plastic, metal, or natural stone)", "Instalación de bordes de jardín (plástico, metal o piedra natural)"),
    t("Heavy-duty commercial weed barrier fabric installation", "Instalación de tela de barrera contra malezas de alta resistencia"),
    t("Professional-grade landscape staples for secure anchoring", "Grapas de paisajismo profesionales para un anclaje seguro"),
    t("Natural or decorative stone border placement", "Colocación de bordes de piedra natural o decorativa"),
  ];

  const dirtWorkServices = [
    t("Site grading and surface leveling", "Nivelación y aplanamiento del sitio"),
    t("Drainage correction and water flow management", "Corrección de drenaje y manejo del flujo de agua"),
    t("Fill dirt and premium topsoil delivery", "Entrega de tierra de relleno y tierra vegetal de primera calidad"),
    t("Spot grading for low problem areas", "Nivelación puntual para áreas bajas con problemas"),
    t("Foundation grading and water runoff protection", "Nivelación de cimientos y protección contra escorrentías"),
  ];

  const seedingServices = [
    t("Full new lawn establishment", "Establecimiento completo de nuevo césped"),
    t("Spot seeding and bare patch repair", "Siembra puntual y reparación de parches calvos"),
    t("Erosion control seeding for slopes and embankments", "Siembra de control de erosión para pendientes"),
    t("Customized seed selection for mid-south climate and soil", "Selección de semillas personalizada para el clima del sur"),
    t("Proper soil preparation, aeration, and initial fertilization", "Preparación adecuada del suelo, aireación y fertilización inicial"),
  ];

  const hardscapeOptions = [
    t("Paver patios, courtyards, and stone walkways", "Patios de adoquines, patios interiores y caminos de piedra"),
    t("Retaining walls and decorative terracing", "Muros de contención y terrazas decorativas"),
    t("Decorative stone features and rock gardens", "Elementos de piedra decorativa y jardines de rocas"),
    t("Gravel pathways, driveways, and fire pit pads", "Senderos de grava, entradas para autos y áreas de fogatas"),
    t("Outdoor gathering spaces and living features", "Espacios de reunión al aire libre y zonas de estar"),
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Consultation & Vision", "Consulta y Visión"),
      desc: t("We begin with an in-depth conversation about your goals, preferences, and budget. We assess sun exposure, soil conditions, drainage, and existing features.", "Comenzamos con una conversación detallada sobre sus objetivos, preferencias y presupuesto. Evaluamos exposición al sol, suelo y drenaje."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("Concept & Design", "Concepto y Diseño"),
      desc: t("Our team develops a customized landscape design reflecting your style and functional needs, factoring in plant selection, color schemes, and seasonal interest.", "Nuestro equipo desarrolla un diseño personalizado que refleja su estilo y necesidades funcionales con selección de plantas y colores."),
      icon: Ruler,
    },
    {
      step: "03",
      title: t("Transparent Estimate", "Cotización Transparente"),
      desc: t("You receive a detailed, itemized quote with no hidden fees. We clearly explain every element of the project so you know exactly what to expect.", "Recibe una cotización detallada y desglosada sin tarifas ocultas. Explicamos claramente cada elemento del proyecto."),
      icon: FileCheck,
    },
    {
      step: "04",
      title: t("Professional Installation", "Instalación Profesional"),
      desc: t("Our licensed, insured, and bonded team executes the design with precision and care, using top-quality materials and proven horticulturist techniques.", "Nuestro equipo certificado ejecuta el diseño con precisión y cuidado, utilizando materiales de primera calidad."),
      icon: Shovel,
    },
    {
      step: "05",
      title: t("Final Walkthrough & Guarantee", "Recorrido Final y Garantía"),
      desc: t("We review the completed project with you, address any questions, and ensure your 100% satisfaction. We stand behind our work with a full guarantee.", "Revisamos el proyecto terminado con usted y garantizamos su 100% de satisfacción con nuestro respaldo completo."),
      icon: BadgeCheck,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: t("15+ Years of Proven Experience", "15+ Años de Experiencia Comprobada"),
      desc: t("Over a decade and a half of hands-on landscaping expertise. We understand what plants thrive in the MS/TN/AR region and how to build lasting designs.", "Más de una década y media de experiencia práctica en paisajismo. Entendemos qué plantas prosperan en nuestra región."),
      icon: Award,
    },
    {
      title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
      desc: t("Full liability coverage and 100% bonding protect your home or commercial property throughout every phase of the project.", "Cobertura total de responsabilidad y fianza protegen su hogar o propiedad comercial en cada fase."),
      icon: ShieldCheck,
    },
    {
      title: t("Bilingual Communication (English & Spanish)", "Comunicación Bilingüe (Inglés y Español)"),
      desc: t("We speak fluent English and Spanish. Clear communication ensures your exact vision is understood and executed without misunderstandings.", "Hablamos inglés y español con fluidez. La comunicación clara garantiza que su visión exacta se ejecute a la perfección."),
      icon: Globe,
    },
    {
      title: t("Family-Owned & Community-Focused", "Familiar y Enfocado en la Comunidad"),
      desc: t("We're not a national franchise—we're a local family deeply rooted in Horn Lake committed to our neighbors and property managers.", "No somos una franquicia—somos una familia local comprometida con nuestros vecinos y administradores de propiedades."),
      icon: Users,
    },
    {
      title: t("Quality Materials & Workmanship", "Materiales y Mano de Obra de Calidad"),
      desc: t("We select top-tier nursery stock, heavy-duty weed fabrics, premium dark mulches, and durable hardscape materials built to last.", "Seleccionamos plantas de viveros de primer nivel, capas de tela duraderas y mantillo oscuro de alta calidad."),
      icon: Sparkles,
    },
  ];

  const seasonalServices = [
    {
      season: t("Spring", "Primavera"),
      icon: Sun,
      color: "from-emerald-600 to-green-700",
      items: [
        t("Full property spring cleanup & debris removal", "Limpieza de primavera y remoción de escombros"),
        t("Mulch refresh and garden bed preparation", "Renovación de mantillo y preparación de jardineras"),
        t("New plant, shrub, and tree installations", "Instalación de nuevas plantas, arbustos y árboles"),
        t("Lawn renovation, topsoil grading, and seeding", "Renovación de césped, nivelación y siembra"),
      ],
    },
    {
      season: t("Summer", "Verano"),
      icon: CloudSun,
      color: "from-[#2E7D32] to-[#1B5E20]",
      items: [
        t("Shrub and ornamental bush precision trimming", "Poda de precisión de arbustos y plantas ornamentales"),
        t("Continuous bed maintenance and weed management", "Mantenimiento continuo de jardineras y control de maleza"),
        t("Plant hydration, soil moisture check, and watering guidance", "Revisión de humedad del suelo y guía de riego"),
        t("Seasonal annual color plantings and floral refreshes", "Plantación de flores anuales de temporada"),
      ],
    },
    {
      season: t("Fall", "Otoño"),
      icon: Wind,
      color: "from-amber-600 to-amber-700",
      items: [
        t("Comprehensive leaf removal and autumn property cleanup", "Remoción integral de hojas y limpieza de otoño"),
        t("Mulch replenishment for winter root insulation", "Aislamiento de raíces con mantillo para el invierno"),
        t("Perennial plant health evaluation & bed cutbacks", "Evaluación de salud de plantas perennes y recortes"),
        t("Winterization prep for shrubs and landscape features", "Preparación de hibernación para arbustos y jardinería"),
      ],
    },
    {
      season: t("Winter", "Invierno"),
      icon: Snowflake,
      color: "from-slate-700 to-slate-800",
      items: [
        t("Dormant season tree & heavy shrub structural pruning", "Poda estructural de invierno en árboles y arbustos"),
        t("Hardscape installations (patios, stone borders, walkways)", "Instalaciones de hardscape (patios, bordes de piedra)"),
        t("Drainage pipe installation & site grading work", "Instalación de tuberías de drenaje y nivelación de sitio"),
        t("Early spring landscape design & master planning", "Diseño de paisajismo y planificación para la primavera"),
      ],
    },
  ];

  const addOns = [
    { title: t("Lawn Mowing & Maintenance", "Cortado de Césped"), desc: t("Regular weekly lawn care, edging & clean-off", "Cortado semanal, orillado y limpieza"), icon: Scissors },
    { title: t("Tree Care & Removal", "Cuidado de Árboles"), desc: t("Professional cutting, trimming, and safe removal", "Corte profesional, poda y remoción segura"), icon: Trash2 },
    { title: t("Brush Clearing", "Remoción de Maleza"), desc: t("Dense vegetation, thickets & overgrown land clearing", "Limpieza de vegetación densa y maleza"), icon: Sprout },
    { title: t("Gravel & Dirt Work", "Grava y Tierra"), desc: t("Driveway repair, topsoil leveling, and gravel work", "Reparación de entradas, nivelación y grava"), icon: Truck },
    { title: t("Cleaning Services", "Servicios de Limpieza"), desc: t("Commercial janitorial and residential deep cleans", "Limpieza comercial de oficinas y residencial"), icon: Sparkles },
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
                <Trees className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Custom Landscape Architecture", "Arquitectura de Paisajismo Personalizada")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Landscaping & ", "Paisajismo y ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Design", "Diseño")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Transform Your Outdoor Space Into a Masterpiece", "Transforme Su Espacio Al Aire Libre En Una Obra Maestra")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "Your outdoor environment is an extension of your home or business—a place for relaxation, recreation, and lasting first impressions. At Brown Lawn Care & Cleaning Service, we combine artistic vision with practical expertise to create stunning landscapes that enhance property value and curb appeal. From complete design overhauls to targeted enhancements, our family-owned team brings 15+ years of experience to every project.",
                  "Su entorno al aire libre es una extensión de su hogar o negocio: un lugar para el descanso y las primeras impresiones duraderas. En Brown Lawn Care & Cleaning Service, combinamos visión artística con experiencia práctica para crear paisajes impresionantes que aumentan el valor de la propiedad."
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
                  <Globe className="w-4 h-4 text-[#2E7D32]" />
                  {t("English & Spanish Service", "Servicio en Inglés y Español")}
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
                  <span>{t("Free Landscape Consultation", "Consulta de Paisajismo Gratis")}</span>
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
                  src={aboutHeroLandscaping}
                  alt="Custom Landscaping and Garden Design"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Custom Garden & Hardscape", "Diseño de Jardín y Hardscape")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("100% Satisfaction Guaranteed", "Garantía de Satisfacción del 100%")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR LANDSCAPING SERVICES GRID ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("What We Offer", "Nuestra Oferta")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Comprehensive Landscaping Services", "Servicios Integrales de Paisajismo")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From initial concept design to ongoing bed maintenance, we enhance every aspect of your outdoor living space.",
                "Desde el diseño de concepto inicial hasta el mantenimiento continuo, mejoramos cada aspecto de su espacio al aire libre."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1: Landscape Design & Installation */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Landscape Design & Installation", "Diseño e Instalación de Paisajismo")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Every great landscape starts with a thoughtful design. We work closely with you to understand your vision, property characteristics, and functional needs, then create a customized plan that brings your outdoor space to life.",
                    "Cada gran paisaje comienza con un diseño bien pensado. Trabajamos estrechamente con usted para comprender su visión y crear un plan personalizado."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("What We Offer:", "Lo Que Ofrecemos:")}
                  </h4>
                  <ul className="space-y-2">
                    {landscapeDesignOffers.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2: Mulching & Bed Maintenance */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Mulching & Bed Maintenance", "Mantillo y Mantenimiento de Jardineras")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Fresh mulch instantly transforms the appearance of any landscape while suppressing weeds, retaining soil moisture, regulating root temperature, and enriching the soil as organic mulch decomposes.",
                    "El mantillo fresco transforma instantáneamente la apariencia de cualquier paisaje mientras suprime la maleza y retiene la humedad del suelo."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("What's Included:", "Lo Que Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {mulchingIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3: Shrub & Bush Trimming */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Shrub & Bush Trimming", "Poda de Arbustos y Matorrales")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Proper pruning is both an art and a science. Our expert trimming services maintain the health, shape, and beauty of your shrubs and bushes while enhancing your overall landscape design.",
                    "La poda adecuada es tanto un arte como una ciencia. Nuestros servicios expertos mantienen la salud, forma y belleza de sus arbustos."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Our Approach:", "Nuestro Enfoque:")}
                  </h4>
                  <ul className="space-y-2">
                    {trimmingApproach.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4: Bed Edging & Weed Barrier */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Bed Edging & Weed Barrier", "Orillado de Jardineras y Barrera de Maleza")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Clean, defined bed edges create visual structure and prevent grass from invading your planting areas. We install professional-grade edging and heavy-duty weed barriers that provide lasting protection and crisp aesthetics.",
                    "Los bordes limpios y definidos crean estructura visual y evitan que el césped invada las jardineras."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Services Include:", "Los Servicios Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {edgingServices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 5: Grading & Dirt Work */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Grading & Dirt Work", "Nivelación y Trabajo de Tierra")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Proper grading is essential for drainage, foundation protection, and a healthy landscape. Our dirt work services address the foundational slope and soil needs of your property.",
                    "La nivelación adecuada es esencial para el drenaje y la protección de los cimientos de su propiedad."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Dirt Work Services:", "Servicios de Tierra:")}
                  </h4>
                  <ul className="space-y-2">
                    {dirtWorkServices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6: Seeding & Lawn Establishment */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Seeding & Lawn Establishment", "Siembra y Establecimiento de Césped")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "A lush, healthy lawn starts with proper seeding. Whether you're establishing a brand new lawn or repairing thin, damaged turf areas, we provide professional seeding for thick, durable results.",
                    "Un césped frondoso y saludable comienza con una siembra adecuada. Ofrecemos siembra profesional para resultados duraderos."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Seeding Services:", "Servicios de Siembra:")}
                  </h4>
                  <ul className="space-y-2">
                    {seedingServices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Hardscape Features Special Banner */}
          <div className="mt-10 rounded-3xl bg-[#111111] text-white p-8 border border-[#D4AF37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-md">
                <Shovel className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {t("Hardscape Features & Outdoor Living", "Construcción de Hardscape y Espacios Exteriores")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                  {t(
                    "We integrate functional and beautiful hardscape elements into your landscape architecture, including paver patios, retaining walls, stone borders, gravel pathways, and custom outdoor gathering spaces.",
                    "Integración de elementos de hardscape bellos y funcionales, incluidos patios de adoquines, muros de contención y senderos."
                  )}
                </p>
              </div>
            </div>
            <a
              href="tel:6625711048"
              className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/50 shadow-md shrink-0 whitespace-nowrap"
            >
              {t("Call (662) 571-1048", "Llamar (662) 571-1048")}
            </a>
          </div>

        </div>
      </section>

      {/* ── OUR 5-STEP DESIGN PROCESS ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Proven Methodology", "Metodología Comprobada")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Landscape Design & Build Process", "Nuestro Proceso de Diseño y Construcción")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "A seamless 5-step journey from initial concept vision to final walkthrough guarantee.",
                "Un recorrido perfecto de 5 pasos desde la visión del concepto inicial hasta el recorrido final."
              )}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="rounded-3xl bg-white p-6 border border-slate-200 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-left group"
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

      {/* ── WHY CHOOSE BROWN LAWN CARE FOR LANDSCAPING ──────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Our Competitive Advantage", "Nuestra Ventaja Competitiva")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Choose Brown Lawn Care for Landscaping?", "¿Por Qué Elegir Brown Lawn Care para Paisajismo?")}
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

      {/* ── RESIDENTIAL VS COMMERCIAL LANDSCAPING ────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Custom Tailored Solutions", "Soluciones A Medida")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Residential & Commercial Landscaping", "Paisajismo Residencial y Comercial")}
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
                <span>{t("Residential Landscaping", "Paisajismo Residencial")}</span>
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
                <span>{t("Commercial Landscaping", "Paisajismo Comercial")}</span>
              </button>
            </div>
          </div>

          {/* Active Tab Panel */}
          <div className="mt-10 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto">
            {activeTab === "residential" ? (
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Residential Landscaping Services", "Servicios de Paisajismo Residencial")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Transform your home's outdoor spaces into a personal oasis. Our residential landscaping services are tailored to your unique architectural style, family lifestyle, and budget.",
                    "Transforme los espacios al aire libre de su hogar en un oasis personal. Nuestros servicios residenciales se adaptan a su estilo de vida y presupuesto."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Front yard makeovers for stunning curb appeal", "Remodelación de jardín delantero para gran atractivo"),
                    t("Backyard retreats and private outdoor living spaces", "Refugios de jardín trasero y espacios de estar privados"),
                    t("Garden installations, shrub beds, and flower design", "Instalación de jardines, camas de arbustos y diseño floral"),
                    t("Complete property landscape renovation and overhaul", "Renovación completa del paisaje de la propiedad"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-[#F7F7F7] p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Commercial Landscape Design & Maintenance", "Diseño y Mantenimiento de Paisajismo Comercial")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Make a powerful first impression with professional commercial landscaping. We design and maintain clean, professional grounds that enhance your corporate business image and welcome clients.",
                    "Cree una primera impresión poderosa con paisajismo comercial profesional. Diseñamos y mantenemos terrenos limpios que mejoran su imagen."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Office campuses and business parks", "Campus de oficinas y parques empresariales"),
                    t("Retail centers and shopping commercial properties", "Centros comerciales y locales minoristas"),
                    t("Apartment communities and HOA common grounds", "Comunidades de apartamentos y áreas de HOA"),
                    t("Medical facilities and professional office buildings", "Instalaciones médicas y edificios de oficinas"),
                    t("Hotels, restaurants, and hospitality grounds", "Hoteles, restaurantes y terrenos de hospitalidad"),
                    t("Safety-first execution with full compliance", "Ejecución priorizando la seguridad con cumplimiento total"),
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

      {/* ── SEASONAL LANDSCAPING SERVICES ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Year-Round Excellence", "Excelencia Todo El Año")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Seasonal Landscaping Care Program", "Programa de Cuidado de Paisajismo Estacional")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.season} className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition text-left">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#111111] mb-3">{s.season}</h3>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES & EMERGENCY RESPONSE ────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Complete Property Care", "Cuidado Integral de Propiedad")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
              {t("Add-On Services & Ongoing Maintenance Plans", "Servicios Adicionales y Planes de Mantenimiento")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-medium">
              {t("Combine landscaping design with regular maintenance or emergency response for worry-free property management.", "Combine el diseño de paisajismo con mantenimiento regular o atención de emergencias.")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {addOns.map((add) => {
              const Icon = add.icon;
              return (
                <div key={add.title} className="p-5 rounded-2xl bg-white border border-slate-200 text-left hover:border-[#2E7D32] transition shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{add.title}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-snug">{add.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Emergency Box */}
          <div className="mt-10 rounded-3xl bg-[#2E7D32] text-white p-8 border border-[#D4AF37]/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#2E7D32] flex items-center justify-center shrink-0 shadow-md">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#FFD54F]">
                  {t("Storm Damage Emergency Response", "Respuesta de Emergencia por Tormentas")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold mt-0.5 max-w-2xl">
                  {t(
                    "Severe weather can devastate your landscaping. If storm damage leaves your property covered in fallen limbs or uprooted plants, we offer emergency dispatch during business hours to clear debris and secure your site.",
                    "Si los daños por tormenta dejan su propiedad cubierta de ramas caídas o plantas arrancadas, ofrecemos despacho de emergencia en horario laboral."
                  )}
                </p>
              </div>
            </div>
            <a
              href="tel:6625711048"
              className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/50 shadow-md shrink-0 whitespace-nowrap"
            >
              {t("Call Emergency (662) 571-1048", "Llamar Emergencia")}
            </a>
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
                {t("Landscaping & Design Service Areas (50-Mile Radius)", "Áreas de Servicio de Paisajismo y Diseño")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide custom landscape design, mulching, trimming, and dirt work across Horn Lake and a 50-mile radius:",
                  "Ofrecemos diseño de paisajismo, mantillo, poda y trabajos de tierra en Horn Lake y 50 millas a la redonda:"
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

      {/* ── GET STARTED TODAY CTA ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Get Started On Your Dream Landscape Today", "Comience Su Paisaje De Ensueño Hoy")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Ready to transform your outdoor space into a masterpiece? Contact Brown Lawn Care & Cleaning Service for a free, no-obligation consultation and quote. We'll listen to your vision, assess your property, and create a landscape that exceeds your expectations.",
              "¿Listo para transformar su espacio al aire libre en una obra maestra? Contáctenos hoy para una consulta gratuita sin compromiso."
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
